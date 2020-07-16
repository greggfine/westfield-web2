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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ALdH");


/***/ }),

/***/ "ALdH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Wcpz");
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// FORMSPREE ENDPOINT:  https://formspree.io/xyynberj



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null
    }
  });
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    email: "",
    message: ""
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg
        }
      });
      setInputs({
        email: "",
        message: ""
      });
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg
        }
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => _objectSpread({}, prev, {
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null
      }
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setStatus(prevStatus => _objectSpread({}, prevStatus, {
      submitting: true
    }));
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "POST",
      url: "https://formspree.io/xyynberj",
      data: inputs
    }).then(response => {
      handleServerResponse(true, "Thank you, your message has been submitted.");
    }).catch(error => {
      handleServerResponse(false, error.response.data.error);
    });
  };

  return __jsx("main", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactFormMain
  }, __jsx("div", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formWrapper
  }, __jsx("h1", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formTitle
  }, "Let's Talk About Your Project!"), __jsx("p", null, "Have an exciting project in mind? Or maybe would like to improve your current setup? We\u2019d be happy to discuss it with you. Let\u2019s get in touch!"), __jsx("form", {
    onSubmit: handleOnSubmit,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactForm
  }, __jsx("label", {
    htmlFor: "name",
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactFormLabel
  }, "Name"), __jsx("input", {
    id: "name",
    type: "name",
    name: "_replyto",
    onChange: handleOnChange,
    required: true,
    value: inputs.name,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactFormInput
  }), __jsx("label", {
    htmlFor: "email",
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactFormLabel
  }, "Email"), __jsx("input", {
    id: "email",
    type: "email",
    name: "_replyto",
    onChange: handleOnChange,
    required: true,
    value: inputs.email,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactFormInput
  }), __jsx("label", {
    htmlFor: "message",
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactFormLabel
  }, "Message"), __jsx("textarea", {
    id: "message",
    name: "message",
    onChange: handleOnChange,
    required: true,
    value: inputs.message,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactFormTextArea
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactFormBtn
  }, !status.submitting ? //   ? !status.submitted ? "Submit" : "Submitted"
  !status.submitted ? "Send a message" : "Message sent!" : "Submitting...")), status.info.error && __jsx("div", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.error
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx("p", null, status.info.msg)), __jsx("div", {
    class: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Contact__bottomWrapper
  }, __jsx("div", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Contact__additional
  }, __jsx("p", null, "NEW YORK | NEW JERSEY"), __jsx("p", null, "522 Summit Ave. Westfield, NJ 10012"), __jsx("p", null, "(917)355-4217")), __jsx("div", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Contact__colorDiv
  }, __jsx("div", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Contact__colorDivItem
  }, __jsx("img", {
    src: "/gregg-secondary.jpg",
    alt: ""
  }))), __jsx("div", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Contact__colorDiv
  }, __jsx("div", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Contact__colorDivItem
  }, __jsx("img", {
    src: "/domenico-loia-hGV2TfOh0ns-unsplash.jpg",
    alt: ""
  })))));
});

/***/ }),

/***/ "Wcpz":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"formWrapper": "contact_formWrapper__1IYDR",
	"formTitle": "contact_formTitle__22K9u",
	"contactForm": "contact_contactForm__2ugqo",
	"contactFormLabel": "contact_contactFormLabel__4c1PL",
	"contactFormInput": "contact_contactFormInput___L4Zy",
	"contactFormBtn": "contact_contactFormBtn__2Lf5l",
	"contactFormTextArea": "contact_contactFormTextArea__Y93vP",
	"error": "contact_error__29_M5",
	"contactFormMain": "contact_contactFormMain__3F172",
	"Contact__bottomWrapper": "contact_Contact__bottomWrapper__2xj4H",
	"Contact__additional": "contact_Contact__additional__3Y1y8",
	"Contact__colorDiv": "contact_Contact__colorDiv__3tr07",
	"Contact__colorDivItem": "contact_Contact__colorDivItem__w8CJF"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });