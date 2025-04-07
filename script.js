function changeMessage() {
  const messages = [
    "Main himmat se khada hoon.",
    "Main haar nahi maanoonga.",
    "Mujhme dum hai, bas waqt mera nahi.",
    "Main aaj ro raha hoon, kal hansunga.",
    "Mujhe sirf ek chance chahiye — aur wo main dunga khud ko."
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[randomIndex];
}

function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").innerText = now.toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();