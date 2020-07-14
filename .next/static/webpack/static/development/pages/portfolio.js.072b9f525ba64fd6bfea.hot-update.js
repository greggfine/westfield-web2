webpackHotUpdate("static/development/pages/portfolio.js",{

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
var _jsxFileName = "/Users/HTMusic/Desktop/PROJECTS/westfield-web/components/Website.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Site = function Site(_ref) {
  var website = _ref.website;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mycard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      width: "22rem",
      textAlign: "center",
      boxShadow: "2px 2px 5px 5px #eee",
      margin: "20px",
      borderRadius: ".55em"
    },
    key: website.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.innerCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Img, {
    variant: "top",
    src: website.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h4", {
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, website.name), __jsx("p", {
    className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, website.description), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outline-primary",
    href: website.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "VIEW WEBSITE"))))));
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Website.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Website.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Website_mycard__1AWUN:hover {\n  transition: transform 400ms ease-in-out;\n  transform: translateY(-7px); }\n\n.Website_innerCard__1gS6M:hover {\n  box-shadow: 2px 2px 10px 10px #eee; }\n\n.Website_card-button__1ngdI {\n  font-size: 16px; }\n\n.Website_cardText__3a_Z0 {\n  font-size: 16px;\n  color: #666; }\n\n.Website_cardTitle__1cc4j {\n  font-size: 20px; }\n", "",{"version":3,"sources":["Website.module.scss"],"names":[],"mappings":"AAAA;EACE,uCAAuC;EACvC,2BAA2B,EAAA;;AAG7B;EACE,kCAAkC,EAAA;;AAGpC;EACE,eAAe,EAAA;;AAGjB;EACE,eAAe;EACf,WAAW,EAAA;;AAGb;EACE,eAAe,EAAA","file":"Website.module.scss","sourcesContent":[".mycard:hover {\n  transition: transform 400ms ease-in-out;\n  transform: translateY(-7px);\n}\n\n.innerCard:hover {\n  box-shadow: 2px 2px 10px 10px #eee;\n}\n\n.card-button {\n  font-size: 16px;\n}\n\n.cardText {\n  font-size: 16px;\n  color: #666;\n}\n\n.cardTitle {\n  font-size: 20px;\n}\n"]}]);
// Exports
exports.locals = {
	"mycard": "Website_mycard__1AWUN",
	"innerCard": "Website_innerCard__1gS6M",
	"card-button": "Website_card-button__1ngdI",
	"cardText": "Website_cardText__3a_Z0",
	"cardTitle": "Website_cardTitle__1cc4j"
};

/***/ })

})
//# sourceMappingURL=portfolio.js.072b9f525ba64fd6bfea.hot-update.js.map