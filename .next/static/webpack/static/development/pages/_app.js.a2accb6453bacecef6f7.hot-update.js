webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _siteHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./siteHeader.module.scss */ "./components/siteHeader.module.scss");
/* harmony import */ var _siteHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_siteHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Navigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;
// import styles from "./Navigation.module.scss";





var Navigation = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigation, _React$Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isOpen: true,
      isSideMenuOpen: false,
      hasScrolled: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      _this.setState({
        isOpen: !_this.state.isOpen,
        isSideMenuOpen: !_this.state.isSideMenuOpen
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
          _this2.setState({
            hasScrolled: true
          });
        }

        if (window.scrollY < 20) {
          _this2.setState({
            hasScrolled: false
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("header", {
        className: this.state.hasScrolled ? "siteHeaderStyles.SiteHeader" : "siteHeaderStyles.SiteHeader__init",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("div", {
        className: this.state.isOpen ? "siteHeaderStyles.SiteHeader__menu-icon" : "siteHeaderStyles.SiteHeader__menu-icon siteHeaderStyles.SiteHeader__menu-icon--close-x",
        id: "menu-icon",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("div", {
        className: "siteHeaderStyles.SiteHeader__menu-icon__middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), __jsx("div", {
        id: "side-menu",
        className: this.state.isSideMenuOpen ? "side-nav open-side-menu" : "side-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("ul", {
        className: "side-nav-list-items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("a", {
        className: "siteHeaderStyles.SiteHeader__listitem",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Portfolio")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("a", {
        className: "siteHeaderStyles.SiteHeader__listitem",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Contact")))), __jsx("div", {
        className: "content-sizer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("nav", {
        className: "siteHeaderStyles.SiteHeader__nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("ul", {
        className: "siteHeaderStyles.SiteHeader__nav-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        className: "siteHeaderStyles.SiteHeader__brand-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("div", {
        className: this.state.hasScrolled ? "siteHeaderStyles.SiteHeader__brand-name" : "siteHeaderStyles.SiteHeader__brand-name-init",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "siteHeaderStyles.SiteHeader__brand-wrapper__line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx("div", {
        className: "siteHeaderStyles.SiteHeader__brand-name__the",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "The"), __jsx("div", {
        className: "siteHeaderStyles.SiteHeader__brand-name__fine-web",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Fine Web")))), __jsx("div", {
        className: "siteHeaderStyles.SiteHeader__list-item-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("li", {
        className: "siteHeaderStyles.SiteHeader__nav-list-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("a", {
        className: "siteHeaderStyles.SiteHeader__listitem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Portfolio"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx("a", {
        className: "siteHeaderStyles.SiteHeader__listitem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Contact"))))))));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/siteHeader.module.scss":
/*!*******************************************!*\
  !*** ./components/siteHeader.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./siteHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/siteHeader.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./siteHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/siteHeader.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./siteHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/siteHeader.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/siteHeader.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/siteHeader.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".siteHeader_SiteHeader__14Cl2 {\n  transition: all 0.65s ease-in-out;\n  background-color: var(--mainPurple);\n  background-color: rgba(74, 25, 98, 0.9);\n  margin-bottom: 20px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  top: 0;\n  border-bottom: 2px solid #e7e7e7c7;\n  font-family: \"TTNorms-Bold.otf\"; }\n  .siteHeader_SiteHeader__init__3vZ4g {\n    position: relative; }\n  .siteHeader_SiteHeader__listitem__2XUb4 {\n    position: relative;\n    transition: color 500ms;\n    letter-spacing: 1.3px;\n    color: var(--mainPurple);\n    font-size: 1.1rem;\n    font-weight: 700;\n    font-family: \"TTNorms-Extra-Bold.otf\"; }\n    .siteHeader_SiteHeader__listitem__2XUb4::after {\n      content: \"\";\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      width: 100%;\n      height: 0.2rem;\n      transition: transform 0.2s;\n      transform: scaleX(0);\n      transform-origin: left top; }\n    .siteHeader_SiteHeader__listitem__2XUb4:hover::after {\n      transform: scaleX(1); }\n    @media (min-width: 960px) {\n      .siteHeader_SiteHeader__listitem__2XUb4:hover {\n        text-decoration: none;\n        color: var(--mainPurple); }\n      .siteHeader_SiteHeader__listitem__2XUb4:hover::after {\n        background-color: var(--neonGreen); } }\n  .siteHeader_SiteHeader__list-item-wrapper__1HIg6 {\n    display: flex;\n    justify-content: space-around;\n    width: 250px; }\n  .siteHeader_SiteHeader__brand-wrapper__1MUwO:hover {\n    cursor: pointer; }\n  .siteHeader_SiteHeader__brand-wrapper__line__6CUQW {\n    height: 3px;\n    width: 40px;\n    background-color: var(--neonGreen);\n    transform: rotate(90deg);\n    position: relative;\n    top: 27px;\n    left: -26px; }\n  .siteHeader_SiteHeader__brand-name-init__3Vbqm {\n    color: var(--mainPurple);\n    font-size: 1.5rem;\n    font-weight: 700;\n    line-height: 1;\n    padding: 10px 0 10px; }\n    .siteHeader_SiteHeader__brand-name-init__fine-web__2UTzw {\n      font-weight: 700; }\n  .siteHeader_SiteHeader__brand-name__K0HnO {\n    color: #fff;\n    font-size: 1.5rem;\n    padding: 10px 0 10px;\n    margin: 0;\n    font-family: Arial;\n    letter-spacing: 2px;\n    line-height: 1; }\n    .siteHeader_SiteHeader__brand-name__K0HnO img {\n      width: 60%;\n      transform: translateX(60px); }\n      @media (min-width: 960px) {\n        .siteHeader_SiteHeader__brand-name__K0HnO img {\n          width: 25%;\n          transform: translateX(0px); } }\n    .siteHeader_SiteHeader__brand-name__K0HnO:hover {\n      cursor: pointer; }\n    @media (max-width: 960px) {\n      .siteHeader_SiteHeader__brand-name__K0HnO {\n        font-size: 1rem;\n        visibility: visible; } }\n  .siteHeader_SiteHeader__brand__3fy_o {\n    color: #fff;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    display: none; }\n  .siteHeader_SiteHeader__brand--logo__10r1a {\n    padding-right: 10px;\n    width: 70px;\n    height: 70px; }\n  .siteHeader_SiteHeader__menu-icon__2xC6D {\n    position: absolute;\n    right: 80px;\n    width: 25px;\n    height: 18px;\n    top: 50%;\n    transform: translateY(-50%); }\n    .siteHeader_SiteHeader__menu-icon__2xC6D:hover {\n      cursor: pointer; }\n    .siteHeader_SiteHeader__menu-icon--close-x__335C4::before {\n      transform: rotate(45deg); }\n    .siteHeader_SiteHeader__menu-icon--close-x__335C4 .siteHeader_site-header__menu-icon__middle__qHImc {\n      opacity: 0; }\n    .siteHeader_SiteHeader__menu-icon--close-x__335C4::after {\n      transform: rotate(-45deg) translateY(1px); }\n    .siteHeader_SiteHeader__menu-icon__2xC6D::before {\n      content: \"\";\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      top: 0;\n      transform-origin: 0 0;\n      transition: 300ms ease-out; }\n    .siteHeader_SiteHeader__menu-icon__middle__3uL7T {\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      top: 8px;\n      transition: 300ms ease-out; }\n    .siteHeader_SiteHeader__menu-icon__2xC6D::after {\n      content: \"\";\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      bottom: 0;\n      transform-origin: 0 100%;\n      transition: 300ms ease-out; }\n    @media (min-width: 960px) {\n      .siteHeader_SiteHeader__menu-icon__2xC6D {\n        display: none; } }\n  .siteHeader_SiteHeader__nav-active__QWTyt {\n    text-decoration: underline; }\n  .siteHeader_SiteHeader__nav-list__2pR-M {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    justify-content: space-around;\n    align-items: center; }\n    @media (max-width: 960px) {\n      .siteHeader_SiteHeader__nav-list__2pR-M {\n        visibility: hidden; } }\n  .siteHeader_SiteHeader__nav-list-item__OGWrr {\n    list-style-type: none; }\n  .siteHeader_SiteHeader__14Cl2 nav ul li a,\n  .siteHeader_SiteHeader__14Cl2 li {\n    color: #fff;\n    font-size: 1.2rem;\n    font-weight: bold; }\n", "",{"version":3,"sources":["siteHeader.module.scss"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,mCAAmC;EACnC,uCAAuC;EACvC,mBAAmB;EACnB,wBAAgB;EAAhB,gBAAgB;EAChB,UAAU;EACV,MAAM;EACN,kCAAkC;EAClC,+BAA+B,EAAA;EAE/B;IACE,kBAAkB,EAAA;EAGpB;IACE,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;IACrB,wBAAwB;IACxB,iBAAiB;IACjB,gBAAgB;IAChB,qCAAqC,EAAA;IAPtC;MAUG,WAAW;MACX,kBAAkB;MAClB,aAAa;MACb,OAAO;MACP,WAAW;MACX,cAAc;MACd,0BAA0B;MAC1B,oBAAoB;MACpB,0BAA0B,EAAA;IAlB7B;MAsBG,oBAAoB,EAAA;IAEtB;MAxBD;QA0BK,qBAAqB;QACrB,wBAAwB,EAAA;MA3B7B;QA8BK,kCAAkC,EAAA,EACnC;EAIL;IACE,aAAa;IACb,6BAA6B;IAC7B,YAAY,EAAA;EAGb;IAEG,eAAe,EAAA;EAInB;IACE,WAAW;IACX,WAAW;IACX,kCAAkC;IAClC,wBAAwB;IACxB,kBAAkB;IAClB,SAAS;IACT,WAAW,EAAA;EAGb;IACE,wBAAwB;IACxB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,oBAAoB,EAAA;IAEpB;MACE,gBAAgB,EAAA;EAIpB;IACE,WAAW;IACX,iBAAiB;IACjB,oBAAoB;IACpB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,cAAc,EAAA;IAPf;MAUG,UAAU;MACV,2BAA2B,EAAA;MAE3B;QAbH;UAcK,UAAU;UACV,0BAA0B,EAAA,EAE7B;IAjBF;MAoBG,eAAe,EAAA;IAEjB;MAtBF;QAuBI,eAAe;QACf,mBAAmB,EAAA,EAEtB;EAED;IACE,WAAW;IACX,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,aAAa,EAAA;EAGf;IACE,mBAAmB;IACnB,WAAW;IACX,YAAY,EAAA;EAGd;IACE,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,YAAY;IACZ,QAAQ;IACR,2BAA2B,EAAA;IAN5B;MASG,eAAe,EAAA;IAGhB;MAEG,wBAAwB,EAAA;IAF3B;MAKG,UAAU,EAAA;IALb;MAQG,yCAAyC,EAAA;IApB9C;MAyBG,WAAW;MACX,sBAAsB;MACtB,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,MAAM;MACN,qBAAqB;MACrB,0BAA0B,EAAA;IAG5B;MACE,sBAAsB;MACtB,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,QAAQ;MACR,0BAA0B,EAAA;IAzC7B;MA6CG,WAAW;MACX,sBAAsB;MACtB,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,SAAS;MACT,wBAAwB;MACxB,0BAA0B,EAAA;IAG5B;MAvDF;QAwDI,aAAa,EAAA,EAEhB;EAED;IACE,0BAA0B,EAAA;EAG5B;IACE,UAAU;IACV,SAAS;IACT,qBAAqB;IACrB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB,EAAA;IACnB;MAPF;QAQI,kBAAkB,EAAA,EAErB;EAED;IACE,qBAAqB,EAAA;EA3MzB;;IAgNI,WAAW;IACX,iBAAiB;IACjB,iBAAiB,EAAA","file":"siteHeader.module.scss","sourcesContent":[".SiteHeader {\n  transition: all 0.65s ease-in-out;\n  background-color: var(--mainPurple);\n  background-color: rgba(74, 25, 98, 0.9);\n  margin-bottom: 20px;\n  position: sticky;\n  z-index: 1;\n  top: 0;\n  border-bottom: 2px solid #e7e7e7c7;\n  font-family: \"TTNorms-Bold.otf\";\n\n  &__init {\n    position: relative;\n  }\n\n  &__listitem {\n    position: relative;\n    transition: color 500ms;\n    letter-spacing: 1.3px;\n    color: var(--mainPurple);\n    font-size: 1.1rem;\n    font-weight: 700;\n    font-family: \"TTNorms-Extra-Bold.otf\";\n\n    &::after {\n      content: \"\";\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      width: 100%;\n      height: 0.2rem;\n      transition: transform 0.2s;\n      transform: scaleX(0);\n      transform-origin: left top;\n    }\n\n    &:hover::after {\n      transform: scaleX(1);\n    }\n    @media (min-width: 960px) {\n      &:hover {\n        text-decoration: none;\n        color: var(--mainPurple);\n      }\n      &:hover::after {\n        background-color: var(--neonGreen);\n      }\n    }\n  }\n\n  &__list-item-wrapper {\n    display: flex;\n    justify-content: space-around;\n    width: 250px;\n  }\n\n  &__brand-wrapper {\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  &__brand-wrapper__line {\n    height: 3px;\n    width: 40px;\n    background-color: var(--neonGreen);\n    transform: rotate(90deg);\n    position: relative;\n    top: 27px;\n    left: -26px;\n  }\n\n  &__brand-name-init {\n    color: var(--mainPurple);\n    font-size: 1.5rem;\n    font-weight: 700;\n    line-height: 1;\n    padding: 10px 0 10px;\n\n    &__fine-web {\n      font-weight: 700;\n    }\n  }\n\n  &__brand-name {\n    color: #fff;\n    font-size: 1.5rem;\n    padding: 10px 0 10px;\n    margin: 0;\n    font-family: Arial;\n    letter-spacing: 2px;\n    line-height: 1;\n\n    img {\n      width: 60%;\n      transform: translateX(60px);\n\n      @media (min-width: 960px) {\n        width: 25%;\n        transform: translateX(0px);\n      }\n    }\n\n    &:hover {\n      cursor: pointer;\n    }\n    @media (max-width: 960px) {\n      font-size: 1rem;\n      visibility: visible;\n    }\n  }\n\n  &__brand {\n    color: #fff;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    display: none;\n  }\n\n  &__brand--logo {\n    padding-right: 10px;\n    width: 70px;\n    height: 70px;\n  }\n\n  &__menu-icon {\n    position: absolute;\n    right: 80px;\n    width: 25px;\n    height: 18px;\n    top: 50%;\n    transform: translateY(-50%);\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    &--close-x {\n      &::before {\n        transform: rotate(45deg);\n      }\n      .site-header__menu-icon__middle {\n        opacity: 0;\n      }\n      &::after {\n        transform: rotate(-45deg) translateY(1px);\n      }\n    }\n\n    &::before {\n      content: \"\";\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      top: 0;\n      transform-origin: 0 0;\n      transition: 300ms ease-out;\n    }\n\n    &__middle {\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      top: 8px;\n      transition: 300ms ease-out;\n    }\n\n    &::after {\n      content: \"\";\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      bottom: 0;\n      transform-origin: 0 100%;\n      transition: 300ms ease-out;\n    }\n\n    @media (min-width: 960px) {\n      display: none;\n    }\n  }\n\n  &__nav-active {\n    text-decoration: underline;\n  }\n\n  &__nav-list {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    @media (max-width: 960px) {\n      visibility: hidden;\n    }\n  }\n\n  &__nav-list-item {\n    list-style-type: none;\n  }\n\n  nav ul li a,\n  li {\n    color: #fff;\n    font-size: 1.2rem;\n    font-weight: bold;\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"SiteHeader": "siteHeader_SiteHeader__14Cl2",
	"SiteHeader__init": "siteHeader_SiteHeader__init__3vZ4g",
	"SiteHeader__listitem": "siteHeader_SiteHeader__listitem__2XUb4",
	"SiteHeader__list-item-wrapper": "siteHeader_SiteHeader__list-item-wrapper__1HIg6",
	"SiteHeader__brand-wrapper": "siteHeader_SiteHeader__brand-wrapper__1MUwO",
	"SiteHeader__brand-wrapper__line": "siteHeader_SiteHeader__brand-wrapper__line__6CUQW",
	"SiteHeader__brand-name-init": "siteHeader_SiteHeader__brand-name-init__3Vbqm",
	"SiteHeader__brand-name-init__fine-web": "siteHeader_SiteHeader__brand-name-init__fine-web__2UTzw",
	"SiteHeader__brand-name": "siteHeader_SiteHeader__brand-name__K0HnO",
	"SiteHeader__brand": "siteHeader_SiteHeader__brand__3fy_o",
	"SiteHeader__brand--logo": "siteHeader_SiteHeader__brand--logo__10r1a",
	"SiteHeader__menu-icon": "siteHeader_SiteHeader__menu-icon__2xC6D",
	"SiteHeader__menu-icon--close-x": "siteHeader_SiteHeader__menu-icon--close-x__335C4",
	"site-header__menu-icon__middle": "siteHeader_site-header__menu-icon__middle__qHImc",
	"SiteHeader__menu-icon__middle": "siteHeader_SiteHeader__menu-icon__middle__3uL7T",
	"SiteHeader__nav-active": "siteHeader_SiteHeader__nav-active__QWTyt",
	"SiteHeader__nav-list": "siteHeader_SiteHeader__nav-list__2pR-M",
	"SiteHeader__nav-list-item": "siteHeader_SiteHeader__nav-list-item__OGWrr"
};

/***/ })

})
//# sourceMappingURL=_app.js.a2accb6453bacecef6f7.hot-update.js.map