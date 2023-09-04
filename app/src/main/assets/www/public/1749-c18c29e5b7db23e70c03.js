"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[1749],{1749:(e,t,n)=>{n.d(t,{Z:()=>X});var r=n(3658),a=n(7920),l=n(35101),o=n(52705),i=n(15927),c=n(17185),u=n(90416),s=n(46727),m=n(17526),f=n(77369),d=n(88441),b=n(66598),p=n.n(b),g=n(94720),h=n(44908),y=n(61277),v=n(10995),E=n(14443),w=n(15184),S=n(53389),_=n(71036).__;const C=(0,r.$j)((function(e,t){return{claim:t.uri&&(0,a.pB)(t.uri)(e)}}),{doOpenModal:i.DG})((function(e){var t,n=e.doOpenModal,r=e.claim,a=e.abandonActionCallback,l=(r||{}).value_type;return"channel"===l?t=_("Delete Channel"):"collection"===l?t=_("Delete List"):"stream"===l&&(t=_("Delete Publish")),d.createElement(h.default,{disabled:!r,label:t,button:"secondary",icon:f.DELETE,onClick:function(){n(m.f9,{claim:r,cb:a})}})}));var A=n(16643),T=n(33878),N=n(50729),k=n(51635),O=n(73249),I=n(26862),j=n(49523),x=n(74971),U=n(9203),M=n(6764),Z=n(16395),D=n(77093),P=n(22057),L=n(19507),F=n(96284),W=n(71036).__;function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function Y(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||V(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===R(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||V(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q=5;const K=function(e){var t=e.uri,n=e.claim,r=e.amount,a=e.title,l=e.description,o=e.website,i=e.email,c=e.thumbnailUrl,u=e.coverUrl,s=e.tags,b=e.locations,_=e.languages,R=void 0===_?[]:_,B=e.onDone,$=e.updateChannel,V=e.updateError,Q=e.updatingChannel,K=e.createChannel,H=e.creatingChannel,J=e.createError,X=e.clearChannelErrors,ee=e.claimInitialRewards,te=e.openModal,ne=e.disabled,re=e.isClaimingInitialRewards,ae=e.hasClaimedInitialRewards,le=z(d.useState(void 0),2),oe=le[0],ie=le[1],ce=z(d.useState(""),2),ue=ce[0],se=ce[1],me=z(d.useState({cover:!1,thumbnail:!1}),2),fe=me[0],de=me[1],be=z(d.useState(!1),2),pe=be[0],ge=be[1],he=z(d.useState(!1),2),ye=he[0],ve=he[1],Ee=(n||{}).claim_id,we=z(d.useState(function(){var e={website:o,email:i,coverUrl:u,thumbnailUrl:c,description:l,title:a,amount:r||.001,languages:R||[],locations:b||[],tags:s?s.map((function(e){return{name:e}})):[]};Ee&&(e.claim_id=Ee);return e}()),2),Se=we[0],_e=we[1],Ce=(0,S.parseURI)(t).channelName,Ae=Se.name,Te=!t,Ne=(0,A.k6)().replace,ke=Se.languages,Oe=Array.isArray(ke)&&ke.length&&ke[0],Ie=Array.isArray(ke)&&ke.length>=2&&ke[1],je=d.useMemo((function(){return W(re?"Claiming credits...":H||Q?"Saving...":"Save")}),[re,H,Q]),xe=d.useMemo((function(){return re||H||Q||pe||ue||Te&&!Se.name}),[re,H,Q,ue,Te,pe,Se.name]),Ue=function(){var e=V||J;e&&e.includes("bad-txns-claimscriptsize-toolarge (code 16)")&&(e=W("Transaction limit reached. Try reducing the Description length."));(!fe.thumbnail&&ye||!fe.cover&&pe)&&(e=W("Invalid %error_type%",{error_type:ye?"thumbnail":pe&&"cover image"}));return e}(),Me=pe?P:Se.coverUrl,Ze=Se.thumbnailUrl?ye?P:Se.thumbnailUrl:L,De=z(d.useState(0),2),Pe=De[0],Le=De[1],Fe=function(){window.pageYOffset>240?Le(!0):Le(!1)};function We(e,t){var n=Y(ke);0===e?t===I.h3?n=[]:n[0]=t:t===I.h3||t===n[0]?n.splice(1,1):n[e]=t,_e(G(G({},Se),{},{languages:n}))}function Re(e,t){_e(G(G({},Se),{},{thumbnailUrl:e})),de(G(G({},fe),{},{thumbnail:t})),ve(!1)}function Ye(e,t){_e(G(G({},Se),{},{coverUrl:e})),de(G(G({},fe),{},{cover:t})),ge(!1)}d.useEffect((function(){return window.addEventListener("scroll",Fe,{passive:!0}),function(){return window.removeEventListener("scroll",Fe)}}),[]),d.useEffect((function(){var e;Ae||void 0===Ae?(0,S.isNameValid)(Ae)||(e=T.ex):e=W("A name is required for your url"),ie(e)}),[Ae]),d.useEffect((function(){X()}),[X]),d.useEffect((function(){ae||ee()}),[ae,ee]);var Be=z(d.useState(0),2),Ge=Be[0],$e=Be[1];function ze(e){$e(e)}return d.createElement(d.Fragment,null,d.createElement("div",{className:p()({"card--disabled":ne})},d.createElement("header",{className:"channel-cover",style:{backgroundImage:"url("+Me+")"}},d.createElement("div",{className:"channel-header-content"},d.createElement("div",{className:"channel__quick-actions"},d.createElement(h.default,{button:"alt",title:W("Cover"),onClick:function(){return te(m.Pk,{onUpdate:function(e,t){return Ye(e,t)},title:W("Edit Cover Image"),helpText:W("(Recommmended: 2048x320 px)"),assetName:W("Cover Image"),currentValue:Se.coverUrl,otherValue:Se.thumbnailUrl})},icon:f.CAMERA,iconSize:18})),Se.coverUrl&&pe&&fe.cover&&d.createElement("div",{className:"channel-cover__custom--waiting"},d.createElement("p",null,W("Uploaded image will be visible in a few minutes after you submit this form."))),d.createElement("div",{className:"channel__primary-info"},d.createElement("h1",{className:"channel__title"},Se.title||Ce&&"@"+Ce||Se.name&&"@"+Se.name)))),d.createElement(N.mQ,{index:Ge},d.createElement("div",{className:p()("tab__wrapper",{"tab__wrapper--fixed":Pe})},d.createElement("div",{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}},d.createElement(w.Z,{className:p()("channel__thumbnail--channel-page",{"channel__thumbnail--channel-page-fixed":Pe}),uri:t,thumbnailPreview:Ze,allowGifs:!0,setThumbUploadError:ve,thumbUploadError:ye}),d.createElement("div",{className:"channel__edit-thumb"},d.createElement(h.default,{button:"alt",title:W("Edit"),onClick:function(){return te(m.Pk,{onUpdate:function(e,t){return Re(e,t)},title:W("Edit Thumbnail Image"),helpText:W("(1:1 ratio)",{max_size:Z.THUMBNAIL_CDN_SIZE_LIMIT_BYTES/1048576}),assetName:W("Thumbnail"),currentValue:Se.thumbnailUrl,otherValue:Se.coverUrl})},icon:f.CAMERA,iconSize:18}))),d.createElement(N.td,{className:"tabs__list--channel-page"},d.createElement(N.OK,{"aria-selected":0===Ge,onClick:function(){return ze(0)}},W("About")),d.createElement(N.OK,{"aria-selected":1===Ge,onClick:function(){return ze(1)}},!Te&&W("Other")))),d.createElement(N.nP,null,d.createElement(N.x4,null,d.createElement(k.Z,{background:!0,title:W("General"),body:d.createElement("div",{className:"publish-row publish-row--no-margin"},Te&&d.createElement(h.default,{button:"primary",label:W("Sync YouTube Channel"),icon:f.YOUTUBE,navigate:"/$/".concat(O.YOUTUBE_SYNC)}),Te&&d.createElement("fieldset-group",{class:"fieldset-group--smushed fieldset-group--disabled-prefix",style:{marginTop:"var(--spacing-m)"}},d.createElement("fieldset-section",null,d.createElement("label",{htmlFor:"channel_name"},W("Name")),d.createElement("div",{className:"form-field__prefix"},"@")),d.createElement(g.Wi,{autoFocus:Te,type:"text",name:"channel_name",placeholder:W("MyAwesomeChannel"),value:Se.name||Ce,error:oe,disabled:!Te,onChange:function(e){return _e(G(G({},Se),{},{name:e.target.value}))}})),d.createElement("fieldset-section",{style:{marginTop:"var(--spacing-m)"}},d.createElement(g.Wi,{type:"text",name:"channel_title2",label:W("Title"),placeholder:W("My Awesome Channel"),value:Se.title,onChange:function(e){return _e(G(G({},Se),{},{title:e.target.value}))}})),d.createElement(g.Wi,{type:"markdown",name:"content_description2",label:W("Description"),placeholder:W("Description of your content"),value:Se.description,onChange:function(e){return _e(G(G({},Se),{},{description:e}))},textAreaMaxLength:v.lm}))}),d.createElement(k.Z,{background:!0,title:W("Contact"),body:d.createElement("div",{className:"publish-row publish-row--no-margin"},d.createElement(g.Wi,{type:"text",name:"content_email2",label:W("Email"),placeholder:W("yourstruly@example.com"),disabled:!1,value:Se.email,onChange:function(e){return _e(G(G({},Se),{},{email:e.target.value}))}}),d.createElement(g.Wi,{type:"text",name:"channel_website2",label:W("Website"),placeholder:W("aprettygoodsite.com"),disabled:!1,value:Se.website,onChange:function(e){return _e(G(G({},Se),{},{website:e.target.value}))}}))}),d.createElement(k.Z,{background:!0,title:W("Tags"),className:"card--tags",body:d.createElement("div",{className:"publish-row"},d.createElement(y.Z,{suggestMature:!Z.SIMPLE_SITE,disableAutoFocus:!0,disableControlTags:!0,limitSelect:q,tagsPassedIn:Se.tags||[],label:W("Selected Tags"),onRemove:function(e){var t=Se.tags.slice().filter((function(t){return t.name!==e.name}));_e(G(G({},Se),{},{tags:t}))},onSelect:function(e){e.forEach((function(e){Se.tags.map((function(e){return e.name})).includes(e.name)?_e(G(G({},Se),{},{tags:Se.tags.filter((function(t){return t.name!==e.name}))})):_e(G(G({},Se),{},{tags:[].concat(Y(Se.tags),[e])}))}))}}))}),d.createElement(k.Z,{background:!0,title:W("Languages"),body:d.createElement("div",{className:"publish-row"},d.createElement("fieldset-section",{style:{marginTop:"calc(var(--spacing-m) * -1)"}},d.createElement(g.Wi,{name:"language_select",type:"select",label:W("Primary Language"),onChange:function(e){return We(0,e.target.value)},value:Oe,helper:W("Your main content language")},d.createElement("option",{key:"pri-langNone",value:I.h3},W("None selected")),(0,D.m6)(U.Z).map((function(e){var t=z(e,2),n=t[0],r=t[1];return d.createElement("option",{key:n,value:n},r)})))),d.createElement(g.Wi,{name:"language_select2",type:"select",label:W("Secondary Language"),onChange:function(e){return We(1,e.target.value)},value:Ie,disabled:!ke[0],helper:W("Your other content language")},d.createElement("option",{key:"sec-langNone",value:I.h3},W("None selected")),(0,D.m6)(U.Z).map((function(e){var t=z(e,2),n=t[0],r=t[1];return d.createElement("option",{key:n,value:n,disabled:n===ke[0]},r)}))))})),d.createElement(N.x4,null,d.createElement(k.Z,{background:!0,title:W("Credit Details"),body:d.createElement("div",{className:"publish-row publish-row--no-margin"},d.createElement(g.Wi,{className:"form-field--price-amount",type:"number",name:"content_bid2",step:"any",label:d.createElement(x.Z,{postfix:W("Deposit"),size:14}),value:Se.amount,error:ue,min:"0.0",disabled:!1,onChange:function(t){return function(t){var n=e.balance,r=e.amount,a=(parseFloat(r)||0)+(parseFloat(n)||0);_e(G(G({},Se),{},{amount:t})),t<=0||isNaN(t)?se(W("Deposit cannot be 0")):a<t?se(W("Deposit cannot be higher than your available balance: %balance%",{balance:a})):a-t<T.qk?se(W("Please decrease your deposit to account for transaction fees")):t<T.wf?se(W("Your deposit must be higher")):se("")}(parseFloat(t.target.value))},placeholder:.1,helper:d.createElement(d.Fragment,null,W("Increasing your deposit can help your channel be discovered more easily."),d.createElement(M.Z,{inline:!0}))}))}),!Te&&d.createElement(d.Fragment,null,d.createElement(k.Z,{background:!0,title:W("Delete Channel"),body:d.createElement("div",{className:"publish-row"},d.createElement(C,{uri:t,abandonActionCallback:function(){return Ne("/$/".concat(O.CHANNELS))}}))}))))),d.createElement("div",{className:"card-fixed-bottom"},d.createElement(k.Z,{className:"card--after-tabs tab__panel",actions:d.createElement(d.Fragment,null,d.createElement("div",{className:"section__actions"},d.createElement(h.default,{button:"primary",disabled:xe,label:je,onClick:function(){t?$(Se).then((function(e){e&&B()})):K(Se).then((function(e){e&&(j.Z.apiLog.publish(e),B())}))}}),d.createElement(h.default,{button:"link",label:W("Cancel"),onClick:B}),Ue?d.createElement(E.Z,null,Ue):d.createElement("p",{className:"help"},d.createElement(F.default,{icon:f.INFO}),W("After submitting, it will take a few minutes for your changes to be live for everyone."))))}))))};var H=["name","amount"];function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const X=(0,r.$j)((function(e,t){return{claim:(0,a.pB)(t.uri)(e),title:(0,a.$8)(e,t.uri),thumbnailUrl:(0,a.SI)(e,t.uri),coverUrl:(0,a.uV)(t.uri)(e),description:(0,a.uM)(t.uri,"description")(e),website:(0,a.uM)(t.uri,"website_url")(e),email:(0,a.uM)(t.uri,"email")(e),tags:(0,a.uM)(t.uri,"tags")(e),locations:(0,a.uM)(t.uri,"locations")(e),languages:(0,a.uM)(t.uri,"languages")(e),amount:(0,a.PN)(t.uri)(e),updateError:(0,a.uq)(e),updatingChannel:(0,a.Lu)(e),createError:(0,a.x6)(e),creatingChannel:(0,a.pQ)(e),balance:(0,l.QM)(e),isClaimingInitialRewards:(0,s.xU)(e),hasClaimedInitialRewards:(0,s.MB)(e)}}),(function(e){return{openModal:function(t,n){return e((0,i.DG)(t,n))},updateChannel:function(t){return e((0,o.n_)(t))},createChannel:function(t){var n=t.name,r=t.amount,a=J(t,H);return e((0,o.FO)("@"+n,r,a,(function(t){e((0,c.x0)(t))})))},clearChannelErrors:function(){return e((0,o.gr)())},claimInitialRewards:function(){return e((0,u.G8)())}}}))(K)},61277:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(3658),a=n(94800),l=n(36464),o=n(9767),i=n(88441),c=n(94720),u=n(90299);function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw l}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e,t){var n,r=new Set(e),a=s(t);try{for(a.s();!(n=a.n()).done;){var l=n.value;r.delete(l)}}catch(e){a.e(e)}finally{a.f()}return r},d=function(e,t){var n,r=new Set(e),a=s(t);try{for(a.s();!(n=a.n()).done;){var l=n.value;r.add(l)}}catch(e){a.e(e)}finally{a.f()}return r},b=n(32158),p=n(49523),g=n(1987),h=n(47726),y=n(71036).__;function v(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=["lbry-first"];const C=(0,r.$j)((function(e,t){return{unfollowedTags:t.unfollowedTags||(0,a.KD)(e),followedTags:t.followedTags||(0,a.N1)(e),user:(0,o.dy)(e)}}),{doToggleTagFollowDesktop:l.lw,doAddTag:l.dr,doDeleteTag:l.Zi})((function(e){var t=e.tagsPassedIn,n=void 0===t?[]:t,r=e.unfollowedTags,a=void 0===r?[]:r,l=e.followedTags,o=void 0===l?[]:l,s=e.doToggleTagFollowDesktop,m=e.doAddTag,S=e.onSelect,C=e.onRemove,A=e.hideSuggestions,T=e.hideInputField,N=e.suggestMature,k=e.disableAutoFocus,O=e.placeholder,I=e.label,j=e.labelAddNew,x=e.labelSuggestions,U=e.disabled,M=e.limitSelect,Z=void 0===M?1e3:M,D=e.limitShow,P=void 0===D?5:D,L=e.user,F=e.disableControlTags,W=e.help,R=E((0,i.useState)(""),2),Y=R[0],B=R[1],G=L&&L.experimental_ui,$=new Set(o.map((function(e){return e.name}))),z=new Set(n.map((function(e){return e.name}))),V=new Set(a.map((function(e){return e.name}))),Q=f($,z),q=f(V,z),K=d(Q,q),H=z.size;[].concat(v(g.zS),["mature"]).forEach((function(e){z.has(e)&&H--}));var J,X=[g.rm,g.h0,g.YQ,g.Bh],ee=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=w(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw l}}}}(z);try{var te=function(){var e=J.value;X.forEach((function(t){e.startsWith(t)&&--H}))};for(ee.s();!(J=ee.n()).done;)te()}catch(e){ee.e(e)}finally{ee.f()}var ne=Boolean(Z&&H>=Z),re=Array.from(K).filter((function(e){var t=Y.substr(Y.lastIndexOf(",")+1,Y.length).trim();return!Y||e.toLowerCase().includes(t.toLowerCase())})).slice(0,P);function ae(e){e.preventDefault();var t=Y.trim();if(0!==t.length){B("");var n=Array.from(new Set(t.split(",").slice(0,Z-H).map((function(e){return e.trim().toLowerCase()})).filter((function(e){return!_.includes(e)}))));if(S){var r=n.map((function(e){return{name:e}}));S(r)}else n.forEach((function(e){a.some((function(t){return t.name===e}))||m(e),o.some((function(t){return t.name===e}))||s(e)}))}}function le(e){if(S)S([{name:e}]);else{var t=o.map((function(e){return e.name})).includes(e);s(e),p.Z.event.tagFollow(e,!t)}}return Y||!N||re.some((function(e){return"mature"===e}))||re.push("mature"),i.createElement(i.Fragment,null,i.createElement(c.l0,{className:"tags__input-wrapper",onSubmit:ae},i.createElement("fieldset-section",null,i.createElement("label",{style:{marginTop:0}},Z<1e3?i.createElement(b.Z,{tokens:{number:Z-H,selectTagsLabel:I}},"%selectTagsLabel% (%number% left)"):I||y("Following --[button label indicating a channel has been followed]--")),i.createElement("ul",{className:"tags--remove"},0===H&&i.createElement(u.Z,{key:"placeholder-tag",name:"example",disabled:!0,type:"remove"}),Boolean(n.length)&&(0,h.Ir)(n).map((function(e){return i.createElement(u.Z,{key:"passed".concat(e.name),name:e.name,type:"remove",onClick:function(){C(e)}})}))),!T&&i.createElement(c.Wi,{autoFocus:!k,className:"tag__input",onChange:function(e){B(e.target.value)},placeholder:O||y("gaming, crypto"),type:"text",value:Y,disabled:U,label:j||y("Add Tags")}),!A&&i.createElement("section",null,i.createElement("label",null,x||(Y.length?y("Matching"):y("Known Tags"))),i.createElement("ul",{className:"tags"},Boolean(Y.length)&&!re.includes(Y)&&i.createElement(u.Z,{disabled:"mature"!==Y&&ne,key:"entered".concat(Y),name:Y,type:"add",onClick:Y.includes("")?function(e){return ae(e)}:function(e){return le(Y)}}),re.map((function(e){return i.createElement(u.Z,{disabled:"mature"!==e&&ne,key:"suggested".concat(e),name:e,type:"add",onClick:function(){return le(e)}})}))),i.createElement("div",{className:"form-field__hint mt-m"},W))),G&&!F&&S&&i.createElement("fieldset-section",null,i.createElement("label",null,y("Control Tags")),g.NI.map((function(e){return i.createElement(c.Wi,{key:e,name:e,type:"checkbox",blockWrap:!1,label:y(e.replace(g.YM,"").split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")),checked:n.some((function(t){return t.name===e})),onChange:function(){return t=e,void((r=n.find((function(e){return e.name===t})))?C(r):S&&S([{name:t}]));var t,r}})})))))}))},6764:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(3658),a=n(35101),l=n(68470),o=n(32158),i=n(88441);const c=function(e){var t=e.balance,n=e.inline,r=function(e){return i.createElement(o.Z,{tokens:{balance:i.createElement(l.Z,{amount:t,precision:4})}},e)};return t?n?i.createElement("span",{className:"help--spendable"},r("%balance% available.")):i.createElement("div",{className:"help"},r("Your immediately spendable balance is %balance%.")):null};const u=(0,r.$j)((function(e){return{balance:(0,a.QM)(e)}}))(c)},36464:(e,t,n)=>{n.d(t,{Zi:()=>c,dr:()=>i,lw:()=>o});var r=n(36092),a=n(18808),l=n(15927),o=function(e){return function(t,n){var o=n();if(!(0,r.HW)(o))return t((0,l.sg)());t({type:a.TOGGLE_TAG_FOLLOW,data:{name:e}})}},i=function(e){return{type:a.TAG_ADD,data:{name:e}}},c=function(e){return{type:a.TAG_DELETE,data:{name:e}}}},22057:(e,t,n)=>{e.exports=n.p+"img/thumbnail-broken.png"}}]);
//# sourceMappingURL=1749-c18c29e5b7db23e70c03.js.map