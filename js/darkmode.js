var theme = document.getElementById("lightordark");
var toggle = document.getElementById("themetoggle");
var symbol = document.getElementById("togglesymbol")

function ThemeToggle() {
    if (theme.getAttribute("href") == "css/light.css") {
        theme.setAttribute("href", "css/dark.css");
        localStorage.setItem("isdark", "dark");
        symbol.classList.remove("bi-moon-stars-fill");
        symbol.classList.add("bi-sun");
    }
    else {
        theme.setAttribute("href", "css/light.css");
        localStorage.setItem("isdark", null);
        symbol.classList.remove("bi-sun");
        symbol.classList.add("bi-moon-stars-fill");
    }
}

toggle.addEventListener("click", ThemeToggle);

if (localStorage.getItem("isdark") == "dark") {
    ThemeToggle();
}