import { menu, menuFill } from "./modules/menu";
import { numberScroll } from "./modules/text";
import backToTop from "./modules/backToTop";
import lazyLoading from "./modules/lazyLoading";
import language from "./modules/language";

window.addEventListener('DOMContentLoaded', () => {
    menu();
    menuFill();
    numberScroll();
    backToTop();
    lazyLoading();
    language();
});