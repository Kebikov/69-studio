import beginningState from "./beginningState";
import eventChangeRadio from "./eventChangeRadio";


//= language 
/**
 * Стартовая функция для перевода на сайте.
 * - 1) Определяет используемые языки в браузере.
 * - 2) Устанавливает приоритетный язык в localStorage.
 * - 3) Вызывает необходимые функции для дальнейшей работы перевода сайта.
 */
const language = () => {
    /**
     * Язык по дефолту.
     */
    const startLanguage: string = 'en';
    /**
     * Массив языков доступных для перевода сайта.
     */
    const arrayLanguage: Array<string> = ['en', 'ru', 'pl', 'de'];
    /**
     * Массив 
     */
    const radioButtons = document.querySelectorAll('.select-language__input') as NodeListOf<HTMLInputElement>;
    const body = document.querySelector('.select-language__body') as HTMLDivElement;
    const activeRadio = document.querySelector('.select-active') as HTMLDivElement;
    const activeImg = activeRadio.querySelector('.select-active__img') as HTMLImageElement;
    const activeText = activeRadio.querySelector('.select-active__text') as HTMLDivElement;
    /**
     * Язык установленый для перевода в localStorage.
     */
    const language: string | null = localStorage.getItem('language');

    // если язык не установлен в localStorage
    if(!language) {
        // установка языка браузера в localStorage из массива предпочитаемых, en, ru, pl
        /**
         * Массив языков установленых в браузере вида: 
         * - ["ru-RU", "ru", "en-US", "en"]
         */
        const browserLanguages: readonly string[] = navigator.languages;
        for (var i = 0; i < browserLanguages.length; i++) {
            const cutLanguage = browserLanguages[i].slice(0,2);
            const isArrayLanguage =  arrayLanguage.includes(cutLanguage);
            // если язык есть в массиве языков сайта 
            if(isArrayLanguage) {
                localStorage.setItem('language', cutLanguage);
                break;
            }else{
                // начальное состояние, если нет языка браузера
                localStorage.setItem('language', startLanguage);
            }
        };
    }

    beginningState(activeImg, activeText);

    activeRadio.addEventListener('click', () => {
        body.classList.toggle('active');
    });

    eventChangeRadio(radioButtons, activeImg, activeText, body);
}

export default language;

