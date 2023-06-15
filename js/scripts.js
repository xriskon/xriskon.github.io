const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".nav-list");
const html = document.querySelector("html");

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
    if (window.scrollY > 260) {
        hero.classList.add("hidden");
    } else {
        hero.classList.remove("hidden");
    }
};

[navToggle, navList].forEach((item) => {
    item.addEventListener("click", () => {
        const visibility = navList.getAttribute("data-visible");
        if (visibility === "false") {
            navList.setAttribute("data-visible", true);
            navToggle.setAttribute("data-expanded", true);
            html.classList.add("html-locked");
        } else if (visibility === "true") {
            navList.setAttribute("data-visible", false);
            navToggle.setAttribute("data-expanded", false);
            html.classList.remove("html-locked");
        }
    });
});
