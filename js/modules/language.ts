import { textMenu,  textMain, textOurStory} from "./textLanguage";

//= language 
const language = () => {
    // en, ru, pl
    const startLanguage = 'en';
    const arrayLanguage = ['en', 'ru', 'pl', 'de'];

    const radioButtons = document.querySelectorAll('.select-language__input') as NodeListOf<HTMLInputElement>;
    const body = document.querySelector('.select-language__body') as HTMLDivElement;
    const activeRadio = document.querySelector('.select-active') as HTMLDivElement;
    const activeImg = activeRadio.querySelector('.select-active__img') as HTMLImageElement;
    const activeText = activeRadio.querySelector('.select-active__text') as HTMLDivElement;
    const language: string | null = localStorage.getItem('language');


    // если язык не установлен в localStorage
    if(!language) {
        // установка языка браузера в localStorage из массива предпочитаемых, en, ru, pl
        const browserLanguages = navigator.languages;
        console.log('',browserLanguages);
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
    const language = localStorage.getItem('language');
    setSelectActive(activeImg, activeText, language);
    setMenu(language);
    setTextPage(language);
}

//* состояние при изминении выбора языка 
function eventChangeRadio(radioButtons: NodeListOf<HTMLInputElement>, activeImg: HTMLImageElement, activeText: HTMLDivElement, body: HTMLDivElement) {
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event: ChangeEvent<HTMLInputElement>) => {
            if(event.target.checked) {
                const value = event.target.value;
                setSelectActive(activeImg, activeText, value);
                localStorage.setItem('language', value);
                setMenu(value);
                setTextPage(value);
            }

            body.classList.toggle('active');
        });
    });
}

//* изминение активного блока силектора 
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

//* изминение меню 
function setMenu(language: string) {
    const menuLinks = document.querySelectorAll('[data-menu]') as NodeListOf<HTMLInputElement>;;
    
    menuLinks.forEach(link => {
        const data: string = link.dataset.menu;
        link.textContent = textMenu[data][language];
    });
}

//* изминение текста на странице
function setTextPage(language: string) {
    const path = window.location.pathname;
    console.log(path);
    const elementsText = document.querySelectorAll('[data-translation]');

    let textForPage = {};

    switch(path) {
        case '/':
            textForPage = textMain;
            break;
        case '/our-story/':
            textForPage = textOurStory;
            break;
    }

    elementsText.forEach(element => {
        const data = element.dataset.translation;
        if(textForPage?.[data]?.[language]) {
            element.innerHTML = textForPage[data][language];
        }
    })
}

export default language;

