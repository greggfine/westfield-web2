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

/***/ "./components/Jumbo.js":
/*!*****************************!*\
  !*** ./components/Jumbo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Jumbotron */ "react-bootstrap/Jumbotron");
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Jumbo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Jumbo = ({
  headingText
}) => __jsx("div", {
  className: "jsx-184610099" + " " + "Jumbo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-184610099" + " " + "jumbotron-heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, headingText), __jsx("p", {
  className: "jsx-184610099" + " " + "jumbotron-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "We've designed websites for the community for the past decade"), __jsx("p", {
  className: "jsx-184610099",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "184610099",
  __self: undefined
}, ".Jumbo.jsx-184610099{height:450px;background-color:#eee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.jumbotron-heading.jsx-184610099{text-align:center;}.jumbotron-text.jsx-184610099{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9jb21wb25lbnRzL0p1bWJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUdzQixBQU1LLEFBR0EsYUFSSSxLQU14QixBQUdBLGlCQVJlLDBFQUNNLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvSFRNdXNpYy9EZXNrdG9wL1BST0pFQ1RTL3dlc3RmaWVsZC13ZWIvY29tcG9uZW50cy9KdW1iby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKdW1ib3Ryb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9KdW1ib3Ryb25cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcblxuY29uc3QgSnVtYm8gPSAoeyBoZWFkaW5nVGV4dCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiSnVtYm9cIj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbi1oZWFkaW5nXCI+e2hlYWRpbmdUZXh0fTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJqdW1ib3Ryb24tdGV4dFwiPlxuICAgICAgICBXZSd2ZSBkZXNpZ25lZCB3ZWJzaXRlcyBmb3IgdGhlIGNvbW11bml0eSBmb3IgdGhlIHBhc3QgZGVjYWRlXG4gICAgICA8L3A+XG4gICAgICA8cD48L3A+XG4gICAgPC9Db250YWluZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkp1bWJvIHtcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5qdW1ib3Ryb24taGVhZGluZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5qdW1ib3Ryb24tdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSnVtYm87XG4iXX0= */\n/*@ sourceURL=/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Jumbo.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Jumbo);

/***/ }),

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
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Website.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Site = ({
  website
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mycard,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card,
  key: website.name,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.innerCard,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {
  variant: "top",
  src: website.img,
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardImg,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("h4", {
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardTitle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, website.name), __jsx("p", {
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardText,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, website.description), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
  variant: "outline-primary",
  href: website.link,
  target: "_blank",
  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardBtn,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "VIEW WEBSITE"))))));

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
	"mycard": "Website_mycard__1AWUN",
	"innerCard": "Website_innerCard__1gS6M",
	"cardImg": "Website_cardImg__3aGfb",
	"cardText": "Website_cardText__3a_Z0",
	"cardTitle": "Website_cardTitle__1cc4j",
	"Card": "Website_Card__3Zo-r"
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
/* harmony import */ var _components_Jumbo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Jumbo */ "./components/Jumbo.js");
/* harmony import */ var _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.module.scss */ "./pages/portfolio.module.scss");
/* harmony import */ var _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Portfolio(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Jumbo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    headingText: "We Make Websites Great",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("ul", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.portfolioSites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.sites.map(site => __jsx(_components_Website__WEBPACK_IMPORTED_MODULE_1__["default"], {
    website: site,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))));
}

Portfolio.defaultProps = {
  sites: [{
    name: "Beauty Site",
    img: "/website1.jpg",
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Cosmetics Site",
    img: "/website2.jpg",
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Restaurant Site",
    img: "/website3.png",
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }]
};
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
	"portfolioSites": "portfolio_portfolioSites__fKBsF"
};

/***/ }),

/***/ 3:
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

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Jumbotron":
/*!********************************************!*\
  !*** external "react-bootstrap/Jumbotron" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Jumbotron");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=portfolio.js.map