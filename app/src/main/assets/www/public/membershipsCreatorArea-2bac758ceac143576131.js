"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[9991],{67800:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(3658),a=r(86189),i=r(37662),o=r(88441),l=r(77369),s=r(44908),c=r(78432),m=r(71036).__;function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,l=[],s=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const u=function(e){var t=e.chargesEnabled,r=e.accountRequiresVerification,n=e.accountLinkResponse,a=e.accountStatusFetching,i=e.doTipAccountStatus,p=e.doGetAndSetAccountLink,u=A(o.useState(!1),2),b=u[0],d=u[1],h=void 0===t,g=null==n?void 0:n.url,C=null===t;return o.useEffect((function(){h&&i()}),[h,i]),h||a||b?o.createElement(s.default,{disabled:!0,button:"primary",label:o.createElement(c.Z,{message:m(b?"Confirming...":"Getting your bank account connection status...")}),icon:l.FINANCE}):r?o.createElement(s.default,{button:"primary",label:m("Complete Verification"),icon:l.SETTINGS,navigate:g,className:"stripe__complete-verification-button"}):g?o.createElement(s.default,{button:"link",label:m("Click here to connect a bank account"),navigate:g}):o.createElement(s.default,{button:"primary",label:m(C?"Retry":"Connect a bank account"),icon:l.FINANCE,onClick:C?i:function(){d(!0),p().then((function(){return d(!1)})).catch((function(){return d(!1)}))}})};var b={doTipAccountStatus:i.BB,doGetAndSetAccountLink:i.EY};const d=(0,n.$j)((function(e){return{chargesEnabled:(0,a.W1)(e),accountRequiresVerification:(0,a.Vx)(e),accountLinkResponse:(0,a.AV)(e),accountStatusFetching:(0,a.D)(e)}}),b)(u)},78432:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(88441);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var i=s(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function c(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}var m,A,p,u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(c,e);var t,r,a,s=l(c);function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),s.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){var e=this.props.message;return n.createElement("span",{className:"busy-indicator"},e," ",n.createElement("span",{className:"busy-indicator__loader"}))}}])&&i(t.prototype,r),a&&i(t,a),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.PureComponent);m=u,p={message:""},(A=c(A="defaultProps"))in m?Object.defineProperty(m,A,{value:p,enumerable:!0,configurable:!0,writable:!0}):m[A]=p;const b=u},85442:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(88441);const a=function(e){var t=e.children,r=e.title,a=e.subtitle,i=e.action;return r&&a&&i?n.createElement("div",{className:"error-bubble"},n.createElement("div",null,n.createElement("label",null,r),n.createElement("span",null,a)),i):t?n.createElement("span",{className:"error-bubble"},t):null}},53691:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var n=r(3658),a=r(88374),i=r(7920),o=r(81352),l=r(52338),s=r(88441),c=r(16643),m=r(50729),A=r(13690),p=r(6993),u=r(73249),b=r(77369),d=r(9319),h=r(4476),g=r(44908),C=r(86189),f=r(37662),y=r(60732),v=r(85442),E=r(67800),_=r(71036).__;const w=function(e){var t=e.component,r=e.switchToTiersTab,n=e.myChannelClaims,a=e.bankAccountConfirmed,i=e.accountDefaultCurrency,o=e.hasTiers,l=e.supportersList,c=e.doTipAccountStatus,m=!r;return s.useEffect((function(){void 0===a&&c()}),[a,c]),void 0===n||void 0===a||void 0===l&&!m?s.createElement("div",{className:"main--empty"},s.createElement(y.Z,null)):n&&0!==n.length?a?"usd"!==i?s.createElement(v.Z,null,_("Only USD banking currently supported, please check back later!")):o||m?t:s.createElement(v.Z,{title:_("You don't have any Tiers"),subtitle:_("To be able to begin receiving payments you have to add at least 1 Tier to your channel."),action:s.createElement(g.default,{requiresChannel:!0,button:"primary",label:_("Add a Tier"),onClick:r})}):s.createElement(v.Z,{title:_("Bank Account Status"),subtitle:_("To be able to begin receiving payments you must connect a Bank Account first."),action:s.createElement(E.Z,null)}):s.createElement(v.Z,{title:_("You don't have any channels"),subtitle:_("To be able to begin receiving payments you have to have at least 1 channel."),action:s.createElement(g.default,{button:"primary",navigate:"/$/".concat(u.CHANNEL_NEW),label:_("Create A Channel")})})};var k={doTipAccountStatus:f.BB};const x=(0,n.$j)((function(e,t){return{myChannelClaims:(0,i.rt)(e),bankAccountConfirmed:(0,C.W1)(e),accountDefaultCurrency:(0,C.Xw)(e),hasTiers:(0,o.Ll)(e),supportersList:(0,o.Sv)(e)}}),k)(w);var B=r(1892),P=r.n(B),S=r(95760),F=r.n(S),I=r(38311),T=r.n(I),O=r(58192),j=r.n(O),D=r(38060),R=r.n(D),N=r(54865),G=r.n(N),q=r(79584),M={};M.styleTagTransform=G(),M.setAttributes=j(),M.insert=T().bind(null,"head"),M.domAPI=F(),M.insertStyleElement=R();P()(q.Z,M);q.Z&&q.Z.locals&&q.Z.locals;var J=r(71036).__;function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,l=[],s=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L=(0,A.e)((function(){return r.e(153).then(r.bind(r,26009))})),V=(0,A.e)((function(){return r.e(8015).then(r.bind(r,20498))})),z=(0,A.e)((function(){return r.e(1174).then(r.bind(r,72498))})),H="tab",K={OVERVIEW:"overview",SUPPORTERS:"supporters",TIERS:"tiers"};const U=function(e){var t=e.activeChannelClaim,r=e.myChannelClaims,n=e.supportersList,a=e.doListAllMyMembershipTiers,i=e.doGetMembershipSupportersList,o=$(s.useState(!0),2),l=o[0],A=o[1],C=s.useMemo((function(){return r?t?l?r:[t]:t:r}),[t,l,r]);s.useEffect((function(){void 0!==r&&a()}),[a,r]),s.useEffect((function(){void 0===n&&i()}),[i,n]);var f=(0,c.k6)(),y=f.location.search,v=f.push,E=0;switch(new URLSearchParams(y).get(H)||K.OVERVIEW){case K.OVERVIEW:E=0;break;case K.SUPPORTERS:E=1;break;case K.TIERS:E=2}function _(e){var t="/$/".concat(u.CREATOR_MEMBERSHIPS,"?");0===e?t+="".concat(H,"=").concat(K.OVERVIEW):1===e?t+="".concat(H,"=").concat(K.SUPPORTERS):2===e&&(t+="".concat(H,"=").concat(K.TIERS)),v(t)}var w=function(){return _(2)};return s.createElement(d.Z,{className:"membershipPage-wrapper"},s.createElement("div",{className:"membership__mychannels-header"},s.createElement("label",null,J("Creator Portal"))),s.createElement(m.mQ,{onChange:_,index:E},s.createElement(m.td,{className:"tabs__list--collection-edit-page"},s.createElement(m.OK,null,J("Overview")),s.createElement(m.OK,null,J("My Supporters")),s.createElement(m.OK,null,J("My Tiers")),s.createElement("div",{className:"no-after"},s.createElement(m.OK,null,s.createElement(g.default,{navigate:"/$/".concat(u.MEMBERSHIPS_LANDING),label:J("Back To Memberships"),icon:b.BACK,button:"secondary"})))),s.createElement(m.nP,null,s.createElement(m.x4,null,s.createElement(x,{switchToTiersTab:w,component:s.createElement(L,{onChannelSelect:function(){A(!1),_(1)}})})),s.createElement(m.x4,null,s.createElement(x,{switchToTiersTab:w,component:s.createElement(s.Fragment,null,s.createElement("span",{className:"section__subtitle "},J("Choose what channel to list supporters for")),s.createElement(h.Z,{hideAnon:!0,allOptionProps:{onSelectAll:function(){return A(!0)},isSelected:l},onChannelSelect:function(){return A(!1)}}),s.createElement(z,{channelsToList:C,switchToTiersTab:w}))})),s.createElement(m.x4,null,s.createElement(x,{component:s.createElement(s.Fragment,null,s.createElement("div",{className:"create-tiers-header-buttons"},s.createElement("div",{className:"create-tiers-channel-selector"},s.createElement("span",{className:"section__subtitle "},J("Choose what channel to manage tiers for")),s.createElement(h.Z,{hideAnon:!0,onChannelSelect:function(){return A(!1)}})),s.createElement("div",{className:"create-tiers-preview-button"},s.createElement("span",{className:"section__subtitle "},J("Preview your tiers")),s.createElement("br",null),s.createElement(g.default,{navigate:"".concat((0,p.$U)(null==t?void 0:t.canonical_url),"?view=membership"),label:J("See Your Memberships"),icon:b.BACK,button:"secondary"}))),s.createElement(V,null))})))))};var Y={doListAllMyMembershipTiers:l.KV,doGetMembershipSupportersList:l.b_};const W=(0,n.$j)((function(e,t){return{activeChannelClaim:(0,a.YG)(e),myChannelClaims:(0,i.rt)(e),supportersList:(0,o.Sv)(e)}}),Y)(U)},79584:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(26612),a=r.n(n),i=r(40805),o=r.n(i)()(a());o.push([e.id,"@media(max-width:900px){.membershipPage-wrapper .tabs{position:unset}}[dir] .membershipPage-wrapper .tabs__list{border-radius:0 0 var(--border-radius) var(--border-radius)}[dir=ltr] .membershipPage-wrapper .tabs__list .no-after button{margin-right:var(--spacing-s)}[dir=rtl] .membershipPage-wrapper .tabs__list .no-after button{margin-left:var(--spacing-s)}.membershipPage-wrapper .tabs__list .no-after .tab .button--secondary .button__label{color:var(--color-text)!important}.membershipPage-wrapper .tabs__list .no-after .tab .button--secondary .icon{stroke:var(--color-text)!important}[dir] .membershipPage-wrapper .tabs__list .no-after .tab:hover .button--secondary{background-color:unset!important}.membershipPage-wrapper .tabs__list .no-after .tab:hover .button--secondary .button__label{color:var(--color-primary)!important}.membershipPage-wrapper .tabs__list .no-after .tab:hover .button--secondary .icon{stroke:var(--color-primary)!important}.membershipPage-wrapper .tabs__list .no-after .tab:hover:after{display:none}@media(max-width:900px){.membershipPage-wrapper .tabs__list{overflow-x:auto;overflow-y:hidden}.membershipPage-wrapper .tabs__list .tab{flex:auto;white-space:nowrap}[dir=ltr] .membershipPage-wrapper .tabs__list .tab{margin-right:var(--spacing-m)}[dir=rtl] .membershipPage-wrapper .tabs__list .tab{margin-left:var(--spacing-m)}[dir=ltr] .membershipPage-wrapper .tabs__list .tab:last-of-type{margin-right:0}[dir=rtl] .membershipPage-wrapper .tabs__list .tab:last-of-type{margin-left:0}.membershipPage-wrapper .tabs__list .no-after{position:absolute;top:var(--spacing-s)}[dir=ltr] .membershipPage-wrapper .tabs__list .no-after{right:0}[dir=rtl] .membershipPage-wrapper .tabs__list .no-after{left:0}[dir] .membershipPage-wrapper .tabs__list .no-after .button{background-color:var(--color-header-background)!important}[dir=ltr] .membershipPage-wrapper .tabs__list .no-after .button{margin-right:var(--spacing-m)}[dir=rtl] .membershipPage-wrapper .tabs__list .no-after .button{margin-left:var(--spacing-m)}.membershipPage-wrapper .tabs__list .no-after .button__label{display:none}}[dir] .membership-table__wrapper .table{margin-bottom:28px}[dir] .membership-table__wrapper .table thead th{border-bottom:2px solid rgba(var(--color-primary-static),.4)}[dir] .membership-table__wrapper .table tbody tr td{border-bottom:2px solid rgba(var(--color-primary-static),.4)!important;padding:.8rem}@media(max-width:900px){.membership-table__wrapper{overflow-x:auto!important}.membership-table__wrapper .table .channelName-header{min-width:180px}.membership-table__wrapper .table tbody tr td,.membership-table__wrapper .table thead tr th{white-space:nowrap}[dir] .membership-table__wrapper .table tbody tr td{padding:.6rem!important}[dir=ltr] .membership-table__wrapper .table tbody tr td{padding-right:0!important}[dir=rtl] .membership-table__wrapper .table tbody tr td{padding-left:0!important}}[dir] .back-to-memberships-button{margin-bottom:-3px}[dir=ltr] .back-to-memberships-button{margin-left:6px;transform:rotate(180deg)}[dir=rtl] .back-to-memberships-button{margin-right:6px;transform:rotate(-180deg)}.create-tiers-header-buttons{display:flex;max-width:100%}@media(max-width:900px){.create-tiers-header-buttons{flex-direction:column}[dir] .create-tiers-header-buttons{margin-bottom:var(--spacing-s)}}.create-tiers-channel-selector{width:50%}@media(max-width:900px){.create-tiers-channel-selector{width:100%}}.create-tiers-preview-button{display:inline-block;width:50%}[dir=ltr] .create-tiers-preview-button{text-align:right}[dir=rtl] .create-tiers-preview-button{text-align:left}@media(max-width:900px){.create-tiers-preview-button{width:100%}[dir] .create-tiers-preview-button{margin-bottom:var(--spacing-s)}[dir=ltr] .create-tiers-preview-button{text-align:left}[dir=rtl] .create-tiers-preview-button{text-align:right}}[dir] .table-channel-header{margin-bottom:6px}[dir] .table-channel-header .channel-thumbnail{margin-bottom:var(--spacing-s)}[dir=ltr] .table-channel-header .channel-thumbnail{margin-right:var(--spacing-s)}[dir=rtl] .table-channel-header .channel-thumbnail{margin-left:var(--spacing-s)}.membership__mychannels-header{height:210px;overflow:hidden;position:relative;width:100%}[dir] .membership__mychannels-header{background-size:cover;border-radius:var(--border-radius) var(--border-radius) 0 0}.membership__mychannels-header label{bottom:var(--spacing-m);color:var(--color-text);font-size:var(--font-large);font-weight:var(--font-weight-bold);position:absolute}[dir] .membership__mychannels-header label{background-color:var(--color-header-background);border-radius:var(--border-radius);padding:var(--spacing-m)}[dir=ltr] .membership__mychannels-header label{left:var(--spacing-m)}[dir=rtl] .membership__mychannels-header label{right:var(--spacing-m)}@media(max-width:900px){[dir] .membership__mychannels-header{background-image:url(https://thumbnails.odycdn.com/optimize/s:600:0/quality:95/plain/https://static.odycdn.com/images/banner_creatorPortal.jpg);background-size:cover}}@media(min-width:900px){[dir] .membership__mychannels-header{background-image:url(https://thumbnails.odycdn.com/optimize/s:900:0/quality:95/plain/https://static.odycdn.com/images/banner_creatorPortal.jpg)}[dir=ltr] .membership__mychannels-header{background-position:top -80px left 0}[dir=rtl] .membership__mychannels-header{background-position:top -80px right 0}}@media(min-width:1150px){[dir] .membership__mychannels-header{background-image:url(https://thumbnails.odycdn.com/optimize/s:1150:0/quality:95/plain/https://static.odycdn.com/images/banner_creatorPortal.jpg)}[dir=ltr] .membership__mychannels-header{background-position:top -160px left 0}[dir=rtl] .membership__mychannels-header{background-position:top -160px right 0}}@media(min-width:1600px){[dir] .membership__mychannels-header{background-image:url(https://thumbnails.odycdn.com/optimize/s:1600:0/quality:95/plain/https://static.odycdn.com/images/banner_creatorPortal.jpg)}[dir=ltr] .membership__mychannels-header{background-position:top -170px left 0}[dir=rtl] .membership__mychannels-header{background-position:top -170px right 0}}@media(min-width:2500px){[dir] .membership__mychannels-header{background-image:url(https://static.odycdn.com/images/banner_creatorPortal.jpg)}[dir=ltr] .membership__mychannels-header{background-position:top -170px left 0}[dir=rtl] .membership__mychannels-header{background-position:top -170px right 0}}","",{version:3,sources:["webpack://./../ui/page/creatorMemberships/creatorArea/style.scss"],names:[],mappings:"AAII,wBADF,8BAEI,cAAA,CAAA,CAGJ,0CACE,2DAAA,CAGE,+DACE,6BAAA,CADF,+DACE,4BAAA,CAIE,qFACE,iCAAA,CAEF,4EACE,kCAAA,CAIF,kFACE,gCAAA,CACA,2FACE,oCAAA,CAEF,kFACE,qCAAA,CAIJ,+DACE,YAAA,CAMR,wBAlCF,oCAmCI,eAAA,CACA,iBAAA,CAEA,yCACE,SAAA,CACA,kBACA,CAHF,mDAGE,6BAAA,CAHF,mDAGE,4BAAA,CACA,gEACE,cAAA,CADF,gEACE,aAAA,CAIJ,8CACE,iBAAA,CACA,oBACA,CAHF,wDAGE,OAAA,CAHF,wDAGE,MAAA,CACA,4DAEE,yDAAA,CAFF,gEACE,6BACA,CAFF,gEACE,4BACA,CAEF,6DACE,YAAA,CAAA,CAQR,wCAeE,kBAAA,CAbE,iDACE,4DAAA,CAKA,oDAEE,sEAAA,CADA,aACA,CAOR,wBAlBF,2BAmBI,yBAAA,CAGE,sDACE,eAAA,CAWE,4FACE,kBAEA,CAHF,oDAEE,uBACA,CAHF,wDAGE,yBAAA,CAHF,wDAGE,wBAAA,CAAA,CAQZ,kCAGE,kBAAA,CAHF,sCAEE,eAAA,CADA,wBAEA,CAHF,sCAEE,gBAAA,CADA,yBAEA,CAGF,6BAEE,YAAA,CADA,cACA,CAEA,wBAJF,6BAKI,qBACA,CANJ,mCAMI,8BAAA,CAAA,CAIJ,+BACE,SAAA,CAGA,wBAJF,+BAKI,UAAA,CAAA,CAIJ,6BAEE,oBAAA,CADA,SAEA,CAHF,uCAGE,gBAAA,CAHF,uCAGE,eAAA,CACA,wBAJF,6BAKI,UAEA,CAPJ,mCAOI,8BAAA,CAPJ,uCAMI,eACA,CAPJ,uCAMI,gBACA,CAAA,CAIJ,4BACE,iBAAA,CACA,+CAEE,8BAAA,CAFF,mDACE,6BACA,CAFF,mDACE,4BACA,CAIJ,+BAME,YAAA,CADA,eAAA,CAJA,iBAAA,CACA,UAIA,CANF,qCAGE,qBAAA,CACA,2DAEA,CAEA,qCAKE,uBAAA,CAKA,uBAAA,CAFA,2BAAA,CACA,mCAAA,CARA,iBASA,CAVF,2CAEE,+CAAA,CAEA,kCAAA,CAGA,wBAGA,CAVF,+CAME,qBAIA,CAVF,+CAME,sBAIA,CAGF,wBArBF,qCAsBI,+IAAA,CACA,qBAAA,CAAA,CAGF,wBA1BF,qCA2BI,+IACA,CA5BJ,yCA4BI,oCAAA,CA5BJ,yCA4BI,qCAAA,CAAA,CAGF,yBA/BF,qCAgCI,gJACA,CAjCJ,yCAiCI,qCAAA,CAjCJ,yCAiCI,sCAAA,CAAA,CAGF,yBApCF,qCAqCI,gJACA,CAtCJ,yCAsCI,qCAAA,CAtCJ,yCAsCI,sCAAA,CAAA,CAGF,yBAzCF,qCA0CI,+EACA,CA3CJ,yCA2CI,qCAAA,CA3CJ,yCA2CI,sCAAA,CAAA",sourcesContent:["@import '~ui/scss/init/breakpoints';\n\n.membershipPage-wrapper {\n  .tabs {\n    @media (max-width: $breakpoint-small) {\n      position: unset;\n    }\n  }\n  .tabs__list {\n    border-radius: 0 0 var(--border-radius) var(--border-radius);\n\n    .no-after {\n      button {\n        margin-right: var(--spacing-s);\n      }\n      .tab {\n        .button--secondary {\n          .button__label {\n            color: var(--color-text) !important;\n          }\n          .icon {\n            stroke: var(--color-text) !important;\n          }\n        }\n        &:hover {\n          .button--secondary {\n            background-color: unset !important;\n            .button__label {\n              color: var(--color-primary) !important;\n            }\n            .icon {\n              stroke: var(--color-primary) !important;\n            }\n          }\n\n          &::after {\n            display: none;\n          }\n        }\n      }\n    }\n\n    @media (max-width: $breakpoint-small) {\n      overflow-x: auto;\n      overflow-y: hidden;\n\n      .tab {\n        flex: auto;\n        white-space: nowrap;\n        margin-right: var(--spacing-m);\n        &:last-of-type {\n          margin-right: 0;\n        }\n      }\n\n      .no-after {\n        position: absolute;\n        top: var(--spacing-s);\n        right: 0;\n        .button {\n          margin-right: var(--spacing-m);\n          background-color: var(--color-header-background) !important;\n        }\n        .button__label {\n          display: none;\n        }\n      }\n    }\n  }\n}\n\n.membership-table__wrapper {\n  .table {\n    thead {\n      th {\n        border-bottom: 2px solid rgba(var(--color-primary-static), 0.4);\n      }\n    }\n    tbody {\n      tr {\n        td {\n          padding: 0.8rem;\n          border-bottom: 2px solid rgba(var(--color-primary-static), 0.4) !important;\n        }\n      }\n    }\n\n    margin-bottom: 28px;\n  }\n  @media (max-width: $breakpoint-small) {\n    overflow-x: auto !important;\n\n    .table {\n      .channelName-header {\n        min-width: 180px;\n      }\n      thead {\n        tr {\n          th {\n            white-space: nowrap;\n          }\n        }\n      }\n      tbody {\n        tr {\n          td {\n            white-space: nowrap;\n            padding: 0.6rem !important;\n            padding-right: 0 !important;\n          }\n        }\n      }\n    }\n  }\n}\n\n.back-to-memberships-button {\n  transform: rotate(180deg);\n  margin-left: 6px;\n  margin-bottom: -3px;\n}\n\n.create-tiers-header-buttons {\n  max-width: 100%;\n  display: flex;\n\n  @media (max-width: $breakpoint-small) {\n    flex-direction: column;\n    margin-bottom: var(--spacing-s);\n  }\n}\n\n.create-tiers-channel-selector {\n  width: 50%;\n  // display: inline-block;\n\n  @media (max-width: $breakpoint-small) {\n    width: 100%;\n  }\n}\n\n.create-tiers-preview-button {\n  width: 50%;\n  display: inline-block;\n  text-align: right;\n  @media (max-width: $breakpoint-small) {\n    width: 100%;\n    text-align: left;\n    margin-bottom: var(--spacing-s);\n  }\n}\n\n.table-channel-header {\n  margin-bottom: 6px;\n  .channel-thumbnail {\n    margin-right: var(--spacing-s);\n    margin-bottom: var(--spacing-s);\n  }\n}\n\n.membership__mychannels-header {\n  position: relative;\n  width: 100%;\n  background-size: cover;\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n  overflow: hidden;\n  height: 210px;\n\n  label {\n    position: absolute;\n    background-color: var(--color-header-background);\n    padding: var(--spacing-m);\n    border-radius: var(--border-radius);\n    bottom: var(--spacing-m);\n    left: var(--spacing-m);\n    padding: var(--spacing-m);\n    font-size: var(--font-large);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text);\n  }\n\n  @media (max-width: $breakpoint-small) {\n    background-image: url('https://thumbnails.odycdn.com/optimize/s:600:0/quality:95/plain/https://static.odycdn.com/images/banner_creatorPortal.jpg');\n    background-size: cover;\n  }\n\n  @media (min-width: $breakpoint-small) {\n    background-image: url('https://thumbnails.odycdn.com/optimize/s:900:0/quality:95/plain/https://static.odycdn.com/images/banner_creatorPortal.jpg');\n    background-position: top -80px left 0px;\n  }\n\n  @media (min-width: $breakpoint-medium) {\n    background-image: url('https://thumbnails.odycdn.com/optimize/s:1150:0/quality:95/plain/https://static.odycdn.com/images/banner_creatorPortal.jpg');\n    background-position: top -160px left 0px;\n  }\n\n  @media (min-width: $breakpoint-large) {\n    background-image: url('https://thumbnails.odycdn.com/optimize/s:1600:0/quality:95/plain/https://static.odycdn.com/images/banner_creatorPortal.jpg');\n    background-position: top -170px left 0px;\n  }\n\n  @media (min-width: $breakpoint-xlarge) {\n    background-image: url('https://static.odycdn.com/images/banner_creatorPortal.jpg');\n    background-position: top -170px left 0px;\n  }\n}\n"],sourceRoot:""}]);const l=o}}]);
//# sourceMappingURL=membershipsCreatorArea-2bac758ceac143576131.js.map