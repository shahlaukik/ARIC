"use strict";

///////////////////////////////////////
//        Sticky Navigation          //
///////////////////////////////////////

const header = document.querySelector(".header");
const navPane = document.querySelector(".nav__pane");
const navPaneHeight = navPane.getBoundingClientRect().height;

const stickyCallBack = function (entries) {
    const entry = entries[0];

    if (!entry.isIntersecting) navPane.classList.add("sticky");
    else navPane.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyCallBack, {
    root: null,
    threshold: 0,
    rootMargin: `-${navPaneHeight + 10}px`,
});

headerObserver.observe(header);

/* 
 For slideshow
*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}