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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "Btuk":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"CardGrid": "cardGrid_CardGrid__1cBLL",
	"CardGrid__cardGridTrans": "cardGrid_CardGrid__cardGridTrans__1Y9Gm",
	"CardGrid__serviceCard": "cardGrid_CardGrid__serviceCard__2Ay0z",
	"CardGrid__cardIcon": "cardGrid_CardGrid__cardIcon__2FjGR",
	"CardGrid__serviceCardTitle": "cardGrid_CardGrid__serviceCardTitle__3C3HO",
	"CardGrid__secondaryCardContent": "cardGrid_CardGrid__secondaryCardContent__1h4Y0"
};

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Btuk");
/* harmony import */ var _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hero_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uNNz");
/* harmony import */ var _hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hero_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("yBWC");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Index() {
  return __jsx("main", null, __jsx("div", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hero
  }, __jsx("img", {
    src: "/man.jpg",
    alt: "",
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hero__testImg
  })), __jsx("section", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hero__about
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Controller"], null, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Scene"], {
    duration: 1500,
    reverse: true,
    triggerHook: 1,
    classToggle: _hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hero__whatwedoTrans,
    offset: 600
  }, __jsx("h1", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hero__whatwedo
  }, "Gregg Fine provides website development that helps your business be more successful"))), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Controller"], null, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Scene"], {
    duration: 1500,
    reverse: true,
    triggerHook: 1,
    offset: 150,
    classToggle: _hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hero__textTrans
  }, __jsx("p", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hero__text
  }, "While site builders like Squarespace and Wix are great for putting up a quick website, they\u2019re often limited in what they can do. are often sufficient for in order to stand out and tailor your brand and looks polished that helps you attract customers and help your business grow and the things you need to be able to do")))), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Controller"], null, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Scene"], {
    duration: 1500,
    reverse: true,
    triggerHook: 1,
    classToggle: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardGridTrans,
    offset: 150
  }, __jsx("section", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid
  }, __jsx("div", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard
  }, __jsx("img", {
    src: "/web-icon-gravit.png",
    alt: "",
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon
  }), __jsx("h2", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle
  }, "Website Development"), __jsx("p", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veritatis beatae pariatur id eligendi. Quibusdam aperiam aspernatur culpa molestiae qui ut pariatur, quae praesentium illum!")), __jsx("div", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard
  }, __jsx("img", {
    src: "/web-custom-web-apps-icon-gravit.png",
    alt: "",
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon
  }), __jsx("h2", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle
  }, "Custom Web Apps"), __jsx("p", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent
  }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis molestias nulla, ullam vel itaque voluptatibus minima maxime corporis laborum natus.")), __jsx("div", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard
  }, __jsx("img", {
    src: "/email-icon-gravit.png",
    alt: "",
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon
  }), __jsx("h2", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle
  }, "Email Marketing"), __jsx("p", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque beatae cupiditate reprehenderit ea dicta repellendus ratione aspernatur mollitia natus assumenda.")), __jsx("div", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard
  }, __jsx("img", {
    src: "/website-redesign-icon-gravit.png",
    alt: "",
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon
  }), __jsx("h2", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle
  }, "Website Redesign"), __jsx("p", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusantium neque eveniet dolorum illum debitis nesciunt pariatur officiis voluptatem?")), __jsx("div", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard
  }, __jsx("img", {
    src: "/seo-icon-gravit.png",
    alt: "",
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon
  }), __jsx("h2", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle
  }, "SEO"), __jsx("p", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat officia architecto sint recusandae et consequatur suscipit alias in? Debitis.")), __jsx("div", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard
  }, __jsx("img", {
    src: "/web-maintenance-icon-gravit.png",
    alt: "",
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon
  }), __jsx("h2", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle
  }, "Website Maintenance & Content Updates"), __jsx("p", {
    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, cum necessitatibus! Ipsa iusto quam quisquam itaque delectus. Minus, ad numquam."))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "uNNz":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Hero": "hero_Hero__31-s7",
	"Hero__highlightParent": "hero_Hero__highlightParent__Y1bsj",
	"Hero__highlight": "hero_Hero__highlight__22G-0",
	"Hero__about": "hero_Hero__about__2tpOb",
	"Hero__whatwedo": "hero_Hero__whatwedo__7mm8D",
	"Hero__button": "hero_Hero__button__3M1u7",
	"Hero__headerWrap": "hero_Hero__headerWrap__3lDLp",
	"Hero__heading": "hero_Hero__heading__3nkAC",
	"Hero__subheading": "hero_Hero__subheading__R9GbO",
	"Hero__img": "hero_Hero__img__2u-GH",
	"Hero__testImg": "hero_Hero__testImg___oWel",
	"Hero__text": "hero_Hero__text__35SzC",
	"Hero__typewriter": "hero_Hero__typewriter__2r780",
	"animated-text": "hero_animated-text__2UNIN",
	"Hero__textTrans": "hero_Hero__textTrans__2YWhK",
	"Hero__whatwedoTrans": "hero_Hero__whatwedoTrans__12yBR"
};

/***/ }),

/***/ "yBWC":
/***/ (function(module, exports) {

module.exports = require("react-scrollmagic");

/***/ })

/******/ });