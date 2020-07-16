webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/portfolio.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/portfolio.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".portfolio_Portfolio__websites__2rPvN {\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin: 60px auto;\n  padding: 40px 0px;\n  font-size: 1.5rem;\n  width: 90%; }\n\n.portfolio_Portfolio__heading__3RS8x {\n  border: 1px solid #000;\n  background-color: #4a1962;\n  background-image: url(\"/domenico-loia-hGV2TfOh0ns-unsplash.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-blend-mode: screen;\n  width: 100vw;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.portfolio_Portfolio__title__dcCcs {\n  color: var(--secondaryRed);\n  font-weight: 700;\n  font-size: 4rem;\n  font-family: \"TTNorms-Extra-Bold.otf\";\n  text-shadow: -2px 2px 0px #5e3a3a; }\n\n.portfolio_Portfolio__subheading__1pb3A {\n  color: var(--secondaryRed);\n  font-family: \"TTNorms-Extra-Bold.otf\";\n  font-size: 2rem; }\n\n.portfolio_Portfolio__headerWrapper__13Jft {\n  padding: 20px;\n  border-radius: 5px;\n  text-align: center; }\n\n.portfolio_websitesWrapper__24lIA {\n  text-align: center; }\n\n.portfolio_wrapperHeading__1AmFl {\n  color: #d81159;\n  color: #3f224d;\n  margin-top: 60px;\n  font-size: 3rem;\n  font-weight: 900;\n  font-family: \"TTNorms-Bold.otf\";\n  font-family: \"TTNorms-Extra-Bold.otf\"; }\n", "",{"version":3,"sources":["portfolio.module.scss"],"names":[],"mappings":"AACE;EACE,qBAAqB;EACrB,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,UAAU,EAAA;;AAGZ;EACE,sBAAsB;EACtB,yBAAyB;EAEzB,gEAAgE;EAChE,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,6BAA6B;EAE7B,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAA;;AAGzB;EAEE,0BAA0B;EAE1B,gBAAgB;EAChB,eAAe;EACf,qCAAqC;EACrC,iCAAiC,EAAA;;AAMnC;EAEE,0BAA0B;EAC1B,qCAAqC;EACrC,eAAe,EAAA;;AAKjB;EAEE,aAAa;EACb,kBAAkB;EAClB,kBAAkB,EAAA;;AAMtB;EAEE,kBAAkB,EAAA;;AAGpB;EACE,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAIhB,+BAA+B;EAC/B,qCAAqC,EAAA","file":"portfolio.module.scss","sourcesContent":[".Portfolio {\n  &__websites {\n    list-style-type: none;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin: 60px auto;\n    padding: 40px 0px;\n    font-size: 1.5rem;\n    width: 90%;\n  }\n\n  &__heading {\n    border: 1px solid #000;\n    background-color: #4a1962;\n    // background-color: #1f062c;\n    background-image: url(\"/domenico-loia-hGV2TfOh0ns-unsplash.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    background-blend-mode: screen;\n    // filter: grayscale(70%);\n    width: 100vw;\n    height: 400px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &__title {\n    // color: #d81159;\n    color: var(--secondaryRed);\n    // color: #3f224d;\n    font-weight: 700;\n    font-size: 4rem;\n    font-family: \"TTNorms-Extra-Bold.otf\";\n    text-shadow: -2px 2px 0px #5e3a3a;\n\n    // -webkit-text-stroke-width: 1px;\n    // -webkit-text-stroke-color: black;\n  }\n\n  &__subheading {\n    // color: #d81159;\n    color: var(--secondaryRed);\n    font-family: \"TTNorms-Extra-Bold.otf\";\n    font-size: 2rem;\n    // -webkit-text-stroke-width: 0.5px;\n    // -webkit-text-stroke-color: black;\n  }\n\n  &__headerWrapper {\n    // background-color: rgba(255, 255, 255, 0.7);\n    padding: 20px;\n    border-radius: 5px;\n    text-align: center;\n\n    // border: 10px solid #000;\n  }\n}\n\n.websitesWrapper {\n  //   border: 1px solid #000;\n  text-align: center;\n}\n\n.wrapperHeading {\n  color: #d81159;\n  color: #3f224d;\n  margin-top: 60px;\n  font-size: 3rem;\n  font-weight: 900;\n  //   width: 300px;\n  //   margin: 60px auto;\n  //   border-bottom: 5px solid var(--neonGreen);\n  font-family: \"TTNorms-Bold.otf\";\n  font-family: \"TTNorms-Extra-Bold.otf\";\n}\n"]}]);
// Exports
exports.locals = {
	"Portfolio__websites": "portfolio_Portfolio__websites__2rPvN",
	"Portfolio__heading": "portfolio_Portfolio__heading__3RS8x",
	"Portfolio__title": "portfolio_Portfolio__title__dcCcs",
	"Portfolio__subheading": "portfolio_Portfolio__subheading__1pb3A",
	"Portfolio__headerWrapper": "portfolio_Portfolio__headerWrapper__13Jft",
	"websitesWrapper": "portfolio_websitesWrapper__24lIA",
	"wrapperHeading": "portfolio_wrapperHeading__1AmFl"
};

/***/ })

})
//# sourceMappingURL=portfolio.js.8eca296b321e4959be4c.hot-update.js.map