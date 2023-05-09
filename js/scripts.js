const navbar = document.getElementById("navbar");
const navList = document.getElementById("nav-list");
const navToggle = document.getElementById("mobile-nav-toggle");
const hero = document.getElementById("hero");

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add("nav-active");
    } else {
        navbar.classList.remove("nav-active");
    }
    if (window.scrollY > 210) {
        hero.classList.add("hero-off");
    } else {
        hero.classList.remove("hero-off");
    }
};

navToggle.addEventListener("click", () => {
    const visibility = navList.getAttribute("data-visible");
    if (visibility === "false") {
        navList.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        navList.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});
