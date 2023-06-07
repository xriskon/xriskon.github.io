const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".nav-list");
const html = document.querySelector("html");

const hero = document.querySelector(".hero");

window.onscroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 100) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
    if (window.scrollY > 210) {
        hero.classList.add("hidden");
    } else {
        hero.classList.remove("hidden");
    }
};

// const hiddenElements = document.querySelectorAll(".hidden");
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//         }
//     });
// });

// hiddenElements.forEach((el) => observer.observe(el));

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
