"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[5550],{82636:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(3658),a=n(7920),l=n(88441),i=n(68470);const c=function(e){var t=e.claim;return t?l.createElement(i.Z,{amount:Number(t.repost_bid_amount||t.meta.effective_amount||t.amount)}):null};const o=(0,r.$j)((function(e,t){return{claim:(0,a.B0)(e,t.uri,!0)}}))(c)},14507:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(3658),a=n(18264),l=n(52705),i=n(15927),c=n(7920),o=n(18209),u=n(77369),s=n(73249),m=n(17526),f=n(88441),d=n(53389),p=n(64177),h=n(44908),b=n(82636),v=n(24396),g=n(32158),E=n(74971),y=n(16395),_=n(71036).__;const N=(0,r.$j)((function(e,t){var n=(0,o.jr)(t.query)(e);return{winningUri:n,winningClaim:n?(0,c.pB)(n)(e):void 0,isResolvingWinningUri:!!t.query&&(0,o.Lp)(e,t.query),pendingIds:(0,c.DX)(e)}}),(function(e){return{beginPublish:function(t,n,r){return e((0,a.T2)(t,n,r))},doResolveUris:function(t){return e((0,l.ZE)(t))},doOpenModal:function(t,n){return e((0,i.DG)(t,n))}}}))((function(e){var t,n,r,a=e.doResolveUris,l=e.doOpenModal,i=e.query,c=void 0===i?"":i,o=e.winningUri,N=e.winningClaim,k=e.hideLink,w=void 0!==k&&k,C=e.setChannelActive,A=e.beginPublish,O=e.isResolvingWinningUri,R=e.isSearching,Z="lbry://".concat(c);try{var P=(0,d.parseURI)(Z),I=P.isChannel,S=P.streamName,M=P.channelName;I?t=M:(n="lbry://@".concat(c),t=S)}catch(e){}if(o)try{var U=(0,d.parseURI)(o).isChannel;r=U}catch(e){}return f.useEffect((function(){C&&r&&C(!0)}),[C,r]),f.useEffect((function(){var e=[];Z&&e.push(Z),n&&e.push(n),e.length>0&&a(e)}),[a,Z,n]),f.createElement("div",{className:"search__header"},o&&f.createElement("div",{className:"claim-preview__actions--header"},f.createElement("a",{className:"media__uri",target:"_blank",rel:"noreferrer",href:"https://help.odysee.tv/category-blockchain/category-staking/increase/",title:_("Learn more about Credits on %DOMAIN%",{DOMAIN:y.DOMAIN})},f.createElement(E.Z,{prefix:_("Most supported")}))),o&&N&&f.createElement("div",{className:"card"},f.createElement(p.default,{hideRepostLabel:!0,showNullPlaceholder:!0,uri:o,properties:function(e){return f.createElement("span",{className:"claim-preview__custom-properties"},f.createElement(v.Z,{short:!0,uri:o}),f.createElement(b.Z,{uri:o}))}})),!o&&(R||O)&&f.createElement("div",{className:"card"},f.createElement(p.default,{placeholder:"loading"})),!o&&!R&&!O&&Z&&f.createElement("div",{className:"card card--section help--inline"},f.createElement(g.Z,{tokens:{repost:f.createElement(h.default,{button:"link",onClick:function(){return l(m.QA,{})},label:_("Repost")}),publish:f.createElement("span",null,f.createElement(h.default,{button:"link",onClick:function(){return A("file",t)},label:_("publish")}))}},"You have found the edge of the internet. %repost% or %publish% your stuff here to claim this spot.")),!w&&o&&f.createElement("div",{className:"section__actions--between section__actions--no-margin"},f.createElement("span",null),f.createElement(h.default,{button:"link",className:"search__top-link",label:f.createElement(g.Z,{tokens:{name:f.createElement("strong",null,c)}},"View competing uploads for %name%"),navigate:"/$/".concat(s.TOP,"?name=").concat(c),iconRight:u.ARROW_RIGHT})))}))},3150:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(3658),a=n(88441),l=n(66598),i=n.n(l),c=n(9319),o=n(76510),u=n(82636),s=n(14507),m=n(19092),f=n(44908),d=n(17526),p=n(16395),h=n(71036).__;function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,i,c=[],o=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{if(!o&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const g=function(e){var t=e.name,n=e.beginPublish,r=e.doOpenModal,l=b(a.useState(!1),2),v=l[0],g=l[1],E=t&&"@"===t[0]?t.slice(1):t;return t?a.createElement(c.Z,{className:"topPage-wrapper"},a.createElement(s.Z,{query:t,hideLink:!0,setChannelActive:g}),a.createElement(o.Z,{name:v?"@".concat(E):E,defaultFreshness:m.ek,defaultOrderBy:m.Pb,streamType:p.SIMPLE_SITE?m.cX:void 0,meta:a.createElement("div",{className:"search__top-links"},a.createElement(f.default,{button:"secondary",onClick:function(){return r(d.QA,{})},label:h("Repost Here")}),a.createElement(f.default,{button:"secondary",onClick:function(){return n("file",E)},label:h("Publish Here")})),includeSupportAction:!0,renderProperties:function(e){return a.createElement("span",{className:"claim-preview__custom-properties"},e.meta.is_controlling&&a.createElement("span",{className:"help--inline"},h("Currently winning")),a.createElement(u.Z,{uri:e.repost_url||e.canonical_url}))},header:a.createElement("div",{className:"claim-search__menu-group"},a.createElement(f.default,{label:E,button:"alt",onClick:function(){return g(!1)},className:i()("button-toggle",{"button-toggle--active":!v})}),a.createElement(f.default,{label:"@".concat(E),button:"alt",onClick:function(){return g(!0)},className:i()("button-toggle",{"button-toggle--active":v})}))})):a.createElement(c.Z,{className:"topPage-wrapper"},a.createElement("div",{className:"empty empty--centered"},h("No results")))};var E=n(18264),y=n(15927);const _=(0,r.$j)((function(e,t){var n=t.location.search;return{name:new URLSearchParams(n).get("name")}}),(function(e){return{beginPublish:function(t,n,r){return e((0,E.T2)(t,n,r))},doOpenModal:function(t,n){return e((0,y.DG)(t,n))}}}))(g)}}]);
//# sourceMappingURL=top-d93154db85ad568037b2.js.map