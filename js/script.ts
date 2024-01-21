import { menu, menuFill } from "./modules/menu";
import { numberScroll } from "./modules/text";
import backToTop from "./modules/backToTop";
import lazyLoading from "./modules/lazyLoading";
import language from "./language/function/language";
import pushPictures from "./modules/pushPictures";
import addedImgToProject from "./modules/addedImgToProject";

window.addEventListener('DOMContentLoaded', () => {
    menu();
    pushPictures();
    addedImgToProject();
    menuFill();
    numberScroll();
    backToTop();
    language();
    lazyLoading(); 
});