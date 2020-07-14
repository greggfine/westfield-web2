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
/* harmony import */ var _components_Jumbo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Jumbo */ "./components/Jumbo.js");
/* harmony import */ var _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.module.scss */ "./pages/portfolio.module.scss");
/* harmony import */ var _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Portfolio(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.portfolioSites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.sites.map(function (site) {
    return __jsx(_components_Website__WEBPACK_IMPORTED_MODULE_1__["default"], {
      website: site,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  })));
}

Portfolio.defaultProps = {
  sites: [{
    name: "Beauty Site",
    img: "/website1.jpg",
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Cosmetics Site",
    img: "/website2.jpg",
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }, {
    name: "Restaurant Site",
    img: "/website3.png",
    link: "http://localhost:8888/Beauty/",
    description: "Our restaurant serves the freshest seafood daily. Contact us for specials"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=portfolio.js.930ce17dd0105f564f4f.hot-update.js.map