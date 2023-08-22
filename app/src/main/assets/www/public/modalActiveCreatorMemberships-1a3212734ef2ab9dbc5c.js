"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[7704],{51635:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(88441),r=a(66598),c=a.n(r),l=a(96284),i=a(44908),o=a(77369),s=a(35080),u=a(71036).__;function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,c,l,i=[],o=!0,s=!1;try{if(c=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;o=!1}else for(;!(o=(n=c.call(a)).done)&&(i.push(n.value),i.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{if(!o&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var b=function(e){var t=e.singlePane,a=e.children;return t?a:n.createElement("div",{className:"card__first-pane"},a)},_=function(e){var t=e.isPageTitle,a=e.smallTitle,r=e.children,i=e.accessStatus,d=function(e){return n.createElement(s.Z,{title:u("This is a members-only content")},n.createElement("div",{className:c()("content-access-indicator",{locked:"locked"===e.status,unlocked:"unlocked"===e.status,purchased:"purchased"===e.status})},n.createElement(l.default,{icon:"locked"===e.status?o.LOCK:o.UNLOCK})))};return t?n.createElement("h1",{className:"card__title"},i&&n.createElement(d,{status:i}),n.createElement("font",{dangerouslySetInnerHTML:{__html:function(e){for(var t in null==e||null===(a=e.props)||void 0===a?void 0:a.children){var a,n,r;if("string"==typeof(null==e||null===(n=e.props)||void 0===n?void 0:n.children[t]))return null==e||null===(r=e.props)||void 0===r?void 0:r.children[t]}return e}(r)}})):n.createElement("h2",{className:c()("card__title",{"card__title--small":a})},r)};const f=function(e){var t=e.title,a=e.subtitle,r=e.titleActions,s=e.id,m=e.body,f=e.actions,y=e.icon,v=e.className,p=e.isPageTitle,h=void 0!==p&&p,E=e.isBodyList,g=void 0!==E&&E,k=e.smallTitle,N=void 0!==k&&k,A=e.defaultExpand,T=e.nag,C=e.onClick,S=e.children,I=e.secondPane,w=e.slimHeader,O=e.background,P=e.backgroundImage,M=e.singlePane,j=e.headerActions,x=e.accessStatus,B=e.gridHeader,H=d((0,n.useState)(A),2),L=H[0],U=H[1],R=void 0!==A;return n.createElement("section",{role:C?"button":void 0,className:c()(v,"card",{"card__multi-pane":Boolean(I),"card--background":O}),id:s,onClick:function(e){C&&(C(),e.stopPropagation())}},P&&n.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+P+")"}}),n.createElement(b,{singlePane:M},(t||a)&&n.createElement("div",{className:c()("card__header--between",{"card__header--slim":w,"card__header--grid":B})},n.createElement("div",{className:c()("card__title-section",{"card__title-section--body-list":g})},y&&n.createElement(l.default,{sectionIcon:!0,icon:y}),n.createElement("div",{className:"card__title-text"},n.createElement(_,{isPageTitle:h,smallTitle:N,accessStatus:x},t),a&&n.createElement("div",{className:c()("card__subtitle",{"card__subtitle--small":N})},a))),(r||R)&&n.createElement("div",{className:"card__title-actions-container"},r&&n.createElement("div",{className:c()("card__title-actions",{"card__title-actions--small":N})},r),R&&n.createElement("div",{className:"card__title-actions"},n.createElement(i.default,{button:"alt","aria-expanded":L,"aria-label":u(L?"Less":"More"),icon:L?o.SUBTRACT:o.ADD,onClick:function(){return U(!L)}}))),j),(!R||R&&L)&&n.createElement(n.Fragment,null,m&&n.createElement("div",{className:c()("card__body",{"card__body--no-title":!t&&!a,"card__body--list":g})},m),f&&n.createElement("div",{className:"card__main-actions"},f),S&&n.createElement("div",{className:"card__main-actions"},S)),T),I&&n.createElement("div",{className:"card__second-pane"},I))}},49420:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(3658),r=a(15927),c=a(52705),l=a(35101),i=a(33441),o=a(88441),s=a(1017),u=a(51635),d=a(44908),m=a(77369),b=a(73249),_=a(71036).__;const f=(0,n.$j)((function(e){return{transactionItems:(0,l.eT)(e)}}),(function(e){return{toast:function(t,a){return e((0,i.QJ)({message:t,isError:a}))},closeModal:function(){return e((0,r.gG)())},abandonTxo:function(t,a){return e((0,c.j7)(t,a))},doResolveUri:function(t){return e((0,c.nt)(t))}}}))((function(e){var t=e.closeModal,a=e.bankAccountConfirmed,n=o.createElement(d.default,{button:"primary",icon:m.MEMBERSHIP,label:_("Activate Memberships")}),r=o.createElement(d.default,{button:"primary",icon:m.FINANCE,label:_("Add A Bank Account"),navigate:"$/".concat(b.SETTINGS_STRIPE_ACCOUNT)});return o.createElement(s.u_,{ariaHideApp:!1,isOpen:!0,type:"card",onAborted:t},o.createElement(u.Z,{className:"stripe__confirm-remove-membership",title:_("Activate Memberships"),subtitle:a?"Once you activate your memberships users will be able to subscribe to your created tiers.\n            If a user subscribes to your tier you will not be able to delete it until their subscription has been cancelled\n            (by them or by you), so don’t activate your memberships until you’re ready!":"Before you can activate your memberships you have to link a bank account first.\n            This will be the way you can receive your monthly payments from users.\n            Once you have linked your bank account you can click this button again and launch your memberships!",actions:o.createElement("div",{className:"section__actions",style:{marginTop:"10px"}},a?n:r,o.createElement(d.default,{button:"link",label:_("Cancel"),onClick:t}))}))}))}}]);
//# sourceMappingURL=modalActiveCreatorMemberships-1a3212734ef2ab9dbc5c.js.map