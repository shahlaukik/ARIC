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
  rootMargin: `-${navPaneHeight + 4}px`,
});

headerObserver.observe(header);
