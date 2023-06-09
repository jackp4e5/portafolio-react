// "use strict";

// const element4 = document.querySelector(".about__wraper");
// const element3 = document.querySelector(".about__title");
// const element2 = document.querySelector(".trabajos__wraper ");
// const element1 = document.querySelector(".animation");
// const hamburger = document.querySelector(".hamburger");
// const close = document.querySelector(".svg-close");
// const hamburgerSvg = document.querySelector(".svg-hamburger");
// const nav = document.querySelector(".nav");
// const ubucacion = element4.getBoundingClientRect();

// const trabajos = document.querySelector(".trabajos");
// const about = document.querySelector(".about");
// const inicio = document.querySelector(".inicio");
// let scroll;

// const href = (string) => {
//   hamburger.addEventListener("click", () => {
//     hamburger.href = `index.html#${string}`;
//   });
// };
// hamburger.addEventListener("click", () => {
//   nav.classList.toggle("active");
//   close.classList.toggle("active");
//   hamburgerSvg.classList.toggle("inactive");
// });

// window.addEventListener("scroll", () => {
//   scroll = Number(window.scrollY.toFixed(0));
//   if (scroll > 1100 && scroll < 1350) {
//     element4.classList.add("transform-y-2");
//     href("About");
//   } else if (scroll > 1000 && scroll < 1150) {
//     element3.classList.add("transform-x");
//     href("About");
//   } else if (scroll > 450 && scroll < 500) {
//     element2.classList.add("transform-y");
//     href("Trabajos");
//   } else if (scroll > 360 && scroll < 450) {
//     element1.classList.add("aparecer2");
//     href("Trabajos");
//   }
// });

// inicio.addEventListener("click", () => {
//   href("Inicio");
// });

// trabajos.addEventListener("click", () => {
//   href("Trabajos");
//   element1.classList.add("aparecer2");
//   element2.classList.add("transform-y");
// });
// about.addEventListener("click", () => {
//   href("About");
//   element1.classList.add("aparecer2");
//   element2.classList.add("transform-y");
//   element3.classList.add("transform-x");
//   element4.classList.add("transform-y-2");
// });
