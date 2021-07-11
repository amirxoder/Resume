const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close");
const navList = document.getElementById("nav-list");
const navLink = document.querySelectorAll(".nav__link");
const icons = document.querySelector(".icons");
const arrow = document.querySelector(".arrow");

toggleMenu.addEventListener("click", () => {
    navList.style.right = "0"
})
closeMenu.addEventListener("click", () => {
    navList.style.right = "-100%"
})
navLink.forEach((n) => {
    n.addEventListener('click', () => {
        navList.style.right = "-100%"
    })
})

arrow.addEventListener("click", () => {
    icons.classList.toggle("left")
})