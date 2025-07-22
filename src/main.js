import { initHeaderBurger } from "./modules/headerBurger.js";
import { initPopup } from "./modules/popup.js";
import { initSlider } from "./modules/slider.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeaderBurger();
  initPopup();
  initSlider();
});