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

/***/ "./src/client/js/videoUpload.js":
/*!**************************************!*\
  !*** ./src/client/js/videoUpload.js ***!
  \**************************************/
/***/ (() => {

eval("var videoCategories = document.querySelector(\".video__categories\");\nvar videoCategoriesPlusBtn = document.querySelector(\".video__categories__btn\");\nvar videoCategoriesBox = document.querySelector(\".video__categories__box\");\nvar videoTags = document.querySelector(\".video__tags\");\nvar videoTagsPlusBtn = document.querySelector(\".video__tags__btn\");\nvar videoTagsBox = document.querySelector(\".video__tags__box\");\n\nvar handleVideoCategories = function handleVideoCategories(event) {\n  event.preventDefault();\n  var categoryTags = document.createElement('div');\n  var categoryTag = document.createElement('span');\n  var categoryDelete = document.createElement('button');\n  categoryTag.innerText = videoCategories.value;\n  categoryDelete.innerText = \"❌\";\n  categoryTags.appendChild(categoryTag);\n  categoryTags.appendChild(categoryDelete);\n  videoCategoriesBox.appendChild(categoryTags);\n  videoCategories.value = \"\";\n};\n\nvar handleVideoTags = function handleVideoTags(event) {\n  event.preventDefault();\n  var tag = document.createElement('span');\n  tag.innerText = videoTags.value;\n  videoTagsBox.appendChild(tag);\n};\n\nvideoCategoriesPlusBtn.addEventListener(\"click\", handleVideoCategories);\nvideoTagsPlusBtn.addEventListener(\"click\", handleVideoTags);\n\n//# sourceURL=webpack://archi/./src/client/js/videoUpload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoUpload.js"]();
/******/ 	
/******/ })()
;