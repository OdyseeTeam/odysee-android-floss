"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[3792],{1992:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(3658),a=n(7920),l=n(81352),i=n(88441),c=n(77369),o=n(17526),u=n(13453),s=n(32918),m=n(48062),d=n(35156),f=n(66598),E=n.n(f);const p=function(e){var t=e.title,n=e.children,r=e.className;return i.createElement("h1",{className:E()(r)},i.createElement("span",null,t),n)};const _=(0,r.$j)((function(e,t){return{title:(0,a.$8)(e,t.uri)}}))(p);var N=n(71086),b=n(41385),v=n(34913),y=n(79345),I=n(71551),h=n(5272),k=n(44908),A=n(74971),S=n(71036).__;function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,i,c=[],o=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{if(!o&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T={NONE:"none",CREDIT_DETAILS:"credit_details",FILE_DETAILS:"file_details"};const C=function(e){var t=e.uri,n=e.claim,r=e.claimIsMine,a=e.contentUnlocked,l=e.doOpenModal,f=D(i.useState(T.NONE),2),p=f[0],O=f[1];if(!n)return null;var C=parseFloat(n.amount)+parseFloat(n.meta.support_amount),L=(0,u.Hf)(C,2,!0),Z=n&&n.meta&&n.meta.support_amount&&Number(n.meta.support_amount)>0;function g(e){O(p===e?T.NONE:e)}return i.createElement("div",{className:"post"},i.createElement(_,{uri:t,className:"post__title"}),i.createElement(m.Z,{uri:t}),i.createElement("div",{className:E()("post__info",{"post__info--expanded":p!==T.NONE})},i.createElement("span",{className:"post__date"},i.createElement(h.Z,{uri:t,type:"date"}),a&&i.createElement(y.Z,{uri:t})),i.createElement("div",{className:"post__info--grouped"},i.createElement(k.default,{button:"link",className:"dim",icon:c.INFO,"aria-label":S("View claim details"),onClick:function(){return g(T.FILE_DETAILS)}}),i.createElement(k.default,{button:"link",className:"dim",onClick:function(){return g(T.CREDIT_DETAILS)}},i.createElement(A.Z,{postfix:p===T.CREDIT_DETAILS?S("Hide"):L})),r&&Z&&i.createElement(k.default,{button:"link",className:"expandable__button",icon:c.UNLOCK,"aria-label":S("Unlock tips"),onClick:function(){l(o.dd,{uri:t})}}))),p===T.CREDIT_DETAILS&&i.createElement("div",{className:"section post__info--credit-details"},i.createElement(v.Z,{uri:t})),p===T.FILE_DETAILS&&i.createElement("div",{className:"section post__info--credit-details"},i.createElement(I.Z,{uri:t,type:"large"}),i.createElement(s.Z,{uri:t})),i.createElement(d.Z,{uri:t}),i.createElement("div",{className:"file-render--post-container"},i.createElement(b.Z,{uri:t})),i.createElement(N.Z,{uri:t}))};var L=n(15927);const Z=(0,r.$j)((function(e,t){var n=t.uri,r=(0,a.B0)(e,n);return{claim:r,claimIsMine:(0,a.ZJ)(e,n),contentUnlocked:r&&(0,l.Pt)(e,r.claim_id)}}),{doOpenModal:L.DG})(C)}}]);
//# sourceMappingURL=postViewer-7d7ea868e60ce92fd44f.js.map