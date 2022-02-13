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

/***/ "./1/1/index.ts":
/*!**********************!*\
  !*** ./1/1/index.ts ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    start();\r\n});\r\nfunction start() {\r\n    const canvas = document.getElementsByTagName('canvas')[0];\r\n    const ctx = canvas.getContext('2d');\r\n    let y1, y2, y3;\r\n    const y1Generator = UAMGenerator(400, -4, 0.1);\r\n    const y2Generator = freezeUAMGenerator(UAMGenerator(400, -4, 0.1), 8);\r\n    const y3Generator = freezeUAMGenerator(UAMGenerator(400, -4, 0.1), 16);\r\n    const a1 = createA('red');\r\n    const a2 = createA('green');\r\n    const a3 = createA('blue');\r\n    requestAnimationFrame(animate);\r\n    function animate() {\r\n        ctx.clearRect(0, 0, 1200, 800);\r\n        y1 = y1Generator.next().value;\r\n        y2 = y2Generator.next().value;\r\n        y3 = y3Generator.next().value;\r\n        ctx.drawImage(a1, 500, Math.floor(y1));\r\n        ctx.drawImage(a2, 600, Math.floor(y2));\r\n        ctx.drawImage(a3, 700, Math.floor(y3));\r\n        requestAnimationFrame(animate);\r\n    }\r\n}\r\nfunction* freezeUAMGenerator(generator, n) {\r\n    const frozenValue = generator.next().value;\r\n    for (let i = 0; i <= n; ++i) {\r\n        yield frozenValue;\r\n    }\r\n    while (true) {\r\n        yield generator.next().value;\r\n    }\r\n}\r\nfunction* UAMGenerator(x0, vx0, ax) {\r\n    let x = x0;\r\n    let vx = vx0;\r\n    while (true) {\r\n        x += vx;\r\n        vx += ax;\r\n        if (x >= x0) {\r\n            x = x0;\r\n            vx = vx0;\r\n        }\r\n        yield x;\r\n    }\r\n}\r\nfunction createA(color = 'blue') {\r\n    const canvas = document.createElement('canvas');\r\n    canvas.width = 60;\r\n    canvas.height = 100;\r\n    const ctx = canvas.getContext('2d');\r\n    drawA(ctx, 0, 0, color);\r\n    return canvas;\r\n}\r\nfunction drawA(ctx, x, y, color = 'blue') {\r\n    const a = new Path2D();\r\n    a.moveTo(x, y + 100);\r\n    a.lineTo(x + 25, y);\r\n    a.lineTo(x + 35, y);\r\n    a.lineTo(x + 60, y + 100);\r\n    a.lineTo(x + 50, y + 100);\r\n    a.lineTo(x + 35, y + 34);\r\n    a.lineTo(x + 25, y + 34);\r\n    a.lineTo(x + 10, y + 100);\r\n    a.lineTo(x, y + 100);\r\n    ctx.fillStyle = color;\r\n    ctx.fill(a);\r\n    ctx.fillRect(x + 15, y + 70, 30, 10);\r\n}\r\n\n\n//# sourceURL=webpack://cg/./1/1/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./1/1/index.ts"]();
/******/ 	
/******/ })()
;