"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[9930],{8726:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(3658),o=n(35101),a=n(86102),s=n(15927),l=n(88441),c=n(94720),i=n(1017),u=n(44908),d=n(68389),f=n(71036).__;function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,n)}}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function v(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}var g=f("I Understand");const P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o=y(a);function a(){var e,t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return e=o.call.apply(o,[this].concat(l)),t=b(e),r={newPassword:null,newPasswordConfirm:null,passwordMismatch:!1,understandConfirmed:!1,understandError:!1,submitted:!1,failMessage:void 0,rememberPassword:!1},(n=v(n="state"))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,e}return t=a,(n=[{key:"componentDidUpdate",value:function(){var e=this.props;this.state.submitted&&(!0===e.walletEncryptSucceded?(e.closeModal(),e.updateWalletStatus()):!1===e.walletEncryptSucceded&&this.setState({failMessage:"Unable to encrypt wallet."}))}},{key:"onChangeNewPassword",value:function(e){this.setState({newPassword:e.target.value})}},{key:"onChangeRememberPassword",value:function(e){this.setState({rememberPassword:e.target.checked})}},{key:"onChangeNewPasswordConfirm",value:function(e){this.setState({newPasswordConfirm:e.target.value})}},{key:"onChangeUnderstandConfirm",value:function(e){var t=new RegExp("^.?"+g+".?$","i");this.setState({understandConfirmed:t.test(e.target.value)})}},{key:"submitEncryptForm",value:function(){var e=this.state;if(e.newPassword){var t=!1;e.newPassword!==e.newPasswordConfirm&&(this.setState({passwordMismatch:!0}),t=!0),!1===e.understandConfirmed&&(this.setState({understandError:!0}),t=!0),!0!==t&&((0,d.setSavedPassword)(e.newPassword,e.rememberPassword),this.setState({submitted:!0}),this.props.encryptWallet(e.newPassword))}}},{key:"render",value:function(){var e=this,t=this.props.closeModal,n=this.state,r=n.passwordMismatch,o=n.understandError,a=n.failMessage;return l.createElement(i.u_,{isOpen:!0,title:f("Encrypt wallet"),contentLabel:f("Encrypt wallet"),type:"custom",onConfirmed:function(){return e.submitEncryptForm()},onAborted:t},l.createElement(c.l0,{onSubmit:function(){return e.submitEncryptForm()}},l.createElement("p",null,f("Encrypting your wallet will require a password to access your local wallet data when LBRY starts. Please enter a new password for your wallet.")," ",l.createElement(u.default,{button:"link",label:f("Learn more"),href:"https://lbry.com/faq/wallet-encryption"}),"."),l.createElement("fieldset-section",null,l.createElement(c.Wi,{autoFocus:!0,error:!0===r&&"Passwords do not match",label:f("Password"),placeholder:f("Shh..."),type:"password",name:"wallet-new-password",onChange:function(t){return e.onChangeNewPassword(t)}})),l.createElement("fieldset-section",null,l.createElement(c.Wi,{error:!0===r&&"Passwords do not match",label:f("Confirm Password"),placeholder:f("Your eyes only"),type:"password",name:"wallet-new-password-confirm",onChange:function(t){return e.onChangeNewPasswordConfirm(t)}})),l.createElement("fieldset-section",null,l.createElement(c.Wi,{label:f("Remember Password"),type:"checkbox",name:"wallet-remember-password",onChange:function(t){return e.onChangeRememberPassword(t)},checked:this.state.rememberPassword})),l.createElement("div",{className:"help--warning"},f("If your password is lost, it cannot be recovered. You will not be able to access your wallet without a password.")),l.createElement(c.Wi,{inputButton:l.createElement(c.k4,{label:f(a?"Encrypting Wallet":"Encrypt wallet")}),error:!0===o&&f('You must enter "%acknowledgement_text%"',{acknowledgement_text:g}),label:f('Enter "%acknowledgement_text%"',{acknowledgement_text:g}),placeholder:f('Type "%acknowledgement_text%"',{acknowledgement_text:g}),type:"text",name:"wallet-understand",onChange:function(t){return e.onChangeUnderstandConfirm(t)}}),a&&l.createElement("div",{className:"error__text"},f(a))),l.createElement("div",{className:"card__actions"},l.createElement(u.default,{button:"link",label:f("Cancel"),onClick:t})))}}])&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(l.PureComponent);const E=(0,r.$j)((function(e){return{walletEncryptSucceded:(0,o.wY)(e),walletEncryptResult:(0,o.se)(e)}}),(function(e){return{closeModal:function(){return e((0,s.gG)())},encryptWallet:function(t){return e((0,a.oJ)(t))},updateWalletStatus:function(){return e((0,a.Cn)())}}}))(P)}}]);
//# sourceMappingURL=modalWalletEncrypt-40e0f2c3556402aa55d8.js.map