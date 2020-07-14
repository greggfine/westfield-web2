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

/***/ "//R+":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ "1dv8":
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "CHRl":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/creativity-e82594eda72c1e8c96a0fc937f52810f.jpg";

/***/ }),

/***/ "DgrE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/esports-4dc69f088cb523cf26941362c88cc5e2.jpg";

/***/ }),

/***/ "P3Bm":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/spotify-8ed71cc3888f276e057d381c2e08f40e.png";

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap/Carousel"
var Carousel_ = __webpack_require__("//R+");
var Carousel_default = /*#__PURE__*/__webpack_require__.n(Carousel_);

// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__("vDuQ");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: ./images/spotify.png
var spotify = __webpack_require__("P3Bm");
var spotify_default = /*#__PURE__*/__webpack_require__.n(spotify);

// EXTERNAL MODULE: ./images/creativity.jpg
var creativity = __webpack_require__("CHRl");
var creativity_default = /*#__PURE__*/__webpack_require__.n(creativity);

// EXTERNAL MODULE: ./images/esports.jpg
var esports = __webpack_require__("DgrE");
var esports_default = /*#__PURE__*/__webpack_require__.n(esports);

// EXTERNAL MODULE: ./pages/index.module.scss
var index_module = __webpack_require__("1dv8");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./components/IconGrid.js
var __jsx = external_react_default.a.createElement;
 // import activity from "../images/icons/activity_200.gif";
// import activity from "../images/icons/activity.svg";
// import sprite from "../images/sprite_60fps.svg";
// import GoogleLogo from "./GoogleLogo";

function IconGrid() {
  return __jsx(external_react_default.a.Fragment, null, __jsx("div", null, __jsx("img", {
    alt: "",
    style: {
      width: "10%"
    }
  })));
}

/* harmony default export */ var components_IconGrid = (IconGrid);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;









function Index() {
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx("div", {
    className: index_module_default.a.Hero
  }, pages_jsx("h2", {
    className: index_module_default.a.Hero__heading
  }, "Turn Your Website Into A Marketing Machine"), pages_jsx("h4", {
    className: index_module_default.a.Hero__subheading
  }, "Full-Service, Search Engine Optimized, Custom Website Design. Just One Low Monthly Fee. Hosting & Maintenance Included."), pages_jsx(Container_default.a, null, pages_jsx(Carousel_default.a, {
    style: {
      paddingTop: "60px"
    }
  }, pages_jsx(Carousel_default.a.Item, null, pages_jsx("img", {
    className: "d-block w-100",
    className: index_module_default.a.Hero__img,
    src: spotify_default.a,
    alt: "First slide"
  })), pages_jsx(Carousel_default.a.Item, null, pages_jsx("img", {
    className: "d-block w-100",
    className: index_module_default.a.Hero__img,
    src: creativity_default.a,
    alt: "Third slide"
  })), pages_jsx(Carousel_default.a.Item, null, pages_jsx("img", {
    className: "d-block w-100",
    className: index_module_default.a.Hero__img,
    src: esports_default.a,
    alt: "Third slide"
  }))))), pages_jsx("p", {
    className: index_module_default.a.Hero__text
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit iusto quis labore, ad est voluptate asperiores aliquam. Dolores voluptatibus nisi explicabo recusandae, odit quisquam, nobis temporibus tempore facere quaerat, magni neque corporis amet voluptatem dolorem necessitatibus"), pages_jsx("div", {
    className: index_module_default.a.Hero__waveContainer
  }, pages_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320"
  }, pages_jsx("path", {
    fill: "#03a9f4",
    "fill-opacity": "1",
    d: "M0,32L80,48C160,64,320,96,480,90.7C640,85,800,43,960,53.3C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
  }))), pages_jsx(components_IconGrid, null));
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);
/* 
NOTES: Link provides an onClick function around whatever it's wrapping
*/

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "vDuQ":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ })

/******/ });