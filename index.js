var htmlBody;

function setMode() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    htmlBody.classList.add("darkmode");
    htmlBody.classList.remove("lightmode");
  } else {
    htmlBody.classList.add("lightmode");
    htmlBody.classList.remove("darkmode");
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  //const newColorScheme = e.matches ? "dark" : "light";
  setMode();
});

window.addEventListener('DOMContentLoaded', (event) => {
  htmlBody = document.getElementById("body")
  setMode();
});