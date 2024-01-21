import { textMenu } from "../translation/textMenu";
import { textPublic } from "../translation/public";

//= setMenu 
/**
 * Изминения текста меню в зависимости от выбранного языка.
 * @param language - Выбраный язык.
 */
const setMenu = (language: string): void => {
    /**
     * Массив элементов меню с атрабутом "data-menu".
     */
    const menuLinks = document.querySelectorAll('[data-menu]') as NodeListOf<HTMLInputElement>;

    if(menuLinks) {
        menuLinks.forEach(link => {
            if(link?.dataset?.menu) {
                /**
                 * Отображаемый текст меню (home, our story, ...).
                 */
                const data: string = link.dataset.menu;
                if(textMenu?.[data]?.[language]) {
                    link.textContent = textMenu[data][language];
                }
            }
        });
    }

    const elementsPublic = document.querySelectorAll('[data-public]') as NodeListOf<HTMLInputElement>;

    elementsPublic.forEach(link => {
        if(link.dataset.public) {
            const data: string = link.dataset.public;

            if(data && textPublic[data] && textPublic[data][language]) {
                link.textContent = textPublic[data][language];
            }
        }
    });
}

export default setMenu;