import { TMode } from "./darkMode";

/**
 * Изминение иконки луна/солнце.
 */
const changeIconMode = (mode: TMode) => {
    /**
     * Иконка для переключения темы.
     */
    const moonImg = document.querySelector('#moon') as HTMLImageElement;

    if(moonImg) {
        if(mode === 'dark') {
            moonImg.src = "/img/icon/sun.png";
        }
        if(mode === 'light') {
            moonImg.src = "/img/icon/moon.png";
        }
    }
}

export default changeIconMode;