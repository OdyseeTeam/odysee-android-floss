"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[2884],{9877:(t,e,r)=>{r.r(e),r.d(e,{default:()=>tt});var n=r(3658),o=r(15927),c=r(88374),i=r(88441),a=r(1017);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,r){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}},s(t,e,r||t)}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=y(t);if(e){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}const b=function(t){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(c,t);var e,r,n,o=p(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),o.apply(this,arguments)}return e=c,(r=[{key:"componentDidUpdate",value:function(){var t=this,e=Date.now(),r=!1;Object.keys(this.paths).forEach((function(n){var o=t.paths[n];if(o){r=!0;var c=o.style;c.transitionDuration=".3s, .3s, .3s, .06s",t.prevTimeStamp&&e-t.prevTimeStamp<100&&(c.transitionDuration="0s, 0s")}})),r&&(this.prevTimeStamp=Date.now())}},{key:"render",value:function(){return s(y(c.prototype),"render",this).call(this)}}])&&u(e.prototype,r),n&&u(e,n),c}(t)};var h=r(80398),d=r.n(h),m={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1},g=d().oneOfType([d().number,d().string]),v={className:d().string,percent:d().oneOfType([g,d().arrayOf(g)]),prefixCls:d().string,strokeColor:d().oneOfType([d().string,d().arrayOf(d().oneOfType([d().string,d().object])),d().object]),strokeLinecap:d().oneOf(["butt","round","square"]),strokeWidth:g,style:d().object,trailColor:d().string,trailWidth:g};function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function k(){return k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},k.apply(this,arguments)}function w(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function P(t,e){return P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},P(t,e)}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=C(t);if(e){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;return E(t)}(this,r)}}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(c,t);var e,r,n,o=S(c);function c(){var t,e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return t=o.call.apply(o,[this].concat(a)),e=E(t),n={},(r="paths")in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,t}return e=c,(r=[{key:"render",value:function(){var t=this,e=this.props,r=e.className,n=e.percent,o=e.prefixCls,c=e.strokeColor,a=e.strokeLinecap,l=e.strokeWidth,u=e.style,s=e.trailColor,f=e.trailWidth,p=e.transition,y=w(e,["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"]);delete y.gapPosition;var b=Array.isArray(n)?n:[n],h=Array.isArray(c)?c:[c],d=l/2,m=100-l/2,g="M ".concat("round"===a?d:0,",").concat(d,"\n           L ").concat("round"===a?m:100,",").concat(d),v="0 0 100 ".concat(l),O=0;return i.createElement("svg",k({className:"".concat(o,"-line ").concat(r),viewBox:v,preserveAspectRatio:"none",style:u},y),i.createElement("path",{className:"".concat(o,"-line-trail"),d:g,strokeLinecap:a,stroke:s,strokeWidth:f||l,fillOpacity:"0"}),b.map((function(e,r){var n={strokeDasharray:"".concat(e,"px, 100px"),strokeDashoffset:"-".concat(O,"px"),transition:p||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},c=h[r]||h[h.length-1];return O+=e,i.createElement("path",{key:r,className:"".concat(o,"-line-path"),d:g,strokeLinecap:a,stroke:c,strokeWidth:l,fillOpacity:"0",ref:function(e){t.paths[r]=e},style:n})})))}}])&&j(e.prototype,r),n&&j(e,n),c}(i.Component);_.propTypes=v,_.defaultProps=m;const R=b(_);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){q(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function L(){return L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},L.apply(this,arguments)}function W(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function A(t,e){return A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},A(t,e)}function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=U(t);if(e){var o=U(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;return B(t)}(this,r)}}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}function q(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var M=0;function Y(t){return+t.replace("%","")}function G(t){return Array.isArray(t)?t:[t]}function Q(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,c=50-n/2,i=0,a=-c,l=0,u=-2*c;switch(arguments.length>5?arguments[5]:void 0){case"left":i=-c,a=0,l=2*c,u=0;break;case"right":i=c,a=0,l=-2*c,u=0;break;case"bottom":a=c,u=2*c}var s="M 50,50 m ".concat(i,",").concat(a,"\n   a ").concat(c,",").concat(c," 0 1 1 ").concat(l,",").concat(-u,"\n   a ").concat(c,",").concat(c," 0 1 1 ").concat(-l,",").concat(u),f=2*Math.PI*c;return{pathString:s,pathStyle:{stroke:r,strokeDasharray:"".concat(e/100*(f-o),"px ").concat(f,"px"),strokeDashoffset:"-".concat(o/2+t/100*(f-o),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"}}}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(c,t);var e,r,n,o=I(c);function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),q(B(t=o.call(this)),"paths",{}),q(B(t),"gradientId",0),t.gradientId=M,M+=1,t}return e=c,(r=[{key:"getStokeList",value:function(){var t=this,e=this.props,r=e.prefixCls,n=e.percent,o=e.strokeColor,c=e.strokeWidth,a=e.strokeLinecap,l=e.gapDegree,u=e.gapPosition,s=G(n),f=G(o),p=0;return s.map((function(e,n){var o=f[n]||f[f.length-1],s="[object Object]"===Object.prototype.toString.call(o)?"url(#".concat(r,"-gradient-").concat(t.gradientId,")"):"",y=Q(p,e,o,c,l,u),b=y.pathString,h=y.pathStyle;return p+=e,i.createElement("path",{key:n,className:"".concat(r,"-circle-path"),d:b,stroke:s,strokeLinecap:a,strokeWidth:c,opacity:0===e?0:1,fillOpacity:"0",style:h,ref:function(e){t.paths[n]=e}})}))}},{key:"render",value:function(){var t=this.props,e=t.prefixCls,r=t.strokeWidth,n=t.trailWidth,o=t.gapDegree,c=t.gapPosition,a=t.trailColor,l=t.strokeLinecap,u=t.style,s=t.className,f=t.strokeColor,p=W(t,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor"]),y=Q(0,100,a,r,o,c),b=y.pathString,h=y.pathStyle;delete p.percent;var d=G(f).find((function(t){return"[object Object]"===Object.prototype.toString.call(t)}));return i.createElement("svg",L({className:"".concat(e,"-circle ").concat(s),viewBox:"0 0 100 100",style:u},p),d&&i.createElement("defs",null,i.createElement("linearGradient",{id:"".concat(e,"-gradient-").concat(this.gradientId),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(d).sort((function(t,e){return Y(t)-Y(e)})).map((function(t,e){return i.createElement("stop",{key:e,offset:t,stopColor:d[t]})})))),i.createElement("path",{className:"".concat(e,"-circle-trail"),d:b,stroke:a,strokeLinecap:l,strokeWidth:n||r,fillOpacity:"0",style:h}),this.getStokeList().reverse())}}])&&N(e.prototype,r),n&&N(e,n),c}(i.Component);z.propTypes=T(T({},v),{},{gapPosition:d().oneOf(["top","bottom","left","right"])}),z.defaultProps=T(T({},m),{},{gapPosition:"top"});b(z);var F=r(44908),Z=r(71036).__;function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function H(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,c=void 0,c=function(t,e){if("object"!==$(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===$(c)?c:String(c)),n)}var o,c}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},J(t,e)}function K(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=V(t);if(e){var o=V(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===$(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}const X=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&J(t,e)}(c,t);var e,r,n,o=K(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),o.apply(this,arguments)}return e=c,(r=[{key:"render",value:function(){var t=this.props,e=t.downloadProgress,r=t.downloadComplete,n=t.downloadItem,o=t.startUpgrade,c=t.cancelUpgrade;return i.createElement(a.u_,{title:Z("Downloading update"),isOpen:!0,contentLabel:Z("Downloading update"),type:"custom"},e?"".concat(e,"% ").concat(Z("complete")):null,i.createElement(R,{percent:e||0,strokeWidth:"4"}),r?i.createElement(i.Fragment,null,i.createElement("p",null,Z('Click "Begin Upgrade" to start the upgrade process.')),i.createElement("p",null,Z("The app will close (if not, quit with CTRL-Q), and you will be prompted to install the latest version of LBRY.")),i.createElement("p",null,Z("To launch installation manually, close LBRY (CTRL-Q) and run the command below in the terminal.")),i.createElement("blockquote",null,"sudo dpkg -i ",n),i.createElement("p",null,Z("After the install is complete, please reopen the app.")),i.createElement("p",null,Z("Note: You can also install the AppImage version for streamlined updates.")," ",i.createElement(F.default,{button:"link",label:Z("Download here."),href:"https://lbry.com/get/lbry.AppImage"}))):null,i.createElement("div",{className:"card__actions"},r?i.createElement(F.default,{button:"primary",label:Z("Begin Upgrade"),onClick:o}):null,i.createElement(F.default,{button:"link",label:Z("Cancel"),onClick:c})))}}])&&H(e.prototype,r),n&&H(e,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(i.PureComponent);const tt=(0,n.$j)((function(t){return{downloadProgress:(0,c.Z3)(t),downloadComplete:(0,c.jz)(t),downloadItem:(0,c.Nf)(t)}}),(function(t){return{startUpgrade:function(){return t((0,o.Sj)())},cancelUpgrade:function(){t((0,o.gG)()),t((0,o.TC)())}}}))(X)}}]);
//# sourceMappingURL=modalDownloading-003d173a47a3db631917.js.map