import navMenu from "./modules/nav_menu_toggle.js";
import scrollSmooth from  "./modules/smooth_scroll.js";
import lightBox from  './modules/light_box.js';


let headerHeight = document.querySelector("header").clientHeight;

navMenu();
scrollSmooth(headerHeight);
lightBox();

window.addEventListener("resize", () => {
  headerHeight = document.querySelector("header").clientHeight;
  scrollSmooth(headerHeight);
});