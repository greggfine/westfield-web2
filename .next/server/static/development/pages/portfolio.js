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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Website.js":
/*!*******************************!*\
  !*** ./components/Website.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Website_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Website.module.scss */ "./components/Website.module.scss");
/* harmony import */ var _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Website_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollmagic */ "react-scrollmagic");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Website.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Site = ({
  website
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__myCard,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__["Controller"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__["Scene"], {
  duration: 1500,
  reverse: false,
  triggerHook: 0.7,
  classToggle: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardTrans,
  offset: 10,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card,
  key: website.name,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("div", {
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__innerCard,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {
  variant: "top",
  src: website.img,
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardImg,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("h4", {
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardTitle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, website.name), __jsx("p", {
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardText,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, website.description), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
  variant: "outline-primary",
  href: website.link,
  target: "_blank",
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardBtn,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "VIEW WEBSITE"))))))));

/* harmony default export */ __webpack_exports__["default"] = (Site);

/***/ }),

/***/ "./components/Website.module.scss":
/*!****************************************!*\
  !*** ./components/Website.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Card": "Website_Card__3Zo-r",
	"Card__cardTrans": "Website_Card__cardTrans__1oKTW",
	"Card__myCard": "Website_Card__myCard__3me9C",
	"Card__innerCard": "Website_Card__innerCard__oJj2D",
	"Card__cardImg": "Website_Card__cardImg__mVvOp",
	"Card__cardTitle": "Website_Card__cardTitle__1ZsRD",
	"Card__cardText": "Website_Card__cardText__1LMqt",
	"Card__cardBtn": "Website_Card__cardBtn__JsFjZ"
};

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Website */ "./components/Website.js");
/* harmony import */ var _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.module.scss */ "./pages/portfolio.module.scss");
/* harmony import */ var _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollmagic */ "react-scrollmagic");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _websites_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../websites.json */ "./websites.json");
var _websites_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../websites.json */ "./websites.json", 1);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Portfolio(props) {
  return __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websitesWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h2", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__wrapperHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Websites"), __jsx("ul", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, _websites_json__WEBPACK_IMPORTED_MODULE_4__.sites.map(site => __jsx(_components_Website__WEBPACK_IMPORTED_MODULE_1__["default"], {
    website: site,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })))), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Scene"], {
    duration: 1500,
    reverse: true,
    triggerHook: 0.7,
    classToggle: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__horizontalRow__trans,
    offset: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__horizontalRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websitesWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h2", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__wrapperHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Web Apps"), __jsx("ul", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, _websites_json__WEBPACK_IMPORTED_MODULE_4__.apps.map(site => __jsx(_components_Website__WEBPACK_IMPORTED_MODULE_1__["default"], {
    website: site,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), ";"));
}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./pages/portfolio.module.scss":
/*!*************************************!*\
  !*** ./pages/portfolio.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Portfolio__websites": "portfolio_Portfolio__websites__2rPvN",
	"Portfolio__horizontalRow": "portfolio_Portfolio__horizontalRow__kiyvM",
	"Portfolio__horizontalRow__trans": "portfolio_Portfolio__horizontalRow__trans__Q5gmK",
	"Portfolio__heading": "portfolio_Portfolio__heading__3RS8x",
	"Portfolio__title": "portfolio_Portfolio__title__dcCcs",
	"Portfolio__subheading": "portfolio_Portfolio__subheading__1pb3A",
	"Portfolio__headerWrapper": "portfolio_Portfolio__headerWrapper__13Jft",
	"Portfolio__websitesWrapper": "portfolio_Portfolio__websitesWrapper__3nkVU",
	"Portfolio__wrapperHeading": "portfolio_Portfolio__wrapperHeading__3jLI2"
};

/***/ }),

/***/ "./websites.json":
/*!***********************!*\
  !*** ./websites.json ***!
  \***********************/
/*! exports provided: sites, apps, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sites\":[{\"name\":\"Gregg Fine Dev\",\"img\":\"/website1.png\",\"link\":\"https://greggfinedev.com/\",\"description\":\"The web development site of JavaScript programmer Gregg Fine\"},{\"name\":\"Hidden Tiger Music Inc.\",\"img\":\"/website2.png\",\"link\":\"http://hiddentigermusic.com/\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"},{\"name\":\"Synth Explorer\",\"img\":\"/website3.png\",\"link\":\"https://greggfine.github.io/synth-explorer-2020/#!/home\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"}],\"apps\":[{\"name\":\"Jazz Guitar Game\",\"img\":\"/website4.png\",\"link\":\"https://www.greggfineguitar.com\",\"description\":\"Guess the name of the Jazz guitarist you are listening to.\"},{\"name\":\"Rhythmic Ear Trainer\",\"img\":\"/website5.png\",\"link\":\"https://greggfine.github.io/subdivision-app/\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"},{\"name\":\"Searchable Music Library\",\"img\":\"/website6.png\",\"link\":\"https://immense-atoll-44421.herokuapp.com/search\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"}]}");

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/portfolio.js */"./pages/portfolio.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ "react-scrollmagic":
/*!************************************!*\
  !*** external "react-scrollmagic" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollmagic");

/***/ })

/******/ });
//# sourceMappingURL=portfolio.js.map