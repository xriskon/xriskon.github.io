const navbar = document.getElementById("navbar");
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
