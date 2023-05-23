const navbar = document.getElementById("navbar");
const navList = document.getElementById("nav-list");
const navToggle = document.getElementById("mobile-nav-toggle");
const navLinks = document.querySelectorAll(".nav-list li");
const hero = document.getElementById("hero");
const html = document.querySelector("html");

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

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

[navToggle, navList].forEach((item) => {
    item.addEventListener("click", () => {
        const visibility = navList.getAttribute("data-visible");
        if (visibility === "false") {
            navList.setAttribute("data-visible", true);
            navToggle.setAttribute("aria-expanded", true);
            html.classList.add("html-locked");
        } else if (visibility === "true") {
            navList.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
            html.classList.remove("html-locked");
        }
    });
});
