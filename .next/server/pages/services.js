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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/services.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/cardGrid.module.scss":
/*!************************************!*\
  !*** ./pages/cardGrid.module.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"CardGrid\": \"cardGrid_CardGrid__1cBLL\",\n\t\"CardGrid__cardGridTrans\": \"cardGrid_CardGrid__cardGridTrans__1Y9Gm\",\n\t\"CardGrid__serviceCard\": \"cardGrid_CardGrid__serviceCard__2Ay0z\",\n\t\"CardGrid__cardIcon\": \"cardGrid_CardGrid__cardIcon__2FjGR\",\n\t\"CardGrid__serviceCardTitle\": \"cardGrid_CardGrid__serviceCardTitle__3C3HO\",\n\t\"CardGrid__secondaryCardContent\": \"cardGrid_CardGrid__secondaryCardContent__1h4Y0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJkR3JpZC5tb2R1bGUuc2Nzcz9mMzdmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2NhcmRHcmlkLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ2FyZEdyaWRcIjogXCJjYXJkR3JpZF9DYXJkR3JpZF9fMWNCTExcIixcblx0XCJDYXJkR3JpZF9fY2FyZEdyaWRUcmFuc1wiOiBcImNhcmRHcmlkX0NhcmRHcmlkX19jYXJkR3JpZFRyYW5zX18xWTlHbVwiLFxuXHRcIkNhcmRHcmlkX19zZXJ2aWNlQ2FyZFwiOiBcImNhcmRHcmlkX0NhcmRHcmlkX19zZXJ2aWNlQ2FyZF9fMkF5MHpcIixcblx0XCJDYXJkR3JpZF9fY2FyZEljb25cIjogXCJjYXJkR3JpZF9DYXJkR3JpZF9fY2FyZEljb25fXzJGakdSXCIsXG5cdFwiQ2FyZEdyaWRfX3NlcnZpY2VDYXJkVGl0bGVcIjogXCJjYXJkR3JpZF9DYXJkR3JpZF9fc2VydmljZUNhcmRUaXRsZV9fM0MzSE9cIixcblx0XCJDYXJkR3JpZF9fc2Vjb25kYXJ5Q2FyZENvbnRlbnRcIjogXCJjYXJkR3JpZF9DYXJkR3JpZF9fc2Vjb25kYXJ5Q2FyZENvbnRlbnRfXzFoNFkwXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cardGrid.module.scss\n");

/***/ }),

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardGrid.module.scss */ \"./pages/cardGrid.module.scss\");\n/* harmony import */ var _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollmagic */ \"react-scrollmagic\");\n/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/HTMusic/Desktop/PROJECTS/the-code-creative-website_002/pages/services.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Services(props) {\n  const {\n    products\n  } = props;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Services | The Code Creative\")), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__[\"Controller\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"], {\n    duration: 1500,\n    reverse: true,\n    triggerHook: 1,\n    classToggle: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardGridTrans,\n    offset: 150,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, __jsx(\"section\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/web-icon-gravit.png\",\n    alt: \"\",\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }), __jsx(\"h2\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, \"Website Development\"), __jsx(\"p\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veritatis beatae pariatur id eligendi. Quibusdam aperiam aspernatur culpa molestiae qui ut pariatur, quae praesentium illum!\")), __jsx(\"div\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/web-custom-web-apps-icon-gravit.png\",\n    alt: \"\",\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }), __jsx(\"h2\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, \"Custom Web Apps\"), __jsx(\"p\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis molestias nulla, ullam vel itaque voluptatibus minima maxime corporis laborum natus.\")), __jsx(\"div\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/email-icon-gravit.png\",\n    alt: \"\",\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }), __jsx(\"h2\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, \"Email Marketing\"), __jsx(\"p\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque beatae cupiditate reprehenderit ea dicta repellendus ratione aspernatur mollitia natus assumenda.\")), __jsx(\"div\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/website-redesign-icon-gravit.png\",\n    alt: \"\",\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }), __jsx(\"h2\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, \"Website Redesign\"), __jsx(\"p\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusantium neque eveniet dolorum illum debitis nesciunt pariatur officiis voluptatem?\")), __jsx(\"div\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/seo-icon-gravit.png\",\n    alt: \"\",\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }), __jsx(\"h2\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, \"SEO\"), __jsx(\"p\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat officia architecto sint recusandae et consequatur suscipit alias in? Debitis.\")), __jsx(\"div\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/web-maintenance-icon-gravit.png\",\n    alt: \"\",\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__cardIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 17\n    }\n  }), __jsx(\"h2\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__serviceCardTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  }, \"Website Maintenance & Content Updates\"), __jsx(\"p\", {\n    className: _cardGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardGrid__secondaryCardContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 17\n    }\n  }, \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, cum necessitatibus! Ipsa iusto quam quisquam itaque delectus. Minus, ad numquam.\")))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZXJ2aWNlcy5qcz83OWU3Il0sIm5hbWVzIjpbIlNlcnZpY2VzIiwicHJvcHMiLCJwcm9kdWN0cyIsImNhcmRHcmlkU3R5bGVzIiwiQ2FyZEdyaWRfX2NhcmRHcmlkVHJhbnMiLCJDYXJkR3JpZCIsIkNhcmRHcmlkX19zZXJ2aWNlQ2FyZCIsIkNhcmRHcmlkX19jYXJkSWNvbiIsIkNhcmRHcmlkX19zZXJ2aWNlQ2FyZFRpdGxlIiwiQ2FyZEdyaWRfX3NlY29uZGFyeUNhcmRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsUUFBTTtBQUFFQztBQUFGLE1BQWVELEtBQXJCO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUNFLFlBQVEsRUFBRSxJQURaO0FBRUUsV0FBTyxFQUFFLElBRlg7QUFHRSxlQUFXLEVBQUUsQ0FIZjtBQUlFLGVBQVcsRUFBRUUsNERBQWMsQ0FBQ0MsdUJBSjlCO0FBS0UsVUFBTSxFQUFFLEdBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQVMsYUFBUyxFQUFFRCw0REFBYyxDQUFDRSxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVGLDREQUFjLENBQUNHLHFCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFD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QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxrQ0FETjtBQUVFLE9BQUcsRUFBQyxFQUZOO0FBR0UsYUFBUyxFQUFFSCw0REFBYyxDQUFDSSxrQkFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSSxhQUFTLEVBQUVKLDREQUFjLENBQUNLLDBCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQU5GLEVBU0U7QUFBRyxhQUFTLEVBQUVMLDREQUFjLENBQUNNLDhCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNKQVRGLENBN0VGLENBUEYsQ0FERixDQURGLENBSkYsQ0FERjtBQWdIRDs7QUFFY1QsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zZXJ2aWNlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYXJkR3JpZFN0eWxlcyBmcm9tIFwiLi9jYXJkR3JpZC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgU2NlbmUgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsbWFnaWNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZnVuY3Rpb24gU2VydmljZXMocHJvcHMpIHtcbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2VydmljZXMgfCBUaGUgQ29kZSBDcmVhdGl2ZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPENvbnRyb2xsZXI+XG4gICAgICAgICAgPFNjZW5lXG4gICAgICAgICAgICBkdXJhdGlvbj17MTUwMH1cbiAgICAgICAgICAgIHJldmVyc2U9e3RydWV9XG4gICAgICAgICAgICB0cmlnZ2VySG9vaz17MX1cbiAgICAgICAgICAgIGNsYXNzVG9nZ2xlPXtjYXJkR3JpZFN0eWxlcy5DYXJkR3JpZF9fY2FyZEdyaWRUcmFuc31cbiAgICAgICAgICAgIG9mZnNldD17MTUwfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2FyZEdyaWRTdHlsZXMuQ2FyZEdyaWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEdyaWRTdHlsZXMuQ2FyZEdyaWRfX3NlcnZpY2VDYXJkfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvd2ViLWljb24tZ3Jhdml0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjYXJkR3JpZFN0eWxlcy5DYXJkR3JpZF9fY2FyZEljb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjYXJkR3JpZFN0eWxlcy5DYXJkR3JpZF9fc2VydmljZUNhcmRUaXRsZX0+XG4gICAgICAgICAgICAgICAgICBXZWJzaXRlIERldmVsb3BtZW50XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NhcmRHcmlkU3R5bGVzLkNhcmRHcmlkX19zZWNvbmRhcnlDYXJkQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuICAgICAgICAgICAgICAgICAgT2ZmaWNpYSB2ZXJpdGF0aXMgYmVhdGFlIHBhcmlhdHVyIGlkIGVsaWdlbmRpLiBRdWlidXNkYW1cbiAgICAgICAgICAgICAgICAgIGFwZXJpYW0gYXNwZXJuYXR1ciBjdWxwYSBtb2xlc3RpYWUgcXVpIHV0IHBhcmlhdHVyLCBxdWFlXG4gICAgICAgICAgICAgICAgICBwcmFlc2VudGl1bSBpbGx1bSFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEdyaWRTdHlsZXMuQ2FyZEdyaWRfX3NlcnZpY2VDYXJkfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvd2ViLWN1c3RvbS13ZWItYXBwcy1pY29uLWdyYXZpdC5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2FyZEdyaWRTdHlsZXMuQ2FyZEdyaWRfX2NhcmRJY29ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2FyZEdyaWRTdHlsZXMuQ2FyZEdyaWRfX3NlcnZpY2VDYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgQ3VzdG9tIFdlYiBBcHBzXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NhcmRHcmlkU3R5bGVzLkNhcmRHcmlkX19zZWNvbmRhcnlDYXJkQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgICAgICAgIE9tbmlzIG1vbGVzdGlhcyBudWxsYSwgdWxsYW0gdmVsIGl0YXF1ZSB2b2x1cHRhdGlidXMgbWluaW1hXG4gICAgICAgICAgICAgICAgICBtYXhpbWUgY29ycG9yaXMgbGFib3J1bSBuYXR1cy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEdyaWRTdHlsZXMuQ2FyZEdyaWRfX3NlcnZpY2VDYXJkfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvZW1haWwtaWNvbi1ncmF2aXQucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NhcmRHcmlkU3R5bGVzLkNhcmRHcmlkX19jYXJkSWNvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NhcmRHcmlkU3R5bGVzLkNhcmRHcmlkX19zZXJ2aWNlQ2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgIEVtYWlsIE1hcmtldGluZ1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjYXJkR3JpZFN0eWxlcy5DYXJkR3JpZF9fc2Vjb25kYXJ5Q2FyZENvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgICAgICAgICBOZXF1ZSBiZWF0YWUgY3VwaWRpdGF0ZSByZXByZWhlbmRlcml0IGVhIGRpY3RhIHJlcGVsbGVuZHVzXG4gICAgICAgICAgICAgICAgICByYXRpb25lIGFzcGVybmF0dXIgbW9sbGl0aWEgbmF0dXMgYXNzdW1lbmRhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkR3JpZFN0eWxlcy5DYXJkR3JpZF9fc2VydmljZUNhcmR9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi93ZWJzaXRlLXJlZGVzaWduLWljb24tZ3Jhdml0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjYXJkR3JpZFN0eWxlcy5DYXJkR3JpZF9fY2FyZEljb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjYXJkR3JpZFN0eWxlcy5DYXJkR3JpZF9fc2VydmljZUNhcmRUaXRsZX0+XG4gICAgICAgICAgICAgICAgICBXZWJzaXRlIFJlZGVzaWduXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NhcmRHcmlkU3R5bGVzLkNhcmRHcmlkX19zZWNvbmRhcnlDYXJkQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuICAgICAgICAgICAgICAgICAgRGlnbmlzc2ltb3MgYXV0IGFjY3VzYW50aXVtIG5lcXVlIGV2ZW5pZXQgZG9sb3J1bSBpbGx1bVxuICAgICAgICAgICAgICAgICAgZGViaXRpcyBuZXNjaXVudCBwYXJpYXR1ciBvZmZpY2lpcyB2b2x1cHRhdGVtP1xuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkR3JpZFN0eWxlcy5DYXJkR3JpZF9fc2VydmljZUNhcmR9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zZW8taWNvbi1ncmF2aXQucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NhcmRHcmlkU3R5bGVzLkNhcmRHcmlkX19jYXJkSWNvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NhcmRHcmlkU3R5bGVzLkNhcmRHcmlkX19zZXJ2aWNlQ2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgIFNFT1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjYXJkR3JpZFN0eWxlcy5DYXJkR3JpZF9fc2Vjb25kYXJ5Q2FyZENvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgICAgICAgIENvbnNlY3RldHVyIHJlcGVsbGF0IG9mZmljaWEgYXJjaGl0ZWN0byBzaW50IHJlY3VzYW5kYWUgZXRcbiAgICAgICAgICAgICAgICAgIGNvbnNlcXVhdHVyIHN1c2NpcGl0IGFsaWFzIGluPyBEZWJpdGlzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkR3JpZFN0eWxlcy5DYXJkR3JpZF9fc2VydmljZUNhcmR9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi93ZWItbWFpbnRlbmFuY2UtaWNvbi1ncmF2aXQucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NhcmRHcmlkU3R5bGVzLkNhcmRHcmlkX19jYXJkSWNvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NhcmRHcmlkU3R5bGVzLkNhcmRHcmlkX19zZXJ2aWNlQ2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgIFdlYnNpdGUgTWFpbnRlbmFuY2UgJiBDb250ZW50IFVwZGF0ZXNcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2FyZEdyaWRTdHlsZXMuQ2FyZEdyaWRfX3NlY29uZGFyeUNhcmRDb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFeCxcbiAgICAgICAgICAgICAgICAgIGN1bSBuZWNlc3NpdGF0aWJ1cyEgSXBzYSBpdXN0byBxdWFtIHF1aXNxdWFtIGl0YXF1ZSBkZWxlY3R1cy5cbiAgICAgICAgICAgICAgICAgIE1pbnVzLCBhZCBudW1xdWFtLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9TY2VuZT5cbiAgICAgICAgPC9Db250cm9sbGVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/services.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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