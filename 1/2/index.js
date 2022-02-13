/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./1/2/index.ts":
/*!**********************!*\
  !*** ./1/2/index.ts ***!
  \**********************/
/***/ (() => {

eval("function useDnd(canvas) {\r\n    canvas.style.position = 'absolute';\r\n    canvas.style.top = '5px';\r\n    canvas.style.left = '5px';\r\n    let dnd = false;\r\n    canvas.addEventListener('mousedown', event => {\r\n        dnd = true;\r\n    });\r\n    document.addEventListener('mousemove', event => {\r\n        if (dnd) {\r\n            canvas.style.top = event.y + 'px';\r\n            canvas.style.left = event.x + 'px';\r\n        }\r\n    });\r\n    document.addEventListener('mouseup', event => {\r\n        dnd = false;\r\n    });\r\n}\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const canvas = document.getElementsByTagName('canvas')[0];\r\n    canvas.width = 220;\r\n    canvas.height = 140;\r\n    useDnd(canvas);\r\n    const ctx = canvas.getContext('2d');\r\n    ctx.fillStyle = 'rgb(186,237,239)';\r\n    ctx.fillRect(0, 0, canvas.width, 110);\r\n    ctx.fillStyle = 'rgb(103,159,109)';\r\n    ctx.fillRect(0, 110, canvas.width, 30);\r\n    ctx.fillStyle = 'rgb(192,154,110)';\r\n    ctx.fillRect(60, 60, 100, 60);\r\n    ctx.fillStyle = 'rgb(168,133,93)';\r\n    ctx.fillRect(90, 120, 40, 3);\r\n    ctx.fillStyle = 'rgb(175,80,67)';\r\n    ctx.fillRect(140, 0, 20, 50);\r\n    const roof = new Path2D();\r\n    roof.moveTo(40, 60);\r\n    roof.lineTo(110, 10);\r\n    roof.lineTo(180, 60);\r\n    roof.lineTo(40, 60);\r\n    ctx.fillStyle = 'rgb(114,91,72)';\r\n    ctx.fill(roof);\r\n    drawWindow(ctx, 65, 70);\r\n    drawWindow(ctx, 125, 70);\r\n    ctx.fillStyle = 'rgb(114,91,72)';\r\n    ctx.fillRect(100, 90, 20, 30);\r\n    ctx.beginPath();\r\n    ctx.arc(103, 108, 2, 0, Math.PI * 2, true);\r\n    ctx.fillStyle = 'rgb(161,127,100)';\r\n    ctx.fill();\r\n    for (let i = 0; i < 5; ++i) {\r\n        drawPlank(ctx, i * 15, 90);\r\n        drawPlank(ctx, 150 + i * 15, 90);\r\n    }\r\n});\r\nfunction drawPlank(ctx, x, y) {\r\n    ctx.fillStyle = 'rgb(110,99,86)';\r\n    ctx.fillRect(x, y, 10, 50);\r\n}\r\nfunction drawWindow(ctx, x, y) {\r\n    ctx.fillStyle = 'rgb(159,213,215)';\r\n    ctx.fillRect(x, y, 30, 30);\r\n    ctx.strokeStyle = 'black';\r\n    ctx.strokeRect(x, y, 30, 30);\r\n    ctx.beginPath();\r\n    ctx.moveTo(x, y + 15);\r\n    ctx.lineTo(x + 30, y + 15);\r\n    ctx.moveTo(x + 15, y);\r\n    ctx.lineTo(x + 15, y + 30);\r\n    ctx.stroke();\r\n}\r\n\n\n//# sourceURL=webpack://cg/./1/2/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./1/2/index.ts"]();
/******/ 	
/******/ })()
;