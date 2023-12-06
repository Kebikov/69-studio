import { textMenu,  textMain, textOurStory, Trasnslate} from "./textLanguage";

/**
 * Функция установки определения и установки языка в localStorage.
 */
//= language 
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
         * Массив языков установленых в браузере вида: ["ru-RU", "ru", "en-US", "en"]
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

//= functions 

//* состояние при загрузке страницы
function beginningState(activeImg: HTMLImageElement, activeText: HTMLDivElement) {
    const language: string | null = localStorage.getItem('language');

    if(language) {
        setSelectActive(activeImg, activeText, language);
        setMenu(language);
        setTextPage(language);
    }
    
}

//* состояние при изминении выбора языка 
function eventChangeRadio(radioButtons: NodeListOf<HTMLInputElement>, activeImg: HTMLImageElement, activeText: HTMLDivElement, body: HTMLDivElement) {
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            if (event.target instanceof HTMLInputElement) {
                if(event.target.checked) {
                    const value = event.target.value;
                    setSelectActive(activeImg, activeText, value);
                    localStorage.setItem('language', value);
                    setMenu(value);
                    setTextPage(value);
                }
            }
            body.classList.toggle('active');
        });
    });
}

/**
 * Функция изминения текста и изображения у активного блока выбора языка.
 * @param activeImg - Элемент изображения с флагом.
 * @param activeText - Элемент с текстом, отражаюшем выбраный язык.
 * @param value - Значение выбраного языка (ru, pl, de...).
 */
function setSelectActive(activeImg: HTMLImageElement, activeText: HTMLDivElement, value: string) {
    activeImg.src = `/img/flag/${value}.jpg`;

    switch (value) {
        case 'ru':
            activeText.textContent = 'Russia';
            break;
        case 'en':
            activeText.textContent = 'English';
            break;
        case 'pl':
            activeText.textContent = 'Polski';
            break;
        case 'de':
            activeText.textContent = 'Deutsch';
            break;
        default:
            activeText.textContent = '';
            break;
    }
}

/**
 * Функция изминения текста меню в зависимости от выбранного языка.
 * @param language - Выбраный язык.
 */
function setMenu(language: string): void {
    /**
     * Массив элементов меню с атрабутом "data-menu".
     */
    const menuLinks = document.querySelectorAll('[data-menu]') as NodeListOf<HTMLInputElement>;
    
    menuLinks.forEach(link => {
        if(link.dataset.menu) {
            /**
             * Отображаемый текст меню (home, our story...).
             */
            const data: string = link.dataset.menu;
            if(data && textMenu[data] && textMenu[data][language]) {
                link.textContent = textMenu[data][language];
            }
        }
    });
}

//* изминение текста на странице
function setTextPage(language: string) {
    const path = window.location.pathname;

    const elementsText = document.querySelectorAll('[data-translation]') as NodeListOf<HTMLDivElement>;

    let textForPage: Trasnslate = {};

    switch(path) {
        case '/':
            textForPage = textMain;
            break;
        case '/our-story/':
            textForPage = textOurStory;
            break;
    }

    elementsText.forEach(element => {
        if(element.dataset.translation) {
            const data: string = element.dataset.translation;

            if(textForPage[data][language]) {
                element.innerHTML = textForPage[data][language];
            }
        }
    })
}

export default language;

