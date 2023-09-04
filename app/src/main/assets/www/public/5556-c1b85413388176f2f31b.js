"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[5556],{65556:(e,t,r)=>{r.d(t,{Z:()=>B});var n=r(17526),o=r(3658),i=r(15927),a=r(65572),c=r(46727),l=r(7356),u=r(9767),s=r(16395),f=r(77369),p=r(88441),d=r(44908),y=r(71036).__;function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}(this,r)}}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function k(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}var _=!1,S=!1,P=!1;const O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(i,e);var t,r,n,o=v(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),k(E(t=o.call(this,e)),"onScriptLoaded",(function(){i.stripeHandler||(i.stripeHandler=StripeCheckout.configure({key:t.props.stripeKey}),t.hasPendingClick&&t.showStripeDialog())})),k(E(t),"onScriptError",(function(){t.setState({scriptFailedToLoad:!0})})),k(E(t),"onClosed",(function(){t.setState({open:!1})})),k(E(t),"onClick",(function(){if(P)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else i.stripeHandler?t.showStripeDialog():t.hasPendingClick=!0})),t.state={open:!1,scriptFailedToLoad:!1},t}return t=i,(r=[{key:"componentDidMount",value:function(){var e=this;if(!S&&!_){_=!0;var t,r,n=document.createElement("script");n.src="https://checkout.stripe.com/checkout.js",n.async=!0,this.loadPromise=(t=!1,r=new Promise((function(t,r){n.onload=function(){S=!0,_=!1,t(),e.onScriptLoaded()},n.onerror=function(t){P=!0,_=!1,r(t),e.onScriptError(t)}})),{promise:new Promise((function(e,n){r.then((function(){return t?n({isCanceled:!0}):e()})),r.catch((function(e){return n(t?{isCanceled:!0}:e)}))})),reject:function(){t=!0}}),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(n)}}},{key:"componentDidUpdate",value:function(){_||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this.loadPromise&&this.loadPromise.reject(),i.stripeHandler&&this.state.open&&i.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){i.stripeHandler||(i.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showStripeDialog",value:function(){this.setState({open:!0}),i.stripeHandler.open({allowRememberMe:!1,closed:this.onClosed,description:y("Confirm Identity"),email:this.props.email,locale:"auto",panelLabel:"Verify",token:this.props.token,zipCode:!0})}},{key:"render",value:function(){var e=this.props.scriptFailedToLoad;return p.createElement("div",null,e&&p.createElement("div",{className:"error__text"},"There was an error connecting to Stripe. Please try again later."),p.createElement(d.default,{button:"primary",label:this.props.label,disabled:this.props.disabled||this.state.open||this.hasPendingClick,onClick:this.onClick.bind(this)}))}}])&&h(t.prototype,r),n&&h(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(p.Component);const j=(0,o.$j)((function(e){return{email:(0,u.I_)(e)}}),(function(){return{}}))(O);var C=r(15244),T=r(51635),R=r(32158),N=r(74971),L=r(16643),M=r(71036).__;function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,i=void 0,i=function(e,t){if("object"!==H(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===H(i)?i:String(i)),n)}var o,i}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=U(e);if(t){var o=U(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Z(e)}(this,r)}}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}const x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(i,e);var t,r,n,o=V(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),Z(e=o.call(this)).state={shouldRedirect:!1},Z(e).onToken=e.onToken.bind(Z(e)),e}return t=i,(r=[{key:"componentDidMount",value:function(){this.props.is_reward_approved&&this.setState({shouldRedirect:!0})}},{key:"onToken",value:function(e){this.props.verifyUserIdentity(e.id)}},{key:"render",value:function(){var e=this.props,t=e.errorMessage,r=e.isPending,n=e.fetchUser,o={onClick:e.onSkip},i=this.state;return i&&i.shouldRedirect?p.createElement(L.l_,{to:"/$/rewards"}):p.createElement("div",{className:"main__auth-content"},p.createElement("section",{className:"section__header"},p.createElement("h1",{className:"section__title--large"},"",p.createElement(R.Z,{tokens:{lbc:p.createElement(N.Z,{size:48})}},"Verify to earn %lbc%")),p.createElement("p",null,p.createElement(R.Z,{tokens:{rewards_program:p.createElement(d.default,{button:"link",label:M("other rewards"),href:"https://help.odysee.tv/category-monetization/category-rewards/"}),Refresh:p.createElement(d.default,{onClick:function(){return n()},button:"link",label:M("Refresh")}),Skip:p.createElement(d.default,I({},o,{button:"link",label:M("Skip")})),SITE_NAME:s.SITE_NAME}},"Verified accounts are eligible to earn LBRY Credits for views, watching and reposting content, sharing invite links etc. Verifying also helps us keep the %SITE_NAME% community safe too! %Refresh% or %Skip%.")),p.createElement("p",{className:"help"},M("This step is not mandatory and not required in order for you to use %SITE_NAME%.",{SITE_NAME:s.SITE_NAME}))),p.createElement("div",{className:"section"},p.createElement(T.Z,{icon:f.WALLET,title:M("Verify via credit card"),subtitle:M("Your card information will not be stored or charged, now or in the future."),actions:p.createElement(p.Fragment,null,t&&p.createElement("p",{className:"error__text"},t),p.createElement(j,{label:M("Verify Card"),disabled:r,token:this.onToken,stripeKey:C.Lbryio.getStripeToken()}),p.createElement("p",{className:"help"},M("A $1 authorization may temporarily appear with your provider.")," ",p.createElement(d.default,{button:"link",href:"https://help.odysee.tv/category-monetization/category-rewards/",label:M("Read more")}),"."))}),p.createElement("div",{className:"section__divider"},p.createElement("hr",null),p.createElement("p",null,M("OR"))),p.createElement(T.Z,{icon:f.CHAT,title:M("Verify via chat"),subtitle:p.createElement(p.Fragment,null,p.createElement("p",null,M("A moderator can approve you within our discord server. Please review the instructions within #rewards-approval carefully.")),p.createElement("p",null,M("You will be asked to provide proof of identity."))),actions:p.createElement(d.default,{href:"https://verification.odysee.com",button:"primary",label:M("Join the Odysee Rewards Discord")})}),p.createElement("div",{className:"section__divider"},p.createElement("hr",null),p.createElement("p",null,M("OR"))),p.createElement(T.Z,{icon:f.REMOVE,title:M("Skip"),subtitle:M("Verifying is optional. If you skip this, it just means you can't earn LBRY Credits from our rewards system."),actions:p.createElement(p.Fragment,null,p.createElement(d.default,I({},o,{button:"primary",label:M("Continue Without Verifying")})))})))}}])&&A(t.prototype,r),n&&A(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(p.PureComponent);const B=(0,o.$j)((function(e){var t=(0,c.qo)(),r=(0,u.dy)(e).is_reward_approved;return{isPending:(0,u.PJ)(e),errorMessage:(0,u.kJ)(e),reward:t(e,l.Z.TYPE_NEW_USER),is_reward_approved:r}}),(function(e){return{verifyUserIdentity:function(t){return e((0,a.St)(t))},verifyPhone:function(){return e((0,i.DG)(n.ZW))},fetchUser:function(){return e((0,a.es)())}}}))(x)}}]);
//# sourceMappingURL=5556-c1b85413388176f2f31b.js.map