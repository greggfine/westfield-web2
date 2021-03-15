module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/checkout/session.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/checkout/session.ts":
/*!***************************************!*\
  !*** ./pages/api/checkout/session.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0___default.a(process.env.STRIPE_SECRET_KEY, {\n  apiVersion: '2020-08-27'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    quantity\n  } = req.body;\n  const session = await stripe.checkout.sessions.create({\n    payment_method_types: ['card'],\n    line_items: [{\n      price: process.env.PRICE_ID,\n      quantity\n    }],\n    mode: 'payment',\n    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,\n    cancel_url: `${req.headers.origin}/checkout`\n  });\n  res.status(200).json({\n    sessionId: session.id\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hlY2tvdXQvc2Vzc2lvbi50cz9iMWY1Il0sIm5hbWVzIjpbInN0cmlwZSIsIlN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImFwaVZlcnNpb24iLCJyZXEiLCJyZXMiLCJxdWFudGl0eSIsImJvZHkiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwibGluZV9pdGVtcyIsInByaWNlIiwiUFJJQ0VfSUQiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJoZWFkZXJzIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uSWQiLCJpZCJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsNkNBQUosQ0FBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUF2QixFQUEwQztBQUN2REMsWUFBVSxFQUFFO0FBRDJDLENBQTFDLENBQWY7QUFJZSxzRUFBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDaEUsUUFBTTtBQUFDQztBQUFELE1BQWFGLEdBQUcsQ0FBQ0csSUFBdkI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsTUFBTVYsTUFBTSxDQUFDVyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsTUFBekIsQ0FBZ0M7QUFDbERDLHdCQUFvQixFQUFFLENBQUMsTUFBRCxDQUQ0QjtBQUVsREMsY0FBVSxFQUFFLENBQUM7QUFDVEMsV0FBSyxFQUFFZCxPQUFPLENBQUNDLEdBQVIsQ0FBWWMsUUFEVjtBQUVUVDtBQUZTLEtBQUQsQ0FGc0M7QUFNbERVLFFBQUksRUFBRSxTQU40QztBQU9sREMsZUFBVyxFQUFHLEdBQUViLEdBQUcsQ0FBQ2MsT0FBSixDQUFZQyxNQUFPLDBDQVBlO0FBUWxEQyxjQUFVLEVBQUcsR0FBRWhCLEdBQUcsQ0FBQ2MsT0FBSixDQUFZQyxNQUFPO0FBUmdCLEdBQWhDLENBQXRCO0FBVUFkLEtBQUcsQ0FBQ2dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxhQUFTLEVBQUVmLE9BQU8sQ0FBQ2dCO0FBQXBCLEdBQXJCO0FBQ0gsQ0FiRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jaGVja291dC9zZXNzaW9uLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlfSBmcm9tIFwibmV4dFwiXG5cbmltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVksIHtcbiAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHtxdWFudGl0eX0gPSByZXEuYm9keTtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcbiAgICAgICAgbGluZV9pdGVtczogW3tcbiAgICAgICAgICAgIHByaWNlOiBwcm9jZXNzLmVudi5QUklDRV9JRCxcbiAgICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgIH1dLFxuICAgICAgICBtb2RlOiAncGF5bWVudCcsXG4gICAgICAgIHN1Y2Nlc3NfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L3Jlc3VsdD9zZXNzaW9uX2lkPXtDSEVDS09VVF9TRVNTSU9OX0lEfWAsXG4gICAgICAgIGNhbmNlbF91cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vY2hlY2tvdXRgLFxuICAgIH0pXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Nlc3Npb25JZDogc2Vzc2lvbi5pZH0pXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/checkout/session.ts\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ })

/******/ });