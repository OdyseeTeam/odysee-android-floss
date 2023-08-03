"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[8173],{51635:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(88441),a=r(66598),o=r.n(a),c=r(96284),i=r(44908),l=r(77369),u=r(35080),s=r(71036).__;function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,c,i=[],l=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=function(e){var t=e.singlePane,r=e.children;return t?r:n.createElement("div",{className:"card__first-pane"},r)},p=function(e){var t=e.isPageTitle,r=e.smallTitle,a=e.children,i=e.accessStatus,d=function(e){return n.createElement(u.Z,{title:s("This is a members-only content")},n.createElement("div",{className:o()("content-access-indicator",{locked:"locked"===e.status,unlocked:"unlocked"===e.status,purchased:"purchased"===e.status})},n.createElement(c.default,{icon:"locked"===e.status?l.LOCK:l.UNLOCK})))};return t?n.createElement("h1",{className:"card__title"},i&&n.createElement(d,{status:i}),n.createElement("font",{dangerouslySetInnerHTML:{__html:function(e){for(var t in null==e||null===(r=e.props)||void 0===r?void 0:r.children){var r,n,a;if("string"==typeof(null==e||null===(n=e.props)||void 0===n?void 0:n.children[t]))return null==e||null===(a=e.props)||void 0===a?void 0:a.children[t]}return e}(a)}})):n.createElement("h2",{className:o()("card__title",{"card__title--small":r})},a)};const b=function(e){var t=e.title,r=e.subtitle,a=e.titleActions,u=e.id,m=e.body,b=e.actions,y=e.icon,_=e.className,v=e.isPageTitle,h=void 0!==v&&v,E=e.isBodyList,g=void 0!==E&&E,w=e.smallTitle,S=void 0!==w&&w,O=e.defaultExpand,P=e.nag,k=e.onClick,C=e.children,N=e.secondPane,j=e.slimHeader,R=e.background,T=e.backgroundImage,A=e.singlePane,x=e.headerActions,D=e.accessStatus,I=e.gridHeader,Z=d((0,n.useState)(O),2),L=Z[0],B=Z[1],M=void 0!==O;return n.createElement("section",{role:k?"button":void 0,className:o()(_,"card",{"card__multi-pane":Boolean(N),"card--background":R}),id:u,onClick:function(e){k&&(k(),e.stopPropagation())}},T&&n.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+T+")"}}),n.createElement(f,{singlePane:A},(t||r)&&n.createElement("div",{className:o()("card__header--between",{"card__header--slim":j,"card__header--grid":I})},n.createElement("div",{className:o()("card__title-section",{"card__title-section--body-list":g})},y&&n.createElement(c.default,{sectionIcon:!0,icon:y}),n.createElement("div",{className:"card__title-text"},n.createElement(p,{isPageTitle:h,smallTitle:S,accessStatus:D},t),r&&n.createElement("div",{className:o()("card__subtitle",{"card__subtitle--small":S})},r))),(a||M)&&n.createElement("div",{className:"card__title-actions-container"},a&&n.createElement("div",{className:o()("card__title-actions",{"card__title-actions--small":S})},a),M&&n.createElement("div",{className:"card__title-actions"},n.createElement(i.default,{button:"alt","aria-expanded":L,"aria-label":s(L?"Less":"More"),icon:L?l.SUBTRACT:l.ADD,onClick:function(){return B(!L)}}))),x),(!M||M&&L)&&n.createElement(n.Fragment,null,m&&n.createElement("div",{className:o()("card__body",{"card__body--no-title":!t&&!r,"card__body--list":g})},m),b&&n.createElement("div",{className:"card__main-actions"},b),C&&n.createElement("div",{className:"card__main-actions"},C)),P),N&&n.createElement("div",{className:"card__second-pane"},N))}},26090:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n=r(7356),a=r(3658),o=r(15927),c=r(90416),i=r(46727),l=r(88441),u=r(94720),s=r(1017),d=r(44908),m=r(51635),f=r(32158),p=r(74971),b=r(71036).__;function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(a=n.key,o=void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===y(o)?o:String(o)),n)}var a,o}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var a=g(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}(this,r)}}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}const w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(o,e);var t,r,n,a=h(o);function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a.call(this)).state={rewardCode:""},E(e).handleSubmit=e.handleSubmit.bind(E(e)),e}return t=o,(r=[{key:"handleSubmit",value:function(){var e=this.state.rewardCode;(0,this.props.submitRewardCode)(e)}},{key:"render",value:function(){var e=this,t=this.props,r=t.closeModal,n=t.rewardIsPending,a=t.error,o=this.state.rewardCode;return l.createElement(s.u_,{isOpen:!0,contentLabel:b("Enter reward code"),type:"card",onAborted:r},l.createElement(m.Z,{title:b("Enter reward code"),subtitle:l.createElement(f.Z,{tokens:{lbc:l.createElement(p.Z,{prefix:b("Redeem a custom reward code for")}),learn_more:l.createElement(d.default,{button:"link",href:"https://help.odysee.tv/category-monetization/category-rewards/rewardtypes/",label:b("Learn more")})}},"%lbc%. %learn_more%."),actions:l.createElement(l.Fragment,null,l.createElement(u.l0,{onSubmit:this.handleSubmit},l.createElement(u.Wi,{autoFocus:!0,type:"text",name:"reward-code",inputButton:l.createElement(d.default,{button:"primary",type:"submit",disabled:!o||n,label:b(n?"Redeeming":"Redeem")}),label:b("Code"),placeholder:"0123abc",error:a,value:o,onChange:function(t){return e.setState({rewardCode:t.target.value})}})),l.createElement("div",{className:"card__actions"},l.createElement(d.default,{button:"link",label:b("Cancel"),onClick:r})))}))}}])&&_(t.prototype,r),n&&_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),o}(l.PureComponent);const S=(0,a.$j)((function(e){return{rewardIsPending:(0,i.gx)()(e,{reward_type:n.Z.TYPE_REWARD_CODE}),error:(0,i.S4)()(e,{reward_type:n.Z.TYPE_REWARD_CODE})}}),(function(e){return{closeModal:function(){return e((0,o.gG)())},submitRewardCode:function(t){return e((0,c.Ni)(n.Z.TYPE_REWARD_CODE,{params:{code:t}}))}}}))(w)}}]);
//# sourceMappingURL=modalRewardCode-d546f8e09fbeaee86d9a.js.map