"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[6656],{94406:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(88441),o=n(45650),i=n(44908),l=n(94720),a=n(71036).__;function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}(this,n)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(y,e);var t,n,u,m=p(y);function y(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),b(s(e=m.call(this)),"fileInput",void 0),b(s(e),"handleFileInputSelection",(function(){var t=e.fileInput.current.files;if(t){var n=t[0];e.props.onFileChosen&&e.props.onFileChosen(n),e.fileInput.current.value=null}})),b(s(e),"handleDirectoryInputSelection",(function(){o.xv.dialog.showOpenDialog({properties:["openDirectory"]}).then((function(t){var n=t&&t.filePaths[0];n&&e.props.onFileChosen({path:n})}))})),b(s(e),"fileInputButton",(function(){e.fileInput.current.click()})),b(s(e),"input",void 0),e.fileInput=r.createRef(),e.handleFileInputSelection=e.handleFileInputSelection.bind(s(e)),e.handleDirectoryInputSelection=e.handleDirectoryInputSelection.bind(s(e)),e.fileInputButton=e.fileInputButton.bind(s(e)),e}return t=y,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.type,o=t.currentPath,u=t.label,c=t.placeholder,f=t.accept,p=t.error,s=t.disabled,m=t.autoFocus,b=void 0!==m&&m,y=o||c;return r.createElement(r.Fragment,null,r.createElement(l.Wi,{label:u,webkitdirectory:"true",className:"form-field--copyable",error:p,disabled:s,type:"text",readOnly:"readonly",value:y||a("Choose a file"),inputButton:r.createElement(i.default,{autoFocus:b,button:"primary",disabled:s,onClick:"openDirectory"===n?this.handleDirectoryInputSelection:this.fileInputButton,label:a("Browse")})}),r.createElement("input",{type:"file",style:{display:"none"},accept:f,ref:this.fileInput,onChange:function(){return"openDirectory"===n?function(){}:e.handleFileInputSelection()},webkitdirectory:"openDirectory"===n?"True":null}))}}])&&c(t.prototype,n),u&&c(t,u),Object.defineProperty(t,"prototype",{writable:!1}),y}(r.PureComponent);b(d,"defaultProps",{autoFocus:!1,type:"file"});const h=d},30054:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(3658),o=n(54086),i=n(86883),l=n(18264),a=n(15927),u=n(17526),c=n(45684),f=n(14050),p=n(16395),s=n(88441),m=n(94720),b=n(94406),y=n(44908);const d=n.p+"img/thumbnail-missing.png";var h=n(22057),v=n(71036).__;const g=function(e){var t=e.filePath,n=e.fileInfos,r=e.myClaimForUri,o=e.formDisabled,i=e.uploadThumbnailStatus,l=e.openModal,a=e.updatePublishForm,g=e.thumbnailParam,E=e.thumbnailParamStatus,_=e.updateThumbnailParams,w=e.thumbnailPath,O=e.resetThumbnailStatus,P=e.optional,S=!_,j=S?e.thumbnail:g,I=S?e.thumbnailError:e.thumbnailParamError,k=".png, .jpg, .jpeg, .gif";window.cordova&&(k="image/*");var C,F=i===c.VX,T=i===c.ly&&j,D=j!==d&&j!==h,N=r?"".concat(r.txid,":").concat(r.nout):void 0,B=N?n[N]:void 0,R=B?B.download_path:void 0,x=t||R,U=!1;"string"==typeof x?U="video"===f.Z.getMediaType(null,x):x&&x.type&&(U="video"===x.type.split("/")[0]),s.useEffect((function(){_&&i!==E&&_({thumbnail_status:i})}),[i,E,_]),C=j?I?F&&h||i!==c.ly&&d:j:d;var M=s.createElement("div",{className:"column__item thumbnail-picker__preview",style:{backgroundImage:"url(".concat(String(C),")")}},T&&!1!==I&&v("This will be visible in a few minutes after you submit this form."),s.createElement("img",{style:{display:"none"},src:j,alt:v("Thumbnail Preview"),onError:function(){return S?a({thumbnailError:!0}):_({thumbnail_error:Boolean(j)})},onLoad:function(){return S?a({thumbnailError:!D||!!j&&j.startsWith("data:image")}):_({thumbnail_error:!D})}}));return s.createElement(s.Fragment,null,P&&s.createElement("h2",{className:"card__title"},v("Thumbnail (Optional)")),i!==c.Bj&&s.createElement("div",{className:"column card--thumbnail"},M,S&&T?s.createElement("div",{className:"column__item"},s.createElement("p",null,v("Upload complete.")),s.createElement("div",{className:"section__actions"},s.createElement(y.default,{button:"link",label:v("New thumbnail"),onClick:O}))):s.createElement("div",{className:"column__item"},F?s.createElement(s.Fragment,null,s.createElement(m.Wi,{type:"text",name:"content_thumbnail",placeholder:"https://images.fbi.gov/alien",value:j,disabled:o,onChange:function(e){var t=e.target.value.replace(" ","");_?_({thumbnail_url:t}):a({thumbnail:t,thumbnailError:t.startsWith("data:image")})}}),!T&&s.createElement("p",{className:"help"},v("Enter a URL for your thumbnail."))):s.createElement(s.Fragment,null,s.createElement(b.Z,{currentPath:w,placeholder:v("Choose an enticing thumbnail"),accept:k,onFileChosen:function(e){return l(u.YF,{file:e,cb:function(e){return!S&&_({thumbnail_url:e})}})}}),!T&&s.createElement("p",{className:"help"},v("Upload your thumbnail to %domain%. Recommended ratio is 16:9, %max_size%MB max.",{domain:p.DOMAIN,max_size:p.THUMBNAIL_CDN_SIZE_LIMIT_BYTES/1048576}))),s.createElement("div",{className:"card__actions"},s.createElement(y.default,{button:"link",label:v(F?"Use thumbnail upload tool":"Enter a thumbnail URL"),onClick:function(){return a({uploadThumbnailStatus:F?c.Rc:c.VX})}}),i===c.Rc&&U&&s.createElement(y.default,{button:"link",label:v("Take a snapshot from your video"),onClick:function(){return l(u.A3,{filePath:x})}})))),i===c.Bj&&s.createElement("div",{className:"column card--thumbnail"},s.createElement("p",null,v("Uploading thumbnail"),"...")))};function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===E(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const P=(0,r.$j)((function(e){return w(w({},(0,o.iM)(e)),{},{fileInfos:(0,i.X9)(e),myClaimForUri:(0,o.V)(e)})}),(function(e){return{updatePublishForm:function(t){return e((0,l.JC)(t))},resetThumbnailStatus:function(){return e((0,l.XV)())},openModal:function(t,n){return e((0,a.DG)(t,n))}}}))(g)},22057:(e,t,n)=>{e.exports=n.p+"img/thumbnail-broken.png"}}]);
//# sourceMappingURL=selectThumbnail-520a3d207bf9f3556a29.js.map