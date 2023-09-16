import { textMenu,  textMain, textOurStory} from "./textLanguage";

//= language 
const language = () => {
    // en, ru, pl
    const startLanguage = 'en';
    const arrayLanguage = ['en', 'ru'];

    const radioButtons = document.querySelectorAll('.select-language__input');
    const body = document.querySelector('.select-language__body');
    const activeRadio = document.querySelector('.select-active');
    const activeImg = activeRadio.querySelector('.select-active__img');
    const activeText = activeRadio.querySelector('.select-active__text');
    const language = localStorage.getItem('language');


    // если язык не установлен в localStorage
    if(!language) {
        // установка языка браузера в localStorage из массива предпочитаемых, en, ru, pl
        const browserLanguages = navigator.languages;
        
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
function beginningState(activeImg, activeText) {
    const language = localStorage.getItem('language');
    setSelectActive(activeImg, activeText, language);
    setMenu(language);
    setTextPage(language);
}

//* состояние при изминении выбора языка 
function eventChangeRadio(radioButtons, activeImg, activeText, body) {
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if(e.target.checked) {
                const value = e.target.value;
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
function setSelectActive(activeImg, activeText, value) {
    activeImg.src = `/img/flag/${value}.jpg`;

    switch (value) {
        case 'ru':
            activeText.textContent = 'russia';
            break;
        case 'en':
            activeText.textContent = 'english';
            break;
        default:
            activeText.textContent = '';
            break;
    }
}

//* изминение меню 
function setMenu(language) {
    const menuLinks = document.querySelectorAll('[data-menu]');
    
    menuLinks.forEach(link => {
        const data = link.dataset.menu;
        link.textContent = textMenu[data][language];
    });
}

//* изминение текста на странице
function setTextPage(language) {
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

