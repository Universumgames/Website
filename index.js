var htmlBody;
var connectives;

function setMode() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    htmlBody.classList.add("darkmode");
    htmlBody.classList.remove("lightmode");
    Array.from(connectives).forEach(element => {
      element.classList.add("darkmode");
      element.classList.remove("lightmode");
    });
  } else {
    htmlBody.classList.add("lightmode");
    htmlBody.classList.remove("darkmode");
    Array.from(connectives).forEach(element => {
      element.classList.add("lightmode");
      element.classList.remove("darkmode");
    });
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  //const newColorScheme = e.matches ? "dark" : "light";
  setMode();
});

window.addEventListener('DOMContentLoaded', (event) => {
  htmlBody = document.getElementById("body")
  connectives = document.getElementsByClassName("connections");
  setMode();
});