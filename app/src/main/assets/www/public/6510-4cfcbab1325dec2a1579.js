"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[6510],{76510:(e,t,n)=>{n.d(t,{Z:()=>he});var a=n(3658),r=n(7920),l=n(52705),i=n(2038),o=n(19208),c=n(94800),s=n(72408),u=n(52338),m=n(20983),d=n(16395),f=n(19092),h=n(88441),p=n(16643),y=n(1987),g=n(77093),v=n(58210),_=n(38291),b=n(44908),E=n(22768),S=n.n(E),O=n(42074),w=n(64177),C=n(41522),A=n(32158),k=n(73662),N=n(71898),T=n(94720),I=n(71036).__;const j=function(e){var t=e.filterCtx,n=e.contentType;return null!=t&&t.repost||null!=t&&t.membersOnly?h.createElement("div",{className:"additional-filters"},h.createElement("fieldset",null,h.createElement("label",null,I("Additional Filters")),h.createElement("div",{className:"filer-checkbox-wrapper"},(null==t?void 0:t.repost)&&h.createElement("div",{title:I("Hide reposts")},h.createElement(T.Wi,{label:I("Hide reposts"),name:"hide_reposts",type:"checkbox",checked:t.repost.hideReposts,disabled:n===f.Ot,onChange:function(){return t.repost.setHideReposts((function(e){return!e}))}})),(null==t?void 0:t.membersOnly)&&h.createElement("div",{title:I("Hide members-only content")},h.createElement(T.Wi,{label:I("Hide members-only content"),name:"hide_members_only",type:"checkbox",checked:t.membersOnly.hideMembersOnly,onChange:function(){return t.membersOnly.setHideMembersOnly((function(e){return!e}))}}))))):null};var x=n(96284),M=n(77369),L=n(66598),P=n.n(L),B=n(76333),F=n(71036).__;function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,i,o=[],c=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=l.call(n)).done)&&(o.push(a.value),o.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const D=function(e){var t=e.urlParams,n=e.handleChange,a=e.standalone,r=h.useRef(),l=U(h.useState(t.get(f.nO)||""),2),i=l[0],o=l[1],c=h.useCallback((0,B.Z)((function(e){return n({key:f.nO,value:e})}),500),[]);return h.createElement("div",{className:P()("clh-tag-search",{"clh-tag-search--standalone":a}),title:F("Multiple tags can be added by separating them with a comma.\nExample: sports,news,tv")},!a&&h.createElement("label",null,F("Tags")),h.createElement("div",{className:"clh-tag-search__input_group"},h.createElement(T.Wi,{ref:r,placeholder:F("Search tags"),type:"text",className:"clh-tag-search__input",name:"tag_query",value:i,onChange:function(e){o(e.target.value),c(e.target.value)}}),h.createElement(x.default,{icon:M.TAG}),h.createElement(b.default,{icon:M.REMOVE,"aria-label":F("Clear"),button:"alt",className:"clh-tag-search__clear",onClick:function(){o(""),n({key:f.nO,value:""})}})))};var W=n(73249),Z=n(29679);function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,i,o=[],c=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=l.call(n)).done)&&(o.push(a.value),o.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function V(e,t,n){var a=(0,p.k6)(),r=a.action,l=a.location,i=H((0,Z.Z)("".concat(t,"-").concat(l.pathname),n),2),o=i[0],c=i[1],s=H((0,Z.Z)("".concat(t,"-entry-").concat(l.pathname),n),2),u=s[0],m=s[1],d=e.find((function(e){return e}));return d||(d="POP"===r?u:o),h.useEffect((function(){c(d)}),[d,c]),h.useEffect((function(){"POP"!==r&&m(d)}),[]),d}var X=n(91983),G=n(37921);(0,G.vY)("en"),(0,G.vY)("hr"),(0,G.vY)("nl"),(0,G.vY)("fr"),(0,G.vY)("de"),(0,G.vY)("it"),(0,G.vY)("pl"),(0,G.vY)("pt"),(0,G.vY)("ru"),(0,G.vY)("es"),(0,G.vY)("tr"),(0,G.vY)("cs");var $=n(77595),z=n(95810),q=n(71036).__;function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,i,o=[],c=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=l.call(n)).done)&&(o.push(a.value),o.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const K=function(e){var t,n,a=e.defaultTags,r=e.freshness,l=e.defaultFreshness,i=e.claimType,c=e.streamType,s=e.defaultStreamType,u=e.feeAmount,m=e.sortBy,d=e.orderBy,y=e.defaultOrderBy,g=e.hideAdvancedFilter,v=e.hideLayoutButton,_=e.hasMatureTags,E=e.hiddenNsfwMessage,S=e.channelIds,O=e.tileLayout,w=e.doSetClientSetting,C=e.contentType,A=e.meta,k=e.setPage,N=e.hideFilters,I=e.searchInLanguage,x=(e.languageSetting,e.scrollAnchor),L=(0,z.dD)(),F=h.useContext($.m),U=(0,p.k6)(),R=U.push,H=U.location,Y=H.search,G=H.pathname,Q=J((0,Z.Z)("expanded-".concat(H.pathname),!1),2),K=Q[0],ee=Q[1],te=new URLSearchParams(Y),ne=r||te.get(f.xv)||l,ae=C||te.get(f.dS),re=c||f.vH.includes(ae)&&ae||s||null,le=te.get(f.Px)||null,ie=m||te.get(f._e)||null,oe=te.get(f.yG),ce=oe?oe.split(","):S,se=te.get("fee_amount")||u||f.xD,ue=!(i&&i===f.j0&&i===f.qX),me=G.includes(W.DISCOVER),de=G.includes(W.RABBIT_HOLE)||G.includes(W.WILD_WEST),fe=me||de,he=J((0,Z.Z)("hideAnonymous-".concat(H.pathname),!1),2),pe=he[0],ye=he[1],ge=V([te.get(f.Be)||f.th.ALL],"durUser",null),ve=J((0,Z.Z)("minDurUserMinutes-".concat(H.pathname),null),2),_e=ve[0],be=ve[1],Ee=J((0,Z.Z)("maxDurUserMinutes-".concat(H.pathname),null),2),Se=Ee[0],Oe=Ee[1],we=J(h.useState(_e),2),Ce=we[0],Ae=we[1],ke=J(h.useState(Se),2),Ne=ke[0],Te=ke[1],Ie=h.useCallback((0,B.Z)((function(e){return be(e)}),750),[]),je=h.useCallback((0,B.Z)((function(e){return Oe(e)}),750),[]),xe=(I||null===le&&f.TZ,I||f.TZ,V([d,te.get(f.Wp),y],"orderUser",f.Vs));function Me(e){var t=function(e){var t=new URLSearchParams(H.search);switch(f.tW.forEach((function(e){null!==te.get(e)&&t.set(e,te.get(e))})),e.key){case f.Wp:t.set(f.Wp,e.value);break;case f._e:e.value===f.dY.NEWEST.key?t.delete(f._e):t.set(f._e,e.value);break;case f.xv:e.value===l||e.value===f.j6?t.delete(f.xv):t.set(f.xv,e.value);break;case f.dS:e.value===f.j0||e.value===f.Ot||e.value===f.qX?(t.delete(f.Be),t.set(f.dS,e.value)):e.value===f.cX?t.delete(f.dS):t.set(f.dS,e.value);break;case f.Be:e.value===f.th.ALL?t.delete(f.Be):t.set(f.Be,e.value);break;case f.Px:t.set(f.Px,e.value);break;case f.nO:e.value===f.FA?a===f.FA?t.delete(f.nO):t.set(f.nO,e.value):e.value===f.CW&&a===f.CW?t.delete(f.nO):t.set(f.nO,e.value);break;case f.Dl:e.value===f.xD?t.delete(f.Dl):t.set(f.Dl,e.value)}return"?".concat(t.toString())+(x?"#"+x:"")}(e);k(1),R(t)}return h.useEffect((function(){g&&ee(!1)}),[]),h.createElement(h.Fragment,null,h.createElement("div",{className:"claim-search__wrapper clh__wrapper"},h.createElement("div",{className:"claim-search__header"},h.createElement("div",{className:"claim-search__top"},!N&&h.createElement("div",{className:"claim-search__menu-group"},f.$i.map((function(e){return h.createElement(b.default,{key:e,button:"alt",onClick:function(t){return Me({key:f.Wp,value:e})},className:P()("button-toggle button-toggle--".concat(e),{"button-toggle--active":xe===e}),disabled:d,icon:(0,X.lV)(e),iconSize:(0,X.lV)(e)===M.NEW?20:void 0,label:q((0,X.lV)(e))})}))),h.createElement("div",{className:"claim-search__menu-group"},void 0!==O&&!v&&h.createElement(h.Fragment,null,h.createElement(b.default,{onClick:function(){w(o.fe,!0)},button:"alt",className:P()("button-toggle button-toggle--top",{"button-toggle--active":O}),"aria-label":q("Change to tile layout"),icon:M.VIEW_TILES}),h.createElement(b.default,{onClick:function(){w(o.fe,!1)},button:"alt",className:P()("button-toggle button-toggle--top",{"button-toggle--active":!O}),"aria-label":q("Change to list layout"),icon:M.VIEW_LIST}))),h.createElement(h.Fragment,null,fe&&h.createElement("div",{className:"claim-search__menu-group hide-anonymous-checkbox"},h.createElement(T.Wi,{label:q("Hide anonymous"),name:"hide_anonymous",type:"checkbox",checked:pe,onChange:function(){return ye(!pe)}}))),h.createElement("div",{className:"claim-search__menu-group stretch"},!g&&h.createElement(b.default,{button:"alt","aria-label":q("More"),className:P()("button-toggle button-toggle--top button-toggle--more",{"button-toggle--custom":Boolean(C||te.get(f.xv)||te.get(f.dS)||!(null!=F&&F.liftUpTagSearch)&&te.get(f.nO)||te.get(f.Be)||te.get(f.Dl)||te.get(f.Px)||(null==F||null===(t=F.repost)||void 0===t?void 0:t.hideReposts)||(null==F||null===(n=F.membersOnly)||void 0===n?void 0:n.hideMembersOnly)),"button-toggle--active button-toggle--bottom-arrow":K}),icon:M.SLIDERS,onClick:function(){return ee(!K)}}),(null==F?void 0:F.liftUpTagSearch)&&h.createElement(D,{standalone:!0,urlParams:te,handleChange:Me}))),A&&!L&&h.createElement("div",{className:"section__actions--no-margin"},A)),h.createElement("div",{className:P()("claim-search__filters-wrapper",{"claim-search__filters-wrapper-expanded":K})},h.createElement("div",{className:"claim-search__filters"},h.createElement("div",{className:"claim-search__menus"},xe===f.Pb&&h.createElement("div",{className:"claim-search__input-container"},h.createElement(T.Wi,{className:P()("claim-search__dropdown",{"claim-search__dropdown--selected":ne!==l}),type:"select",name:"trending_time",label:q("How Fresh"),value:ne,onChange:function(e){return Me({key:f.xv,value:e.target.value})}},f.KM.map((function(e){return h.createElement("option",{key:e,value:e},e===f.XV&&q("Today"),e!==f.ek&&e!==f.j6&&e!==f.XV&&q("This "+(0,X.lV)(e)),e===f.ek&&q("All time"),e===f.j6&&q("Default"))})))),ue&&h.createElement("div",{className:P()("claim-search__input-container",{"claim-search__input-container--selected":ae})},h.createElement(T.Wi,{className:P()("claim-search__dropdown",{"claim-search__dropdown--selected":ae}),type:"select",name:"claimType",label:q("Content Type"),value:ae||f.cX,onChange:function(e){return Me({key:f.dS,value:e.target.value})}},F.contentTypes.map((function(e){if(e!==f.j0||e===f.j0&&!ce)return h.createElement("option",{key:e,value:e},e===f.qX&&q("Playlist"),e===f.j0&&q("Channel"),e===f.Ot&&q("Repost"),e===f.XG&&q("Video"),e===f.Oh&&q("Audio"),e===f.T7&&q("Image"),e===f.Do&&q("Model"),e===f.hm&&q("Other"),e===f.Mm&&q("Document"),e===f.cX&&q("Any"))})))),ue&&h.createElement(h.Fragment,null,h.createElement("div",{className:"claim-search__input-container"},h.createElement(T.Wi,{className:P()("claim-search__dropdown",{"claim-search__dropdown--selected":ge}),label:q("Duration --[length of audio or video]--"),type:"select",name:"duration",disabled:!(null===ae||ae===f.Oh||ae===f.XG||re===f.Oh||re===f.XG),value:ge||f.th.ALL,onChange:function(e){return Me({key:f.Be,value:e.target.value})}},f.Dj.map((function(e){return h.createElement("option",{key:String(e),value:e},e===f.th.SHORT&&q("Short (< 4 minutes)"),e===f.th.LONG&&q("Long (> 20 min)"),e===f.th.ALL&&q("Any"),e===f.th.CUSTOM&&q("Custom"))})))),ge===f.th.CUSTOM&&h.createElement("div",{className:"claim-search__duration-inputs-container"},h.createElement("div",{className:"claim-search__input-container"},h.createElement(T.Wi,{label:q("Min Minutes"),type:"number",name:"min_duration__minutes",value:Ce,onChange:function(e){Ae(e.target.value),Ie(e.target.value)}})),h.createElement("div",{className:"claim-search__input-container"},h.createElement(T.Wi,{label:q("Max Minutes"),type:"number",name:"max_duration__minutes",value:Ne,onChange:function(e){Te(e.target.value),je(e.target.value)}})))),!1,h.createElement("div",{className:"claim-search__input-container"},h.createElement(T.Wi,{className:P()("claim-search__dropdown",{"claim-search__dropdown--selected":se===f.S||se===f.Hn}),label:q("Price"),type:"select",name:"paidcontent",value:se,onChange:function(e){return Me({key:f.Dl,value:e.target.value})}},h.createElement("option",{value:f.xD},q("Any")),h.createElement("option",{value:f.S},q("Free")),h.createElement("option",{value:f.Hn},q("Paid")),"))}")),xe===f.yn&&h.createElement("div",{className:"claim-search__input-container"},h.createElement(T.Wi,{className:P()("claim-search__dropdown",{"claim-search__dropdown--selected":ie}),label:q("Sort By"),type:"select",name:"sort_by",value:ie||f.dY.NEWEST.key,onChange:function(e){return Me({key:f._e,value:e.target.value})}},Object.entries(f.dY).map((function(e){var t=J(e,2),n=(t[0],t[1]);return h.createElement("option",{key:n.key,value:n.key},q(n.str))})))),oe&&h.createElement("div",{className:"claim-search__input-container"},h.createElement("label",null,q("Advanced Filters from URL")),h.createElement(b.default,{button:"alt",className:"claim-search__filter-button",label:q("Clear"),onClick:function(){var e=new URLSearchParams(Y);e.delete("claim_type"),e.delete("channel_ids");var t="?".concat(e.toString());R(t)}}))),h.createElement("div",{className:"claim-search__menus"},F.repost&&h.createElement("div",{className:"claim-search__input-container"},h.createElement(j,{filterCtx:F,contentType:ae})),h.createElement("div",{className:"claim-search__input-container"},!(null!=F&&F.liftUpTagSearch)&&h.createElement(D,{urlParams:te,handleChange:Me}))))),A&&L&&h.createElement("div",{className:"section__actions--no-margin"},A)),_&&E)};var ee={doSetClientSetting:N.gH};const te=(0,a.$j)((function(e){return{loading:(0,r.R2)(e),showNsfw:(0,m.zf)(e),searchInLanguage:(0,m.wr)(e,o.sm),languageSetting:(0,m.VT)(e)}}),ee)(K);var ne=n(88065).h,ae=n(71036).__;function re(e){return re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(e)}function le(e){return function(e){if(Array.isArray(e))return me(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ue(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==re(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==re(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===re(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,i,o=[],c=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=l.call(n)).done)&&(o.push(a.value),o.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw r}}return o}}(e,t)||ue(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){if(e){if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const de=(0,p.EN)((function(e){var t,n,a=e.doClaimSearch,r=e.claimSearchByQuery,l=e.showHeader,i=void 0===l||l,o=e.type,c=e.duration,s=e.claimSearchByQueryLastPageReached,u=e.tags,m=e.notTags,p=e.defaultTags,E=e.loading,N=e.meta,T=e.subSection,I=e.channelIds,j=e.excludedChannelIds,x=e.showNsfw,M=e.hideReposts,L=e.fetchViewCount,P=e.history,B=e.location,F=e.hiddenNsfwMessage,U=e.defaultOrderBy,R=e.sortBy,D=e.orderBy,W=e.headerLabel,H=e.header,Y=e.name,X=e.claimType,G=e.defaultClaimType,$=e.streamType,q=e.defaultStreamType,J=e.contentType,Q=e.freshness,K=e.defaultFreshness,ee=void 0===K?f.RD:K,re=e.renderProperties,ie=e.csOptionsHook,ce=e.includeSupportAction,ue=e.repostedClaimId,me=e.hideAdvancedFilter,de=e.hideMembersOnly,fe=e.infiniteScroll,he=void 0===fe||fe,pe=e.followedTags,ye=e.feeAmount,ge=e.uris,ve=e.prefixUris,_e=e.pins,be=e.tileLayout,Ee=e.hideFilters,Se=void 0!==Ee&&Ee,Oe=e.claimIds,we=e.maxPages,Ce=e.hideRepostsOverride,Ae=e.languageSetting,ke=e.searchLanguages,Ne=e.searchInLanguage,Te=e.ignoreSearchInLanguage,Ie=e.mutedAndBlockedChannelIds,je=e.limitClaimsPerChannel,xe=e.releaseTime,Me=e.scrollAnchor,Le=e.showHiddenByUser,Pe=void 0!==Le&&Le,Be=e.hasSource,Fe=e.hasNoSource,Ue=e.isChannel,Re=void 0!==Ue&&Ue,De=e.showNoSourceClaims,We=e.empty,Ze=e.claimsByUri,He=e.claimsById,Ye=e.hideLayoutButton,Ve=void 0!==Ye&&Ye,Xe=e.loadedCallback,Ge=e.maxClaimRender,$e=e.useSkeletonScreen,ze=void 0===$e||$e,qe=e.excludeUris,Je=void 0===qe?[]:qe,Qe=e.doFetchOdyseeMembershipForChannelIds,Ke=e.doFetchThumbnailClaimsForCollectionIds,et=e.doResolveUris,tt=e.doResolveClaimIds,nt=_e&&(_e.claimIds||_e.urls),at=h.useMemo((function(){if(nt){var e=[];return _e&&_e.claimIds&&_e.claimIds.some((function(t){var n=He[t];if(!n)return e=void 0,!0;var a=n.canonical_url||n.canonical_url;e.push(a)})),e}}),[He,nt,_e]),rt="PUSH"===P.action,lt=B.search,it=h.useRef(),ot=se(h.useState(1),2),ct=ot[0],st=ot[1],ut=se(h.useState(),2),mt=ut[0],dt=ut[1],ft=(0,z.Ui)(),ht=pe&&pe.map((function(e){return e.name}))||[],pt=new URLSearchParams(lt),yt=u&&en(u)||null!==pt.get(f.nO)&&pt.get(f.nO)||p&&en(p),gt=Q||pt.get(f.xv)||ee,vt=R||pt.get(f._e)||f.dY.NEWEST.key,_t=(t=M,null==(n=Ce)?t:n),bt=se(h.useState(),2),Et=bt[0],St=bt[1],Ot=pt.get(f.Px)||null,wt=Ne&&!Te,Ct=(0,g.p0)(Ae,wt,ke,Ot),At=X||G||null,kt=$||q||null,Nt=J||pt.get(f.dS);if(Nt)switch(Nt){case f.qX:At=Nt,kt=void 0;break;case f.Ot:At=Nt;break;case f.j0:At=f.j0,kt=void 0;break;case f.XG:case f.Oh:case f.T7:case f.Do:case f.hm:case f.Mm:kt=Nt;break;case f.cX:At=void 0,kt=void 0;break;default:ne(!1,"Invalid or unhandled CONTENT_KEY:",Nt)}var Tt=V([pt.get(f.Be)||f.th.ALL],"durUser",null),It=se((0,Z.Z)("minDurUserMinutes-".concat(B.pathname),null),1)[0],jt=se((0,Z.Z)("maxDurUserMinutes-".concat(B.pathname),null),1)[0],xt=se((0,Z.Z)("hideAnonymous-".concat(B.pathname),!1),1)[0],Mt=pt.get(f.yG),Lt=Mt?Mt.split(","):I,Pt=j,Bt=pt.get("fee_amount")||ye,Ft=ft?Math.ceil(36):Math.ceil(24),Ut={notTags:m,showNsfw:x,hideMembersOnly:de},Rt=V([D,pt.get(f.Wp),U],"orderUser",f.Vs),Dt=_.A.duration(Nt,Tt,c,It,jt),Wt=oe({page_size:Ft,page:ct,name:Y,claim_type:X||["stream","repost","channel"],no_totals:!0,not_channel_ids:Re?void 0:Ie,not_tags:_.A.not_tags(Ut),order_by:function(e,t){var n;switch(e){case f.Vs:n=f.aj;break;case f.yn:n=f.TT;break;case f.F7:n=f.sG;break;case f.Jy:n=f.IB;break;default:n=f.__}if(e===f.yn&&t===f.dY.OLDEST.key)return n.map((function(e){return"".concat(f.dY.OLDEST.opt).concat(e)}));return n}(Rt,vt),remove_duplicates:!Re||void 0},Dt?{duration:Dt}:{});d.ENABLE_NO_SOURCE_CLAIMS&&Fe?Wt.has_no_source=!0:!Be&&(d.ENABLE_NO_SOURCE_CLAIMS||X&&"stream"!==X)||(Wt.has_source=!0),je&&(Wt.limit_claims_per_channel=je),Bt&&X!==f.j0&&(Wt.fee_amount=Bt),Oe&&(Wt.claim_ids=Oe),Lt&&(Wt.channel_ids=Lt),Pt&&(Wt.not_channel_ids=(Wt.not_channel_ids||[]).concat(Pt)),yt&&yt!==f.FA&&""!==yt&&(yt===f.CW?Wt.any_tags=ht:Array.isArray(yt)?Wt.any_tags=yt:Wt.any_tags=yt.split(",")),ue&&(Wt.reposted_claim_id=ue),xe&&At!==f.j0?Wt.release_time=xe:At!==f.j0&&(Rt===f.Pb&&gt!==f.ek?Wt.release_time=">".concat(Math.floor(S()().subtract(1,gt).startOf("hour").unix())):Rt!==f.yn&&Rt!==f.Vs||(Wt.channel_ids&&Wt.channel_ids.length>20||Wt.any_tags&&Wt.any_tags.length>20?Wt.release_time=">".concat(Math.floor(S()().subtract(3,f.Se).startOf("week").unix())):Wt.channel_ids&&Wt.channel_ids.length>10||Wt.any_tags&&Wt.any_tags.length>10?Wt.release_time=">".concat(Math.floor(S()().subtract(1,f.IA).startOf("week").unix())):Wt.release_time="<".concat(Math.floor(S()().startOf("minute").unix())))),xt&&(Wt.has_channel_signature=!0,Wt.valid_channel_signature=!0),kt&&kt!==f.cX&&X!==f.j0&&(Wt.stream_types="string"==typeof kt?[kt]:kt),At&&At!==f.cX&&(Array.isArray(At)?Wt.claim_type=At:Wt.claim_type=[At]),Ct&&Ct!==f.TZ&&(Wt.any_languages=Ct.split(",")),yt&&yt!==f.FA&&""!==yt&&(yt===f.CW?Wt.any_tags=ht:Array.isArray(yt)?Wt.any_tags=yt:Wt.any_tags=yt.split(",")),_t&&!Wt.reposted_claim_id&&(Array.isArray(Wt.claim_type)?Wt.claim_type.length>1&&(Wt.claim_type=Wt.claim_type.filter((function(e){return"repost"!==e}))):Wt.claim_type=["stream","channel"]),ie&&(Wt=ie(Wt));var Zt=yt&&yt.split(",").some((function(e){return y.Fq.includes(e)})),Ht=(0,v.fE)(Wt),Yt=r[Ht],Vt=s[Ht],Xt=void 0===Yt,Gt=se(h.useState(null),2),$t=Gt[0],zt=Gt[1];(function(e,t){if(!e)return!1;var n=oe({},e);n.page=-1,n.release_time="";var a=oe({},t);return a.page=-1,a.release_time="",JSON.stringify(a)===JSON.stringify(n)})($t,Wt)||(zt(Wt),rt?(Wt.page=1,st(Wt.page)):Yt&&(Wt.page=Math.ceil(Yt.length/Ft),Wt.page!==ct&&st(Wt.page)));var qt=!(nt&&!Lt)&&(!ge&&(void 0===Yt||rt||!E&&!Vt&&Yt&&Yt.length&&Yt.length<Ft*Wt.page&&Yt.length%Ft==0)),Jt=JSON.stringify(Wt),Qt=h.createElement("div",null,h.createElement("p",null,h.createElement(A.Z,{tokens:{again:h.createElement(b.default,{button:"link",label:ae("try again in a few seconds."),onClick:function(){return dt(Date.now())}})}},"Sorry, your request timed out. Modify your options or %again%")),h.createElement("p",null,h.createElement(A.Z,{tokens:{contact_support:h.createElement(b.default,{button:"link",label:ae("contact support"),href:"https://help.odysee.tv/"})}},"If you continue to have issues, please %contact_support%.")));h.useEffect((function(){nt&&(_e.claimIds?tt(_e.claimIds):_e.urls&&et(_e.urls,!0))}),[_e,et,tt,nt]);var Kt=JSON.stringify(Je);function en(e){return e===f.FA||e===f.CW?e:Array.isArray(e)?e.join(","):void 0}function tn(){void 0!==we&&ct===we||!E&&he&&Yt&&!Vt&&st(ct+1)}function nn(e,t,n,a){return!n||!e||n.onlyPinForOrder&&n.onlyPinForOrder!==t?e:a?e.length<a.length?e.concat(a):(a.forEach((function(t){e.includes(t)&&e.splice(e.indexOf(t),1)})),e.splice.apply(e,[2,0].concat(le(a))),e):e}function an(e,t){return e&&t&&t.length?e.filter((function(e){return!t.includes(e)})):e}h.useEffect((function(){var e=JSON.parse(Kt);if(ge){var t=ge&&Array.from(new Set(ge));nn(t,Rt,_e,at);var n=an(t,e);St(n)}else if(Yt)if(Xt&&it.current)St(it.current);else if(nt){var a=an(nn(Array.from(new Set(Yt)),Rt,_e,at),e);St(a),it.current=a}else St(Yt),it.current=Yt;else at&&!Lt&&St(at)}),[Lt,Yt,Kt,nt,Xt,Rt,_e,at,ge]),h.useEffect((function(){I&&Qe(I)}),[I,Qe]),h.useEffect((function(){if(Yt&&X&&X.includes("collection")){var e=Yt.map((function(e){var t;return null===(t=Ze[e])||void 0===t?void 0:t.claim_id}));Ke({collectionIds:e})}}),[Yt,X,Ke]),h.useEffect((function(){if(qt){var e=JSON.parse(Jt),t=oe({},L?{fetch:{viewCount:!0}}:{});a(e,t)}}),[a,qt,Jt,mt,L]);var rn=H||h.createElement(te,{channelIds:I,defaultTags:p,tags:u,freshness:Q,defaultFreshness:ee,claimType:X,streamType:$,defaultStreamType:q,feeAmount:ye,orderBy:D,defaultOrderBy:U,hideAdvancedFilter:me,hasMatureTags:Zt,hiddenNsfwMessage:F,setPage:st,tileLayout:be,hideLayoutButton:Ve,hideFilters:Se,scrollAnchor:Me,contentType:J,meta:N}),ln=E||Lt&&Lt.length>0&&void 0===Yt;return h.createElement(h.Fragment,null,W&&W,be?h.createElement("div",null,!ue&&i&&h.createElement("div",{className:"section__header--actions"},h.createElement("div",{className:"section__actions section__actions-span"},rn,wt&&h.createElement(k.Z,null))),T&&h.createElement("div",null,T),h.createElement(O.Z,{tileLayout:!0,loading:ln,uris:Et,prefixUris:ve,onScrollBottom:tn,page:ct,pageSize:Ft,timedOutMessage:Qt,renderProperties:re,includeSupportAction:ce,showHiddenByUser:Pe,searchOptions:Wt,showNoSourceClaims:De,empty:We,maxClaimRender:Ge,loadedCallback:Xe}),ln&&ze&&h.createElement("div",{className:"claim-grid"},new Array(Ft).fill(1).map((function(e,t){return h.createElement(C.default,{key:t,placeholder:"loading",pulse:!0})})))):h.createElement("div",null,i&&h.createElement("div",{className:"section__header--actions"},h.createElement("div",{className:"section__actions"},rn,wt&&h.createElement(k.Z,null))),T&&h.createElement("div",null,T),h.createElement(O.Z,{type:o,loading:ln,uris:Et,prefixUris:ve,onScrollBottom:tn,page:ct,pageSize:Ft,timedOutMessage:Qt,renderProperties:re,includeSupportAction:ce,showHiddenByUser:Pe,searchOptions:Wt,showNoSourceClaims:Fe||De,empty:We,maxClaimRender:Ge,loadedCallback:Xe}),ln&&ze&&new Array(Ft).fill(1).map((function(e,t){return h.createElement(w.default,{showNoSourceClaims:Fe||De,key:t,placeholder:"loading",type:o})}))))}));var fe={doClaimSearch:l.Fl,doFetchOdyseeMembershipForChannelIds:u.i6,doResolveClaimIds:l.Bf,doResolveUris:l.ZE,doFetchThumbnailClaimsForCollectionIds:i.ci};const he=(0,a.$j)((function(e,t){return{followedTags:(0,c.N1)(e),claimSearchByQuery:(0,r.oU)(e),claimSearchByQueryLastPageReached:(0,r.e$)(e),claimsByUri:(0,r.As)(e),claimsById:(0,r.ZE)(e),loading:void 0!==t.loading?t.loading:(0,r.R2)(e),showNsfw:(0,m.zf)(e),hideMembersOnly:(n=(0,m.wr)(e,o.zD),a=t.hideMembersOnly,null==a?n:a),hideReposts:(0,m.wr)(e,o.p1),languageSetting:(0,m.VT)(e),searchInLanguage:(0,m.wr)(e,o.sm),mutedAndBlockedChannelIds:(0,s.AF)(e)};var n,a}),fe)(de)},73662:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(88441),r=n(44908),l=n(77369),i=n(73249),o=n(7171),c=n(71036).__;const s=function(){return a.createElement(r.default,{className:"icon--langFilter",icon:l.FILTERED_BY_LANG,iconSize:20,description:c("Search results are being filtered by language. Click here to change the setting."),navigate:"/$/".concat(i.SETTINGS,"#").concat(o.s)})}},7171:(e,t,n)=>{n.d(t,{s:()=>a});var a="searchInLanguage"},77595:(e,t,n)=>{n.d(t,{m:()=>l});var a=n(88441),r=n(19092),l=a.createContext({contentTypes:r.wF,liftUpTagSearch:!1})}}]);
//# sourceMappingURL=6510-4cfcbab1325dec2a1579.js.map