"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[6204],{25286:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var r=o(3658),n=o(15927),a=o(86189),l=o(88441),i=o(77369),d=o(1017),s=o(51635),u=o(44908),c=o(47159),f=o(71036).__;function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,n,a,l,i=[],d=!0,s=!1;try{if(a=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;d=!1}else for(;!(d=(r=a.call(o)).done)&&(i.push(r.value),i.length!==t);d=!0);}catch(e){s=!0,n=e}finally{try{if(!d&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}const m=function(e){var t=e.previousModal,o=e.previousProps,r=e.hasSavedCard,n=e.doHideModal,a=e.doOpenModal,p=y(l.useState(),2),m=p[0],b=p[1];return l.createElement(d.u_,{onAborted:m?void 0:n,isOpen:!0,type:"card",className:"modal--add-card"},l.createElement(u.default,{button:"link",className:"padding-small",label:f("Go Back"),icon:i.BACK,onClick:function(){n(),t&&a(t,o)}}),l.createElement(s.Z,{title:r?f("Card Details"):window.cordova&&!window.odysee.build.googlePlay?f("Add your Card"):f("We're sorry"),body:window.cordova&&!window.odysee.build.googlePlay?l.createElement(c.Z,{setIsBusy:b,isModal:!0}):f("Unfortunately Google does not allow us to process payments in this version of the app. You can get a more open version of the app at https://apk.odysee.tv or F-Droid. Alternatively you can also just visit Odysee.com in a browser."),actions:l.createElement("div",{className:"section__actions"},window.cordova&&!window.odysee.build.googlePlay&&l.createElement(u.default,{button:"primary",label:f("OK"),onClick:function(){n(),t&&a(t,o)},disabled:m||!r}),l.createElement(u.default,{button:"link",label:f("Cancel"),onClick:n,disabled:m}))}))};var b={doOpenModal:n.DG,doHideModal:n.gG};const v=(0,r.$j)((function(e){return{hasSavedCard:(0,a.Le)(e)}}),b)(m)}}]);
//# sourceMappingURL=modalStripeCard-7232bc7872d929f2f3a6.js.map