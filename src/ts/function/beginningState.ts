import setSelectActive from "./setSelectActive";
import setMenu from "./setMenu";
import setTextPage from "./setTextPage";


//= beginningState 
/**
 * Установка состояние при загрузке страницы у элементов:
 * - Блока выбора языка, изображение и текст.
 * - Текста меню.
 * - Текста на странице.
 * @param activeImg Элемент изображения HTMLDivElement.
 * @param activeText Элемент текста HTMLDivElement.
 */
const beginningState = (activeImg: HTMLImageElement, activeText: HTMLDivElement) => {
    const language: string | null = localStorage.getItem('language');

    if(language) {
        setSelectActive(activeImg, activeText, language);
        setMenu(language);
        setTextPage(language);
    }
    
}

export default beginningState;