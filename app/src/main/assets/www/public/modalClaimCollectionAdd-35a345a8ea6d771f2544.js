"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[3554],{51635:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(88441),l=n(66598),a=n.n(l),o=n(96284),c=n(44908),i=n(77369),u=n(35080),s=n(71036).__;function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,c=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,l=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e){var t=e.singlePane,n=e.children;return t?n:r.createElement("div",{className:"card__first-pane"},n)},y=function(e){var t=e.isPageTitle,n=e.smallTitle,l=e.children,c=e.accessStatus,d=function(e){return r.createElement(u.Z,{title:s("This is a members-only content")},r.createElement("div",{className:a()("content-access-indicator",{locked:"locked"===e.status,unlocked:"unlocked"===e.status,purchased:"purchased"===e.status})},r.createElement(o.default,{icon:"locked"===e.status?i.LOCK:i.UNLOCK})))};return t?r.createElement("h1",{className:"card__title"},c&&r.createElement(d,{status:c}),r.createElement("font",{dangerouslySetInnerHTML:{__html:function(e){for(var t in null==e||null===(n=e.props)||void 0===n?void 0:n.children){var n,r,l;if("string"==typeof(null==e||null===(r=e.props)||void 0===r?void 0:r.children[t]))return null==e||null===(l=e.props)||void 0===l?void 0:l.children[t]}return e}(l)}})):r.createElement("h2",{className:a()("card__title",{"card__title--small":n})},l)};const v=function(e){var t=e.title,n=e.subtitle,l=e.titleActions,u=e.id,m=e.body,v=e.actions,b=e.icon,p=e.className,h=e.isPageTitle,_=void 0!==h&&h,E=e.isBodyList,g=void 0!==E&&E,A=e.smallTitle,C=void 0!==A&&A,N=e.defaultExpand,S=e.nag,k=e.onClick,w=e.children,I=e.secondPane,O=e.slimHeader,P=e.background,j=e.backgroundImage,L=e.singlePane,T=e.headerActions,M=e.accessStatus,x=e.gridHeader,F=d((0,r.useState)(N),2),H=F[0],U=F[1],$=void 0!==N;return r.createElement("section",{role:k?"button":void 0,className:a()(p,"card",{"card__multi-pane":Boolean(I),"card--background":P}),id:u,onClick:function(e){k&&(k(),e.stopPropagation())}},j&&r.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+j+")"}}),r.createElement(f,{singlePane:L},(t||n)&&r.createElement("div",{className:a()("card__header--between",{"card__header--slim":O,"card__header--grid":x})},r.createElement("div",{className:a()("card__title-section",{"card__title-section--body-list":g})},b&&r.createElement(o.default,{sectionIcon:!0,icon:b}),r.createElement("div",{className:"card__title-text"},r.createElement(y,{isPageTitle:_,smallTitle:C,accessStatus:M},t),n&&r.createElement("div",{className:a()("card__subtitle",{"card__subtitle--small":C})},n))),(l||$)&&r.createElement("div",{className:"card__title-actions-container"},l&&r.createElement("div",{className:a()("card__title-actions",{"card__title-actions--small":C})},l),$&&r.createElement("div",{className:"card__title-actions"},r.createElement(c.default,{button:"alt","aria-expanded":H,"aria-label":s(H?"Less":"More"),icon:H?i.SUBTRACT:i.ADD,onClick:function(){return U(!H)}}))),T),(!$||$&&H)&&r.createElement(r.Fragment,null,m&&r.createElement("div",{className:a()("card__body",{"card__body--no-title":!t&&!n,"card__body--list":g})},m),v&&r.createElement("div",{className:"card__main-actions"},v),w&&r.createElement("div",{className:"card__main-actions"},w)),S),I&&r.createElement("div",{className:"card__second-pane"},I))}},46506:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(3658),l=n(88441),a=n(77369),o=n(21506),c=n(46351),i=n(94720),u=n(44908),s=n(71036).__;function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,c=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,l=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const f=function(e){var t=e.uri,n=e.sourceId,r=e.onlyCreate,m=e.closeForm,f=e.sourceCollectionName,y=e.doPlaylistAddAndAllowPlaying,v=l.useRef(),b=d(l.useState(f?s("%copied_playlist_name% (copy)",{copied_playlist_name:f}):""),2),p=b[0],h=b[1];function _(e){e.keyCode===o.K5&&(e.preventDefault(),v.current.click())}return l.createElement(i.Wi,{autoFocus:!0,type:"text",name:"new_collection",label:s("New Playlist Title"),placeholder:s(c.PLACEHOLDER),onFocus:function(){window.addEventListener("keydown",_)},onBlur:function(){window.removeEventListener("keydown",_)},inputButton:l.createElement(l.Fragment,null,l.createElement(u.default,{button:"alt",icon:a.COMPLETED,title:s("Confirm"),className:"button-toggle",disabled:0===p.length,onClick:function(){var e,r=p;y({uri:t,collectionName:r,sourceId:n,createNew:!0,createCb:n?function(t){e=t}:void 0}),m(r,e)},ref:v}),!r&&l.createElement(u.default,{button:"alt",className:"button-toggle",icon:a.REMOVE,title:s("Cancel"),onClick:function(){m()}})),onChange:function(e){var t=e.target.value;h(t)},value:p})};var y=n(44692),v=n(32583),b={doPlaylistAddAndAllowPlaying:y.EO};const p=(0,r.$j)((function(e,t){var n=t.sourceId;return{sourceCollectionName:n&&(0,v.kC)(e,n).name}}),b)(f)},95213:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(3658),l=n(15927),a=n(88441),o=n(32583),c=n(2038),i=n(44908),u=n(51635),s=n(7920),d=n(44692),m=n(94720),f=n(46351),y=n(56952),v=n(96284);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,c=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,l=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const h=function(e){var t=e.icon,n=e.uri,r=e.collection,l=e.collectionHasClaim,o=e.collectionPending,c=e.doPlaylistAddAndAllowPlaying,i=r.id,u=(0,y.VO)(i)||r.name,s=b(a.useState(l),2),d=s[0],p=s[1];return(null==r?void 0:r.type)===f.COL_TYPES.FEATURED_CHANNELS?null:a.createElement("li",{className:"collection-select__item"},a.createElement(m.Wi,{checked:d,disabled:o,icon:t,type:"checkbox",name:"select-".concat(i),onChange:function(){p((function(e){return!e})),c({uri:n,collectionId:i,collectionName:u})},label:a.createElement("span",null,a.createElement(v.default,{icon:t,className:"icon-collection-select"}),"".concat(u))}))};var _={doPlaylistAddAndAllowPlaying:d.EO};const E=(0,r.$j)((function(e,t){var n=t.collectionId,r=t.uri;return{collection:(0,o.kC)(e,n),collectionHasClaim:(0,o.rp)(e,n,r),collectionPending:(0,s.Kk)(n)(e)}}),_)(h);var g=n(46506),A=n(77369),C=n(60732),N=n(71036).__;function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,c=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,l=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const w=function(e){var t=e.uri,n=e.closeModal,r=e.published,l=e.unpublished,o=e.fetchingMine,c=e.doFetchCollectionListMine,s=S(a.useState(!1),2),d=s[0],m=s[1];return a.useEffect((function(){c()}),[c]),!1!==o?a.createElement(u.Z,{title:N("Save to..."),singlePane:!0,body:a.createElement("div",{className:"main--empty"},a.createElement(C.Z,null))}):a.createElement(u.Z,{title:N("Save to..."),className:"card--background",singlePane:!0,body:a.createElement("ul",{className:"ul--no-style card__body-scrollable"},f.BUILTIN_PLAYLISTS.map((function(e){return a.createElement(E,{collectionId:e,uri:t,key:e,icon:f.PLAYLIST_ICONS[e]})})),Object.values(l).sort((function(e,t){var n;return null===(n=e.name)||void 0===n?void 0:n.localeCompare(t.name)})).map((function(e){var n=e.id;return a.createElement(E,{collectionId:n,uri:t,key:n,icon:A.LOCK})})),r&&Object.values(r).sort((function(e,t){var n;return null===(n=e.name)||void 0===n?void 0:n.localeCompare(t.name)})).map((function(e){var n=e.id;return a.createElement(E,{collectionId:n,uri:t,key:n,icon:A.PLAYLIST})}))),actions:d?a.createElement(g.Z,{uri:t,closeForm:function(){return m(!1)}}):a.createElement("div",{className:"section__actions"},a.createElement(i.default,{button:"primary",label:N("Done"),disabled:d,onClick:n}),a.createElement(i.default,{button:"link",label:N("New Playlist"),onClick:function(){return m(!0)}}))})};var I={doFetchCollectionListMine:c.Rq};const O=(0,r.$j)((function(e,t){return{published:(0,o.hi)(e),unpublished:(0,o.Np)(e),fetchingMine:(0,o.f0)(e)}}),I)(w);var P=n(1017);const j=function(e){var t=e.uri,n=e.doHideModal;return a.createElement(P.u_,{isOpen:!0,type:"card",onAborted:n},a.createElement(O,{uri:t,closeModal:n}))};var L={doHideModal:l.gG};const T=(0,r.$j)(null,L)(j)}}]);
//# sourceMappingURL=modalClaimCollectionAdd-35a345a8ea6d771f2544.js.map