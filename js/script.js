import { menu, menuFill } from "./modules/menu";
import { numberScroll } from "./modules/text";
import backToTop from "./modules/backToTop";

window.addEventListener('DOMContentLoaded', () => {
    menu();
    menuFill();
    numberScroll();
    backToTop();
});