/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/backToTop.js":
/*!*********************************!*\
  !*** ./js/modules/backToTop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const backToTop = () => {
    try{
        const body = document.querySelector('.back-to-top__body');
        const arrowMobile = document.querySelector('.back-to-top__img-mobile');
        body.addEventListener('click', top);
        arrowMobile.addEventListener('click', top);
        function top() {
            window.scrollTo({
                top: 0,
                top: 0,
                behavior: 'smooth'
                });
                
        }
    }catch(error){
        console.log('Error in function backToTop >>> ', error);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backToTop);

/***/ }),

/***/ "./js/modules/intersectionObserver.js":
/*!********************************************!*\
  !*** ./js/modules/intersectionObserver.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// classBlock - отслеживаемый класс блока 
// classPlus - класс добавляемый к отслеживаемому блоку
// arrClassAlso - массив классов к которым так же добавится класс classPlussAlso
// classPlussAlso - класс который добавится к каждому классу в массиве

const intersectionObserver = (classBlock, classPlus, arrClassAlso, classPlussAlso) => {
    try {
        const block = document.querySelector(`.${classBlock}`);
        const divObserver = new IntersectionObserver((entryAll, observer) => {
            entryAll.forEach(item => {
                if(item.isIntersecting) {
                    item.target.classList.add(`${classPlus}`);
                    
                    addAndRemoveArrayClass(arrClassAlso, classPlussAlso, true);

                }else{
                    item.target.classList.remove(`${classPlus}`);
                    addAndRemoveArrayClass(arrClassAlso, classPlussAlso, false);
                }
            });
        },{
            rootMargin: '0px 0px 150px 0px'
        });

        divObserver.observe(block);

    } catch (error) {
        console.log('Error in function intersectionObserver >>> ', error);
    }
    
}

function addAndRemoveArrayClass(arrClassAlso, classPlussAlso, isAddClass) {
    try{
        if(Array.isArray(arrClassAlso) && arrClassAlso.length > 0 && classPlussAlso) {
            arrClassAlso.forEach(item => {
                const element = document.querySelector(`.${item}`);
                if(isAddClass) {
                    element.classList.add(`${classPlussAlso}`);
                }else{
                    element.classList.remove(`${classPlussAlso}`);
                }
            });
        }
    }catch(error){
        console.log('Error in function addAndRemoveArrayClass >>> ', error);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intersectionObserver);


    

/***/ }),

/***/ "./js/modules/language.js":
/*!********************************!*\
  !*** ./js/modules/language.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _textLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textLanguage */ "./js/modules/textLanguage.js");


//= language 
const language = () => {
    // en, ru, pl
    const startLanguage = 'en';
    const arrayLanguage = ['en', 'ru', 'pl', 'de'];

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
function setMenu(language) {
    const menuLinks = document.querySelectorAll('[data-menu]');
    
    menuLinks.forEach(link => {
        const data = link.dataset.menu;
        link.textContent = _textLanguage__WEBPACK_IMPORTED_MODULE_0__.textMenu[data][language];
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
            textForPage = _textLanguage__WEBPACK_IMPORTED_MODULE_0__.textMain;
            break;
        case '/our-story/':
            textForPage = _textLanguage__WEBPACK_IMPORTED_MODULE_0__.textOurStory;
            break;
    }

    elementsText.forEach(element => {
        const data = element.dataset.translation;
        if(textForPage?.[data]?.[language]) {
            element.innerHTML = textForPage[data][language];
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (language);



/***/ }),

/***/ "./js/modules/lazyLoading.js":
/*!***********************************!*\
  !*** ./js/modules/lazyLoading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

{/* <picture>
    <source data-srcset="../img/projects/1.webp" type="image/webp">
    <img class="lazy-img" data-src="../img/projects/1.jpg" alt="my_alt">
</picture> */}

const lazyLoading = () => {
    try{
        const imgObserver = new IntersectionObserver((entryAll, observer) => {

            entryAll.forEach((item) => {
                if(item.isIntersecting){
                    let itemTarget = item.target;
                    let parent = itemTarget.parentElement;
                    let sourceAll = parent.querySelectorAll('source');
                    sourceAll.forEach((item) => {item.srcset = item.dataset.srcset});
                    itemTarget.src = itemTarget.dataset.src;
                    itemTarget.setAttribute('src', itemTarget.dataset.src);
                    observer.unobserve(itemTarget);
                }
            });
        },{
            //тут пишем при необходимости опции
            //root:,
            rootMargin: '250px',
            threshold: 0,
        });

        const imgElAll = document.querySelectorAll('.lazy-img');
        imgElAll.forEach((item) => imgObserver.observe(item));
    }catch(error){
        console.log('Error in function lazyLoading >>> ', error);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lazyLoading);

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu),
/* harmony export */   menuFill: () => (/* binding */ menuFill)
/* harmony export */ });
/* harmony import */ var _intersectionObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intersectionObserver */ "./js/modules/intersectionObserver.js");


//= menu 
const menu = () => {
    try {
        // отслеживание появления футера, для появления стрелки вверх
        (0,_intersectionObserver__WEBPACK_IMPORTED_MODULE_0__["default"])('footer', 'active', ['back-to-top__img-mobile'], 'active');
        
        const burger = document.querySelector('.burger');
        const  burgerSpan = document.querySelector('.burger__span');
        const  menuList = document.querySelector('.menu__list');
        burger.addEventListener('click', () => {
            burgerSpan.classList.toggle('active-burger');
            menuList.classList.toggle('active-menu');
            burger.classList.toggle('active-burger');
        });
    }catch(error) {
        console.log('Error in function menu >>> ', error);
    } 
};

//= menuFill 
const menuFill = () => {
    try{
        changeHight();
        
        window.addEventListener('resize', changeHight);

        function changeHight() {
            const menu = document.querySelector('.menu');
            const menuFill = document.querySelector('.menu-fill');
    
            const menuHeight = menu.offsetHeight;
            menuFill.style.paddingTop = `${menuHeight - 1}px`;
        }
    }catch(error){
        console.log('Error in function menuFill >>> ', error);
    }
}




/***/ }),

/***/ "./js/modules/text.js":
/*!****************************!*\
  !*** ./js/modules/text.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numberScroll: () => (/* binding */ numberScroll)
/* harmony export */ });
//= numberScroll
const numberScroll = () => {
    try {
        const text69 = document.querySelector('.main-picture__text');
        if(text69){
            const text69Size = parseInt( window.getComputedStyle(text69).getPropertyValue('font-size') );
            window.addEventListener('scroll', scroll69);

            function scroll69() {
                text69.style.fontSize = `${text69Size - window.scrollY / 2}px`;
            }
        }

    } catch (error) {
        console.log('Error in function numberScroll >>> ', error);
    }
};

/***/ }),

/***/ "./js/modules/textLanguage.js":
/*!************************************!*\
  !*** ./js/modules/textLanguage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textMain: () => (/* binding */ textMain),
/* harmony export */   textMenu: () => (/* binding */ textMenu),
/* harmony export */   textOurStory: () => (/* binding */ textOurStory)
/* harmony export */ });
const textMenu = {
    home: {
        ru: 'Главная',
        en: 'Home',
        pl: 'Strona główna',
        de: 'Startseite'
    },
    'our story': {
        ru: 'наша история',
        en: 'our-story',
        pl: 'nasza historia',
        de: 'unsere Geschichte'
    },
    projects: {
        ru: 'проекты',
        en: 'projects',
        pl: 'projekty',
        de: 'Projekte'
    },
    contacts: {
        ru: 'контакты',
        en: 'contacts',
        pl: 'kontakty',
        de: 'Kontakte'
    }
}

const textMain = {
    'main title': {
        ru: 'Наши основные проекты.',
        en: 'Our Featured Projects.',
        pl: 'Nasze polecane projekty.',
        de: 'Unsere vorgestellten Projekte.'
    },

    'title project no.1': {
        ru: 'Проект №1',
        en: 'Project no.1',
        pl: 'Projekt nr.1',
        de: 'Projekt Nr.1'
    },
    'text project no.1': {
        ru: 'Я - абзац. Нажмите здесь, чтобы добавить свой собственный текст и отредактировать меня. Дайте своим пользователям узнать вас.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        de: 'Ich bin ein Paradeaph. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Lassen Sie Ihre Benutzer Sie kennenlernen.'
    },

    'title project no.2': {
        ru: 'Проект №2',
        en: 'Project no.2',
        pl: 'Projekt nr.2',
        de: 'Projekt Nr.2'
    },
    'text project no.2': {
        ru: 'Я - абзац. Нажмите здесь, чтобы добавить свой собственный текст и отредактировать меня. Дайте своим пользователям узнать вас.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        de: 'Ich bin ein Paradeaph. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Lassen Sie Ihre Benutzer Sie kennenlernen.'
    },

    'title project no.3': {
        ru: 'Проект №3',
        en: 'Project no.3',
        pl: 'Projekt nr.3',
        de: 'Projekt Nr.3'
    },
    'text project no.3': {
        ru: `Я абзац. Нажмите здесь, чтобы добавить свой собственный текст и изменить меня. Это легко. Просто нажмите кнопку "Изменить текст" или дважды щелкните меня, чтобы добавить свой собственный контент и внести изменения в шрифт. Не стесняйтесь перетащить меня в любое место на вашей странице. Я - отличное место, чтобы рассказать историю и дать пользователям немного больше о вас.<br/><br/>Это отличное место для написания длинного текста о Вашей компании и Ваших услугах. Вы можете использовать это пространство, чтобы перейти к более подробной информации о вашей компании. Расскажите о вашей команде и о том, какие услуги вы предоставляете. Расскажите своим посетителям историю о том, как вы придумали идею для своего бизнеса и что отличает вас от ваших конкурентов. Выделите свою компанию и покажите посетителям, кто вы.`,
        en: 'I am a paradeaph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a deeat place for you to tell a story and let your users know a little more about you.<br/><br/>This is a deeat space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.',
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. To jest łatwe. Wystarczy kliknąć “ Edytuj tekst ” lub dwukrotnie kliknąć mnie, aby dodać własną treść i wprowadzić zmiany w czcionce. Możesz przeciągnąć i upuścić mnie w dowolnym miejscu na swojej stronie. Jestem miejscem, w którym możesz opowiedzieć historię i poinformować użytkowników o tobie trochę więcej. < br / > < br/> Jest to miejsce na deeat do pisania długiego tekstu o Twojej firmie i twoich usługach. Możesz użyć tego miejsca, aby uzyskać bardziej szczegółowe informacje na temat swojej firmy. Porozmawiaj o swoim zespole i świadczonych usługach. Opowiedz odwiedzającym historię tego, jak wpadłeś na pomysł swojej firmy i co odróżnia cię od konkurencji. Wyróżnij swoją firmę i pokaż odwiedzającym, kim jesteś.',
        de: 'Ich bin ein Paradeaph. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Es ist einfach. Klicken Sie einfach auf "Text bearbeiten" oder doppelklicken Sie auf mich, um Ihre eigenen Inhalte hinzuzufügen und Änderungen an der Schriftart vorzunehmen. Fühlen Sie sich frei, mich per Drag & Drop überall auf Ihrer Seite. Ich bin ein Ort, an dem Sie eine Geschichte erzählen und Ihre Benutzer ein wenig mehr über Sie wissen lassen können. <br/><br/>Hier können Sie einen langen Text über Ihr Unternehmen und Ihre Dienstleistungen schreiben. Sie können diesen Bereich nutzen, um ein wenig mehr über Ihr Unternehmen zu erfahren. Sprechen Sie über Ihr Team und welche Dienstleistungen Sie erbringen. Erzählen Sie Ihren Besuchern, wie Sie auf die Idee für Ihr Unternehmen gekommen sind und was Sie von Ihren Mitbewerbern unterscheidet. Heben Sie Ihr Unternehmen hervor und zeigen Sie Ihren Besuchern, wer Sie sind.'
    },

    'title project no.4': {
        ru: 'Проект №4',
        en: 'Project no.4',
        pl: 'Projekt nr.4',
        de: 'Projekt Nr.4'
    },
    'text project no.4': {
        ru: 'Я - абзац. Нажмите здесь, чтобы добавить свой собственный текст и отредактировать меня. Дайте своим пользователям узнать вас.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        de: 'Ich bin ein Paradeaph. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Lassen Sie Ihre Benutzer Sie kennenlernen.'
    },

    'title project no.5': {
        ru: 'Проект №5',
        en: 'Project no.5',
        pl: 'Projekt nr.5',
        de: 'Projekt Nr.5'
    },
    'text project no.5': {
        ru: 'Я - абзац. Нажмите здесь, чтобы добавить свой собственный текст и отредактировать меня. Дайте своим пользователям узнать вас.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        de: 'Ich bin ein Paradeaph. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Lassen Sie Ihre Benutzer Sie kennenlernen.'
    },

    'title contacts': {
        ru: 'Оставайтесь На Связи.',
        en: 'Stay In Touch.',
        pl: 'Pozostać W Kontakcie.',
        de: 'In Kontakt Zu Bleiben.'
    },

    'adress street': {
        ru: 'Ул.Тери Франсина 500<br/>Сан-Франциско, CA 94158',
        en: '500 Terry Francine Street<br/>San Francisco, CA 94158',
        pl: '500 Terry Francine Street<br/>San Francisco, CA 94158',
        de: '500 Terry Francine Street<br/>San Francisco, CA 94158'
    },

    'phone': {
        ru: 'Тел:',
        en: 'Tel:',
        pl: 'Tel:',
        de: 'Tel:'
    },

    'fax': {
        ru: 'Факс:',
        en: 'Fax:',
        pl: 'Faks',
        de: 'Fax:'
    },

    'back to top': {
        ru: 'Вернуться наверх',
        en: 'Back to top',
        pl: 'Powrót do góry',
        de: 'Zurück nach oben'
    },
}

const textOurStory = {
    'project-block-title': {
        ru: 'о нас',
        en: 'About us',
        pl: '',
        de: ''
    },
    'project-block-text': {
        ru: 'Я абзац. Нажмите здесь, чтобы добавить свой собственный текст и изменить меня. Это легко. Просто нажмите кнопку "Изменить текст" или дважды щелкните меня, чтобы добавить свой собственный контент и внести изменения в шрифт. Не стесняйтесь перетащить меня в любое место на вашей странице. Я - отличное место, чтобы рассказать историю и дать пользователям немного больше о вас. <br/><br/>Это отличное место для написания длинного текста о Вашей компании и Ваших услугах. Вы можете использовать это пространство, чтобы перейти к более подробной информации о вашей компании. Расскажите о вашей команде и о том, какие услуги вы предоставляете. Расскажите своим посетителям историю о том, как вы придумали идею для своего бизнеса и что отличает вас от ваших конкурентов. Выделите свою компанию и покажите посетителям, кто вы.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a deeat place for you to tell a story and let your users know a little more about you.<br/><br/>This is a deeat space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.'
    },
    'title': {
        ru: 'Наша Команда.',
        en: 'Our Team.'
    },
    'back to top': {
        ru: 'Вернуться наверх',
        en: 'Back to top'
    },
    'phone': {
        ru: 'Тел.',
        en: 'Tel.'
    },
    'partner': {
        ru: 'Партнер',
        en: 'Partner'
    },
    'architect': {
        ru: 'Архитектор',
        en: 'Architect'
    },
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./js/modules/menu.js");
/* harmony import */ var _modules_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/text */ "./js/modules/text.js");
/* harmony import */ var _modules_backToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/backToTop */ "./js/modules/backToTop.js");
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/lazyLoading */ "./js/modules/lazyLoading.js");
/* harmony import */ var _modules_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/language */ "./js/modules/language.js");






window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.menu)();
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.menuFill)();
    (0,_modules_text__WEBPACK_IMPORTED_MODULE_1__.numberScroll)();
    (0,_modules_backToTop__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_language__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map