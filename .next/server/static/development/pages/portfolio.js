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



const Jumbo = () => __jsx("div", {
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
}, "We make websites great"), __jsx("p", {
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
}, ".Jumbo.jsx-184610099{height:450px;background-color:#eee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.jumbotron-heading.jsx-184610099{text-align:center;}.jumbotron-text.jsx-184610099{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9jb21wb25lbnRzL0p1bWJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUdzQixBQU1LLEFBR0EsYUFSSSxLQU14QixBQUdBLGlCQVJlLDBFQUNNLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvSFRNdXNpYy9EZXNrdG9wL1BST0pFQ1RTL3dlc3RmaWVsZC13ZWIvY29tcG9uZW50cy9KdW1iby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKdW1ib3Ryb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9KdW1ib3Ryb25cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcblxuY29uc3QgSnVtYm8gPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiSnVtYm9cIj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbi1oZWFkaW5nXCI+V2UgbWFrZSB3ZWJzaXRlcyBncmVhdDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJqdW1ib3Ryb24tdGV4dFwiPlxuICAgICAgICBXZSd2ZSBkZXNpZ25lZCB3ZWJzaXRlcyBmb3IgdGhlIGNvbW11bml0eSBmb3IgdGhlIHBhc3QgZGVjYWRlXG4gICAgICA8L3A+XG4gICAgICA8cD48L3A+XG4gICAgPC9Db250YWluZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkp1bWJvIHtcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5qdW1ib3Ryb24taGVhZGluZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5qdW1ib3Ryb24tdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSnVtYm87XG4iXX0= */\n/*@ sourceURL=/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Jumbo.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Jumbo);

/***/ }),

/***/ "./components/Site.js":
/*!****************************!*\
  !*** ./components/Site.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Site.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Site = ({
  site
}) => __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
  style: {
    width: "22rem",
    //   width: "360px",
    textAlign: "center",
    boxShadow: "2px 2px 5px 5px #eee",
    margin: "20px"
  },
  key: site.name,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Img, {
  variant: "top",
  src: site.img,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("h4", {
  className: "jsx-1838401391" + " " + "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, site.name), __jsx("p", {
  className: "jsx-1838401391" + " " + "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, site.description), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
  variant: "outline-primary",
  href: site.link,
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "VIEW WEBSITE")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1838401391",
  __self: undefined
}, ".card-button.jsx-1838401391{font-size:16px;}.jsx-1838401391,.card-text.jsx-1838401391{font-size:16px;color:#666;}.jsx-1838401391,.card-title.jsx-1838401391{font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9jb21wb25lbnRzL1NpdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JnQixBQUd3QixBQUlBLEFBS0EsZUFSakIsQUFJYSxBQUtiLFdBSkEiLCJmaWxlIjoiL1VzZXJzL0hUTXVzaWMvRGVza3RvcC9QUk9KRUNUUy93ZXN0ZmllbGQtd2ViL2NvbXBvbmVudHMvU2l0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuXG5jb25zdCBTaXRlID0gKHsgc2l0ZSB9KSA9PiAoXG4gIDxDYXJkXG4gICAgc3R5bGU9e3tcbiAgICAgIHdpZHRoOiBcIjIycmVtXCIsXG4gICAgICAvLyAgIHdpZHRoOiBcIjM2MHB4XCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBib3hTaGFkb3c6IFwiMnB4IDJweCA1cHggNXB4ICNlZWVcIixcbiAgICAgIG1hcmdpbjogXCIyMHB4XCJcbiAgICB9fVxuICAgIGtleT17c2l0ZS5uYW1lfVxuICA+XG4gICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3NpdGUuaW1nfSAvPlxuICAgIDxDYXJkLkJvZHk+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntzaXRlLm5hbWV9PC9oND5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntzaXRlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIGhyZWY9e3NpdGUubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIFZJRVcgV0VCU0lURVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9DYXJkLkJvZHk+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNhcmQtYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLFxuICAgICAgLmNhcmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICB9XG4gICAgICAsXG4gICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvQ2FyZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGU7XG4iXX0= */\n/*@ sourceURL=/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Site.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Site);

/***/ }),

/***/ "./images/sites/site1.jpg":
/*!********************************!*\
  !*** ./images/sites/site1.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/sites/site2.jpg":
/*!********************************!*\
  !*** ./images/sites/site2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/site2-1f45b3c056c93e6c34082e5f1fae33e3.jpg";

/***/ }),

/***/ "./images/sites/site3.png":
/*!********************************!*\
  !*** ./images/sites/site3.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/site3-6cda0df3c53a02fab4bf4353cc034b6b.png";

/***/ }),

/***/ "./images/sites/site4.png":
/*!********************************!*\
  !*** ./images/sites/site4.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/site4-958c9ab39fa154acbad09808e7ee9906.png";

/***/ }),

/***/ "./images/sites/site5.jpg":
/*!********************************!*\
  !*** ./images/sites/site5.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAPqgAwAEAAAAAQAAAL4AAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAL4A+gMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/3QAEABD/2gAMAwEAAhEDEQA/APluio/MPoKPMPoKAJKKj8w+go8w+goA1I9LSSxNx9pjD7SwXP6fzqxJodqsSumtWEjmPcYw2CG2Z25J9RjP0rD8z2FL5z+tKz7mThLpI2dV0mxsIDJbaxbXriUJsiUg7Sud3U8Z4rJphmY9aTzD6ChK25UIuKs3ckoqPzD6CjzD6CmWSUVH5h9BR5h9BQBJRUfmH0FHmH0FAElFR+YfQUeYfQUASVYsbQ304hEscWQTufOB+VU/MPoKPMPoKBPbQ0r/AEo2CKxuYJQ3H7vPX8RV7TfDltfWK3MviLRrNmJAgnd/MGDjJAXAz1HPcVz/AJnsPypRO4GASB9aAimlq7mnaabbXOpyWj6raW8CF8XUoby3C9CABnnsK0p/C1jFbvKvirQ5GVSwRWk3Nx0+71rmhI2c1ajidlJcvtxnigZPYadDe3rWz6lZWqAMRPOWEbY6cgZ57cfhVzVPD9pp9v5sfiLSLxiTiO3aQtwM917kY/LmqD2saH5JH5+6SMZpvlxnIZpGI6YNAF/StCttStzLLrul2DCTZ5d0zhiNudwwp4zx9agstKhutRktJdVsbaNCw+0yFvLbBwMEDPPUe1U1QlSyFgo560Kg3H5iPU0AbN54bsbS3mmXxNo9yY1JWOEyF5GHIABUdfX1rCIwSM596sNECMB3OR1J4NVJC8bYYYoAdRUfmH0FHmH0FAElFR+YfQUeYfQUAf/Q+VaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKBQBJAheQYGccmrdzP8ANtyCO+O1RRyLDDuQHeeM+lQANI2FBZmPQck0ATG4DjBG1sDaV7VHv3AZ61vaP4J1DUnjMi+TG57/AHjXsHh34F6M9iJr1ZJZGHdzx+FAHgAkZTwamWaIKFw3rn0NexeJPg9plnHK9vHJHgcFXPH4V5bqnhi801iQpljH8QHNAGZ5oY8k4H+c06X99Fu3E7fXsKgOR8pGPrSgkA/lQAyijFFABRRRQB//0flWiiigAooooAKK2dM8G+INZ0u61TT9Hv7qytDiaeGBnSPjdzj2IPsOelU4dF1C4s7u9itJXtrPy/tEyrlId5wm49BuPT1oApUU8QuwJABCjJ56D39Km0/TLzVb2Gxsbd7m5ncRxQxDc7segAHWgCtRWvH4R12W2+1JpV6YPLnlMgiO0JCQJWJ6AISobPTcPUVlPE8bFGGGHBB6igBtFa+g+Edd8USzxaLpV5qLwJ5kgtYjJtXOAePU8fXis9rC5S6No0TCcP5flEYbdnG3HXOeMevFAEFFXL7SL/Tb2WxvLWW3uopDE8Mg2urjqpHr7e49aNO0e/1e8hs9PtJru4nbZHHAu9nOCcADvgE0AU6KCCOoooAKKKKACgDPSitTw0dMGs2w1iOWSxZisoik2MAQQGBwehIY8cgY70AUsfIIgvzE12nhbw+iYkVRJKerEcD6VzmraZ/YurtCsyXMC4eG4UEJPGfuyL7HrjtyO1XNK03XPEE5i0gzzSYJ2iQRjA9MkUAe9+HvDkUkEZZ49/HAbNekWGnstsicAYwK+PNN8Sa74a1M7p7lJoztZJGPWuo8R/FjxLcaalg089vvUHcjFWI+vWgD3Hxda3PlyKipInTIYV5Brata7hcJgg88dq4PSrbXdeuNkd44H3y9zdFVB9csTzVid5tPmktr+6mM68cSbl/+uKAKWuwwyTM8agEenesRlxWlPL5iEnqOlZ7HNAEdBoPWigAooooA/9L5VooooAKKKKAPQ/Bnxf1Dwf4VvfD1vY20sF7JK8krMyyrvtjB8jDlCBg7hz1HQmuvi/ah1ZLya6Ph/Scy2cUBRXkVAyM7dhyhL/6s8ADGeTXn2hR6e+mwCe38OPJtkO+7u2jkHzdGAHcHj2GatNaWD+bGtv4SCnJ3C9f5CAvIJ5wd3T1BoA6K3/aE1RYtTiudIsbqG806LTo4pHfZbxrCY2CqBg7iS5B/i74wBrwftQauNUXUJNA013QOqkSSqygypIqhwMhAUxt6MCc+/DyWumRhv3HhEn7z4vpGyMEYX0/DnOKuWn9h2ZlWbTvBlxHuVxuv5c5BOACBnBzyOhA9KYEPhL4wax4Tsr+ytraGW3vNWg1V4pSxQPG+4pjurYUHv8i+ldM/7RV2Y9ST/hGtNP2oYjkeWUyKDCkJLMRmVisa/M3Oaxorrw0JCh0DwhtZgW3apL82Sc4OPl4/p1pr3PhoMqSaD4Sw2YlZdSlPyqSRuKjqcAbup79aQCRfHXxHBrviTWo1hN9rPliOSRRJ9iWObzYxErKVO3oNw4wD1rY079pDWLS00i3udH024eyjkSa4Z5FmlLIU3hh/qnO4szLnc3PFctrN1pFlGt5b6P4YfG1GhgvXmLfNnO04+hI7Vy+r6raaiq/Z9JtbFlOSYC3zfUE/T/JoA9TP7R19LPbzT6DpzNDqE97hZ5kU+Y0rdBwGBlPz8khQCKkk/aX1QTQT2+h6ZBLDqh1FSkkmF3Z3oAMcMGIJOTz0rxWigDX8T6vZ63qH2u00/wCxFgTLm5lnaVy7MXZpDnJ3AH6Z6k1kUUUAFFFFABSoxRgw6g5pKKANoXFzrcdvZKiCK3D+UoHI3tuYZ78/zrf0HwrqlzGlv/ZjQjMnmXm6NSUZQNpLZwBjggd653SLkWoDAhGLdfUYrsItfnltSrzMyopJx7D9aAL0vh/T9b8S2mnW0cZiSX5pUdpNqnkx725cA9GPriuk8ZaFp8/i+0ubq2juLOEIkkHQMo7VxvhT4rReFL2SaHRor1GHWZ9jlj3yAcVe174vWnii7kabSjpyYzG8EnmHP+3kDj6UAddJ8LvPgnudEtra5W6lSVZWcR3FltydkQYFCpyAc8kdzXBal8MNV0+U/bbVLC3iiCAhw5cj+I47nvivR9C8VPYaFaXLOcNEHVvUEVxXirxpPqDyqbsuhPCk0AedX1q1pvjznms45rUurjz5NoG5mOMUtwTeafm2sbaGGEneyrmQkDqSf5UAZBooNFABRRRQB//T+VaKKKACiiigDqfDPw+1nxNZm8tXgggDFA8zldxHXAAOfrW4vwS8SONy3Fqw7ECUj89tZXhT4k6h4YsmsVggubfcXVZCQUJ64I7HriuiT48avGgjS0REAwFW5lAA+grlm6/M7bHg4mWae1l7JLl6bfqUZPgr4iT/AFl1ZpnpvMi5/Na5HxH4d1Hwxf8A2O/ADFQ6uj7ldT3B+vHNd1L8dNTnx51jDLt6eZcSNj6ZriPFPii88Vah9suwibV8uOOPO1Fznv355NVSdbm9/Y2wLzB1f9pS5fx/AisdJE1t9svLxLO3ZiiMys7SMOuFXnAyMk4GTir8Xhu1uFRotTnkVyQhWwmIYjqB61Qs9XgWyFlfWf2qJGZ4z5rIyE4yARng4BxjrzWhb+KobSFIbePUoYkJZUj1ORVUk5JAC8c10HsEjeEF2ktd3mB1zps+B+lUToNtco407Uo7qZVL+SYXjZwBk7c8E4BOO9aH/CbNtK79X2njH9rS4/lWfHrdjZBpLDTTDc7SqSvcNJsyCCQMAZwTgnOPSgDFPFFBOTRQAUUUUAFFFFABRRRQBe8y3a0txGHWZS3mEngjPy4rX0+eNYW3k4YYwDgn2rIi1KT+zf7P2rsE/n5xyTs24/KlTy3dVld0iH3igyQPXFAHXaRp3htI1bU2gG/kImG2jHck81fl07wwsMZgjtbqEYGCoVyfqDWn4M8E/DTxBYF7rxPqdneqcNG3k4x6jK1F4z8P/CrRIWg0nWtZ1K7x80qtHhTn7oUAA5oAg1nxFHcWSwxYWNFCKo/hAHSuBv597naeKmlkjjbbA0vlHnEjAsPqRxmqcjhjQAllE81ygXduZgBt65Jxx710PiLVrKwsbrQ7TRprGV5VMzzO275QM/KSSNx5x+XFc/bvbrIRcLI0JBDeWQG/DPFP8Q63Lr2pPeSLt+RIkHUhUUKuT3OB1oAzSaKKKACiiigD/9T5VooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAFODVhCJDjOKr0oJzQBfTTDKMpNH9GqydFWFQ0l5GTj7qjpWUJXU8MR+NBlc9WJ/GgCxPiJsBsmq5kJpvLH3rV03SQ+Jbn5U7A9/wDGgCHTNLm1Bti/KG4LHoP8ap3UBtriSEsGMbFcjocV2DXqWlviGBjxwqjP5kfyrmb+1upTJfNaSRxlvmO3gE0AUKKKKACiiigD/9X5VooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKsm0lbaYo3cbQxwOmarAZqdp54/kaRsYAxntQBG6Mhw3B9M0gFAGelOjQsegP1NAEkMqQnITe/atKB9QlO5YBj1c4FV7aZIPuIhb2q8iXd0Msdiep4oAc99qluAwniT2U1LbXOoXgMuoXMj2+CPLPAcemKEs7aHDuGlYf3mwKZPdBshiV9AaAKM+m28jExM0ZPOOoFUJ7OSE/3h6itBplzwwqJpgc8igDNoqzKsbnOQD9ai8kf31oA/9bwjy0/uJ+Qo8tP7ifkKdRQA3y0/uJ+Qo8tP7ifkKdRQA3y0/uJ+Qo8tP7ifkK63QfCXh7WdBS7uvHWk6PqbzvH9jvSgVUUkDOWVgWA3Bvu4OOvNXNL8A+H9R1S90weO9NlmjjthaTQKiQ3MsrsrKN7EuEwmdhB+fHBFAHDeWn9xPyFHlp/cT8hXf3Hw58OwuIR8TfDKTJJ5c5lZQoO5h8o8wYwAMgk8nqBUZ+Hvhs2sLJ8UfC7XDf6xB8y8uoG0CTdnBYnPoMADJoA4Ty0/uJ+Qo8tP7ifkKtalax2OpXdnDeW99FbytGl1bnMU4HR0OTwfqe9V6AG+Wn9xPyFHlp/cT8hTqKAG+Wn9xPyFHlp/cT8hTqKAG+Wn9xPyFHlp/cT8hTqKAG+Wn9xPyFHlp/cT8hTqKAG+Wn9xPyFHlp/cT8hTqKAG+Wg/gX8hR5aH+Bfyp1FADfLQfwL+Qo8tP7i/lTqKAGhFHRV/KnYoooATAPYUbV/ur+VLRQA3Yn9xfyo8tP7i/lTqKAG+Wn9xfyo8tP7i/kKdRQB/9fwqiiigAooooA19OsI7myEjWrOQxBkF4kY6/3T0OB9KnTS7KcOWsyUIACf2hGc9jnIrl7i8igl2PGWbGcgCmf2lbnqFB9GdQf1NAHVJpkGX/0UsAcY/tGNQo/rSnTbdlwtqwOOp1GPBz0P04rlf7Rt/wDpn/38T/Gj+0bf/pn/AN/E/wAaAOpOnWbvxZuAW6/2gh4HU0h0q1+8LVtqnkLqEZ3fp1rl/wC0rf1j/wC/if40h1KDsu7/AHSrfyNAHR3VtY2QDS2cjBsABL1W2nv0FV/P0oux+w3QQ4wBc8j16jnP6ViDU4dwURvk9AAMmnDUUIyIZSD3AoA2Vm0oOC1ldle6/aB/PbVE9TjgVSOqRBtpRw3pxmlXVInXcqOyjqRgigC5RVQakjAFYpSD0IAOaRtSjQEtFKoHUkAYoAuUVSGrQkZCuQfTFH9qxf3JP0oAu0VS/tWL+5J+lH9qxf3JP0oAu0VS/tWL+5J+lH9qxf3JP0oAu0VS/tWL+5J+lH9qxf3JP0oAu0VS/tWL+5J+lH9qxf3JP0oAu0VTGqREgbJOfpVygAooooAKKKKAP//Q8KooooAKKKKAMnU/+Po/7or7I/ZYsbWb4UxvJbQOx1G7yzRgn7/uK+N9T/4+j/uivs/9lR0X4TRgsoP9o3fU/wC3QB6tJYWMUbSPaWwVAWJ8peAPwri/+Fk+EBcywlLXalysIkEIKshTcXzjoMEfXHqK7m+uYYbKeRv3iqhJVSMkY6Cvnq7+GHimTU0uLHS7jyItyq32iEGVVBEZI38N03EcccD0yqSnG3KroynOzSPbPDmpaV4h0yzvVsreF7tTIkLRLvCg9SMcds+/FfOv7ZNrBb6t4Z8mGKPNpdZ2IBn95D6fWva/hVoWpaBaSw6pAbSdjkRllkyg4UeZuPHU4AAyT1rxj9s8g6t4YwQf9Euv/RkNXBtpNqxcJcyueJeEPEVjo9rdwXui6DqKzOrA6juBGEIABCnKgkMRxyK1j400dHLnwh4Hnd87m2ynkjGTkcetcnpMVpIkn2n7CSG4+03bwHG3ttHIyf0q2qabgEW+jqQduH1CTJ568jp7+nFUUak3jKxXTrjTV8MeF2ScSfvokYMnmS7wASM/J0H+z+VT3/jmzuIYhP4Y8HXUy7VE6RNvAUqecAA52Y7/AHz61ieRpiMB5ekOMEFhqkvGB9Op7U/yNL3gsNEPVSBqMoGfXpwP8RQBuJ4z0qdBLc+FfAzyysZZB5MkZDncegB2gZA2g44z9IE8U2CPPJFofgyCaW3WBZEikIhYBwZFU5G47xn/AHV/DH+z6WE3FdJyCcj+05fXjHHt196Fg0w7WVdHUg5IfUpcHjp056/pigC14g8UQeJYbezGkaFpXkyFvtdujB5QIwgDtgbgcZBIzn9cCW1jj27by2lycHYSccZz0/D61qeRpikEpo7HoSNSlxnPXGPf9DQLbTishA0fI4U/2lIeo7Ajn8aAM6GyhlRWfUbSEkAlZC2R7cDrUdzbxwY8u7guMkj91nj35FbDRaYT/q9FAcqdo1KXKE9s44HPTpxTRBphDJs0YPzhzqcuPbjGOKAMKit8W+kqy710cjcA23UpenqDimfZ9NVCSujNgkADUpM5z1PHIxQBh0Vv+VpSg7YtHIBB+bUZCTjsBjoTk+4qpctp9qxQ2Nnc5HEltfyED/P0oAy6KvtfWDFcaNEqgEHF3Lk++aZNeWckDRx6VFC5UASi4kYqfXB4P/6vSgCov3h9RW/WAv3h9RW/QAUUUUAFFFFAH//R8KooooAKKKKAMnU/+Po/7or7B/ZeBPwrjwD/AMhC6/8AQ6+SLqyWeXeZQhwBirFncX+nw+TaaxeW8ZJbZDcSRrk9ThWAoA/QS7SZoJECFgylTge1SaVJvtUJBzjB+tfn9/a+s/8AQwal/wCBs3/xdIuqawuduv6iM88Xkv8A8XVKVjCtR52nfY/QXDtcsyqcAAZxXzN+2KCNU8M5/wCfS6/9GxV4oNX1kdPEGpf+Bs3/AMXVS++1ak6veanPcsgwpnlaQqPQbmOKTdzSnDkjyi+GV057lxqLOqbW5jAMg+X5SoIxnd1/DPFU7kWAunAa4CcY8sJ15zntnp04znHalOmRkYM6ke4H+NL/AGan/PwPy/8Ar1NtbiVO03O+/Q0T/wAIk1vaES+I1n+zp9pGy22CbHz7PmyU9M8+tM2+Ff8Ant4h/wC+Lb/4qqP9mp/z8D8v/r0f2an/AD8D8v8A69M0L23wr/z28Q/98W3/AMVRt8K/89vEP/fFt/8AFVR/s1P+fgfl/wDXo/s1P+fgfl/9egC9t8K/89vEP/fFt/8AFUbfCv8Az28Q/wDfFt/8VVH+zU/5+B+X/wBej+zU/wCfgfl/9egC9t8K/wDPbxD/AN8W3/xVG3wr/wA9vEP/AHxbf/FVR/s1P+fgfl/9ej+zU/5+B+X/ANegC9t8K/8APbxD/wB8W3/xVVr8aEIV+wyaw0u8bvPWALt742nOfTt61F/Zqf8APwPy/wDr0f2an/PwPy/+vQBAn2PzG3vdiPYduAu7f2zzjb+tWdO/sU3NsdRfVhDvX7R9mWEttz82zceTjOM/jTf7NT/n4H5f/Xo/s1P+fgfl/wDXpWJcbkZGmtqhAe8XTjM2GKr5wiydpIGV3Y25xxnOO1W5/wDhHTZXxtzqy3fnL9jVhGYjFxuMh4YP94jHHQc84g/s1P8An4H5f/Xo/s1P+fgfl/8AXplFFfvD6it+s4aagIP2gdfT/wCvWjQAUUUUAFFFFAH/0vCqKKKACiiigDJ1If6UeP4RXWeFNJ8AXejJNr974nTUWmdPJ0+GIxBc/L8zr1I681yepf8AH0f90V7H8LPhvpniTwMuoXM1ysxup0wjBRgNgdBn9aBq19TK0zwv8Gb+YQ3HiXxdprE43XdvEIx9XWIqB7k1oeK/ht8LPC6RAeIfE2pSzwi4hFl5DxyRnoRL5YTn612OjfCPwrcXH2e+sp5VY8SR3csbqfqGwfxFYXxL+Ftp8PrO1u7HULi50q8ufJW0uAC8MhUsSGGMghTnPOepPZqzG42djzfUPC+gzCzOjpqIE8QkJuZ1eQEkjBVUCgccEEg8+lYPiHw/LoMluskUqCZWZTJj5sEDjH1711Wi6xceG9SjijIlt5ZMrG4yFbPp6HuPx69db453cerReGNVtxJDBcWU6i2bBETJIgbBHUEn9K1jTj7NtvVCm7NWWjON8K6BoGs2l22q+IRpFxG6+UHtWlR02Ek/LyWyAoUEEkjr0rSTwj4N3kyeOSkZB250S5znHAJ6dcA469sEjGF4f0zUtQSU6feC3CyBWBdl3HaWzx7CtV/C+utsaTVw3Url3bGD7/5/nWIgbw34R/se6lXxa41ONZfJtpbF40mIlKxkZGQHQbuuRnHtVl/CvgTcuzx7MqMjH99ok4bdgkAEcEdB6nnGOMZ7eEdYnxK9/Cz7QQWdyePmAzj1P4U9vCmtXUiRyalHJwXQu78cc/Q84oAmTwt4ReeBf+EzlaGWRlaaPQ7jEa7CQ+CSWUsAuBz82egNWbfwn4HE7G48a3RhVA+2HRZhIc4+XLZBPXPA6fWqMXhvXUURR6qFSM7FUSuAOB0HYc0reHNeVkJ1b7x2giV+OtADk8L+EJQAnjqMPz8r6LcA8fQn9KfH4d8FzWVrK/i65sLh4UM0FzpUs2yQqpKq0YAOCWHP93PeqkHhLVll8yPUIkcjfvDNn5uT+J7+tJP4b1ho5JJtQR1iOeXYnOOoGPQ4oAXV/Dvh22057jS/FI1OcFdluukXEJcFgCdzEjhTu/DFc00TpjfE6Z6bkK5/OusXwprkBeGPVlTygqgI7qMY4xjp06VDN4S1i5tzPPfxSopc/O7scrweo9qAOXwPQUYHoK6U+BdQGf8ASbXj/e/wqOPwXfSDIubboTzu6A4oA57A9BRgegrpE8C37BmN1agKwT+InOAf6j/61MHgq+MRkFxbYAJwd3b8KAOewPQUYHoK6SXwLqELBTc2pYoXwN2BjHfHvUOoeD73TbGW8luLdkijEjKm7OD2HFAGGoG5eB1Fb9YC/eH1Fb9ABRRRQAUUUUAf/9k="

/***/ }),

/***/ "./images/sites/site6.jpg":
/*!********************************!*\
  !*** ./images/sites/site6.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/site6-ca23a4f779a20d272708349a1f6cc7db.jpg";

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_sites_site1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/sites/site1.jpg */ "./images/sites/site1.jpg");
/* harmony import */ var _images_sites_site1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_sites_site2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sites/site2.jpg */ "./images/sites/site2.jpg");
/* harmony import */ var _images_sites_site2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_sites_site3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/sites/site3.png */ "./images/sites/site3.png");
/* harmony import */ var _images_sites_site3_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site3_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_sites_site4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/sites/site4.png */ "./images/sites/site4.png");
/* harmony import */ var _images_sites_site4_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site4_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_sites_site5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/sites/site5.jpg */ "./images/sites/site5.jpg");
/* harmony import */ var _images_sites_site5_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site5_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_sites_site6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/sites/site6.jpg */ "./images/sites/site6.jpg");
/* harmony import */ var _images_sites_site6_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site6_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Site__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Site */ "./components/Site.js");
/* harmony import */ var _components_Jumbo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Jumbo */ "./components/Jumbo.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/portfolio.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function Portfolio(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Jumbo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-2705436652" + " " + "Portfolio-sites",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.sites.map(site => __jsx(_components_Site__WEBPACK_IMPORTED_MODULE_8__["default"], {
    site: site,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2705436652",
    __self: this
  }, ".Portfolio-sites.jsx-2705436652{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:60px auto;padding:40px 0px;font-size:1.5rem;width:60%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9wYWdlcy9wb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JvQixBQUdrQyxxQkFDUiwwRUFDRSx5REFDYywySEFDWixpQkFDQSxpQkFDQSxpQkFDUCxVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9wYWdlcy9wb3J0Zm9saW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2l0ZTEgZnJvbSBcIi4uL2ltYWdlcy9zaXRlcy9zaXRlMS5qcGdcIjtcbmltcG9ydCBzaXRlMiBmcm9tIFwiLi4vaW1hZ2VzL3NpdGVzL3NpdGUyLmpwZ1wiO1xuaW1wb3J0IHNpdGUzIGZyb20gXCIuLi9pbWFnZXMvc2l0ZXMvc2l0ZTMucG5nXCI7XG5pbXBvcnQgc2l0ZTQgZnJvbSBcIi4uL2ltYWdlcy9zaXRlcy9zaXRlNC5wbmdcIjtcbmltcG9ydCBzaXRlNSBmcm9tIFwiLi4vaW1hZ2VzL3NpdGVzL3NpdGU1LmpwZ1wiO1xuaW1wb3J0IHNpdGU2IGZyb20gXCIuLi9pbWFnZXMvc2l0ZXMvc2l0ZTYuanBnXCI7XG5pbXBvcnQgU2l0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaXRlXCI7XG5pbXBvcnQgSnVtYm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSnVtYm9cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcblxuZnVuY3Rpb24gUG9ydGZvbGlvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxKdW1ibyAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIlBvcnRmb2xpby1zaXRlc1wiPlxuICAgICAgICB7cHJvcHMuc2l0ZXMubWFwKHNpdGUgPT4gKFxuICAgICAgICAgIDxTaXRlIHNpdGU9e3NpdGV9IC8+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLlBvcnRmb2xpby1zaXRlcyB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBtYXJnaW46IDYwcHggYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuUG9ydGZvbGlvLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l0ZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkJlYXV0eSBTaXRlXCIsXG4gICAgICBpbWc6IHNpdGUxLFxuICAgICAgbGluazogXCJodHRwOi8vbG9jYWxob3N0Ojg4ODgvQmVhdXR5L1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiT3VyIHJlc3RhdXJhbnQgc2VydmVzIHRoZSBmcmVzaGVzdCBzZWFmb29kIGRhaWx5LiBDb250YWN0IHVzIGZvciBzcGVjaWFsc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkNvc21ldGljcyBTaXRlXCIsXG4gICAgICBpbWc6IHNpdGUyLFxuICAgICAgbGluazogXCJodHRwOi8vbG9jYWxob3N0Ojg4ODgvQmVhdXR5L1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiT3VyIHJlc3RhdXJhbnQgc2VydmVzIHRoZSBmcmVzaGVzdCBzZWFmb29kIGRhaWx5LiBDb250YWN0IHVzIGZvciBzcGVjaWFsc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlJlc3RhdXJhbnQgU2l0ZVwiLFxuICAgICAgaW1nOiBzaXRlMyxcbiAgICAgIGxpbms6IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L0JlYXV0eS9cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIk91ciByZXN0YXVyYW50IHNlcnZlcyB0aGUgZnJlc2hlc3Qgc2VhZm9vZCBkYWlseS4gQ29udGFjdCB1cyBmb3Igc3BlY2lhbHNcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTcG9ydHMgU2l0ZVwiLFxuICAgICAgaW1nOiBzaXRlNCxcbiAgICAgIGxpbms6IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L0JlYXV0eS9cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIk91ciByZXN0YXVyYW50IHNlcnZlcyB0aGUgZnJlc2hlc3Qgc2VhZm9vZCBkYWlseS4gQ29udGFjdCB1cyBmb3Igc3BlY2lhbHNcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNdXNpYyBTaXRlXCIsXG4gICAgICBpbWc6IHNpdGU1LFxuICAgICAgbGluazogXCJodHRwOi8vbG9jYWxob3N0Ojg4ODgvQmVhdXR5L1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiT3VyIHJlc3RhdXJhbnQgc2VydmVzIHRoZSBmcmVzaGVzdCBzZWFmb29kIGRhaWx5LiBDb250YWN0IHVzIGZvciBzcGVjaWFsc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkxlZ2FsIFNpdGVcIixcbiAgICAgIGltZzogc2l0ZTYsXG4gICAgICBsaW5rOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9CZWF1dHkvXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJPdXIgcmVzdGF1cmFudCBzZXJ2ZXMgdGhlIGZyZXNoZXN0IHNlYWZvb2QgZGFpbHkuIENvbnRhY3QgdXMgZm9yIHNwZWNpYWxzXCJcbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcbiJdfQ== */\n/*@ sourceURL=/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/portfolio.js */")));
}

Portfolio.defaultProps = {
  sites: [{
    name: "Beauty Site",
    img: _images_sites_site1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Cosmetics Site",
    img: _images_sites_site2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Restaurant Site",
    img: _images_sites_site3_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Sports Site",
    img: _images_sites_site4_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Music Site",
    img: _images_sites_site5_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Legal Site",
    img: _images_sites_site6_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

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