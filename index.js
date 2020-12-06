var htmlBody = htmld.getElementsByTagName("body")[0];

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  htmlBody.classList.add("darkmode");
  htmlBody.classList.remove("lightmode");
} else {
  htmlBody.classList.add("lightmode");
  htmlBody.classList.remove("darkmode");
}