"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[8752],{93161:(t,e,r)=>{r.r(e),r.d(e,{default:()=>O});var n=r(3658),o=r(86102),u=r(35101),c=r(15927),i=r(88441),l=r(1017),a=r(44908),f=r(68389),p=r(71036).__;function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h(t);if(e){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(this,r)}}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function v(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}const w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,r,n,o=d(u);function u(){var t,e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return t=o.call.apply(o,[this].concat(i)),e=m(t),n={submitted:!1},(r=v(r="state"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,t}return e=u,(r=[{key:"componentDidUpdate",value:function(){var t=this.props;this.state.submitted&&!0===t.walletDecryptSucceded&&((0,f.deleteAuthToken)(),t.closeModal(),t.updateWalletStatus())}},{key:"submitDecryptForm",value:function(){this.setState({submitted:!0}),this.props.decryptWallet()}},{key:"render",value:function(){var t=this,e=this.props.closeModal;return i.createElement(l.u_,{isOpen:!0,title:p("Decrypt wallet"),contentLabel:p("Decrypt wallet"),type:"confirm",confirmButtonLabel:p("Decrypt wallet"),abortButtonLabel:p("Cancel"),onConfirmed:function(){return t.submitDecryptForm()},onAborted:e},i.createElement("p",null,p("Your wallet has been encrypted with a local password, performing this action will remove this password.")," ",i.createElement(a.default,{button:"link",label:p("Learn more"),href:"https://lbry.com/faq/wallet-encryption"}),"."))}}])&&y(e.prototype,r),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(i.PureComponent);const O=(0,n.$j)((function(t){return{walletDecryptSucceded:(0,u.BO)(t)}}),(function(t){return{closeModal:function(){return t((0,c.gG)())},decryptWallet:function(e){return t((0,o.oA)(e))},updateWalletStatus:function(){return t((0,o.Cn)())}}}))(w)}}]);
//# sourceMappingURL=modalWalletDecrypt-17d81cc2636e01397719.js.map