(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)})(e)}function l(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=n("q1tI"),f=n.n(p),d=n("8Bbg"),h=n.n(d),v=n("MX0m"),b=n.n(v),m=n("wx14"),y=n("zLVn"),g=n("TSYQ"),x=n.n(g),E=n("JCAc"),O=n("YdCC"),j=n("vUet"),w=f.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,o=Object(y.a)(e,["bsPrefix","className","as"]);n=Object(j.b)(n,"navbar-brand");var i=a||(o.href?"a":"span");return f.a.createElement(i,Object(m.a)({},o,{ref:t,className:x()(r,n)}))}));w.displayName="NavbarBrand";var C=w,S=n("dI71"),N=n("7j6X"),k=n("YECM"),P=(n("17x9"),n("i8i4")),T=n.n(P),I=!1,q=f.a.createContext(null),_="unmounted",D="exited",R="entering",M="entered",A=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=D,r.appearStatus=R):a=M:a=t.unmountOnExit||t.mountOnEnter?_:D,r.state={status:a},r.nextCallback=null,r}Object(S.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===_?{status:D}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==R&&n!==M&&(t=R):n!==R&&n!==M||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=T.a.findDOMNode(this);t===R?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===D&&this.setState({status:_})},n.performEnter=function(e,t){var n=this,r=this.props.enter,a=this.context?this.context.isMounting:t,o=this.getTimeouts(),i=a?o.appear:o.enter;!t&&!r||I?this.safeSetState({status:M},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,a),this.safeSetState({status:R},(function(){n.props.onEntering(e,a),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:M},(function(){n.props.onEntered(e,a)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n&&!I?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:D},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:D},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===_)return null;var t=this.props,n=t.children,r=Object(y.a)(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"===typeof n)return f.a.createElement(q.Provider,{value:null},n(e,r));var a=f.a.Children.only(n);return f.a.createElement(q.Provider,{value:null},f.a.cloneElement(a,r))},t}(f.a.Component);function L(){}A.contextType=q,A.propTypes={},A.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:L,onEntering:L,onEntered:L,onExit:L,onExiting:L,onExited:L},A.UNMOUNTED=0,A.EXITED=1,A.ENTERING=2,A.ENTERED=3,A.EXITING=4;var U,K=A,F=n("Qg85"),B=n("z+q/"),V={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var W=((U={})[D]="collapse",U.exiting="collapsing",U[R]="collapsing",U[M]="collapse show",U),z={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=V[e];return n+parseInt(Object(N.a)(t,r[0]),10)+parseInt(Object(N.a)(t,r[1]),10)}},H=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",Object(B.a)(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(S.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,r=t.onEntering,a=t.onEntered,o=t.onExit,i=t.onExiting,s=t.className,l=t.children,c=Object(y.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete c.dimension,delete c.getDimensionValue;var u=Object(F.a)(this.handleEnter,n),p=Object(F.a)(this.handleEntering,r),d=Object(F.a)(this.handleEntered,a),h=Object(F.a)(this.handleExit,o),v=Object(F.a)(this.handleExiting,i);return f.a.createElement(K,Object(m.a)({addEndListener:k.a},c,{"aria-expanded":c.role?c.in:null,onEnter:u,onEntering:p,onEntered:d,onExit:h,onExiting:v}),(function(t,n){return f.a.cloneElement(l,Object(m.a)({},n,{className:x()(s,l.props.className,W[t],"width"===e.getDimension()&&"width")}))}))},t}(f.a.Component);H.defaultProps=z;var G=H,J=f.a.createContext(null),Q=f.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=Object(y.a)(e,["children","bsPrefix"]);return r=Object(j.b)(r,"navbar-collapse"),f.a.createElement(J.Consumer,null,(function(e){return f.a.createElement(G,Object(m.a)({in:!(!e||!e.expanded)},a),f.a.createElement("div",{ref:t,className:r},n))}))}));Q.displayName="NavbarCollapse";var Y=Q,X=n("ZCiN"),Z=f.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.label,i=e.as,s=void 0===i?"button":i,l=e.onClick,c=Object(y.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(j.b)(n,"navbar-toggler");var u=Object(p.useContext)(J)||{},d=u.onToggle,h=u.expanded,v=Object(X.a)((function(e){l&&l(e),d&&d()}));return"button"===s&&(c.type="button"),f.a.createElement(s,Object(m.a)({},c,{ref:t,onClick:v,"aria-label":o,className:x()(r,n,!h&&"collapsed")}),a||f.a.createElement("span",{className:n+"-icon"}))}));Z.displayName="NavbarToggle",Z.defaultProps={label:"Toggle navigation"};var $=Z,ee=n("ILyh"),te=f.a.forwardRef((function(e,t){var n=Object(E.b)(e,{expanded:"onToggle"}),r=n.bsPrefix,a=n.expand,o=n.variant,i=n.bg,s=n.fixed,l=n.sticky,c=n.className,u=n.children,d=n.as,h=void 0===d?"nav":d,v=n.expanded,b=n.onToggle,g=n.onSelect,O=n.collapseOnSelect,w=Object(y.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);r=Object(j.b)(r,"navbar");var C=Object(p.useCallback)((function(){g&&g.apply(void 0,arguments),O&&v&&b(!1)}),[g,O,v,b]);void 0===w.role&&"nav"!==h&&(w.role="navigation");var S=r+"-expand";"string"===typeof a&&(S=S+"-"+a);var N=Object(p.useMemo)((function(){return{onToggle:function(){return b(!v)},bsPrefix:r,expanded:v}}),[r,v,b]);return f.a.createElement(J.Provider,{value:N},f.a.createElement(ee.a.Provider,{value:C},f.a.createElement(h,Object(m.a)({ref:t},w,{className:x()(c,r,a&&S,o&&r+"-"+o,i&&"bg-"+i,l&&"sticky-"+l,s&&"fixed-"+s)}),u)))}));te.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},te.displayName="Navbar",te.Brand=C,te.Toggle=$,te.Collapse=Y,te.Text=Object(O.a)("navbar-text",{Component:"span"});var ne=te,re=(n("K9S6"),n("Wzyw")),ae=n("rQNl"),oe=f.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.as,i=void 0===o?"div":o,s=Object(y.a)(e,["bsPrefix","className","children","as"]);return n=Object(j.b)(n,"nav-item"),f.a.createElement(i,Object(m.a)({},s,{ref:t,className:x()(r,n)}),a)}));oe.displayName="NavItem";var ie=oe,se=n("dbZe"),le=n("VWqr"),ce={disabled:!1,as:se.a},ue=f.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,a=e.className,o=e.href,i=e.eventKey,s=e.onSelect,l=e.as,c=Object(y.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(j.b)(n,"nav-link"),f.a.createElement(le.a,Object(m.a)({},c,{href:o,ref:t,eventKey:i,as:l,disabled:r,onSelect:s,className:x()(a,n,r&&"disabled")}))}));ue.displayName="NavLink",ue.defaultProps=ce;var pe=ue,fe=f.a.forwardRef((function(e,t){var n,r,a,o=Object(E.b)(e,{activeKey:"onSelect"}),i=o.as,s=void 0===i?"div":i,l=o.bsPrefix,c=o.variant,u=o.fill,d=o.justify,h=o.navbar,v=o.className,b=o.children,g=o.activeKey,O=Object(y.a)(o,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);l=Object(j.b)(l,"nav");var w=Object(p.useContext)(J),C=Object(p.useContext)(re.a);return w?(r=w.bsPrefix,h=null==h||h):C&&(a=C.cardHeaderBsPrefix),f.a.createElement(ae.a,Object(m.a)({as:s,ref:t,activeKey:g,className:x()(v,(n={},n[l]=!h,n[r+"-nav"]=h,n[a+"-"+c]=!!a,n[l+"-"+c]=!!c,n[l+"-fill"]=u,n[l+"-justified"]=d,n))},O),b)}));fe.displayName="Nav",fe.defaultProps={justify:!1,fill:!1},fe.Item=ie,fe.Link=pe;var de=fe,he=n("7vrA"),ve=n("YFqc"),be=n.n(ve),me=f.a.createElement;var ye=function(){return me(f.a.Fragment,null,me(ne,{expand:"lg",style:{backgroundColor:"#0288d1"}},me(he.a,null,me(ne.Brand,{href:"#home"},me(be.a,{href:"/"},me("a",{style:{marginRight:"60px"},className:"jsx-778509005"},"Gregg Fine Web Development"))),me(ne.Toggle,{"aria-controls":"basic-navbar-nav"}),me(ne.Collapse,{id:"basic-navbar-nav"},me(de,{className:"mr-auto"},me(be.a,{href:"/services"},me("a",{style:{marginRight:"40px"},className:"jsx-778509005"},"Services")),me(be.a,{href:"/portfolio"},me("a",{className:"jsx-778509005"},"Portfolio")))))),me(b.a,{id:"778509005"},["a.jsx-778509005{-webkit-text-decoration:none;text-decoration:none;font-size:20px;color:#fff;}","a.jsx-778509005:hover{-webkit-transition:color 300ms;transition:color 300ms;color:#0288d1;}"]))},ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var xe=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,n));return r.determineState=function(){var e=window.pageYOffset+window.innerHeight,t=document.body.clientHeight-r.props.bottomThreshold;!r.state.isAtBottom&&e>=t?(r.setState({isAtBottom:!0}),r.props.onFooterStateChange&&r.props.onFooterStateChange(!0)):r.state.isAtBottom&&e<t-t*r.props.stickAtMultiplier&&(r.setState({isAtBottom:!1}),r.props.onFooterStateChange&&r.props.onFooterStateChange(!1))},r.handleScroll=function(){r.determineState()},r.state={isAtBottom:!1},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;this.observer=new MutationObserver((function(t){var n=t[t.length-1].target.clientHeight;n+(document.body.clientHeight-n)>window.innerHeight?e.determineState():(e.setState({isAtBottom:!0}),e.props.onFooterStateChange&&e.props.onFooterStateChange(!0))})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),window.addEventListener("scroll",this.handleScroll),this.determineState()},t.prototype.componentWillUnmount=function(){this.observer.disconnect(),window.removeEventListener("scroll",this.handleScroll)},t.prototype.render=function(){var e=ge({},this.props.stickyStyles,{position:"fixed",bottom:0}),t=ge({},this.props.normalStyles,{position:"static"});return f.a.createElement("div",null,f.a.createElement("div",{style:t},this.props.children),!this.state.isAtBottom&&f.a.createElement("div",{style:e},this.props.children))},t}(p.Component);xe.propTypes={},xe.defaultProps={bottomThreshold:0,stickAtMultiplier:.001,stickyStyles:{},normalStyles:{}};n("MV5A");var Ee=f.a.createElement,Oe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,c(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,i=[{key:"getInitialProps",value:function(e){var t,n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=e.Component,n=e.ctx,r={},!t.getInitialProps){o.next=6;break}return o.next=5,a.a.awrap(t.getInitialProps(n));case 5:r=o.sent;case 6:return o.abrupt("return",{pageProps:r});case 7:case"end":return o.stop()}}),null,null,null,Promise)}}],(r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return Ee(f.a.Fragment,null,Ee(ye,null),Ee(t,n),Ee(xe,{bottomThreshold:50,normalStyles:{backgroundColor:"#999999",padding:"2rem"},stickyStyles:{backgroundColor:"rgba(255,255,255,.8)",padding:"2rem"}},Ee("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus facere molestiae rem quibusdam, architecto saepe dolor minima quisquam eaque inventore recusandae enim laudantium esse maxime earum voluptate! Voluptates iusto saepe distinctio quaerat dolorum quos, optio consequuntur provident veniam aut accusamus dolore, ipsa obcaecati harum labore voluptatem! Fugit illo aperiam, atque dolorem quisquam mollitia provident officiis omnis iusto! Asperiores dolorem nemo quaerat, consectetur sequi praesentium amet doloremque? Nesciunt totam sit aliquam cumque qui delectus vel perspiciatis id maxime, beatae optio voluptatem distinctio. Quod cupiditate, quae repudiandae, a eaque possimus veniam eos recusandae, vel nisi alias nemo tenetur. Deserunt, earum hic.")))}}])&&o(n.prototype,r),i&&o(n,i),t}(h.a);t.default=Oe},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("a1gu"),i=n("Nsbk"),s=n("7W2i"),l=n("o0o1"),c=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=h,t.default=void 0;var u=c(n("q1tI")),p=n("g/15");function f(e){var t,n,r;return l.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.Component,n=e.ctx,a.next=3,l.awrap((0,p.loadGetInitialProps)(t,n));case 3:return r=a.sent,a.abrupt("return",{pageProps:r});case 5:case"end":return a.stop()}}),null,null,null,Promise)}t.AppInitialProps=p.AppInitialProps;var d=function(e){function t(){return r(this,t),o(this,i(t).apply(this,arguments))}return s(t,e),a(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=e.__N_SSG,o=e.__N_SSP;return u.default.createElement(n,Object.assign({},r,a||o?{}:{url:h(t)}))}}]),t}(u.default.Component);function h(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",a=n||t;return e.push(r,a)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",a=n||t;return e.replace(r,a)}}}t.default=d,d.origGetInitialProps=f,d.getInitialProps=f},F9IU:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);t.a=a},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},ILyh:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n("q1tI"),a=n.n(r).a.createContext(),o=function(e,t){return null!=e?String(e):t||null};t.a=a},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}))};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},MV5A:function(e,t,n){},VWqr:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),l=n.n(s),c=n("ZCiN"),u=n("F9IU"),p=n("ILyh"),f=l.a.forwardRef((function(e,t){var n=e.active,o=e.className,f=e.tabIndex,d=e.eventKey,h=e.onSelect,v=e.onClick,b=e.as,m=Object(a.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),y=Object(p.b)(d,m.href),g=Object(s.useContext)(p.a),x=Object(s.useContext)(u.a),E=n;x&&(m.role||"tablist"!==x.role||(m.role="tab"),m["data-rb-event-key"]=y,m.id=x.getControllerId(y),m["aria-controls"]=x.getControlledId(y),E=null==n&&null!=y?x.activeKey===y:n),"tab"===m.role&&(m.tabIndex=E?f:-1,m["aria-selected"]=E);var O=Object(c.a)((function(e){v&&v(e),null!=y&&(h&&h(y,e),g&&g(y,e))}));return l.a.createElement(b,Object(r.a)({},m,{ref:t,onClick:O,className:i()(o,E&&"active")}))}));f.defaultProps={disabled:!1},t.a=f},Wzyw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=a.a.createContext(null)},YFqc:function(e,t,n){e.exports=n("cTJO")},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("a1gu"),i=n("Nsbk"),s=n("7W2i"),l=n("TqRt"),c=n("284h");t.__esModule=!0,t.default=void 0;var u,p=c(n("q1tI")),f=n("QmWs"),d=n("g/15"),h=l(n("nOHt"));function v(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var b=new Map,m=window.IntersectionObserver,y={};function g(){return u||(m?u=new m((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){function t(e){var n;return r(this,t),(n=o(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}((function(e,t){return{href:v(e),as:t?v(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,a=t.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),i=o.href,s=o.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=(0,f.resolve)(l,i),s=s?(0,f.resolve)(l,s):i,e.preventDefault();var c=n.props.scroll;null==c&&(c=s.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](i,s,{shallow:n.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,f.resolve)(e,n);return[a,r?(0,f.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),y[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),t}(p.Component);t.default=x},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var s=a||"<<anonymous>>",l=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+s+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),p=6;p<c;p++)u[p-6]=arguments[p];return e.apply(void 0,[n,r,s,o,l].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},rQNl:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=Function.prototype.bind.call(Function.prototype.call,[].slice);var i=n("q1tI"),s=n.n(i);var l=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var c=function(e,t){return Object(i.useMemo)((function(){return function(e,t){var n=l(e),r=l(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},u=n("F9IU"),p=n("ILyh"),f=s.a.createContext(null),d=function(){},h=s.a.forwardRef((function(e,t){var n,l,h=e.as,v=void 0===h?"ul":h,b=e.onSelect,m=e.activeKey,y=e.role,g=e.onKeyDown,x=Object(a.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(i.useReducer)((function(e){return!e}),!1)[1],O=Object(i.useRef)(!1),j=Object(i.useContext)(p.a),w=Object(i.useContext)(f);w&&(y=y||"tablist",m=w.activeKey,n=w.getControlledId,l=w.getControllerId);var C=Object(i.useRef)(null),S=function(e){if(!C.current)return null;var t,n,r=(t=C.current,n="[data-rb-event-key]:not(.disabled)",o(t.querySelectorAll(n))),a=C.current.querySelector(".active"),i=r.indexOf(a);if(-1===i)return null;var s=i+e;return s>=r.length&&(s=0),s<0&&(s=r.length-1),r[s]},N=function(e,t){null!=e&&(b&&b(e,t),j&&j(e,t))};Object(i.useEffect)((function(){if(C.current&&O.current){var e=C.current.querySelector("[data-rb-event-key].active");e&&e.focus()}O.current=!1}));var k=c(t,C);return s.a.createElement(p.a.Provider,{value:N},s.a.createElement(u.a.Provider,{value:{role:y,activeKey:Object(p.b)(m),getControlledId:n||d,getControllerId:l||d}},s.a.createElement(v,Object(r.a)({},x,{onKeyDown:function(e){var t;switch(g&&g(e),e.key){case"ArrowLeft":case"ArrowUp":t=S(-1);break;case"ArrowRight":case"ArrowDown":t=S(1);break;default:return}t&&(e.preventDefault(),N(t.dataset.rbEventKey,e),O.current=!0,E())},ref:k,role:y}))))}));t.a=h}},[[0,0,1,2,4,3]]]);