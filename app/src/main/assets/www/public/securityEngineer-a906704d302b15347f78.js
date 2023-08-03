"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[6919],{51635:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(88441),l=a(66598),r=a.n(l),i=a(96284),c=a(44908),o=a(77369),s=a(35080),d=a(71036).__;function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r,i,c=[],o=!0,s=!1;try{if(r=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;o=!1}else for(;!(o=(n=r.call(a)).done)&&(c.push(n.value),c.length!==t);o=!0);}catch(e){s=!0,l=e}finally{try{if(!o&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(s)throw l}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var p=function(e){var t=e.singlePane,a=e.children;return t?a:n.createElement("div",{className:"card__first-pane"},a)},f=function(e){var t=e.isPageTitle,a=e.smallTitle,l=e.children,c=e.accessStatus,m=function(e){return n.createElement(s.Z,{title:d("This is a members-only content")},n.createElement("div",{className:r()("content-access-indicator",{locked:"locked"===e.status,unlocked:"unlocked"===e.status,purchased:"purchased"===e.status})},n.createElement(i.default,{icon:"locked"===e.status?o.LOCK:o.UNLOCK})))};return t?n.createElement("h1",{className:"card__title"},c&&n.createElement(m,{status:c}),n.createElement("font",{dangerouslySetInnerHTML:{__html:function(e){for(var t in null==e||null===(a=e.props)||void 0===a?void 0:a.children){var a,n,l;if("string"==typeof(null==e||null===(n=e.props)||void 0===n?void 0:n.children[t]))return null==e||null===(l=e.props)||void 0===l?void 0:l.children[t]}return e}(l)}})):n.createElement("h2",{className:r()("card__title",{"card__title--small":a})},l)};const h=function(e){var t=e.title,a=e.subtitle,l=e.titleActions,s=e.id,u=e.body,h=e.actions,g=e.icon,E=e.className,y=e.isPageTitle,v=void 0!==y&&y,_=e.isBodyList,b=void 0!==_&&_,w=e.smallTitle,k=void 0!==w&&w,N=e.defaultExpand,S=e.nag,x=e.onClick,A=e.children,C=e.secondPane,T=e.slimHeader,P=e.background,O=e.backgroundImage,I=e.singlePane,D=e.headerActions,j=e.accessStatus,B=e.gridHeader,L=m((0,n.useState)(N),2),W=L[0],q=L[1],z=void 0!==N;return n.createElement("section",{role:x?"button":void 0,className:r()(E,"card",{"card__multi-pane":Boolean(C),"card--background":P}),id:s,onClick:function(e){x&&(x(),e.stopPropagation())}},O&&n.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+O+")"}}),n.createElement(p,{singlePane:I},(t||a)&&n.createElement("div",{className:r()("card__header--between",{"card__header--slim":T,"card__header--grid":B})},n.createElement("div",{className:r()("card__title-section",{"card__title-section--body-list":b})},g&&n.createElement(i.default,{sectionIcon:!0,icon:g}),n.createElement("div",{className:"card__title-text"},n.createElement(f,{isPageTitle:v,smallTitle:k,accessStatus:j},t),a&&n.createElement("div",{className:r()("card__subtitle",{"card__subtitle--small":k})},a))),(l||z)&&n.createElement("div",{className:"card__title-actions-container"},l&&n.createElement("div",{className:r()("card__title-actions",{"card__title-actions--small":k})},l),z&&n.createElement("div",{className:"card__title-actions"},n.createElement(c.default,{button:"alt","aria-expanded":W,"aria-label":d(W?"Less":"More"),icon:W?o.SUBTRACT:o.ADD,onClick:function(){return q(!W)}}))),D),(!z||z&&W)&&n.createElement(n.Fragment,null,u&&n.createElement("div",{className:r()("card__body",{"card__body--no-title":!t&&!a,"card__body--list":b})},u),h&&n.createElement("div",{className:"card__main-actions"},h),A&&n.createElement("div",{className:"card__main-actions"},A)),S),C&&n.createElement("div",{className:"card__second-pane"},C))}},71752:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(88441),l=a(9319),r=a(51635);const i=function(){return n.createElement(l.Z,null,n.createElement(r.Z,{body:n.createElement(n.Fragment,null,n.createElement("section",{className:"section card--section"},n.createElement("h1",{className:"card__title",style:{fontSize:"28px",marginBottom:"10px"}},"Software Security Engineer @ Odysee"),n.createElement("p",null,"We are looking for a risk averse and committed Software Security Engineer to analyse software designs and implementations from a security perspective, and identify and resolve security issues. At Odysee, you will be welcomed into a supportive and friendly (virtual) team and you will have the chance to lead many critical projects as they pertain to security. Odysee.com is the largest blockchain media platform in the world; after launching in December 2020, Odysee has been scaling significantly and is now looking to add a Software Security Engineer to the team who wants to help us change the media paradigm for the better.")),n.createElement("section",{className:"section card--section"},n.createElement("h1",{className:"card__title"},"You will be a pro at:"),n.createElement("ul",null,n.createElement("li",null,"Implementing, testing and operating advanced software security techniques in compliance with technical reference architecture."),n.createElement("li",null,"Performing on-going security testing and code review to improve software security troubleshooting and debugging issues that arise."),n.createElement("li",null,"Providing engineering designs for new software solutions to help mitigate security vulnerabilities."),n.createElement("li",null,"Contributing to all levels of the architecture."),n.createElement("li",null,"Developing detailed project plans to track progress."),n.createElement("li",null,"Maintaining technical documentation."))),n.createElement("section",{className:"section card--section"},n.createElement("h1",{className:"card__title"},"In terms of skills & experience:"),n.createElement("ul",null,n.createElement("li",null,"Proven work experience as a software security engineer."),n.createElement("li",null,"Detailed technical knowledge of techniques, standards and state-of-the art capabilities for authentication and authorization, applied cryptography, security vulnerabilities and remediation."),n.createElement("li",null,"Software development experience in one of the following core languages: Javascript, Golang, Python."),n.createElement("li",null,"Adequate knowledge of web related technologies (Web applications, Web Services and Service Oriented Architectures) and of network/web related protocols."),n.createElement("li",null,"Interest in all aspects of security research and development."),n.createElement("li",null,"Degree in Computer Science or related field."))),n.createElement("section",{className:"section card--section"},n.createElement("h1",{className:"card__title"},"Bonus skills & experience:"),n.createElement("ul",null,n.createElement("li",null,"Deeper programming knowledge (Go,C,C++,Python,NodeJS)."),n.createElement("li",null,"Experience with Docker and Kubernetes."))),n.createElement("section",{className:"section card--section"},n.createElement("h1",{className:"card__title"},"What we offer:"),n.createElement("ul",null,n.createElement("li",null,"Work from home"),n.createElement("li",null,"A small (<100) team of passionate individuals"),n.createElement("li",null,"The opportunity to build something truly great with great people"),n.createElement("li",null,"Competitive salary"),n.createElement("li",null,"Flexible work hours"))),n.createElement("h1",{style:{marginTop:"30px",fontSize:"18px"}},"To apply, please send your credentials to",n.createElement("a",{className:"careers-mail-link",href:"mailto:careers@odysee.com"}," ","careers@odysee.com")))}))}}}]);
//# sourceMappingURL=securityEngineer-a906704d302b15347f78.js.map