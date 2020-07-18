(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/portfolio.js"],{

/***/ "./components/Website.js":
/*!*******************************!*\
  !*** ./components/Website.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _Website_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Website.module.scss */ "./components/Website.module.scss");
/* harmony import */ var _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Website_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollmagic */ "./node_modules/react-scrollmagic/dist/index.es.js");
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Website.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Site = function Site(_ref) {
  var website = _ref.website;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__myCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__["Controller"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__["Scene"], {
    duration: 1500,
    reverse: false,
    triggerHook: 0.7,
    classToggle: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardTrans,
    offset: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card,
    key: website.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__innerCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Img, {
    variant: "top",
    src: website.img,
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardImg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h4", {
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, website.name), __jsx("p", {
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, website.description), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outline-primary",
    href: website.link,
    target: "_blank",
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardBtn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "VIEW WEBSITE"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Site);

/***/ }),

/***/ "./components/Website.module.scss":
/*!****************************************!*\
  !*** ./components/Website.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Website.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Website.module.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Website.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Website.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Website.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Website.module.scss");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@restart/context/forwardRef.js":
/*!*****************************************************!*\
  !*** ./node_modules/@restart/context/forwardRef.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = forwardRef;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forwardRef(renderFn, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      propTypes = _ref.propTypes,
      defaultProps = _ref.defaultProps,
      _ref$allowFallback = _ref.allowFallback,
      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? renderFn.name || renderFn.displayName : _ref$displayName;

  var render = function render(props, ref) {
    return renderFn(props, ref);
  };

  return Object.assign(_react.default.forwardRef || !allowFallback ? _react.default.forwardRef(render) : function (props) {
    return render(props, null);
  }, {
    displayName: displayName,
    propTypes: propTypes,
    defaultProps: defaultProps
  });
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Website.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Website.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Website_Card__3Zo-r {\n  width: 20rem;\n  textalign: center;\n  boxshadow: 2px 2px 5px 5px var(--boxShadowGrey);\n  margin: 1.25rem;\n  border-radius: 0.55em;\n  opacity: 0.3;\n  transform: scale(0.6);\n  transition: all 0.8s; }\n  .Website_Card__3Zo-r:hover {\n    cursor: pointer; }\n  .Website_Card__cardTrans__1oKTW {\n    opacity: 1;\n    transform: scale(1); }\n  .Website_Card__myCard__3me9C:hover {\n    transition: transform 400ms ease-in-out;\n    transform: translateY(-5px); }\n  .Website_Card__innerCard__oJj2D:hover {\n    box-shadow: 2px 2px 10px 10px var(--boxShadowGrey); }\n  .Website_Card__cardImg__mVvOp {\n    height: 100%; }\n  .Website_Card__cardTitle__1ZsRD {\n    font-size: 1.5rem;\n    font-family: \"TTNorms-Bold.otf\";\n    color: #3f3f40; }\n  .Website_Card__cardText__1LMqt {\n    font-size: 1rem;\n    color: var(--secondaryText); }\n  .Website_Card__cardBtn__JsFjZ {\n    color: var(--secondaryRed) !important;\n    border: 1px solid var(--secondaryRed) !important; }\n    .Website_Card__cardBtn__JsFjZ:hover {\n      background-color: var(--secondaryRed);\n      border: 1px solid var(--secondaryRed);\n      color: #fff !important; }\n", "",{"version":3,"sources":["Website.module.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,iBAAiB;EACjB,+CAA+C;EAC/C,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,qBAAqB;EACrB,oBAAoB,EAAA;EARtB;IAWI,eAAe,EAAA;EAGjB;IACE,UAAU;IACV,mBAAmB,EAAA;EAGpB;IAEG,uCAAuC;IACvC,2BAA2B,EAAA;EAI9B;IAEG,kDAAkD,EAAA;EAItD;IACE,YAAY,EAAA;EAGd;IACE,iBAAiB;IACjB,+BAA+B;IAC/B,cAAc,EAAA;EAGhB;IACE,eAAe;IACf,2BAA2B,EAAA;EAG7B;IACE,qCAAqC;IACrC,gDAAgD,EAAA;IAFjD;MAKG,qCAAqC;MACrC,qCAAqC;MACrC,sBAAsB,EAAA","file":"Website.module.scss","sourcesContent":[".Card {\n  width: 20rem;\n  textalign: center;\n  boxshadow: 2px 2px 5px 5px var(--boxShadowGrey);\n  margin: 1.25rem;\n  border-radius: 0.55em;\n  opacity: 0.3;\n  transform: scale(0.6);\n  transition: all 0.8s;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &__cardTrans {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  &__myCard {\n    &:hover {\n      transition: transform 400ms ease-in-out;\n      transform: translateY(-5px);\n    }\n  }\n\n  &__innerCard {\n    &:hover {\n      box-shadow: 2px 2px 10px 10px var(--boxShadowGrey);\n    }\n  }\n\n  &__cardImg {\n    height: 100%;\n  }\n\n  &__cardTitle {\n    font-size: 1.5rem;\n    font-family: \"TTNorms-Bold.otf\";\n    color: #3f3f40;\n  }\n\n  &__cardText {\n    font-size: 1rem;\n    color: var(--secondaryText);\n  }\n\n  &__cardBtn {\n    color: var(--secondaryRed) !important;\n    border: 1px solid var(--secondaryRed) !important;\n\n    &:hover {\n      background-color: var(--secondaryRed);\n      border: 1px solid var(--secondaryRed);\n      color: #fff !important;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/portfolio.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/portfolio.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".portfolio_Portfolio__websites__2rPvN {\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin: 60px auto;\n  padding: 40px 0px;\n  font-size: 1.5rem;\n  width: 65%; }\n\n.portfolio_Portfolio__horizontalRow__kiyvM {\n  height: 1.5px;\n  margin: 0 auto;\n  background-color: var(--secondaryText);\n  opacity: 0;\n  width: 0vw;\n  transition: all 1s; }\n  .portfolio_Portfolio__horizontalRow__trans__Q5gmK {\n    width: 65vw;\n    opacity: 1; }\n\n.portfolio_Portfolio__heading__3RS8x {\n  background: #1f062c url(\"/domenico-loia-hGV2TfOh0ns-unsplash.jpg\") no-repeat center;\n  background-size: cover;\n  background-blend-mode: screen;\n  width: 100vw;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.portfolio_Portfolio__title__dcCcs {\n  color: var(--secondaryRed);\n  font-weight: 700;\n  font-size: 4rem;\n  font-family: \"TTNorms-Extra-Bold.otf\";\n  text-shadow: -2px 2px 2px #5e3a3a63; }\n\n.portfolio_Portfolio__subheading__1pb3A {\n  color: var(--secondaryRed);\n  font-family: \"TTNorms-ExtraBoldItalic.otf\";\n  font-size: 2rem; }\n\n.portfolio_Portfolio__headerWrapper__13Jft {\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 2% 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.portfolio_Portfolio__websitesWrapper__3nkVU {\n  text-align: center; }\n\n.portfolio_Portfolio__wrapperHeading__3jLI2 {\n  color: #3f224d;\n  margin-top: 60px;\n  font-size: 4rem;\n  font-weight: 900;\n  font-family: \"TTNorms-Extra-Bold.otf\"; }\n", "",{"version":3,"sources":["portfolio.module.scss"],"names":[],"mappings":"AACE;EACE,qBAAqB;EACrB,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,UAAU,EAAA;;AAGZ;EACE,aAAa;EACb,cAAc;EACd,sCAAsC;EACtC,UAAU;EACV,UAAU;EACV,kBAAkB,EAAA;EAClB;IACE,WAAW;IACX,UAAU,EAAA;;AAId;EACE,mFACQ;EACR,sBAAsB;EACtB,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAA;;AAGzB;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,qCAAqC;EACrC,mCAAmC,EAAA;;AAGrC;EACE,0BAA0B;EAC1B,0CAA0C;EAC1C,eAAe,EAAA;;AAGjB;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAGpB;EACE,kBAAkB,EAAA;;AAGpB;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,qCAAqC,EAAA","file":"portfolio.module.scss","sourcesContent":[".Portfolio {\n  &__websites {\n    list-style-type: none;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin: 60px auto;\n    padding: 40px 0px;\n    font-size: 1.5rem;\n    width: 65%;\n  }\n\n  &__horizontalRow {\n    height: 1.5px;\n    margin: 0 auto;\n    background-color: var(--secondaryText);\n    opacity: 0;\n    width: 0vw;\n    transition: all 1s;\n    &__trans {\n      width: 65vw;\n      opacity: 1;\n    }\n  }\n\n  &__heading {\n    background: #1f062c url(\"/domenico-loia-hGV2TfOh0ns-unsplash.jpg\") no-repeat\n      center;\n    background-size: cover;\n    background-blend-mode: screen;\n    width: 100vw;\n    height: 400px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &__title {\n    color: var(--secondaryRed);\n    font-weight: 700;\n    font-size: 4rem;\n    font-family: \"TTNorms-Extra-Bold.otf\";\n    text-shadow: -2px 2px 2px #5e3a3a63;\n  }\n\n  &__subheading {\n    color: var(--secondaryRed);\n    font-family: \"TTNorms-ExtraBoldItalic.otf\";\n    font-size: 2rem;\n  }\n\n  &__headerWrapper {\n    background-color: rgba(255, 255, 255, 0.9);\n    padding: 2% 10px;\n    border-radius: 5px;\n    text-align: center;\n  }\n\n  &__websitesWrapper {\n    text-align: center;\n  }\n\n  &__wrapperHeading {\n    color: #3f224d;\n    margin-top: 60px;\n    font-size: 4rem;\n    font-weight: 900;\n    font-family: \"TTNorms-Extra-Bold.otf\";\n  }\n}\n"]}]);
// Exports
exports.locals = {
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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/camelize.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/camelize.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return camelize; });
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

/***/ }),

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

/***/ "./node_modules/react-bootstrap/esm/Button.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Button.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/esm/SafeAnchor.js");






var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};
var Button = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'btn');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      as: as,
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (!as) {
    props.type = type;
  }

  var Component = as || 'button';
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes
  }));
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Card.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Card.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");
/* harmony import */ var _divWithClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./divWithClassName */ "./node_modules/react-bootstrap/esm/divWithClassName.js");
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/esm/CardContext.js");
/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/esm/CardImg.js");









var DivStyledAsH5 = Object(_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h5');
var DivStyledAsH6 = Object(_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h6');
var CardBody = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-body');
var defaultProps = {
  body: false
};
var Card = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'card');
  var cardContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CardContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: cardContext
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardBody, null, children) : children));
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg__WEBPACK_IMPORTED_MODULE_8__["default"];
Card.Title = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-title', {
  Component: DivStyledAsH5
});
Card.Subtitle = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-subtitle', {
  Component: DivStyledAsH6
});
Card.Body = CardBody;
Card.Link = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-link', {
  Component: 'a'
});
Card.Text = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-text', {
  Component: 'p'
});
Card.Header = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-header');
Card.Footer = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-footer');
Card.ImgOverlay = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-img-overlay');
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardContext.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardImg.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardImg.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");





var defaultProps = {
  variant: null
};
var CardImg = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "variant", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'card-img');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});
CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (CardImg);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/SafeAnchor.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/SafeAnchor.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createChainedFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createChainedFunction */ "./node_modules/react-bootstrap/esm/createChainedFunction.js");





function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'a' : _ref$as,
      disabled = _ref.disabled,
      onKeyDown = _ref.onKeyDown,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "disabled", "onKeyDown"]);

  var handleClick = function handleClick(event) {
    var href = props.href,
        onClick = props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (isTrivialHref(props.href)) {
    props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
    // otherwise, the cursor incorrectly styled (except with role='button')

    props.href = props.href || '#';
  }

  if (disabled) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    onClick: handleClick,
    onKeyDown: Object(_createChainedFunction__WEBPACK_IMPORTED_MODULE_3__["default"])(handleKeyDown, onKeyDown)
  }));
});
SafeAnchor.displayName = 'SafeAnchor';
/* harmony default export */ __webpack_exports__["default"] = (SafeAnchor);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ThemeProvider.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ThemeProvider.js ***!
  \***********************************************************/
/*! exports provided: useBootstrapPrefix, createBootstrapComponent, ThemeConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBootstrapPrefix", function() { return useBootstrapPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBootstrapComponent", function() { return createBootstrapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Consumer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/context/forwardRef */ "./node_modules/@restart/context/forwardRef.js");
/* harmony import */ var _restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var ThemeContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;

function ThemeProvider(_ref) {
  var prefixes = _ref.prefixes,
      children = _ref.children;
  var copiedPrefixes = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prefixes);
  }, [prefixes]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Provider, {
    value: copiedPrefixes
  }, children);
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return _restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref2, ref) {
    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref2);

    props[forwardRefAs] = ref; // eslint-disable-next-line react/prop-types

    var bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      bsPrefix: bsPrefix
    }));
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}


/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/createChainedFunction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/createChainedFunction.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ __webpack_exports__["default"] = (createChainedFunction);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/createWithBsPrefix.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createWithBsPrefix; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/camelize */ "./node_modules/dom-helpers/esm/camelize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");







var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + Object(dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__["default"])(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef( // eslint-disable-next-line react/prop-types
  function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component : _ref2$as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["className", "bsPrefix", "as"]);

    var resolvedPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, prefix);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, resolvedPrefix)
    }, props));
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/divWithClassName.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/divWithClassName.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (className) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (p, ref) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(p.className, className)
    }));
  });
});

/***/ }),

/***/ "./node_modules/react-scrollmagic/dist/index.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-scrollmagic/dist/index.es.js ***!
  \*********************************************************/
/*! exports provided: Controller, Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
var windowMock = {};
windowMock.addEventListener = function () {};

var ScrollMagic = (function (window, document) {

	var ScrollMagic = function ScrollMagic() {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.7";

	// TODO: temporary workaround for chrome's scroll jitter bug
	window.addEventListener("mousewheel", function () {});

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
  * The main class that is needed once per scroll container.
  *
  * @class
  *
  * @example
  * // basic initialization
  * var controller = new ScrollMagic.Controller();
  *
  * // passing options
  * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
  *
  * @param {object} [options] - An object containing one or more options for the controller.
  * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
  * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
  * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
  * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
 										 ** `0` => silent
 										 ** `1` => errors
 										 ** `2` => errors, warnings
 										 ** `3` => errors, warnings, debuginfo
  * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
  																										 This interval polls these parameters to fire the necessary events.  
  																										 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
  *
  */
	ScrollMagic.Controller = function (options) {
		/*
   * ----------------------------------------------------------------
   * settings
   * ----------------------------------------------------------------
   */
		var NAMESPACE = 'ScrollMagic.Controller',
		    SCROLL_DIRECTION_FORWARD = 'FORWARD',
		    SCROLL_DIRECTION_REVERSE = 'REVERSE',
		    SCROLL_DIRECTION_PAUSED = 'PAUSED',
		    DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

		/*
   * ----------------------------------------------------------------
   * private vars
   * ----------------------------------------------------------------
   */
		var Controller = this,
		    _options = _util.extend({}, DEFAULT_OPTIONS, options),
		    _sceneObjects = [],
		    _updateScenesOnNextCycle = false,
		    // can be boolean (true => all scenes) or an array of scenes to be updated
		_scrollPos = 0,
		    _scrollDirection = SCROLL_DIRECTION_PAUSED,
		    _isDocument = true,
		    _viewPortSize = 0,
		    _enabled = true,
		    _updateTimeout,
		    _refreshTimeout;

		/*
   * ----------------------------------------------------------------
   * private functions
   * ----------------------------------------------------------------
   */

		/**
   * Internal constructor function of the ScrollMagic Controller
   * @private
   */
		var construct = function construct() {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			var ri = parseInt(_options.refreshInterval, 10);
			_options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
   * Schedule the next execution of the refresh function
   * @private
   */
		var scheduleRefresh = function scheduleRefresh() {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
   * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
   * @private
   */
		var getScrollPos = function getScrollPos() {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
   * Returns the current viewport Size (width vor horizontal, height for vertical)
   * @private
   */
		var getViewportSize = function getViewportSize() {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
   * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
   * Make available publicly for pinned mousewheel workaround.
   * @private
   */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
   * Handle updates in cycles instead of on scroll (performance)
   * @private
   */
		var updateScenes = function updateScenes() {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) {
					// scroll position changed?
					_scrollDirection = deltaScroll > 0 ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
   * Initializes rAF callback
   * @private
   */
		var debounceUpdate = function debounceUpdate() {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
   * Handles Container changes
   * @private
   */
		var onChange = function onChange(e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function refresh() {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) {
						// stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) {
				// refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
   * Send a debug message to the console.
   * provided publicly with _log for plugins
   * @private
   *
   * @param {number} loglevel - The loglevel required to initiate output for the message.
   * @param {...mixed} output - One or more variables that should be passed to the console.
   */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
   * Sort scenes in ascending order of their start offset.
   * @private
   *
   * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
   * @return {array} The sorted array of Scenes.
   */
		var sortScenes = function sortScenes(ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
   * ----------------------------------------------------------------
   * public functions
   * ----------------------------------------------------------------
   */

		/**
   * Add one ore more scene(s) to the controller.  
   * This is the equivalent to `Scene.addTo(controller)`.
   * @public
   * @example
   * // with a previously defined scene
   * controller.addScene(scene);
   *
   * // with a newly created scene.
   * controller.addScene(new ScrollMagic.Scene({duration : 0}));
   *
   * // adding multiple scenes
   * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
   *
   * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
   * @return {Controller} Parent object for chaining.
   */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () {
						// resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
   * Remove one ore more scene(s) from the controller.  
   * This is the equivalent to `Scene.remove()`.
   * @public
   * @example
   * // remove a scene from the controller
   * controller.removeScene(scene);
   *
   * // remove multiple scenes from the controller
   * controller.removeScene([scene, scene2, scene3]);
   *
   * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
   * @returns {Controller} Parent object for chaining.
   */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
  * Update one ore more scene(s) according to the scroll position of the container.  
  * This is the equivalent to `Scene.update()`.  
  * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
  * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
  * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
  * @public
  * @example
  * // update a specific scene on next cycle
   * controller.updateScene(scene);
   *
  * // update a specific scene immediately
  * controller.updateScene(scene, true);
   *
  * // update multiple scenes scene on next cycle
  * controller.updateScene([scene1, scene2, scene3]);
  *
  * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
  * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
  										  This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
  * @return {Controller} Parent object for chaining.
  */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) {
					// if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
   * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
   * See `Controller.updateScene()` for more information about what this means.  
   * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
   * The only application for this method is when ScrollMagic fails to detect these events.  
   * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
   * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
   * @public
   * @example
   * // update the controller on next cycle (saves performance due to elimination of redundant updates)
   * controller.update();
   *
   * // update the controller immediately
   * controller.update(true);
   *
   * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
   * @return {Controller} Parent object for chaining.
   */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
   * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
   * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
   * @public
   *
   * @since 1.1.0
   * @example
   * // scroll to an offset of 100
   * controller.scrollTo(100);
   *
   * // scroll to a DOM element
   * controller.scrollTo("#anchor");
   *
   * // scroll to the beginning of a scene
   * var scene = new ScrollMagic.Scene({offset: 200});
   * controller.scrollTo(scene);
   *
   * // define a new scroll position modification function (jQuery animate instead of jump)
   * controller.scrollTo(function (newScrollPos) {
   *	$("html, body").animate({scrollTop: newScrollPos});
   * });
   * controller.scrollTo(100); // call as usual, but the new function will be used instead
   *
   * // define a new scroll function with an additional parameter
   * controller.scrollTo(function (newScrollPos, message) {
   *  console.log(message);
   *	$(this).animate({scrollTop: newScrollPos});
   * });
   * // call as usual, but supply an extra parameter to the defined custom function
   * controller.scrollTo(100, "my message");
   *
   * // define a new scroll function with an additional parameter containing multiple variables
   * controller.scrollTo(function (newScrollPos, options) {
   *  someGlobalVar = options.a + options.b;
   *	$(this).animate({scrollTop: newScrollPos});
   * });
   * // call as usual, but supply an extra parameter containing multiple options
   * controller.scrollTo(100, {a: 1, b: 2});
   *
   * // define a new scroll function with a callback supplied as an additional parameter
   * controller.scrollTo(function (newScrollPos, callback) {
   *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
   * });
   * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
   * controller.scrollTo(100, function() {
   *	console.log("scroll has finished.");
   * });
   *
   * @param {mixed} scrollTarget - The supplied argument can be one of these types:
   * 1. `number` -> The container will scroll to this new scroll offset.
   * 2. `string` or `object` -> Can be a selector or a DOM object.  
   *  The container will scroll to the position of this element.
   * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
   * 4. `function` -> This function will be used for future scroll position modifications.  
   *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
   *  It may also optionally receive an optional additional parameter (see below)  
   *  _**NOTE:**  
   *  All other options will still work as expected, using the new function to scroll._
   * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
   * @returns {Controller} Parent object for chaining.
   */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) {
				// excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) {
				// scroll to scene
				if (scrollTarget.controller() === Controller) {
					// check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) {
				// assign new scroll function
				setScrollPos = scrollTarget;
			} else {
				// scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var param = _options.vertical ? "top" : "left",
					    // which param is of interest ?
					containerOffset = _util.get.offset(_options.container),
					    // container position is needed because element offset is returned in relation to document, not in relation to container.
					elementOffset = _util.get.offset(elem);

					if (!_isDocument) {
						// container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
   * **Get** the current scrollPosition or **Set** a new method to calculate it.  
   * -> **GET**:
   * When used as a getter this function will return the current scroll position.  
   * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
   * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
   *
   * -> **SET**:
   * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
   * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
   * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
   * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
   * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
   *
   * To change the current scroll position please use `Controller.scrollTo()`.
   * @public
   *
   * @example
   * // get the current scroll Position
   * var scrollPos = controller.scrollPos();
   *
   * // set a new scroll position calculation method
   * controller.scrollPos(function () {
   *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
   * });
   *
   * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
   * @returns {(number|Controller)} Current scroll position or parent object for chaining.
   */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) {
				// get
				return getScrollPos.call(Controller);
			} else {
				// set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
   * **Get** all infos or one in particular about the controller.
   * @public
   * @example
   * // returns the current scroll position (number)
   * var scrollPos = controller.info("scrollPos");
   *
   * // returns all infos as an object
   * var infos = controller.info();
   *
   * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
   							 Valid options are:
   							 ** `"size"` => the current viewport size of the container
   							 ** `"vertical"` => true if vertical scrolling, otherwise false
   							 ** `"scrollPos"` => the current scroll position
   							 ** `"scrollDirection"` => the last known direction of the scroll
   							 ** `"container"` => the container element
   							 ** `"isDocument"` => true if container element is the document.
   * @returns {(mixed|object)} The requested info(s).
   */
		this.info = function (about) {
			var values = {
				size: _viewPortSize, // contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) {
				// get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
   * **Get** or **Set** the current loglevel option value.
   * @public
   *
   * @example
   * // get the current value
   * var loglevel = controller.loglevel();
   *
   * // set a new value
   * controller.loglevel(3);
   *
   * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
   * @returns {(number|Controller)} Current loglevel or parent object for chaining.
   */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) {
				// get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) {
				// set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
   * **Get** or **Set** the current enabled state of the controller.  
   * This can be used to disable all Scenes connected to the controller without destroying or removing them.
   * @public
   *
   * @example
   * // get the current value
   * var enabled = controller.enabled();
   *
   * // disable the controller
   * controller.enabled(false);
   *
   * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
   * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
   */
		this.enabled = function (newState) {
			if (!arguments.length) {
				// get
				return _enabled;
			} else if (_enabled != newState) {
				// set
				_enabled = !!newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
   * Destroy the Controller, all Scenes and everything.
   * @public
   *
   * @example
   * // without resetting the scenes
   * controller = controller.destroy();
   *
   * // with scene reset
   * controller = controller.destroy(true);
   *
   * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
   * @returns {null} Null to unset handler variables.
   */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
	/*
  * method used to add an option to ScrollMagic Scenes.
  */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};

	/**
  * A Scene defines where the controller should react and how.
  *
  * @class
  *
  * @example
  * // create a standard scene and add it to a controller
  * new ScrollMagic.Scene()
  *		.addTo(controller);
  *
  * // create a scene with custom options and assign a handler to it.
  * var scene = new ScrollMagic.Scene({
  * 		duration: 100,
  *		offset: 200,
  *		triggerHook: "onEnter",
  *		reverse: false
  * });
  *
  * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
  							   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
  							   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
  * @param {(number|string|function)} [options.duration=0] - The duration of the scene. 
  					Please see `Scene.duration()` for details.
  * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
  * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
  * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
  															  Can also be defined using a string:
  															  ** `"onEnter"` => `1`
  															  ** `"onCenter"` => `0.5`
  															  ** `"onLeave"` => `0`
  * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
  * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
  										  ** `0` => silent
  										  ** `1` => errors
  										  ** `2` => errors, warnings
  										  ** `3` => errors, warnings, debuginfo
  * 
  */
	ScrollMagic.Scene = function (options) {

		/*
   * ----------------------------------------------------------------
   * settings
   * ----------------------------------------------------------------
   */

		var NAMESPACE = 'ScrollMagic.Scene',
		    SCENE_STATE_BEFORE = 'BEFORE',
		    SCENE_STATE_DURING = 'DURING',
		    SCENE_STATE_AFTER = 'AFTER',
		    DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

		/*
   * ----------------------------------------------------------------
   * private vars
   * ----------------------------------------------------------------
   */

		var Scene = this,
		    _options = _util.extend({}, DEFAULT_OPTIONS, options),
		    _state = SCENE_STATE_BEFORE,
		    _progress = 0,
		    _scrollOffset = {
			start: 0,
			end: 0
		},
		    // reflects the controllers's scroll position for the start and end of the scene respectively
		_triggerPos = 0,
		    _enabled = true,
		    _durationUpdateMethod,
		    _controller;

		/**
   * Internal constructor function of the ScrollMagic Scene
   * @private
   */
		var construct = function construct() {
			for (var key in _options) {
				// check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

		/*
   * ----------------------------------------------------------------
   * Event Management
   * ----------------------------------------------------------------
   */

		var _listeners = {};
		/**
   * Scene start event.  
   * Fires whenever the scroll position its the starting point of the scene.  
   * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#start
   *
   * @example
   * scene.on("start", function (event) {
   * 	console.log("Hit start point of scene.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene end event.  
   * Fires whenever the scroll position its the ending point of the scene.  
   * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#end
   *
   * @example
   * scene.on("end", function (event) {
   * 	console.log("Hit end point of scene.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene enter event.  
   * Fires whenever the scene enters the "DURING" state.  
   * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#enter
   *
   * @example
   * scene.on("enter", function (event) {
   * 	console.log("Scene entered.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene - always `"DURING"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene leave event.  
   * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
   * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#leave
   *
   * @example
   * scene.on("leave", function (event) {
   * 	console.log("Scene left.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene update event.  
   * Fires whenever the scene is updated (but not necessarily changes the progress).
   *
   * @event ScrollMagic.Scene#update
   *
   * @example
   * scene.on("update", function (event) {
   * 	console.log("Scene updated.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
   * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
   * @property {number} event.scrollPos - The current scroll position of the container
   */
		/**
   * Scene progress event.  
   * Fires whenever the progress of the scene changes.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#progress
   *
   * @example
   * scene.on("progress", function (event) {
   * 	console.log("Scene progress changed to " + event.progress);
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene change event.  
   * Fires whenvever a property of the scene is changed.
   *
   * @event ScrollMagic.Scene#change
   *
   * @example
   * scene.on("change", function (event) {
   * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {string} event.what - Indicates what value has been changed
   * @property {mixed} event.newval - The new value of the changed property
   */
		/**
   * Scene shift event.  
   * Fires whenvever the start or end **scroll offset** of the scene change.
   * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
   * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
   * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
   *
   * @event ScrollMagic.Scene#shift
   * @since 1.1.0
   *
   * @example
   * scene.on("shift", function (event) {
   * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {string} event.reason - Indicates why the scene has shifted
   */
		/**
   * Scene destroy event.  
   * Fires whenvever the scene is destroyed.
   * This can be used to tidy up custom behaviour used in events.
   *
   * @event ScrollMagic.Scene#destroy
   * @since 1.1.0
   *
   * @example
   * scene.on("enter", function (event) {
   *        // add custom action
   *        $("#my-elem").left("200");
   *      })
   *      .on("destroy", function (event) {
   *        // reset my element to start position
   *        if (event.reset) {
   *          $("#my-elem").left("0");
   *        }
   *      });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
   */
		/**
   * Scene add event.  
   * Fires when the scene is added to a controller.
   * This is mostly used by plugins to know that change might be due.
   *
   * @event ScrollMagic.Scene#add
   * @since 2.0.0
   *
   * @example
   * scene.on("add", function (event) {
   * 	console.log('Scene was added to a new controller.');
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {boolean} event.controller - The controller object the scene was added to.
   */
		/**
   * Scene remove event.  
   * Fires when the scene is removed from a controller.
   * This is mostly used by plugins to know that change might be due.
   *
   * @event ScrollMagic.Scene#remove
   * @since 2.0.0
   *
   * @example
   * scene.on("remove", function (event) {
   * 	console.log('Scene was removed from its controller.');
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   */

		/**
   * Add one ore more event listener.  
   * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
   * @method ScrollMagic.Scene#on
   *
   * @example
   * function callback (event) {
   * 		console.log("Event fired! (" + event.type + ")");
   * }
   * // add listeners
   * scene.on("change update progress start end enter leave", callback);
   *
   * @param {string} names - The name or names of the event the callback should be attached to.
   * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
   * @returns {Scene} Parent object for chaining.
   */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var nameparts = fullname.split('.'),
					    eventname = nameparts[0],
					    namespace = nameparts[1];
					if (eventname != "*") {
						// disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
   * Remove one or more event listener.
   * @method ScrollMagic.Scene#off
   *
   * @example
   * function callback (event) {
   * 		console.log("Event fired! (" + event.type + ")");
   * }
   * // add listeners
   * scene.on("change update", callback);
   * // remove listeners
   * scene.off("change update", callback);
   *
   * @param {string} names - The name or names of the event that should be removed.
   * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
   * @returns {Scene} Parent object for chaining.
   */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var nameparts = fullname.split('.'),
				    eventname = nameparts[0],
				    namespace = nameparts[1] || '',
				    removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var list = _listeners[remove] || [],
					    i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
   * Trigger an event.
   * @method ScrollMagic.Scene#trigger
   *
   * @example
   * this.trigger("change");
   *
   * @param {string} name - The name of the event that should be triggered.
   * @param {object} [vars] - An object containing info that should be passed to the callback.
   * @returns {Scene} Parent object for chaining.
   */
		this.trigger = function (name, vars) {
			if (name) {
				var nameparts = name.trim().split('.'),
				    eventname = nameparts[0],
				    namespace = nameparts[1],
				    listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene.on("change.internal", function (e) {
			if (e.what !== "loglevel" && e.what !== "tweenChanges") {
				// no need for a scene update scene with these options...
				if (e.what === "triggerElement") {
					updateTriggerElementPosition();
				} else if (e.what === "reverse") {
					// the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
					Scene.update();
				}
			}
		}).on("shift.internal", function (e) {
			updateScrollOffset();
			Scene.update(); // update scene to reflect new position
		});

		/**
   * Send a debug message to the console.
   * @private
   * but provided publicly with _log for plugins
   *
   * @param {number} loglevel - The loglevel required to initiate output for the message.
   * @param {...mixed} output - One or more variables that should be passed to the console.
   */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
   * Add the scene to a controller.  
   * This is the equivalent to `Controller.addScene(scene)`.
   * @method ScrollMagic.Scene#addTo
   *
   * @example
   * // add a scene to a ScrollMagic Controller
   * scene.addTo(controller);
   *
   * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
   * @returns {Scene} Parent object for chaining.
   */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) {
					// was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
   * **Get** or **Set** the current enabled state of the scene.  
   * This can be used to disable this scene without removing or destroying it.
   * @method ScrollMagic.Scene#enabled
   *
   * @example
   * // get the current value
   * var enabled = scene.enabled();
   *
   * // disable the scene
   * scene.enabled(false);
   *
   * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
   * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
   */
		this.enabled = function (newState) {
			if (!arguments.length) {
				// get
				return _enabled;
			} else if (_enabled != newState) {
				// set
				_enabled = !!newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
   * Remove the scene from the controller.  
   * This is the equivalent to `Controller.removeScene(scene)`.
   * The scene will not be updated anymore until you readd it to a controller.
   * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
   * @method ScrollMagic.Scene#remove
   * @example
   * // remove the scene from its controller
   * scene.remove();
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
   * Destroy the scene and everything.
   * @method ScrollMagic.Scene#destroy
   * @example
   * // destroy the scene without resetting the pin and tween to their initial positions
   * scene = scene.destroy();
   *
   * // destroy the scene and reset the pin and tween
   * scene = scene.destroy(true);
   *
   * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
   * @returns {null} Null to unset handler variables.
   */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};

		/**
   * Updates the Scene to reflect the current state.  
   * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
   * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
   * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
   * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
   * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
   * @method ScrollMagic.Scene#update
   * @example
   * // update the scene on next tick
   * scene.update();
   *
   * // update the scene immediately
   * scene.update(true);
   *
   * @fires Scene.update
   *
   * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
   * @returns {Scene} Parent object for chaining.
   */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var scrollPos = _controller.info("scrollPos"),
						    newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
   * Updates dynamic scene variables like the trigger element position or the duration.
   * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
   * 
   * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
   * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
   *
   * @method ScrollMagic.Scene#refresh
   * @since 1.1.0
   * @example
   * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
   * 
   * // change the position of the trigger
   * $("#trigger").css("top", 500);
   * // immediately let the scene know of this change
   * scene.refresh();
   *
   * @fires {@link Scene.shift}, if the trigger element position or the duration changed
   * @fires {@link Scene.change}, if the duration changed
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
   * **Get** or **Set** the scene's progress.  
   * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
   * The order in which the events are fired depends on the duration of the scene:
   *  1. Scenes with `duration == 0`:  
   *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
   *  When the trigger position of the scene is passed the events are always fired in this order:  
   *  `enter`, `start`, `progress` when scrolling forward  
   *  and  
   *  `progress`, `start`, `leave` when scrolling in reverse
   *  2. Scenes with `duration > 0`:  
   *  Scenes with a set duration have a defined start and end point.  
   *  When scrolling past the start position of the scene it will fire these events in this order:  
   *  `enter`, `start`, `progress`  
   *  When continuing to scroll and passing the end point it will fire these events:  
   *  `progress`, `end`, `leave`  
   *  When reversing through the end point these events are fired:  
   *  `enter`, `end`, `progress`  
   *  And when continuing to scroll past the start position in reverse it will fire:  
   *  `progress`, `start`, `leave`  
   *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
   * 
   * In short:  
   * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
   * `start` and `end` will always trigger at their respective position.
   * 
   * Please review the event descriptions for details on the events and the event object that is passed to the callback.
   * 
   * @method ScrollMagic.Scene#progress
   * @example
   * // get the current scene progress
   * var progress = scene.progress();
   *
   * // set new scene progress
   * scene.progress(0.3);
   *
   * @fires {@link Scene.enter}, when used as setter
   * @fires {@link Scene.start}, when used as setter
   * @fires {@link Scene.progress}, when used as setter
   * @fires {@link Scene.end}, when used as setter
   * @fires {@link Scene.leave}, when used as setter
   *
   * @param {number} [progress] - The new progress value of the scene `[0-1]`.
   * @returns {number} `get` -  Current scene progress.
   * @returns {Scene} `set` -  Parent object for chaining.
   */
		this.progress = function (progress) {
			if (!arguments.length) {
				// get
				return _progress;
			} else {
				// set
				var doUpdate = false,
				    oldState = _state,
				    scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
				    reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var eventVars = {
						progress: _progress,
						state: _state,
						scrollDirection: scrollDirection
					},
					    stateChanged = _state != oldState;

					var trigger = function trigger(eventName) {
						// tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) {
						// enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) {
						// leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};

		/**
   * Update the start and end scrollOffset of the container.
   * The positions reflect what the controller's scroll position will be at the start and end respectively.
   * Is called, when:
   *   - Scene event "change" is called with: offset, triggerHook, duration 
   *   - scroll container event "resize" is called
   *   - the position of the triggerElement changes
   *   - the controller changes -> addTo()
   * @private
   */
		var updateScrollOffset = function updateScrollOffset() {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
   * Updates the duration if set to a dynamic function.
   * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
   * 
   * @fires {@link Scene.change}, if the duration changed
   * @fires {@link Scene.shift}, if the duration changed
   *
   * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
   * @private
   */
		var updateDuration = function updateDuration(suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) {
					// set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
   * Updates the position of the triggerElement, if present.
   * This method is called ...
   *  - ... when the triggerElement is changed
   *  - ... when the scene is added to a (new) controller
   *  - ... in regular intervals from the controller through scene.refresh().
   * 
   * @fires {@link Scene.shift}, if the position changed
   *
   * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
   * @private
   */
		var updateTriggerElementPosition = function updateTriggerElementPosition(suppressEvents) {
			var elementPos = 0,
			    telem = _options.triggerElement;
			if (_controller && (telem || _triggerPos > 0)) {
				// either an element exists or was removed and the triggerPos is still > 0
				if (telem) {
					// there currently a triggerElement set
					if (telem.parentNode) {
						// check if element is still attached to DOM
						var controllerInfo = _controller.info(),
						    containerOffset = _util.get.offset(controllerInfo.container),
						    // container position is needed because element offset is returned in relation to document, not in relation to container.
						param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?

						// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
						while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
							telem = telem.parentNode;
						}

						var elementOffset = _util.get.offset(telem);

						if (!controllerInfo.isDocument) {
							// container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
							containerOffset[param] -= _controller.scrollPos();
						}

						elementPos = elementOffset[param] - containerOffset[param];
					} else {
						// there was an element, but it was removed from DOM
						log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
						Scene.triggerElement(undefined); // unset, so a change event is triggered
					}
				}

				var changed = elementPos != _triggerPos;
				_triggerPos = elementPos;
				if (changed && !suppressEvents) {
					Scene.trigger("shift", {
						reason: "triggerElementPosition"
					});
				}
			}
		};

		/**
   * Trigger a shift event, when the container is resized and the triggerHook is > 1.
   * @private
   */
		var onContainerResize = function onContainerResize(e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};

		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function duration(val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function val() {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod.call(Scene));
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
   * Checks the validity of a specific or all options and reset to default if neccessary.
   * @private
   */
		var validateOption = function validateOption(check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) {
					// there is a validation method for this option
					try {
						// validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) {
						// validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
   * Helper used by the setter/getters for scene options
   * @private
   */
		var changeOption = function changeOption(varname, newval) {
			var changed = false,
			    oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function addSceneOption(optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) {
						// get
						return _options[optionName];
					} else {
						if (optionName === "duration") {
							// new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) {
							// set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
   * **Get** or **Set** the duration option value.
   *
   * As a **setter** it accepts three types of parameters:
   * 1. `number`: Sets the duration of the scene to exactly this amount of pixels.  
   *   This means the scene will last for exactly this amount of pixels scrolled. Sub-Pixels are also valid.
   *   A value of `0` means that the scene is 'open end' and no end will be triggered. Pins will never unpin and animations will play independently of scroll progress.
   * 2. `string`: Always updates the duration relative to parent scroll container.  
   *   For example `"100%"` will keep the duration always exactly at the inner height of the scroll container.
   *   When scrolling vertically the width is used for reference respectively.
   * 3. `function`: The supplied function will be called to return the scene duration.
   *   This is useful in setups where the duration depends on other elements who might change size. By supplying a function you can return a value instead of updating potentially multiple scene durations.  
   *   The scene can be referenced inside the callback using `this`.
   *   _**WARNING:** This is an easy way to kill performance, as the callback will be executed every time `Scene.refresh()` is called, which happens a lot. The interval is defined by the controller (see ScrollMagic.Controller option `refreshInterval`).  
   *   It's recomended to avoid calculations within the function and use cached variables as return values.  
   *   This counts double if you use the same function for multiple scenes._
   *
   * @method ScrollMagic.Scene#duration
   * @example
   * // get the current duration value
   * var duration = scene.duration();
   *
   * // set a new duration
   * scene.duration(300);
   *
   * // set duration responsively to container size
   * scene.duration("100%");
   *
   * // use a function to randomize the duration for some reason.
   * var durationValueCache;
   * function durationCallback () {
   *   return durationValueCache;
   * }
   * function updateDuration () {
   *   durationValueCache = Math.random() * 100;
   * }
   * updateDuration(); // set to initial value
   * scene.duration(durationCallback); // set duration callback
   *
   * @fires {@link Scene.change}, when used as setter
   * @fires {@link Scene.shift}, when used as setter
   * @param {(number|string|function)} [newDuration] - The new duration setting for the scene.
   * @returns {number} `get` -  Current scene duration.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the offset option value.
   * @method ScrollMagic.Scene#offset
   * @example
   * // get the current offset
   * var offset = scene.offset();
   *
   * // set a new offset
   * scene.offset(100);
   *
   * @fires {@link Scene.change}, when used as setter
   * @fires {@link Scene.shift}, when used as setter
   * @param {number} [newOffset] - The new offset of the scene.
   * @returns {number} `get` -  Current scene offset.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the triggerElement option value.
   * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
   * @method ScrollMagic.Scene#triggerElement
   * @example
   * // get the current triggerElement
   * var triggerElement = scene.triggerElement();
   *
   * // set a new triggerElement using a selector
   * scene.triggerElement("#trigger");
   * // set a new triggerElement using a DOM object
   * scene.triggerElement(document.getElementById("trigger"));
   *
   * @fires {@link Scene.change}, when used as setter
   * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
   * @returns {(string|object)} `get` -  Current triggerElement.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the triggerHook option value.
   * @method ScrollMagic.Scene#triggerHook
   * @example
   * // get the current triggerHook value
   * var triggerHook = scene.triggerHook();
   *
   * // set a new triggerHook using a string
   * scene.triggerHook("onLeave");
   * // set a new triggerHook using a number
   * scene.triggerHook(0.7);
   *
   * @fires {@link Scene.change}, when used as setter
   * @fires {@link Scene.shift}, when used as setter
   * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
   * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the reverse option value.
   * @method ScrollMagic.Scene#reverse
   * @example
   * // get the current reverse option
   * var reverse = scene.reverse();
   *
   * // set new reverse option
   * scene.reverse(false);
   *
   * @fires {@link Scene.change}, when used as setter
   * @param {boolean} [newReverse] - The new reverse setting of the scene.
   * @returns {boolean} `get` -  Current reverse option value.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the loglevel option value.
   * @method ScrollMagic.Scene#loglevel
   * @example
   * // get the current loglevel
   * var loglevel = scene.loglevel();
   *
   * // set new loglevel
   * scene.loglevel(3);
   *
   * @fires {@link Scene.change}, when used as setter
   * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
   * @returns {number} `get` -  Current loglevel.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** the associated controller.
   * @method ScrollMagic.Scene#controller
   * @example
   * // get the controller of a scene
   * var controller = scene.controller();
   *
   * @returns {ScrollMagic.Controller} Parent controller or `undefined`
   */
		this.controller = function () {
			return _controller;
		};

		/**
   * **Get** the current state.
   * @method ScrollMagic.Scene#state
   * @example
   * // get the current state
   * var state = scene.state();
   *
   * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
   */
		this.state = function () {
			return _state;
		};

		/**
   * **Get** the current scroll offset for the start of the scene.  
   * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
   * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
   * @method ScrollMagic.Scene#scrollOffset
   * @example
   * // get the current scroll offset for the start and end of the scene.
   * var start = scene.scrollOffset();
   * var end = scene.scrollOffset() + scene.duration();
   * console.log("the scene starts at", start, "and ends at", end);
   *
   * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
   */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
   * **Get** the trigger position of the scene (including the value of the `offset` option).  
   * @method ScrollMagic.Scene#triggerPosition
   * @example
   * // get the scene's trigger position
   * var triggerPosition = scene.triggerPosition();
   *
   * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
   */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};

		var _pin, _pinOptions;

		Scene.on("shift.internal", function (e) {
			var durationChanged = e.reason === "duration";
			if (_state === SCENE_STATE_AFTER && durationChanged || _state === SCENE_STATE_DURING && _options.duration === 0) {
				// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
				updatePinState();
			}
			if (durationChanged) {
				updatePinDimensions();
			}
		}).on("progress.internal", function (e) {
			updatePinState();
		}).on("add.internal", function (e) {
			updatePinDimensions();
		}).on("destroy.internal", function (e) {
			Scene.removePin(e.reset);
		});
		/**
   * Update the pin state.
   * @private
   */
		var updatePinState = function updatePinState(forceUnpin) {
			if (_pin && _controller) {
				var containerInfo = _controller.info(),
				    pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins

				if (!forceUnpin && _state === SCENE_STATE_DURING) {
					// during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var fixedPos = _util.get.offset(_pinOptions.spacer, true),
					    // get viewport position of spacer
					scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
					: Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress

					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var newCSS = {
						position: _pinOptions.inFlow ? "relative" : "absolute",
						top: 0,
						left: 0
					},
					    change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) {
						// only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) {
							// before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
   * Update the pin spacer and/or element size.
   * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
   * @private
   */
		var updatePinDimensions = function updatePinDimensions() {
			if (_pin && _controller && _pinOptions.inFlow) {
				// no spacerresize, if original position is absolute
				var during = _state === SCENE_STATE_DURING,
				    vertical = _controller.info("vertical"),
				    pinTarget = _pinOptions.spacer.firstChild,
				    // usually the pined element but can also be another spacer (cascaded pins)
				marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
				    css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
   * Updates the Pin state (in certain scenarios)
   * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
   * So this function is called on resize and scroll of the document.
   * @private
   */
		var updatePinInContainer = function updatePinInContainer() {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
   * Updates the Pin spacer size state (in certain scenarios)
   * If container is resized during pin and relatively sized the size of the pin might need to be updated...
   * So this function is called on resize of the container.
   * @private
   */
		var updateRelativePinSpacer = function updateRelativePinSpacer() {
			if (_controller && _pin && // well, duh
			_state === SCENE_STATE_DURING && ( // element in pinned state?
			// is width or height relatively sized, but not in relation to body? then we need to recalc.
			(_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode) || _pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))) {
				updatePinDimensions();
			}
		};

		/**
   * Is called, when the mousewhel is used while over a pinned element inside a div container.
   * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
   * @private
   */
		var onMousewheelOverPin = function onMousewheelOverPin(e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				// in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
   * Pin an element for the duration of the scene.
   * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
   * Make sure only one pin is applied to an element at the same time.
   * An element can be pinned multiple times, but only successively.
   * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
   * @method ScrollMagic.Scene#setPin
   * @example
   * // pin element and push all following elements down by the amount of the pin duration.
   * scene.setPin("#pin");
   *
   * // pin element and keeping all following elements in their place. The pinned element will move past them.
   * scene.setPin("#pin", {pushFollowers: false});
   *
   * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
   * @param {object} [settings] - settings for the pin
   * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
   												   Ignored, when duration is `0`.
   * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.setPin = function (element, settings) {
			var defaultSettings = {
				pushFollowers: true,
				spacerClass: "scrollmagic-pin-spacer"
			};
			var pushFollowersActivelySet = settings && settings.hasOwnProperty('pushFollowers');
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) {
				// preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}
			}
			_pin = element;

			var parentDisplay = _pin.parentNode.style.display,
			    boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var inFlow = _util.css(_pin, "position") != "absolute",
			    pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
			    sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.

			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () {
				// wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && pushFollowersActivelySet && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
			    spacerCSS = _util.extend(pinCSS, {
				position: inFlow ? "relative" : "absolute",
				boxSizing: "content-box",
				mozBoxSizing: "content-box",
				webkitBoxSizing: "content-box"
			});

			if (!inFlow) {
				// copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow // stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var pinInlineCSS = _pin.style,
				    copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
   * Remove the pin from the scene.
   * @method ScrollMagic.Scene#removePin
   * @example
   * // remove the pin from the scene without resetting it (the spacer is not removed)
   * scene.removePin();
   *
   * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
   * scene.removePin(true);
   *
   * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
   * @returns {Scene} Parent object for chaining.
   */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) {
					// if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						// copy margins to child spacer
						var style = _pinOptions.spacer.style,
						    values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
						    margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						// if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};

		var _cssClasses,
		    _cssClassElems = [];

		Scene.on("destroy.internal", function (e) {
			Scene.removeClassToggle(e.reset);
		});
		/**
   * Define a css class modification while the scene is active.  
   * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
   * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
   * @method ScrollMagic.Scene#setClassToggle
   * @example
   * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
   * scene.setClassToggle("#my-elem", "myclass");
   *
   * // add multiple classes to multiple elements defined by the selector '.classChange'
   * scene.setClassToggle(".classChange", "class1 class2 class3");
   *
   * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
   * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
   * Remove the class binding from the scene.
   * @method ScrollMagic.Scene#removeClassToggle
   * @example
   * // remove class binding from the scene without reset
   * scene.removeClassToggle();
   *
   * // remove class binding and remove the changes it caused
   * scene.removeClassToggle(true);
   *
   * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
   * @returns {Scene} Parent object for chaining.
   */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function offset(val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function triggerElement(val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem && elem.parentNode) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function triggerHook(val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function reverse(val) {
				return !!val; // force boolean
			},
			loglevel: function loglevel(val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		}, // holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"] // list of options that trigger a `shift` event
	};
	/*
  * method used to add an option to ScrollMagic Scenes.
  * TODO: DOC (private for dev)
  */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};

	/**
  * TODO: DOCS (private for dev)
  * @class
  * @private
  */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

	/*
  * TODO: DOCS (private for dev)
  */

	var _util = ScrollMagic._util = function (window) {
		var U = {},
		    i;

		/**
   * ------------------------------
   * internal helpers
   * ------------------------------
   */

		// parse float and fall back to 0.
		var floatval = function floatval(number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function _getComputedStyle(elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function _dimension(which, elem, outer, includeMargin) {
			elem = elem === document ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function _camelCase(str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
   * ------------------------------
   * external helpers
   * ------------------------------
   */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var lastTime = 0,
		    vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function _requestAnimationFrame(callback) {
				var currTime = new Date().getTime(),
				    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
				    id = window.setTimeout(function () {
					callback(currTime + timeToCall);
				}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function _cancelAnimationFrame(id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var loglevels = ["error", "warn", "log"],
		    console = window.console || {};

		console.log = console.log || function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
			    time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
			    method = loglevels[loglevel - 1],
			    args = Array.prototype.splice.call(arguments, 1),
			    func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
   * ------------------------------
   * type testing
   * ------------------------------
   */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && v - parseFloat(v) + 1 >= 0;
		};
		_type.DomElement = function (o) {
			return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" || typeof HTMLElement === "function" ? o instanceof HTMLElement || o instanceof SVGElement : //DOM2
			o && (typeof o === "undefined" ? "undefined" : _typeof(o)) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
		};

		/**
   * ------------------------------
   * DOM Element info
   * ------------------------------
   */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) {
					// invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector) || selector instanceof NodeList) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) {
					// list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return elem && typeof elem.scrollTop === 'number' ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return elem && typeof elem.scrollLeft === 'number' ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) {
				// check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) {
					// clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
   * ------------------------------
   * DOM Element manipulation
   * ------------------------------
   */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.add(classname);else elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.remove(classname);else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var obj = {},
				    style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) {
						// assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {});

	return ScrollMagic;
})(typeof window === 'undefined' ? windowMock : window, typeof document === 'undefined' ? {} : document);

var Controller = function (_React$Component) {
  inherits(Controller, _React$Component);

  function Controller() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Controller);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Controller.__proto__ || Object.getPrototypeOf(Controller)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      controller: null
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Controller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          children = _props.children,
          controllerProps = objectWithoutProperties(_props, ['children']);

      this.setState({
        controller: new ScrollMagic.Controller(controllerProps)
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.controller = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var controller = this.state.controller;


      if (!controller) {
        return children;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
        if (child.type.displayName !== 'Scene') {
          return child;
        }
        var props = _extends({}, child.props, { controller: controller });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(child.type, props);
      });
    }
  }]);
  return Controller;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file Debug Extension for ScrollMagic.
 */
function debugAddIndicators (ScrollMagic) {
	var NAMESPACE = "debug.addIndicators";

	if (typeof window === 'undefined') {
		var window = {};
		window.addEventListener = function () {};
	}

	var console = window.console || {},
	    err = Function.prototype.bind.call(console.error || console.log || function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}

	// plugin settings
	var FONT_SIZE = "0.85em",
	    ZINDEX = "9999",
	    EDGE_OFFSET = 15; // minimum edge distance, added to indentation

	// overall vars
	var _util = ScrollMagic._util,
	    _autoindex = 0;

	ScrollMagic.Scene.extend(function () {
		var Scene = this,
		    _indicator;

		/**
   * Add visual indicators for a ScrollMagic.Scene.  
   * @memberof! debug.addIndicators#
   *
   * @example
   * // add basic indicators
   * scene.addIndicators()
   *
   * // passing options
   * scene.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});
   *
   * @param {object} [options] - An object containing one or more options for the indicators.
   * @param {(string|object)} [options.parent] - A selector, DOM Object or a jQuery object that the indicators should be added to.  
   														 														 If undefined, the controller's container will be used.
   * @param {number} [options.name=""] - This string will be displayed at the start and end indicators of the scene for identification purposes. If no name is supplied an automatic index will be used.
   * @param {number} [options.indent=0] - Additional position offset for the indicators (useful, when having multiple scenes starting at the same position).
   * @param {string} [options.colorStart=green] - CSS color definition for the start indicator.
   * @param {string} [options.colorEnd=red] - CSS color definition for the end indicator.
   * @param {string} [options.colorTrigger=blue] - CSS color definition for the trigger indicator.
   */
		Scene.addIndicators = function (options) {
			if (!_indicator) {
				var DEFAULT_OPTIONS = {
					name: "",
					indent: 0,
					parent: undefined,
					colorStart: "green",
					colorEnd: "red",
					colorTrigger: "blue"
				};

				options = _util.extend({}, DEFAULT_OPTIONS, options);

				_autoindex++;
				_indicator = new Indicator(Scene, options);

				Scene.on("add.plugin_addIndicators", _indicator.add);
				Scene.on("remove.plugin_addIndicators", _indicator.remove);
				Scene.on("destroy.plugin_addIndicators", Scene.removeIndicators);

				// it the scene already has a controller we can start right away.
				if (Scene.controller()) {
					_indicator.add();
				}
			}
			return Scene;
		};

		/**
   * Removes visual indicators from a ScrollMagic.Scene.
   * @memberof! debug.addIndicators#
   *
   * @example
   * // remove previously added indicators
   * scene.removeIndicators()
   *
   */
		Scene.removeIndicators = function () {
			if (_indicator) {
				_indicator.remove();
				this.off("*.plugin_addIndicators");
				_indicator = undefined;
			}
			return Scene;
		};
	});

	/*
  * ----------------------------------------------------------------
  * Extension for controller to store and update related indicators
  * ----------------------------------------------------------------
  */
	// add option to globally auto-add indicators to scenes
	/**
  * Every ScrollMagic.Controller instance now accepts an additional option.  
  * See {@link ScrollMagic.Controller} for a complete list of the standard options.
  * @memberof! debug.addIndicators#
  * @method new ScrollMagic.Controller(options)
  * @example
  * // make a controller and add indicators to all scenes attached
  * var controller = new ScrollMagic.Controller({addIndicators: true});
  * // this scene will automatically have indicators added to it
  * new ScrollMagic.Scene()
  *                .addTo(controller);
  *
  * @param {object} [options] - Options for the Controller.
  * @param {boolean} [options.addIndicators=false] - If set to `true` every scene that is added to the controller will automatically get indicators added to it.
  */
	ScrollMagic.Controller.addOption("addIndicators", false);
	// extend Controller
	ScrollMagic.Controller.extend(function () {
		var Controller = this,
		    _info = Controller.info(),
		    _container = _info.container,
		    _isDocument = _info.isDocument,
		    _vertical = _info.vertical,
		    _indicators = { // container for all indicators and methods
			groups: []
		};

		var log = function log() {
			if (Controller._log) {
				// not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Controller._log.apply(this, arguments);
			}
		};
		if (Controller._indicators) {
			log(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin.");
		}

		// add indicators container
		this._indicators = _indicators;
		/*
  	needed updates:
  	+++++++++++++++
  	start/end position on scene shift (handled in Indicator class)
  	trigger parameters on triggerHook value change (handled in Indicator class)
  	bounds position on container scroll or resize (to keep alignment to bottom/right)
  	trigger position on container resize, window resize (if container isn't document) and window scroll (if container isn't document)
  */

		// event handler for when associated bounds markers need to be repositioned
		var handleBoundsPositionChange = function handleBoundsPositionChange() {
			_indicators.updateBoundsPositions();
		};

		// event handler for when associated trigger groups need to be repositioned
		var handleTriggerPositionChange = function handleTriggerPositionChange() {
			_indicators.updateTriggerGroupPositions();
		};

		_container.addEventListener("resize", handleTriggerPositionChange);
		if (!_isDocument) {
			window.addEventListener("resize", handleTriggerPositionChange);
			window.addEventListener("scroll", handleTriggerPositionChange);
		}
		// update all related bounds containers
		_container.addEventListener("resize", handleBoundsPositionChange);
		_container.addEventListener("scroll", handleBoundsPositionChange);

		// updates the position of the bounds container to aligned to the right for vertical containers and to the bottom for horizontal
		this._indicators.updateBoundsPositions = function (specificIndicator) {
			var // constant for all bounds
			groups = specificIndicator ? [_util.extend({}, specificIndicator.triggerGroup, {
				members: [specificIndicator]
			})] : // create a group with only one element
			_indicators.groups,
			    // use all
			g = groups.length,
			    css = {},
			    paramPos = _vertical ? "left" : "top",
			    paramDimension = _vertical ? "width" : "height",
			    edge = _vertical ? _util.get.scrollLeft(_container) + _util.get.width(_container) - EDGE_OFFSET : _util.get.scrollTop(_container) + _util.get.height(_container) - EDGE_OFFSET,
			    b,
			    triggerSize,
			    group;
			while (g--) {
				// group loop
				group = groups[g];
				b = group.members.length;
				triggerSize = _util.get[paramDimension](group.element.firstChild);
				while (b--) {
					// indicators loop
					css[paramPos] = edge - triggerSize;
					_util.css(group.members[b].bounds, css);
				}
			}
		};

		// updates the positions of all trigger groups attached to a controller or a specific one, if provided
		this._indicators.updateTriggerGroupPositions = function (specificGroup) {
			var // constant vars
			groups = specificGroup ? [specificGroup] : _indicators.groups,
			    i = groups.length,
			    container = _isDocument ? document.body : _container,
			    containerOffset = _isDocument ? {
				top: 0,
				left: 0
			} : _util.get.offset(container, true),
			    edge = _vertical ? _util.get.width(_container) - EDGE_OFFSET : _util.get.height(_container) - EDGE_OFFSET,
			    paramDimension = _vertical ? "width" : "height",
			    paramTransform = _vertical ? "Y" : "X";
			var // changing vars
			group, elem, pos, elemSize, transform;
			while (i--) {
				group = groups[i];
				elem = group.element;
				pos = group.triggerHook * Controller.info("size");
				elemSize = _util.get[paramDimension](elem.firstChild.firstChild);
				transform = pos > elemSize ? "translate" + paramTransform + "(-100%)" : "";

				_util.css(elem, {
					top: containerOffset.top + (_vertical ? pos : edge - group.members[0].options.indent),
					left: containerOffset.left + (_vertical ? edge - group.members[0].options.indent : pos)
				});
				_util.css(elem.firstChild.firstChild, {
					"-ms-transform": transform,
					"-webkit-transform": transform,
					"transform": transform
				});
			}
		};

		// updates the label for the group to contain the name, if it only has one member
		this._indicators.updateTriggerGroupLabel = function (group) {
			var text = "trigger" + (group.members.length > 1 ? "" : " " + group.members[0].options.name),
			    elem = group.element.firstChild.firstChild,
			    doUpdate = elem.textContent !== text;
			if (doUpdate) {
				elem.textContent = text;
				if (_vertical) {
					// bounds position is dependent on text length, so update
					_indicators.updateBoundsPositions();
				}
			}
		};

		// add indicators if global option is set
		this.addScene = function (newScene) {

			if (this._options.addIndicators && newScene instanceof ScrollMagic.Scene && newScene.controller() === Controller) {
				newScene.addIndicators();
			}
			// call original destroy method
			this.$super.addScene.apply(this, arguments);
		};

		// remove all previously set listeners on destroy
		this.destroy = function () {
			_container.removeEventListener("resize", handleTriggerPositionChange);
			if (!_isDocument) {
				window.removeEventListener("resize", handleTriggerPositionChange);
				window.removeEventListener("scroll", handleTriggerPositionChange);
			}
			_container.removeEventListener("resize", handleBoundsPositionChange);
			_container.removeEventListener("scroll", handleBoundsPositionChange);
			// call original destroy method
			this.$super.destroy.apply(this, arguments);
		};
		return Controller;
	});

	/*
  * ----------------------------------------------------------------
  * Internal class for the construction of Indicators
  * ----------------------------------------------------------------
  */
	var Indicator = function Indicator(Scene, options) {
		var Indicator = this,
		    _elemBounds = TPL.bounds(),
		    _elemStart = TPL.start(options.colorStart),
		    _elemEnd = TPL.end(options.colorEnd),
		    _boundsContainer = options.parent && _util.get.elements(options.parent)[0],
		    _vertical,
		    _ctrl;

		var log = function log() {
			if (Scene._log) {
				// not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		options.name = options.name || _autoindex;

		// prepare bounds elements
		_elemStart.firstChild.textContent += " " + options.name;
		_elemEnd.textContent += " " + options.name;
		_elemBounds.appendChild(_elemStart);
		_elemBounds.appendChild(_elemEnd);

		// set public variables
		Indicator.options = options;
		Indicator.bounds = _elemBounds;
		// will be set later
		Indicator.triggerGroup = undefined;

		// add indicators to DOM
		this.add = function () {
			_ctrl = Scene.controller();
			_vertical = _ctrl.info("vertical");

			var isDocument = _ctrl.info("isDocument");

			if (!_boundsContainer) {
				// no parent supplied or doesnt exist
				_boundsContainer = isDocument ? document.body : _ctrl.info("container"); // check if window/document (then use body)
			}
			if (!isDocument && _util.css(_boundsContainer, "position") === 'static') {
				// position mode needed for correct positioning of indicators
				_util.css(_boundsContainer, {
					position: "relative"
				});
			}

			// add listeners for updates
			Scene.on("change.plugin_addIndicators", handleTriggerParamsChange);
			Scene.on("shift.plugin_addIndicators", handleBoundsParamsChange);

			// updates trigger & bounds (will add elements if needed)
			updateTriggerGroup();
			updateBounds();

			setTimeout(function () {
				// do after all execution is finished otherwise sometimes size calculations are off
				_ctrl._indicators.updateBoundsPositions(Indicator);
			}, 0);

			log(3, "added indicators");
		};

		// remove indicators from DOM
		this.remove = function () {
			if (Indicator.triggerGroup) {
				// if not set there's nothing to remove
				Scene.off("change.plugin_addIndicators", handleTriggerParamsChange);
				Scene.off("shift.plugin_addIndicators", handleBoundsParamsChange);

				if (Indicator.triggerGroup.members.length > 1) {
					// just remove from memberlist of old group
					var group = Indicator.triggerGroup;
					group.members.splice(group.members.indexOf(Indicator), 1);
					_ctrl._indicators.updateTriggerGroupLabel(group);
					_ctrl._indicators.updateTriggerGroupPositions(group);
					Indicator.triggerGroup = undefined;
				} else {
					// remove complete group
					removeTriggerGroup();
				}
				removeBounds();

				log(3, "removed indicators");
			}
		};

		/*
   * ----------------------------------------------------------------
   * internal Event Handlers
   * ----------------------------------------------------------------
   */

		// event handler for when bounds params change
		var handleBoundsParamsChange = function handleBoundsParamsChange() {
			updateBounds();
		};

		// event handler for when trigger params change
		var handleTriggerParamsChange = function handleTriggerParamsChange(e) {
			if (e.what === "triggerHook") {
				updateTriggerGroup();
			}
		};

		/*
   * ----------------------------------------------------------------
   * Bounds (start / stop) management
   * ----------------------------------------------------------------
   */

		// adds an new bounds elements to the array and to the DOM
		var addBounds = function addBounds() {
			var v = _ctrl.info("vertical");
			// apply stuff we didn't know before...
			_util.css(_elemStart.firstChild, {
				"border-bottom-width": v ? 1 : 0,
				"border-right-width": v ? 0 : 1,
				"bottom": v ? -1 : options.indent,
				"right": v ? options.indent : -1,
				"padding": v ? "0 8px" : "2px 4px"
			});
			_util.css(_elemEnd, {
				"border-top-width": v ? 1 : 0,
				"border-left-width": v ? 0 : 1,
				"top": v ? "100%" : "",
				"right": v ? options.indent : "",
				"bottom": v ? "" : options.indent,
				"left": v ? "" : "100%",
				"padding": v ? "0 8px" : "2px 4px"
			});
			// append
			_boundsContainer.appendChild(_elemBounds);
		};

		// remove bounds from list and DOM
		var removeBounds = function removeBounds() {
			_elemBounds.parentNode.removeChild(_elemBounds);
		};

		// update the start and end positions of the scene
		var updateBounds = function updateBounds() {
			if (_elemBounds.parentNode !== _boundsContainer) {
				addBounds(); // Add Bounds elements (start/end)
			}
			var css = {};
			css[_vertical ? "top" : "left"] = Scene.triggerPosition();
			css[_vertical ? "height" : "width"] = Scene.duration();
			_util.css(_elemBounds, css);
			_util.css(_elemEnd, {
				display: Scene.duration() > 0 ? "" : "none"
			});
		};

		/*
   * ----------------------------------------------------------------
   * trigger and trigger group management
   * ----------------------------------------------------------------
   */

		// adds an new trigger group to the array and to the DOM
		var addTriggerGroup = function addTriggerGroup() {
			var triggerElem = TPL.trigger(options.colorTrigger); // new trigger element
			var css = {};
			css[_vertical ? "right" : "bottom"] = 0;
			css[_vertical ? "border-top-width" : "border-left-width"] = 1;
			_util.css(triggerElem.firstChild, css);
			_util.css(triggerElem.firstChild.firstChild, {
				padding: _vertical ? "0 8px 3px 8px" : "3px 4px"
			});
			document.body.appendChild(triggerElem); // directly add to body
			var newGroup = {
				triggerHook: Scene.triggerHook(),
				element: triggerElem,
				members: [Indicator]
			};
			_ctrl._indicators.groups.push(newGroup);
			Indicator.triggerGroup = newGroup;
			// update right away
			_ctrl._indicators.updateTriggerGroupLabel(newGroup);
			_ctrl._indicators.updateTriggerGroupPositions(newGroup);
		};

		var removeTriggerGroup = function removeTriggerGroup() {
			_ctrl._indicators.groups.splice(_ctrl._indicators.groups.indexOf(Indicator.triggerGroup), 1);
			Indicator.triggerGroup.element.parentNode.removeChild(Indicator.triggerGroup.element);
			Indicator.triggerGroup = undefined;
		};

		// updates the trigger group -> either join existing or add new one
		/*	
   * Logic:
   * 1 if a trigger group exist, check if it's in sync with Scene settings – if so, nothing else needs to happen
   * 2 try to find an existing one that matches Scene parameters
   * 	 2.1 If a match is found check if already assigned to an existing group
   *			 If so:
   *       A: it was the last member of existing group -> kill whole group
   *       B: the existing group has other members -> just remove from member list
   *	 2.2 Assign to matching group
   * 3 if no new match could be found, check if assigned to existing group
   *   A: yes, and it's the only member -> just update parameters and positions and keep using this group
   *   B: yes but there are other members -> remove from member list and create a new one
   *   C: no, so create a new one
   */
		var updateTriggerGroup = function updateTriggerGroup() {
			var triggerHook = Scene.triggerHook(),
			    closeEnough = 0.0001;

			// Have a group, check if it still matches
			if (Indicator.triggerGroup) {
				if (Math.abs(Indicator.triggerGroup.triggerHook - triggerHook) < closeEnough) {
					// _util.log(0, "trigger", options.name, "->", "no need to change, still in sync");
					return; // all good
				}
			}
			// Don't have a group, check if a matching one exists
			// _util.log(0, "trigger", options.name, "->", "out of sync!");
			var groups = _ctrl._indicators.groups,
			    group,
			    i = groups.length;
			while (i--) {
				group = groups[i];
				if (Math.abs(group.triggerHook - triggerHook) < closeEnough) {
					// found a match!
					// _util.log(0, "trigger", options.name, "->", "found match");
					if (Indicator.triggerGroup) {
						// do I have an old group that is out of sync?
						if (Indicator.triggerGroup.members.length === 1) {
							// is it the only remaining group?
							// _util.log(0, "trigger", options.name, "->", "kill");
							// was the last member, remove the whole group
							removeTriggerGroup();
						} else {
							Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
							_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
							_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
							// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
						}
					}
					// join new group
					group.members.push(Indicator);
					Indicator.triggerGroup = group;
					_ctrl._indicators.updateTriggerGroupLabel(group);
					return;
				}
			}

			// at this point I am obviously out of sync and don't match any other group
			if (Indicator.triggerGroup) {
				if (Indicator.triggerGroup.members.length === 1) {
					// _util.log(0, "trigger", options.name, "->", "updating existing");
					// out of sync but i'm the only member => just change and update
					Indicator.triggerGroup.triggerHook = triggerHook;
					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
					return;
				} else {
					// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
					Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
					_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
					Indicator.triggerGroup = undefined; // need a brand new group...
				}
			}
			// _util.log(0, "trigger", options.name, "->", "add a new one");
			// did not find any match, make new trigger group
			addTriggerGroup();
		};
	};

	/*
  * ----------------------------------------------------------------
  * Templates for the indicators
  * ----------------------------------------------------------------
  */
	var TPL = {
		start: function start(color) {
			// inner element (for bottom offset -1, while keeping top position 0)
			var inner = document.createElement("div");
			inner.textContent = "start";
			_util.css(inner, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			var e = document.createElement('div');
			// wrapper
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				width: 0,
				height: 0
			});
			e.appendChild(inner);
			return e;
		},
		end: function end(color) {
			var e = document.createElement('div');
			e.textContent = "end";
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			return e;
		},
		bounds: function bounds() {
			var e = document.createElement('div');
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				"white-space": "nowrap",
				"pointer-events": "none",
				"font-size": FONT_SIZE
			});
			e.style.zIndex = ZINDEX;
			return e;
		},
		trigger: function trigger(color) {
			// inner to be above or below line but keep position
			var inner = document.createElement('div');
			inner.textContent = "trigger";
			_util.css(inner, {
				position: "relative"
			});
			// inner wrapper for right: 0 and main element has no size
			var w = document.createElement('div');
			_util.css(w, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			w.appendChild(inner);
			// wrapper
			var e = document.createElement('div');
			_util.css(e, {
				position: "fixed",
				overflow: "visible",
				"white-space": "nowrap",
				"pointer-events": "none",
				"font-size": FONT_SIZE
			});
			e.style.zIndex = ZINDEX;
			e.appendChild(w);
			return e;
		}
	};
}

debugAddIndicators(ScrollMagic);

var refOrInnerRef = function refOrInnerRef(child) {
  if (child.type && child.type.$$typeof && child.type.$$typeof.toString() === 'Symbol(react.forward_ref)') {
    return 'ref';
  }

  // styled-components < 4
  if (child.type && child.type.styledComponentId) {
    return 'innerRef';
  }

  return 'ref';
};

var isGSAP = function isGSAP(child) {
  if (react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(child) === 1 && child.type && (child.type.displayName === 'Tween' || child.type.displayName === 'Timeline')) {
    return true;
  }
  return false;
};

var controlGSAP = function controlGSAP(child, progress, event) {
  if (isGSAP(child)) {
    var props = _extends({}, child.props, { totalProgress: progress, paused: true });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(child.type, props)
    );
  }
  return child;
};

var callChildFunction = function callChildFunction(children, progress, event) {
  if (children && typeof children === 'function') {
    return children(progress, event);
  }
  return children;
};

var getChild = function getChild(children, progress, event) {
  children = controlGSAP(children, progress, event);
  children = callChildFunction(children, progress, event);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);
};

var isString = function isString(element) {
  if (typeof element === 'string' || element instanceof String) {
    return true;
  }
  return false;
};

var SceneBase = function (_React$PureComponent) {
  inherits(SceneBase, _React$PureComponent);

  function SceneBase() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SceneBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SceneBase.__proto__ || Object.getPrototypeOf(SceneBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      event: 'init',
      progress: 0
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(SceneBase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          children = _props.children,
          controller = _props.controller,
          classToggle = _props.classToggle,
          pin = _props.pin,
          pinSettings = _props.pinSettings,
          indicators = _props.indicators,
          enabled = _props.enabled,
          sceneParams = objectWithoutProperties(_props, ['children', 'controller', 'classToggle', 'pin', 'pinSettings', 'indicators', 'enabled']);


      var element = this.ref;
      sceneParams.triggerElement = sceneParams.triggerElement === null ? null : sceneParams.triggerElement || element;

      this.scene = new ScrollMagic.Scene(sceneParams);

      this.initEventHandlers();

      if (classToggle) {
        this.setClassToggle(this.scene, element, classToggle);
      }

      if (pin || pinSettings) {
        this.setPin(this.scene, element, pin, pinSettings);
      }

      if (indicators) {
        this.scene.addIndicators({ name: ' ' });
      }

      if (enabled !== undefined) {
        this.scene.enabled(enabled);
      }

      this.scene.addTo(controller);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          duration = _props2.duration,
          offset = _props2.offset,
          triggerElement = _props2.triggerElement,
          triggerHook = _props2.triggerHook,
          reverse = _props2.reverse,
          enabled = _props2.enabled;


      if (duration !== undefined && duration !== prevProps.duration) {
        this.scene.duration(duration);
      }

      if (offset !== undefined && offset !== prevProps.offset) {
        this.scene.offset(offset);
      }

      if (triggerElement !== undefined && triggerElement !== prevProps.triggerElement) ;

      if (triggerHook !== undefined && triggerHook !== prevProps.triggerHook) {
        this.scene.triggerHook(triggerHook);
      }

      if (reverse !== undefined && reverse !== prevProps.reverse) {
        this.scene.reverse(reverse);
      }

      if (enabled !== undefined && enabled !== prevProps.enabled) {
        this.scene.enabled(enabled);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.scene.destroy();
    }
  }, {
    key: 'setClassToggle',
    value: function setClassToggle(scene, element, classToggle) {
      if (Array.isArray(classToggle) && classToggle.length === 2) {
        scene.setClassToggle(classToggle[0], classToggle[1]);
      } else {
        scene.setClassToggle(element, classToggle);
      }
    }
  }, {
    key: 'setPin',
    value: function setPin(scene, element, pin, pinSettings) {
      element = isString(pin) ? pin : element;
      scene.setPin(element, pinSettings);
    }
  }, {
    key: 'initEventHandlers',
    value: function initEventHandlers() {
      var _this2 = this;

      var children = this.props.children;


      if (typeof children !== 'function' && !isGSAP(callChildFunction(children, 0, 'init'))) {
        return;
      }

      this.scene.on('start end enter leave', function (event) {
        _this2.setState({
          event: event
        });
      });

      this.scene.on('progress', function (event) {
        _this2.setState({
          progress: event.progress
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var _state = this.state,
          progress = _state.progress,
          event = _state.event;


      var child = getChild(children, progress, event);

      // TODO: Don't add ref to stateless or stateful components 

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, defineProperty({}, refOrInnerRef(child), function (ref) {
        return _this3.ref = ref;
      }));
    }
  }]);
  return SceneBase;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var Scene = function (_React$PureComponent2) {
  inherits(Scene, _React$PureComponent2);

  function Scene() {
    classCallCheck(this, Scene);
    return possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).apply(this, arguments));
  }

  createClass(Scene, [{
    key: 'render',
    value: function render() {
      if (!this.props.controller) {
        var _children = this.props.children;

        var _progress = 0;
        var _event = 'init';

        return getChild(_children, _progress, _event);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SceneBase, this.props);
    }
  }]);
  return Scene;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Scene.displayName = 'Scene';


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_0fb095e325d7ebf261c3 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_0fb095e325d7ebf261c3 */ "dll-reference dll_0fb095e325d7ebf261c3"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

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
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websitesWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h2", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__wrapperHeading,
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
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websitesWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h2", {
    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__wrapperHeading,
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

/***/ }),

/***/ "./pages/portfolio.module.scss":
/*!*************************************!*\
  !*** ./pages/portfolio.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./portfolio.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/portfolio.module.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./portfolio.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/portfolio.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./portfolio.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/portfolio.module.scss");

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

/***/ "./websites.json":
/*!***********************!*\
  !*** ./websites.json ***!
  \***********************/
/*! exports provided: sites, apps, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sites\":[{\"name\":\"Gregg Fine Dev\",\"img\":\"/website1.png\",\"link\":\"https://greggfinedev.com/\",\"description\":\"The web development site of JavaScript programmer Gregg Fine\"},{\"name\":\"Hidden Tiger Music Inc.\",\"img\":\"/website2.png\",\"link\":\"http://hiddentigermusic.com/\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"},{\"name\":\"Synth Explorer\",\"img\":\"/website3.png\",\"link\":\"https://greggfine.github.io/synth-explorer-2020/#!/home\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"}],\"apps\":[{\"name\":\"Jazz Guitar Game\",\"img\":\"/website4.png\",\"link\":\"https://www.greggfineguitar.com\",\"description\":\"Guess the name of the Jazz guitarist you are listening to.\"},{\"name\":\"Rhythmic Ear Trainer\",\"img\":\"/website5.png\",\"link\":\"https://greggfine.github.io/subdivision-app/\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"},{\"name\":\"Searchable Music Library\",\"img\":\"/website6.png\",\"link\":\"https://immense-atoll-44421.herokuapp.com/search\",\"description\":\"Our restaurant serves the freshest seafood daily. Contact us for specials\"}]}");

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