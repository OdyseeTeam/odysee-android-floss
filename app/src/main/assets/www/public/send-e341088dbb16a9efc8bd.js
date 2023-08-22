"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[5963],{51635:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(88441),a=n(66598),l=n.n(a),o=n(96284),i=n(44908),c=n(77369),s=n(35080),u=n(71036).__;function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e){var t=e.singlePane,n=e.children;return t?n:r.createElement("div",{className:"card__first-pane"},n)},b=function(e){var t=e.isPageTitle,n=e.smallTitle,a=e.children,i=e.accessStatus,d=function(e){return r.createElement(s.Z,{title:u("This is a members-only content")},r.createElement("div",{className:l()("content-access-indicator",{locked:"locked"===e.status,unlocked:"unlocked"===e.status,purchased:"purchased"===e.status})},r.createElement(o.default,{icon:"locked"===e.status?c.LOCK:c.UNLOCK})))};return t?r.createElement("h1",{className:"card__title"},i&&r.createElement(d,{status:i}),r.createElement("font",{dangerouslySetInnerHTML:{__html:function(e){for(var t in null==e||null===(n=e.props)||void 0===n?void 0:n.children){var n,r,a;if("string"==typeof(null==e||null===(r=e.props)||void 0===r?void 0:r.children[t]))return null==e||null===(a=e.props)||void 0===a?void 0:a.children[t]}return e}(a)}})):r.createElement("h2",{className:l()("card__title",{"card__title--small":n})},a)};const p=function(e){var t=e.title,n=e.subtitle,a=e.titleActions,s=e.id,m=e.body,p=e.actions,y=e.icon,v=e.className,h=e.isPageTitle,_=void 0!==h&&h,E=e.isBodyList,g=void 0!==E&&E,S=e.smallTitle,N=void 0!==S&&S,C=e.defaultExpand,k=e.nag,A=e.onClick,O=e.children,j=e.secondPane,w=e.slimHeader,T=e.background,R=e.backgroundImage,P=e.singlePane,I=e.headerActions,L=e.accessStatus,U=e.gridHeader,x=d((0,r.useState)(C),2),D=x[0],X=x[1],B=void 0!==C;return r.createElement("section",{role:A?"button":void 0,className:l()(v,"card",{"card__multi-pane":Boolean(j),"card--background":T}),id:s,onClick:function(e){A&&(A(),e.stopPropagation())}},R&&r.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+R+")"}}),r.createElement(f,{singlePane:P},(t||n)&&r.createElement("div",{className:l()("card__header--between",{"card__header--slim":w,"card__header--grid":U})},r.createElement("div",{className:l()("card__title-section",{"card__title-section--body-list":g})},y&&r.createElement(o.default,{sectionIcon:!0,icon:y}),r.createElement("div",{className:"card__title-text"},r.createElement(b,{isPageTitle:_,smallTitle:N,accessStatus:L},t),n&&r.createElement("div",{className:l()("card__subtitle",{"card__subtitle--small":N})},n))),(a||B)&&r.createElement("div",{className:"card__title-actions-container"},a&&r.createElement("div",{className:l()("card__title-actions",{"card__title-actions--small":N})},a),B&&r.createElement("div",{className:"card__title-actions"},r.createElement(i.default,{button:"alt","aria-expanded":D,"aria-label":u(D?"Less":"More"),icon:D?c.SUBTRACT:c.ADD,onClick:function(){return X(!D)}}))),I),(!B||B&&D)&&r.createElement(r.Fragment,null,m&&r.createElement("div",{className:l()("card__body",{"card__body--no-title":!t&&!n,"card__body--list":g})},m),p&&r.createElement("div",{className:"card__main-actions"},p),O&&r.createElement("div",{className:"card__main-actions"},O)),k),j&&r.createElement("div",{className:"card__second-pane"},j))}},6764:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(3658),a=n(35101),l=n(68470),o=n(32158),i=n(88441);const c=function(e){var t=e.balance,n=e.inline,r=function(e){return i.createElement(o.Z,{tokens:{balance:i.createElement(l.Z,{amount:t,precision:4})}},e)};return t?n?i.createElement("span",{className:"help--spendable"},r("%balance% available.")):i.createElement("div",{className:"help"},r("Your immediately spendable balance is %balance%.")):null};const s=(0,r.$j)((function(e){return{balance:(0,a.QM)(e)}}))(c)},40170:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var r=n(88441),a=n(9319),l=n(74971),o=n(3658),i=n(35101),c=n(7920),s=n(15927),u=n(17526),d=n(44908),m=n(94720),f=n(67585),b=n(53389),p=n(71036).__;function y(e){var t={address:""};return"MISSING_ENV_VAR".NO_ADDRESS_VALIDATION||b.regexAddress.test(e)||(t.address=p("Not a valid LBRY address")),t}var v=n(51635),h=n(6764),_=n(66598),E=n.n(_),g=n(4476),S=n(64177),N=n(71036).__;function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(a=r.key,l=void 0,l=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===C(l)?l:String(l)),r)}var a,l}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,n)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}const T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(o,e);var t,n,a,l=O(o);function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),j(e=l.call(this)).handleSubmit=e.handleSubmit.bind(j(e)),j(e).handleClear=e.handleClear.bind(j(e)),e}return t=o,(n=[{key:"handleSubmit",value:function(){var e=this.props,t=e.draftTransaction,n=e.openModal,r=e.isAddress,a=e.contentUri,l=e.setConfirmed,o={destination:r?t.address:a,amount:t.amount,isAddress:r,setConfirmed:l};n(u.C2,o)}},{key:"handleClear",value:function(){var e=this.props,t=e.setDraftTransaction,n=e.setConfirmed;t({address:"",amount:""}),n(!1)}},{key:"render",value:function(){var e=this.props,t=e.draftTransaction,n=e.setDraftTransaction,a=e.balance,l=e.isAddress,o=e.setIsAddress,i=e.contentUri,c=e.contentClaim,s=e.setEnteredContentUri,u=e.contentError,b=e.confirmed,p=e.sendLabel,_=e.setSendLabel,C=e.snack;return b&&(this.handleClear(),_("Sending...")),C&&_("Send"),r.createElement(v.Z,{title:N("Send Credits"),subtitle:N("Send Credits to your friends or favorite creators."),actions:r.createElement(f.J9,{initialValues:{address:"",amount:""},onSubmit:this.handleSubmit,render:function(e){var f=e.values,b=e.errors,v=e.touched,_=e.handleBlur,C=e.handleSubmit;return r.createElement("div",null,r.createElement("div",{className:"section"},r.createElement(d.default,{key:"Address",label:N("Address"),button:"alt",onClick:function(){return o(!0)},className:E()("button-toggle",{"button-toggle--active":l})}),r.createElement(d.default,{key:"Search",label:N("Search"),button:"alt",onClick:function(){return o(!1)},className:E()("button-toggle",{"button-toggle--active":!l})})),r.createElement("div",{className:"section"},!l&&r.createElement(g.Z,null),r.createElement(m.l0,{onSubmit:C},!l&&r.createElement(m.Wi,{type:"text",name:"search",error:u,placeholder:N("Enter a name, @username or URL"),className:"form-field--address",label:N("Recipient search"),onChange:function(e){return s(e.target.value)},onBlur:_,value:f.search}),!l&&r.createElement("fieldset-section",null,r.createElement(S.default,{key:i,uri:i,actions:"",type:"small",showNullPlaceholder:!0,hideMenu:!0,hideRepostLabel:!0,nonClickable:!0})),r.createElement("fieldset-group",{class:"fieldset-group--smushed"},r.createElement(m.Wi,{autoFocus:!0,type:"number",name:"amount",label:N("Amount"),className:"form-field--price-amount",affixClass:"form-field--fix-no-height",min:"0",step:"any",placeholder:"12.34",onChange:function(e){return n({address:t.address,amount:e.target.value})},onBlur:_,value:t.amount}),l&&r.createElement(m.Wi,{type:"text",name:"address",placeholder:"bbFxRyXXXXXXXXXXXZD8nE7XTLUxYnddTs",className:"form-field--address",label:N("Recipient address"),onChange:function(e){return n({address:e.target.value,amount:t.amount})},onBlur:_,value:t.address})),r.createElement("div",{className:"card__actions"},r.createElement(d.default,{button:"primary",type:"submit",label:N(p),disabled:!(parseFloat(t.amount)>0)||parseFloat(t.amount)>=a||"Sending..."===p||(l?!t.address||""!==y(t.address).address:!c)}),!!Object.keys(b).length||r.createElement("span",{className:"error__text"},!!t.address&&v.address&&b.address||!!t.amount&&v.amount&&b.amount||parseFloat(t.amount)===a&&N("Decrease amount to account for transaction fee")||parseFloat(t.amount)>a&&N("Not enough Credits"))),r.createElement(h.Z,null))))}})})}}])&&k(t.prototype,n),a&&k(t,a),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.PureComponent);var R=n(16643),P=n(43181);const I=(0,R.EN)((0,o.$j)((function(e,t){return{balance:(0,i.QM)(e),contentClaim:(0,c.pB)(t.contentUri)(e),snack:(0,P.sr)(e)}}),(function(e){return{openModal:function(t,n){return e((0,s.DG)(t,n))}}}))(T));var L=n(16395),U=n(71036).__;function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const X=function(e){var t=x(r.useState(!0),2),n=t[0],o=t[1],i=x(r.useState(""),2),c=i[0],s=i[1],u=x(r.useState({address:"",amount:""}),2),d=u[0],m=u[1],f=x(r.useState(void 0),2),p=f[0],y=f[1],v=r.useRef(!0),h=x(r.useState(""),2),_=h[0],E=h[1],g=x(r.useState(!1),2),S=g[0],N=g[1],C=x(r.useState("Send"),2),k=C[0],A=C[1];return r.useEffect((function(){if(p||v.current||E(U("A name is required")),p){v.current=!1;var e=x(function(e){var t,n="".concat(L.URL_DEV,"/"),r="".concat(L.URL_LOCAL,"/"),a="".concat(L.URL,"/"),l="https://odysee.com/",o=e.includes(a),i=e.includes(l),c=e.includes(r),s=e.includes(n),u=s||c||o||i,d=e.startsWith("lbry://")&&"lbry://"!==e;if(u){var m=a;c&&(m=r),s&&(m=n),i&&(m=l);var f=e&&e.slice(m.length).replace(/:/g,"#")||"";try{var p="lbry://".concat(f);return(0,b.parseURI)(p),[p,null]}catch(e){return[f,"error"]}}if(!d)return e.startsWith("@")?(0,b.isNameValid)(e.slice(1))?[e,null]:[e,""]:[(t=e,t.startsWith("lbry://")?t:"lbry://".concat(t)),null];try{if((0,b.isURIValid)(e)){var y;try{y=(0,b.normalizeURI)(e)}catch(t){return[e,null]}return[y,null]}return[e,null]}catch(t){return[e,"error"]}}(p),2),t=e[0],n=e[1];E(n?U("Something not quite right.."):"");try{var r=(0,b.parseURI)(t),a=r.streamName,l=r.channelName,o=r.isChannel;(!o&&a&&(0,b.isNameValid)(a)||o&&l&&(0,b.isNameValid)(l))&&s(t)}catch(e){"@"!==p&&E(""),s("")}}}),[p,s,E]),r.createElement(a.Z,{noSideNavigation:!0,className:"main--send",backout:{backoutLabel:U("Done"),title:r.createElement(r.Fragment,null,r.createElement(l.Z,{prefix:U("Send"),size:28}))}},r.createElement(I,{isAddress:n,setIsAddress:o,contentUri:c,contentError:_,setEnteredContentUri:y,confirmed:S,setConfirmed:N,draftTransaction:d,setDraftTransaction:m,sendLabel:k,setSendLabel:A}))}}}]);
//# sourceMappingURL=send-e341088dbb16a9efc8bd.js.map