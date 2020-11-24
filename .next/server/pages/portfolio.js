module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/portfolio.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Website.js":
/*!*******************************!*\
  !*** ./components/Website.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ \"react-bootstrap/Card\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Website_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Website.module.scss */ \"./components/Website.module.scss\");\n/* harmony import */ var _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Website_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollmagic */ \"react-scrollmagic\");\n/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/HTMusic/Desktop/PROJECTS/westfield-web_b/components/Website.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Site = ({\n  website\n}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__myCard,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }\n}, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__[\"Controller\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 7\n  }\n}, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__[\"Scene\"], {\n  duration: 1500,\n  reverse: false,\n  triggerHook: 0.7,\n  classToggle: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardTrans,\n  offset: 10,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }\n}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card,\n  key: website.name,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 11\n  }\n}, __jsx(\"div\", {\n  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__innerCard,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 13\n  }\n}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {\n  variant: \"top\",\n  src: website.img,\n  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardImg,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 15\n  }\n}), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 15\n  }\n}, __jsx(\"h4\", {\n  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardTitle,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 17\n  }\n}, website.name), __jsx(\"p\", {\n  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardText,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 17\n  }\n}, website.description), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  variant: \"outline-primary\",\n  href: website.link,\n  target: \"_blank\",\n  className: _Website_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Card__cardBtn,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 17\n  }\n}, \"VIEW PROJECT\"))))))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Site);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dlYnNpdGUuanM/NDMzMSJdLCJuYW1lcyI6WyJTaXRlIiwid2Vic2l0ZSIsIndlYnNpdGVTdHlsZXMiLCJDYXJkX19teUNhcmQiLCJDYXJkX19jYXJkVHJhbnMiLCJDYXJkIiwibmFtZSIsIkNhcmRfX2lubmVyQ2FyZCIsImltZyIsIkNhcmRfX2NhcmRJbWciLCJDYXJkX19jYXJkVGl0bGUiLCJDYXJkX19jYXJkVGV4dCIsImRlc2NyaXB0aW9uIiwibGluayIsIkNhcmRfX2NhcmRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQ1gsbUVBQ0U7QUFBSyxXQUFTLEVBQUVDLDJEQUFhLENBQUNDLFlBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLHVEQUFEO0FBQ0UsVUFBUSxFQUFFLElBRFo7QUFFRSxTQUFPLEVBQUUsS0FGWDtBQUdFLGFBQVcsRUFBRSxHQUhmO0FBSUUsYUFBVyxFQUFFRCwyREFBYSxDQUFDRSxlQUo3QjtBQUtFLFFBQU0sRUFBRSxFQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FPRSxNQUFDLDJEQUFEO0FBQU0sV0FBUyxFQUFFRiwyREFBYSxDQUFDRyxJQUEvQjtBQUFxQyxLQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFFSiwyREFBYSxDQUFDSyxlQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywyREFBRCxDQUFNLEdBQU47QUFDRSxTQUFPLEVBQUMsS0FEVjtBQUVFLEtBQUcsRUFBRU4sT0FBTyxDQUFDTyxHQUZmO0FBR0UsV0FBUyxFQUFFTiwyREFBYSxDQUFDTyxhQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFNRSxNQUFDLDJEQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUVQLDJEQUFhLENBQUNRLGVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDR1QsT0FBTyxDQUFDSyxJQURYLENBREYsRUFJRTtBQUFHLFdBQVMsRUFBRUosMkRBQWEsQ0FBQ1MsY0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNHVixPQUFPLENBQUNXLFdBRFgsQ0FKRixFQU9FLE1BQUMsNkRBQUQ7QUFDRSxTQUFPLEVBQUMsaUJBRFY7QUFFRSxNQUFJLEVBQUVYLE9BQU8sQ0FBQ1ksSUFGaEI7QUFHRSxRQUFNLEVBQUMsUUFIVDtBQUlFLFdBQVMsRUFBRVgsMkRBQWEsQ0FBQ1ksYUFKM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixDQU5GLENBREYsQ0FQRixDQURGLENBREYsQ0FERixDQURGOztBQTBDZWQsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dlYnNpdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcbmltcG9ydCB3ZWJzaXRlU3R5bGVzIGZyb20gXCIuL1dlYnNpdGUubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IENvbnRyb2xsZXIsIFNjZW5lIH0gZnJvbSBcInJlYWN0LXNjcm9sbG1hZ2ljXCI7XG5cbmNvbnN0IFNpdGUgPSAoeyB3ZWJzaXRlIH0pID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17d2Vic2l0ZVN0eWxlcy5DYXJkX19teUNhcmR9PlxuICAgICAgPENvbnRyb2xsZXI+XG4gICAgICAgIDxTY2VuZVxuICAgICAgICAgIGR1cmF0aW9uPXsxNTAwfVxuICAgICAgICAgIHJldmVyc2U9e2ZhbHNlfVxuICAgICAgICAgIHRyaWdnZXJIb29rPXswLjd9XG4gICAgICAgICAgY2xhc3NUb2dnbGU9e3dlYnNpdGVTdHlsZXMuQ2FyZF9fY2FyZFRyYW5zfVxuICAgICAgICAgIG9mZnNldD17MTB9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3dlYnNpdGVTdHlsZXMuQ2FyZH0ga2V5PXt3ZWJzaXRlLm5hbWV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dlYnNpdGVTdHlsZXMuQ2FyZF9faW5uZXJDYXJkfT5cbiAgICAgICAgICAgICAgPENhcmQuSW1nXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgc3JjPXt3ZWJzaXRlLmltZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3dlYnNpdGVTdHlsZXMuQ2FyZF9fY2FyZEltZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXt3ZWJzaXRlU3R5bGVzLkNhcmRfX2NhcmRUaXRsZX0+XG4gICAgICAgICAgICAgICAgICB7d2Vic2l0ZS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt3ZWJzaXRlU3R5bGVzLkNhcmRfX2NhcmRUZXh0fT5cbiAgICAgICAgICAgICAgICAgIHt3ZWJzaXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3dlYnNpdGUubGlua31cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3dlYnNpdGVTdHlsZXMuQ2FyZF9fY2FyZEJ0bn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBWSUVXIFBST0pFQ1RcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvU2NlbmU+XG4gICAgICA8L0NvbnRyb2xsZXI+XG4gICAgPC9kaXY+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2l0ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Website.js\n");

/***/ }),

/***/ "./components/Website.module.scss":
/*!****************************************!*\
  !*** ./components/Website.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Card\": \"Website_Card__3Zo-r\",\n\t\"Card__cardTrans\": \"Website_Card__cardTrans__1oKTW\",\n\t\"Card__myCard\": \"Website_Card__myCard__3me9C\",\n\t\"Card__innerCard\": \"Website_Card__innerCard__oJj2D\",\n\t\"Card__cardImg\": \"Website_Card__cardImg__mVvOp\",\n\t\"Card__cardTitle\": \"Website_Card__cardTitle__1ZsRD\",\n\t\"Card__cardText\": \"Website_Card__cardText__1LMqt\",\n\t\"Card__cardBtn\": \"Website_Card__cardBtn__JsFjZ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dlYnNpdGUubW9kdWxlLnNjc3M/YjE5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XZWJzaXRlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ2FyZFwiOiBcIldlYnNpdGVfQ2FyZF9fM1pvLXJcIixcblx0XCJDYXJkX19jYXJkVHJhbnNcIjogXCJXZWJzaXRlX0NhcmRfX2NhcmRUcmFuc19fMW9LVFdcIixcblx0XCJDYXJkX19teUNhcmRcIjogXCJXZWJzaXRlX0NhcmRfX215Q2FyZF9fM21lOUNcIixcblx0XCJDYXJkX19pbm5lckNhcmRcIjogXCJXZWJzaXRlX0NhcmRfX2lubmVyQ2FyZF9fb0pqMkRcIixcblx0XCJDYXJkX19jYXJkSW1nXCI6IFwiV2Vic2l0ZV9DYXJkX19jYXJkSW1nX19tVnZPcFwiLFxuXHRcIkNhcmRfX2NhcmRUaXRsZVwiOiBcIldlYnNpdGVfQ2FyZF9fY2FyZFRpdGxlX18xWnNSRFwiLFxuXHRcIkNhcmRfX2NhcmRUZXh0XCI6IFwiV2Vic2l0ZV9DYXJkX19jYXJkVGV4dF9fMUxNcXRcIixcblx0XCJDYXJkX19jYXJkQnRuXCI6IFwiV2Vic2l0ZV9DYXJkX19jYXJkQnRuX19Kc0ZqWlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Website.module.scss\n");

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Website */ \"./components/Website.js\");\n/* harmony import */ var _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.module.scss */ \"./pages/portfolio.module.scss\");\n/* harmony import */ var _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollmagic */ \"react-scrollmagic\");\n/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _websites_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../websites.json */ \"./websites.json\");\nvar _websites_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../websites.json */ \"./websites.json\", 1);\nvar _jsxFileName = \"/Users/HTMusic/Desktop/PROJECTS/westfield-web_b/pages/portfolio.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Portfolio(props) {\n  return __jsx(\"div\", {\n    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__heading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websitesWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__wrapperHeading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"Websites\"), __jsx(\"ul\", {\n    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websites,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, _websites_json__WEBPACK_IMPORTED_MODULE_4__.sites.map(site => __jsx(_components_Website__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    website: site,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  })))), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__[\"Controller\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_3__[\"Scene\"], {\n    duration: 1500,\n    reverse: true,\n    triggerHook: 0.7,\n    classToggle: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__horizontalRow__trans,\n    offset: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__horizontalRow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websitesWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__wrapperHeading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Web Apps\"), __jsx(\"ul\", {\n    className: _portfolio_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Portfolio__websites,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, _websites_json__WEBPACK_IMPORTED_MODULE_4__.apps.map(site => __jsx(_components_Website__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    website: site,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }))), \";\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3J0Zm9saW8uanM/NzgwOSJdLCJuYW1lcyI6WyJQb3J0Zm9saW8iLCJwcm9wcyIsInN0eWxlcyIsIlBvcnRmb2xpb19faGVhZGluZyIsIlBvcnRmb2xpb19fd2Vic2l0ZXNXcmFwcGVyIiwiUG9ydGZvbGlvX193cmFwcGVySGVhZGluZyIsIlBvcnRmb2xpb19fd2Vic2l0ZXMiLCJ3ZWJzaXRlcyIsInNpdGVzIiwibWFwIiwic2l0ZSIsIlBvcnRmb2xpb19faG9yaXpvbnRhbFJvd19fdHJhbnMiLCJQb3J0Zm9saW9fX2hvcml6b250YWxSb3ciLCJhcHBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDeEIsU0FDRTtBQUFLLGFBQVMsRUFBRUMsNkRBQU0sQ0FBQ0YsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRSw2REFBTSxDQUFDQyxrQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFBSyxhQUFTLEVBQUVELDZEQUFNLENBQUNFLDBCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVGLDZEQUFNLENBQUNHLHlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBSSxhQUFTLEVBQUVILDZEQUFNLENBQUNJLG1CQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLDJDQUFRLENBQUNDLEtBQVQsQ0FBZUMsR0FBZixDQUFvQkMsSUFBRCxJQUNsQixNQUFDLDJEQUFEO0FBQVMsV0FBTyxFQUFFQSxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FESCxDQUZGLENBSEYsRUFXRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQ0UsWUFBUSxFQUFFLElBRFo7QUFFRSxXQUFPLEVBQUUsSUFGWDtBQUdFLGVBQVcsRUFBRSxHQUhmO0FBSUUsZUFBVyxFQUFFUiw2REFBTSxDQUFDUywrQkFKdEI7QUFLRSxVQUFNLEVBQUUsRUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBSyxhQUFTLEVBQUVULDZEQUFNLENBQUNVLHdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQVhGLEVBc0JFO0FBQUssYUFBUyxFQUFFViw2REFBTSxDQUFDRSwwQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRiw2REFBTSxDQUFDRyx5QkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQUksYUFBUyxFQUFFSCw2REFBTSxDQUFDSSxtQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQywyQ0FBUSxDQUFDTSxJQUFULENBQWNKLEdBQWQsQ0FBbUJDLElBQUQsSUFDakIsTUFBQywyREFBRDtBQUFTLFdBQU8sRUFBRUEsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREgsQ0FGRixNQXRCRixDQURGO0FBa0NEOztBQUVjVix3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3BvcnRmb2xpby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWJzaXRlIGZyb20gXCIuLi9jb21wb25lbnRzL1dlYnNpdGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcG9ydGZvbGlvLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBTY2VuZSB9IGZyb20gXCJyZWFjdC1zY3JvbGxtYWdpY1wiO1xuaW1wb3J0IHdlYnNpdGVzIGZyb20gXCIuLi93ZWJzaXRlcy5qc29uXCI7XG5cbmZ1bmN0aW9uIFBvcnRmb2xpbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUG9ydGZvbGlvfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUG9ydGZvbGlvX19oZWFkaW5nfT48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Qb3J0Zm9saW9fX3dlYnNpdGVzV3JhcHBlcn0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5Qb3J0Zm9saW9fX3dyYXBwZXJIZWFkaW5nfT5XZWJzaXRlczwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5Qb3J0Zm9saW9fX3dlYnNpdGVzfT5cbiAgICAgICAgICB7d2Vic2l0ZXMuc2l0ZXMubWFwKChzaXRlKSA9PiAoXG4gICAgICAgICAgICA8V2Vic2l0ZSB3ZWJzaXRlPXtzaXRlfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udHJvbGxlcj5cbiAgICAgICAgPFNjZW5lXG4gICAgICAgICAgZHVyYXRpb249ezE1MDB9XG4gICAgICAgICAgcmV2ZXJzZT17dHJ1ZX1cbiAgICAgICAgICB0cmlnZ2VySG9vaz17MC43fVxuICAgICAgICAgIGNsYXNzVG9nZ2xlPXtzdHlsZXMuUG9ydGZvbGlvX19ob3Jpem9udGFsUm93X190cmFuc31cbiAgICAgICAgICBvZmZzZXQ9ezEwfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Qb3J0Zm9saW9fX2hvcml6b250YWxSb3d9PjwvZGl2PlxuICAgICAgICA8L1NjZW5lPlxuICAgICAgPC9Db250cm9sbGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Qb3J0Zm9saW9fX3dlYnNpdGVzV3JhcHBlcn0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5Qb3J0Zm9saW9fX3dyYXBwZXJIZWFkaW5nfT5XZWIgQXBwczwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5Qb3J0Zm9saW9fX3dlYnNpdGVzfT5cbiAgICAgICAgICB7d2Vic2l0ZXMuYXBwcy5tYXAoKHNpdGUpID0+IChcbiAgICAgICAgICAgIDxXZWJzaXRlIHdlYnNpdGU9e3NpdGV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDtcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n");

/***/ }),

/***/ "./pages/portfolio.module.scss":
/*!*************************************!*\
  !*** ./pages/portfolio.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Portfolio__websites\": \"portfolio_Portfolio__websites__2rPvN\",\n\t\"Portfolio__horizontalRow\": \"portfolio_Portfolio__horizontalRow__kiyvM\",\n\t\"Portfolio__horizontalRow__trans\": \"portfolio_Portfolio__horizontalRow__trans__Q5gmK\",\n\t\"Portfolio__heading\": \"portfolio_Portfolio__heading__3RS8x\",\n\t\"Portfolio__title\": \"portfolio_Portfolio__title__dcCcs\",\n\t\"Portfolio__subheading\": \"portfolio_Portfolio__subheading__1pb3A\",\n\t\"Portfolio__headerWrapper\": \"portfolio_Portfolio__headerWrapper__13Jft\",\n\t\"Portfolio__websitesWrapper\": \"portfolio_Portfolio__websitesWrapper__3nkVU\",\n\t\"Portfolio__wrapperHeading\": \"portfolio_Portfolio__wrapperHeading__3jLI2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3J0Zm9saW8ubW9kdWxlLnNjc3M/YmYyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9wb3J0Zm9saW8ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJQb3J0Zm9saW9fX3dlYnNpdGVzXCI6IFwicG9ydGZvbGlvX1BvcnRmb2xpb19fd2Vic2l0ZXNfXzJyUHZOXCIsXG5cdFwiUG9ydGZvbGlvX19ob3Jpem9udGFsUm93XCI6IFwicG9ydGZvbGlvX1BvcnRmb2xpb19faG9yaXpvbnRhbFJvd19fa2l5dk1cIixcblx0XCJQb3J0Zm9saW9fX2hvcml6b250YWxSb3dfX3RyYW5zXCI6IFwicG9ydGZvbGlvX1BvcnRmb2xpb19faG9yaXpvbnRhbFJvd19fdHJhbnNfX1E1Z21LXCIsXG5cdFwiUG9ydGZvbGlvX19oZWFkaW5nXCI6IFwicG9ydGZvbGlvX1BvcnRmb2xpb19faGVhZGluZ19fM1JTOHhcIixcblx0XCJQb3J0Zm9saW9fX3RpdGxlXCI6IFwicG9ydGZvbGlvX1BvcnRmb2xpb19fdGl0bGVfX2RjQ2NzXCIsXG5cdFwiUG9ydGZvbGlvX19zdWJoZWFkaW5nXCI6IFwicG9ydGZvbGlvX1BvcnRmb2xpb19fc3ViaGVhZGluZ19fMXBiM0FcIixcblx0XCJQb3J0Zm9saW9fX2hlYWRlcldyYXBwZXJcIjogXCJwb3J0Zm9saW9fUG9ydGZvbGlvX19oZWFkZXJXcmFwcGVyX18xM0pmdFwiLFxuXHRcIlBvcnRmb2xpb19fd2Vic2l0ZXNXcmFwcGVyXCI6IFwicG9ydGZvbGlvX1BvcnRmb2xpb19fd2Vic2l0ZXNXcmFwcGVyX18zbmtWVVwiLFxuXHRcIlBvcnRmb2xpb19fd3JhcHBlckhlYWRpbmdcIjogXCJwb3J0Zm9saW9fUG9ydGZvbGlvX193cmFwcGVySGVhZGluZ19fM2pMSTJcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/portfolio.module.scss\n");

/***/ }),

/***/ "./websites.json":
/*!***********************!*\
  !*** ./websites.json ***!
  \***********************/
/*! exports provided: sites, apps, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"sites\\\":[{\\\"name\\\":\\\"Gregg Fine Dev\\\",\\\"img\\\":\\\"/website1.png\\\",\\\"link\\\":\\\"https://greggfinedev.com/\\\",\\\"description\\\":\\\"The web development site of JavaScript programmer Gregg Fine\\\"},{\\\"name\\\":\\\"Hidden Tiger Music Inc.\\\",\\\"img\\\":\\\"/website2.png\\\",\\\"link\\\":\\\"http://hiddentigermusic.com/\\\",\\\"description\\\":\\\"A Code Creative project\\\"},{\\\"name\\\":\\\"Synth Explorer\\\",\\\"img\\\":\\\"/website3.png\\\",\\\"link\\\":\\\"https://greggfine.github.io/synth-explorer-2020/#!/home\\\",\\\"description\\\":\\\"A Code Creative project\\\"}],\\\"apps\\\":[{\\\"name\\\":\\\"Jazz Guitar Game\\\",\\\"img\\\":\\\"/website4.png\\\",\\\"link\\\":\\\"https://www.greggfineguitar.com\\\",\\\"description\\\":\\\"Guess the name of the Jazz guitarist you are listening to.\\\"},{\\\"name\\\":\\\"Rhythmic Ear Trainer\\\",\\\"img\\\":\\\"/website5.png\\\",\\\"link\\\":\\\"https://greggfine.github.io/subdivision-app/\\\",\\\"description\\\":\\\"A Code Creative project\\\"},{\\\"name\\\":\\\"Searchable Music Library\\\",\\\"img\\\":\\\"/website6.png\\\",\\\"link\\\":\\\"https://evening-brushlands-33051.herokuapp.com/\\\",\\\"description\\\":\\\"A Code Creative project\\\"}]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3dlYnNpdGVzLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./websites.json\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI/ZmFhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Button\n");

/***/ }),

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Card\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiP2EyMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Card\n");

/***/ }),

/***/ "react-scrollmagic":
/*!************************************!*\
  !*** external "react-scrollmagic" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-scrollmagic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxtYWdpY1wiPzMxYzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3Qtc2Nyb2xsbWFnaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxtYWdpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-scrollmagic\n");

/***/ })

/******/ });