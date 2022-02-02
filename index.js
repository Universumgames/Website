var htmlBody
var connectives

function setMode() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        htmlBody.classList.add("darkmode")
        htmlBody.classList.remove("lightmode")
        Array.from(connectives).forEach((element) => {
            element.classList.add("darkmode")
            element.classList.remove("lightmode")
        })
    } else {
        htmlBody.classList.add("lightmode")
        htmlBody.classList.remove("darkmode")
        Array.from(connectives).forEach((element) => {
            element.classList.add("lightmode")
            element.classList.remove("darkmode")
        })
    }
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    //const newColorScheme = e.matches ? "dark" : "light";
    setMode()
})

window.addEventListener("DOMContentLoaded", async (event) => {
    htmlBody = document.getElementById("body")
    connectives = document.getElementsByClassName("connections")
    setMode()

    var data = {
        githubIcon: "svg/github.svg",
        twitterIcon: "svg/twitter.svg",
        webIcon: "svg/website.svg",
        mailIcon: "svg/mail.svg"
    }

    for (const key in data) {
        let ele = document.getElementById(key)
        if (ele != undefined) ele.innerHTML = await (await fetch(window.location.origin + "/" + data[key])).text()
    }
})
