function toggleMenu(location) {
    var menu = document.getElementById(location + "-menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}