webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./style.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css);"]);
// Module
exports.push([module.i, ":root {\n  --mainPurple: #4a1962;\n  --purpleGradient: linear-gradient(\n    23deg,\n    rgba(74, 25, 98, 1) 54%,\n    rgba(33, 6, 64, 1) 100%\n  );\n  --mainWhite: #ffffff;\n  --neonGreen: #00e06d;\n  --secondaryText: #666;\n  --boxShadowGrey: #eee;\n  --mainRed: #d81159;\n  --secondaryRed: #db1f63; }\n\n@font-face {\n  font-family: \"Exo2-Regular\";\n  src: url(\"/fonts/Exo2-Regular.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: \"PlayfairDisplaySC-Bold\";\n  src: url(\"/fonts/PlayfairDisplaySC-Bold.ttf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: \"IBMPlexSans-Bold\";\n  src: url(\"/fonts/IBMPlexSans-Bold.ttf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: \"sofiapro-light.otf\";\n  src: url(\"/fonts/sofiapro-light.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: \"TTNorms-Bold.otf\";\n  src: url(\"/fonts/TTNorms-Bold.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: \"TTNorms-Medium.otf\";\n  src: url(\"/fonts/TTNorms-Medium.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: \"TTNorms-Regular.otf\";\n  src: url(\"/fonts/TTNorms-Regular.otf\") format(\"opentype\"); }\n\nbody {\n  font-family: \"Exo2-Regular\", \"Arial\", sans-serif;\n  font-family: \"sofiapro-light.otf\", \"Arial\", sans-serif;\n  font-family: \"TTNorms-Regular.otf\", \"Arial\", sans-serif;\n  display: flex;\n  flex-direction: column; }\n\nmain {\n  min-height: 100vh;\n  flex-grow: 1; }\n\n.container {\n  padding-left: 0px; }\n\n.site-header {\n  background-color: var(--mainPurple);\n  background: var(--purpleGradient);\n  margin-bottom: 20px;\n  position: relative;\n  border-bottom: 2px solid #e7e7e7c7; }\n  .site-header__listitem {\n    position: relative;\n    transition: color 500ms; }\n    .site-header__listitem::after {\n      content: \"\";\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      width: 100%;\n      height: 0.1rem;\n      background-color: var(--neonGreen);\n      transition: transform 0.2s;\n      transform: scaleX(0);\n      transform-origin: left top; }\n    .site-header__listitem:hover::after {\n      transform: scaleX(1); }\n    @media (min-width: 960px) {\n      .site-header__listitem:hover {\n        text-decoration: none; } }\n  .site-header__list-item-wrapper {\n    display: flex;\n    justify-content: space-around;\n    width: 250px; }\n  .site-header__brand-wrapper {\n    padding: 20px; }\n  .site-header__brand-name {\n    color: #fff;\n    font-size: 1.5rem;\n    padding: 0;\n    margin: 0;\n    font-family: Arial; }\n    .site-header__brand-name:hover {\n      cursor: pointer; }\n    @media (max-width: 960px) {\n      .site-header__brand-name {\n        font-size: 1rem;\n        visibility: visible; } }\n  .site-header__brand {\n    color: #fff;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    display: none; }\n  .site-header__brand--logo {\n    padding-right: 10px;\n    width: 70px;\n    height: 70px; }\n  .site-header__menu-icon {\n    position: absolute;\n    right: 80px;\n    width: 25px;\n    height: 18px;\n    top: 50%;\n    transform: translateY(-50%); }\n    .site-header__menu-icon:hover {\n      cursor: pointer; }\n    .site-header__menu-icon--close-x::before {\n      transform: rotate(45deg); }\n    .site-header__menu-icon--close-x .site-header__menu-icon__middle {\n      opacity: 0; }\n    .site-header__menu-icon--close-x::after {\n      transform: rotate(-45deg) translateY(1px); }\n    .site-header__menu-icon::before {\n      content: \"\";\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      top: 0;\n      transform-origin: 0 0;\n      transition: 300ms ease-out; }\n    .site-header__menu-icon__middle {\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      top: 8px;\n      transition: 300ms ease-out; }\n    .site-header__menu-icon::after {\n      content: \"\";\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      bottom: 0;\n      transform-origin: 0 100%;\n      transition: 300ms ease-out; }\n    @media (min-width: 960px) {\n      .site-header__menu-icon {\n        display: none; } }\n  .site-header__nav-active {\n    text-decoration: underline; }\n  .site-header__nav-list {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    justify-content: space-around;\n    align-items: center; }\n    @media (max-width: 960px) {\n      .site-header__nav-list {\n        visibility: hidden; } }\n  .site-header__nav-list-item {\n    list-style-type: none; }\n  .site-header nav ul li a,\n  .site-header li {\n    color: #fff;\n    font-size: 1.2rem;\n    font-weight: bold; }\n\n.side-nav {\n  background-color: var(--secondaryRed);\n  opacity: 0.97;\n  width: 0;\n  height: 100%;\n  position: fixed;\n  top: 59px;\n  right: 0px;\n  overflow-x: hidden;\n  padding-top: 60px;\n  transition: 0.7s;\n  z-index: 1; }\n  @media (min-width: 960px) {\n    .side-nav {\n      display: none; } }\n\n.side-nav a {\n  padding: 10px 10px 10px 30px;\n  text-decoration: none;\n  font-size: 22px;\n  color: #ccc;\n  display: block;\n  transition: 0.3s; }\n  .side-nav a:hover {\n    color: #fff; }\n\n.open-side-menu {\n  width: 300px;\n  width: 80%; }\n\n.btn-close {\n  color: #000;\n  background-color: #fff;\n  position: absolute;\n  top: 60px;\n  left: 15px;\n  font-size: 36px;\n  padding: 5px 10px;\n  border-radius: 5px; }\n\n.side-nav-list-items {\n  padding: 0;\n  width: 50%;\n  margin-left: 50%; }\n  .side-nav-list-items a {\n    text-align: right;\n    border-bottom: 1px solid #fff;\n    padding-right: 50px; }\n\n.svg-wrapper {\n  position: relative;\n  top: 50%;\n  transform: translateY(-150%);\n  margin: 0 auto;\n  width: 320px; }\n\n.shape {\n  stroke-dasharray: 140 540;\n  stroke-dashoffset: -474;\n  stroke-width: 8px;\n  fill: transparent;\n  stroke: var(--neonGreen);\n  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s; }\n\n.text {\n  color: #fff;\n  top: -48px;\n  top: 0px;\n  position: relative; }\n\n.svg-wrapper:hover .shape {\n  stroke-width: 2px;\n  stroke-dashoffset: 0;\n  stroke-dasharray: 760; }\n", "",{"version":3,"sources":["style.scss"],"names":[],"mappings":"AAGA;EACE,qBAAa;EACb;;;;GAAiB;EAKjB,oBAAY;EACZ,oBAAY;EACZ,qBAAgB;EAChB,qBAAgB;EAChB,kBAAU;EACV,uBAAe,EAAA;;AAGjB;EACE,2BAA2B;EAC3B,sDAAsD,EAAA;;AAGxD;EACE,qCAAqC;EACrC,gEAAgE,EAAA;;AAElE;EACE,+BAA+B;EAC/B,0DAA0D,EAAA;;AAE5D;EACE,iCAAiC;EACjC,wDAAwD,EAAA;;AAE1D;EACE,+BAA+B;EAC/B,sDAAsD,EAAA;;AAExD;EACE,iCAAiC;EACjC,wDAAwD,EAAA;;AAE1D;EACE,kCAAkC;EAClC,yDAAyD,EAAA;;AAG3D;EAEE,gDAAgD;EAGhD,sDAAsD;EACtD,uDAAuD;EAEvD,aAAa;EACb,sBAAsB,EAAA;;AAGxB;EACE,iBAAiB;EACjB,YAAY,EAAA;;AAGd;EACE,iBAAiB,EAAA;;AAsBnB;EACE,mCAAmC;EACnC,iCAAiC;EACjC,mBAAmB;EACnB,kBAAkB;EAElB,kCAAkC,EAAA;EAElC;IACE,kBAAkB;IAClB,uBAAuB,EAAA;IAFxB;MAKG,WAAW;MAEX,kBAAkB;MAClB,aAAa;MACb,OAAO;MACP,WAAW;MACX,cAAc;MACd,kCAAkC;MAElC,0BAA0B;MAC1B,oBAAoB;MACpB,0BAA0B,EAAA;IAhB7B;MAoBG,oBAAoB,EAAA;IAEtB;MAtBD;QAwBK,qBAAqB,EAAA,EAGtB;EAIL;IAEE,aAAa;IACb,6BAA6B;IAC7B,YAAY,EAAA;EAId;IACE,aAAa,EAAA;EAGf;IACE,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,SAAS;IACT,kBAAkB,EAAA;IALnB;MAQG,eAAe,EAAA;IAEjB;MAVF;QAWI,eAAe;QACf,mBAAmB,EAAA,EAEtB;EAED;IACE,WAAW;IACX,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,aAAa,EAAA;EAGf;IACE,mBAAmB;IACnB,WAAW;IACX,YAAY,EAAA;EAGd;IACE,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,YAAY;IACZ,QAAQ;IACR,2BAA2B,EAAA;IAN5B;MASG,eAAe,EAAA;IAGhB;MAEG,wBAAwB,EAAA;IAF3B;MAKG,UAAU,EAAA;IALb;MAQG,yCAAyC,EAAA;IApB9C;MAyBG,WAAW;MACX,sBAAsB;MACtB,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,MAAM;MACN,qBAAqB;MACrB,0BAA0B,EAAA;IAG5B;MACE,sBAAsB;MACtB,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,QAAQ;MACR,0BAA0B,EAAA;IAzC7B;MA6CG,WAAW;MACX,sBAAsB;MACtB,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,SAAS;MACT,wBAAwB;MACxB,0BAA0B,EAAA;IAG5B;MAvDF;QAwDI,aAAa,EAAA,EAEhB;EAED;IACE,0BAA0B,EAAA;EAG5B;IACE,UAAU;IACV,SAAS;IACT,qBAAqB;IACrB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB,EAAA;IAEnB;MARF;QASI,kBAAkB,EAAA,EAErB;EAED;IACE,qBAAqB,EAAA;EA/JzB;;IAqKI,WAAW;IAEX,iBAAiB;IACjB,iBAAiB,EAAA;;AAOrB;EACE,qCAAqC;EACrC,aAAa;EACb,QAAQ;EACR,YAAY;EACZ,eAAe;EACf,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,UAAU,EAAA;EAEV;IAbF;MAcI,aAAa,EAAA,EAEhB;;AAED;EACE,4BAA4B;EAC5B,qBAAqB;EACrB,eAAe;EACf,WAAW;EACX,cAAc;EACd,gBAAgB,EAAA;EANlB;IASI,WAAW,EAAA;;AAIf;EACE,YAAY;EACZ,UAAU,EAAA;;AAGZ;EACE,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,eAAe;EACf,iBAAiB;EACjB,kBAAkB,EAAA;;AAGpB;EACE,UAAU;EACV,UAAU;EACV,gBAAgB,EAAA;EAHlB;IAOI,iBAAiB;IACjB,6BAA6B;IAC7B,mBAAmB,EAAA;;AAgBvB;EACE,kBAAkB;EAClB,QAAQ;EACR,4BAA4B;EAC5B,cAAc;EACd,YAAY,EAAA;;AAEd;EACE,yBAAyB;EACzB,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EAExB,sEAAsE,EAAA;;AAExE;EAKE,WAAW;EACX,UAAU;EACV,QAAQ;EACR,kBAAkB,EAAA;;AAEpB;EACE,iBAAiB;EACjB,oBAAoB;EACpB,qBAAqB,EAAA","file":"style.scss","sourcesContent":["@import url(\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\");\n// @import \"base/baseline\";\n\n:root {\n  --mainPurple: #4a1962;\n  --purpleGradient: linear-gradient(\n    23deg,\n    rgba(74, 25, 98, 1) 54%,\n    rgba(33, 6, 64, 1) 100%\n  );\n  --mainWhite: #ffffff;\n  --neonGreen: #00e06d;\n  --secondaryText: #666;\n  --boxShadowGrey: #eee;\n  --mainRed: #d81159;\n  --secondaryRed: #db1f63;\n}\n\n@font-face {\n  font-family: \"Exo2-Regular\";\n  src: url(\"/fonts/Exo2-Regular.otf\") format(\"opentype\");\n}\n\n@font-face {\n  font-family: \"PlayfairDisplaySC-Bold\";\n  src: url(\"/fonts/PlayfairDisplaySC-Bold.ttf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"IBMPlexSans-Bold\";\n  src: url(\"/fonts/IBMPlexSans-Bold.ttf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"sofiapro-light.otf\";\n  src: url(\"/fonts/sofiapro-light.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TTNorms-Bold.otf\";\n  src: url(\"/fonts/TTNorms-Bold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TTNorms-Medium.otf\";\n  src: url(\"/fonts/TTNorms-Medium.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TTNorms-Regular.otf\";\n  src: url(\"/fonts/TTNorms-Regular.otf\") format(\"opentype\");\n}\n\nbody {\n  //   font-family: \"CaslonGraD\", \"Arial\", sans-serif;\n  font-family: \"Exo2-Regular\", \"Arial\", sans-serif;\n  //   font-family: \"PlayfairDisplaySC-Bold\", \"Arial\", sans-serif;\n  //   font-family: \"IBMPlexSans-Bold\", \"Arial\", sans-serif;\n  font-family: \"sofiapro-light.otf\", \"Arial\", sans-serif;\n  font-family: \"TTNorms-Regular.otf\", \"Arial\", sans-serif;\n  //   font-weight: 900;\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  min-height: 100vh;\n  flex-grow: 1;\n}\n\n.container {\n  padding-left: 0px;\n}\n\n// @define-mixin atSmall {\n//   @media (min-width: 530px) {\n//     @mixin-content;\n//   }\n// }\n\n// @define-mixin atSmallMedium {\n//   @media (min-width: 767px) {\n//     @mixin-content;\n//   }\n// }\n\n// @define-mixin atMedium {\n//   @media (min-width: 960px) {\n//     @mixin-content;\n//   }\n// }\n\n// NAV STYLES\n.site-header {\n  background-color: var(--mainPurple);\n  background: var(--purpleGradient);\n  margin-bottom: 20px;\n  position: relative;\n  //   font-family: Tahoma;\n  border-bottom: 2px solid #e7e7e7c7;\n\n  &__listitem {\n    position: relative;\n    transition: color 500ms;\n\n    &::after {\n      content: \"\";\n      //   color: white;\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      width: 100%;\n      height: 0.1rem;\n      background-color: var(--neonGreen);\n      //   background-color: var(--secondaryRed);\n      transition: transform 0.2s;\n      transform: scaleX(0);\n      transform-origin: left top;\n    }\n\n    &:hover::after {\n      transform: scaleX(1);\n    }\n    @media (min-width: 960px) {\n      &:hover {\n        text-decoration: none;\n        // color: var(--neonGreen);\n        // color: var(--secondaryRed);\n      }\n    }\n  }\n\n  &__list-item-wrapper {\n    // @media (min-width: 960px) {\n    display: flex;\n    justify-content: space-around;\n    width: 250px;\n    // }\n  }\n\n  &__brand-wrapper {\n    padding: 20px;\n  }\n\n  &__brand-name {\n    color: #fff;\n    font-size: 1.5rem;\n    padding: 0;\n    margin: 0;\n    font-family: Arial;\n\n    &:hover {\n      cursor: pointer;\n    }\n    @media (max-width: 960px) {\n      font-size: 1rem;\n      visibility: visible;\n    }\n  }\n\n  &__brand {\n    color: #fff;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    display: none;\n  }\n\n  &__brand--logo {\n    padding-right: 10px;\n    width: 70px;\n    height: 70px;\n  }\n\n  &__menu-icon {\n    position: absolute;\n    right: 80px;\n    width: 25px;\n    height: 18px;\n    top: 50%;\n    transform: translateY(-50%);\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    &--close-x {\n      &::before {\n        transform: rotate(45deg);\n      }\n      .site-header__menu-icon__middle {\n        opacity: 0;\n      }\n      &::after {\n        transform: rotate(-45deg) translateY(1px);\n      }\n    }\n\n    &::before {\n      content: \"\";\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      top: 0;\n      transform-origin: 0 0;\n      transition: 300ms ease-out;\n    }\n\n    &__middle {\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      top: 8px;\n      transition: 300ms ease-out;\n    }\n\n    &::after {\n      content: \"\";\n      background-color: #fff;\n      position: absolute;\n      width: 25px;\n      height: 2px;\n      bottom: 0;\n      transform-origin: 0 100%;\n      transition: 300ms ease-out;\n    }\n\n    @media (min-width: 960px) {\n      display: none;\n    }\n  }\n\n  &__nav-active {\n    text-decoration: underline;\n  }\n\n  &__nav-list {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    // border: 10px solid #000;\n    @media (max-width: 960px) {\n      visibility: hidden;\n    }\n  }\n\n  &__nav-list-item {\n    list-style-type: none;\n  }\n\n  nav ul li a,\n  li {\n    // padding: 30px;\n    color: #fff;\n\n    font-size: 1.2rem;\n    font-weight: bold;\n    &:hover {\n      //   text-decoration: underline;\n    }\n  }\n}\n\n.side-nav {\n  background-color: var(--secondaryRed);\n  opacity: 0.97;\n  width: 0;\n  height: 100%;\n  position: fixed;\n  top: 59px;\n  right: 0px;\n  overflow-x: hidden;\n  padding-top: 60px;\n  transition: 0.7s;\n  z-index: 1;\n\n  @media (min-width: 960px) {\n    display: none;\n  }\n}\n\n.side-nav a {\n  padding: 10px 10px 10px 30px;\n  text-decoration: none;\n  font-size: 22px;\n  color: #ccc;\n  display: block;\n  transition: 0.3s;\n\n  &:hover {\n    color: #fff;\n  }\n}\n\n.open-side-menu {\n  width: 300px;\n  width: 80%;\n}\n\n.btn-close {\n  color: #000;\n  background-color: #fff;\n  position: absolute;\n  top: 60px;\n  left: 15px;\n  font-size: 36px;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.side-nav-list-items {\n  padding: 0;\n  width: 50%;\n  margin-left: 50%;\n  //   border: 1px solid #000;\n\n  a {\n    text-align: right;\n    border-bottom: 1px solid #fff;\n    padding-right: 50px;\n\n    // &:hover {\n    //   text-decoration: none;\n    //   color: var(--neonGreen);\n    // }\n  }\n}\n\nhtml,\nbody {\n  //   background: rgb(20, 20, 20);\n  //   text-align: center;\n  //   height: 100%;\n  //   overflow: hidden;\n}\n.svg-wrapper {\n  position: relative;\n  top: 50%;\n  transform: translateY(-150%);\n  margin: 0 auto;\n  width: 320px;\n}\n.shape {\n  stroke-dasharray: 140 540;\n  stroke-dashoffset: -474;\n  stroke-width: 8px;\n  fill: transparent;\n  stroke: var(--neonGreen);\n  //   border-bottom: 5px solid black;\n  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;\n}\n.text {\n  //   font-family: \"Roboto Condensed\";\n  //   font-size: 22px;\n  //   line-height: 32px;\n  //   letter-spacing: 8px;\n  color: #fff;\n  top: -48px;\n  top: 0px;\n  position: relative;\n}\n.svg-wrapper:hover .shape {\n  stroke-width: 2px;\n  stroke-dashoffset: 0;\n  stroke-dasharray: 760;\n}\n"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.aec16e0b20447b4c8284.hot-update.js.map