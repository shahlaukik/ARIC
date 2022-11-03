"use strict";

// Add shadow to navigation bar when scrolling
window.addEventListener("scroll", (e) => {
    const navPane = document.querySelector(".nav__pane");
    if (window.pageYOffset > 0) {
        navPane.classList.add("nav__shadow");
    } else {
        navPane.classList.remove("nav__shadow");
    }
});
