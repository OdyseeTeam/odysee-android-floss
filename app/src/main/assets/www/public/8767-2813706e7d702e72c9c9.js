"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[8767],{51635:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(88441),l=n(66598),r=n.n(l),c=n(96284),o=n(44908),i=n(77369),s=n(35080),u=n(71036).__;function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r,c,o=[],i=!0,s=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=r.call(n)).done)&&(o.push(a.value),o.length!==t);i=!0);}catch(e){s=!0,l=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var f=function(e){var t=e.singlePane,n=e.children;return t?n:a.createElement("div",{className:"card__first-pane"},n)},E=function(e){var t=e.isPageTitle,n=e.smallTitle,l=e.children,o=e.accessStatus,d=function(e){return a.createElement(s.Z,{title:u("This is a members-only content")},a.createElement("div",{className:r()("content-access-indicator",{locked:"locked"===e.status,unlocked:"unlocked"===e.status,purchased:"purchased"===e.status})},a.createElement(c.default,{icon:"locked"===e.status?i.LOCK:i.UNLOCK})))};return t?a.createElement("h1",{className:"card__title"},o&&a.createElement(d,{status:o}),a.createElement("font",{dangerouslySetInnerHTML:{__html:function(e){for(var t in null==e||null===(n=e.props)||void 0===n?void 0:n.children){var n,a,l;if("string"==typeof(null==e||null===(a=e.props)||void 0===a?void 0:a.children[t]))return null==e||null===(l=e.props)||void 0===l?void 0:l.children[t]}return e}(l)}})):a.createElement("h2",{className:r()("card__title",{"card__title--small":n})},l)};const p=function(e){var t=e.title,n=e.subtitle,l=e.titleActions,s=e.id,m=e.body,p=e.actions,_=e.icon,b=e.className,v=e.isPageTitle,h=void 0!==v&&v,y=e.isBodyList,g=void 0!==y&&y,N=e.smallTitle,S=void 0!==N&&N,k=e.defaultExpand,T=e.nag,C=e.onClick,A=e.children,w=e.secondPane,I=e.slimHeader,Z=e.background,P=e.backgroundImage,x=e.singlePane,B=e.headerActions,O=e.accessStatus,U=e.gridHeader,j=d((0,a.useState)(k),2),$=j[0],D=j[1],L=void 0!==k;return a.createElement("section",{role:C?"button":void 0,className:r()(b,"card",{"card__multi-pane":Boolean(w),"card--background":Z}),id:s,onClick:function(e){C&&(C(),e.stopPropagation())}},P&&a.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+P+")"}}),a.createElement(f,{singlePane:x},(t||n)&&a.createElement("div",{className:r()("card__header--between",{"card__header--slim":I,"card__header--grid":U})},a.createElement("div",{className:r()("card__title-section",{"card__title-section--body-list":g})},_&&a.createElement(c.default,{sectionIcon:!0,icon:_}),a.createElement("div",{className:"card__title-text"},a.createElement(E,{isPageTitle:h,smallTitle:S,accessStatus:O},t),n&&a.createElement("div",{className:r()("card__subtitle",{"card__subtitle--small":S})},n))),(l||L)&&a.createElement("div",{className:"card__title-actions-container"},l&&a.createElement("div",{className:r()("card__title-actions",{"card__title-actions--small":S})},l),L&&a.createElement("div",{className:"card__title-actions"},a.createElement(o.default,{button:"alt","aria-expanded":$,"aria-label":u($?"Less":"More"),icon:$?i.SUBTRACT:i.ADD,onClick:function(){return D(!$)}}))),B),(!L||L&&$)&&a.createElement(a.Fragment,null,m&&a.createElement("div",{className:r()("card__body",{"card__body--no-title":!t&&!n,"card__body--list":g})},m),p&&a.createElement("div",{className:"card__main-actions"},p),A&&a.createElement("div",{className:"card__main-actions"},A)),T),w&&a.createElement("div",{className:"card__second-pane"},w))}},53445:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(77369),l=n(88441),r=n(44908),c=n(71036).__;function o(e){var t=e.href,n=e.navigate,o=e.icon,i=e.iconSize,s=e.description;return l.createElement(r.default,{onClick:function(e){t&&e.stopPropagation()},className:"icon--help",icon:o||a.HELP,iconSize:i||14,title:s||c("Help"),description:s||c("Help"),href:t,navigate:n})}},48767:(e,t,n)=>{n.d(t,{L:()=>S,Z:()=>k});var a=n(77369),l=n(17526),r=n(73249),c=n(88441),o=n(68470),i=n(44908),s=n(53445),u=n(51635),d=n(74971),m=n(32158),f=n(42773),E=n(3658),p=n(86189),_=n(37662),b=n(71036).__;var v={doTipAccountStatus:_.BB};const h=(0,E.$j)((function(e){return{accountStatus:(0,p.en)(e)}}),v)((function(e){var t=e.accountStatus,n=e.doTipAccountStatus,l=(t||{}).total_tipped;return c.useEffect((function(){n()}),[n]),c.createElement(u.Z,{title:c.createElement(c.Fragment,null,b("Cash Balance")),subtitle:b("You can view your balance and transaction history on Stripe from the Bank Accounts section."),actions:c.createElement(c.Fragment,null,c.createElement("h2",{className:"section__title--small"},"$",l?(l/100).toFixed(2):0," ",b("Total Received Tips")),c.createElement("div",{className:"section__actions"},c.createElement(i.default,{button:"secondary",label:b("Bank Accounts"),icon:a.SETTINGS,navigate:"/$/".concat(r.SETTINGS_STRIPE_ACCOUNT)}),c.createElement(i.default,{button:"secondary",label:b("Payment Methods"),icon:a.SETTINGS,navigate:"/$/".concat(r.SETTINGS_STRIPE_CARD)})))})}));var y=n(71036).__;function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r,c,o=[],i=!0,s=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=r.call(n)).done)&&(o.push(a.value),o.length!==t);i=!0);}catch(e){s=!0,l=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S=400;const k=function(e){var t=e.balance,n=e.claimsBalance,E=e.supportsBalance,p=e.tipsBalance,_=e.doOpenModal,b=(e.hasSynced,e.doUtxoConsolidate),v=e.doFetchUtxoCounts,N=e.consolidatingUtxos,k=e.consolidateIsPending,T=e.massClaimingTips,C=e.massClaimIsPending,A=e.utxoCounts,w=g(c.useState(!1),2),I=w[0],Z=w[1],P=(A||{}).other,x=void 0===P?0:P,B=t+p+E+n,O=p+n+E,U=C||T||k||N;return c.useEffect((function(){t>100&&I&&v()}),[v,t,I]),c.createElement("div",{className:"columns"},c.createElement("div",{className:"column"},c.createElement(u.Z,{title:c.createElement(d.Z,{postfix:(0,f.p)(B),isTitle:!0}),subtitle:O>0?c.createElement(m.Z,{tokens:{lbc:c.createElement(d.Z,null)}},"Your total balance. All of this is yours, but some %lbc% is in use on channels and content right now."):c.createElement("span",null,y("Your total balance.")),actions:c.createElement(c.Fragment,null,c.createElement("h2",{className:"section__title--small"},c.createElement(m.Z,{tokens:{lbc_amount:c.createElement(o.Z,{amount:t,precision:4})}},"%lbc_amount% immediately spendable")),c.createElement("h2",{className:"section__title--small"},c.createElement(m.Z,{tokens:{lbc_amount:c.createElement(o.Z,{amount:O,precision:4})}},"%lbc_amount% boosting content"),c.createElement(i.default,{button:"link",label:y(I?"View less":"View more"),iconRight:I?a.UP:a.DOWN,onClick:function(){return Z(!I)}})),I&&c.createElement("div",{className:"section__subtitle"},c.createElement("dl",null,c.createElement("dt",null,c.createElement("span",{className:"dt__text"},y("...earned from others")),c.createElement("span",{className:"help--dt"},"(",y("Unlock to spend"),")")),c.createElement("dd",null,c.createElement("span",{className:"dd__text"},Boolean(p)&&c.createElement(i.default,{button:"link",className:"dd__button",disabled:U,icon:a.UNLOCK,onClick:function(){return _(l.w$)}}),c.createElement(o.Z,{amount:p,precision:4}))),c.createElement("dt",null,c.createElement("span",{className:"dt__text"},y("...on initial publishes")),c.createElement("span",{className:"help--dt"},"(",y("Delete or edit past content to spend"),")")),c.createElement("dd",null,c.createElement(o.Z,{amount:n,precision:4})),c.createElement("dt",null,c.createElement("span",{className:"dt__text"},y("...supporting content")),c.createElement("span",{className:"help--dt"},"(",y("Delete supports to spend"),")")),c.createElement("dd",null,c.createElement(o.Z,{amount:E,precision:4})))),c.createElement("div",{className:"section__actions"},c.createElement(i.default,{button:"primary",label:y("Buy"),icon:a.BUY,navigate:"/$/".concat(r.BUY)}),c.createElement(i.default,{button:"secondary",label:y("Receive"),icon:a.RECEIVE,navigate:"/$/".concat(r.RECEIVE)}),c.createElement(i.default,{button:"secondary",label:y("Send"),icon:a.SEND,navigate:"/$/".concat(r.SEND)})),(x>S||k||N)&&c.createElement("p",{className:"help"},c.createElement(m.Z,{tokens:{now:c.createElement(i.default,{button:"link",onClick:function(){return b()},disabled:U,label:y(k||N?"Consolidating...":"Consolidate Now")}),help:c.createElement(s.Z,{href:"https://help.odysee.tv/category-wallet/"})}},"Your wallet has a lot of change lying around. Consolidating will speed up your transactions. This could take some time. %now%%help%")))})),c.createElement("div",{className:"column"},c.createElement(h,null)))}},42773:(e,t,n)=>{function a(e,t){return e.toLocaleString("en",{minimumFractionDigits:void 0!==t?t:8})}n.d(t,{p:()=>a})}}]);
//# sourceMappingURL=8767-2813706e7d702e72c9c9.js.map