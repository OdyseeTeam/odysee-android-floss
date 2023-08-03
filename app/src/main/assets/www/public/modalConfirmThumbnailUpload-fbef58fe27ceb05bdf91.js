"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[5443],{71099:(r,e,n)=>{n.r(e),n.d(e,{default:()=>F});var a=n(3658),i=n(15927),t=n(18264),l=n(88441),o=n(1017),u=n(16395),A=n(22057),c=n(1892),d=n.n(c),m=n(95760),s=n.n(m),p=n(38311),b=n.n(p),h=n(58192),v=n.n(h),f=n(38060),g=n.n(f),C=n(54865),w=n.n(C),_=n(79576),y={};y.styleTagTransform=w(),y.setAttributes=v(),y.insert=b().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=g();d()(_.Z,y);_.Z&&_.Z.locals&&_.Z.locals;var E=n(71036).__;function k(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var a,i,t,l,o=[],u=!0,A=!1;try{if(t=(n=n.call(r)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=t.call(n)).done)&&(o.push(a.value),o.length!==e);u=!0);}catch(r){A=!0,i=r}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(A)throw i}}return o}}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return x(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=r[n];return a}const B=function(r){var e=r.file,n=r.cb,a=r.closeModal,i=r.upload,t=r.updatePublishForm,c=e&&(e.path||e.name),d=k(l.useState(""),2),m=d[0],s=d[1];return l.useEffect((function(){var r=URL.createObjectURL(e);return s(r),function(){r&&URL.revokeObjectURL(r)}}),[e]),l.createElement(o.u_,{isOpen:!0,title:E("Upload thumbnail"),contentLabel:E("Confirm Thumbnail Upload"),type:"confirm",confirmButtonLabel:E("Upload"),onConfirmed:function(){e&&(i(e,n),t({thumbnailPath:e.path}),a())},onAborted:a},l.createElement("label",null,E("Are you sure you want to upload this thumbnail to %domain%",{domain:u.DOMAIN}),"?"),l.createElement("div",{className:"upload-thumbnail-preview"},l.createElement("img",{className:"upload-thumbnail-preview__image",src:m||A,alt:E("Thumbnail Preview"),onError:function(){return s("")}}),l.createElement("div",{className:"upload-thumbnail-preview__filename"},c)))};const F=(0,a.$j)(null,(function(r){return{closeModal:function(){return r((0,i.gG)())},upload:function(e,n){return r((0,t.qF)("",e,null,null,e.path,n))},updatePublishForm:function(e){return r((0,t.JC)(e))}}}))(B)},79576:(r,e,n)=>{n.d(e,{Z:()=>o});var a=n(26612),i=n.n(a),t=n(40805),l=n.n(t)()(i());l.push([r.id,".upload-thumbnail-preview{display:flex}[dir] .upload-thumbnail-preview{border:1px solid var(--color-border);border-radius:var(--border-radius);margin:var(--spacing-s) 0;padding:var(--spacing-s)}@media(max-width:900px){.upload-thumbnail-preview{flex-direction:column}}.upload-thumbnail-preview__image{height:calc(var(--thumbnail-preview-height));min-height:calc(var(--thumbnail-preview-height));min-width:calc(var(--thumbnail-preview-width));object-fit:contain;width:calc(var(--thumbnail-preview-width))}[dir] .upload-thumbnail-preview__image{background-color:var(--color-thumbnail-background);border:1px solid var(--color-border);border-radius:var(--border-radius)}.upload-thumbnail-preview__filename{color:var(--color-text-subtitle);font-size:var(--font-small)}[dir] .upload-thumbnail-preview__filename{margin-top:var(--spacing-s)}[dir=ltr] .upload-thumbnail-preview__filename{margin-left:var(--spacing-s)}[dir=rtl] .upload-thumbnail-preview__filename{margin-right:var(--spacing-s)}@media(max-width:900px){[dir=ltr] .upload-thumbnail-preview__filename{margin-left:0}[dir=rtl] .upload-thumbnail-preview__filename{margin-right:0}}","",{version:3,sources:["webpack://./../ui/modal/modalConfirmThumbnailUpload/style.scss"],names:[],mappings:"AAEA,0BAKE,YAAA,CALF,gCAEE,oCAAA,CADA,kCAAA,CAEA,yBAAA,CACA,wBACA,CAEA,wBAPF,0BAQI,qBAAA,CAAA,CAIJ,iCAIE,4CAAA,CAFA,gDAAA,CADA,8CAAA,CAOA,kBAAA,CALA,0CAKA,CARF,uCAKE,kDAAA,CAEA,oCAAA,CADA,kCAEA,CAGF,oCAIE,gCAAA,CADA,2BACA,CAJF,0CACE,2BAGA,CAJF,8CAEE,4BAEA,CAJF,8CAEE,6BAEA,CAEA,wBANF,8CAOI,aAAA,CAPJ,8CAOI,cAAA,CAAA",sourcesContent:["@import '~ui/scss/init/breakpoints';\n\n.upload-thumbnail-preview {\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  margin: var(--spacing-s) 0;\n  padding: var(--spacing-s);\n  display: flex;\n\n  @media (max-width: $breakpoint-small) {\n    flex-direction: column;\n  }\n}\n\n.upload-thumbnail-preview__image {\n  min-width: calc(var(--thumbnail-preview-width));\n  min-height: calc(var(--thumbnail-preview-height));\n  width: calc(var(--thumbnail-preview-width));\n  height: calc(var(--thumbnail-preview-height));\n  background-color: var(--color-thumbnail-background);\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  object-fit: contain;\n}\n\n.upload-thumbnail-preview__filename {\n  margin-top: var(--spacing-s);\n  margin-left: var(--spacing-s);\n  font-size: var(--font-small);\n  color: var(--color-text-subtitle);\n\n  @media (max-width: $breakpoint-small) {\n    margin-left: 0;\n  }\n}\n"],sourceRoot:""}]);const o=l},22057:(r,e,n)=>{r.exports=n.p+"img/thumbnail-broken.png"}}]);
//# sourceMappingURL=modalConfirmThumbnailUpload-fbef58fe27ceb05bdf91.js.map