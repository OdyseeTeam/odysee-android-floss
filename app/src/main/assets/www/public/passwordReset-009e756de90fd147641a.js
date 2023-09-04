"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[7276],{51635:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(88441),n=a(66598),l=a.n(n),c=a(96284),i=a(44908),s=a(77369),o=a(35080),u=a(71036).__;function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,l,c,i=[],s=!0,o=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=l.call(a)).done)&&(i.push(r.value),i.length!==t);s=!0);}catch(e){o=!0,n=e}finally{try{if(!s&&null!=a.return&&(c=a.return(),Object(c)!==c))return}finally{if(o)throw n}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var f=function(e){var t=e.singlePane,a=e.children;return t?a:r.createElement("div",{className:"card__first-pane"},a)},y=function(e){var t=e.isPageTitle,a=e.smallTitle,n=e.children,i=e.accessStatus,d=function(e){return r.createElement(o.Z,{title:u("This is a members-only content")},r.createElement("div",{className:l()("content-access-indicator",{locked:"locked"===e.status,unlocked:"unlocked"===e.status,purchased:"purchased"===e.status})},r.createElement(c.default,{icon:"locked"===e.status?s.LOCK:s.UNLOCK})))};return t?r.createElement("h1",{className:"card__title"},i&&r.createElement(d,{status:i}),r.createElement("font",{dangerouslySetInnerHTML:{__html:function(e){for(var t in null==e||null===(a=e.props)||void 0===a?void 0:a.children){var a,r,n;if("string"==typeof(null==e||null===(r=e.props)||void 0===r?void 0:r.children[t]))return null==e||null===(n=e.props)||void 0===n?void 0:n.children[t]}return e}(n)}})):r.createElement("h2",{className:l()("card__title",{"card__title--small":a})},n)};const _=function(e){var t=e.title,a=e.subtitle,n=e.titleActions,o=e.id,m=e.body,_=e.actions,p=e.icon,E=e.className,v=e.isPageTitle,b=void 0!==v&&v,h=e.isBodyList,g=void 0!==h&&h,N=e.smallTitle,k=void 0!==N&&N,w=e.defaultExpand,S=e.nag,C=e.onClick,A=e.children,T=e.secondPane,P=e.slimHeader,I=e.background,O=e.backgroundImage,R=e.singlePane,j=e.headerActions,Z=e.accessStatus,U=e.gridHeader,x=d((0,r.useState)(w),2),$=x[0],H=x[1],L=void 0!==w;return r.createElement("section",{role:C?"button":void 0,className:l()(E,"card",{"card__multi-pane":Boolean(T),"card--background":I}),id:o,onClick:function(e){C&&(C(),e.stopPropagation())}},O&&r.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+O+")"}}),r.createElement(f,{singlePane:R},(t||a)&&r.createElement("div",{className:l()("card__header--between",{"card__header--slim":P,"card__header--grid":U})},r.createElement("div",{className:l()("card__title-section",{"card__title-section--body-list":g})},p&&r.createElement(c.default,{sectionIcon:!0,icon:p}),r.createElement("div",{className:"card__title-text"},r.createElement(y,{isPageTitle:b,smallTitle:k,accessStatus:Z},t),a&&r.createElement("div",{className:l()("card__subtitle",{"card__subtitle--small":k})},a))),(n||L)&&r.createElement("div",{className:"card__title-actions-container"},n&&r.createElement("div",{className:l()("card__title-actions",{"card__title-actions--small":k})},n),L&&r.createElement("div",{className:"card__title-actions"},r.createElement(i.default,{button:"alt","aria-expanded":$,"aria-label":u($?"Less":"More"),icon:$?s.SUBTRACT:s.ADD,onClick:function(){return H(!$)}}))),j),(!L||L&&$)&&r.createElement(r.Fragment,null,m&&r.createElement("div",{className:l()("card__body",{"card__body--no-title":!t&&!a,"card__body--list":g})},m),_&&r.createElement("div",{className:"card__main-actions"},_),A&&r.createElement("div",{className:"card__main-actions"},A)),S),T&&r.createElement("div",{className:"card__second-pane"},T))}},767:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(3658),n=a(9767),l=a(65572),c=a(33441),i=a(73249),s=a(88441),o=a(16643),u=a(51635),d=a(60732),m=a(94720),f=a(39188),y=a(14443),_=a(44908),p=a(15937),E=a(71036).__;function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,l,c,i=[],s=!0,o=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=l.call(a)).done)&&(i.push(r.value),i.length!==t);s=!0);}catch(e){o=!0,n=e}finally{try{if(!s&&null!=a.return&&(c=a.return(),Object(c)!==c))return}finally{if(o)throw n}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const h=function(e){var t=e.doUserPasswordReset,a=e.passwordResetPending,r=e.passwordResetError,n=e.passwordResetSuccess,l=e.doToast,c=e.doClearPasswordEntry,b=e.doClearEmailEntry,h=e.emailToVerify,g=(0,o.k6)(),N=g.location,k=g.push,w=g.goBack,S=v(s.useState(h||""),2),C=S[0],A=S[1],T=C.match(f.C),P=N.pathname==="/$/".concat(i.AUTH_SIGNIN);return s.useEffect((function(){n&&l({message:E("Email sent!")})}),[n,l]),s.createElement("section",{className:"main__sign-in"},s.createElement(u.Z,{title:E("Reset your password"),actions:s.createElement("div",null,s.createElement(m.l0,{onSubmit:function(){C&&t(C)},className:"section"},s.createElement(m.Wi,{autoFocus:!0,disabled:n,placeholder:E("yourstruly@example.com"),type:"email",name:"sign_in_email",id:"username",autoComplete:"on",label:E("Email"),value:C,onChange:function(e){return A(e.target.value)}}),s.createElement("div",{className:"section__actions"},s.createElement(_.default,{button:"primary",type:"submit",label:E(a?"Resetting":"Reset Password"),disabled:!C||!T||a||n}),s.createElement(_.default,{button:"link",label:E("Cancel"),onClick:function(){A(""),c(),b(),P?k("/$/".concat(i.AUTH_SIGNIN)):w()}}),a&&s.createElement(d.Z,{type:"small"})))),nag:s.createElement(s.Fragment,null,r&&s.createElement(p.Z,{type:"error",relative:!0,message:s.createElement(y.Z,null,r)}),n&&s.createElement(p.Z,{type:"helpful",relative:!0,message:E("Check your email for a link to reset your password.")}))}))};const g=(0,r.$j)((function(e){return{passwordResetSuccess:(0,n.Wk)(e),passwordResetIsPending:(0,n.J8)(e),passwordResetError:(0,n.E0)(e),emailToVerify:(0,n.Oh)(e)}}),{doUserPasswordReset:l.Oz,doToast:c.QJ,doClearPasswordEntry:l.GE,doClearEmailEntry:l.pD})(h)},39188:(e,t,a)=>{a.d(t,{C:()=>r});var r=/^[^@]+@[^@]+$/},45130:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var r=a(88441),n=a(767),l=a(9319);const c=function(){return r.createElement(l.Z,{authPage:!0},r.createElement(n.Z,null))}}}]);
//# sourceMappingURL=passwordReset-009e756de90fd147641a.js.map