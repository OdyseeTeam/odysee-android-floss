"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[7435],{38856:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(3658),a=r(19208),i=r(20983),l=r(71898),o=r(88441),c=r(79593),u=r(96284),s=r(77369),f=r(66598),m=r.n(f),d=r(38755);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,l,o=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O={doSetClientSetting:l.gH};const P=(0,n.$j)((function(e){return{homepageOrder:(0,i.wr)(e,a.fG)}}),O)((function(e){var t=e.homepageData,r=e.homepageOrder,n=e.doSetClientSetting,i=e.authenticated,l=e.activePortal,f=t.portals,p=t.categories,b=v(o.useState(0),2),y=b[0],g=b[1],O=v(o.useState(0),2),P=O[0],S=O[1],E=v(o.useState(0),2),w=E[0],j=E[1],N=v(o.useState(0),2),A=N[0],k=N[1],L=v(o.useState(1),2),R=L[0],T=L[1],C=v(o.useState(!1),2),I=C[0],D=C[1],M=v(o.useState(void 0),2),x=M[0],B=M[1],F=f.mainPortal.portals.length>w,z=v(o.useState(!1),2),G=z[0],V=z[1],W=o.useRef(null),$=y>=1600?1700:y>=1150?1150:y>=900?900:y>=600?600:400;o.useEffect((function(){if(F&&f&&y){var e=setInterval((function(){I||T(R+1<=f.mainPortal.portals.length-(w-1)?R+1:1)}),6e3);return function(){return clearInterval(e)}}}),[F,f,w,A,y,I,R]),o.useEffect((function(){f&&y&&k(-1*P*(R-1))}),[f,R,y]),(0,c.T)((function(){if(W.current){var e=W.current.offsetWidth+12,t=e>954?6:e>870?5:e>470?3:2;6===t&&f.mainPortal.portals.length<9&&(t=f.mainPortal.portals.length),g(e),j(t),S(e/t)}}));var q=Object.freeze({BANNER:{label:"Banner"},FOLLOWING:{label:"Following"},PORTALS:{label:"Portals"},FYP:{label:"Recommended"}});function H(e,t,r){var n=t.active||[],a=t.hidden||[],i=Object.keys(r),l=n.filter((function(e){return i.includes(e)})),o=a.filter((function(e){return i.includes(e)}));return i.forEach((function(e){l.includes(e)||o.includes(e)||(r[e].hideByDefault?o.push(e):"BANNER"===e?l.unshift(e):"PORTALS"===e||l.push(e))})),l=l.filter((function(e){return!o.includes(e)})),"ACTIVE"===e?l:o}return f&&f.mainPortal?o.createElement("div",{id:"portals",className:m()("portals-wrapper",{kill:G}),style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:"+$+":0/quality:95/plain/"+f.mainPortal.background+")"},onMouseEnter:function(){return D(!0)},onMouseLeave:function(){return D(!1)}},o.createElement("h1",null,f.mainPortal.description),o.createElement("div",{className:"portal-rotator",style:{marginLeft:A},ref:W},f.mainPortal.portals.map((function(e,t){return o.createElement("div",{className:m()("portal-wrapper",{disabled:e.name===l}),style:{width:P-12,minWidth:P-12},key:t,onMouseEnter:function(){return B(e.name)},onMouseLeave:function(){return B(void 0)}},o.createElement(d.OL,{"aria-hidden":!0,tabIndex:-1,to:{pathname:"/$/portal/"+e.name,state:e}},o.createElement("div",{className:"portal-thumbnail",style:{background:"rgba("+e.css.rgb+","+(x===e.name?1:.8)+")",border:"2px solid rgba("+e.css.rgb+",1)"}},o.createElement("img",{style:{width:P-12,height:P-12},src:"https://thumbnails.odycdn.com/optimize/s:237:0/quality:95/plain/"+e.image})),o.createElement("div",{className:"portal-title",style:{border:"2px solid rgba("+e.css.rgb+",1)"}},o.createElement("label",null,e.label))))}))),f.mainPortal.portals.length>w&&o.createElement(o.Fragment,null,o.createElement("div",{className:"portal-browse left",onClick:function(){return T(R>1?R-1:f.mainPortal.portals.length-(w-1))}},"‹"),o.createElement("div",{className:"portal-browse right",onClick:function(){return T(R+(w-1)<f.mainPortal.portals.length?R+1:1)}},"›"),o.createElement("div",{className:"portal-active-indicator"},f&&f.mainPortal.portals.map((function(e,t){return t<f.mainPortal.portals.length-(w-1)&&o.createElement("div",{key:t,className:t+1===R?"portal-active-indicator-active":"",onClick:function(){return T(t+1)}})})))),i&&o.createElement("div",{className:"portals-remove",onClick:function(){return function(){var e=r;if(e.active&&e.active.includes("PORTALS"))e.active.splice(e.active.indexOf("PORTALS"),1),e.hidden?e.hidden.push("PORTALS"):e.hidden=["PORTALS"];else if(e.hidden)e.hidden&&!e.hidden.includes("PORTALS")&&e.hidden.push("PORTALS");else{var t=h(h({},q),p);(e={active:[],hidden:[]}).active=H("ACTIVE",r,t),e.hidden=H("HIDDEN",r,t),e.hidden.push("PORTALS")}n(a.fG,e,!0),V(!0)}()}},o.createElement(u.default,{icon:s.REMOVE}))):o.createElement("div",{className:"portals-wrapper"},o.createElement("div",{className:"portal-wrapper"},o.createElement("div",{className:"portal-thumbnail"})))}))}}]);
//# sourceMappingURL=portals-fd90a78c1fb3d5342c12.js.map