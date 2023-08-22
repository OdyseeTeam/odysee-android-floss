"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[417],{66271:(n,e,t)=>{t.d(e,{Z:()=>$});var r=t(88441),o=t(66598),a=t.n(o),i=t(1892),l=t.n(i),c=t(95760),s=t.n(c),d=t(38311),m=t.n(d),u=t(58192),b=t.n(u),p=t(38060),f=t.n(p),h=t(54865),g=t.n(h),v=t(4859),y={};y.styleTagTransform=g(),y.setAttributes=b(),y.insert=m().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=f();l()(v.Z,y);v.Z&&v.Z.locals&&v.Z.locals;var x=t(96284),w=t(77369),A=t(71036).__;function _(){return _=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_.apply(this,arguments)}var k={DragDropContext:r.lazy((function(){return t.e(3459).then(t.bind(t,56321)).then((function(n){return{default:n.DragDropContext}}))})),Droppable:r.lazy((function(){return t.e(3459).then(t.bind(t,56321)).then((function(n){return{default:n.Droppable}}))})),Draggable:r.lazy((function(){return t.e(3459).then(t.bind(t,56321)).then((function(n){return{default:n.Draggable}}))}))};const $=function(n){var e=n.list,t=n.onGetElemAtIndex,o=n.onIsHiddenAtIndex,i=n.onDragEnd,l=r.useRef(),c=function(n){var e=n.item,i=n.index;return r.createElement(k.Draggable,{draggableId:e,index:i},(function(n,c){if(c.isDragging){var s=n.draggableProps;l.current&&s.style&&s.style.left&&s.style.top&&(s.style.left=l.offsetLeft,s.style.top=s.style.top-document.getElementsByClassName("modal")[0].offsetTop)}return r.createElement("div",_({className:a()("sortable__item",{"sortable__item--hidden":o&&o(e,i)}),ref:n.innerRef},n.draggableProps,n.dragHandleProps),r.createElement("div",{className:"sortable__drag-handle",ref:l},r.createElement(x.default,{icon:w.MENU,title:A("Drag"),size:20})),t(e,i))}))},s=function(n){var e=n.list,t=n.className;return r.createElement(k.Droppable,{droppableId:"bin-1"},(function(n){return r.createElement("div",_({ref:n.innerRef},n.droppableProps,{className:a()("sortable__bin",t)}),e.map((function(n,e){return r.createElement(c,{key:n,item:n,index:e})})),n.placeholder)}))};return r.createElement(r.Suspense,{fallback:null},r.createElement("div",{className:"sortable"},r.createElement(k.DragDropContext,{onDragEnd:i},r.createElement(s,{list:e}))))}},51635:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(88441),o=t(66598),a=t.n(o),i=t(96284),l=t(44908),c=t(77369),s=t(35080),d=t(71036).__;function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(n){s=!0,o=n}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return u(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var b=function(n){var e=n.singlePane,t=n.children;return e?t:r.createElement("div",{className:"card__first-pane"},t)},p=function(n){var e=n.isPageTitle,t=n.smallTitle,o=n.children,l=n.accessStatus,m=function(n){return r.createElement(s.Z,{title:d("This is a members-only content")},r.createElement("div",{className:a()("content-access-indicator",{locked:"locked"===n.status,unlocked:"unlocked"===n.status,purchased:"purchased"===n.status})},r.createElement(i.default,{icon:"locked"===n.status?c.LOCK:c.UNLOCK})))};return e?r.createElement("h1",{className:"card__title"},l&&r.createElement(m,{status:l}),r.createElement("font",{dangerouslySetInnerHTML:{__html:function(n){for(var e in null==n||null===(t=n.props)||void 0===t?void 0:t.children){var t,r,o;if("string"==typeof(null==n||null===(r=n.props)||void 0===r?void 0:r.children[e]))return null==n||null===(o=n.props)||void 0===o?void 0:o.children[e]}return n}(o)}})):r.createElement("h2",{className:a()("card__title",{"card__title--small":t})},o)};const f=function(n){var e=n.title,t=n.subtitle,o=n.titleActions,s=n.id,u=n.body,f=n.actions,h=n.icon,g=n.className,v=n.isPageTitle,y=void 0!==v&&v,x=n.isBodyList,w=void 0!==x&&x,A=n.smallTitle,_=void 0!==A&&A,k=n.defaultExpand,$=n.nag,E=n.onClick,C=n.children,S=n.secondPane,O=n.slimHeader,j=n.background,N=n.backgroundImage,D=n.singlePane,F=n.headerActions,I=n.accessStatus,P=n.gridHeader,T=m((0,r.useState)(k),2),B=T[0],z=T[1],Z=void 0!==k;return r.createElement("section",{role:E?"button":void 0,className:a()(g,"card",{"card__multi-pane":Boolean(S),"card--background":j}),id:s,onClick:function(n){E&&(E(),n.stopPropagation())}},N&&r.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+N+")"}}),r.createElement(b,{singlePane:D},(e||t)&&r.createElement("div",{className:a()("card__header--between",{"card__header--slim":O,"card__header--grid":P})},r.createElement("div",{className:a()("card__title-section",{"card__title-section--body-list":w})},h&&r.createElement(i.default,{sectionIcon:!0,icon:h}),r.createElement("div",{className:"card__title-text"},r.createElement(p,{isPageTitle:y,smallTitle:_,accessStatus:I},e),t&&r.createElement("div",{className:a()("card__subtitle",{"card__subtitle--small":_})},t))),(o||Z)&&r.createElement("div",{className:"card__title-actions-container"},o&&r.createElement("div",{className:a()("card__title-actions",{"card__title-actions--small":_})},o),Z&&r.createElement("div",{className:"card__title-actions"},r.createElement(l.default,{button:"alt","aria-expanded":B,"aria-label":d(B?"Less":"More"),icon:B?c.SUBTRACT:c.ADD,onClick:function(){return z(!B)}}))),F),(!Z||Z&&B)&&r.createElement(r.Fragment,null,u&&r.createElement("div",{className:a()("card__body",{"card__body--no-title":!e&&!t,"card__body--list":w})},u),f&&r.createElement("div",{className:"card__main-actions"},f),C&&r.createElement("div",{className:"card__main-actions"},C)),$),S&&r.createElement("div",{className:"card__second-pane"},S))}},53257:(n,e,t)=>{t.r(e),t.d(e,{default:()=>P});var r=t(88441),o=t(1892),a=t.n(o),i=t(95760),l=t.n(i),c=t(38311),s=t.n(c),d=t(58192),m=t.n(d),u=t(38060),b=t.n(u),p=t(54865),f=t.n(p),h=t(18249),g={};g.styleTagTransform=f(),g.setAttributes=m(),g.insert=s().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=b();a()(h.Z,g);h.Z&&h.Z.locals&&h.Z.locals;var v=t(44908),y=t(66271),x=t(51635),w=t(1017),A=t(71036).__;function _(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function k(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_(Object(t),!0).forEach((function(e){$(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function $(n,e,t){return(e=function(n){var e=function(n,e){if("object"!==E(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,e||"default");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===E(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function E(n){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},E(n)}function C(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(n){s=!0,o=n}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return S(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var O=t(3658),j=t(15927),N=t(17185),D=t(7920),F=t(29454),I={doUpdateCreatorSettings:N.Vl,doHideModal:j.gG};const P=(0,O.$j)((function(n,e){return{sections:(0,F.py)(n,e.channelId),channelClaim:(0,D.wD)(n,e.channelId)}}),I)((function(n){var e=n.sections,t=n.channelClaim,o=n.doUpdateCreatorSettings,a=n.doHideModal,i=e?e.entries:[],l=C(r.useState(i.map((function(n){return n.id}))),2),c=l[0],s=l[1];return r.createElement(w.u_,{isOpen:!0,type:"custom",className:"modalFCSort",onAborted:a},r.createElement(x.Z,{title:A("Sort Featured Channels"),body:r.createElement(y.Z,{list:c,onGetElemAtIndex:function(n,e){return r.createElement("div",{key:n,className:"modalFCSort__item"},function(n){var e,t=i.find((function(e){return e.id===n}));return(null==t||null===(e=t.value)||void 0===e?void 0:e.title)||n}(n))},onIsHiddenAtIndex:function(n,e){return!function(n){var e=i.find((function(e){return e.id===n}));return!!e&&"featured_channels"===e.value_type}(n)},onDragEnd:function(n){var e=n.source,t=n.destination;e&&t&&s((function(n){var r=n.slice();return r.splice(e.index,1),r.splice(t.index,0,n[e.index]),r}))}}),actions:r.createElement("div",{className:"section__actions"},r.createElement(v.default,{button:"primary",label:A("Save"),onClick:function(){if(t&&e&&e.entries.length===c.length){for(var n=[],r=function(t){var r=e.entries.find((function(n){return n.id===c[t]}));if(!r)return console.error("Failed to save sorting order (data mismatch)"),{v:void 0};n.push(r)},i=0;i<c.length;++i){var l=r(i);if("object"===E(l))return l.v}var s=k(k({},e),{},{entries:n});o(t,{channel_sections:s}),a()}}}),r.createElement(v.default,{button:"link",label:A("Cancel"),onClick:function(){a()}}))}))}))},4859:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(26612),o=t.n(r),a=t(40805),i=t.n(a)()(o());i.push([n.id,"[dir] .sortable{margin-bottom:var(--spacing-m)}.sortable__item{align-items:center;display:flex}.sortable__item--hidden{display:none}.sortable__drag-handle{opacity:.4}[dir=ltr] .sortable__drag-handle{margin-right:var(--spacing-xxs)}[dir=rtl] .sortable__drag-handle{margin-left:var(--spacing-xxs)}[dir] .sortable__item:last-child{margin-bottom:0}","",{version:3,sources:["webpack://./../ui/component/channelFinder/sortableList/style.scss"],names:[],mappings:"AAAA,gBACE,8BAAA,CAOF,gBAEE,kBAAA,CADA,YACA,CAGF,wBACE,YAAA,CAGF,uBACE,UACA,CAFF,iCAEE,+BAAA,CAFF,iCAEE,8BAAA,CAGF,iCACE,eAAA",sourcesContent:[".sortable {\n  margin-bottom: var(--spacing-m);\n  // height: 50vh;\n}\n\n.sortable__bin {\n}\n\n.sortable__item {\n  display: flex;\n  align-items: center;\n}\n\n.sortable__item--hidden {\n  display: none;\n}\n\n.sortable__drag-handle {\n  opacity: 0.4;\n  margin-right: var(--spacing-xxs);\n}\n\n.sortable__item:last-child {\n  margin-bottom: 0;\n}\n"],sourceRoot:""}]);const l=i},18249:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(26612),o=t.n(r),a=t(40805),i=t.n(a)()(o());i.push([n.id,"@media(max-width:900px){[dir=ltr] .modalFCSort,[dir=rtl] .modalFCSort{padding-left:var(--spacing-xs);padding-right:var(--spacing-xs)}[dir] .modalFCSort .card__title{margin-bottom:var(--spacing-l)}}[dir] .modalFCSort__item{border:1px solid var(--color-border);border-radius:var(--card-radius);margin-bottom:var(--spacing-xs);padding:var(--spacing-xs)}.modalFcSort__item--hidden{display:none}","",{version:3,sources:["webpack://./../ui/modal/modalFeaturedChannelsSort/style.scss","webpack://./../ui/scss/init/_mixins.scss"],names:[],mappings:"AAIE,wBADF,8CAEI,8BAAA,CACA,+BAAA,CAEA,gCACE,8BAAA,CAAA,CAKN,yBC4UE,oCAAA,CACA,gCAAA,CD1UA,+BAAA,CADA,yBACA,CAGF,2BACE,YAAA",sourcesContent:["@import '~ui/scss/init/breakpoints';\n@import '~ui/scss/init/mixins';\n\n.modalFCSort {\n  @media (max-width: $breakpoint-small) {\n    padding-left: var(--spacing-xs);\n    padding-right: var(--spacing-xs);\n\n    .card__title {\n      margin-bottom: var(--spacing-l);\n    }\n  }\n}\n\n.modalFCSort__item {\n  @include border-std;\n  padding: var(--spacing-xs);\n  margin-bottom: var(--spacing-xs);\n}\n\n.modalFcSort__item--hidden {\n  display: none;\n}\n","@mixin between {\n  display: flex;\n  justify-content: space-between;\n}\n\n@mixin breakpoint-max($breakpoint) {\n  @media (max-width: #{$breakpoint}px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-min($breakpoint) {\n  @media (min-width: #{$breakpoint}px) {\n    @content;\n  }\n}\n\n@mixin center {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n}\n\n@mixin clearfix {\n  clear: both;\n  content: '';\n  display: block;\n}\n\n// (Smart) text truncation\n// Pass in a width to customize how much text is allowed\n// Omit value for basic text truncation\n@mixin constrict($value: null) {\n  @if ($value) {\n    max-width: $value;\n  }\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@mixin create-grid($items-per-row: 4) {\n  grid-template: repeat(1, 1fr) / repeat($items-per-row, 1fr);\n}\n\n// Smart font include\n// Simply pass in the font-weight you want to use and the normal/italicized versions will be added\n// No more weighing down the front-end with references to unused weights\n@mixin font-face($font-weight, $relative-font-path, $font-name) {\n  @font-face {\n    font-family: $font-name;\n    font-style: normal;\n    font-weight: $font-weight;\n    // sass-lint:disable indentation\n    src: url('#{$relative-font-path}/#{$font-weight}.woff2') format('woff2'),\n      url('#{$relative-font-path}/#{$font-weight}.woff') format('woff');\n    // sass-lint:enable indentation\n  }\n\n  @font-face {\n    font-family: $font-name;\n    font-style: italic;\n    font-weight: $font-weight;\n    // sass-lint:disable indentation\n    src: url('#{$relative-font-path}/#{$font-weight}i.woff2') format('woff2'),\n      url('#{$relative-font-path}/#{$font-weight}i.woff') format('woff');\n    // sass-lint:enable indentation\n  }\n}\n\n@mixin font-mono {\n  font-family: 'Fira Code', 'Courier New', monospace;\n}\n\n@mixin font-sans {\n  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n\n@mixin font-serif {\n  font-family: Georgia, serif;\n}\n\n@mixin hide-text {\n  border: none;\n  color: transparent;\n  font: 0 / 0 a;\n  text-shadow: none;\n}\n\n// Cross-browser line-clamp support\n@mixin line-clamp($element-height: 2rem, $row-count: 2, $fade-color: var(--lbry-white), $computed-position: relative) {\n  height: $element-height;\n  overflow: hidden;\n  position: $computed-position;\n\n  &::after {\n    width: 50%;\n    height: calc(#{$element-height} / #{$row-count});\n    right: 0;\n    bottom: 0;\n\n    background-image: linear-gradient(to right, rgba($lbry-white, 0), #{$fade-color} 80%);\n    content: '';\n    position: absolute;\n  }\n}\n\n@mixin no-user-select {\n  user-select: none;\n\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n// Use CSS variables without upsetting Sass-Lint\n// https://github.com/sasstools/sass-lint/issues/1161#issuecomment-390537190\n@mixin root-prop($prop: null, $value: null) {\n  @if ($prop and $value) {\n    #{$prop}: $value;\n  }\n}\n\n@mixin selection($background-color: var(--lbry-white), $text-color: var(--lbry-black)) {\n  &::selection {\n    background-color: $background-color;\n    color: $text-color;\n    text-shadow: none;\n  }\n\n  &::-moz-selection {\n    background-color: $background-color;\n    color: $text-color;\n    text-shadow: none;\n  }\n}\n\n@mixin thumbnail {\n  &::before,\n  &::after {\n    content: '';\n  }\n\n  &::before {\n    float: left;\n    padding-top: var(--aspect-ratio-standard);\n  }\n\n  &::after {\n    clear: both;\n    display: block;\n  }\n}\n\n@mixin linkFocus {\n  background-color: var(--color-link-focus-bg);\n}\n\n@mixin underline($text-color: var(--lbry-black), $whitespace-color: var(--lbry-white)) {\n  @include selection($text-color, $whitespace-color);\n\n  background-image: linear-gradient($whitespace-color, $whitespace-color),\n    linear-gradient($whitespace-color, $whitespace-color), linear-gradient($text-color, $text-color);\n  background-position: 0 88%, 100% 88%, 0 88%;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n  background-size: 0.05rem 1px, 0.05rem 1px, 1px 1px;\n  box-decoration-break: clone;\n  display: inline;\n  text-decoration: none;\n  text-shadow: 0.03rem 0 $whitespace-color, -0.03rem 0 $whitespace-color, 0 0.03rem $whitespace-color,\n    0 -0.03rem $whitespace-color, 0.06rem 0 $whitespace-color, -0.06rem 0 $whitespace-color, 0.09rem 0 $whitespace-color,\n    -0.09rem 0 $whitespace-color, 0.12rem 0 $whitespace-color, -0.12rem 0 $whitespace-color, 0.15rem 0 $whitespace-color,\n    -0.15rem 0 $whitespace-color;\n\n  @-moz-document url-prefix() {\n    // sass-lint:disable-line empty-args\n    background-position: 0 90%, 100% 90%, 0 90%;\n  }\n}\n\n@mixin placeholder {\n  // Temporary fix for lags in Chromium based browsers\n  //animation: pulse 2s infinite ease-in-out;\n  background-color: var(--color-placeholder-background);\n  border-radius: var(--card-radius);\n  border-width: 0;\n}\n\n.pulse {\n  // animation: pulse 2s infinite ease-in-out;\n}\n\n@mixin mediaThumbHoverZoom {\n  .media__thumb,\n  img {\n    transition: all 0.2s ease;\n  }\n\n  &:hover {\n    .media__thumb,\n    img {\n      transform: scale(1.05);\n    }\n  }\n}\n\n@mixin list-hover-effect {\n  &:hover {\n    background-color: rgba(var(--color-primary-dynamic), 0.1);\n  }\n}\n\n@mixin handleClaimTileGifThumbnail($width) {\n  .ff-canvas,\n  .freezeframe-img {\n    // height: calc(#{$width} * (9 / 16)) !important;\n    // width: $width;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}\n\n@mixin handleClaimListGifThumbnail($width) {\n  .ff-canvas,\n  .freezeframe-img {\n    // height: calc(#{$width} * (9 / 16)) !important;\n    // width: $width;\n  }\n}\n\n@mixin handleChannelGif($size) {\n  height: $size;\n  width: $size;\n\n  .ff-canvas,\n  .freezeframe-img {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n    // height: $size !important;\n    // width: $size !important;\n  }\n}\n\n@mixin tier-restriction-checkbox {\n  display: inline-block;\n  margin-top: 0;\n  margin-right: var(--spacing-s);\n\n  label {\n    padding: var(--spacing-xxxs) var(--spacing-s);\n    border-radius: var(--border-radius);\n    &::before,\n    &::after {\n      display: none;\n    }\n  }\n\n  input[type='checkbox'] + label {\n    opacity: 0.8;\n    &:hover {\n      opacity: 1;\n    }\n  }\n  input[type='checkbox']:checked + label {\n    opacity: 1;\n  }\n\n  &:nth-of-type(1) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-1), 0.6);\n      background-color: rgba(var(--color-membership-1), 0.2);\n      &:hover {\n        background-color: rgba(var(--color-membership-1), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-1), 1);\n    }\n  }\n  &:nth-of-type(2) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-2), 0.6);\n      background-color: rgba(var(--color-membership-2), 0.2);\n      &:hover {\n        background-color: rgba(var(--color-membership-2), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-2), 1);\n    }\n  }\n  &:nth-of-type(3) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-3), 0.6);\n      background-color: rgba(var(--color-membership-3), 0.2);\n      &:hover {\n        background-color: rgba(var(--color-membership-3), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-3), 1);\n    }\n  }\n  &:nth-of-type(4) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-4), 0.6);\n      background-color: rgba(var(--color-membership-4), 0.2);\n      &:hover {\n        background-color: rgba(var(--color-membership-4), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-4), 1);\n    }\n  }\n  &:nth-of-type(5) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-5), 0.6);\n      background-color: rgba(var(--color-membership-5), 0.2);\n      &:hover {\n        background-color: rgba(var(--color-membership-5), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-5), 1);\n    }\n  }\n  &:nth-of-type(6) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-6), 0.6);\n      background-color: rgba(var(--color-membership-6), 0.2);\n\n      &:hover {\n        background-color: rgba(var(--color-membership-6), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-6), 1);\n    }\n  }\n}\n\n@mixin border-std {\n  border: 1px solid var(--color-border);\n  border-radius: var(--card-radius);\n}\n"],sourceRoot:""}]);const l=i}}]);
//# sourceMappingURL=modalFeaturedChannelsSort-7aba279ac046e526ddb0.js.map