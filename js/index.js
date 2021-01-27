import navMenu from "./modules/nav_menu_toggle.js";
import scrollSmooth from  "./modules/smooth_scroll.js";
import btnFloating from "./modules/btn_floating.js";
import verifyDispositivo from "./modules/verify_dispositivo.js";
import lightBox from './modules/light_box.js';

let headerHeight = document.querySelector("header").clientHeight;

verifyDispositivo();
navMenu();
scrollSmooth(headerHeight);
btnFloating();
lightBox();

window.addEventListener("resize", () => {
  headerHeight = document.querySelector("header").clientHeight;
  scrollSmooth(headerHeight);
});