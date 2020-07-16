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
}, ".Jumbo.jsx-184610099{height:450px;background-color:#eee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.jumbotron-heading.jsx-184610099{text-align:center;}.jumbotron-text.jsx-184610099{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9jb21wb25lbnRzL0p1bWJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFPLEFBR3NCLEFBTUssQUFHQSxhQVJJLEtBTXhCLEFBR0EsaUJBUmUsMEVBQ00sNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9jb21wb25lbnRzL0p1bWJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEp1bWJvdHJvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0p1bWJvdHJvblwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xuXG5jb25zdCBKdW1ibyA9ICh7IGhlYWRpbmdUZXh0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJKdW1ib1wiPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwianVtYm90cm9uLWhlYWRpbmdcIj57aGVhZGluZ1RleHR9PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImp1bWJvdHJvbi10ZXh0XCI+XG4gICAgICAgIFdlJ3ZlIGRlc2lnbmVkIHdlYnNpdGVzIGZvciB0aGUgY29tbXVuaXR5IGZvciB0aGUgcGFzdCBkZWNhZGVcbiAgICAgIDwvcD5cbiAgICAgIDxwPjwvcD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgIC5KdW1ibyB7XG4gICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuanVtYm90cm9uLWhlYWRpbmcge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuanVtYm90cm9uLXRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEp1bWJvO1xuIl19 */\n/*@ sourceURL=/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Jumbo.js */"));

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
	"Card": "Website_Card__3Zo-r",
	"cardBtn": "Website_cardBtn__1yQAm"
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
  return __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Portfolio,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Portfolio__heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.websitesWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h2", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapperHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Websites"), __jsx("ul", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Portfolio__websites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.sites.map(site => __jsx(_components_Website__WEBPACK_IMPORTED_MODULE_1__["default"], {
    website: site,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })))), __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Portfolio__horizontalRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.websitesWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h2", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapperHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Web Apps"), __jsx("ul", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Portfolio__websites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.apps.map(site => __jsx(_components_Website__WEBPACK_IMPORTED_MODULE_1__["default"], {
    website: site,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), ";"));
}

Portfolio.defaultProps = {
  sites: [{
    name: "Gregg Fine Dev",
    img: "/website1.png",
    link: "https://greggfinedev.com/",
    description: "The web development site of JavaScript programmer Gregg Fine"
  }, {
    name: "Hidden Tiger Music Inc.",
    img: "/website2.png",
    link: "http://hiddentigermusic.com/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Synth Explorer",
    img: "/website3.png",
    link: "https://greggfine.github.io/synth-explorer-2020/#!/home",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }],
  apps: [{
    name: "Jazz Guitar Game",
    img: "/website4.png",
    link: "https://www.greggfineguitar.com",
    description: "Guess the name of the Jazz guitarist you are listening to."
  }, {
    name: "Rhythmic Ear Trainer",
    img: "/website5.png",
    link: "https://greggfine.github.io/subdivision-app/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Searchable Music Library",
    img: "/website6.png",
    link: "https://immense-atoll-44421.herokuapp.com/search",
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
	"Portfolio__websites": "portfolio_Portfolio__websites__2rPvN",
	"Portfolio__horizontalRow": "portfolio_Portfolio__horizontalRow__kiyvM",
	"Portfolio__heading": "portfolio_Portfolio__heading__3RS8x",
	"Portfolio__title": "portfolio_Portfolio__title__dcCcs",
	"Portfolio__subheading": "portfolio_Portfolio__subheading__1pb3A",
	"Portfolio__headerWrapper": "portfolio_Portfolio__headerWrapper__13Jft",
	"websitesWrapper": "portfolio_websitesWrapper__24lIA",
	"wrapperHeading": "portfolio_wrapperHeading__1AmFl"
};

/***/ }),

/***/ 4:
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