/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./2/1/index.ts":
/*!**********************!*\
  !*** ./2/1/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_dnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/dnd */ \"./src/dnd.ts\");\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    initFileDialog();\r\n});\r\nfunction initFileDialog() {\r\n    initDialog(document.getElementById('file-button'), document.getElementById('file-dialog'));\r\n    const openFileButton = document.getElementById('file-open');\r\n    openFileButton.addEventListener('click', loadImg);\r\n}\r\nfunction initDialog(button, dialog) {\r\n    button.addEventListener('click', () => dialog.classList.toggle('hide'));\r\n    dialog.addEventListener('focusout', () => dialog.classList.toggle('hide'));\r\n}\r\nfunction loadImg() {\r\n    const input = document.createElement('input');\r\n    input.type = 'file';\r\n    input.accept = '.png, .jpg, .jpeg, .bmp';\r\n    input.click();\r\n    input.addEventListener('change', () => {\r\n        const file = input.files[0];\r\n        const img = document.createElement('img');\r\n        img.src = URL.createObjectURL(file);\r\n        document.getElementById('img-container').append(img);\r\n        (0,_src_dnd__WEBPACK_IMPORTED_MODULE_0__.useDnd)(img);\r\n    }, { once: true });\r\n}\r\n\n\n//# sourceURL=webpack://cg/./2/1/index.ts?");

/***/ }),

/***/ "./src/clamp.ts":
/*!**********************!*\
  !*** ./src/clamp.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clamp\": () => (/* binding */ clamp)\n/* harmony export */ });\nfunction clamp(x, min, max) {\r\n    return Math.max(min, Math.min(x, max));\r\n}\r\n\n\n//# sourceURL=webpack://cg/./src/clamp.ts?");

/***/ }),

/***/ "./src/dnd.ts":
/*!********************!*\
  !*** ./src/dnd.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useDnd\": () => (/* binding */ useDnd)\n/* harmony export */ });\n/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clamp */ \"./src/clamp.ts\");\n\r\nfunction useDnd(element) {\r\n    element.style.position = 'relative';\r\n    element.style.left = '0';\r\n    element.style.top = '0';\r\n    element.addEventListener('mousedown', downEvent => {\r\n        downEvent.preventDefault();\r\n        const startX = downEvent.x - parseInt(element.style.left);\r\n        const startY = downEvent.y - parseInt(element.style.top);\r\n        const onMove = (event) => {\r\n            const newLeft = (0,_clamp__WEBPACK_IMPORTED_MODULE_0__.clamp)(event.x - startX, 0, element.parentElement.clientWidth - element.clientWidth);\r\n            const newTop = (0,_clamp__WEBPACK_IMPORTED_MODULE_0__.clamp)(event.y - startY, 0, element.parentElement.clientHeight - element.clientHeight);\r\n            element.style.left = newLeft + 'px';\r\n            element.style.top = newTop + 'px';\r\n        };\r\n        element.parentElement.addEventListener('mousemove', onMove);\r\n        window.addEventListener('mouseup', () => {\r\n            element.parentElement.removeEventListener('mousemove', onMove);\r\n        }, { once: true });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://cg/./src/dnd.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./2/1/index.ts");
/******/ 	
/******/ })()
;