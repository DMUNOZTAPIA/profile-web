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
