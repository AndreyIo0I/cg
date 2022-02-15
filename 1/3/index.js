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

/***/ "./1/3/index.ts":
/*!**********************!*\
  !*** ./1/3/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_canvas_pixel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/canvas/pixel */ \"./src/canvas/pixel.ts\");\n\r\nconst PADDING = 100;\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const canvas = document.getElementsByTagName('canvas')[0];\r\n    const ctx = canvas.getContext('2d');\r\n    ctx.strokeStyle = 'red';\r\n    ctx.lineWidth = 1;\r\n    ctx.strokeRect(PADDING, PADDING, canvas.width - PADDING * 2, canvas.height - PADDING * 2);\r\n    const form = document.getElementsByTagName('form')[0];\r\n    form.addEventListener('submit', event => {\r\n        event.preventDefault();\r\n        const formData = new FormData(form);\r\n        const x = parseInt(formData.get('x').toString()) || 0;\r\n        const y = parseInt(formData.get('y').toString()) || 0;\r\n        const r = parseInt(formData.get('r').toString()) || 0;\r\n        drawCircle(ctx, x, y, r);\r\n    });\r\n    form.getElementsByTagName('button')[0].click();\r\n});\r\nfunction drawCircle(ctx, x0, y0, r) {\r\n    let x = 0;\r\n    let y = r;\r\n    let radiusError = 0;\r\n    while (y >= x) {\r\n        setMirroredPixels(ctx, x0, x, y0, y);\r\n        x++;\r\n        if (radiusError < 0) {\r\n            radiusError += 2 * x + 1;\r\n        }\r\n        else {\r\n            --y;\r\n            radiusError += 2 * (x - y + 1);\r\n        }\r\n    }\r\n}\r\nfunction setMirroredPixels(ctx, x0, x, y0, y) {\r\n    setPixel(ctx, x0 + x, y0 + y);\r\n    setPixel(ctx, x0 + x, y0 - y);\r\n    setPixel(ctx, x0 - x, y0 + y);\r\n    setPixel(ctx, x0 - x, y0 - y);\r\n    setPixel(ctx, x0 + y, y0 + x);\r\n    setPixel(ctx, x0 + y, y0 - x);\r\n    setPixel(ctx, x0 - y, y0 + x);\r\n    setPixel(ctx, x0 - y, y0 - x);\r\n}\r\nfunction setPixel(ctx, x, y) {\r\n    if (x > PADDING && y > PADDING && x < ctx.canvas.width - PADDING && y < ctx.canvas.height - PADDING)\r\n        ctx.putImageData(_src_canvas_pixel__WEBPACK_IMPORTED_MODULE_0__.PIXEL, x, y);\r\n}\r\n\n\n//# sourceURL=webpack://cg/./1/3/index.ts?");

/***/ }),

/***/ "./src/canvas/pixel.ts":
/*!*****************************!*\
  !*** ./src/canvas/pixel.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PIXEL\": () => (/* binding */ PIXEL)\n/* harmony export */ });\nconst PIXEL = document.createElement('canvas').getContext('2d').createImageData(1, 1);\r\nconst d = PIXEL.data;\r\nd[0] = 0;\r\nd[1] = 0;\r\nd[2] = 0;\r\nd[3] = 255;\r\n\r\n\n\n//# sourceURL=webpack://cg/./src/canvas/pixel.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./1/3/index.ts");
/******/ 	
/******/ })()
;