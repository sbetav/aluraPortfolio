const openBtn = document.querySelector(".header__menuBtn");
const menuContainer = document.querySelector(".header__nav__list__container");
const menu = document.querySelector(".header__nav__list");

const closeBtn = document.querySelector(".header__closeBtn");

openBtn.addEventListener("click", () => {
  menuContainer.classList.add("header__nav__list__container--active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("slide-out");
  setTimeout(() => {
    menuContainer.classList.add("fade-out");
  }, 200);

  setTimeout(() => {
    menu.classList.remove("slide-out");
    menuContainer.classList.remove("header__nav__list__container--active");
    menuContainer.classList.remove("fade-out");
  }, 280);
});

