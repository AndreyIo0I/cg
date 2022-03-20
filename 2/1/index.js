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

/***/ "./2/1/index.ts":
/*!**********************!*\
  !*** ./2/1/index.ts ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    initFileDialog();\r\n});\r\nfunction initFileDialog() {\r\n    initDialog(document.getElementById('file-button'), document.getElementById('file-dialog'));\r\n    const openFileButton = document.getElementById('file-open');\r\n    openFileButton.addEventListener('click', () => {\r\n        const input = document.createElement('input');\r\n        input.type = 'file';\r\n        input.accept = '.png, .jpg, .jpeg, .bmp';\r\n        input.click();\r\n        input.addEventListener('change', async () => {\r\n            const file = input.files[0];\r\n            const img = document.createElement('img');\r\n            img.src = URL.createObjectURL(file);\r\n            document.getElementById('img-container').append(img);\r\n            useDnd(img);\r\n        });\r\n    });\r\n}\r\nfunction useDnd(element) {\r\n    let dnd = {\r\n        x: 0,\r\n        y: 0,\r\n    };\r\n    element.style.position = 'relative';\r\n    function onMove(event) {\r\n        element.style.left = event.x - dnd.x + 'px';\r\n        element.style.top = event.y - dnd.y + 'px';\r\n    }\r\n    element.addEventListener('mousedown', event => {\r\n        event.preventDefault();\r\n        dnd = {\r\n            x: event.x,\r\n            y: event.y,\r\n        };\r\n        element.parentElement.addEventListener('mousemove', onMove);\r\n    });\r\n    window.addEventListener('mouseup', event => {\r\n        element.parentElement.removeEventListener('mousemove', onMove);\r\n    });\r\n}\r\nfunction initDialog(button, dialog) {\r\n    button.addEventListener('click', () => dialog.classList.toggle('hide'));\r\n}\r\n\n\n//# sourceURL=webpack://cg/./2/1/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./2/1/index.ts"]();
/******/ 	
/******/ })()
;