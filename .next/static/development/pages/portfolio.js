(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/portfolio.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fportfolio&absolutePagePath=%2FUsers%2FHTMusic%2FDesktop%2FPROJECTS%2Fwestfield-web%2Fpages%2Fportfolio.js!./":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fportfolio&absolutePagePath=%2FUsers%2FHTMusic%2FDesktop%2FPROJECTS%2Fwestfield-web%2Fpages%2Fportfolio.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio", function() {
      var mod = __webpack_require__(/*! ./pages/portfolio.js */ "./pages/portfolio.js")
      if(true) {
        module.hot.accept(/*! ./pages/portfolio.js */ "./pages/portfolio.js", function() {
          if(!next.router.components["/portfolio"]) return
          var updatedPage = __webpack_require__(/*! ./pages/portfolio.js */ "./pages/portfolio.js")
          next.router.update("/portfolio", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_0fb095e325d7ebf261c3 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_0fb095e325d7ebf261c3 */ "dll-reference dll_0fb095e325d7ebf261c3"))("./node_modules/react/index.js");

/***/ }),

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
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Portfolio(props) {
  return __jsx("ul", {
    className: "Portfolio-sites",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.sites.map(function (site) {
    return __jsx("li", {
      key: site,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, __jsx("a", {
      href: "http://localhost:8888/Beauty/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, site));
  }));
}

Portfolio.defaultProps = {
  sites: ["Beauty Site", "Cosmetics Site", "Restaurant Site", "Sports Site", "Music Site", "Legal Site"]
};
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ 3:
/*!********************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fportfolio&absolutePagePath=%2FUsers%2FHTMusic%2FDesktop%2FPROJECTS%2Fwestfield-web%2Fpages%2Fportfolio.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fportfolio&absolutePagePath=%2FUsers%2FHTMusic%2FDesktop%2FPROJECTS%2Fwestfield-web%2Fpages%2Fportfolio.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fportfolio&absolutePagePath=%2FUsers%2FHTMusic%2FDesktop%2FPROJECTS%2Fwestfield-web%2Fpages%2Fportfolio.js!./");


/***/ }),

/***/ "dll-reference dll_0fb095e325d7ebf261c3":
/*!*******************************************!*\
  !*** external "dll_0fb095e325d7ebf261c3" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_0fb095e325d7ebf261c3;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=portfolio.js.map