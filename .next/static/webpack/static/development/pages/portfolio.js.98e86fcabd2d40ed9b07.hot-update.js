webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./components/Jumbo.js":
/*!*****************************!*\
  !*** ./components/Jumbo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Jumbotron */ "./node_modules/react-bootstrap/esm/Jumbotron.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Jumbo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Jumbo = function Jumbo() {
  __jsx(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Hello, world!"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Learn more")));
};

/* harmony default export */ __webpack_exports__["default"] = (Jumbo);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Jumbotron.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Jumbotron.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");





var defaultProps = {
  fluid: false
};
var Jumbotron = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _classes;

  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      fluid = _ref.fluid,
      bsPrefix = _ref.bsPrefix,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "className", "fluid", "bsPrefix"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'jumbotron');
  var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, classes)
  }));
});
Jumbotron.defaultProps = defaultProps;
Jumbotron.displayName = 'Jumbotron';
/* harmony default export */ __webpack_exports__["default"] = (Jumbotron);

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_sites_site1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/sites/site1.jpg */ "./images/sites/site1.jpg");
/* harmony import */ var _images_sites_site1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_sites_site2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sites/site2.jpg */ "./images/sites/site2.jpg");
/* harmony import */ var _images_sites_site2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_sites_site3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/sites/site3.png */ "./images/sites/site3.png");
/* harmony import */ var _images_sites_site3_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site3_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_sites_site4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/sites/site4.png */ "./images/sites/site4.png");
/* harmony import */ var _images_sites_site4_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site4_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_sites_site5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/sites/site5.jpg */ "./images/sites/site5.jpg");
/* harmony import */ var _images_sites_site5_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site5_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_sites_site6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/sites/site6.jpg */ "./images/sites/site6.jpg");
/* harmony import */ var _images_sites_site6_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_sites_site6_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Site__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Site */ "./components/Site.js");
/* harmony import */ var _components_Jumbo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Jumbo */ "./components/Jumbo.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/portfolio.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function Portfolio(props) {
  return __jsx("ul", {
    className: "jsx-635068749" + " " + "Portfolio-sites",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.sites.map(function (site) {
    return __jsx(_components_Site__WEBPACK_IMPORTED_MODULE_8__["default"], {
      site: site,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "635068749",
    __self: this
  }, ".Portfolio-sites.jsx-635068749{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:60px auto;padding:40px 0px;font-size:1.5rem;width:60%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9wYWdlcy9wb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUdnQyxxQkFDUiwwRUFDRSx5REFDYywySEFDWixpQkFDQSxpQkFDQSxpQkFDUCxVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9IVE11c2ljL0Rlc2t0b3AvUFJPSkVDVFMvd2VzdGZpZWxkLXdlYi9wYWdlcy9wb3J0Zm9saW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2l0ZTEgZnJvbSBcIi4uL2ltYWdlcy9zaXRlcy9zaXRlMS5qcGdcIjtcbmltcG9ydCBzaXRlMiBmcm9tIFwiLi4vaW1hZ2VzL3NpdGVzL3NpdGUyLmpwZ1wiO1xuaW1wb3J0IHNpdGUzIGZyb20gXCIuLi9pbWFnZXMvc2l0ZXMvc2l0ZTMucG5nXCI7XG5pbXBvcnQgc2l0ZTQgZnJvbSBcIi4uL2ltYWdlcy9zaXRlcy9zaXRlNC5wbmdcIjtcbmltcG9ydCBzaXRlNSBmcm9tIFwiLi4vaW1hZ2VzL3NpdGVzL3NpdGU1LmpwZ1wiO1xuaW1wb3J0IHNpdGU2IGZyb20gXCIuLi9pbWFnZXMvc2l0ZXMvc2l0ZTYuanBnXCI7XG5pbXBvcnQgU2l0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaXRlXCI7XG5pbXBvcnQgSnVtYm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSnVtYm9cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcblxuZnVuY3Rpb24gUG9ydGZvbGlvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIlBvcnRmb2xpby1zaXRlc1wiPlxuICAgICAge3Byb3BzLnNpdGVzLm1hcChzaXRlID0+IChcbiAgICAgICAgPFNpdGUgc2l0ZT17c2l0ZX0gLz5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuUG9ydGZvbGlvLXNpdGVzIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogNDBweCAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvdWw+XG4gICk7XG59XG5cblBvcnRmb2xpby5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpdGVzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJCZWF1dHkgU2l0ZVwiLFxuICAgICAgaW1nOiBzaXRlMSxcbiAgICAgIGxpbms6IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L0JlYXV0eS9cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIlpvbmVYcyBvZmZlcnMgcGVzdCBjb250cm9sIHNlcnZpY2VzIHRvIHJlc2lkZW50aWFsIGFuZCBjb21tZXJjaWFsIGN1c3RvbWVycyBpbiB0aGUgRGVsYW5kLCBGbG9yaWRhIGFyZWEuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ29zbWV0aWNzIFNpdGVcIixcbiAgICAgIGltZzogc2l0ZTIsXG4gICAgICBsaW5rOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9CZWF1dHkvXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJab25lWHMgb2ZmZXJzIHBlc3QgY29udHJvbCBzZXJ2aWNlcyB0byByZXNpZGVudGlhbCBhbmQgY29tbWVyY2lhbCBjdXN0b21lcnMgaW4gdGhlIERlbGFuZCwgRmxvcmlkYSBhcmVhLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlJlc3RhdXJhbnQgU2l0ZVwiLFxuICAgICAgaW1nOiBzaXRlMyxcbiAgICAgIGxpbms6IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L0JlYXV0eS9cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIlpvbmVYcyBvZmZlcnMgcGVzdCBjb250cm9sIHNlcnZpY2VzIHRvIHJlc2lkZW50aWFsIGFuZCBjb21tZXJjaWFsIGN1c3RvbWVycyBpbiB0aGUgRGVsYW5kLCBGbG9yaWRhIGFyZWEuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3BvcnRzIFNpdGVcIixcbiAgICAgIGltZzogc2l0ZTQsXG4gICAgICBsaW5rOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9CZWF1dHkvXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJab25lWHMgb2ZmZXJzIHBlc3QgY29udHJvbCBzZXJ2aWNlcyB0byByZXNpZGVudGlhbCBhbmQgY29tbWVyY2lhbCBjdXN0b21lcnMgaW4gdGhlIERlbGFuZCwgRmxvcmlkYSBhcmVhLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIk11c2ljIFNpdGVcIixcbiAgICAgIGltZzogc2l0ZTUsXG4gICAgICBsaW5rOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9CZWF1dHkvXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJab25lWHMgb2ZmZXJzIHBlc3QgY29udHJvbCBzZXJ2aWNlcyB0byByZXNpZGVudGlhbCBhbmQgY29tbWVyY2lhbCBjdXN0b21lcnMgaW4gdGhlIERlbGFuZCwgRmxvcmlkYSBhcmVhLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkxlZ2FsIFNpdGVcIixcbiAgICAgIGltZzogc2l0ZTYsXG4gICAgICBsaW5rOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9CZWF1dHkvXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJab25lWHMgb2ZmZXJzIHBlc3QgY29udHJvbCBzZXJ2aWNlcyB0byByZXNpZGVudGlhbCBhbmQgY29tbWVyY2lhbCBjdXN0b21lcnMgaW4gdGhlIERlbGFuZCwgRmxvcmlkYSBhcmVhLlwiXG4gICAgfVxuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87XG4iXX0= */\n/*@ sourceURL=/Users/HTMusic/Desktop/PROJECTS/westfield-web/pages/portfolio.js */"));
}

Portfolio.defaultProps = {
  sites: [{
    name: "Beauty Site",
    img: _images_sites_site1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "ZoneXs offers pest control services to residential and commercial customers in the Deland, Florida area."
  }, {
    name: "Cosmetics Site",
    img: _images_sites_site2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "ZoneXs offers pest control services to residential and commercial customers in the Deland, Florida area."
  }, {
    name: "Restaurant Site",
    img: _images_sites_site3_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "ZoneXs offers pest control services to residential and commercial customers in the Deland, Florida area."
  }, {
    name: "Sports Site",
    img: _images_sites_site4_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "ZoneXs offers pest control services to residential and commercial customers in the Deland, Florida area."
  }, {
    name: "Music Site",
    img: _images_sites_site5_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "ZoneXs offers pest control services to residential and commercial customers in the Deland, Florida area."
  }, {
    name: "Legal Site",
    img: _images_sites_site6_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    link: "http://localhost:8888/Beauty/",
    description: "ZoneXs offers pest control services to residential and commercial customers in the Deland, Florida area."
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=portfolio.js.98e86fcabd2d40ed9b07.hot-update.js.map