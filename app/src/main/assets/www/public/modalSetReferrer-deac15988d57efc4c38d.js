"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[8423],{51635:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(88441),a=r(66598),o=r.n(a),i=r(96284),l=r(44908),c=r(77369),s=r(35080),u=r(71036).__;function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e){var t=e.singlePane,r=e.children;return t?r:n.createElement("div",{className:"card__first-pane"},r)},p=function(e){var t=e.isPageTitle,r=e.smallTitle,a=e.children,l=e.accessStatus,d=function(e){return n.createElement(s.Z,{title:u("This is a members-only content")},n.createElement("div",{className:o()("content-access-indicator",{locked:"locked"===e.status,unlocked:"unlocked"===e.status,purchased:"purchased"===e.status})},n.createElement(i.default,{icon:"locked"===e.status?c.LOCK:c.UNLOCK})))};return t?n.createElement("h1",{className:"card__title"},l&&n.createElement(d,{status:l}),n.createElement("font",{dangerouslySetInnerHTML:{__html:function(e){for(var t in null==e||null===(r=e.props)||void 0===r?void 0:r.children){var r,n,a;if("string"==typeof(null==e||null===(n=e.props)||void 0===n?void 0:n.children[t]))return null==e||null===(a=e.props)||void 0===a?void 0:a.children[t]}return e}(a)}})):n.createElement("h2",{className:o()("card__title",{"card__title--small":r})},a)};const b=function(e){var t=e.title,r=e.subtitle,a=e.titleActions,s=e.id,f=e.body,b=e.actions,y=e.icon,h=e.className,v=e.isPageTitle,_=void 0!==v&&v,E=e.isBodyList,g=void 0!==E&&E,S=e.smallTitle,w=void 0!==S&&S,P=e.defaultExpand,k=e.nag,C=e.onClick,O=e.children,N=e.secondPane,T=e.slimHeader,j=e.background,R=e.backgroundImage,x=e.singlePane,A=e.headerActions,I=e.accessStatus,L=e.gridHeader,U=d((0,n.useState)(P),2),B=U[0],D=U[1],F=void 0!==P;return n.createElement("section",{role:C?"button":void 0,className:o()(h,"card",{"card__multi-pane":Boolean(N),"card--background":j}),id:s,onClick:function(e){C&&(C(),e.stopPropagation())}},R&&n.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+R+")"}}),n.createElement(m,{singlePane:x},(t||r)&&n.createElement("div",{className:o()("card__header--between",{"card__header--slim":T,"card__header--grid":L})},n.createElement("div",{className:o()("card__title-section",{"card__title-section--body-list":g})},y&&n.createElement(i.default,{sectionIcon:!0,icon:y}),n.createElement("div",{className:"card__title-text"},n.createElement(p,{isPageTitle:_,smallTitle:w,accessStatus:I},t),r&&n.createElement("div",{className:o()("card__subtitle",{"card__subtitle--small":w})},r))),(a||F)&&n.createElement("div",{className:"card__title-actions-container"},a&&n.createElement("div",{className:o()("card__title-actions",{"card__title-actions--small":w})},a),F&&n.createElement("div",{className:"card__title-actions"},n.createElement(l.default,{button:"alt","aria-expanded":B,"aria-label":u(B?"Less":"More"),icon:B?c.SUBTRACT:c.ADD,onClick:function(){return D(!B)}}))),A),(!F||F&&B)&&n.createElement(n.Fragment,null,f&&n.createElement("div",{className:o()("card__body",{"card__body--no-title":!t&&!r,"card__body--list":g})},f),b&&n.createElement("div",{className:"card__main-actions"},b),O&&n.createElement("div",{className:"card__main-actions"},O)),k),N&&n.createElement("div",{className:"card__second-pane"},N))}},53445:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(77369),a=r(88441),o=r(44908),i=r(71036).__;function l(e){var t=e.href,r=e.navigate,l=e.icon,c=e.iconSize,s=e.description;return a.createElement(o.default,{onClick:function(e){t&&e.stopPropagation()},className:"icon--help",icon:l||n.HELP,iconSize:c||14,title:s||i("Help"),description:s||i("Help"),href:t,navigate:r})}},50671:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(3658),a=r(15927),o=r(9767),i=r(65572),l=r(88441),c=r(94720),s=r(1017),u=r(44908),d=r(53445),f=r(51635),m=r(71036).__;function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(a=n.key,o=void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===p(o)?o:String(o)),n)}var a,o}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_(e);if(t){var a=_(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,r)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}const E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(o,e);var t,r,n,a=h(o);function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a.call(this)).state={referrer:""},v(e).handleSubmit=e.handleSubmit.bind(v(e)),v(e).handleClose=e.handleClose.bind(v(e)),v(e).handleTextChange=e.handleTextChange.bind(v(e)),e}return t=o,(r=[{key:"handleSubmit",value:function(){var e=this.state.referrer;(0,this.props.doUserSetReferrerForUri)(e)}},{key:"handleClose",value:function(){var e=this.props,t=e.referrerSetError,r=e.resetReferrerError,n=e.closeModal;t&&r(),n()}},{key:"handleTextChange",value:function(e){var t=this.props,r=t.referrerSetError,n=t.resetReferrerError;this.setState({referrer:e.target.value}),r&&n()}},{key:"render",value:function(){var e=this.props,t=e.closeModal,r=e.rewardIsPending,n=e.referrerSetError,a=e.referrerSetPending,o=this.state.referrer;return l.createElement(s.u_,{isOpen:!0,contentLabel:m("Enter inviter"),type:"card",onAborted:t},l.createElement(f.Z,{title:m("Enter inviter"),subtitle:l.createElement(l.Fragment,null,m("Did someone invite you to use Odysee? Tell us who and you both get a reward!"),l.createElement(d.Z,{href:"https://help.odysee.tv/category-monetization/category-rewards/"})),actions:l.createElement(l.Fragment,null,l.createElement(c.l0,{onSubmit:this.handleSubmit},l.createElement(c.Wi,{autoFocus:!0,type:"text",name:"referrer-code",inputButton:l.createElement(u.default,{button:"primary",type:"submit",disabled:!o||r,label:m("Set")}),label:m("Code or channel"),placeholder:"0123abc",value:o,onChange:this.handleTextChange,error:!a&&n})),l.createElement("div",{className:"card__actions"},l.createElement(u.default,{button:"primary",label:m("Done"),onClick:this.handleClose})))}))}}])&&b(t.prototype,r),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),o}(l.PureComponent);const g=(0,n.$j)((function(e){return{referrerSetPending:(0,o.D4)(e),referrerSetError:(0,o.nT)(e)}}),(function(e){return{closeModal:function(){return e((0,a.gG)())},doUserSetReferrerForUri:function(t){return e((0,i.rj)(t))},resetReferrerError:function(){return e((0,i.nb)())}}}))(E)}}]);
//# sourceMappingURL=modalSetReferrer-deac15988d57efc4c38d.js.map