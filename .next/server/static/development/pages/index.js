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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/creativity.jpg":
/*!*******************************!*\
  !*** ./images/creativity.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/creativity-e82594eda72c1e8c96a0fc937f52810f.jpg";

/***/ }),

/***/ "./images/esports.jpg":
/*!****************************!*\
  !*** ./images/esports.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/esports-4dc69f088cb523cf26941362c88cc5e2.jpg";

/***/ }),

/***/ "./images/spotify.png":
/*!****************************!*\
  !*** ./images/spotify.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/spotify-8ed71cc3888f276e057d381c2e08f40e.png";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_spotify_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/spotify.png */ "./images/spotify.png");
/* harmony import */ var _images_spotify_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_spotify_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_creativity_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/creativity.jpg */ "./images/creativity.jpg");
/* harmony import */ var _images_creativity_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_creativity_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_esports_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/esports.jpg */ "./images/esports.jpg");
/* harmony import */ var _images_esports_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_esports_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Index() {
  return __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("h1", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "WE DESIGN AND DEVELOP", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.typewriter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "WEBSITES THAT GET RESULTS"), __jsx("section", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__about,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__whatwedo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Gregg Fine provides website design & marketing strategies tailored to you"), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "I provide reliable and personal website building, redesign and maintenance services to nonprofits and small businesses. My websites are based on WordPress, a powerful open-source content management system. Your website will be tailored to your organization\u2019s needs and you will be getting rock-solid, one-on-one service.")), __jsx("section", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.cardGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.serviceCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: "/mobile-icon.png",
    alt: "",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.cardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Website Design & Development"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "We create truly customized websites, everything from beautiful, eye-catching and elegant designs to sleek, professional web pages that are sure to get you noticed.")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.serviceCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("img", {
    src: "/mobile-icon.png",
    alt: "",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.cardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "SEO"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Our innovative SEO strategies, as well as our wealth of knowledge regarding search algorithms will enable you to rise to the very top of the search rankings.")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.serviceCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("img", {
    src: "/mobile-icon.png",
    alt: "",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.cardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Email Marketing"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "We can help you reach out in the best possible way through our email marketing expertise. Retaining valuable customers and keeping clients abreast of your company\u2019s latest goings-on."))));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);
/* 
NOTES: Link provides an onClick function around whatever it's wrapping
*/

/***/ }),

/***/ "./pages/index.module.scss":
/*!*********************************!*\
  !*** ./pages/index.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Hero": "index_Hero__37DBn",
	"Hero__about": "index_Hero__about__2jUlL",
	"Hero__whatwedo": "index_Hero__whatwedo__2yJ82",
	"Hero__button": "index_Hero__button__2bbcr",
	"Hero__heading": "index_Hero__heading__2gFdS",
	"Hero__subheading": "index_Hero__subheading__3xdkH",
	"Hero__img": "index_Hero__img__3fwzM",
	"Hero__text": "index_Hero__text__1eVzx",
	"Hero__waveContainer": "index_Hero__waveContainer__Damyq",
	"typewriter": "index_typewriter__12Agr",
	"animated-text": "index_animated-text__1Mu-A",
	"cardIcon": "index_cardIcon__2YE5f",
	"cardGrid": "index_cardGrid__3TXB7",
	"serviceCard": "index_serviceCard__3zLsb"
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Carousel":
/*!*******************************************!*\
  !*** external "react-bootstrap/Carousel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map