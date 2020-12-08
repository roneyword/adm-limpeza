
export default function navMenu() {
  const btnToggle = document.querySelector(".header--toogle-btn");
  const navMenu = document.querySelector("nav");

  btnToggle.addEventListener("click", () => {
    btnToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}
