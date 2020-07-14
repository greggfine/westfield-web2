webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.module.scss */ "./pages/contact.module.scss");
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// FORMSPREE ENDPOINT:  https://formspree.io/xyynberj



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null
    }
  }),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: "",
    message: ""
  }),
      inputs = _useState2[0],
      setInputs = _useState2[1];

  var handleServerResponse = function handleServerResponse(ok, msg) {
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

  var handleOnChange = function handleOnChange(e) {
    e.persist();
    setInputs(function (prev) {
      return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.id, e.target.value));
    });
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null
      }
    });
  };

  var handleOnSubmit = function handleOnSubmit(e) {
    e.preventDefault();
    setStatus(function (prevStatus) {
      return _objectSpread({}, prevStatus, {
        submitting: true
      });
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "POST",
      url: "https://formspree.io/xyynberj",
      data: inputs
    }).then(function (response) {
      handleServerResponse(true, "Thank you, your message has been submitted.");
    })["catch"](function (error) {
      handleServerResponse(false, error.response.data.error);
    });
  };

  return __jsx("main", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactFormMain,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Say Hello!"), __jsx("div", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.formWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleOnSubmit,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "name",
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactFormLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Name"), __jsx("input", {
    id: "name",
    type: "name",
    name: "_replyto",
    onChange: handleOnChange,
    required: true,
    value: inputs.name,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactFormInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "phone",
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactFormLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Phone"), __jsx("input", {
    id: "phone",
    type: "phone",
    name: "_replyto",
    onChange: handleOnChange,
    required: true,
    value: inputs.phone,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactFormInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "email",
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactFormLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Email"), __jsx("input", {
    id: "email",
    type: "email",
    name: "_replyto",
    onChange: handleOnChange,
    required: true,
    value: inputs.email,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactFormInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "message",
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactFormLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Message"), __jsx("textarea", {
    id: "message",
    name: "message",
    onChange: handleOnChange,
    required: true,
    value: inputs.message,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactFormTextArea,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactFormBtn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, !status.submitting ? //   ? !status.submitted ? "Submit" : "Submitted"
  !status.submitted ? "Send a message" : "Message sent!" : "Submitting...")), status.info.error && __jsx("div", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, status.info.msg)));
});

/***/ })

})
//# sourceMappingURL=contact.js.057337d9799dea6914c4.hot-update.js.map