document.getElementById("themeButton").addEventListener("click", function () {
  const dropdown = document.querySelector(".theme-dropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

function applyPinkTheme() {
  document.body.classList.remove("cyberpunk-theme", "minimalistic-theme");
  document.body.classList.add("pink-theme");

  document.body.style.backgroundColor = "#e3f9ff";
  var calculator = document.querySelector(".calculator");
  calculator.style.backgroundColor = "rgb(165, 96, 96)";
  document.querySelectorAll("form input").forEach(function (input) {
    input.style.backgroundColor = "transparent";
    input.style.color = "#fff";
    input.style.boxShadow =
      "-8px -8px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.2)";
  });
  document.querySelectorAll("form input.operator").forEach(function (input) {
    input.style.color = "#33ffd8";
  });
  var equalButton = document.querySelector("form input.equal");
  equalButton.style.color = "#33ffd8";
  equalButton.style.backgroundColor = "transparent";
  equalButton.style.boxShadow =
    "-8px -8px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.2)";
}

function applyCyberpunkTheme() {
  document.body.classList.remove("pink-theme", "minimalistic-theme");
  document.body.classList.add("cyberpunk-theme");

  document.body.style.backgroundColor = "#0a0f14";
  var calculator = document.querySelector(".calculator");
  calculator.style.backgroundColor = "#1a1f24";
  document.querySelectorAll("form input").forEach(function (input) {
    input.style.backgroundColor = "#0a0f14";
    input.style.color = "#00ffcc";
    input.style.boxShadow =
      "inset -4px -4px 10px #1a1f24, inset 4px 4px 10px #000000";
  });
  document.querySelectorAll("form input.operator").forEach(function (input) {
    input.style.color = "#f29e4c";
  });
  var equalButton = document.querySelector("form input.equal");
  equalButton.style.color = "#00ffcc";
  equalButton.style.backgroundColor = "#0d7377";
  equalButton.style.boxShadow = "0px 0px 20px 5px #00ffcc";
}

function applyMinimalisticTheme() {
  document.body.classList.remove("pink-theme", "cyberpunk-theme");
  document.body.classList.add("minimalistic-theme");

  document.body.style.backgroundColor = "#f0f0f0";
  var calculator = document.querySelector(".calculator");
  calculator.style.backgroundColor = "#ccc";
  document.querySelectorAll("form input").forEach(function (input) {
    input.style.backgroundColor = "#fff";
    input.style.color = "#000";
    input.style.boxShadow = "inset -1px -1px 3px #ddd, inset 1px 1px 3px #bbb";
  });
  document.querySelectorAll("form input.operator").forEach(function (input) {
    input.style.color = "#555";
  });
  var equalButton = document.querySelector("form input.equal");
  equalButton.style.color = "#fff";
  equalButton.style.backgroundColor = "#888";
  equalButton.style.boxShadow = "0px 0px 5px 1px #555";
}
