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

/***/ "20EZ":
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eAkX");


/***/ }),

/***/ "EQuu":
/***/ (function(module) {

module.exports = JSON.parse("{\"sites\":[{\"name\":\"Gregg Fine Dev\",\"img\":\"/website1.png\",\"link\":\"https://greggfinedev.com/\",\"description\":\"The web development site of JavaScript programmer Gregg Fine\"},{\"name\":\"Hidden Tiger Music Inc.\",\"img\":\"/website2.png\",\"link\":\"http://hiddentigermusic.com/\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"},{\"name\":\"Synth Explorer\",\"img\":\"/website3.png\",\"link\":\"https://greggfine.github.io/synth-explorer-2020/#!/home\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"}],\"apps\":[{\"name\":\"Jazz Guitar Game\",\"img\":\"/website4.png\",\"link\":\"https://www.greggfineguitar.com\",\"description\":\"Guess the name of the Jazz guitarist you are listening to.\"},{\"name\":\"Rhythmic Ear Trainer\",\"img\":\"/website5.png\",\"link\":\"https://greggfine.github.io/subdivision-app/\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"},{\"name\":\"Searchable Music Library\",\"img\":\"/website6.png\",\"link\":\"https://immense-atoll-44421.herokuapp.com/search\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"}]}");

/***/ }),

/***/ "JYSw":
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

/***/ "TKrA":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eAkX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap/Card"
var Card_ = __webpack_require__("TKrA");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__("vVTy");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./components/Website.module.scss
var Website_module = __webpack_require__("JYSw");
var Website_module_default = /*#__PURE__*/__webpack_require__.n(Website_module);

// EXTERNAL MODULE: external "react-scrollmagic"
var external_react_scrollmagic_ = __webpack_require__("yBWC");

// CONCATENATED MODULE: ./components/Website.js

var __jsx = external_react_default.a.createElement;





const Site = ({
  website
}) => __jsx(external_react_default.a.Fragment, null, __jsx("div", {
  className: Website_module_default.a.Card__myCard
}, __jsx(external_react_scrollmagic_["Controller"], null, __jsx(external_react_scrollmagic_["Scene"], {
  duration: 1500,
  reverse: false,
  triggerHook: 0.7,
  classToggle: Website_module_default.a.Card__cardTrans,
  offset: 10
}, __jsx(Card_default.a, {
  className: Website_module_default.a.Card,
  key: website.name
}, __jsx("div", {
  className: Website_module_default.a.Card__innerCard
}, __jsx(Card_default.a.Img, {
  variant: "top",
  src: website.img,
  className: Website_module_default.a.Card__cardImg
}), __jsx(Card_default.a.Body, null, __jsx("h4", {
  className: Website_module_default.a.Card__cardTitle
}, website.name), __jsx("p", {
  className: Website_module_default.a.Card__cardText
}, website.description), __jsx(Button_default.a, {
  variant: "outline-primary",
  href: website.link,
  target: "_blank",
  className: Website_module_default.a.Card__cardBtn
}, "VIEW WEBSITE"))))))));

/* harmony default export */ var Website = (Site);
// EXTERNAL MODULE: ./pages/portfolio.module.scss
var portfolio_module = __webpack_require__("20EZ");
var portfolio_module_default = /*#__PURE__*/__webpack_require__.n(portfolio_module);

// EXTERNAL MODULE: ./websites.json
var websites = __webpack_require__("EQuu");

// CONCATENATED MODULE: ./pages/portfolio.js

var portfolio_jsx = external_react_default.a.createElement;





function Portfolio(props) {
  return portfolio_jsx("div", {
    className: portfolio_module_default.a.Portfolio
  }, portfolio_jsx("div", {
    className: portfolio_module_default.a.Portfolio__heading
  }), portfolio_jsx("div", {
    className: portfolio_module_default.a.Portfolio__websitesWrapper
  }, portfolio_jsx("h2", {
    className: portfolio_module_default.a.Portfolio__wrapperHeading
  }, "Websites"), portfolio_jsx("ul", {
    className: portfolio_module_default.a.Portfolio__websites
  }, websites.sites.map(site => portfolio_jsx(Website, {
    website: site
  })))), portfolio_jsx(external_react_scrollmagic_["Controller"], null, portfolio_jsx(external_react_scrollmagic_["Scene"], {
    duration: 1500,
    reverse: true,
    triggerHook: 0.7,
    classToggle: portfolio_module_default.a.Portfolio__horizontalRow__trans,
    offset: 10
  }, portfolio_jsx("div", {
    className: portfolio_module_default.a.Portfolio__horizontalRow
  }))), portfolio_jsx("div", {
    className: portfolio_module_default.a.Portfolio__websitesWrapper
  }, portfolio_jsx("h2", {
    className: portfolio_module_default.a.Portfolio__wrapperHeading
  }, "Web Apps"), portfolio_jsx("ul", {
    className: portfolio_module_default.a.Portfolio__websites
  }, websites.apps.map(site => portfolio_jsx(Website, {
    website: site
  }))), ";"));
}

/* harmony default export */ var portfolio = __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "vVTy":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "yBWC":
/***/ (function(module, exports) {

module.exports = require("react-scrollmagic");

/***/ })

/******/ });