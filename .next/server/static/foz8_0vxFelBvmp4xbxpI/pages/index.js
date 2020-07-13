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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "//R+":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "9U7Q":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/high-quality-synthetic-wall-textures-16250-f9e3561ca70687e62d8a0d5940853d6e.jpg";

/***/ }),

/***/ "CHRl":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/creativity-e82594eda72c1e8c96a0fc937f52810f.jpg";

/***/ }),

/***/ "DgrE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/esports-4dc69f088cb523cf26941362c88cc5e2.jpg";

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

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

// EXTERNAL MODULE: ./images/goodtextures/high-quality-synthetic-wall-textures-16250.jpg
var high_quality_synthetic_wall_textures_16250 = __webpack_require__("9U7Q");

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






 // import texture from "../images/goodtextures/high-quality-panoramic-concrete-textures-16401.jpg";
// import texture from "../images/goodtextures/marble-tiles-texture-121.jpg";
// import texture from "../images/goodtextures/various-synthetic--material-textures-17649.jpg";



function Index() {
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx("div", {
    className: "jsx-3595501636" + " " + "Hero"
  }, pages_jsx("h2", {
    className: "jsx-3595501636" + " " + "Hero-heading"
  }, "Turn Your Website Into A Marketing Machine"), pages_jsx("h4", {
    className: "jsx-3595501636" + " " + "Hero-subheading"
  }, "Full-Service, Search Engine Optimized, Custom Website Design. Just One Low Monthly Fee. Hosting & Maintenance Included."), pages_jsx(Container_default.a, null, pages_jsx(Carousel_default.a, {
    style: {
      paddingTop: "60px"
    }
  }, pages_jsx(Carousel_default.a.Item, null, pages_jsx("img", {
    src: spotify_default.a,
    alt: "First slide",
    className: "jsx-3595501636" + " " + "d-block w-100"
  })), pages_jsx(Carousel_default.a.Item, null, pages_jsx("img", {
    src: creativity_default.a,
    alt: "Third slide",
    className: "jsx-3595501636" + " " + "d-block w-100"
  })), pages_jsx(Carousel_default.a.Item, null, pages_jsx("img", {
    src: esports_default.a,
    alt: "Third slide",
    className: "jsx-3595501636" + " " + "d-block w-100"
  }))))), pages_jsx("div", {
    className: "jsx-3595501636" + " " + "wave-container"
  }, pages_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    className: "jsx-3595501636"
  }, pages_jsx("path", {
    //   fill="#673ab7"
    fill: "#03a9f4",
    "fill-opacity": "1",
    d: "M0,32L80,48C160,64,320,96,480,90.7C640,85,800,43,960,53.3C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z",
    className: "jsx-3595501636"
  }))), pages_jsx(components_IconGrid, null), pages_jsx(style_default.a, {
    id: "3595501636"
  }, [".Hero.jsx-3595501636{background-color:#03a9f4;height:920px;margin:0;color:#fff;}", ".Hero-heading.jsx-3595501636{max-width:600px;text-align:center;margin:0 auto 30px;padding-top:60px;font-size:3rem;font-weight:800;}", ".Hero-subheading.jsx-3595501636{max-width:750px;margin:0 auto;text-align:center;line-height:1.4;font-weight:400;}", "img.jsx-3595501636{height:600px;}", ".para-text.jsx-3595501636{padding-top:280px;}", ".wave-container.jsx-3595501636{background-blend-mode:color-burn;background-repeat:no-repeat;background-size:130%;position:relative;background:#09f;color:#fff;text-align:center;overflow:hidden;}", ".wave-container.jsx-3595501636>svg.jsx-3595501636{display:block;}"]));
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