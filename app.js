import { USERS } from "./database.js";

window.login = function () {
  const name = document.getElementById("name").value;
  const pin = document.getElementById("pin").value;
  const result = document.getElementById("result");

  const user = USERS.find(u =>
    u.name.toLowerCase() === name.toLowerCase() &&
    u.pin === pin
  );

  if (user) {
    result.innerHTML = `
      <h3>Welcome ${user.name}</h3>
      <p>λ: ${user.lambda}</p>
      <p>ID: ${user.id}</p>
    `;
    result.style.color = "lightgreen";
  } else {
    result.innerText = "Access denied.";
    result.style.color = "red";
  }
};
