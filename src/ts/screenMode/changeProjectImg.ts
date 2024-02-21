import { TMode } from "./darkMode";

/**
 * Замена элементов в блоках с проектами.
 */
const changeProjectImg = (mode: TMode) => {
    /**
     * Массив стрелок найденых на странице в блоках с проектами.
     */
    const arrows = document.querySelectorAll('[data-change="arrow"]') as NodeListOf<HTMLImageElement>;
    if(arrows instanceof NodeList && arrows.length > 0) {
        
        if(mode === 'dark') {
            arrows.forEach(item => {
                item.src = "../img/icon/arrow-white.png";
            }); 
        }

        if(mode === 'light') {
            arrows.forEach(item => {
                item.src = "../img/icon/arrow.png";
            }); 
        }

    }
}

export default changeProjectImg;
