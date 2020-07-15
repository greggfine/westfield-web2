module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1dv8":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Hero": "index_Hero__37DBn",
	"Hero__about": "index_Hero__about__2jUlL",
	"Hero__whatwedo": "index_Hero__whatwedo__2yJ82",
	"Hero__button": "index_Hero__button__2bbcr",
	"Hero__headerWrap": "index_Hero__headerWrap__1tFEH",
	"Hero__heading": "index_Hero__heading__2gFdS",
	"Hero__subheading": "index_Hero__subheading__3xdkH",
	"Hero__img": "index_Hero__img__3fwzM",
	"Hero__text": "index_Hero__text__1eVzx",
	"Hero__typewriter": "index_Hero__typewriter__1LOQH",
	"animated-text": "index_animated-text__1Mu-A",
	"serviceCardTitle": "index_serviceCardTitle__3aoS3",
	"cardIcon": "index_cardIcon__2YE5f",
	"cardGrid": "index_cardGrid__3TXB7",
	"serviceCard": "index_serviceCard__3zLsb",
	"secondaryCardContent": "index_secondaryCardContent__2_dKp"
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1dv8");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Index() {
  return __jsx("main", null, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__headerWrap
  }, __jsx("h1", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__heading
  }, "I DESIGN AND DEVELOP", __jsx("br", null)), __jsx("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__typewriter
  }, "WEBSITES THAT GET RESULTS"))), __jsx("section", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__about
  }, __jsx("h1", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__whatwedo
  }, "Gregg Fine provides website design & marketing strategies tailored to you"), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__text
  }, "I provide reliable and personal website building, redesign and maintenance services to nonprofits and small businesses. My websites are based on WordPress, a powerful open-source content management system. Your website will be tailored to your organization\u2019s needs and you will be getting rock-solid, one-on-one service. Whether you\u2019re just starting out or already established, let us here at Anna Young Design help your business achieve its full potential. From bold and colorful logo and brand designs, to sleek, professional looking web pages, Anna Young Design is ready and able to provide everything you need to get potential customers paying attention to what you and your company have to offer.")), __jsx("section", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardGrid
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCard
  }, __jsx("img", {
    src: "/mobile-icon.png",
    alt: "",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardIcon
  }), __jsx("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCardTitle
  }, "Website Design & Development"), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.secondaryCardContent
  }, "We create truly customized websites, everything from beautiful, eye-catching and elegant designs to sleek, professional web pages that are sure to get you noticed.")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCard
  }, __jsx("img", {
    src: "/mobile-icon.png",
    alt: "",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardIcon
  }), __jsx("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCardTitle
  }, "SEO"), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.secondaryCardContent
  }, "Our innovative SEO strategies, as well as our wealth of knowledge regarding search algorithms will enable you to rise to the very top of the search rankings.")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCard
  }, __jsx("img", {
    src: "/mobile-icon.png",
    alt: "",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardIcon
  }), __jsx("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCardTitle
  }, "Email Marketing"), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.secondaryCardContent
  }, "We can help you reach out in the best possible way through our email marketing expertise. Retaining valuable customers and keeping clients abreast of your company\u2019s latest goings-on."))));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);
/* 
NOTES: Link provides an onClick function around whatever it's wrapping
*/

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });