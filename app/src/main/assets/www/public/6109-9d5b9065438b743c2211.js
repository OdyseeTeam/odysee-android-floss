"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[6109],{36109:(n,e,i)=>{i.d(e,{Z:()=>T});var t=i(88441),r=i(28180),a=i(66598),o=i.n(a),c=i(16643),l=i(15184),s=i(96967),m=i(96284),d=i(77369),h=i(17526),p=i(73249),A=i(47009),b=i(6993),u=i(1892),g=i.n(u),f=i(95760),v=i.n(f),w=i(38311),x=i.n(w),_=i(58192),C=i.n(_),k=i(38060),$=i.n(k),y=i(54865),E=i.n(y),B=i(2843),F={};F.styleTagTransform=E(),F.setAttributes=C(),F.insert=x().bind(null,"head"),F.domAPI=v(),F.insertStyleElement=$();g()(B.Z,F);B.Z&&B.Z.locals&&B.Z.locals;var I=i(71036).__;var D=i(3658),S=i(15927),G=i(17185),z=i(7920),N={doOpenModal:S.DG,doDeleteChannelSection:G.hQ};const T=(0,D.$j)((function(n,e){return{isChannelMine:(0,z.w_)(n,e.channelId)}}),N)((function(n){var e=n.id,i=n.title,a=n.uris,u=n.channelId,g=n.isChannelMine,f=n.doOpenModal,v=n.doDeleteChannelSection,w=(0,c.k6)(),x=w.push,_=w.location,C=function(n){return t.createElement(r.sN,{className:"menu__link",onSelect:n.onSelect},t.createElement(m.default,{"aria-hidden":!0,icon:n.icon}),I(n.label))},k=function(n){return t.createElement(r.v2,null,t.createElement(r.j2,{className:"menu__button"},t.createElement(m.default,{size:18,icon:d.MORE_VERTICAL})),t.createElement(r.qy,{className:"menu__list"},g&&t.createElement(t.Fragment,null,!_.search.includes("sectionId")&&t.createElement(C,{label:"View",icon:d.EYE,onSelect:function(){return x("/$/".concat(p.FEATURED_CHANNELS,"?").concat(A.a7.CLAIM_ID,"=").concat(u,"&").concat(A.a7.SECTION_ID,"=").concat(e))}}),t.createElement(C,{label:"Edit",icon:d.EDIT,onSelect:$}),t.createElement(C,{label:"Delete",icon:d.DELETE,onSelect:y}))))};function $(){f(h.JS,{channelId:u,sectionId:e})}function y(){f(h.ae,{title:i?I('Delete "%list_name%"?',{list_name:i.slice(0,50)}):I("Delete featured channels?"),subtitle:I("This action is permanent and cannot be undone."),labelOk:I("Delete"),onConfirm:function(n){v(u,e),n()}})}return t.createElement("div",{className:"channel-section-card"},t.createElement("div",{className:"channel-section-card__header"},t.createElement("div",{className:"channel-section-card__title"},i),t.createElement("div",{className:"channel-section-card__menu"},g&&t.createElement(k,null))),t.createElement("div",{className:"channel-section-card__content"},t.createElement("div",{className:"channel-section-card__item-row"},t.createElement("div",{className:o()("channel-section-card__item-list")},a.map((function(n){return t.createElement("div",{key:n,className:"channel-section-card__item",onClick:function(){return x((0,b.$U)(n)+"?view=home")}},t.createElement(l.Z,{uri:n}),t.createElement(s.Z,{uri:n}))}))))))}))},2843:(n,e,i)=>{i.d(e,{Z:()=>c});var t=i(26612),r=i.n(t),a=i(40805),o=i.n(a)()(r());o.push([n.id,"[dir=ltr] .pulse,[dir=rtl] .pulse{animation:pulse 2s ease-in-out infinite}.channel-section-card{width:100%}[dir] .channel-section-card{border-radius:var(--border-radius);margin-top:var(--spacing-l)}.channel-section-card:hover .menu__button{opacity:1}.channel-section-card__header{align-items:center;display:flex;font-size:var(--font-large);justify-content:space-between}[dir] .channel-section-card__header{border-bottom:1px solid var(--color-border);margin-bottom:var(--spacing-s);padding-bottom:var(--spacing-xs)}.channel-section-card__title{display:flex;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}[dir=ltr] .channel-section-card__title{margin-right:var(--spacing-l)}[dir=rtl] .channel-section-card__title{margin-left:var(--spacing-l)}.channel-section-card__menu{line-height:1}[dir] .channel-section-card__menu{padding:0 var(--spacing-s)}.channel-section-card__item-row{display:flex;justify-content:space-between}.channel-section-card__item-list{grid-gap:var(--spacing-s);display:grid;grid-template-columns:repeat(auto-fill,minmax(11.1111111111%,1fr));width:100%}[dir] .channel-section-card__item-list{margin-bottom:var(--spacing-l)}@media(max-width:1150px){.channel-section-card__item-list{grid-template-columns:repeat(auto-fill,minmax(14.2857142857%,1fr))}}@media(max-width:900px){.channel-section-card__item-list{grid-template-columns:repeat(auto-fill,minmax(25%,1fr))}}.channel-section-card__item{align-items:center;display:flex;flex-basis:0;flex-direction:column;flex-grow:1}[dir] .channel-section-card__item{border-radius:var(--border-radius);cursor:pointer;padding:var(--spacing-xxs) 0}.channel-section-card__item .channel-thumbnail{transition:transform .2s}[dir] .channel-section-card__item .channel-thumbnail{margin-bottom:var(--spacing-xs);transform:scale(1)}[dir=ltr] .channel-section-card__item .channel-thumbnail{margin-right:unset}[dir=rtl] .channel-section-card__item .channel-thumbnail{margin-left:unset}.channel-section-card__item .claim-preview__title{font-size:var(--font-small);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}[dir] .channel-section-card__item .claim-preview__title{text-align:center}[dir=ltr] .channel-section-card__item .claim-preview__title{margin-right:unset}[dir=rtl] .channel-section-card__item .claim-preview__title{margin-left:unset}[dir] .channel-section-card__item:hover .channel-thumbnail{transform:scale(1.08)!important}.channel-section-card__item:hover .claim-preview__title{color:var(--color-primary)}","",{version:3,sources:["webpack://./../ui/scss/init/_mixins.scss","webpack://./../ui/component/channelSections/Section/style.scss"],names:[],mappings:"AA8LA,kCACE,uCAAA,CC5LF,sBACE,UAEA,CAHF,4BAGE,kCAAA,CADA,2BACA,CAGE,0CACE,SAAA,CAKN,8BAGE,kBAAA,CAFA,YAAA,CAIA,2BAAA,CAHA,6BAKA,CAPF,oCAME,2CAAA,CAFA,8BAAA,CAGA,gCAAA,CAGF,6BAEE,YAAA,CDUA,eAAA,CACA,sBAAA,CACA,kBCXA,CAHF,uCAGE,6BAAA,CAHF,uCAGE,4BAAA,CAGF,4BACE,aACA,CAFF,kCAEE,0BAAA,CAGF,gCACE,YAAA,CACA,6BAAA,CAGF,iCAGE,yBAAA,CAFA,YAAA,CACA,kEAAA,CAEA,UACA,CALF,uCAKE,8BAAA,CAEA,yBAPF,iCAQI,kEAAA,CAAA,CAEF,wBAVF,iCAWI,uDAAA,CAAA,CAIJ,4BAME,kBAAA,CALA,YAAA,CAEA,YAAA,CAEA,qBAAA,CAHA,WAOA,CATF,kCAQE,kCAAA,CACA,cAAA,CAFA,4BAEA,CAEA,+CACE,wBAGA,CAJF,qDAGE,+BAAA,CADA,kBAEA,CAJF,yDAIE,kBAAA,CAJF,yDAIE,iBAAA,CAGF,kDAGE,2BAAA,CAIA,eAAA,CADA,sBAAA,CAEA,kBAAA,CAPA,UAOA,CARF,wDAEE,iBAMA,CARF,4DAIE,kBAIA,CARF,4DAIE,iBAIA,CAIA,2DACE,+BAAA,CAEF,wDACE,0BAAA",sourcesContent:["@mixin between {\n  display: flex;\n  justify-content: space-between;\n}\n\n@mixin breakpoint-max($breakpoint) {\n  @media (max-width: #{$breakpoint}px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-min($breakpoint) {\n  @media (min-width: #{$breakpoint}px) {\n    @content;\n  }\n}\n\n@mixin center {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n}\n\n@mixin clearfix {\n  clear: both;\n  content: '';\n  display: block;\n}\n\n// (Smart) text truncation\n// Pass in a width to customize how much text is allowed\n// Omit value for basic text truncation\n@mixin constrict($value: null) {\n  @if ($value) {\n    max-width: $value;\n  }\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@mixin create-grid($items-per-row: 4) {\n  grid-template: repeat(1, 1fr) / repeat($items-per-row, 1fr);\n}\n\n// Smart font include\n// Simply pass in the font-weight you want to use and the normal/italicized versions will be added\n// No more weighing down the front-end with references to unused weights\n@mixin font-face($font-weight, $relative-font-path, $font-name) {\n  @font-face {\n    font-family: $font-name;\n    font-style: normal;\n    font-weight: $font-weight;\n    // sass-lint:disable indentation\n    src: url('#{$relative-font-path}/#{$font-weight}.woff2') format('woff2'),\n      url('#{$relative-font-path}/#{$font-weight}.woff') format('woff');\n    // sass-lint:enable indentation\n  }\n\n  @font-face {\n    font-family: $font-name;\n    font-style: italic;\n    font-weight: $font-weight;\n    // sass-lint:disable indentation\n    src: url('#{$relative-font-path}/#{$font-weight}i.woff2') format('woff2'),\n      url('#{$relative-font-path}/#{$font-weight}i.woff') format('woff');\n    // sass-lint:enable indentation\n  }\n}\n\n@mixin font-mono {\n  font-family: 'Fira Code', 'Courier New', monospace;\n}\n\n@mixin font-sans {\n  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n\n@mixin font-serif {\n  font-family: Georgia, serif;\n}\n\n@mixin hide-text {\n  border: none;\n  color: transparent;\n  font: 0 / 0 a;\n  text-shadow: none;\n}\n\n// Cross-browser line-clamp support\n@mixin line-clamp($element-height: 2rem, $row-count: 2, $fade-color: var(--lbry-white), $computed-position: relative) {\n  height: $element-height;\n  overflow: hidden;\n  position: $computed-position;\n\n  &::after {\n    width: 50%;\n    height: calc(#{$element-height} / #{$row-count});\n    right: 0;\n    bottom: 0;\n\n    background-image: linear-gradient(to right, rgba($lbry-white, 0), #{$fade-color} 80%);\n    content: '';\n    position: absolute;\n  }\n}\n\n@mixin no-user-select {\n  user-select: none;\n\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n// Use CSS variables without upsetting Sass-Lint\n// https://github.com/sasstools/sass-lint/issues/1161#issuecomment-390537190\n@mixin root-prop($prop: null, $value: null) {\n  @if ($prop and $value) {\n    #{$prop}: $value;\n  }\n}\n\n@mixin selection($background-color: var(--lbry-white), $text-color: var(--lbry-black)) {\n  &::selection {\n    background-color: $background-color;\n    color: $text-color;\n    text-shadow: none;\n  }\n\n  &::-moz-selection {\n    background-color: $background-color;\n    color: $text-color;\n    text-shadow: none;\n  }\n}\n\n@mixin thumbnail {\n  &::before,\n  &::after {\n    content: '';\n  }\n\n  &::before {\n    float: left;\n    padding-top: var(--aspect-ratio-standard);\n  }\n\n  &::after {\n    clear: both;\n    display: block;\n  }\n}\n\n@mixin linkFocus {\n  background-color: var(--color-link-focus-bg);\n}\n\n@mixin underline($text-color: var(--lbry-black), $whitespace-color: var(--lbry-white)) {\n  @include selection($text-color, $whitespace-color);\n\n  background-image: linear-gradient($whitespace-color, $whitespace-color),\n    linear-gradient($whitespace-color, $whitespace-color), linear-gradient($text-color, $text-color);\n  background-position: 0 88%, 100% 88%, 0 88%;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n  background-size: 0.05rem 1px, 0.05rem 1px, 1px 1px;\n  box-decoration-break: clone;\n  display: inline;\n  text-decoration: none;\n  text-shadow: 0.03rem 0 $whitespace-color, -0.03rem 0 $whitespace-color, 0 0.03rem $whitespace-color,\n    0 -0.03rem $whitespace-color, 0.06rem 0 $whitespace-color, -0.06rem 0 $whitespace-color, 0.09rem 0 $whitespace-color,\n    -0.09rem 0 $whitespace-color, 0.12rem 0 $whitespace-color, -0.12rem 0 $whitespace-color, 0.15rem 0 $whitespace-color,\n    -0.15rem 0 $whitespace-color;\n\n  @-moz-document url-prefix() {\n    // sass-lint:disable-line empty-args\n    background-position: 0 90%, 100% 90%, 0 90%;\n  }\n}\n\n@mixin placeholder {\n  // Temporary fix for lags in Chromium based browsers\n  //animation: pulse 2s infinite ease-in-out;\n  background-color: var(--color-placeholder-background);\n  border-radius: var(--card-radius);\n  border-width: 0;\n}\n\n.pulse {\n  animation: pulse 2s infinite ease-in-out;\n}\n\n@mixin mediaThumbHoverZoom {\n  .media__thumb,\n  img {\n    transition: all 0.2s ease;\n  }\n\n  &:hover {\n    .media__thumb,\n    img {\n      transform: scale(1.05);\n    }\n  }\n}\n\n@mixin list-hover-effect {\n  &:hover {\n    background-color: rgba(var(--color-primary-dynamic), 0.1);\n  }\n}\n\n@mixin handleClaimTileGifThumbnail($width) {\n  .ff-canvas,\n  .freezeframe-img {\n    // height: calc(#{$width} * (9 / 16)) !important;\n    // width: $width;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}\n\n@mixin handleClaimListGifThumbnail($width) {\n  .ff-canvas,\n  .freezeframe-img {\n    // height: calc(#{$width} * (9 / 16)) !important;\n    // width: $width;\n  }\n}\n\n@mixin handleChannelGif($size) {\n  height: $size;\n  width: $size;\n\n  .ff-canvas,\n  .freezeframe-img {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n    // height: $size !important;\n    // width: $size !important;\n  }\n}\n\n@mixin tier-restriction-checkbox {\n  display: inline-block;\n  margin-top: 0;\n  margin-right: var(--spacing-s);\n\n  label {\n    padding: var(--spacing-xxxs) var(--spacing-s);\n    border-radius: var(--border-radius);\n    &::before,\n    &::after {\n      display: none;\n    }\n  }\n\n  input[type='checkbox'] + label {\n    opacity: 0.8;\n    &:hover {\n      opacity: 1;\n    }\n  }\n  input[type='checkbox']:checked + label {\n    opacity: 1;\n  }\n\n  &:nth-of-type(1) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-1), 0.6);\n      background-color: rgba(var(--color-membership-1), 0.2);\n      &:hover {\n        background-color: rgba(var(--color-membership-1), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-1), 1);\n    }\n  }\n  &:nth-of-type(2) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-2), 0.6);\n      background-color: rgba(var(--color-membership-2), 0.2);\n      &:hover {\n        background-color: rgba(var(--color-membership-2), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-2), 1);\n    }\n  }\n  &:nth-of-type(3) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-3), 0.6);\n      background-color: rgba(var(--color-membership-3), 0.2);\n      &:hover {\n        background-color: rgba(var(--color-membership-3), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-3), 1);\n    }\n  }\n  &:nth-of-type(4) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-4), 0.6);\n      background-color: rgba(var(--color-membership-4), 0.2);\n      &:hover {\n        background-color: rgba(var(--color-membership-4), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-4), 1);\n    }\n  }\n  &:nth-of-type(5) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-5), 0.6);\n      background-color: rgba(var(--color-membership-5), 0.2);\n      &:hover {\n        background-color: rgba(var(--color-membership-5), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-5), 1);\n    }\n  }\n  &:nth-of-type(6) {\n    input[type='checkbox'] + label {\n      border: 2px solid rgba(var(--color-membership-6), 0.6);\n      background-color: rgba(var(--color-membership-6), 0.2);\n\n      &:hover {\n        background-color: rgba(var(--color-membership-6), 0.4);\n      }\n    }\n    input[type='checkbox']:checked + label {\n      background-color: rgba(var(--color-membership-6), 1);\n    }\n  }\n}\n\n@mixin border-std {\n  border: 1px solid var(--color-border);\n  border-radius: var(--card-radius);\n}\n","@import '~ui/scss/init/breakpoints';\n@import '~ui/scss/init/mixins';\n\n.channel-section-card {\n  width: 100%;\n  margin-top: var(--spacing-l);\n  border-radius: var(--border-radius);\n\n  &:hover {\n    .menu__button {\n      opacity: 1;\n    }\n  }\n}\n\n.channel-section-card__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-s);\n  font-size: var(--font-large);\n  border-bottom: 1px solid var(--color-border);\n  padding-bottom: var(--spacing-xs);\n}\n\n.channel-section-card__title {\n  @include constrict();\n  display: flex;\n  margin-right: var(--spacing-l);\n}\n\n.channel-section-card__menu {\n  line-height: 1;\n  padding: 0 var(--spacing-s);\n}\n\n.channel-section-card__item-row {\n  display: flex;\n  justify-content: space-between;\n}\n\n.channel-section-card__item-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(calc(100% / 9), 1fr));\n  grid-gap: var(--spacing-s);\n  width: 100%;\n  margin-bottom: var(--spacing-l);\n\n  @media (max-width: $breakpoint-medium) {\n    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 7), 1fr));\n  }\n  @media (max-width: $breakpoint-small) {\n    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 4), 1fr));\n  }\n}\n\n.channel-section-card__item {\n  display: flex;\n  flex-grow: 1;\n  flex-basis: 0;\n\n  flex-direction: column;\n  align-items: center;\n  padding: var(--spacing-xxs) 0;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n\n  .channel-thumbnail {\n    transition: transform 0.2s;\n    transform: scale(1);\n    margin-bottom: var(--spacing-xs);\n    margin-right: unset;\n  }\n\n  .claim-preview__title {\n    width: 100%;\n    text-align: center;\n    font-size: var(--font-small);\n    margin-right: unset;\n\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  &:hover {\n    .channel-thumbnail {\n      transform: scale(1.08) !important;\n    }\n    .claim-preview__title {\n      color: var(--color-primary);\n    }\n  }\n}\n"],sourceRoot:""}]);const c=o}}]);
//# sourceMappingURL=6109-9d5b9065438b743c2211.js.map