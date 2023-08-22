"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[1315],{51635:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(88441),r=n(66598),l=n.n(r),i=n(96284),c=n(44908),o=n(77369),s=n(35080),d=n(71036).__;function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,i,c=[],o=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=l.call(n)).done)&&(c.push(a.value),c.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{if(!o&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw r}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var A=function(e){var t=e.singlePane,n=e.children;return t?n:a.createElement("div",{className:"card__first-pane"},n)},g=function(e){var t=e.isPageTitle,n=e.smallTitle,r=e.children,c=e.accessStatus,u=function(e){return a.createElement(s.Z,{title:d("This is a members-only content")},a.createElement("div",{className:l()("content-access-indicator",{locked:"locked"===e.status,unlocked:"unlocked"===e.status,purchased:"purchased"===e.status})},a.createElement(i.default,{icon:"locked"===e.status?o.LOCK:o.UNLOCK})))};return t?a.createElement("h1",{className:"card__title"},c&&a.createElement(u,{status:c}),a.createElement("font",{dangerouslySetInnerHTML:{__html:function(e){for(var t in null==e||null===(n=e.props)||void 0===n?void 0:n.children){var n,a,r;if("string"==typeof(null==e||null===(a=e.props)||void 0===a?void 0:a.children[t]))return null==e||null===(r=e.props)||void 0===r?void 0:r.children[t]}return e}(r)}})):a.createElement("h2",{className:l()("card__title",{"card__title--small":n})},r)};const E=function(e){var t=e.title,n=e.subtitle,r=e.titleActions,s=e.id,m=e.body,E=e.actions,b=e.icon,v=e.className,_=e.isPageTitle,p=void 0!==_&&_,f=e.isBodyList,C=void 0!==f&&f,h=e.smallTitle,y=void 0!==h&&h,N=e.defaultExpand,k=e.nag,S=e.onClick,j=e.children,x=e.secondPane,B=e.slimHeader,R=e.background,I=e.backgroundImage,w=e.singlePane,T=e.headerActions,O=e.accessStatus,P=e.gridHeader,D=u((0,a.useState)(N),2),F=D[0],Z=D[1],z=void 0!==N;return a.createElement("section",{role:S?"button":void 0,className:l()(v,"card",{"card__multi-pane":Boolean(x),"card--background":R}),id:s,onClick:function(e){S&&(S(),e.stopPropagation())}},I&&a.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+I+")"}}),a.createElement(A,{singlePane:w},(t||n)&&a.createElement("div",{className:l()("card__header--between",{"card__header--slim":B,"card__header--grid":P})},a.createElement("div",{className:l()("card__title-section",{"card__title-section--body-list":C})},b&&a.createElement(i.default,{sectionIcon:!0,icon:b}),a.createElement("div",{className:"card__title-text"},a.createElement(g,{isPageTitle:p,smallTitle:y,accessStatus:O},t),n&&a.createElement("div",{className:l()("card__subtitle",{"card__subtitle--small":y})},n))),(r||z)&&a.createElement("div",{className:"card__title-actions-container"},r&&a.createElement("div",{className:l()("card__title-actions",{"card__title-actions--small":y})},r),z&&a.createElement("div",{className:"card__title-actions"},a.createElement(c.default,{button:"alt","aria-expanded":F,"aria-label":d(F?"Less":"More"),icon:F?o.SUBTRACT:o.ADD,onClick:function(){return Z(!F)}}))),T),(!z||z&&F)&&a.createElement(a.Fragment,null,m&&a.createElement("div",{className:l()("card__body",{"card__body--no-title":!t&&!n,"card__body--list":C})},m),E&&a.createElement("div",{className:"card__main-actions"},E),j&&a.createElement("div",{className:"card__main-actions"},j)),k),x&&a.createElement("div",{className:"card__second-pane"},x))}},3823:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(88441),r=n(9319),l=n(51635),i=n(44908),c=n(73249),o=n(1892),s=n.n(o),d=n(95760),u=n.n(d),m=n(38311),A=n.n(m),g=n(58192),E=n.n(g),b=n(38060),v=n.n(b),_=n(54865),p=n.n(_),f=n(29444),C={};C.styleTagTransform=p(),C.setAttributes=E(),C.insert=A().bind(null,"head"),C.domAPI=u(),C.insertStyleElement=v();s()(f.Z,C);f.Z&&f.Z.locals&&f.Z.locals;const h=function(){return a.createElement(r.Z,null,a.createElement(l.Z,{className:"careers-overview-page",body:a.createElement(a.Fragment,null,a.createElement("h1",null,"Work at Odysee"),a.createElement("section",{className:"section card--section"},a.createElement("h2",{className:"card__title"},"We're redefining online media because the current paradigm sucks.",a.createElement("br",null),"If you share our passion and want to help we'd love to hear from you."),a.createElement("div",{className:"job-listings"},a.createElement(i.default,{label:"IT Project Manager",navigate:"/$/".concat(c.CAREERS_IT_PROJECT_MANAGER),className:"job-listing"}),a.createElement("br",null),a.createElement(i.default,{label:"Senior Backend Engineer",navigate:"/$/".concat(c.CAREERS_SENIOR_BACKEND_ENGINEER),className:"job-listing"}),a.createElement("br",null),a.createElement(i.default,{label:"Software Security Engineer",navigate:"/$/".concat(c.CAREERS_SOFTWARE_SECURITY_ENGINEER),className:"job-listing"}),a.createElement("br",null),a.createElement(i.default,{label:"Senior Android Developer",navigate:"/$/".concat(c.CAREERS_SENIOR_ANDROID_DEVELOPER),className:"job-listing"}),a.createElement("br",null),a.createElement(i.default,{label:"Senior iOS Developer",navigate:"/$/".concat(c.CAREERS_SENIOR_IOS_DEVELOPER),className:"job-listing"}))))}))}},29444:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(26612),r=n.n(a),l=n(40805),i=n.n(l)()(r());i.push([e.id,"[dir] .careers-overview-page{text-align:center}.careers-overview-page .card__title{justify-content:center}.careers-overview-page h1{font-size:28px}[dir] .careers-overview-page h1{margin-bottom:16px}[dir] .job-listings{padding-top:var(--spacing-l)}.job-listings .job-listing{align-items:center;color:rgba(var(--color-text-base),.8);font-size:var(--font-large);width:300px}[dir] .job-listings .job-listing{background:var(--color-header-background);border-radius:var(--border-radius);margin-bottom:var(--spacing-m);padding:var(--spacing-s);text-align:center}.job-listings .job-listing:hover{color:var(--color-primary)}.job-listings .job-listing .button__content{justify-content:center}.careers-mail-link{color:rgba(var(--color-text-base),.8)}.careers-mail-link:hover{color:rgba(var(--color-text-base),1)}.career-page__subtitle{font-size:19px}[dir] .career-page__subtitle{margin-top:17px}","",{version:3,sources:["webpack://./page/careers/style.scss"],names:[],mappings:"AAAA,6BACE,iBAAA,CAEA,oCACE,sBAAA,CAGF,0BACE,cACA,CAFF,gCAEE,kBAAA,CAIJ,oBACE,4BAAA,CACA,2BASE,kBAAA,CAPA,qCAAA,CACA,2BAAA,CAKA,WACA,CATF,iCAIE,yCAAA,CAGA,kCAAA,CADA,8BAAA,CADA,wBAAA,CAJA,iBAQA,CACA,iCACE,0BAAA,CAEF,4CACE,sBAAA,CAKN,mBACE,qCAAA,CACA,yBACE,oCAAA,CAIJ,uBAEE,cAAA,CAFF,6BACE,eACA",sourcesContent:[".careers-overview-page {\n  text-align: center;\n\n  .card__title {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 28px;\n    margin-bottom: 16px;\n  }\n}\n\n.job-listings {\n  padding-top: var(--spacing-l);\n  .job-listing {\n    text-align: center;\n    color: rgba(var(--color-text-base), 0.8);\n    font-size: var(--font-large);\n    background: var(--color-header-background);\n    padding: var(--spacing-s);\n    margin-bottom: var(--spacing-m);\n    border-radius: var(--border-radius);\n    width: 300px;\n    align-items: center;\n    &:hover {\n      color: var(--color-primary);\n    }\n    .button__content {\n      justify-content: center;\n    }\n  }\n}\n\n.careers-mail-link {\n  color: rgba(var(--color-text-base), 0.8);\n  &:hover {\n    color: rgba(var(--color-text-base), 1);\n  }\n}\n\n.career-page__subtitle {\n  margin-top: 17px;\n  font-size: 19px;\n}\n"],sourceRoot:""}]);const c=i}}]);
//# sourceMappingURL=careers-ca870f5bababb98549e0.js.map