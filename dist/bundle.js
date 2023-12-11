/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/addedImgToProject.ts":
/*!*****************************************!*\
  !*** ./js/modules/addedImgToProject.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// str
var lazyLoading_1 = __importDefault(__webpack_require__(/*! ./lazyLoading */ "./js/modules/lazyLoading.ts"));
/**
 * Функция выподаюших фотографий при нажатии на титульную фотографию.
 * - Фотографии будут добавлены после элемента с class="projects-our-story"
 * @example
 * <div
        class="projects-our-story"
        data-click="project"
        data-start="{...номер начального изображения}"
        data-end="{...номер конечного изображения}"
        data-path="{...путь к папке с изображениями}"
        data-state="{ open | close} ...состояние открыть изображения или закрыть"
    >
        <picture>
            <source srcset="{...путь к img.webp}" type="image/webp">
            <img class="projects-our-story__title-img" src="{...путь к img.jpg}" alt="my_alt">
        </picture>
        <div class="projects-our-story__title"><span>{...Имя проекта}</span></div>
    </div>
 */
var addedImgToProject = function () {
    try {
        /**
         * Массив элементов с атрибутом ( data-click="project" ).
         */
        var projectsElements = document.querySelectorAll('[data-click="project"]');
        /**
         * - Функция получает данные о начальном, конечном кадре и пути из дата атрибутов.
         * - Добавляет изображения после радительского элемента.
         * @param event Событие элемента на котором призошол клик.
         * @returns
         */
        var addImg_1 = function (event) {
            /**
             * Дочерний элемент на котором произошел клик.
             */
            var children = event.target;
            /**
             * Родительский элемент, в котором находится дочерний элемент, на котором произошло событие.
             */
            var parent = children.closest('[data-click="project"]');
            /**
             * Функция установки значения атрибута data-state.
             * @param state - Значение атрибута data-state.
             */
            var stateParent = function (state) {
                parent.setAttribute('data-state', state);
            };
            if (!parent)
                return;
            /**
             * Стартовый номер изображения для добавления.
             * - В папке изображения должны быть пронумерованы цифрами от 1 и далее.
             */
            var start = Number(parent.getAttribute('data-start'));
            /**
             * Конечный номер изображения для добавления.
             * - В папке изображения пронумерованы цифрами от 1 и далее.
             */
            var end = Number(parent.getAttribute('data-end'));
            /**
             * Путь к папке с изображениями.
             */
            var path = parent.getAttribute('data-path');
            /**
             * Значение атрибута data-state, состояние родительского компанента, что необходимо сделать при нажатии.
             * - open - Показать изображения.
             * - close - Скрыть изображения.
             */
            var state = parent.getAttribute('data-state');
            // Если нет данных, то не добавляем изображения.
            if (!start && !end && !path && !state)
                return;
            if (state === 'open') {
                // open - Показать изображения.
                for (var i = end; i >= start; i--) {
                    parent.insertAdjacentHTML('afterend', "\n                        <picture data-id=\"".concat(path, "\">\n                            <source srcset=\"../../img/public/preloader.webp\" data-srcset=\"").concat(path).concat(i, ".webp\" type=\"image/webp\">\n                            <img class=\"lazy-img projects-our-story__img\" src=\"../../img/public/preloader.webp\" data-src=\"").concat(path).concat(i, ".jpg\" alt=\"my_alt\">\n                        </picture>\n                        "));
                }
                ;
                stateParent('close');
                (0, lazyLoading_1.default)();
            }
            else {
                // close - Скрыть изображения.
                var pictures = document.querySelectorAll("[data-id = \"".concat(path, "\"]"));
                pictures.forEach(function (pic) {
                    pic.remove();
                });
                parent.setAttribute('data-state', 'open');
                stateParent('open');
            }
        };
        // Проверка сушествования элементов projectsElements
        if (projectsElements) {
            // Установка слушателей событий.
            projectsElements.forEach(function (project) {
                project.addEventListener('click', addImg_1);
            });
        }
    }
    catch (error) {
        console.log('Error in Function addedImgToProject >>> ', error);
    }
};
exports["default"] = addedImgToProject;


/***/ }),

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
var textIndex_1 = __webpack_require__(/*! ../translation/textIndex */ "./js/translation/textIndex.ts");
var textMenu_1 = __webpack_require__(/*! ../translation/textMenu */ "./js/translation/textMenu.ts");
var public_1 = __webpack_require__(/*! ../translation/public */ "./js/translation/public.ts");
var textOurStory_1 = __webpack_require__(/*! ../translation/textOurStory */ "./js/translation/textOurStory.ts");
var projects_1 = __webpack_require__(/*! ../translation/projects */ "./js/translation/projects.ts");
var project_1_1 = __webpack_require__(/*! ../translation/project-1 */ "./js/translation/project-1.ts");
var project_2_1 = __webpack_require__(/*! ../translation/project-2 */ "./js/translation/project-2.ts");
var project_3_1 = __webpack_require__(/*! ../translation/project-3 */ "./js/translation/project-3.ts");
var project_4_1 = __webpack_require__(/*! ../translation/project-4 */ "./js/translation/project-4.ts");
var project_5_1 = __webpack_require__(/*! ../translation/project-5 */ "./js/translation/project-5.ts");
var project_6_1 = __webpack_require__(/*! ../translation/project-6 */ "./js/translation/project-6.ts");
var project_7_1 = __webpack_require__(/*! ../translation/project-7 */ "./js/translation/project-7.ts");
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
    console.log(textForPage);
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
/**
 * Функция отложенной загрузки изображений.
 * - Найдет все изображения с классом "lazy-img".
 * - Установит слушатель появления во viewport.
 * - При появлении во viewport установит атрибуты с путем к изображению.
 * @example
 * <picture>
 *     <source data-srcset="../img/projects/1.webp" type="image/webp">
 *     <img class="lazy-img" data-src="../img/projects/1.jpg" alt="my_alt">
 * </picture>
 */
var lazyLoading = function () {
    try {
        var imgObserver_1 = new IntersectionObserver(function (entryAll, observer) {
            entryAll.forEach(function (item) {
                if (item.isIntersecting) {
                    //console.log(item.target);
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
        //console.log(imgElAll.length);
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

/***/ "./js/modules/pushPictures.ts":
/*!************************************!*\
  !*** ./js/modules/pushPictures.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Функция для вставки изображений на страницу.
 * @example
 * <div
 *      class="gallery__body"
 *      data-path="../img/project-3/"
 *      data-end="10"
 * >
 *      {блоки изображений}
 * </div>
 */
var pushPictures = function () {
    try {
        /**
         * DivElement контейнер для импорта изображений.
         */
        var galleryBody = document.querySelector('.gallery__body');
        /**
         * Путь к изображениям.
         */
        var path = galleryBody.getAttribute('data-path');
        /**
         * Номер последнего изображения, начинается всегда с 1 и заканчивается вставка изображений указанным номером.
         */
        var end = Number(galleryBody.getAttribute('data-end'));
        if (path && end) {
            for (var i = 1; i <= end; i++) {
                galleryBody.insertAdjacentHTML('beforeend', "\n                    <div class=\"gallery__img\">\n                        <picture>\n                            <source data-srcset=\"".concat(path).concat(i, ".webp\" type=\"image/webp\">\n                            <img class=\"lazy-img\" data-src=\"").concat(path).concat(i, ".jpg\" alt=\"my_alt\" height=\"500\" width=\"500\" >\n                        </picture>\n                        <div class=\"gallery__text\"><span>I'am an image title</span></div>\n                    </div>\n                    "));
            }
            ;
        }
        ;
    }
    catch (error) {
        console.log('Error in Function  pushPictures >>> ', error);
    }
};
exports["default"] = pushPictures;


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
var pushPictures_1 = __importDefault(__webpack_require__(/*! ./modules/pushPictures */ "./js/modules/pushPictures.ts"));
var addedImgToProject_1 = __importDefault(__webpack_require__(/*! ./modules/addedImgToProject */ "./js/modules/addedImgToProject.ts"));
window.addEventListener('DOMContentLoaded', function () {
    (0, menu_1.menu)();
    (0, pushPictures_1.default)();
    (0, addedImgToProject_1.default)();
    (0, menu_1.menuFill)();
    (0, text_1.numberScroll)();
    (0, backToTop_1.default)();
    (0, language_1.default)();
    (0, lazyLoading_1.default)();
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
        ru: 'Здание офиса  ,,TECHMAR " в Кельце.',
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Projekt i wygląd aktualny biura to rodzaj metamorfozy po adaptacji istniejącego budynku, termomodernizacji, wymianie instalacji i adaptacji wnętrz na nowoczesny budynek biurowy z gabinetami prezesów, recepcją, salą konferencyjną, zapleczem sanitarnym.<br/><br/>Idea budynku to korespondencja trzech brył funkcjonalnie zróżnicowanych, stąd pomysł na ich kolorystyczną separację. Część biała mieści funkcję sklepu z materiałami budowlanymi, farbami, narzędziami. Część czarna to biura zarządu, pomieszczenia pracowników, recepcja, sala konferencyjna i toalety. Betonowy element na górnej kondygnacji mieści taras i otwarte foyear do rozmów i wypoczynku przy kawie z widokiem na okolicę.<br/><br/>Wszystkie części budynku połączone komunikacyjnie z pomieszczenia holu głównego przy recepcji , na górną kondygnację prowadzą otwarte, przestrzenne , industrialne schody o konstrukcji stalowej pokrytej czarną farbą.',
        en: 'The current design and appearance of the office is a kind of metamorphosis after the adaptation of the existing building, thermal modernization, replacement of installations and interior adaptation to a modern office building with offices of presidents, reception, conference room, sanitary facilities.The idea of the building is a correspondence of three functionally diverse blocks, hence the idea for their color separation. The white part houses the function of a shop with building materials, paints and tools.<br/><br/>The black part is the management offices, staff rooms, reception, conference room and toilets. The concrete element on the upper storey houses a terrace and an open foyear for chatting and relaxing over a coffee overlooking the countryside. All parts of the building are connected by communication from the main hall at the reception, to the upper floor there are open, spacious, industrial stairs with a steel structure covered with black paint.',
        ru: 'Дизайн и внешний вид текущего офиса-это своего рода метаморфоза после адаптации существующего здания, термомодернизации, замены установки и адаптации интерьера современным офисным зданием с кабинетами начальников, приемной, конференц-залом, санитарными помещениями<br/><br/>Идея здания - это соответствие трех функционально разнообразных чайстей, отсюда и идея их цветового разделения. Белая часть содержит функцию магазина строительных материалов, красок, инструментов. Черная часть - это офисы совета директоров, помещения для персонала, приемная, конференц-зал и туалеты. В бетонном элементе на верхнем этаже есть терраса и открытое фойе для разговоров и отдыха за чашкой кофе с видом на окрестности        <br/><br/>Все части здания, соединенные коммуникациями с главным вестибюлем приемной, на верхний этаж ведут открытые, пространственные, промышленные лестницы из стальной конструкции, покрытые черной краской.',
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Powrót do strony Projektów',
        en: 'Object completed',
        ru: 'Объект реализован',
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: ul. Witosa, Kielce<br/>Pow. działki – 2 219,87m2<br/>Pow. użytkowa budynku – 793, 00m2<br/>Pow. całkowita – 844,37m2',
        en: 'Location: ul. Witosa, Kielce<br/>area plots – 2 219,87 m2<br/>area usable area of the building – 793,00 m2<br/>area total – 844,37 m2<br/>Volume – 3 013,40 m3',
        ru: 'Расположение: ул. Витоса, <br/>Площадь участка-2 219,<br/>Полезная площадь здания-793,<br/>Общая площадь-844,<br/>Кубическая емкость - 3 013,40м3',
        de: textIndex_1.sorry,
    },
    back: textIndex_1.back
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
        ru: 'ДОМ ИЗ ЩЕПЫ',
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Projekt powstał w 2012r. zakup działki w pagórkowatych, wiejskich terenach pod Krakowem zmobilizował do myślenia o ekologii i naturalnych materiałach jak ceramika, drewno, kamień, szkło. Dom realizowano metodą ,,gospodarczą ‘’, oraz eksperymentalną w związku z czym budowę ukończono w 2015r.<br/><br/>Ze względu na wilgotny klimat i położenie w dolinie, zachowano tradycyjną technologię ścian z bloczków ceramicznych i elementów stropów i podciągów z betonu. Ściany pokryto szkieletem drewnianym, wypełnionym wełną mineralną, jako pokrycie użyto ,,wiór osikowy’’. Podobnie zrealizowano dach, z większą ilością warstw drewna w celu zapewnienia maksymalnej szczelności. Ściany wewnątrz pokryte tynkiem gipsowym. Podłogę w części salonowej wykonano z użyciem materiału z własnego wykopu – czyli gliny. Tradycyjne klepisko powstało jednak z myślą o komforcie użytkowania. Zamontowano na całej powierzchni ogrzewanie podłogowe – wodne oraz pokryto ubitą warstwę ziemi pokostem lnianym na gorąco.<br/><br/>Kominek wraz z funkcjami towarzyszącymi umieszczono w centralnej części domu (,,serce domu’’). Do pokrycia ścian kominka użyto naturalnego kamienia pochodzącego z Tatr Słowackich. Schody wykonano jako drewniane ,,szuflady’’ oraz  zamontowano na konstrukcji stalowej przykręconej do ściany nośnej budynku. Prostota i funkcjonalność to motto idei wyposażenia i organizacji wnętrz. Ściany pokryte białą farbą , podłogi na piętrze z drewna, meble i wyposażenie minimalistyczne ale również nawiązujące do wiejskiego klimatu.',
        en: 'The project was created in 2012. the purchase of a plot of land in hilly, rural areas near Krakow made me think about ecology and natural materials such as ceramics, wood, stone and glass. The house was built using the "economic" and experimental methods, therefore the construction was completed in 2015.<br/><br/>Due to the humid climate and location in a valley, the traditional technology of walls made of ceramic blocks and elements of ceilings and binders made of concrete has been preserved. The walls were covered with a wooden frame, filled with mineral wool, "aspen chip" was used as a cover. The roof was similarly constructed, with more layers of wood to ensure maximum airtightness. The walls inside are covered with gypsum plaster. The floor in the living room area was made using material from our own excavation - clay. However, the traditional concave was created with comfort of use in mind. Water underfloor heating was installed on the entire surface and the compacted layer of earth was covered with hot linen varnish. The fireplace with accompanying functions was placed in the central part of the house ("the heart of the house"). Natural stone from the Slovak Tatras was used to cover the walls of the fireplace. The stairs were made as wooden "drawers" and mounted on a steel structure screwed to the load-bearing wall of the building. Simplicity and functionality are the motto of the idea of furnishing and interior organization. Walls covered with white paint, wooden floors on the first floor, minimalist furniture and equipment, but also referring to the rural climate.',
        ru: 'Проект был создан в 2012 г. Покупка земельного участка в холмистой сельской местности под Краковом заставил думать об экологии и природных материалах, таких как керамика, дерево, камень, стекло. Дом был реализован методом экономическим и экспериментальным, поэтому строительство было завершено в 2015 году.<br/><br/>Благодаря влажному климату и расположению дома в долине , сохранилась традиционная технология стен из керамических блоков и элементов потолков и подстроек из бетона. Стены были покрыты деревянным каркасом, заполненным минеральной ватой, в качестве покрытия использовалась “Осиновая стружка". Точно так же была реализована крыша с большим количеством слоев дерева для обеспечения максимальной герметичности. Стены внутри покрыты гипсовой штукатуркой. Пол в гостиной был сделан из материала из собственной траншеи-то есть глины. Однако традиционные Клепы созданы для удобства использования. Смонтировали по всей поверхности напольное – водяное отопление и покрыли утрамбованный слой земли горячей льняной подстилкой.<br/><br/>Камин с сопутствующими функциями размещен в центральной части дома ("сердце дома"). Для покрытия стен камина использовался натуральный камень из словацких Татр. Лестница выполнена в виде деревянных ящиков и установлена на стальной конструкции, привинченной к несущей стене здания. Простота и функциональность-это девиз идеи меблировки и организации интерьера. Стены, покрытые белой краской, полы на верхнем этаже из дерева, мебель и предметы интерьера минималистичны, но также намекают на сельскую атмосферу.',
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Powrót do strony Projektów',
        en: 'Object completed',
        ru: 'Объект реализован',
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: ul. Sarnia 8, Wysiołek Luborzycki k. Krakowa<br/>Pow. działki – 1 150m2<br/>Pow. użytkowa budynku – 327, 20m2<br/>Pow. całkowita – 512,00m2<br/>Kubatura – 1 576,56m3',
        en: 'Location: ul. Sarnia 8, Wysiołek Luborzycki near Krakow<br/>area plots – 1 150,00 m2<br/>area usable area of the building - 327, 20 m2<br/>area total - 512.00 m2<br/>Volume – 1 576,56 m3',
        ru: 'Расположение: ул. Сарня 8, поселок городского типа Любожицкий  , Краков<br/>Площадь участка-1 150м2<br/>Полезная площадь здания-327, 20м2<br/>Общая площадь-512, 00м2<br/>Кубическая емкость-1 576, 56м3',
        de: textIndex_1.sorry,
    },
    back: textIndex_1.back
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
        ru: 'БЕТОННЫЙ ДОМ',
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'W założeniu miał to być dom z betonu i szkła, jednak w trakcie realizacji uznano że jako dom do mieszkania będzie miał zbyt chłodny charakter i wygląd. Zdecydowano o pokryciu ścian domu deskami modrzewiowymi które użyto również na taras.<br/><br/>Dom składa się z trzech kondygnacji . Część podziemna niemal całkowicie zagłębiona w teren, dostępna z poziomu drogi dojazdowej, gdzie zorganizowano wjazd. Tam też znajduje się garaż, kotłownia, pomieszczenia techniczne, siłownia i otwarte atrium połączone schodami betonowymi z tarasem na parterze.<br/><br/>Na parterze część salonowa z otwartą kuchnią i jadalnią, łazienką i zamknięty ogród zimowy z kominkiem.<br/><br/>Na piętrze część sypialna z łazienkami i garderobami , w jednej z nich sąsiadującej z pokojami dzieci znajdują się tajemne drzwi do ,,Narnii” - pomieszczenia z teleskopem i widokiem na zewnątrz.',
        en: 'It was supposed to be a house made of concrete and glass, but during the implementation it was decided that as a house to live in it would have too cool character and appearance. It was decided to cover the walls of the house with larch boards, which were also used for the terrace.The house consists of three floors. The underground part is almost completely immersed in the terrain, accessible from the level of the access road, where the entrance was organized.<br/><br/>There is also a garage, a boiler room, technical rooms, a gym and an open atrium connected by concrete stairs with a terrace on the ground floor. On the ground floor there is a living area with an open kitchen and dining area, a bathroom and a closed winter garden with a fireplace. On the first floor there is a sleeping area with bathrooms and dressing rooms, in one of them adjacent to the children`s rooms there is a secret door to "Narnia" - a room with a telescope and a view to the outside.',
        ru: 'Предполагалось, что это будет дом из бетона и стекла, однако в ходе реализации было решено, что в качестве дома для жизни он будет иметь слишком прохладный характер и внешний вид. Было решено покрыть стены дома лиственничными досками, которые также использовались для террасы<br/><br/>Дом состоит из трех этажей . Подземная часть почти полностью утоплена в местности, доступная с уровня подъездной дороги, где был организован въезд. Там также есть гараж, котельная, технические помещения, тренажерный зал и открытый Атриум, соединенный бетонной лестницей с террасой на первом этаже        <br/><br/>На первом этаже гостиная с открытой кухней и столовой, ванной комнатой и закрытым зимним садом с камином        <br/><br/>Наверху спальная зона с ванными комнатами и гардеробными, в одной из них, примыкающей к детским комнатам, находится тайная дверь в "Нарнию" - комнату с телескопом и видом на улицу.',
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Obiekt zrealizowany',
        en: 'Object completed',
        ru: 'Объект реализован',
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: ul. Zakamycze Kraków<br/>Pow. działki – 5 640m2<br/>Pow. użytkowa budynku – 453, 75m2<br/>Pow. całkowita – 604,37m2<br/>Kubatura – 2 251,50m3',
        en: 'Location: ul. I will close Krakow<br/>area plots – 5 640,00m2<br/>area usable area of the building – 453,75m2<br/>area total – 604,37m2<br/>Volume – 2 251,50m3',
        ru: 'Расположение: ул. Закамыче<br/>Площадь участка-5<br/>Полезная площадь здания-453,<br/>Общая площадь-604, 37м2<br/>Кубическая емкость-2 251, 50м3',
        de: textIndex_1.sorry,
    },
    back: textIndex_1.back
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
        ru: 'ZOREN-Śliczna, многоквартирный дом',
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Koncepcja budynku jest wynikiem analizy zabudowy na małej działce zaledwie 9-arowej przy ul. Ślicznej w Krakowie w dzielnicy o charakterze głównie mieszkalno-usługowej.<br/><br/>Analiza nasłonecznienia i przesłaniania spowodowała że budynek od strony zachodniej, w górnych kondygnacjach tracił na swoich walorach poprzez ograniczanie obrysu poszczególnych kondygnacji -,,schodkowanie’’. Zdecydowano że bryła nabierze charakteru, a jednocześnie nie straci na pojemności przez zastosowanie fragmentu elewacji skośnej.<br/><br/>Ciemny kolor tynku/okładziny , elementy drewniane na balkonach dodatkowo wzmocniły doznanie estetyczne.<br/><br/>Budynek posiada 5 kondygnacji naziemnych o funkcji mieszkaniowej, jedną kondygnację podziemną z funkcją parkingu, pomieszczeń technicznych i komórek lokatorskich.',
        en: 'The concept of the building is the result of an analysis of the development on a small plot of only 9 ares at ul. Śliczna in Krakow, in a residential and commercial district. The analysis of insolation and obscuration meant that the building on the west side, in the upper storeys, lost its values by limiting the outline of individual storeys - "stepping". It was decided that the block would gain character and at the same time not lose its capacity by using a fragment of the slanted façade. The dark color of the plaster/cladding, wooden elements on the balconies additionally enhanced the aesthetic experience. The building has 5 above-ground storeys with a residential function, one underground storey with a parking function, technical rooms and storage rooms.',
        ru: 'Концепция здания является результатом анализа застройки на небольшом участке всего 9-аровой на ул.Śliczna в Кракове в районе с характером преимущественно жилого и сервисного<br/><br/>Анализ инсоляции и затенения привел к тому, что здание, выходящее на запад,в верхних этажах теряло свои качества, ограничивая контур отдельных этажей- ’ступенчатость". Было решено, что тело приобретет характер и в то же время не потеряет емкость за счет использования фрагмента наклонного фасада        <br/><br/>Темный цвет штукатурки / облицовки , деревянные элементы на балконах еще больше усилили эстетический опыт        <br/><br/>Здание имеет 5 надземных этажей с жилой функцией, один подземный этаж с функцией парковки, технических помещений и квартирных ячеек.',
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Obiekt w trakcie realizacji, po uzyskaniu decyzji pozwolenia na budowę',
        en: 'The facility is under construction, after obtaining a building permit',
        ru: 'Объект в процессе строительства, после получения разрешения на строительство',
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: ul. Śliczna Kraków<br/>Pow. działki – 900m2<br/>Pow. użytkowa budynku – 1 121, 60 m2<br/>Pow. całkowita – 1 580,60 m2<br/>Kubatura – 6 741 m3',
        en: 'Location: ul. Beautiful Krakow<br/>area plots – 900,00m2<br/>area usable area of the building – 1 121,60m2<br/>area total – 1 580,60 m2<br/>Volume – 6 741,00m3',
        ru: 'Расположение: ул. красивая Краков<br/>Площадь участка-900м2<br/>Полезная площадь здания-1 121, 60 м2<br/>Общая площадь-1 580,60 м2<br/>Кубическая емкость - 6 741 м3',
        de: textIndex_1.sorry,
    },
    back: textIndex_1.back
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
        ru: 'БЖИЧИНА, поселок домов',
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Projekt osiedla powstał z myślą o wykorzystaniu malowniczej działki widokowej na potrzeby mieszkańców którzy pragną oderwać się od zgiełku aglomeracji i w niedalekiej odległości od <br/><br/>Krakowa (15km czas dojazdu 25min.) i zamieszkać w komfortowym nowoczesnym osiedlu domków z parkingami, placem zabaw, altaną i ogniskiem. Zaprojektowano dwa etapy na działce wielkości 8 400 m2.<br/><br/>W I etapie zostanie zrealizowanych 6 domów w zabudowie bliźniaczej i dwa domy wolnostojące, czyli 8 jednostek mieszkalnych. Jeden domek ma około 150m2 powierzchni użytkowej. W domku znajdują się : na parterze hall z garderobą, klatka schodowa, salon z kuchnią, gabinet, wc i pomieszczenie techniczno-gospodarcze, na piętrze : sypialnia ,,master’’ z łazienką i garderobą, duża łazienka i dwie sypialnie. Ze względu na specyficzną geometrię dachu, wykorzystano jeszcze tę powierzchnię na strych użytkowy o metrażu około 50m2 gdzie można zaaranżować  pomieszczenie rekreacyjne ze stołem bilardowym wraz z barkiem, salonem tv i sanitariatem.<br/><br/>Domki zaprojektowano niestandardowo w nowoczesnych formach przy użyciu wyszukanych materiałów z drewna, blachy i szlachetnych tynków.',
        en: 'The design of the estate was created with the thought of using a picturesque scenic plot for the needs of residents who want to get away from the hustle and bustle of the agglomeration and in the vicinity of Krakow.<br/><br/>(15 km, travel time 25 minutes) and live in a comfortable, modern housing estate with parking lots, a playground, a gazebo and a fireplace. Two stages were designed on a plot of 8,400 m2. In the first stage, 6 semi-detached houses and two detached houses, i.e. 8 residential units, will be built. One house has about 150 m2 of usable area. The house has: on the ground floor a hall with a wardrobe, a staircase, a living room with a kitchen, a study, a toilet and a technical and utility room, on the first floor: a master bedroom with a bathroom and a wardrobe, a large bathroom and two bedrooms. Due to the specific geometry of the roof, this space was also used for a usable attic with an area of about 50m2, where you can arrange a recreation room with a pool table with a bar, TV lounge and a toilet.The houses have been designed in a non-standard way in modern forms using sophisticated materials such as wood, sheet metal and precious plasters.',
        ru: 'Проект усадьбы был создан с целью использования живописного смотрового участка для нужд жителей, которые хотят оторваться от шума и суеты агломерации и в непосредственной близости <br/><br/>Краков (15 км время в пути 25мин.) и жить в комфортабельном современном микрорайоне коттеджей с парковками, детской площадкой, беседкой и костром. Были спроектированы два этапа на участке размером 8 400 м2        <br/><br/>На первом этапе будет реализовано 6 двухквартирных домов и два отдельно стоящих дома, то есть 8 жилых единиц. Один коттедж имеет около 150 м2 полезной площади. В коттедже есть: на первом этаже холл с гардеробной, лестница, гостиная с кухней, кабинет, туалет и техническое и хозяйственное помещение, на верхнем этаже : спальня с ванной комнатой и гардеробной, большая ванная комната и две спальни. Из-за специфической геометрии крыши, была использована еще эта площадь для полезного чердака площадью около 50 м2, где можно обустроить комнату отдыха с бильярдным столом, а также барной стойкой, гостиной телевизором и санитарией        <br/><br/>Коттеджи были спроектированы на заказ в современных формах с использованием сложных материалов из дерева, листового металла и благородной штукатурки.',
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Obiekt w trakcie realizacji, po uzyskaniu decyzji pozwolenia na budowę',
        en: 'The facility is under construction, after obtaining a building permit',
        ru: 'Объект в процессе строительства, после получения разрешения на строительство<br/>Концепция и строительный проект были выполнены в консорциуме компаний EM STUDIO и 69.СТУДИЯ',
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'KONCPECJA I PROJEKT BUDOWLANY WYKONANO W KONSORCJUM FIRM EM STUDIO i 69.STUDIO<br/>Lokalizacja: Brzyczyna , gm. Mogilany<br/>Pow. działki Etap I – 2 197 m2<br/>Pow. użytkowa budynków – 1 061, 50 m2<br/>Pow. całkowita – 1 232, 80 m2<br/>Kubatura – 3 696 m3',
        en: 'THE CONCEPT AND CONSTRUCTION DESIGN WAS MADE IN A CONSORTIUM OF EM STUDIO and 69.STUDIO<br/>Location: Brzyczyna, gm. Mogilany<br/>area plots Stage I - 2,197 m2<br/>area usable area of buildings - 1,061.50 m2<br/>area total – 1,232.80 m2<br/>Volume - 3,696 m3<br/>',
        ru: 'Расположение: Brzyczyna, GM. Mogilany<br/>Площадь участка этап и-2 197 м2<br/>Полезная площадь зданий-1 061, 50 м2<br/>Общая площадь-1 232, 80 м2<br/>Кубатура - 3 696 м3',
        de: textIndex_1.sorry,
    },
    back: textIndex_1.back
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
        ru: 'КЛИНЫ - многоквартирный дом',
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Budynek zlokalizowany na bardzo wąskiej ~16m i długiej na ~180m działce w dzielnicy Kliny w Krakowie. Na tak trudnej działce zdecydowano że może powstać jedynie budynek ,,galeriowy’’ o wymiarach szer. x dł. 9mx130m.<br/><br/>Ze względu na sąsiedztwo terenów zielonych po stronie południowej, powstała idea stworzenia ,,zielonej elewacji’’, która jednak odbiega w założeniu od drogich technologicznie rozwiązań, w których wymagane jest odpowiednie zapewnianie warunków wegetacji roślin, również skomplikowanego zasilania w wodę. Pomysł polega na stworzeniu odpowiednio wkomponowanych donic na balkonach poszczególnych mieszkań, obsadzeniu zaprojektowanymi formami roślinnymi, oraz wprowadzenie wody opadowej z balkonów do donic z prostym systemem odsączania. O resztę – czyli odpowiednią pielęgnację i podlewanie mają zadbać już mieszkańcy.<br/><br/>Budynek posiada 4 kondygnacje naziemne o funkcji mieszkaniowej, ostatnia kondygnacja ma dostęp do antresoli przynależnej do mieszkań na kondygnacji 4-ej. Kondygnacja podziemna z funkcją parkingu podzielona jest na dwie niezależne strefy z oddzielnymi wjazdami i posiada również pomieszczenia techniczne i komórki lokatorskie.',
        en: 'The building is located on a very narrow ~16m and ~180m long plot in the Kliny district in Krakow. On such a difficult plot, it was decided that only a "gallery" building with dimensions of width x length 9mx130m could be built. Due to the proximity of green areas on the south side, the idea of creating a "green façade" was created, which, however, differs from technologically expensive solutions, which require adequate provision of plant vegetation conditions, including a complicated water supply.<br/><br/>The idea is to create properly integrated pots on the balconies of individual apartments, planting with designed plant forms, and introducing rainwater from the balconies to pots with a simple drainage system. The rest - i.e. proper care and watering - is to be taken care of by the residents.The building has 4 above-ground storeys with a residential function, the last storey has access to the mezzanine belonging to the apartments on the 4th storey. The underground floor with a parking function is divided into two independent zones with separate entrances and also has technical rooms and storage rooms.',
        ru: 'Здание расположено на очень узком ~16м и длинном ~180м участке в районе Клини в Кракове. На таком сложном участке было решено, что может быть построено только здание "галерея" размером Ш х Д 9мх130м<br/><br/>Из-за соседства зеленых зон на южной стороне возникла идея создания „зеленого фасада", которая, однако,отличается в предположении от дорогостоящих технологически решений, в которых требуется адекватное обеспечение условий растительности растений, а также сложное водоснабжение. Идея состоит в том, чтобы создать надлежащим образом интегрированные плантаторы на балконах отдельных квартир, насаждение разработанными формами растений, а также введение дождевой воды с балконов в плантаторы с простой системой дренажа. Об остальном-то есть о правильном уходе и поливе должны позаботиться уже жители.<br/><br/>Здание имеет 4 надземных этажа с жилой функцией, последний этаж имеет доступ к мезонину, принадлежащему квартирам на 4-м этаже. Подземный этаж с функцией парковки разделен на две независимые зоны с отдельными входами, а также имеет технические помещения и жилые помещения.',
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Obiekt w trakcie realizacji',
        en: 'The object is under construction',
        ru: 'Объект в процессе реализации',
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: w rejonie ul. Szwed-Śniadowskiej w Krakowie (Kliny).<br/>Kraków<br/>Pow. działki – 3 047m2<br/>Pow. użytkowa budynku – 4 584 00m2<br/>Pow. całkowita – 5 516,60m2<br/>Kubatura – 16 143m3',
        en: 'Location: in the area of ul. Szwed-Śniadowska in Krakow (Kliny).<br/>Cracow<br/>area plots – 3047,00m2<br/>area usable area of the building – 4 584,00 m2<br/>area total – 5 516,60 m2<br/>Volume – 16 143,00m3',
        ru: 'Расположение: в районе ул. Швед-Смдовска в Кракове (клинья).<br/>Краков<br/>Площадь участка - 3 047м2<br/>Полезная площадь здания - 4 584 00m2<br/>Общая площадь - 5 516, 60м2<br/>Кубатура - 16 143m3',
        de: textIndex_1.sorry,
    },
    back: textIndex_1.back
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
        ru: 'TARNÓW-ресторан на холме ZBŁOBICE',
        de: textIndex_1.sorry
    },
    'body': {
        pl: 'Koncepcja obiektu na wzgórzu ,,Zgłobice’’ pod Tarnowem. Zadaniem było uzyskać formę która byłaby akcentem i dominantą a jednocześnie reklamą budynku usługowego w charakterystycznym miejscu przy trasie 94 z Krakowa do Tarnowa. Założenie obejmuje 3 kondygnacje usług w tym część podziemna ze sklepem kolonialnym, zapleczem magazynowym, technicznym, sanitariatami. Piętro o funkcji restauracyjnej z tarasami widokowymi i najwyższa kondygnacja z salą wielofunkcyjną (konferencyjną, taneczną itp.) również z tarasami widokowymi na każdą stronę.',
        en: 'The concept of the facility on the "Zgłobice" hill near Tarnów. The task was to obtain a form that would be an accent and dominant and at the same time an advertisement for a service building in a characteristic place on the route 94 from Krakow to Tarnów. The assumption includes 3 storeys of services, including the underground part with a colonial shop, storage and technical facilities, and toilets. The first floor with a restaurant function with viewing terraces and the top floor with a multi-functional room (conference, dance, etc.) also with viewing terraces on each side.',
        ru: 'Концепция объекта на холме,, Zgłobice " под Тарновом. Задача заключалась в том, чтобы получить форму, которая была бы акцентом и доминантой, а также рекламой служебного здания в характерном месте на маршруте 94 из Кракова в Тарнов.<br/><br/>Помещение включает в себя 3 этажа услуг, включая подземную часть с колониальным магазином, складскими помещениями, техническими, санитарными помещениями. Этаж с ресторанной функцией со смотровыми террасами и верхний этаж с многофункциональным залом (конференц-зал, танцевальный зал и т. д.) также со смотровыми террасами со всех сторон.',
        de: textIndex_1.sorry
    },
    'object': {
        pl: 'Obiekt w trakcie realizacji',
        en: 'The object is under construction',
        ru: 'Объект в процессе реализации',
        de: textIndex_1.sorry,
    },
    'option': {
        pl: 'Lokalizacja: w rejonie ul. Szwed-Śniadowskiej w Krakowie (Kliny).<br/>Kraków<br/>Pow. działki – 3 047m2<br/>Pow. użytkowa budynku – 4 584 00m2<br/>Pow. całkowita – 5 516,60m2<br/>Kubatura – 16 143m3',
        en: 'Location: in the area of ul. Szwed-Śniadowska in Krakow (Kliny).<br/>Cracow<br/>area plots – 3 690,20m2<br/>area usable area of the building – 350,00 m2<br/>area total – 732,00 m2<br/>Volume – 2 766,72m3',
        ru: 'Расположение: в районе ул. Швед-Снядовска в Кракове (клинья).<br/>Краков<br/>Площадь участка-3 047м2<br/>Полезная площадь здания-4 584 00m2<br/>Общая площадь-5 516, 60м2<br/>Кубическая емкость -16 143m3',
        de: textIndex_1.sorry,
    },
    back: textIndex_1.back
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
        ru: 'Проекты',
        de: textIndex_1.sorry
    },
    'alt-1': {
        pl: 'BUDYNEK BIUROWY ,,TECHMAR’’ W KIELCACH',
        en: '"TECHMAR" OFFICE BUILDING IN KIELCE',
        ru: 'Здание офиса  ,,TECHMAR " в Кельце.',
        de: textIndex_1.sorry
    },
    'alt-2': {
        pl: 'BUDYNEK BIUROWY ,,TECHMAR’’ W KIELCACH',
        en: '"TECHMAR" OFFICE BUILDING IN KIELCE',
        ru: 'ДОМ ИЗ ЩЕПЫ',
        de: textIndex_1.sorry
    },
    'alt-3': {
        pl: 'DOM Z BETONU',
        en: 'CONCRETE HOUSE',
        ru: 'БЕТОННЫЙ ДОМ',
        de: textIndex_1.sorry
    },
    'alt-4': {
        pl: 'ZOREN-SLICZNA, BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'ZOREN-SLICZNA, RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: 'ZOREN-Śliczna, многоквартирный дом',
        de: textIndex_1.sorry
    },
    'alt-5': {
        pl: 'BRZYCZYNA, OSIEDLE DOMÓW',
        en: 'BRZYCZYNA, ESTATE OF HOUSES',
        ru: 'БЖИЧИНА, поселок домов',
        de: textIndex_1.sorry
    },
    'alt-6': {
        pl: 'KLINY - BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'KLINY - RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: 'КЛИНЫ - многоквартирный дом',
        de: textIndex_1.sorry
    },
    'alt-7': {
        pl: 'TARNÓW – RESTAURACJA NA WZGÓRZU ZGŁOBICE',
        en: 'TARNÓW – RESTAURANT ON THE ZGŁOBICE HILL',
        ru: 'TARNÓW-ресторан на холме ZBŁOBICE',
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
exports.textMain = exports.back = exports.sorry = void 0;
;
exports.sorry = 'sorry, no translation';
exports.back = {
    pl: 'Powrót do strony Projektów',
    en: 'Back to Projects page',
    ru: 'Назад к странице Проекты',
    de: 'Zurück zur Seite Projekte'
};
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
        ru: 'Главная',
        de: textIndex_1.sorry
    },
    'our story': {
        pl: 'o mnie',
        en: 'About me',
        ru: 'О нас',
        de: textIndex_1.sorry
    },
    projects: {
        pl: 'projekty',
        en: 'projects',
        ru: 'Проекты',
        de: textIndex_1.sorry
    },
    contacts: {
        pl: 'kontakty',
        en: 'contacts',
        ru: 'Контакты',
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
    'our-story-1': {
        pl: 'Pracownia 69.studio powstała w roku 1986 r. jako rodzinna firma o profilu projektowo –budowlanym. W tym czasie pod nazwą F.P.B Z&Z. Firma realizowała głównie projekty związane z budową obiektów, termomodernizacją , również projektowaniem i kompleksową realizacją wnętrz.<br/><br/>W r. 2018 firma została reaktywowana i ewoluowała na pracownię o profilu architektonicznym pod nazwą 69.studio.<br/><br/>Wiedza przekazywana z pokolenia na pokolenie zaowocowała innowacyjnym rozwojem pracowni w dziedzinie kompleksowego projektowania , wykorzystując doświadczenie w realizacji inwestycji.<br/><br/>Podstawową działalnością  f-my jest projektowanie architektury, kompleksowe przygotowanie projektów wielobranżowych, doradztwo techniczne, managment, oraz nadzór nad realizacją nietypowych indywidualnych budynków a także wnętrz.<br/><br/>Firma wykonuje projekty architektoniczne i wielobranżowe oraz zapewnia kompleksowy proces od analizy działki, jej kontekstu i uwarunkowań formalno – prawnych, przez projekty koncepcyjne, budowlane i techniczne aż po proces uzyskiwania uzgodnień, pozwoleń, udział w postępowaniach przetargowych i nadzór nad realizacją',
        en: 'Pracownia 69.studio was established in 1986 as a family company with a design and construction profile. At that time, under the name F.P.B Z&Z. The company mainly carried out projects related to the construction of facilities, thermal modernization, as well as design and comprehensive implemen-tation of interiors.<br/><br/>In 2018, the company was reactivated and evolved into an architectural studio under the name 69.studio.<br/><br/>The knowledge passed down from generation to generation resulted in the innovative development of the studio in the field of comprehensive design, using experience in the implementation of invest-ments.<br/><br/>The main activity of the f-my is architecture design, comprehensive preparation of multi-discipline projects, technical consulting, management and supervision over the implementation of atypical indi-vidual buildings and interiors.<br/><br/>The company performs architectural and multi-discipline designs and provides a comprehensive pro-cess from the analysis of the plot, its context and formal and legal conditions, through conceptual, construction and technical designs, to the process of obtaining agreements, permits, participation in tender procedures and supervision over implementation.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'our-story-2': {
        pl: 'Właściciel pracowni : 69.studio, arch. Sławek Zieliński, jest Absolwentem  WA PK , uzyskał dyplom z wyróżnieniem pod kier. Prof. Witolda Cęckiewicza, opracowując zespołowy projekt urbanistyczno-architektoniczny ,,Krakowskiego Centrum Komunikacyjnego’’ wraz z terenami przyległymi , co zaowocowało późniejszymi realizacjami w tej części Krakowa. Jako główny architekt ,,nsMoonStudio’’ od 2015r. prowadził projekty i nadzorował realizację inwestycji mieszkalno - biurowych jak choćby zespół apartamentowy ,,Angel City ‘’ czy zespół biurowo - usługowy ,,HighFive’’ przy ul. Pawiej.<br/><br/>Doświadczenie i praktykę zdobywał jako architekt w f-mach A&E Engineering, Proinwest - Art,  P.P.A.B. w Krakowie.<br/><br/>Jako generalny projektant brał udział w wielu  znaczących dla współczesnej architektury projektach we współpracy z ,,MoonStudio’’ tj. np. :  ,,Alwernia Studios’’ – czyli znane kopuły przy Autostradzie A4 w Alwerni, Dom z gontu który w r. 2004 został nagrodzony pierwszą nagrodą SARP w kategorii budynek mieszkalny, a także wygrany konkurs i wielokrotnie nagradzany , zrealizowany obiekt ,, Siedziba ODSTK i Muzeum T. Kantora’’ w Krakowie.',
        en: 'Studio owner: 69.studio, arch. Sławek Zieliński, is a graduate of WA PK, he obtained a diploma with honors under the supervision of prof. Witold Cęckie-wicz, developing a team urban and architectural design of the "Kraków Communication Center" along with adjacent areas, which resulted in later implementations in this part of Krakow. As the main architect of "nsMoonStudio" since 2015. he led projects and supervised the implementation of residential and office investments, such as the "Angel City" apartment complex or the "HighFive" office and service complex at ul. peacock.<br/><br/>He gained experience and practice as an architect in A&E Engineering, Proinwest - Art, P.P.A.B. in Cracow.<br/><br/>As a general designer, he participated in many projects significant for contemporary architecture in cooperation with "MoonStudio", i.e., for example: "Alwernia Studios" - well-known domes on the A4 highway in Alwernia, 2004 it was awarded the first prize of SARP in the category of a residential building, as well as a won competition and an award-winning, completed object "The seat of ODSTK and the T. Kantor Museum" in Krakow.',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    },
    'about-me': {
        pl: 'O mnie',
        en: 'About me',
        ru: textIndex_1.sorry,
        de: textIndex_1.sorry
    }
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