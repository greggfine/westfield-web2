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

/***/ "./images/ai.png":
/*!***********************!*\
  !*** ./images/ai.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ai-18afce2e1a1c6b8c23679bf1508c1ff4.png";

/***/ }),

/***/ "./images/city.jpg":
/*!*************************!*\
  !*** ./images/city.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/city-626e012704cfa1c47b3094c4bbfdad5a.jpg";

/***/ }),

/***/ "./images/earth.jpg":
/*!**************************!*\
  !*** ./images/earth.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/earth-67e9bc6774fb4c2b4a2386f4c30902aa.jpg";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_city_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/city.jpg */ "./images/city.jpg");
/* harmony import */ var _images_city_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_city_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_earth_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/earth.jpg */ "./images/earth.jpg");
/* harmony import */ var _images_earth_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_earth_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_ai_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/ai.png */ "./images/ai.png");
/* harmony import */ var _images_ai_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_ai_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Index() {
  return __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    src: _images_ai_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "First slide",
    className: "jsx-3418425537" + " " + "d-block w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Caption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3418425537",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "First slide label"), __jsx("p", {
    className: "jsx-3418425537",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Nulla vitae elit libero, a pharetra augue mollis interdum."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: _images_earth_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Third slide",
    className: "jsx-3418425537" + " " + "d-block w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Caption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3418425537",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Second slide label"), __jsx("p", {
    className: "jsx-3418425537",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: _images_city_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Third slide",
    className: "jsx-3418425537" + " " + "d-block w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Caption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3418425537",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Third slide label"), __jsx("p", {
    className: "jsx-3418425537",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3418425537",
    __self: this
  }, "img.jsx-3418425537{height:600px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2tCLEFBR3dCLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL0hUTXVzaWMvRGVza3RvcC9QUk9KRUNUUy93ZXN0ZmllbGQtd2ViL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWxcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBjaXR5IGZyb20gXCIuLi9pbWFnZXMvY2l0eS5qcGdcIjtcbmltcG9ydCBlYXJ0aCBmcm9tIFwiLi4vaW1hZ2VzL2VhcnRoLmpwZ1wiO1xuaW1wb3J0IGFpIGZyb20gXCIuLi9pbWFnZXMvYWkucG5nXCI7XG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENhcm91c2VsPlxuICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBzcmM9e2FpfSBhbHQ9XCJGaXJzdCBzbGlkZVwiIC8+XG4gICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XG4gICAgICAgICAgICA8aDM+Rmlyc3Qgc2xpZGUgbGFiZWw8L2gzPlxuICAgICAgICAgICAgPHA+TnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLjwvcD5cbiAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XG4gICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cbiAgICAgICAgPENhcm91c2VsLkl0ZW0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIgc3JjPXtlYXJ0aH0gYWx0PVwiVGhpcmQgc2xpZGVcIiAvPlxuXG4gICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XG4gICAgICAgICAgICA8aDM+U2Vjb25kIHNsaWRlIGxhYmVsPC9oMz5cbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9wPlxuICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cbiAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxuICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBzcmM9e2NpdHl9IGFsdD1cIlRoaXJkIHNsaWRlXCIgLz5cblxuICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxuICAgICAgICAgICAgPGgzPlRoaXJkIHNsaWRlIGxhYmVsPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBQcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxuICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XG4gICAgICA8L0Nhcm91c2VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cbi8qIFxuTk9URVM6IExpbmsgcHJvdmlkZXMgYW4gb25DbGljayBmdW5jdGlvbiBhcm91bmQgd2hhdGV2ZXIgaXQncyB3cmFwcGluZ1xuKi9cbiJdfQ== */\n/*@ sourceURL=/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);
/* 
NOTES: Link provides an onClick function around whatever it's wrapping
*/

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
//# sourceMappingURL=index.js.map