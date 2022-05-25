/* Image slider */
function getScrollLength() {
    let sliderImgWidth = document.querySelector(".slider img").clientWidth;
    let sliderComputedStyle = window.getComputedStyle(slider);
    let columnGap = parseInt(sliderComputedStyle.getPropertyValue("column-gap"));
    return sliderImgWidth + columnGap;
}

let slider = document.querySelector(".slider");
let next = document.querySelector(".next img");
let prev = document.querySelector(".prev img");

next.addEventListener("click", function () {
    slider.scrollLeft += getScrollLength();
});

prev.addEventListener("click", function () {
    slider.scrollLeft -= getScrollLength();
});
/* Image slider end */

/* Responsive menu */
hamburgerMenu = document.querySelector(".hamburger-menu");
closeMenu = document.querySelector(".close-menu");
nav = document.querySelector("nav");
navList = nav.querySelector("ul");
navLink = navList.querySelectorAll("a");
body = document.querySelector("body");

function toggleResponsiveNav(force) {
    nav.classList.toggle("active", force);
    ["active", "contained"].map((className) => closeMenu.classList.toggle(className, force));
    navList.classList.toggle("contained", force);
    body.classList.toggle("overflow", force);
}

hamburgerMenu.addEventListener("click", function () {
    toggleResponsiveNav(true);
});
closeMenu.addEventListener("click", function () {
    toggleResponsiveNav(false);
});

/* Hide nav after clicking the nav link in responsive mode */
navLink.forEach((linkItem) => {
    linkItem.addEventListener("click", function () {
        toggleResponsiveNav(false);
    });
});
/* Responsive menu end */
