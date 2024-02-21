import { TMode } from "./darkMode";

/**
 * Замена стрелки к верху страницы возврат.
 */
function changeArrawBackImg(mode: TMode) {
    /**
     * Родитель со стрелкой к верху страницы возврат.
     */
    const arrowUpDiv = document.querySelector('.back-to-top__img') as HTMLDivElement;
    if(arrowUpDiv) {
        /**
         * Стрелка к верху страницы возврат.
         */
        const arrowUpImg = arrowUpDiv.querySelector('img') as HTMLImageElement;
        if(mode === 'dark') {
            arrowUpImg.src = "../img/icon/arrow-up-white.png";
        }
        if(mode === 'light') {
            arrowUpImg.src = "../img/icon/arrow-up.png";
        }
        
    }
} 

export default changeArrawBackImg;