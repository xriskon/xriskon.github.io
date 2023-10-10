const smallDevice = window.matchMedia("(min-width: 576px)");
const navbar = document.querySelector(".navbar");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mobileSidebar = document.querySelector(".mobile-sidebar");
const mobileBackdrop = document.querySelector(".mobile-backdrop");
const body = document.querySelector("body");
const mobileNavItems = document.querySelectorAll(".mobile-nav-item");
const dropdown = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-container");
const mobileBottomButtons = document.querySelector(".mobile-bottom-buttons");

smallDevice.onchange = (e) => handleDeviceChange(e);

window.onscroll = function () {
	handleDeviceChange(smallDevice);
	checkScroll();
};

dropdown.addEventListener("click", function () {
	dropdownContent.classList.toggle("expanded");
	mobileBottomButtons.classList.toggle("expanded");
});

[mobileNavToggle, mobileBackdrop].forEach((item) => {
	item.addEventListener("click", () => navToggle(item));
});

mobileNavItems.forEach((item) => {
	item.addEventListener("click", () => navToggle(item));
});

function navToggle(item) {
	const isExpanded = mobileNavToggle.getAttribute("data-expanded");
	if (isExpanded === "false" && item != mobileBackdrop) {
		mobileNavToggle.setAttribute("data-expanded", true);
		mobileSidebar.setAttribute("data-expanded", true);
		mobileBackdrop.setAttribute("data-expanded", true);
		body.classList.toggle("scroll-lock");
	} else if (isExpanded === "true" && !item.classList.contains("dropdown-btn")) {
		mobileNavToggle.setAttribute("data-expanded", false);
		mobileSidebar.setAttribute("data-expanded", false);
		mobileBackdrop.setAttribute("data-expanded", false);
		body.classList.toggle("scroll-lock");
		dropdownContent.classList.remove("expanded");
		mobileBottomButtons.classList.remove("expanded");
	}
}

var prevScrollpos = window.scrollY;
function handleDeviceChange(e) {
	if (!e.matches) {
		var currentScrollPos = window.scrollY;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("navbar").style.top = "0";
		} else {
			document.getElementById("navbar").style.top = "-125px";
		}
		prevScrollpos = currentScrollPos;
	}
}

function checkScroll() {
	if (window.scrollY > 200) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
}

// Run it initially
handleDeviceChange(smallDevice);

const wrapper = document.querySelector(".slideshow__wrapper");
const slideWidth = document.querySelector(".info__slideshow").clientWidth;
console.log(slideWidth);

let pressed = false;
let startX = 0;

wrapper.addEventListener("mousedown", function (e) {
	pressed = true;
	startX = e.clientX;
	this.style.cursor = "grabbing";
});

wrapper.addEventListener("mouseleave", function (e) {
	pressed = false;
});

window.addEventListener("mouseup", function (e) {
	pressed = false;
	wrapper.style.cursor = "grab";
});

wrapper.addEventListener("mousemove", function (e) {
	if (!pressed) {
		return;
	}

	this.scrollLeft += startX - e.clientX;
});
