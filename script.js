const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const openActive = document.querySelector(".menu-bar");
const navMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", () => {
  navMenu.style.left = "0";
});

closeMenu.addEventListener("click", () => {
  navMenu.style.left = "-250px";
  // navMenu.style.width = "0";
});
