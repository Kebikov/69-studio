/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/backToTop.ts":
/*!*********************************!*\
  !*** ./js/modules/backToTop.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Функция перехода в верх страницы
 */
var backToTop = function () {
    function top() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    try {
        var body = document.querySelector('.back-to-top__body');
        var arrowMobile = document.querySelector('.back-to-top__img-mobile');
        body.addEventListener('click', top);
        arrowMobile.addEventListener('click', top);
    }
    catch (error) {
        console.log('Error in function backToTop >>> ', error);
    }
};
exports["default"] = backToTop;


/***/ }),

/***/ "./js/modules/intersectionObserver.ts":
/*!********************************************!*\
  !*** ./js/modules/intersectionObserver.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Функция слежения за элементом
 * @param classBlock - отслеживаемый класс блока
 * @param classPlus - класс добавляемый к отслеживаемому блоку
 * @param arrClassAlso - массив классов к которым так же добавится класс classPlussAlso
 * @param classPlussAlso - класс который добавится к каждому классу в массиве
 */
var intersectionObserver = function (classBlock, classPlus, arrClassAlso, classPlussAlso) {
    try {
        var block = document.querySelector(".".concat(classBlock));
        var divObserver = new IntersectionObserver(function (entryAll) {
            entryAll.forEach(function (item) {
                if (item.isIntersecting) {
                    item.target.classList.add("".concat(classPlus));
                    addAndRemoveArrayClass(arrClassAlso, classPlussAlso, true);
                }
                else {
                    item.target.classList.remove("".concat(classPlus));
                    addAndRemoveArrayClass(arrClassAlso, classPlussAlso, false);
                }
            });
        }, {
            rootMargin: '0px 0px 150px 0px'
        });
        divObserver.observe(block);
    }
    catch (error) {
        console.log('Error in function intersectionObserver >>> ', error);
    }
};
function addAndRemoveArrayClass(arrClassAlso, classPlussAlso, isAddClass) {
    try {
        if (Array.isArray(arrClassAlso) && arrClassAlso.length > 0 && classPlussAlso) {
            arrClassAlso.forEach(function (item) {
                var element = document.querySelector(".".concat(item));
                if (!element)
                    return;
                if (isAddClass) {
                    element.classList.add("".concat(classPlussAlso));
                }
                else {
                    element.classList.remove("".concat(classPlussAlso));
                }
            });
        }
    }
    catch (error) {
        console.log('Error in function addAndRemoveArrayClass >>> ', error);
    }
}
exports["default"] = intersectionObserver;


/***/ }),

/***/ "./js/modules/language.ts":
/*!********************************!*\
  !*** ./js/modules/language.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var textLanguage_1 = __webpack_require__(/*! ./textLanguage */ "./js/modules/textLanguage.ts");
/**
 * Функция установки определения и установки языка в localStorage.
 */
//= language 
var language = function () {
    /**
     * Язык по дефолту.
     */
    var startLanguage = 'en';
    /**
     * Массив языков доступных для перевода сайта.
     */
    var arrayLanguage = ['en', 'ru', 'pl', 'de'];
    /**
     * Массив
     */
    var radioButtons = document.querySelectorAll('.select-language__input');
    var body = document.querySelector('.select-language__body');
    var activeRadio = document.querySelector('.select-active');
    var activeImg = activeRadio.querySelector('.select-active__img');
    var activeText = activeRadio.querySelector('.select-active__text');
    /**
     * Язык установленый для перевода в localStorage.
     */
    var language = localStorage.getItem('language');
    // если язык не установлен в localStorage
    if (!language) {
        // установка языка браузера в localStorage из массива предпочитаемых, en, ru, pl
        /**
         * Массив языков установленых в браузере вида: ["ru-RU", "ru", "en-US", "en"]
         */
        var browserLanguages = navigator.languages;
        for (var i = 0; i < browserLanguages.length; i++) {
            var cutLanguage = browserLanguages[i].slice(0, 2);
            var isArrayLanguage = arrayLanguage.includes(cutLanguage);
            // если язык есть в массиве языков сайта 
            if (isArrayLanguage) {
                localStorage.setItem('language', cutLanguage);
                break;
            }
            else {
                // начальное состояние, если нет языка браузера
                localStorage.setItem('language', startLanguage);
            }
        }
        ;
    }
    beginningState(activeImg, activeText);
    activeRadio.addEventListener('click', function () {
        body.classList.toggle('active');
    });
    eventChangeRadio(radioButtons, activeImg, activeText, body);
};
//= functions 
//* состояние при загрузке страницы
function beginningState(activeImg, activeText) {
    var language = localStorage.getItem('language');
    if (language) {
        setSelectActive(activeImg, activeText, language);
        setMenu(language);
        setTextPage(language);
    }
}
//* состояние при изминении выбора языка 
function eventChangeRadio(radioButtons, activeImg, activeText, body) {
    radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            if (event.target instanceof HTMLInputElement) {
                if (event.target.checked) {
                    var value = event.target.value;
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
function setSelectActive(activeImg, activeText, value) {
    activeImg.src = "/img/flag/".concat(value, ".jpg");
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
function setMenu(language) {
    /**
     * Массив элементов меню с атрабутом "data-menu".
     */
    var menuLinks = document.querySelectorAll('[data-menu]');
    var elementsPublic = document.querySelectorAll('[data-public]');
    menuLinks.forEach(function (link) {
        if (link.dataset.menu) {
            /**
             * Отображаемый текст меню (home, our story...).
             */
            var data = link.dataset.menu;
            if (data && textMenu_1.textMenu[data] && textMenu_1.textMenu[data][language]) {
                link.textContent = textMenu_1.textMenu[data][language];
            }
        }
    });
    elementsPublic.forEach(function (link) {
        if (link.dataset.public) {
            var data = link.dataset.public;
            if (data && public_1.textPublic[data] && public_1.textPublic[data][language]) {
                link.textContent = public_1.textPublic[data][language];
            }
        }
    });
}
//* изминение текста на странице
function setTextPage(language) {
    var path = window.location.pathname;
    var elementsText = document.querySelectorAll('[data-translation]');
    var changeTranslation = function (path) {
        var translation = {
            '/': textIndex_1.textMain,
            '/our-story/': textOurStory_1.textOurStory,
            '/projects/': projects_1.textProjects,
            '/project-1/': project_1_1.textProject1,
            '/project-2/': project_2_1.textProject2,
            '/project-3/': project_3_1.textProject3,
            '/project-4/': project_4_1.textProject4,
            '/project-5/': project_5_1.textProject5,
            '/project-6/': project_6_1.textProject6,
            '/project-7/': project_7_1.textProject7,
        };
        return translation[path];
    };
    var textForPage = changeTranslation(path);
    elementsText.forEach(function (element) {
        if (element.dataset.translation) {
            var data = element.dataset.translation;
            if (textForPage[data][language]) {
                element.innerHTML = textForPage[data][language];
            }
        }
    });
}
exports["default"] = language;


/***/ }),

/***/ "./js/modules/lazyLoading.ts":
/*!***********************************!*\
  !*** ./js/modules/lazyLoading.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
{ /* <picture>
    <source data-srcset="../img/projects/1.webp" type="image/webp">
    <img class="lazy-img" data-src="../img/projects/1.jpg" alt="my_alt">
</picture> */
}
var lazyLoading = function () {
    try {
        var imgObserver_1 = new IntersectionObserver(function (entryAll, observer) {
            entryAll.forEach(function (item) {
                if (item.isIntersecting) {
                    console.log(item.target);
                    var itemTarget = item.target;
                    var parent_1 = itemTarget.parentElement;
                    var sourceAll = parent_1.querySelectorAll('source');
                    sourceAll.forEach(function (item) { item.dataset.srcset ? item.srcset = item.dataset.srcset : null; });
                    if (itemTarget.dataset.src) {
                        itemTarget.src = itemTarget.dataset.src;
                        itemTarget.setAttribute('src', itemTarget.dataset.src);
                    }
                    observer.unobserve(itemTarget);
                }
            });
        }, {
            //тут пишем при необходимости опции
            //root:,
            rootMargin: '100px',
            threshold: 0,
        });
        var imgElAll = document.querySelectorAll('.lazy-img');
        console.log(imgElAll.length);
        if (imgElAll.length > 0) {
            imgElAll.forEach(function (item) { return imgObserver_1.observe(item); });
        }
    }
    catch (error) {
        console.log('Error in function lazyLoading >>> ', error);
    }
};
exports["default"] = lazyLoading;


/***/ }),

/***/ "./js/modules/menu.ts":
/*!****************************!*\
  !*** ./js/modules/menu.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.menuFill = exports.menu = void 0;
var intersectionObserver_1 = __importDefault(__webpack_require__(/*! ./intersectionObserver */ "./js/modules/intersectionObserver.ts"));
//= menu 
var menu = function () {
    try {
        // отслеживание появления футера, для появления стрелки вверх
        (0, intersectionObserver_1.default)('footer', 'active', ['back-to-top__img-mobile'], 'active');
        var burger_1 = document.querySelector('.burger');
        var burgerSpan_1 = document.querySelector('.burger__span');
        var menuList_1 = document.querySelector('.menu__list');
        burger_1 === null || burger_1 === void 0 ? void 0 : burger_1.addEventListener('click', function () {
            burgerSpan_1 === null || burgerSpan_1 === void 0 ? void 0 : burgerSpan_1.classList.toggle('active-burger');
            menuList_1 === null || menuList_1 === void 0 ? void 0 : menuList_1.classList.toggle('active-menu');
            burger_1.classList.toggle('active-burger');
        });
    }
    catch (error) {
        console.log('Error in function menu >>> ', error);
    }
};
exports.menu = menu;
//= menuFill 
var menuFill = function () {
    function changeHight() {
        var menu = document.querySelector('.menu');
        var menuFill = document.querySelector('.menu-fill');
        var menuHeight = menu.offsetHeight;
        menuFill.style.paddingTop = "".concat(menuHeight - 1, "px");
    }
    try {
        changeHight();
        window.addEventListener('resize', changeHight);
    }
    catch (error) {
        console.log('Error in function menuFill >>> ', error);
    }
};
exports.menuFill = menuFill;


/***/ }),

/***/ "./js/modules/text.ts":
/*!****************************!*\
  !*** ./js/modules/text.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.numberScroll = void 0;
//= numberScroll
var numberScroll = function () {
    try {
        var text69_1 = document.querySelector('.main-picture__text');
        var studio_1 = document.querySelector('#studio');
        var dot_1 = document.querySelector('#dot');
        if (text69_1 && studio_1 && dot_1) {
            var text69Size_1 = parseInt(window.getComputedStyle(text69_1).getPropertyValue('font-size'));
            var studioSize_1 = parseInt(window.getComputedStyle(studio_1).getPropertyValue('font-size'));
            var dotSize_1 = parseInt(window.getComputedStyle(dot_1).getPropertyValue('font-size'));
            var scroll69 = function () {
                text69_1.style.fontSize = "".concat(text69Size_1 - window.scrollY / 2, "px");
                studio_1.style.fontSize = "".concat(studioSize_1 - window.scrollY / 2, "px");
                dot_1.style.fontSize = "".concat(dotSize_1 - window.scrollY / 2, "px");
            };
            window.addEventListener('scroll', scroll69);
        }
    }
    catch (error) {
        console.log('Error in function numberScroll >>> ', error);
    }
};
exports.numberScroll = numberScroll;


/***/ }),

<<<<<<< HEAD
/***/ "./js/modules/textLanguage.ts":
/*!************************************!*\
  !*** ./js/modules/textLanguage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textOurStory = exports.textMain = exports.textMenu = void 0;
/**
 * Обьект с обьектами названий меню ( textMenu.home.ru: 'Главная' ).
 */
exports.textMenu = {
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
};
/**
 * Обьект, содержащий обьекты с текстом для страницы:
 * - Главная.
 */
exports.textMain = {
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
        ru: "\u042F \u0430\u0431\u0437\u0430\u0446. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0438 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F. \u042D\u0442\u043E \u043B\u0435\u0433\u043A\u043E. \u041F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442\" \u0438\u043B\u0438 \u0434\u0432\u0430\u0436\u0434\u044B \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u043C\u0435\u043D\u044F, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0438 \u0432\u043D\u0435\u0441\u0442\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0448\u0440\u0438\u0444\u0442. \u041D\u0435 \u0441\u0442\u0435\u0441\u043D\u044F\u0439\u0442\u0435\u0441\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u043C\u0435\u043D\u044F \u0432 \u043B\u044E\u0431\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u043D\u0430 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u042F - \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0438 \u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u0432\u0430\u0441.<br/><br/>\u042D\u0442\u043E \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u0434\u043B\u044F \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0434\u043B\u0438\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u043E \u0412\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u0412\u0430\u0448\u0438\u0445 \u0443\u0441\u043B\u0443\u0433\u0430\u0445. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u0438 \u043E \u0442\u043E\u043C, \u043A\u0430\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044F\u043C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u0432\u044B \u043F\u0440\u0438\u0434\u0443\u043C\u0430\u043B\u0438 \u0438\u0434\u0435\u044E \u0434\u043B\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0447\u0442\u043E \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442 \u0432\u0430\u0441 \u043E\u0442 \u0432\u0430\u0448\u0438\u0445 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432. \u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u0441\u0432\u043E\u044E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E \u0438 \u043F\u043E\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044F\u043C, \u043A\u0442\u043E \u0432\u044B.",
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
};
/**
 * Обьект, содержащий обьекты с текстом для страницы:
 * - О нас.
 */
exports.textOurStory = {
    'project-block-title': {
        ru: 'о нас',
        en: 'About us',
        pl: '',
        de: ''
    },
    'project-block-text': {
        ru: 'Я абзац. Нажмите здесь, чтобы добавить свой собственный текст и изменить меня. Это легко. Просто нажмите кнопку "Изменить текст" или дважды щелкните меня, чтобы добавить свой собственный контент и внести изменения в шрифт. Не стесняйтесь перетащить меня в любое место на вашей странице. Я - отличное место, чтобы рассказать историю и дать пользователям немного больше о вас. <br/><br/>Это отличное место для написания длинного текста о Вашей компании и Ваших услугах. Вы можете использовать это пространство, чтобы перейти к более подробной информации о вашей компании. Расскажите о вашей команде и о том, какие услуги вы предоставляете. Расскажите своим посетителям историю о том, как вы придумали идею для своего бизнеса и что отличает вас от ваших конкурентов. Выделите свою компанию и покажите посетителям, кто вы.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a deeat place for you to tell a story and let your users know a little more about you.<br/><br/>This is a deeat space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.',
        pl: '',
        de: ''
    },
    'title': {
        ru: 'Наша Команда.',
        en: 'Our Team.',
        pl: '',
        de: ''
    },
    'back to top': {
        ru: 'Вернуться наверх',
        en: 'Back to top',
        pl: '',
        de: ''
    },
    'phone': {
        ru: 'Тел.',
        en: 'Tel.',
        pl: '',
        de: ''
    },
    'partner': {
        ru: 'Партнер',
        en: 'Partner',
        pl: '',
        de: ''
    },
    'architect': {
        ru: 'Архитектор',
        en: 'Architect',
        pl: '',
        de: ''
    },
};


/***/ }),

=======
>>>>>>> f957acc9efd5dda1268a9ac6adb8a413f1c1a03d
/***/ "./js/script.ts":
/*!**********************!*\
  !*** ./js/script.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var menu_1 = __webpack_require__(/*! ./modules/menu */ "./js/modules/menu.ts");
var text_1 = __webpack_require__(/*! ./modules/text */ "./js/modules/text.ts");
var backToTop_1 = __importDefault(__webpack_require__(/*! ./modules/backToTop */ "./js/modules/backToTop.ts"));
var lazyLoading_1 = __importDefault(__webpack_require__(/*! ./modules/lazyLoading */ "./js/modules/lazyLoading.ts"));
var language_1 = __importDefault(__webpack_require__(/*! ./modules/language */ "./js/modules/language.ts"));
window.addEventListener('DOMContentLoaded', function () {
    (0, menu_1.menu)();
    (0, menu_1.menuFill)();
    (0, text_1.numberScroll)();
    (0, backToTop_1.default)();
    (0, lazyLoading_1.default)();
    (0, language_1.default)();
});


/***/ }),

/***/ "./js/translation/project-1.ts":
/*!*************************************!*\
  !*** ./js/translation/project-1.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textProject1 = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textProject1 = {
    'title': {
        pl: 'BUDYNEK BIUROWY "TECHMAR" W KIELCACH',
        en: '"TECHMAR" OFFICE BUILDING IN KIELCE',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Projekt i wygląd aktualny biura to rodzaj metamorfozy po adaptacji istniejącego budynku, termomodernizacji, wymianie instalacji i adaptacji wnętrz na nowoczesny budynek biurowy z gabinetami prezesów, recepcją, salą konferencyjną, zapleczem sanitarnym.<br/><br/>Idea budynku to korespondencja trzech brył funkcjonalnie zróżnicowanych, stąd pomysł na ich kolorystyczną separację. Część biała mieści funkcję sklepu z materiałami budowlanymi, farbami, narzędziami. Część czarna to biura zarządu, pomieszczenia pracowników, recepcja, sala konferencyjna i toalety. Betonowy element na górnej kondygnacji mieści taras i otwarte foyear do rozmów i wypoczynku przy kawie z widokiem na okolicę.<br/><br/>Wszystkie części budynku połączone komunikacyjnie z pomieszczenia holu głównego przy recepcji , na górną kondygnację prowadzą otwarte, przestrzenne , industrialne schody o konstrukcji stalowej pokrytej czarną farbą.',
        en: 'The current design and appearance of the office is a kind of metamorphosis after the adaptation of the existing building, thermal modernization, replacement of installations and interior adaptation to a modern office building with offices of presidents, reception, conference room, sanitary facilities.The idea of the building is a correspondence of three functionally diverse blocks, hence the idea for their color separation. The white part houses the function of a shop with building materials, paints and tools.<br/><br/>The black part is the management offices, staff rooms, reception, conference room and toilets. The concrete element on the upper storey houses a terrace and an open foyear for chatting and relaxing over a coffee overlooking the countryside. All parts of the building are connected by communication from the main hall at the reception, to the upper floor there are open, spacious, industrial stairs with a steel structure covered with black paint.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Powrót do strony Projektów',
        en: 'Object completed',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: ul. Witosa, Kielce<br/>Pow. działki – 2 219,87m2<br/>Pow. użytkowa budynku – 793, 00m2<br/>Pow. całkowita – 844,37m2',
        en: 'Location: ul. Witosa, Kielce<br/>area plots – 2 219,87 m2<br/>area usable area of the building – 793,00 m2<br/>area total – 844,37 m2<br/>Volume – 3 013,40 m3',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'back': {
        pl: 'Powrót do strony Projektów',
        en: 'Back to Projects page',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    }
};


/***/ }),

/***/ "./js/translation/project-2.ts":
/*!*************************************!*\
  !*** ./js/translation/project-2.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textProject2 = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textProject2 = {
    'title': {
        pl: 'DOM Z WIÓRA',
        en: 'CHIP HOUSE',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Projekt powstał w 2012r. zakup działki w pagórkowatych, wiejskich terenach pod Krakowem zmobilizował do myślenia o ekologii i naturalnych materiałach jak ceramika, drewno, kamień, szkło. Dom realizowano metodą ,,gospodarczą ‘’, oraz eksperymentalną w związku z czym budowę ukończono w 2015r.<br/><br/>Ze względu na wilgotny klimat i położenie w dolinie, zachowano tradycyjną technologię ścian z bloczków ceramicznych i elementów stropów i podciągów z betonu. Ściany pokryto szkieletem drewnianym, wypełnionym wełną mineralną, jako pokrycie użyto ,,wiór osikowy’’. Podobnie zrealizowano dach, z większą ilością warstw drewna w celu zapewnienia maksymalnej szczelności. Ściany wewnątrz pokryte tynkiem gipsowym. Podłogę w części salonowej wykonano z użyciem materiału z własnego wykopu – czyli gliny. Tradycyjne klepisko powstało jednak z myślą o komforcie użytkowania. Zamontowano na całej powierzchni ogrzewanie podłogowe – wodne oraz pokryto ubitą warstwę ziemi pokostem lnianym na gorąco.<br/><br/>Kominek wraz z funkcjami towarzyszącymi umieszczono w centralnej części domu (,,serce domu’’). Do pokrycia ścian kominka użyto naturalnego kamienia pochodzącego z Tatr Słowackich. Schody wykonano jako drewniane ,,szuflady’’ oraz  zamontowano na konstrukcji stalowej przykręconej do ściany nośnej budynku. Prostota i funkcjonalność to motto idei wyposażenia i organizacji wnętrz. Ściany pokryte białą farbą , podłogi na piętrze z drewna, meble i wyposażenie minimalistyczne ale również nawiązujące do wiejskiego klimatu.',
        en: 'The project was created in 2012. the purchase of a plot of land in hilly, rural areas near Krakow made me think about ecology and natural materials such as ceramics, wood, stone and glass. The house was built using the "economic" and experimental methods, therefore the construction was completed in 2015.<br/><br/>Due to the humid climate and location in a valley, the traditional technology of walls made of ceramic blocks and elements of ceilings and binders made of concrete has been preserved. The walls were covered with a wooden frame, filled with mineral wool, "aspen chip" was used as a cover. The roof was similarly constructed, with more layers of wood to ensure maximum airtightness. The walls inside are covered with gypsum plaster. The floor in the living room area was made using material from our own excavation - clay. However, the traditional concave was created with comfort of use in mind. Water underfloor heating was installed on the entire surface and the compacted layer of earth was covered with hot linen varnish. The fireplace with accompanying functions was placed in the central part of the house ("the heart of the house"). Natural stone from the Slovak Tatras was used to cover the walls of the fireplace. The stairs were made as wooden "drawers" and mounted on a steel structure screwed to the load-bearing wall of the building. Simplicity and functionality are the motto of the idea of furnishing and interior organization. Walls covered with white paint, wooden floors on the first floor, minimalist furniture and equipment, but also referring to the rural climate.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Powrót do strony Projektów',
        en: 'Object completed',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: ul. Sarnia 8, Wysiołek Luborzycki k. Krakowa<br/>Pow. działki – 1 150m2<br/>Pow. użytkowa budynku – 327, 20m2<br/>Pow. całkowita – 512,00m2<br/>Kubatura – 1 576,56m3',
        en: 'Location: ul. Sarnia 8, Wysiołek Luborzycki near Krakow<br/>area plots – 1 150,00 m2<br/>area usable area of the building - 327, 20 m2<br/>area total - 512.00 m2<br/>Volume – 1 576,56 m3',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'back': {
        pl: 'Powrót do strony Projektów',
        en: 'Back to Projects page',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    }
};


/***/ }),

/***/ "./js/translation/project-3.ts":
/*!*************************************!*\
  !*** ./js/translation/project-3.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textProject3 = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textProject3 = {
    'title': {
        pl: 'DOM Z BETONU',
        en: 'CONCRETE HOUSE',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Projekt powstał w 2012r. zakup działki w pagórkowatych, wiejskich terenach pod Krakowem zmobilizował do myślenia o ekologii i naturalnych materiałach jak ceramika, drewno, kamień, szkło. Dom realizowano metodą ,,gospodarczą ‘’, oraz eksperymentalną w związku z czym budowę ukończono w 2015r.<br/><br/>Ze względu na wilgotny klimat i położenie w dolinie, zachowano tradycyjną technologię ścian z bloczków ceramicznych i elementów stropów i podciągów z betonu. Ściany pokryto szkieletem drewnianym, wypełnionym wełną mineralną, jako pokrycie użyto ,,wiór osikowy’’. Podobnie zrealizowano dach, z większą ilością warstw drewna w celu zapewnienia maksymalnej szczelności. Ściany wewnątrz pokryte tynkiem gipsowym. Podłogę w części salonowej wykonano z użyciem materiału z własnego wykopu – czyli gliny. Tradycyjne klepisko powstało jednak z myślą o komforcie użytkowania. Zamontowano na całej powierzchni ogrzewanie podłogowe – wodne oraz pokryto ubitą warstwę ziemi pokostem lnianym na gorąco.<br/><br/>Kominek wraz z funkcjami towarzyszącymi umieszczono w centralnej części domu (,,serce domu’’). Do pokrycia ścian kominka użyto naturalnego kamienia pochodzącego z Tatr Słowackich. Schody wykonano jako drewniane ,,szuflady’’ oraz  zamontowano na konstrukcji stalowej przykręconej do ściany nośnej budynku. Prostota i funkcjonalność to motto idei wyposażenia i organizacji wnętrz. Ściany pokryte białą farbą , podłogi na piętrze z drewna, meble i wyposażenie minimalistyczne ale również nawiązujące do wiejskiego klimatu.',
        en: 'It was supposed to be a house made of concrete and glass, but during the implementation it was decided that as a house to live in it would have too cool character and appearance. It was decided to cover the walls of the house with larch boards, which were also used for the terrace.The house consists of three floors. The underground part is almost completely immersed in the terrain, accessible from the level of the access road, where the entrance was organized.<br/><br/>There is also a garage, a boiler room, technical rooms, a gym and an open atrium connected by concrete stairs with a terrace on the ground floor. On the ground floor there is a living area with an open kitchen and dining area, a bathroom and a closed winter garden with a fireplace. On the first floor there is a sleeping area with bathrooms and dressing rooms, in one of them adjacent to the children`s rooms there is a secret door to "Narnia" - a room with a telescope and a view to the outside.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Powrót do strony Projektów',
        en: 'Object completed',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: ul. Zakamycze Kraków<br/>Pow. działki – 5 640m2<br/>Pow. użytkowa budynku – 453, 75m2<br/>Pow. całkowita – 604,37m2<br/>Kubatura – 2 251,50m3',
        en: 'Location: ul. I will close Krakow<br/>area plots – 5 640,00m2<br/>area usable area of the building – 453,75m2<br/>area total – 604,37 m2<br/>Volume – 2 251,50 m3',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'back': {
        pl: 'Powrót do strony Projektów',
        en: 'Back to Projects page',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    }
};


/***/ }),

/***/ "./js/translation/project-4.ts":
/*!*************************************!*\
  !*** ./js/translation/project-4.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textProject4 = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textProject4 = {
    'title': {
        pl: 'ZOREN-SLICZNA, BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'ZOREN-SLICZNA, RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Koncepcja budynku jest wynikiem analizy zabudowy na małej działce zaledwie 9-arowej przy ul. Ślicznej w Krakowie w dzielnicy o charakterze głównie mieszkalno-usługowej.<br/><br/>Analiza nasłonecznienia i przesłaniania spowodowała że budynek od strony zachodniej, w górnych kondygnacjach tracił na swoich walorach poprzez ograniczanie obrysu poszczególnych kondygnacji -,,schodkowanie’’. Zdecydowano że bryła nabierze charakteru, a jednocześnie nie straci na pojemności przez zastosowanie fragmentu elewacji skośnej.<br/><br/>Ciemny kolor tynku/okładziny , elementy drewniane na balkonach dodatkowo wzmocniły doznanie estetyczne.<br/><br/>Budynek posiada 5 kondygnacji naziemnych o funkcji mieszkaniowej, jedną kondygnację podziemną z funkcją parkingu, pomieszczeń technicznych i komórek lokatorskich.',
        en: 'The concept of the building is the result of an analysis of the development on a small plot of only 9 ares at ul. Śliczna in Krakow, in a residential and commercial district. The analysis of insolation and obscuration meant that the building on the west side, in the upper storeys, lost its values by limiting the outline of individual storeys - "stepping". It was decided that the block would gain character and at the same time not lose its capacity by using a fragment of the slanted façade. The dark color of the plaster/cladding, wooden elements on the balconies additionally enhanced the aesthetic experience. The building has 5 above-ground storeys with a residential function, one underground storey with a parking function, technical rooms and storage rooms.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Obiekt w trakcie realizacji, po uzyskaniu decyzji pozwolenia na budowę',
        en: 'The facility is under construction, after obtaining a building permit',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: ul. Śliczna Kraków<br/>Pow. działki – 900m2<br/>Pow. użytkowa budynku – 1 121, 60 m2<br/>Pow. całkowita – 1 580,60 m2<br/>Kubatura – 6 741 m3',
        en: 'Location: ul. Beautiful Krakow<br/>area plots – 900,00m2<br/>area usable area of the building – 1 121,60m2<br/>area total – 1 580,60 m2<br/>Volume – 6 741,00m3',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'back': {
        pl: 'Powrót do strony Projektów',
        en: 'Back to Projects page',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    }
};


/***/ }),

/***/ "./js/translation/project-5.ts":
/*!*************************************!*\
  !*** ./js/translation/project-5.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textProject5 = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textProject5 = {
    'title': {
        pl: 'BRZYCZYNA, OSIEDLE DOMÓW',
        en: 'BRZYCZYNA, ESTATE OF HOUSES',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Projekt osiedla powstał z myślą o wykorzystaniu malowniczej działki widokowej na potrzeby mieszkańców którzy pragną oderwać się od zgiełku aglomeracji i w niedalekiej odległości od <br/><br/>Krakowa (15km czas dojazdu 25min.) i zamieszkać w komfortowym nowoczesnym osiedlu domków z parkingami, placem zabaw, altaną i ogniskiem. Zaprojektowano dwa etapy na działce wielkości 8 400 m2.<br/><br/>W I etapie zostanie zrealizowanych 6 domów w zabudowie bliźniaczej i dwa domy wolnostojące, czyli 8 jednostek mieszkalnych. Jeden domek ma około 150m2 powierzchni użytkowej. W domku znajdują się : na parterze hall z garderobą, klatka schodowa, salon z kuchnią, gabinet, wc i pomieszczenie techniczno-gospodarcze, na piętrze : sypialnia ,,master’’ z łazienką i garderobą, duża łazienka i dwie sypialnie. Ze względu na specyficzną geometrię dachu, wykorzystano jeszcze tę powierzchnię na strych użytkowy o metrażu około 50m2 gdzie można zaaranżować  pomieszczenie rekreacyjne ze stołem bilardowym wraz z barkiem, salonem tv i sanitariatem.<br/><br/>Domki zaprojektowano niestandardowo w nowoczesnych formach przy użyciu wyszukanych materiałów z drewna, blachy i szlachetnych tynków.',
        en: 'The design of the estate was created with the thought of using a picturesque scenic plot for the needs of residents who want to get away from the hustle and bustle of the agglomeration and in the vicinity of Krakow.<br/><br/>(15 km, travel time 25 minutes) and live in a comfortable, modern housing estate with parking lots, a playground, a gazebo and a fireplace. Two stages were designed on a plot of 8,400 m2. In the first stage, 6 semi-detached houses and two detached houses, i.e. 8 residential units, will be built. One house has about 150 m2 of usable area. The house has: on the ground floor a hall with a wardrobe, a staircase, a living room with a kitchen, a study, a toilet and a technical and utility room, on the first floor: a master bedroom with a bathroom and a wardrobe, a large bathroom and two bedrooms. Due to the specific geometry of the roof, this space was also used for a usable attic with an area of about 50m2, where you can arrange a recreation room with a pool table with a bar, TV lounge and a toilet.The houses have been designed in a non-standard way in modern forms using sophisticated materials such as wood, sheet metal and precious plasters.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Obiekt w trakcie realizacji, po uzyskaniu decyzji pozwolenia na budowę',
        en: 'The facility is under construction, after obtaining a building permit',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'KONCPECJA I PROJEKT BUDOWLANY WYKONANO W KONSORCJUM FIRM EM STUDIO i 69.STUDIO<br/>Lokalizacja: Brzyczyna , gm. Mogilany<br/>Pow. działki Etap I – 2 197 m2<br/>Pow. użytkowa budynków – 1 061, 50 m2<br/>Pow. całkowita – 1 232, 80 m2<br/>Kubatura – 3 696 m3',
        en: 'THE CONCEPT AND CONSTRUCTION DESIGN WAS MADE IN A CONSORTIUM OF EM STUDIO and 69.STUDIO<br/>Location: Brzyczyna, gm. Mogilany<br/>area plots Stage I - 2,197 m2<br/>area usable area of buildings - 1,061.50 m2<br/>area total – 1,232.80 m2<br/>Volume - 3,696 m3<br/>',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'back': {
        pl: 'Powrót do strony Projektów',
        en: 'Back to Projects page',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    }
};


/***/ }),

/***/ "./js/translation/project-6.ts":
/*!*************************************!*\
  !*** ./js/translation/project-6.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textProject6 = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textProject6 = {
    'title': {
        pl: 'KLINY - BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'KLINY - RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Budynek zlokalizowany na bardzo wąskiej ~16m i długiej na ~180m działce w dzielnicy Kliny w Krakowie. Na tak trudnej działce zdecydowano że może powstać jedynie budynek ,,galeriowy’’ o wymiarach szer. x dł. 9mx130m.<br/><br/>Ze względu na sąsiedztwo terenów zielonych po stronie południowej, powstała idea stworzenia ,,zielonej elewacji’’, która jednak odbiega w założeniu od drogich technologicznie rozwiązań, w których wymagane jest odpowiednie zapewnianie warunków wegetacji roślin, również skomplikowanego zasilania w wodę. Pomysł polega na stworzeniu odpowiednio wkomponowanych donic na balkonach poszczególnych mieszkań, obsadzeniu zaprojektowanymi formami roślinnymi, oraz wprowadzenie wody opadowej z balkonów do donic z prostym systemem odsączania. O resztę – czyli odpowiednią pielęgnację i podlewanie mają zadbać już mieszkańcy.<br/><br/>Budynek posiada 4 kondygnacje naziemne o funkcji mieszkaniowej, ostatnia kondygnacja ma dostęp do antresoli przynależnej do mieszkań na kondygnacji 4-ej. Kondygnacja podziemna z funkcją parkingu podzielona jest na dwie niezależne strefy z oddzielnymi wjazdami i posiada również pomieszczenia techniczne i komórki lokatorskie.',
        en: 'The building is located on a very narrow ~16m and ~180m long plot in the Kliny district in Krakow. On such a difficult plot, it was decided that only a "gallery" building with dimensions of width x length 9mx130m could be built. Due to the proximity of green areas on the south side, the idea of creating a "green façade" was created, which, however, differs from technologically expensive solutions, which require adequate provision of plant vegetation conditions, including a complicated water supply.<br/><br/>The idea is to create properly integrated pots on the balconies of individual apartments, planting with designed plant forms, and introducing rainwater from the balconies to pots with a simple drainage system. The rest - i.e. proper care and watering - is to be taken care of by the residents.The building has 4 above-ground storeys with a residential function, the last storey has access to the mezzanine belonging to the apartments on the 4th storey. The underground floor with a parking function is divided into two independent zones with separate entrances and also has technical rooms and storage rooms.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Obiekt w trakcie realizacji',
        en: 'The object is under construction',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: w rejonie ul. Szwed-Śniadowskiej w Krakowie (Kliny).<br/>Kraków<br/>Pow. działki – 3 047m2<br/>Pow. użytkowa budynku – 4 584 00m2<br/>Pow. całkowita – 5 516,60m2<br/>Kubatura – 16 143m3',
        en: 'Location: in the area of ul. Szwed-Śniadowska in Krakow (Kliny).<br/>Cracow<br/>area plots – 3047,00m2<br/>area usable area of the building – 4 584,00 m2<br/>area total – 5 516,60 m2<br/>Volume – 16 143,00m3',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'back': {
        pl: 'Powrót do strony Projektów',
        en: 'Back to Projects page',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    }
};


/***/ }),

/***/ "./js/translation/project-7.ts":
/*!*************************************!*\
  !*** ./js/translation/project-7.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textProject7 = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textProject7 = {
    'title': {
        pl: 'TARNÓW – RESTAURACJA NA WZGÓRZU ZGŁOBICE',
        en: 'TARNÓW – RESTAURANT ON THE ZGŁOBICE HILL',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Koncepcja obiektu na wzgórzu ,,Zgłobice’’ pod Tarnowem. Zadaniem było uzyskać formę która byłaby akcentem i dominantą a jednocześnie reklamą budynku usługowego w charakterystycznym miejscu przy trasie 94 z Krakowa do Tarnowa. Założenie obejmuje 3 kondygnacje usług w tym część podziemna ze sklepem kolonialnym, zapleczem magazynowym, technicznym, sanitariatami. Piętro o funkcji restauracyjnej z tarasami widokowymi i najwyższa kondygnacja z salą wielofunkcyjną (konferencyjną, taneczną itp.) również z tarasami widokowymi na każdą stronę.',
        en: 'The concept of the facility on the "Zgłobice" hill near Tarnów. The task was to obtain a form that would be an accent and dominant and at the same time an advertisement for a service building in a characteristic place on the route 94 from Krakow to Tarnów. The assumption includes 3 storeys of services, including the underground part with a colonial shop, storage and technical facilities, and toilets. The first floor with a restaurant function with viewing terraces and the top floor with a multi-functional room (conference, dance, etc.) also with viewing terraces on each side.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Obiekt w trakcie realizacji',
        en: 'The object is under construction',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: w rejonie ul. Szwed-Śniadowskiej w Krakowie (Kliny).<br/>Kraków<br/>Pow. działki – 3 047m2<br/>Pow. użytkowa budynku – 4 584 00m2<br/>Pow. całkowita – 5 516,60m2<br/>Kubatura – 16 143m3',
        en: 'Location: in the area of ul. Szwed-Śniadowska in Krakow (Kliny).<br/>Cracow<br/>area plots – 3 690,20m2<br/>area usable area of the building – 350,00 m2<br/>area total – 732,00 m2<br/>Volume – 2 766,72m3',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry,
    },
    'back': {
        pl: 'Powrót do strony Projektów',
        en: 'Back to Projects page',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    }
};


/***/ }),

/***/ "./js/translation/projects.ts":
/*!************************************!*\
  !*** ./js/translation/projects.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textProjects = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textProjects = {
    'title': {
        pl: 'Projekty',
        en: 'Projects',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'alt-1': {
        pl: 'BUDYNEK BIUROWY ,,TECHMAR’’ W KIELCACH',
        en: '"TECHMAR" OFFICE BUILDING IN KIELCE',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'alt-2': {
        pl: 'BUDYNEK BIUROWY ,,TECHMAR’’ W KIELCACH',
        en: '"TECHMAR" OFFICE BUILDING IN KIELCE',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'alt-3': {
        pl: 'DOM Z BETONU',
        en: 'CONCRETE HOUSE',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'alt-4': {
        pl: 'ZOREN-SLICZNA, BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'ZOREN-SLICZNA, RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'alt-5': {
        pl: 'BRZYCZYNA, OSIEDLE DOMÓW',
        en: 'BRZYCZYNA, ESTATE OF HOUSES',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'alt-6': {
        pl: 'KLINY - BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'KLINY - RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'alt-7': {
        pl: 'TARNÓW – RESTAURACJA NA WZGÓRZU ZGŁOBICE',
        en: 'TARNÓW – RESTAURANT ON THE ZGŁOBICE HILL',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    }
};


/***/ }),

/***/ "./js/translation/public.ts":
/*!**********************************!*\
  !*** ./js/translation/public.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textPublic = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textPublic = {
    'back to top': {
        pl: 'Powrót do góry',
        en: 'Back to top',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
};


/***/ }),

/***/ "./js/translation/textIndex.ts":
/*!*************************************!*\
  !*** ./js/translation/textIndex.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textMain = exports.sorry = void 0;
;
exports.sorry = 'sorry, no translation';
exports.textMain = {
    'main title': {
        pl: 'Nasze polecane projekty.',
        en: 'Our Featured Projects.',
        ru: exports.sorry,
        de: exports.sorry
    },
    //:project-1 
    'title project-1': {
        pl: 'BUDYNEK BIUROWY ,,TECHMAR’’ W KIELCACH',
        en: '"TECHMAR" OFFICE BUILDING IN KIELCE',
        ru: exports.sorry,
        de: exports.sorry
    },
    'text project-1': {
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        ru: exports.sorry,
        de: exports.sorry
    },
    //:project-2 
    'title project-2': {
        pl: 'DOM Z WIÓRA',
        en: 'CHIP HOUSE',
        ru: exports.sorry,
        de: exports.sorry
    },
    'text project-2': {
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        ru: exports.sorry,
        de: exports.sorry
    },
    //:project-3 
    'title project-3': {
        pl: 'DOM Z BETONU',
        en: 'CONCRETE HOUSE',
        ru: exports.sorry,
        de: exports.sorry
    },
    'text project-3': {
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. To jest łatwe. Wystarczy kliknąć “ Edytuj tekst ” lub dwukrotnie kliknąć mnie, aby dodać własną treść i wprowadzić zmiany w czcionce. Możesz przeciągnąć i upuścić mnie w dowolnym miejscu na swojej stronie. Jestem miejscem, w którym możesz opowiedzieć historię i poinformować użytkowników o tobie trochę więcej.<br/><br/>Jest to miejsce na deeat do pisania długiego tekstu o Twojej firmie i twoich usługach. Możesz użyć tego miejsca, aby uzyskać bardziej szczegółowe informacje na temat swojej firmy. Porozmawiaj o swoim zespole i świadczonych usługach. Opowiedz odwiedzającym historię tego, jak wpadłeś na pomysł swojej firmy i co odróżnia cię od konkurencji. Wyróżnij swoją firmę i pokaż odwiedzającym, kim jesteś.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a deeat place for you to tell a story and let your users know a little more about you.<br/><br/>This is a deeat space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.',
        ru: exports.sorry,
        de: exports.sorry
    },
    //:project-4 
    'title project-4': {
        pl: 'ZOREN-SLICZNA, BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'ZOREN-SLICZNA, RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: exports.sorry,
        de: exports.sorry
    },
    'text project-4': {
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. To jest łatwe. Wystarczy kliknąć “ Edytuj tekst ” lub dwukrotnie kliknąć mnie, aby dodać własną treść i wprowadzić zmiany w czcionce. Możesz przeciągnąć i upuścić mnie w dowolnym miejscu na swojej stronie. Jestem miejscem, w którym możesz opowiedzieć historię i poinformować użytkowników o tobie trochę więcej.<br/><br/>Jest to miejsce na deeat do pisania długiego tekstu o Twojej firmie i twoich usługach. Możesz użyć tego miejsca, aby uzyskać bardziej szczegółowe informacje na temat swojej firmy. Porozmawiaj o swoim zespole i świadczonych usługach. Opowiedz odwiedzającym historię tego, jak wpadłeś na pomysł swojej firmy i co odróżnia cię od konkurencji. Wyróżnij swoją firmę i pokaż odwiedzającym, kim jesteś.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a deeat place for you to tell a story and let your users know a little more about you.<br/><br/>This is a deeat space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.',
        ru: exports.sorry,
        de: exports.sorry
    },
    //:project-5 
    'title project-5': {
        pl: 'BRZYCZYNA, OSIEDLE DOMÓW',
        en: 'BRZYCZYNA, ESTATE OF HOUSES',
        ru: exports.sorry,
        de: exports.sorry
    },
    'text project-5': {
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        ru: exports.sorry,
        de: exports.sorry
    },
    //:project-6 
    'title project-6': {
        pl: 'KLINY - BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'KLINY - RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: exports.sorry,
        de: exports.sorry
    },
    'text project-6': {
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        ru: exports.sorry,
        de: exports.sorry
    },
    //:project-7 
    'title project-7': {
        pl: 'TARNÓW – RESTAURACJA NA WZGÓRZU ZGŁOBICE',
        en: 'TARNÓW – RESTAURANT ON THE ZGŁOBICE HILL',
        ru: exports.sorry,
        de: exports.sorry
    },
    'text project-7': {
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        ru: exports.sorry,
        de: exports.sorry
    },
    //: contacts 
    'title contacts': {
        pl: 'Pozostać W Kontakcie.',
        en: 'Stay In Touch.',
        ru: exports.sorry,
        de: exports.sorry
    },
    'adress street': {
        pl: '500 Terry Francine Street<br/>San Francisco, CA 94158',
        en: '500 Terry Francine Street<br/>San Francisco, CA 94158',
        ru: exports.sorry,
        de: exports.sorry
    },
    'phone': {
        pl: 'Tel:',
        en: 'Tel:',
        ru: exports.sorry,
        de: exports.sorry
    },
    'fax': {
        pl: 'Faks:',
        en: 'Fax:',
        ru: exports.sorry,
        de: exports.sorry
    },
};


/***/ }),

/***/ "./js/translation/textMenu.ts":
/*!************************************!*\
  !*** ./js/translation/textMenu.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textMenu = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textMenu = {
    home: {
        pl: 'Strona główna',
        en: 'Home',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'our story': {
        pl: 'o mnie',
        en: 'About me',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    projects: {
        pl: 'projekty',
        en: 'projects',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    contacts: {
        pl: 'kontakty',
        en: 'contacts',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    }
};


/***/ }),

/***/ "./js/translation/textOurStory.ts":
/*!****************************************!*\
  !*** ./js/translation/textOurStory.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textOurStory = void 0;
var textIndex_1 = __webpack_require__(/*! ./textIndex */ "./js/translation/textIndex.ts");
exports.textOurStory = {
    'project-block-title': {
        pl: 'O mnie',
        en: 'About me',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'project-block-text': {
        pl: '',
        en: 'I am a paradeaph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a deeat place for you to tell a story and let your users know a little more about you.<br/><br/>This is a deeat space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'title': {
        pl: '',
        en: 'Our Team.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'back to top': {
        pl: '',
        en: 'Back to top',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'phone': {
        pl: '',
        en: 'Tel.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'partner': {
        pl: '',
        en: 'Partner',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'architect': {
        pl: '',
        en: 'Architect',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
};


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map