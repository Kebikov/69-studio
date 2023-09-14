import { menu, menuFill } from "./modules/menu";
import { numberScroll } from "./modules/text";
import backToTop from "./modules/backToTop";
import lazyLoading from "./modules/lazyLoading";

window.addEventListener('DOMContentLoaded', () => {
    menu();
    menuFill();
    numberScroll();
    backToTop();
    lazyLoading();
});