var nav_list = document.querySelector("[data-nav-list]");
var nav_links = [...nav_list.querySelectorAll("[data-nav-link]")];
console.log(nav_list);
console.log(nav_links);

const sections = document.querySelectorAll("section");
const navLi = [...nav_list.querySelectorAll("li")];
console.log(navLi);
console.log(sections);
window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};
