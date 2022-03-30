window.addEventListener("load", () => {
  const menu = document.querySelector(".nav");
  const openMenuBtn = document.querySelector(".open-menu-btn");
  openMenuBtn.addEventListener("click", () => {
    menu.classList.add("open-menu");
  });
  const closeMenuBtn = document.querySelector(".close-menu-btn");
  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("open-menu");
  });
});
