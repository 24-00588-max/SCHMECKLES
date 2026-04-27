const DEFAULT_USERS = [
  { id: "1001", name: "Alex", pin: "111", lambda: 0 },
  { id: "1002", name: "William", pin: "121", lambda: 0 },
  { id: "1003", name: "Noah", pin: "131", lambda: 0 },
  { id: "1004", name: "Ariel", pin: "141", lambda: 0 },
  { id: "1005", name: "Leon", pin: "151", lambda: 0 },
  { id: "1006", name: "Pablo", pin: "161", lambda: 0 },
  { id: "1007", name: "Miya", pin: "171", lambda: 0 },
  { id: "1008", name: "Lexie", pin: "181", lambda: 0 },
  { id: "1009", name: "Sophia", pin: "191", lambda: 0 },
  { id: "1010", name: "Chloe", pin: "201", lambda: 0 }
];

// 🧠 INIT DATABASE ONCE
if (!localStorage.getItem("schmeckles_data")) {
  localStorage.setItem("schmeckles_data", JSON.stringify(DEFAULT_USERS));
}

// 📦 GET USERS
function getUsers() {
  return JSON.parse(localStorage.getItem("schmeckles_data"));
}

// 💾 SAVE USERS
function saveUsers(users) {
  localStorage.setItem("schmeckles_data", JSON.stringify(users));
}

// 🔍 FIND USER
function findUser(name, pin) {
  return getUsers().find(u =>
    u.name.toLowerCase() === name.toLowerCase() &&
    u.pin === pin
  );
}

// 🪙 UPDATE λ (NOW PERSISTENT)
function updateLambda(id, amount) {
  let users = getUsers();

  const user = users.find(u => u.id === id);
  if (user) {
    user.lambda += amount;
  }

  saveUsers(users);
}