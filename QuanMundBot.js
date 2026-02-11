document.addEventListener("DOMContentLoaded", () => {
  const statusBox = document.getElementById("bot-status");
  const logBox = document.getElementById("bot-log");

  function log(msg) {
    const time = new Date().toLocaleTimeString();
    logBox.innerHTML += `<div>[${time}] ${msg}</div>`;
  }

  log("QuanMundBot آماده است.");
  statusBox.innerText = "Bot Loaded ✔️";
});۸
