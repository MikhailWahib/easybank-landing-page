const mobileMenuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector("nav");
const navbar = document.querySelector("header");

window.onscroll = () => {
  if (scrollY > 80) {
    navbar.style.position = "fixed";
  } else {
    navbar.style.position = "relative";
  }
};

let show = false;
mobileMenuBtn.addEventListener("click", () => {
  show = !show;
  if (show) {
    mobileMenu.style.display = "flex";
    mobileMenuBtn.classList.add("close");
  } else {
    mobileMenu.style.display = "none";
    mobileMenuBtn.classList.remove("close");
  }
});
