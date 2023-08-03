"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[5916],{47229:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(3658),o=r(86102),a=r(35101),c=r(15927),l=r(88441),u=r(94720),i=r(1017),s=r(44908),f=r(68389),p=r(71036).__;function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,r)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function v(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}const P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,r,n,o=m(a);function a(){var e,t,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return e=o.call.apply(o,[this].concat(l)),t=w(e),n={password:"",rememberPassword:!1},(r=v(r="state"))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,e}return t=a,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.unlockWallet,n=t.shouldTryWithBlankPassword;(0,f.getSavedPassword)().then((function(t){null!==t?(e.setState({password:t,rememberPassword:!0}),r(t)):n&&r("")}))}},{key:"componentDidUpdate",value:function(){var e=this.props;!0===e.walletUnlockSucceded&&((0,f.setSavedPassword)(this.state.password,this.state.rememberPassword),e.closeModal())}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeRememberPassword",value:function(e){this.setState({rememberPassword:e.target.checked})}},{key:"render",value:function(){var e=this,t=this.props,r=t.quit,n=t.unlockWallet,o=t.walletUnlockSucceded,a=this.state,c=a.password,f=a.rememberPassword;return l.createElement(i.u_,{isOpen:!0,title:p("Unlock wallet"),contentLabel:p("Unlock wallet"),type:"confirm",shouldCloseOnOverlayClick:!1,confirmButtonLabel:p("Unlock"),abortButtonLabel:p("Exit"),onConfirmed:function(){return n(c)},onAborted:r},l.createElement("p",null,p("Your wallet has been encrypted with a local password. Please enter your wallet password to proceed.")," ",l.createElement(s.default,{button:"link",label:p("Learn more"),href:"https://lbry.com/faq/wallet-encryption"}),"."),l.createElement(u.l0,{className:"section",onSubmit:function(){return n(c)}},l.createElement(u.Wi,{autoFocus:!0,error:!1===o&&"Incorrect Password",label:p("Wallet Password"),type:"password",name:"wallet-password",onChange:function(t){return e.onChangePassword(t)},value:c||""}),l.createElement("fieldset-section",null,l.createElement(u.Wi,{label:p("Remember Password"),type:"checkbox",name:"wallet-remember-password",onChange:function(t){return e.onChangeRememberPassword(t)},checked:f}))))}}])&&b(t.prototype,r),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l.PureComponent);const k=(0,n.$j)((function(e){return{walletUnlockSucceded:(0,a.t5)(e)}}),(function(e){return{closeModal:function(){return e((0,c.gG)())},quit:function(){return e((0,c.af)())},unlockWallet:function(t){return e((0,o.kK)(t))}}}))(P)}}]);
//# sourceMappingURL=modalWalletUnlock-70959e4b450ed7c73e76.js.map