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

/***/ "./1/2/index.ts":
/*!**********************!*\
  !*** ./1/2/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_dnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/dnd */ \"./src/dnd.ts\");\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    drawPicture();\r\n});\r\nfunction drawPicture() {\r\n    const canvas = document.getElementsByTagName('canvas')[0];\r\n    canvas.width = 220;\r\n    canvas.height = 140;\r\n    (0,_src_dnd__WEBPACK_IMPORTED_MODULE_0__.useDnd)(canvas);\r\n    const ctx = canvas.getContext('2d');\r\n    drawSky(ctx, canvas);\r\n    drawGrass(ctx, canvas);\r\n    drawWalls(ctx);\r\n    drawPipe(ctx);\r\n    drawDoor(ctx);\r\n    drawRoof(ctx);\r\n    drawWindow(ctx, 65, 70);\r\n    drawWindow(ctx, 125, 70);\r\n    drawFence(ctx);\r\n}\r\nfunction drawSky(ctx, canvas) {\r\n    ctx.fillStyle = 'rgb(186,237,239)';\r\n    ctx.fillRect(0, 0, canvas.width, 110);\r\n}\r\nfunction drawGrass(ctx, canvas) {\r\n    ctx.fillStyle = 'rgb(103,159,109)';\r\n    ctx.fillRect(0, 110, canvas.width, 30);\r\n}\r\nfunction drawWalls(ctx) {\r\n    ctx.fillStyle = 'rgb(192,154,110)';\r\n    ctx.fillRect(60, 60, 100, 60);\r\n}\r\nfunction drawPipe(ctx) {\r\n    ctx.fillStyle = 'rgb(175,80,67)';\r\n    ctx.fillRect(140, 0, 20, 50);\r\n}\r\nfunction drawDoor(ctx) {\r\n    ctx.fillStyle = 'rgb(168,133,93)';\r\n    ctx.fillRect(90, 120, 40, 3);\r\n    ctx.fillStyle = 'rgb(114,91,72)';\r\n    ctx.fillRect(100, 90, 20, 30);\r\n    ctx.beginPath();\r\n    ctx.arc(103, 108, 2, 0, Math.PI * 2, true);\r\n    ctx.fillStyle = 'rgb(161,127,100)';\r\n    ctx.fill();\r\n}\r\nfunction drawRoof(ctx) {\r\n    const roof = new Path2D();\r\n    roof.moveTo(40, 60);\r\n    roof.lineTo(110, 10);\r\n    roof.lineTo(180, 60);\r\n    roof.lineTo(40, 60);\r\n    ctx.fillStyle = 'rgb(114,91,72)';\r\n    ctx.fill(roof);\r\n}\r\nfunction drawFence(ctx) {\r\n    for (let i = 0; i < 5; ++i) {\r\n        drawPlank(ctx, i * 15, 90);\r\n        drawPlank(ctx, 150 + i * 15, 90);\r\n    }\r\n}\r\nfunction drawPlank(ctx, x, y) {\r\n    ctx.fillStyle = 'rgb(110,99,86)';\r\n    ctx.fillRect(x, y, 10, 50);\r\n}\r\nfunction drawWindow(ctx, x, y) {\r\n    ctx.fillStyle = 'rgb(159,213,215)';\r\n    ctx.fillRect(x, y, 30, 30);\r\n    ctx.strokeStyle = 'black';\r\n    ctx.strokeRect(x, y, 30, 30);\r\n    ctx.beginPath();\r\n    ctx.moveTo(x, y + 15);\r\n    ctx.lineTo(x + 30, y + 15);\r\n    ctx.moveTo(x + 15, y);\r\n    ctx.lineTo(x + 15, y + 30);\r\n    ctx.stroke();\r\n}\r\n\n\n//# sourceURL=webpack://cg/./1/2/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./1/2/index.ts");
/******/ 	
/******/ })()
;