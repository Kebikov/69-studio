/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/backToTop.ts":
/*!*********************************!*\
  !*** ./js/modules/backToTop.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


// classBlock - отслеживаемый класс блока 
// classPlus - класс добавляемый к отслеживаемому блоку
// arrClassAlso - массив классов к которым так же добавится класс classPlussAlso
// classPlussAlso - класс который добавится к каждому классу в массиве
Object.defineProperty(exports, "__esModule", ({ value: true }));
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
var textLanguage_1 = __webpack_require__(/*! ../translation/textLanguage */ "./js/translation/textLanguage.ts");
var project_1_1 = __webpack_require__(/*! ../translation/project-1 */ "./js/translation/project-1.ts");
var project_2_1 = __webpack_require__(/*! ../translation/project-2 */ "./js/translation/project-2.ts");
//= language 
var language = function () {
    //* en, ru, pl стартовый язык
    var startLanguage = 'pl';
    //* массив языков на сайте 
    var arrayLanguage = ['en', 'pl'];
    //const arrayLanguage: Array<string> = ['en', 'ru', 'pl', 'de'];
    var radioButtons = document.querySelectorAll('.select-language__input');
    var body = document.querySelector('.select-language__body');
    var activeRadio = document.querySelector('.select-active');
    var activeImg = activeRadio.querySelector('.select-active__img');
    var activeText = activeRadio.querySelector('.select-active__text');
    var language = localStorage.getItem('language');
    // если язык не установлен в localStorage
    if (!language) {
        // установка языка браузера в localStorage из массива предпочитаемых, en, ru, pl
        var browserLanguages = navigator.languages;
        console.log('', browserLanguages);
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
//* изминение активного блока силектора 
function setSelectActive(activeImg, activeText, value) {
    activeImg.src = "/img/flag/".concat(value, ".jpg");
    console.log(typeof activeImg);
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
    var menuLinks = document.querySelectorAll('[data-menu]');
    menuLinks.forEach(function (link) {
        if (link.dataset.menu) {
            var data = link.dataset.menu;
            if (data && textLanguage_1.textMenu[data] && textLanguage_1.textMenu[data][language]) {
                link.textContent = textLanguage_1.textMenu[data][language];
            }
        }
    });
}
//* изминение текста на странице
function setTextPage(language) {
    var path = window.location.pathname;
    var elementsText = document.querySelectorAll('[data-translation]');
    var textForPage = {};
    switch (path) {
        case '/':
            textForPage = textLanguage_1.textMain;
            break;
        case '/our-story/':
            textForPage = textLanguage_1.textOurStory;
            break;
        case '/project-1/':
            textForPage = project_1_1.textProject1;
            break;
        case '/project-2/':
            textForPage = project_2_1.textProject2;
            break;
        default:
            textForPage = textLanguage_1.textMain;
            break;
    }
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
            rootMargin: '250px',
            threshold: 0,
        });
        var imgElAll = document.querySelectorAll('.lazy-img');
        imgElAll.forEach(function (item) { return imgObserver_1.observe(item); });
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
    function scroll69(text69, text69Size) {
        text69.style.fontSize = "".concat(text69Size - window.scrollY / 2, "px");
    }
    try {
        var text69_1 = document.querySelector('.main-picture__text');
        if (text69_1) {
            var text69Size_1 = parseInt(window.getComputedStyle(text69_1).getPropertyValue('font-size'));
            window.addEventListener('scroll', function () { return scroll69(text69_1, text69Size_1); });
        }
    }
    catch (error) {
        console.log('Error in function numberScroll >>> ', error);
    }
};
exports.numberScroll = numberScroll;


/***/ }),

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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textProject1 = void 0;
exports.textProject1 = {
    'title': {
        pl: 'BUDYNEK BIUROWY "TECHMAR" W KIELCACH',
        en: '"TECHMAR" OFFICE BUILDING IN KIELCE',
        ru: 'sorry, no translation',
        de: 'sorry, no translation'
    },
    'body': {
        pl: 'Projekt i wygląd aktualny biura to rodzaj metamorfozy po adaptacji istniejącego budynku, termomodernizacji, wymianie instalacji i adaptacji wnętrz na nowoczesny budynek biurowy z gabinetami prezesów, recepcją, salą konferencyjną, zapleczem sanitarnym.<br/><br/>Idea budynku to korespondencja trzech brył funkcjonalnie zróżnicowanych, stąd pomysł na ich kolorystyczną separację. Część biała mieści funkcję sklepu z materiałami budowlanymi, farbami, narzędziami. Część czarna to biura zarządu, pomieszczenia pracowników, recepcja, sala konferencyjna i toalety. Betonowy element na górnej kondygnacji mieści taras i otwarte foyear do rozmów i wypoczynku przy kawie z widokiem na okolicę.<br/><br/>Wszystkie części budynku połączone komunikacyjnie z pomieszczenia holu głównego przy recepcji , na górną kondygnację prowadzą otwarte, przestrzenne , industrialne schody o konstrukcji stalowej pokrytej czarną farbą.',
        en: 'The current design and appearance of the office is a kind of metamorphosis after the adaptation of the existing building, thermal modernization, replacement of installations and interior adaptation to a modern office building with offices of presidents, reception, conference room, sanitary facilities.The idea of the building is a correspondence of three functionally diverse blocks, hence the idea for their color separation. The white part houses the function of a shop with building materials, paints and tools.<br/><br/>The black part is the management offices, staff rooms, reception, conference room and toilets. The concrete element on the upper storey houses a terrace and an open foyear for chatting and relaxing over a coffee overlooking the countryside. All parts of the building are connected by communication from the main hall at the reception, to the upper floor there are open, spacious, industrial stairs with a steel structure covered with black paint.',
        ru: 'sorry, no translation',
        de: 'sorry, no translation'
    },
    'object': {
        pl: 'Powrót do strony Projektów',
        en: 'Object completed',
        ru: 'sorry, no translation',
        de: 'sorry, no translation',
    },
    'option': {
        pl: 'Lokalizacja: ul. Witosa, Kielce<br/>Pow. działki – 2 219,87m2<br/>Pow. użytkowa budynku – 793, 00m2<br/>Pow. całkowita – 844,37m2',
        en: 'Location: ul. Witosa, Kielce<br/>area plots – 2 219,87 m2<br/>area usable area of the building – 793,00 m2<br/>area total – 844,37 m2<br/>Volume – 3 013,40 m3',
        ru: 'sorry, no translation',
        de: 'sorry, no translation',
    },
    'back': {
        pl: 'Powrót do strony Projektów',
        en: 'Back to Projects page',
        ru: 'sorry, no translation',
        de: 'sorry, no translation'
    }
};


/***/ }),

/***/ "./js/translation/project-2.ts":
/*!*************************************!*\
  !*** ./js/translation/project-2.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textProject2 = void 0;
exports.textProject2 = {
    'title': {
        pl: 'DOM Z WIÓRA',
        en: 'CHIP HOUSE',
        ru: 'sorry, no translation',
        de: 'sorry, no translation'
    },
    'body': {
        pl: 'Projekt powstał w 2012r. zakup działki w pagórkowatych, wiejskich terenach pod Krakowem zmobilizował do myślenia o ekologii i naturalnych materiałach jak ceramika, drewno, kamień, szkło. Dom realizowano metodą ,,gospodarczą ‘’, oraz eksperymentalną w związku z czym budowę ukończono w 2015r.<br/><br/>Ze względu na wilgotny klimat i położenie w dolinie, zachowano tradycyjną technologię ścian z bloczków ceramicznych i elementów stropów i podciągów z betonu. Ściany pokryto szkieletem drewnianym, wypełnionym wełną mineralną, jako pokrycie użyto ,,wiór osikowy’’. Podobnie zrealizowano dach, z większą ilością warstw drewna w celu zapewnienia maksymalnej szczelności. Ściany wewnątrz pokryte tynkiem gipsowym. Podłogę w części salonowej wykonano z użyciem materiału z własnego wykopu – czyli gliny. Tradycyjne klepisko powstało jednak z myślą o komforcie użytkowania. Zamontowano na całej powierzchni ogrzewanie podłogowe – wodne oraz pokryto ubitą warstwę ziemi pokostem lnianym na gorąco.<br/><br/>Kominek wraz z funkcjami towarzyszącymi umieszczono w centralnej części domu (,,serce domu’’). Do pokrycia ścian kominka użyto naturalnego kamienia pochodzącego z Tatr Słowackich. Schody wykonano jako drewniane ,,szuflady’’ oraz  zamontowano na konstrukcji stalowej przykręconej do ściany nośnej budynku. Prostota i funkcjonalność to motto idei wyposażenia i organizacji wnętrz. Ściany pokryte białą farbą , podłogi na piętrze z drewna, meble i wyposażenie minimalistyczne ale również nawiązujące do wiejskiego klimatu.',
        en: 'The project was created in 2012. the purchase of a plot of land in hilly, rural areas near Krakow made me think about ecology and natural materials such as ceramics, wood, stone and glass. The house was built using the "economic" and experimental methods, therefore the construction was completed in 2015.<br/><br/>Due to the humid climate and location in a valley, the traditional technology of walls made of ceramic blocks and elements of ceilings and binders made of concrete has been preserved. The walls were covered with a wooden frame, filled with mineral wool, "aspen chip" was used as a cover. The roof was similarly constructed, with more layers of wood to ensure maximum airtightness. The walls inside are covered with gypsum plaster. The floor in the living room area was made using material from our own excavation - clay. However, the traditional concave was created with comfort of use in mind. Water underfloor heating was installed on the entire surface and the compacted layer of earth was covered with hot linen varnish. The fireplace with accompanying functions was placed in the central part of the house ("the heart of the house"). Natural stone from the Slovak Tatras was used to cover the walls of the fireplace. The stairs were made as wooden "drawers" and mounted on a steel structure screwed to the load-bearing wall of the building. Simplicity and functionality are the motto of the idea of furnishing and interior organization. Walls covered with white paint, wooden floors on the first floor, minimalist furniture and equipment, but also referring to the rural climate.',
        ru: 'sorry, no translation',
        de: 'sorry, no translation'
    },
    'object': {
        pl: 'Powrót do strony Projektów',
        en: 'Object completed',
        ru: 'sorry, no translation',
        de: 'sorry, no translation',
    },
    'option': {
        pl: 'Lokalizacja: ul. Sarnia 8, Wysiołek Luborzycki k. Krakowa<br/>Pow. działki – 1 150m2<br/>Pow. użytkowa budynku – 327, 20m2<br/>Pow. całkowita – 512,00m2<br/>Kubatura – 1 576,56m3',
        en: 'Location: ul. Sarnia 8, Wysiołek Luborzycki near Krakow<br/>area plots – 1 150,00 m2<br/>area usable area of the building - 327, 20 m2<br/>area total - 512.00 m2<br/>Volume – 1 576,56 m3',
        ru: 'sorry, no translation',
        de: 'sorry, no translation',
    },
    'back': {
        pl: 'Powrót do strony Projektów',
        en: 'Back to Projects page',
        ru: 'sorry, no translation',
        de: 'sorry, no translation'
    }
};


/***/ }),

/***/ "./js/translation/textLanguage.ts":
/*!****************************************!*\
  !*** ./js/translation/textLanguage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textOurStory = exports.textMain = exports.textMenu = void 0;
exports.textMenu = {
    home: {
        ru: 'Главная',
        en: 'Home',
        pl: 'Strona główna',
        de: 'Startseite'
    },
    'our story': {
        ru: 'обо мне',
        en: 'About me',
        pl: 'o mnie',
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
exports.textOurStory = {
    'project-block-title': {
        ru: 'обо мне',
        en: 'About me',
        pl: 'O mnie',
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