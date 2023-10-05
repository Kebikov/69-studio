import { textMain, Trasnslate, TranslationObject} from "../translation/textIndex";
import { textMenu } from "../translation/textMenu";
import { textPublic } from "../translation/public";
import { textOurStory } from "../translation/textOurStory";

import { textProjects } from "../translation/projects";
import { textProject1 } from "../translation/project-1";
import { textProject2 } from "../translation/project-2";
import { textProject3 } from "../translation/project-3";
import { textProject4 } from "../translation/project-4";
import { textProject5 } from "../translation/project-5";
import { textProject6 } from "../translation/project-6";
import { textProject7 } from "../translation/project-7";


//= language 
const language = () => {
    //* en, ru, pl стартовый язык
    const startLanguage: string = 'pl';
    //* массив языков на сайте 
    const arrayLanguage: Array<string> = ['en', 'pl'];
    //const arrayLanguage: Array<string> = ['en', 'ru', 'pl', 'de'];

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
function setMenu(language: string): void {
    const menuLinks = document.querySelectorAll('[data-menu]') as NodeListOf<HTMLInputElement>;
    const elementsPublic = document.querySelectorAll('[data-public]') as NodeListOf<HTMLInputElement>;
    
    menuLinks.forEach(link => {
        if(link.dataset.menu) {
            const data: string = link.dataset.menu;

            if(data && textMenu[data] && textMenu[data][language]) {
                link.textContent = textMenu[data][language];
            }
        }
    });

    elementsPublic.forEach(link => {
        if(link.dataset.public) {
            const data: string = link.dataset.public;

            if(data && textPublic[data] && textPublic[data][language]) {
                link.textContent = textPublic[data][language];
            }
        }
    });
}

//* изминение текста на странице
function setTextPage(language: string) {
    const path = window.location.pathname;

    const elementsText = document.querySelectorAll('[data-translation]') as NodeListOf<HTMLDivElement>;

    const changeTranslation = (path: string) => {
        const translation: TranslationObject = {
            '/': textMain,
            '/our-story/': textOurStory,
            '/projects/': textProjects,
            '/project-1/': textProject1,
            '/project-2/': textProject2,
            '/project-3/': textProject3,
            '/project-4/': textProject4,
            '/project-5/': textProject5,
            '/project-6/': textProject6,
            '/project-7/': textProject7,
        }
        return translation[path];
    }

    let textForPage: Trasnslate = changeTranslation(path);

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

