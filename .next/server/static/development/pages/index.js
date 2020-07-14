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

/***/ "./components/IconGrid.js":
/*!********************************!*\
  !*** ./components/IconGrid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/IconGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import activity from "../images/icons/activity_200.gif";
// import activity from "../images/icons/activity.svg";
// import sprite from "../images/sprite_60fps.svg";
// import GoogleLogo from "./GoogleLogo";

function IconGrid() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    alt: "",
    style: {
      width: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (IconGrid);

/***/ }),

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
/* harmony import */ var _components_IconGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/IconGrid */ "./components/IconGrid.js");
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Turn Your Website Into A Marketing Machine"), __jsx("h4", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Full-Service, Search Engine Optimized, Custom Website Design. Just One Low Monthly Fee. Hosting & Maintenance Included."), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      paddingTop: "60px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    className: "d-block w-100",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__img,
    src: _images_spotify_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "First slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("img", {
    className: "d-block w-100",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__img,
    src: _images_creativity_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Third slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    className: "d-block w-100",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__img,
    src: _images_esports_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Third slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))))), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit iusto quis labore, ad est voluptate asperiores aliquam. Dolores voluptatibus nisi explicabo recusandae, odit quisquam, nobis temporibus tempore facere quaerat, magni neque corporis amet voluptatem dolorem necessitatibus"), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hero__waveContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("path", {
    fill: "#03a9f4",
    "fill-opacity": "1",
    d: "M0,32L80,48C160,64,320,96,480,90.7C640,85,800,43,960,53.3C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), __jsx(_components_IconGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }));
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
	"Hero__heading": "index_Hero__heading__2gFdS",
	"Hero__subheading": "index_Hero__subheading__3xdkH",
	"Hero__img": "index_Hero__img__3fwzM",
	"Hero__text": "index_Hero__text__1eVzx",
	"Hero__waveContainer": "index_Hero__waveContainer__Damyq"
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