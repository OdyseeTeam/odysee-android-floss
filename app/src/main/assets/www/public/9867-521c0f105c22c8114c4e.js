"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[9867],{55911:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(3658),a=(r(19231),r(30115)),o=r(11370),i=r(27773),l=r(4357),s=r(77369),A=r(88441),c=r(28453),d=r(44908),u=["title","hasSubtitle","actions","handleClose","type"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],s=!0,A=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){A=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(A)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=225,g="".concat(m,"ms cubic-bezier(0, 0, 0.2, 1) 0ms");var h=function(e){var t=e.open;return A.createElement(a.xB,{styles:{".main-wrapper__inner--filepage":{overflow:t?"hidden":"unset",maxHeight:t?"100%":"unset"}}})},C=function(e){var t=e.title,r=(e.hasSubtitle,e.actions),n=e.handleClose,a=e.type,o=b(e,u);return A.createElement("div",p({className:"swipeable-drawer__header-content"},o),t,A.createElement("div",{className:"swipeable-drawer__header-actions"},r,A.createElement(d.default,{button:a===c.z?"close":void 0,icon:s.REMOVE,iconSize:16,onClick:n})))},v=r(88374),x={doToggleAppDrawer:r(15927).FL};const _=(0,n.$j)((function(e,t){var r=t.type;return{open:(0,v.ff)(e,r)}}),x)((function(e){var t=e.title,r=e.hasSubtitle,n=e.children,a=e.type,s=e.startOpen,d=e.open,u=e.actions,p=e.doToggleAppDrawer,b=a===c.z?120:62,w=A.useRef(),v=A.useRef(),x=A.useRef(),_=A.useRef(!1),E=A.useRef(),y=A.useRef(d),B=f(A.useState((0,i.fE)()),2),k=B[0],D=B[1],F=o.ei+(0,i.fE)(),O=o.ei+k;function S(){p(a)}function j(){var e=document.querySelector(".video-js"),t=e&&e.querySelector(".vjs-tech");t&&_.current&&(t.play(),_.current=!1)}function P(){j(),S()}var z=A.useCallback((function(){var e=document.querySelector(".".concat(o.HN))||document.querySelector(".".concat(o.ap));if(e){var t=e.getBoundingClientRect();D(t.height)}}),[]);A.useEffect((function(){s&&!d&&S()}),[]),A.useEffect((function(){return z(),window.addEventListener("resize",z),function(){return window.removeEventListener("resize",z)}}),[z]),A.useEffect((function(){if(d){var e=document.querySelector("html");e&&(e.scrollTop=0)}}),[d]),A.useEffect((function(){return function(){y.current&&P()}}),[]);var I=A.useCallback((function(e){if(e){var t,r,n=e.style.transform.includes("translateY(".concat(o.ei,"px)")),a=y.current!==d;if(!n||a)e.setAttribute("style","transform: translateY(".concat(F,"px); height: calc(100% - ").concat(F,"px);")),null===(t=document.documentElement)||void 0===t||null===(r=t.style)||void 0===r||r.setProperty("--content-height",String(F));w.current=e,y.current=d}}),[F,d]);return A.createElement(A.Fragment,null,A.createElement(h,{open:d}),A.createElement(l.ZP,{ref:I,anchor:"bottom",open:d,disableEnforceFocus:!0,ModalProps:{keepMounted:!0,sx:{zIndex:"2"}},BackdropProps:{ref:v,open:d,sx:{backgroundColor:"black"}},PaperProps:{ref:x,sx:{height:"calc(100% - ".concat(b,"px)")}}},d&&A.createElement("div",{className:"swipeable-drawer__header",style:{top:-b,height:b}},A.createElement("span",{className:"swipeable-drawer__puller"}),A.createElement(C,{title:t,hasSubtitle:r,actions:u,type:a,handleClose:P,onTouchMove:function(e){var t=e.touches[0].clientY;if(E.current=t,t>o.ei){var r=w.current;r&&r.setAttribute("style","transform: none !important"),x.current&&x.current.setAttribute("style","transform: translateY(".concat(t,"px) !important"));var n=v.current;if(n){var a=t<k+o.ei,i=O,l=document.documentElement.getBoundingClientRect().height-i,s=(t-o.ei)/l*-1+1;a&&(i=o.ei,l=k,s=(t-o.ei)/l*-1+1),n.setAttribute("style","top: ".concat(i,"px; opacity: ").concat(s))}}},onTouchEnd:function(){if(E.current){var e=w.current;if(e){var t=o.ei+k/2,r=E.current<t,n=document.documentElement.clientHeight-k-o.ei,a=E.current-k-o.ei<.2*n,i=v.current;if(a){var l,s,A=O,c=r?o.ei:A;null===(l=document.documentElement)||void 0===l||null===(s=l.style)||void 0===s||s.setProperty("--content-height",String(c)),x.current&&x.current.setAttribute("style","transform: none !important; transition: transform ".concat(g)),e.setAttribute("style","transform: translateY(".concat(c,"px) !important; transition: transform ").concat(g)),setTimeout((function(){e.style.height="calc(100% - ".concat(c,"px)")}),m),i&&(i.setAttribute("style","opacity: 0"),setTimeout((function(){i.setAttribute("style","transition: opacity ".concat(g,"; opacity: 1"))}),m));var d=document.querySelector(".content__viewer--inline"),u=d&&d.querySelector(".video-js"),p=u&&u.classList.contains("livestreamPlayer"),b=u&&u.querySelector(".vjs-tech"),f=b&&!b.paused;b&&!p&&f&&r?(b.pause(),_.current=!0):j()}else P(),i&&i.setAttribute("style","opacity: 0")}E.current=void 0}}})),n))}))},7781:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(3658),a=r(15927),o=(r(19231),r(30115)),i=r(66598),l=r.n(i),s=r(77369),A=r(88441),c=r(44908),d=r(76442),u=["fixed","icon","type","doToggleAppDrawer"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=function(e){var t=e.fixed,r=e.children;return t?A.createElement(d.Z,null,r):r};const w=function(e){var t=e.fixed,r=e.icon,n=e.type,a=e.doToggleAppDrawer,i=b(e,u);return A.createElement(f,{fixed:t},A.createElement(o.xB,{styles:{".main-wrapper__inner--filepage":{paddingBottom:t?"var(--header-height-mobile) !important":void 0}}}),A.createElement(c.default,p({className:l()("swipeable-drawer__expand-button",{fixed:t}),button:"primary",icon:r||(t?s.UP:void 0),iconSize:t&&r?30:void 0,onClick:function(e){e.preventDefault(),e.stopPropagation(),a(n)}},i)))};var m={doToggleAppDrawer:a.FL};const g=(0,n.$j)(null,m)(w)},28453:(e,t,r)=>{r.d(t,{J:()=>n,z:()=>a});var n="CHAT",a="PLAYLIST"},19969:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(26612),a=r.n(n),o=r(40805),i=r.n(o)()(a());i.push([e.id,".swipeable-drawer__header{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);height:120px;position:absolute;top:-120px;visibility:visible}[dir] .swipeable-drawer__header{background-color:var(--color-background);border-top:1px solid var(--color-border)}[dir=ltr] .swipeable-drawer__header,[dir=rtl] .swipeable-drawer__header{border-top-left-radius:12px;border-top-right-radius:12px;left:0;right:0}.swipeable-drawer__header .button--close{top:2px!important}[dir=ltr] .swipeable-drawer__header .button--close{right:2px!important}[dir=rtl] .swipeable-drawer__header .button--close{left:2px!important}.swipeable-drawer__header span,.swipeable-drawer__header svg{color:var(--color-text)}.swipeable-drawer__puller{height:6px;position:absolute;top:8px;width:30px}[dir] .swipeable-drawer__puller{background-color:var(--color-text);border-radius:3px}[dir=ltr] .swipeable-drawer__puller{left:calc(50% - 15px)}[dir=rtl] .swipeable-drawer__puller{right:calc(50% - 15px)}.MuiDrawer-root>.MuiPaper-root{color:var(--color-text);overflow:visible;position:absolute}.swipeable-drawer__header-content{align-items:center;display:flex;font-size:var(--font-small);justify-content:space-between}[dir] .swipeable-drawer__header-content h2:not(.card__title){margin-top:var(--spacing-s);padding:var(--spacing-s)}.swipeable-drawer__menu{align-items:flex-start;display:flex}[dir=ltr] .swipeable-drawer__menu svg{margin-left:var(--spacing-xxs)}[dir=rtl] .swipeable-drawer__menu svg{margin-right:var(--spacing-xxs)}.swipeable-drawer__title-menu{align-items:flex-start;display:flex;flex-direction:column}.swipeable-drawer__title-menu .swipeable-drawer__title{font-size:var(--font-xsmall)}.swipeable-drawer__title-menu .swipeable-drawer__subtitle{color:var(--color-text-subtitle);font-size:var(--font-xxsmall)}.swipeable-drawer__header-actions{display:flex}[dir] .swipeable-drawer__header-actions button{padding:.3rem}[dir=ltr] .swipeable-drawer__header-actions button:not(:last-child){margin-right:var(--spacing-xxs)}[dir=rtl] .swipeable-drawer__header-actions button:not(:last-child){margin-left:var(--spacing-xxs)}.swipeable-drawer__header-actions .menu__button{opacity:1}.swipeable-drawer__expand-button{width:100%}[dir] .swipeable-drawer__expand-button{border-radius:0!important;margin:var(--spacing-xxs) 0}[dir] .swipeable-drawer__expand-button.button--primary{background-color:var(--color-header-button)!important;border-radius:var(--border-radius)!important}[dir=ltr] .swipeable-drawer__expand-button.button--primary{padding-left:var(--spacing-xxs)}[dir=rtl] .swipeable-drawer__expand-button.button--primary{padding-right:var(--spacing-xxs)}.swipeable-drawer__expand-button.button--primary .button__content .icon{stroke:var(--color-text)}.swipeable-drawer__expand-button.button--primary .button__content .button__label{color:var(--color-text)}.swipeable-drawer__expand-button.fixed{bottom:0;position:fixed;top:unset;z-index:9999}[dir] .swipeable-drawer__expand-button.fixed{border-top:1px solid var(--color-header-button);margin:0}.chat-card--drawer-header{display:flex;flex-direction:row;width:100%}[dir] .chat-card--drawer-header .chat-card--drawer-header-mode{margin-top:var(--spacing-m);padding:var(--spacing-s)}.chat-card--drawer-header .chat-card--drawer-header-mode .button-toggle{height:var(--height-button-mobile)}[dir] .chat-card--drawer-header .chat-card--drawer-header-mode .button-toggle{padding:0 var(--spacing-s)}.chat-card--drawer-header .menu__button{opacity:1}[dir=ltr] .chat-card--drawer-header .menu__button{margin-right:var(--spacing-xs)}[dir=rtl] .chat-card--drawer-header .menu__button{margin-left:var(--spacing-xs)}[dir=ltr] .chat-card--drawer-header button:last-of-type{margin-left:auto}[dir=rtl] .chat-card--drawer-header button:last-of-type{margin-right:auto}","",{version:3,sources:["webpack://./../ui/scss/component/_swipeable-drawer.scss"],names:[],mappings:"AAAA,0BAKE,iCAAA,CACA,yBAAA,CAMA,YAAA,CAXA,iBAAA,CAUA,UAAA,CATA,kBAUA,CAZF,gCAOE,wCAAA,CACA,wCAIA,CAZF,wEASE,2BAAA,CACA,4BAAA,CANA,MAAA,CADA,OASA,CAEA,yCACE,iBACA,CAFF,mDAEE,mBAAA,CAFF,mDAEE,kBAAA,CAGF,6DAEE,uBAAA,CAIJ,0BAEE,UAAA,CAEA,iBAAA,CACA,OAAA,CAJA,UAMA,CAPF,gCAOE,kCAAA,CAJA,iBAIA,CAPF,oCAME,qBACA,CAPF,oCAME,sBACA,CAGF,+BAEE,uBAAA,CADA,gBAAA,CAEA,iBAAA,CAGF,kCAEE,kBAAA,CADA,YAAA,CAGA,2BAAA,CADA,6BACA,CAEA,6DAEE,2BAAA,CADA,wBACA,CAIJ,wBAEE,sBAAA,CADA,YACA,CAEA,sCACE,8BAAA,CADF,sCACE,+BAAA,CAIJ,8BAGE,sBAAA,CAFA,YAAA,CACA,qBACA,CAEA,uDACE,4BAAA,CAGF,0DAEE,gCAAA,CADA,6BACA,CAIJ,kCACE,YAAA,CAEA,+CACE,aAAA,CAGF,oEACE,+BAAA,CADF,oEACE,8BAAA,CAGF,gDACE,SAAA,CAIJ,iCACE,UAEA,CAHF,uCAGE,yBAAA,CADA,2BACA,CACA,uDAEE,qDAAA,CACA,4CAAA,CAHF,2DACE,+BAEA,CAHF,2DACE,gCAEA,CAEE,wEACE,wBAAA,CAEF,iFACE,uBAAA,CAKN,uCAEE,QAAA,CADA,cAAA,CAEA,SAAA,CAGA,YAAA,CANF,6CAKE,+CAAA,CADA,QAEA,CAIJ,0BACE,YAAA,CACA,kBAAA,CACA,UAAA,CAEA,+DAEE,2BAAA,CADA,wBACA,CAEA,wEAEE,kCAAA,CAFF,8EACE,0BACA,CAGJ,wCACE,SACA,CAFF,kDAEE,8BAAA,CAFF,kDAEE,6BAAA,CAGF,wDACE,gBAAA,CADF,wDACE,iBAAA",sourcesContent:[".swipeable-drawer__header {\n  position: absolute;\n  visibility: visible;\n  right: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  background-color: var(--color-background);\n  border-top: 1px solid var(--color-border);\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  top: -120px;\n  height: 120px;\n\n  .button--close {\n    top: 2px !important;\n    right: 2px !important;\n  }\n\n  span,\n  svg {\n    color: var(--color-text);\n  }\n}\n\n.swipeable-drawer__puller {\n  width: 30px;\n  height: 6px;\n  border-radius: 3px;\n  position: absolute;\n  top: 8px;\n  left: calc(50% - 15px);\n  background-color: var(--color-text);\n}\n\n.MuiDrawer-root > .MuiPaper-root {\n  overflow: visible;\n  color: var(--color-text);\n  position: absolute;\n}\n\n.swipeable-drawer__header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: var(--font-small);\n\n  h2:not(.card__title) {\n    padding: var(--spacing-s);\n    margin-top: var(--spacing-s);\n  }\n}\n\n.swipeable-drawer__menu {\n  display: flex;\n  align-items: flex-start;\n\n  svg {\n    margin-left: var(--spacing-xxs);\n  }\n}\n\n.swipeable-drawer__title-menu {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  .swipeable-drawer__title {\n    font-size: var(--font-xsmall);\n  }\n\n  .swipeable-drawer__subtitle {\n    font-size: var(--font-xxsmall);\n    color: var(--color-text-subtitle);\n  }\n}\n\n.swipeable-drawer__header-actions {\n  display: flex;\n\n  button {\n    padding: 0.3rem;\n  }\n\n  button:not(:last-child) {\n    margin-right: var(--spacing-xxs);\n  }\n\n  .menu__button {\n    opacity: 1;\n  }\n}\n\n.swipeable-drawer__expand-button {\n  width: 100%;\n  margin: var(--spacing-xxs) 0;\n  border-radius: 0 !important;\n  &.button--primary {\n    padding-left: var(--spacing-xxs);\n    background-color: var(--color-header-button) !important;\n    border-radius: var(--border-radius) !important;\n    .button__content {\n      .icon {\n        stroke: var(--color-text);\n      }\n      .button__label {\n        color: var(--color-text);\n      }\n    }\n  }\n\n  &.fixed {\n    position: fixed;\n    bottom: 0;\n    top: unset;\n    margin: 0px;\n    border-top: 1px solid var(--color-header-button);\n    z-index: 9999;\n  }\n}\n\n.chat-card--drawer-header {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n\n  .chat-card--drawer-header-mode {\n    padding: var(--spacing-s);\n    margin-top: var(--spacing-m);\n\n    .button-toggle {\n      padding: 0 var(--spacing-s);\n      height: var(--height-button-mobile);\n    }\n  }\n  .menu__button {\n    opacity: 1;\n    margin-right: var(--spacing-xs);\n  }\n\n  button:last-of-type {\n    margin-left: auto;\n  }\n}\n"],sourceRoot:""}]);const l=i},19231:(e,t,r)=>{var n=r(1892),a=r.n(n),o=r(95760),i=r.n(o),l=r(38311),s=r.n(l),A=r(58192),c=r.n(A),d=r(38060),u=r.n(d),p=r(54865),b=r.n(p),f=r(19969),w={};w.styleTagTransform=b(),w.setAttributes=c(),w.insert=s().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=u();a()(f.Z,w),f.Z&&f.Z.locals&&f.Z.locals}}]);
//# sourceMappingURL=9867-521c0f105c22c8114c4e.js.map