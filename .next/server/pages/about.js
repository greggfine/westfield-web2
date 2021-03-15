module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hero_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.module.scss */ \"./pages/hero.module.scss\");\n/* harmony import */ var _hero_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hero_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/HTMusic/Desktop/PROJECTS/the-code-creative-website_002/pages/about.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst About = () => {\n  return __jsx(\"div\", {\n    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"/man2.jpg\",\n    alt: \"\",\n    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__testImg,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0IiwiaGVyb1N0eWxlcyIsIkhlcm8iLCJIZXJvX190ZXN0SW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHdEQUFVLENBQUNDLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxXQUFUO0FBQXFCLE9BQUcsRUFBQyxFQUF6QjtBQUE0QixhQUFTLEVBQUVELHdEQUFVLENBQUNFLGFBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QsQ0FORDs7QUFRZUgsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZXJvU3R5bGVzIGZyb20gXCIuL2hlcm8ubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2hlcm9TdHlsZXMuSGVyb30+XG4gICAgICA8aW1nIHNyYz1cIi9tYW4yLmpwZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT17aGVyb1N0eWxlcy5IZXJvX190ZXN0SW1nfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "./pages/hero.module.scss":
/*!********************************!*\
  !*** ./pages/hero.module.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Hero\": \"hero_Hero__31-s7\",\n\t\"Hero__highlightParent\": \"hero_Hero__highlightParent__Y1bsj\",\n\t\"Hero__highlight\": \"hero_Hero__highlight__22G-0\",\n\t\"Hero__about\": \"hero_Hero__about__2tpOb\",\n\t\"Hero__whatwedo\": \"hero_Hero__whatwedo__7mm8D\",\n\t\"Hero__button\": \"hero_Hero__button__3M1u7\",\n\t\"Hero__headerWrap\": \"hero_Hero__headerWrap__3lDLp\",\n\t\"Hero__heading\": \"hero_Hero__heading__3nkAC\",\n\t\"Hero__subheading\": \"hero_Hero__subheading__R9GbO\",\n\t\"Hero__img\": \"hero_Hero__img__2u-GH\",\n\t\"Hero__homeImg\": \"hero_Hero__homeImg__13R3g\",\n\t\"Hero__testImg\": \"hero_Hero__testImg___oWel\",\n\t\"Hero__text\": \"hero_Hero__text__35SzC\",\n\t\"Hero__typewriter\": \"hero_Hero__typewriter__2r780\",\n\t\"animated-text\": \"hero_animated-text__2UNIN\",\n\t\"Hero__textTrans\": \"hero_Hero__textTrans__2YWhK\",\n\t\"Hero__whatwedoTrans\": \"hero_Hero__whatwedoTrans__12yBR\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9oZXJvLm1vZHVsZS5zY3NzP2Q0OWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2hlcm8ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJIZXJvXCI6IFwiaGVyb19IZXJvX18zMS1zN1wiLFxuXHRcIkhlcm9fX2hpZ2hsaWdodFBhcmVudFwiOiBcImhlcm9fSGVyb19faGlnaGxpZ2h0UGFyZW50X19ZMWJzalwiLFxuXHRcIkhlcm9fX2hpZ2hsaWdodFwiOiBcImhlcm9fSGVyb19faGlnaGxpZ2h0X18yMkctMFwiLFxuXHRcIkhlcm9fX2Fib3V0XCI6IFwiaGVyb19IZXJvX19hYm91dF9fMnRwT2JcIixcblx0XCJIZXJvX193aGF0d2Vkb1wiOiBcImhlcm9fSGVyb19fd2hhdHdlZG9fXzdtbThEXCIsXG5cdFwiSGVyb19fYnV0dG9uXCI6IFwiaGVyb19IZXJvX19idXR0b25fXzNNMXU3XCIsXG5cdFwiSGVyb19faGVhZGVyV3JhcFwiOiBcImhlcm9fSGVyb19faGVhZGVyV3JhcF9fM2xETHBcIixcblx0XCJIZXJvX19oZWFkaW5nXCI6IFwiaGVyb19IZXJvX19oZWFkaW5nX18zbmtBQ1wiLFxuXHRcIkhlcm9fX3N1YmhlYWRpbmdcIjogXCJoZXJvX0hlcm9fX3N1YmhlYWRpbmdfX1I5R2JPXCIsXG5cdFwiSGVyb19faW1nXCI6IFwiaGVyb19IZXJvX19pbWdfXzJ1LUdIXCIsXG5cdFwiSGVyb19faG9tZUltZ1wiOiBcImhlcm9fSGVyb19faG9tZUltZ19fMTNSM2dcIixcblx0XCJIZXJvX190ZXN0SW1nXCI6IFwiaGVyb19IZXJvX190ZXN0SW1nX19fb1dlbFwiLFxuXHRcIkhlcm9fX3RleHRcIjogXCJoZXJvX0hlcm9fX3RleHRfXzM1U3pDXCIsXG5cdFwiSGVyb19fdHlwZXdyaXRlclwiOiBcImhlcm9fSGVyb19fdHlwZXdyaXRlcl9fMnI3ODBcIixcblx0XCJhbmltYXRlZC10ZXh0XCI6IFwiaGVyb19hbmltYXRlZC10ZXh0X18yVU5JTlwiLFxuXHRcIkhlcm9fX3RleHRUcmFuc1wiOiBcImhlcm9fSGVyb19fdGV4dFRyYW5zX18yWVdoS1wiLFxuXHRcIkhlcm9fX3doYXR3ZWRvVHJhbnNcIjogXCJoZXJvX0hlcm9fX3doYXR3ZWRvVHJhbnNfXzEyeUJSXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hero.module.scss\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });