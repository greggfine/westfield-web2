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
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Index() {
  return __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__headerWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "I DESIGN AND DEVELOP", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__typewriter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "WEBSITES THAT GET RESULTS")), __jsx("section", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__about,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__whatwedo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Gregg Fine provides website design & marketing strategies", " ", __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__highlightParent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "tailored to you", __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__highlight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Hero__text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "I provide reliable and personal website building, redesign and maintenance services to nonprofits and small businesses. My websites are based on WordPress, a powerful open-source content management system. Your website will be tailored to your organization\u2019s needs and you will be getting rock-solid, one-on-one service. Whether you\u2019re just starting out or already established, let us here at Anna Young Design help your business achieve its full potential. From bold and colorful logo and brand designs, to sleek, professional looking web pages, Anna Young Design is ready and able to provide everything you need to get potential customers paying attention to what you and your company have to offer.")), __jsx("section", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("img", {
    src: "/web-icon-gravit.png",
    alt: "",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Website Design & Development"), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.secondaryCardContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "We create truly customized websites, everything from beautiful, eye-catching and elegant designs to sleek, professional web pages that are sure to get you noticed.")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("img", {
    src: "/seo-icon-gravit.png",
    alt: "",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "SEO"), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.secondaryCardContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Our innovative SEO strategies, as well as our wealth of knowledge regarding search algorithms will enable you to rise to the very top of the search rankings.")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("img", {
    src: "/email-icon-gravit.png",
    alt: "",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceCardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Email Marketing"), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.secondaryCardContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
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
	"Hero__highlightParent": "index_Hero__highlightParent__1p5AS",
	"Hero__highlight": "index_Hero__highlight__3MUwR",
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map