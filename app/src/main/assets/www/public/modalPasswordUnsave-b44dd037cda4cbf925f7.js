"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[5725],{36218:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});var n=r(3658),o=r(88441),u=r(1017),i=r(68389),c=r(71036).__;function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,u=void 0,u=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===l(u)?u:String(u)),n)}var o,u}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}const y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(p,t);var e,r,n,l=s(p);function p(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),l.apply(this,arguments)}return e=p,(r=[{key:"render",value:function(){var t=this;return o.createElement(u.u_,{isOpen:!0,contentLabel:c("Unsave Password"),title:c("Clear saved password"),type:"confirm",confirmButtonLabel:c("Forget"),abortButtonLabel:c("Nevermind"),onConfirmed:function(){return(0,i.deleteSavedPassword)().then((function(){t.props.closeModal(),t.props.callback&&t.props.callback()}))},onAborted:this.props.closeModal},o.createElement("p",null,c("You are about to delete your saved password.")," ",c("Your wallet will still be encrypted, but you will have to remember and enter it manually on startup.")))}}])&&a(e.prototype,r),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),p}(o.PureComponent);var b=r(15927);const d=(0,n.$j)(null,(function(t){return{closeModal:function(){return t((0,b.gG)())}}}))(y)}}]);
//# sourceMappingURL=modalPasswordUnsave-b44dd037cda4cbf925f7.js.map