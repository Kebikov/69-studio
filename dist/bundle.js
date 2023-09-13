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
                    console.log('Yes');
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
    console.log();
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intersectionObserver);


    

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "menuFill": () => (/* binding */ menuFill)
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
/* harmony export */   "numberScroll": () => (/* binding */ numberScroll)
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




window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.menu)();
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.menuFill)();
    (0,_modules_text__WEBPACK_IMPORTED_MODULE_1__.numberScroll)();
    (0,_modules_backToTop__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map