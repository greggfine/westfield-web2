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

/***/ "./images/goodtextures/high-quality-synthetic-wall-textures-16250.jpg":
/*!****************************************************************************!*\
  !*** ./images/goodtextures/high-quality-synthetic-wall-textures-16250.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/high-quality-synthetic-wall-textures-16250-f9e3561ca70687e62d8a0d5940853d6e.jpg";

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_spotify_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/spotify.png */ "./images/spotify.png");
/* harmony import */ var _images_spotify_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_spotify_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_creativity_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/creativity.jpg */ "./images/creativity.jpg");
/* harmony import */ var _images_creativity_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_creativity_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_esports_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/esports.jpg */ "./images/esports.jpg");
/* harmony import */ var _images_esports_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_esports_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_goodtextures_high_quality_synthetic_wall_textures_16250_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/goodtextures/high-quality-synthetic-wall-textures-16250.jpg */ "./images/goodtextures/high-quality-synthetic-wall-textures-16250.jpg");
/* harmony import */ var _images_goodtextures_high_quality_synthetic_wall_textures_16250_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_goodtextures_high_quality_synthetic_wall_textures_16250_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_IconGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/IconGrid */ "./components/IconGrid.js");
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 // import texture from "../images/goodtextures/high-quality-panoramic-concrete-textures-16401.jpg";
// import texture from "../images/goodtextures/marble-tiles-texture-121.jpg";
// import texture from "../images/goodtextures/various-synthetic--material-textures-17649.jpg";



function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3595501636" + " " + "Hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3595501636" + " " + "Hero-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Turn Your Website Into A Marketing Machine"), __jsx("h4", {
    className: "jsx-3595501636" + " " + "Hero-subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Full-Service, Search Engine Optimized, Custom Website Design. Just One Low Monthly Fee. Hosting & Maintenance Included."), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      paddingTop: "60px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: _images_spotify_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "First slide",
    className: "jsx-3595501636" + " " + "d-block w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    src: _images_creativity_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Third slide",
    className: "jsx-3595501636" + " " + "d-block w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: _images_esports_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Third slide",
    className: "jsx-3595501636" + " " + "d-block w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))))), __jsx("div", {
    className: "jsx-3595501636" + " " + "wave-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    className: "jsx-3595501636",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("path", {
    //   fill="#673ab7"
    fill: "#03a9f4",
    "fill-opacity": "1",
    d: "M0,32L80,48C160,64,320,96,480,90.7C640,85,800,43,960,53.3C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z",
    className: "jsx-3595501636",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), __jsx(_components_IconGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3595501636",
    __self: this
  }, ".Hero.jsx-3595501636{background-color:#03a9f4;height:920px;margin:0;color:#fff;}.Hero-heading.jsx-3595501636{max-width:600px;text-align:center;margin:0 auto 30px;padding-top:60px;font-size:3rem;font-weight:800;}.Hero-subheading.jsx-3595501636{max-width:750px;margin:0 auto;text-align:center;line-height:1.4;font-weight:400;}img.jsx-3595501636{height:600px;}.para-text.jsx-3595501636{padding-top:280px;}.wave-container.jsx-3595501636{background-blend-mode:color-burn;background-repeat:no-repeat;background-size:130%;position:relative;background:#09f;color:#fff;text-align:center;overflow:hidden;}.wave-container.jsx-3595501636>svg.jsx-3595501636{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWtCLEFBR29DLEFBU1QsQUFRQSxBQU9ILEFBR0ssQUFHZSxBQVVuQixhQWZoQixDQWdCQSxFQS9Cb0IsQUFRSixFQVVoQixPQTNCZSxLQWtCSyxHQVlVLENBcEJULElBVFYsU0FDRSxDQWlCSyxLQVJDLEtBTG5CLEdBeUJ1QixHQVhMLE1BUkQsVUFTakIsRUFXb0IsR0FuQkYsZUFvQkEsQ0FuQmxCLGVBb0JhLFdBQ08sa0JBQ0YsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Nhcm91c2VsXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgc3BvdGlmeSBmcm9tIFwiLi4vaW1hZ2VzL3Nwb3RpZnkucG5nXCI7XG5pbXBvcnQgY3JlYXRpdml0eSBmcm9tIFwiLi4vaW1hZ2VzL2NyZWF0aXZpdHkuanBnXCI7XG5pbXBvcnQgZXNwb3J0cyBmcm9tIFwiLi4vaW1hZ2VzL2VzcG9ydHMuanBnXCI7XG5pbXBvcnQgdGV4dHVyZSBmcm9tIFwiLi4vaW1hZ2VzL2dvb2R0ZXh0dXJlcy9oaWdoLXF1YWxpdHktc3ludGhldGljLXdhbGwtdGV4dHVyZXMtMTYyNTAuanBnXCI7XG5cbi8vIGltcG9ydCB0ZXh0dXJlIGZyb20gXCIuLi9pbWFnZXMvZ29vZHRleHR1cmVzL2hpZ2gtcXVhbGl0eS1wYW5vcmFtaWMtY29uY3JldGUtdGV4dHVyZXMtMTY0MDEuanBnXCI7XG4vLyBpbXBvcnQgdGV4dHVyZSBmcm9tIFwiLi4vaW1hZ2VzL2dvb2R0ZXh0dXJlcy9tYXJibGUtdGlsZXMtdGV4dHVyZS0xMjEuanBnXCI7XG4vLyBpbXBvcnQgdGV4dHVyZSBmcm9tIFwiLi4vaW1hZ2VzL2dvb2R0ZXh0dXJlcy92YXJpb3VzLXN5bnRoZXRpYy0tbWF0ZXJpYWwtdGV4dHVyZXMtMTc2NDkuanBnXCI7XG5cbmltcG9ydCBJY29uR3JpZCBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uR3JpZFwiO1xuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9cIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt0ZXh0dXJlfSlgIH19PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiSGVyby1oZWFkaW5nXCI+XG4gICAgICAgICAgVHVybiBZb3VyIFdlYnNpdGUgSW50byBBIE1hcmtldGluZyBNYWNoaW5lXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJIZXJvLXN1YmhlYWRpbmdcIj5cbiAgICAgICAgICBGdWxsLVNlcnZpY2UsIFNlYXJjaCBFbmdpbmUgT3B0aW1pemVkLCBDdXN0b20gV2Vic2l0ZSBEZXNpZ24uIEp1c3QgT25lXG4gICAgICAgICAgTG93IE1vbnRobHkgRmVlLiBIb3N0aW5nICYgTWFpbnRlbmFuY2UgSW5jbHVkZWQuXG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPENhcm91c2VsIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNjBweFwiIH19PlxuICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIHNyYz17c3BvdGlmeX0gYWx0PVwiRmlyc3Qgc2xpZGVcIiAvPlxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxuICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcbiAgICAgICAgICAgICAgICBzcmM9e2NyZWF0aXZpdHl9XG4gICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxuICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIHNyYz17ZXNwb3J0c30gYWx0PVwiVGhpcmQgc2xpZGVcIiAvPlxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPHAgY2xhc3NOYW1lPVwicGFyYS10ZXh0XCI+XG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaXQgaXVzdG8gcXVpc1xuICAgICAgICBsYWJvcmUsIGFkIGVzdCB2b2x1cHRhdGUgYXNwZXJpb3JlcyBhbGlxdWFtLiBEb2xvcmVzIHZvbHVwdGF0aWJ1cyBuaXNpXG4gICAgICAgIGV4cGxpY2FibyByZWN1c2FuZGFlLCBvZGl0IHF1aXNxdWFtLCBub2JpcyB0ZW1wb3JpYnVzIHRlbXBvcmUgZmFjZXJlXG4gICAgICAgIHF1YWVyYXQsIG1hZ25pIG5lcXVlIGNvcnBvcmlzIGFtZXQgdm9sdXB0YXRlbSBkb2xvcmVtIG5lY2Vzc2l0YXRpYnVzXG4gICAgICA8L3A+ICovfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ3YXZlLWNvbnRhaW5lclwiXG4gICAgICAgIC8vIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3RleHR1cmV9KWAgfX1cbiAgICAgID5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNDQwIDMyMFwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAvLyAgIGZpbGw9XCIjNjczYWI3XCJcbiAgICAgICAgICAgIGZpbGw9XCIjMDNhOWY0XCJcbiAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjFcIlxuICAgICAgICAgICAgZD1cIk0wLDMyTDgwLDQ4QzE2MCw2NCwzMjAsOTYsNDgwLDkwLjdDNjQwLDg1LDgwMCw0Myw5NjAsNTMuM0MxMTIwLDY0LDEyODAsMTI4LDEzNjAsMTYwTDE0NDAsMTkyTDE0NDAsMEwxMzYwLDBDMTI4MCwwLDExMjAsMCw5NjAsMEM4MDAsMCw2NDAsMCw0ODAsMEMzMjAsMCwxNjAsMCw4MCwwTDAsMFpcIlxuICAgICAgICAgID48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8SWNvbkdyaWQgLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuSGVybyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcbiAgICAgICAgICBoZWlnaHQ6IDkyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAvLyAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogY29sb3ItYnVybjtcbiAgICAgICAgICAvLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgLy8gICBiYWNrZ3JvdW5kLXNpemU6IDEzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLkhlcm8taGVhZGluZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgfVxuICAgICAgICAuSGVyby1zdWJoZWFkaW5nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wYXJhLXRleHQge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyODBweDtcbiAgICAgICAgfVxuICAgICAgICAud2F2ZS1jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogY29sb3ItYnVybjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTMwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzA5ZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAud2F2ZS1jb250YWluZXIgPiBzdmcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG4vKiBcbk5PVEVTOiBMaW5rIHByb3ZpZGVzIGFuIG9uQ2xpY2sgZnVuY3Rpb24gYXJvdW5kIHdoYXRldmVyIGl0J3Mgd3JhcHBpbmdcbiovXG4iXX0= */\n/*@ sourceURL=/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);
/* 
NOTES: Link provides an onClick function around whatever it's wrapping
*/

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