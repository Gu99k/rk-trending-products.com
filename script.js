const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const openActive = document.querySelector(".menu-bar");
const navMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", () => {
  navMenu.style.display = "block";
  console.log("open");
});

closeMenu.addEventListener("click", () => {
  navMenu.style.display = "none";
  console.log("close");
});
