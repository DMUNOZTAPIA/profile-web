// select the button and the style.
const button = document.getElementById("change--style");
const styleCss = document.getElementById("style");

//active style.
let activeStyle = "style.css";

// add event to the button.
button.addEventListener("click", () => {
  //change styles.
  if (activeStyle === "style.css") {
    styleCss.href = "style-dark-mode.css";
    activeStyle = "style-dark-mode.css";
  } else {
    styleCss.href = "style.css";
    activeStyle = "style.css";
  }
});

document.getElementById("img1").addEventListener("click", function() {
  window.open("https://dmunoztapia.github.io/imc-calculator/", "_blanck");
});
document.getElementById("img2").addEventListener("click", function() {
  window.open("https://dmunoztapia.github.io/Snake-Game/", "_blanck");
});
document.getElementById("img3").addEventListener("click", function() {
  window.open("https://dmunoztapia.github.io/vo2max/", "_blanck");
});
document.getElementById("img4").addEventListener("click", function() {
  window.open("https://dmunoztapia.github.io/Calculadora2/", "_blanck");
});
document.getElementById("img5").addEventListener("click", function() {
  window.open("https://dmunoztapia.github.io/calculador-promedio/", "_blanck");
});
