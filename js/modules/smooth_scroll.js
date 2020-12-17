export default function scrollSmooth(headerH) {
  const objScrool = {
    easing: "easeInQuad",
    offset: headerH,
    speed: 200
  }
  new SmoothScroll('header .nav--container a[href^="#"]', objScrool);
  new SmoothScroll('footer .footer__mapa a[href^="#"]', objScrool);
  
}