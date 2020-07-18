webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Website */ "./components/Website.js");
/* harmony import */ var _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.module.scss */ "./pages/portfolio.module.scss");
/* harmony import */ var _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollmagic */ "./node_modules/react-scrollmagic/dist/index.es.js");
/* harmony import */ var _websites_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../websites.json */ "./websites.json");
var _websites_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../websites.json */ "./websites.json", 1);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Portfolio(props) {
  return __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.websitesWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h2", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapperHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Websites"), __jsx("ul", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, _websites_json__WEBPACK_IMPORTED_MODULE_4__.sites.map(function (site) {
    return __jsx(_components_Website__WEBPACK_IMPORTED_MODULE_1__["default"], {
      website: site,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }))), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__["Scene"], {
    duration: 1500,
    reverse: true,
    triggerHook: 0.7,
    classToggle: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__horizontalRow__trans,
    offset: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__horizontalRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), __jsx("div", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.websitesWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h2", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapperHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Web Apps"), __jsx("ul", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, _websites_json__WEBPACK_IMPORTED_MODULE_4__.apps.map(function (site) {
    return __jsx(_components_Website__WEBPACK_IMPORTED_MODULE_1__["default"], {
      website: site,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    });
  })), ";"));
}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=portfolio.js.bccadcfd87badc36ab04.hot-update.js.map