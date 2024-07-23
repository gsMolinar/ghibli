const iconMenu = document.querySelector(".btnMenu");
const menu = document.querySelector(".menu");
const closeIcon= document.querySelector(".closeIcon");
iconMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});
closeIcon.addEventListener("click", () => {
  menu.classList.toggle("show");
});