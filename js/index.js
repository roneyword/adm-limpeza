import navMenu from "./modules/nav_menu_toggle.js";
import scrollSmooth from  "./modules/smooth_scroll.js";
import btnFloating from "./modules/btn_floating.js";

let headerHeight = document.querySelector("header").clientHeight;

navMenu();
scrollSmooth(headerHeight);
btnFloating();

window.addEventListener("resize", () => {
  headerHeight = document.querySelector("header").clientHeight;
  scrollSmooth(headerHeight);
});