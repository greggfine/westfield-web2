(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"===typeof Symbol&&"symbol"===c(Symbol.iterator)?function(e){return c(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":c(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?u(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}var d=n("q1tI"),m=n.n(d),v=n("8Bbg"),y=n.n(v),b=n("rePB"),g=n("YFqc"),w=n.n(g),F=m.a.createElement,k=function(e){function t(e){var n;return a(this,t),n=p(this,f(t).call(this,e)),Object(b.a)(u(n),"handleClick",(function(){n.setState({isOpen:!n.state.isOpen,isSideMenuOpen:!n.state.isSideMenuOpen})})),n.state={isOpen:!0,isSideMenuOpen:!1,hasScrolled:!1},n}return h(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){window.scrollY>20&&e.setState({hasScrolled:!0}),window.scrollY<20&&e.setState({hasScrolled:!1})}))}},{key:"render",value:function(){return F("header",{className:this.state.hasScrolled?"site-header":"site-header-init"},F("div",{className:this.state.isOpen?"site-header__menu-icon":"site-header__menu-icon site-header__menu-icon--close-x",id:"menu-icon",onClick:this.handleClick},F("div",{className:"site-header__menu-icon__middle"})),F("div",{id:"side-menu",className:this.state.isSideMenuOpen?"side-nav open-side-menu":"side-nav"},F("ul",{className:"side-nav-list-items"},F(w.a,{href:"/"},F("a",{className:"site-header__listitem",onClick:this.handleClick},"Home")),F(w.a,{href:"/portfolio"},F("a",{className:"site-header__listitem",onClick:this.handleClick},"Portfolio")),F(w.a,{href:"/contact"},F("a",{className:"site-header__listitem",onClick:this.handleClick},"Contact")))),F("div",{className:"content-sizer"},F("nav",{className:"site-header__nav"},F("ul",{className:"site-header__nav-list"},F("div",{className:"site-header__brand-wrapper"},F(w.a,{href:"/"},F("div",{className:this.state.hasScrolled?"site-header__brand-name":"site-header__brand-name-init"},F("div",{className:"site-header__brand-wrapper__line"}),F("div",{className:"site-header__brand-name__the"},"The"),F("div",{className:"site-header__brand-name__fine-web"},"Fine Web")))),F("div",{className:"site-header__list-item-wrapper"},F("li",{className:"site-header__nav-list-item"},F(w.a,{href:"/portfolio"},F("a",{className:"site-header__listitem"},"Portfolio"))),F("li",null,F(w.a,{href:"/contact"},F("a",{className:"site-header__listitem"},"Contact"))))))))}}]),t}(m.a.Component),N=n("3Nti"),C=n.n(N),P=m.a.createElement,O=function(){return P("footer",{className:C.a.Footer},P("div",{className:C.a.Footer__logoWrapper},P("img",{className:C.a.Footer__image,src:"/the-fine-web.png",alt:""})),P("div",{className:C.a.Footer__inner},P("p",{className:C.a.Footer__copyright},"\xa92020 The Fine Web"),P("div",{className:C.a.Footer__social},P("a",{href:"https://twitter.com/GreggFine",target:"_blank",className:C.a.Footer__socialLink},P("i",{className:"fa fa-twitter"})),P("a",{href:"https://www.youtube.com/channel/UCmOpHGj4JRWCdXhllVTZCVw/videos",target:"_blank",className:C.a.Footer__socialLink},P("i",{className:"fa fa-youtube"})),P("a",{href:"https://www.instagram.com/greggfinedev/",target:"_blank",className:C.a.Footer__socialLink},P("i",{className:"fa fa-instagram"})))))},S=(n("h3ov"),m.a.createElement),E=function(e){function t(){return a(this,t),p(this,f(t).apply(this,arguments))}return h(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return S(m.a.Fragment,null,S(k,null),S(t,n),S(O,null))}}],[{key:"getInitialProps",value:function(e){var t,n,r;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.Component,n=e.ctx,r={},!t.getInitialProps){a.next=6;break}return a.next=5,o.a.awrap(t.getInitialProps(n));case 5:r=a.sent;case 6:return a.abrupt("return",{pageProps:r});case 7:case"end":return a.stop()}}),null,null,null,Promise)}}]),t}(y.a);t.default=E},"3Nti":function(e,t,n){e.exports={Footer:"Footer_Footer__2cf9C",Footer__image:"Footer_Footer__image__NKthu",Footer__circleDecoration:"Footer_Footer__circleDecoration__3dmF2",Footer__circleDecoration2:"Footer_Footer__circleDecoration2__1eWgu",Footer__box:"Footer_Footer__box__3wRBr",Footer__logoWrapper:"Footer_Footer__logoWrapper__32YX6",Footer__inner:"Footer_Footer__inner__1B1gQ",Footer__social:"Footer_Footer__social__1GwyK",Footer__socialLink:"Footer_Footer__socialLink__3ZIMn",Footer__copyright:"Footer_Footer__copyright__E0mY4",Footer__header:"Footer_Footer__header__1SWp3"}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("a1gu"),i=n("Nsbk"),s=n("7W2i"),c=n("o0o1"),l=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=h,t.default=void 0;var u=l(n("q1tI")),p=n("g/15");function f(e){var t,n,r;return c.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.Component,n=e.ctx,o.next=3,c.awrap((0,p.loadGetInitialProps)(t,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}t.AppInitialProps=p.AppInitialProps;var _=function(e){function t(){return r(this,t),a(this,i(t).apply(this,arguments))}return s(t,e),o(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return u.default.createElement(n,Object.assign({},r,o||a?{}:{url:h(t)}))}}]),t}(u.default.Component);function h(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=_,_.origGetInitialProps=f,_.getInitialProps=f},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("a1gu"),i=n("Nsbk"),s=n("7W2i"),c=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var u,p=l(n("q1tI")),f=n("QmWs"),_=n("g/15"),h=c(n("nOHt"));function d(e){return e&&"object"===typeof e?(0,_.formatWithValidation)(e):e}var m=new Map,v=window.IntersectionObserver,y={};function b(){return u||(v?u=new v((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return r(this,t),(n=a(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:d(e),as:t?d(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,s=a.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,_.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,f.resolve)(c,i),s=s?(0,f.resolve)(c,s):i,e.preventDefault();var l=n.props.scroll;null==l&&(l=s.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](i,s,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,f.resolve)(e,n);return[o,r?(0,f.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),y[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),t}(p.Component);t.default=g},h3ov:function(e,t,n){},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[[0,0,1,2]]]);