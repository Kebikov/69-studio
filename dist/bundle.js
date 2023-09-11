/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
//= menu 
const menu = () => {
    try {
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
        window.addEventListener('resize', changeHight);

        function changeHight() {
            const menu = document.querySelector('.menu');
            const menuFill = document.querySelector('.menu-fill');
    
            const menuHeight = menu.offsetHeight;
            menuFill.style.paddingTop = `${menuHeight - 1}px`;
            console.log(menuHeight);
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
        const text69Size = parseInt( window.getComputedStyle(text69).getPropertyValue('font-size') );
        console.log('st');
        console.log(text69Size);
        if(text69){
            window.addEventListener('scroll', scroll69);

            function scroll69() {
                console.log(text69Size);
                console.log(window.scrollY);
                text69.style.fontSize = `${text69Size - window.scrollY / 2.5}px`;
                console.log(`${text69Size - window.scrollY}px`);
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



window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.menu)();
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.menuFill)();
    (0,_modules_text__WEBPACK_IMPORTED_MODULE_1__.numberScroll)();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map