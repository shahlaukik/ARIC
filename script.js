"use strict";

// Add shadow to navigation bar when scrolling
window.addEventListener("scroll", (e) => {
    const navPane = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
        navPane.classList.add("navbarShadow");
    } else {
        navPane.classList.remove("navbarShadow");
    }
});

// Toggle visibility of navigation menu on mobile
const navOptions2 = document.querySelector(".navOptions2");
function toggleNavOptions2() {
    navOptions2.classList.toggle("navOptions2Visible");
}