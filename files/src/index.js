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

/***/ "./src/js/loadJson.js":
/*!****************************!*\
  !*** ./src/js/loadJson.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadJsonData)\n/* harmony export */ });\n/* harmony import */ var _movies_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies/renderMovies.js */ \"./src/js/movies/renderMovies.js\");\n\n\n;\n\nclass loadJsonData {\n    async loadCurrentMovies() {\n        const res = await fetch(\"./src/jsonData/currentMovies.json\")\n        const data = await res.json();\n        return data.map(mv => new _movies_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mv)); \n    }\n\n    async loadUpcomingMovies() {\n        const res = await fetch(\"./src/jsonData/upcomingMovies.json\")\n        const data = await res.json();\n        return data.map(mv => new _movies_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mv)); \n    }\n}\n\n\n\n//# sourceURL=webpack://kino-ytterhogdal/./src/js/loadJson.js?");

/***/ }),

/***/ "./src/js/movies/renderMovies.js":
/*!***************************************!*\
  !*** ./src/js/movies/renderMovies.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movie)\n/* harmony export */ });\n\n\nclass Movie {\n    constructor (data) {\n        this.title = data.title;\n        this.rating = data.rating;\n        this.description = data.description;\n        this.posterUrl = data.posterUrl;\n        this.releaseDate = data.releaseDate; \n    }\n\n    render() {\n        const movieCard = document.createElement(\"li\");\n        movieCard.className = \"movieCard-item\";\n\n        const poster = document.createElement(\"img\");\n        poster.className =\"movieCard-poster\";\n        poster.src = this.posterUrl; \n        poster.alt = `Movie poster of ${this.title} `;\n        movieCard.append(poster);\n        \n\n        this.movieCard = movieCard; \n\n        return movieCard; \n\n    }\n\n}\n\n//# sourceURL=webpack://kino-ytterhogdal/./src/js/movies/renderMovies.js?");

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadJson_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loadJson.js */ \"./src/js/loadJson.js\");\n\n\n;\n\n(async () => {\n    const jData = new _loadJson_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n            \n    const current = await jData.loadCurrentMovies(); \n    current.slice(2, 5).forEach(Movie => \n        document.querySelector(\".current-movieList\").append(Movie.render())); \n\n    const upcoming = await jData.loadUpcomingMovies();\n    upcoming.slice(2, 5).forEach(Movie =>   \n        document.querySelector(\".upcoming-movieList\").append(Movie.render())); \n\n    //popular movies will be sorted depending on rating later with a rating filter, but we will show three random movies for now. \n    current.slice(0, 3).forEach(Movie =>   \n            document.querySelector(\".popular-movieList\").append(Movie.render())); \n      \n  })(); \n\n\n\n    \n\n//# sourceURL=webpack://kino-ytterhogdal/./src/js/pages/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/index.js");
/******/ 	
/******/ })()
;