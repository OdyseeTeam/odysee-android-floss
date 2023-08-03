"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[9434],{56529:(e,t,n)=>{n.d(t,{Z:()=>$});var r=n(3658),i=n(54086),a=n(18264),l=n(88441),o=n(66598),c=n.n(o),u=n(94720),s=n(44908),m=n(53116),d=n(20216),f=n(71036).__;function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,a=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===b(a)?a:String(a)),r)}var i,a}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(this,n)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}const E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,i=v(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),y(e=i.call(this)).handleLicenseOnChange=e.handleLicenseOnChange.bind(y(e)),e}return t=a,(n=[{key:"handleLicenseOnChange",value:function(e){var t=this.props.handleLicenseChange,n=e.target,r=n.options[n.selectedIndex];t(r.value,r.getAttribute("data-url"))}},{key:"render",value:function(){var e=this.props,t=e.licenseType,n=e.otherLicenseDescription,r=e.licenseUrl,i=e.handleLicenseDescriptionChange,a=e.handleLicenseUrlChange;return l.createElement(l.Fragment,null,l.createElement(u.Wi,{name:"license",label:f("License (Optional)"),type:"select",value:t,onChange:this.handleLicenseOnChange},l.createElement("option",{value:d.Hn},f("None")),l.createElement("option",{value:d.Yi},f("Public Domain")),d.JK.map((function(e){var t=e.value,n=e.url;return l.createElement("option",{key:t,value:t,"data-url":n},t)})),l.createElement("option",{value:d.si},f("Copyrighted...")),l.createElement("option",{value:d.wG},f("Other...")),l.createElement("option",{disabled:!0},f("Legacy Licences")),d.KT.map((function(e){var t=e.value,n=e.url;return l.createElement("option",{key:t,value:t,"data-url":n},t)}))),t===d.si&&l.createElement(u.Wi,{label:f("Copyright notice"),type:"text",name:"copyright-notice",value:n,onChange:i}),t===d.wG&&l.createElement("fieldset",null,l.createElement("div",{className:"form-field__help"},f("Provide a description and link to your license")),l.createElement("fieldset-group",null,l.createElement(u.Wi,{label:f("License description"),placeholder:f("The 'cool' license - TM"),type:"text",name:"other-license-description",value:n,onChange:i}),l.createElement(u.Wi,{label:f("License URL"),placeholder:f("mywebsite.com/license"),type:"text",name:"other-license-url",value:r,onChange:a}))))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(l.PureComponent);var w=n(51635),_=n(9203),C=n(77093),S=n(35101),T=n(33878),O=n(71182),R=n(74971),k=n(6764),A=n(71036).__;function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,l,o=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const P=function(e){var t=e.name,n=e.myClaimForUri,r=e.bid,i=e.isResolvingUri,a=e.amountNeededForTakeover,o=e.updatePublishForm,c=e.balance,s=j((0,l.useState)(void 0),2),m=s[0],d=s[1],f=n&&Number(n.amount);return(0,l.useEffect)((function(){var e,t=f?f+c:c;0===r?e=A("Deposit cannot be 0"):r<T.wf?e=A("Your deposit must be higher"):t<r?e=A("Deposit cannot be higher than your available balance: %balance%",{balance:t}):t-r<T.qk&&(e=A("Please decrease your deposit to account for transaction fees")),d(e),o({bidError:e})}),[r,f,c,o]),l.createElement(w.Z,{className:t?"":"disabled",actions:l.createElement(u.Wi,{type:"number",name:"content_bid",min:"0",step:"any",placeholder:"0.123",className:"form-field--price-amount",label:l.createElement(R.Z,{disabled:!t,postfix:A("Deposit"),size:12}),value:r,error:m,onChange:function(e){return o({bid:parseFloat(e.target.value)})},onWheel:function(e){return e.stopPropagation()},helper:l.createElement(l.Fragment,null,l.createElement(O.Z,{uri:"lbry://"+t,amountNeededForTakeover:a,isResolvingUri:i}),l.createElement(k.Z,{inline:!0}))})})};const I=(0,r.$j)((function(e){return{name:(0,i.of)(e,"name"),bid:(0,i.of)(e,"bid"),isResolvingUri:(0,i._p)(e),balance:(0,S.QM)(e),myClaimForUri:(0,i.V)(e),amountNeededForTakeover:(0,i.K_)(e)}}),(function(e){return{updatePublishForm:function(t){return e((0,a.JC)(t))}}}))(P);var x=n(71036).__;function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,l,o=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const L=function(e){var t=e.language,n=e.name,r=e.licenseType,i=e.otherLicenseDescription,a=e.licenseUrl,o=e.updatePublishForm,d=e.showSchedulingOptions,f=e.disabled,b=e.visibility,p=U((0,l.useState)(f),2),h=p[0],v=p[1],y=!d&&("public"===b||"unlisted"===b);return l.createElement(l.Fragment,null,l.createElement(w.Z,{background:!0,className:"card--enable-overflow",title:x("Additional Options"),body:l.createElement(l.Fragment,null,!h&&!f&&l.createElement("div",{className:"settings-row"},l.createElement("div",{className:c()({"card--disabled":!n})},l.createElement("div",{className:"section"},y&&l.createElement(m.Z,null),l.createElement(u.Wi,{className:!y&&"publish-row--no-margin-select",label:x("Language"),type:"select",name:"content_language",value:t,onChange:function(e){return o({languages:[e.target.value]})}},(0,C.m6)(_.Z).map((function(e){var t=U(e,2),n=t[0],r=t[1];return l.createElement("option",{key:n,value:n},r)}))),l.createElement(E,{licenseType:r,otherLicenseDescription:i,licenseUrl:a,handleLicenseChange:function(e,t){return o({licenseType:e,licenseUrl:t})},handleLicenseDescriptionChange:function(e){return o({otherLicenseDescription:e.target.value})},handleLicenseUrlChange:function(e){return o({licenseUrl:e.target.value})}}))),l.createElement(I,null)),l.createElement("div",{className:"publish-row publish-row--more"},l.createElement(s.default,{label:x(h?"Show":"Hide"),button:"link",onClick:function(){v(!h)}})))}))};var Z=n(9767);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===M(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const $=(0,r.$j)((function(e){return B(B({},(0,i.iM)(e)),{},{user:(0,Z.dy)(e)})}),(function(e){return{updatePublishForm:function(t){return e((0,a.JC)(t))}}}))(L)},71182:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(71036).__;const i=function(e){var t=e.uri,n=e.isResolvingUri,i=e.amountNeededForTakeover;return t?n?r("Checking the winning claim amount..."):0===i?r("You currently have the highest bid for this name."):i?r("If you bid more than %amount% LBRY Credits, when someone navigates to %uri%, it will load your published content. However, you can get a longer version of this URL for any bid.",{amount:i,uri:t}):r("Any amount will give you the highest bid, but larger amounts help your content be trusted and discovered."):r("These LBRY Credits remain yours and the deposit can be undone at any time.")}},49901:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(3658),i=n(54086),a=n(88441),l=n(45684),o=n(53389),c=n(33878),u=n(26862),s=n(71036).__;var m={NO_TIERS_SELECTED:"You selected to restrict this content but didn't choose any memberships, please choose a membership tier to restrict, or uncheck the restriction box"};const d=function(e){var t=e.name,n=e.title,r=e.bid,i=e.bidError,d=e.editingURI,f=e.filePath,b=e.isStillEditing,p=e.uploadThumbnailStatus,h=e.thumbnail,v=e.thumbnailError,y=e.releaseTimeError,g=e.memberRestrictionStatus,E=e.waitForFile,w=e.fileBitrate,_=p===l.Bj,C=p===l.ly&&h,S=g.isApplicable&&!g.isSelectionValid;return a.createElement("div",{className:"error__text"},E&&a.createElement("div",null,s("Choose a replay file, or select None")),S&&a.createElement("div",null,s(m.NO_TIERS_SELECTED)),w>u.mE.MAX&&a.createElement("div",null,s("Bitrate is over the max, please transcode or choose another file.")),!n&&a.createElement("div",null,s("A title is required")),!t&&a.createElement("div",null,s("A URL is required")),t&&!(0,o.isNameValid)(t)&&c.ex,!r&&a.createElement("div",null,s("A deposit amount is required")),i&&a.createElement("div",null,s("Please check your deposit amount.")),_&&a.createElement("div",null,s("Please wait for thumbnail to finish uploading")),_||h?v&&!C&&a.createElement("div",null,s("Thumbnail is invalid.")):a.createElement("div",null,s("A thumbnail is required. Please upload or provide an image URL above.")),d&&!b&&!f&&a.createElement("div",null,s("Please reselect a file after changing the URL")),y&&a.createElement("div",null,s(y)))};const f=(0,r.$j)((function(e){return{bid:(0,i.of)(e,"bid"),name:(0,i.of)(e,"name"),title:(0,i.of)(e,"title"),bidError:(0,i.of)(e,"bidError"),fileBitrate:(0,i.of)(e,"fileBitrate"),editingURI:(0,i.of)(e,"editingURI"),uploadThumbnailStatus:(0,i.of)(e,"uploadThumbnailStatus"),thumbnail:(0,i.of)(e,"thumbnail"),thumbnailError:(0,i.of)(e,"thumbnailError"),releaseTimeError:(0,i.of)(e,"releaseTimeError"),memberRestrictionStatus:(0,i.Bf)(e),isStillEditing:(0,i.q0)(e)}}))(d)},46780:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(3658),i=n(18264),a=n(54086),l=n(88374),o=n(16395),c=n(33878),u=n(88441),s=n(53389),m=n(94720),d=n(44908),f=n(32158),b=n(71036).__;const p=function(e){var t,n=e.uri,r=e.myClaimForUri,i=e.myClaimForUriCaseInsensitive,a=e.currentUploads,l=e.onEditMyClaim,o=e.isStillEditing,c=u.useMemo((function(){return Object.values(a).map((function(e){return e.params?e.params.name:""}))}),[a]);if(o)t=b("You are currently editing this claim.");else if(function(e,t){var n="lbry://",r=e&&e.startsWith(n)?e.substring(n.length):e;return t.includes(r)}(n,c))t=u.createElement("div",{className:"error__text"},u.createElement(f.Z,{tokens:{existing_uri:u.createElement("u",null,u.createElement("em",null,n))}},"You already have a pending upload at %existing_uri%."));else if(n&&r){var m=(0,s.buildURI)({streamName:r.name,streamClaimId:r.claim_id});t=u.createElement(u.Fragment,null,u.createElement("div",{className:"error__text"},u.createElement(f.Z,{tokens:{existing_uri:u.createElement("u",null,u.createElement("em",null,n))}},"You already have a claim at %existing_uri%. Publishing will update (overwrite) your existing claim.")),u.createElement(d.default,{button:"link",label:b("Edit existing claim instead"),onClick:function(){return l(r,m)}}))}else n&&i&&(t=u.createElement("div",{className:"error__text"},b("You already have a claim with this name.")));return u.createElement(u.Fragment,null,t&&t)};var h=n(95810),v=n(23021),y=n(71036).__;function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,l,o=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const w=function(e){var t=e.name,n=e.uri,r=e.isStillEditing,i=e.myClaimForUri,a=e.myClaimForUriCaseInsensitive,l=e.prepareEdit,d=e.updatePublishForm,f=e.activeChannelClaim,b=e.incognito,E=e.currentUploads,w=g((0,u.useState)(t),2),_=w[0],C=w[1],S=(0,v.Z)(_,750),T=g((0,u.useState)(void 0),2),O=T[0],R=T[1],k=g(u.useState(!1),2),A=k[0],j=k[1],N=f&&f.name,P=(0,h.dD)()?"":"".concat(o.DOMAIN,"/");return N&&!b&&(P+="".concat(N,"/")),(0,u.useEffect)((function(){t!==_&&C(t)}),[t]),(0,u.useEffect)((function(){d({name:S||""})}),[S,d]),(0,u.useEffect)((function(){var e;(A||_)&&(_?(0,s.isNameValid)(_)||(e=c.ex):e=y("A name is required"),R(e))}),[_,A]),u.createElement(u.Fragment,null,u.createElement("fieldset-group",{class:"fieldset-group--smushed fieldset-group--disabled-prefix"},u.createElement("fieldset-section",null,u.createElement("label",null,y("URL")),u.createElement("div",{className:"form-field__prefix"},P)),u.createElement(m.Wi,{type:"text",name:"content_name",value:_,error:O,disabled:r,onChange:function(e){C(e.target.value)},onBlur:function(){return j(!0)},autoComplete:"off"})),u.createElement("div",{className:"form-field__help"},u.createElement(p,{uri:n,isStillEditing:r,myClaimForUri:i,myClaimForUriCaseInsensitive:a,currentUploads:E,onEditMyClaim:function(){i&&l(i,n)}})))};const _=(0,r.$j)((function(e){return{name:(0,a.of)(e,"name"),uri:(0,a.of)(e,"uri"),isStillEditing:(0,a.q0)(e),myClaimForUri:(0,a.V)(e),myClaimForUriCaseInsensitive:(0,a.V)(e,!1),currentUploads:(0,a.J9)(e),activeChannelClaim:(0,l.YG)(e),incognito:(0,l.IO)(e),amountNeededForTakeover:(0,a.K_)(e)}}),(function(e){return{updatePublishForm:function(t){return e((0,i.JC)(t))},prepareEdit:function(t,n){return e((0,i.mQ)(t,n))}}}))(w)},53116:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(3658),i=n(88441),a=n(66598),l=n.n(a),o=n(44908),c=n(87422),u=n(71036).__;function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,l,o=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e){return Number(Math.round(e.getTime()/1e3))}var f="now",b="default",p="reset-to-original";const h=function(e){var t,n,r=e.minDate,a=e.claimToEdit,m=e.releaseTime,h=e.releaseTimeDisabled,v=e.releaseTimeError,y=e.clock24h,g=e.appLanguage,E=e.updatePublishForm,w=void 0!==m,_=Boolean(a),C=s(i.useState(0),2),S=C[0],T=C[1];_&&(t=new Date(1e3*((null==a||null===(n=a.value)||void 0===n?void 0:n.release_time)||(null==a?void 0:a.timestamp)||0)).toLocaleString(g||"en"));var O;function R(e){switch(e){case f:var t=new Date;r&&t<r&&(t=new Date(r.getTime())),E({releaseTime:d(t)});break;case b:case p:E({releaseTime:void 0});break;default:console.assert(!1,"unhandled case"),E({releaseTime:void 0})}}return i.createElement("div",{className:l()("form-field-date-picker",{"form-field-date-picker--disabled":h})},i.createElement("label",null,u("Release date")),i.createElement("div",{className:"form-field-date-picker__controls"},i.createElement(c.Z,{key:S,locale:g,className:"date-picker-input",calendarClassName:"form-field-calendar",onBlur:function(e){if("minute"===e.target.name||"day"===e.target.name){var t,n=null==e||null===(t=e.target)||void 0===t?void 0:t.validity;(n.rangeOverflow||n.rangeUnderflow||v===e.target.name)&&T(Date.now())}},onChange:function(e){e instanceof Date&&E({releaseTime:d(e)})},value:m?(O=m,new Date(1e3*O)):void 0,format:y?"y-MM-dd HH:mm":"y-MM-dd h:mm a",disableClock:!0,clearIcon:null,minDate:r}),i.createElement(o.default,{button:"link",label:u("Now"),"aria-label":u("Set to current date and time"),onClick:function(){return R(f)}}),w&&i.createElement(o.default,{button:"link",label:u(_?"Reset":"Default"),"aria-label":u(_?"Reset to original (previous) publish date":"Remove custom release date"),onClick:function(){return R(b)}}),v&&i.createElement("span",{className:"form-field-date-picker__error"},v)),t&&i.createElement("div",{className:"form-field-date-picker__past-value"},u("Previous:  %date%",{date:t})))};var v=n(19208),y=n(54086),g=n(18264),E=n(20983),w={updatePublishForm:g.JC};const _=(0,r.$j)((function(e){return{claimToEdit:(0,y.V)(e),releaseTime:(0,y.of)(e,"releaseTime"),releaseTimeDisabled:(0,y.of)(e,"releaseTimeDisabled"),releaseTimeError:(0,y.of)(e,"releaseTimeError"),clock24h:(0,E.wr)(e,v.aZ),appLanguage:(0,E.VT)(e)}}),w)(h)},62602:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(3658),i=n(18264),a=n(88374),l=n(81352),o=n(54086),c=n(52338),u=n(88441),s=n(1892),m=n.n(s),d=n(95760),f=n.n(d),b=n(38311),p=n.n(b),h=n(58192),v=n.n(h),y=n(38060),g=n.n(y),E=n(54865),w=n.n(E),_=n(92499),C={};C.styleTagTransform=w(),C.setAttributes=v(),C.insert=p().bind(null,"head"),C.domAPI=f(),C.insertStyleElement=g();m()(_.Z,C);_.Z&&_.Z.locals&&_.Z.locals;var S=n(94720),T=n(51635),O=n(32158),R=n(44908),k=n(73249),A=n(26862),j=n(71036).__;const N=function(e){var t=e.activeChannel,n=e.incognito,r=e.updatePublishForm,i=e.getMembershipTiersForContentClaimId,a=e.claim,l=e.getExistingTiers,o=e.myMembershipTiers,c=e.memberRestrictionOn,s=e.memberRestrictionTierIds,m=e.validTierIds,d=e.paywall,f=e.visibility,b=null==a?void 0:a.claim_id;return u.useEffect((function(){b&&i(b)}),[b]),u.useEffect((function(){if(m){var e=s.filter((function(e){return m.includes(e)}));e.length<s.length&&r({memberRestrictionTierIds:e})}}),[m]),(0,u.useEffect)((function(){t&&l({channel_name:t.normalized_name,channel_id:t.claim_id})}),[t]),n?null:!o||o&&0===o.length?u.createElement(u.Fragment,null,u.createElement(T.Z,{background:!0,isBodyList:!0,title:j("Restrict Content"),body:u.createElement("div",{className:"settings-row publish-row--locked"},u.createElement(O.Z,{tokens:{activate_your_memberships:u.createElement(R.default,{navigate:"/$/".concat(k.CREATOR_MEMBERSHIPS),label:j("activate your memberships"),button:"link"})}},"Please %activate_your_memberships% first to to use this functionality."))})):m&&0===m.length?u.createElement(T.Z,{background:!0,isBodyList:!0,title:j("Restrict Content"),body:u.createElement("div",{className:"publish-row publish-row-tiers"},u.createElement("div",{className:"publish-row__reason"},j("The selected channel has no membership tiers with exclusive-content perks for the current setup.")))}):m&&m.length>0?"unlisted"===f?u.createElement(T.Z,{background:!0,isBodyList:!0,title:j("Restrict Content"),body:u.createElement("div",{className:"publish-row publish-row-tiers"},u.createElement("div",{className:"publish-row__reason"},j("Membership restrictions are not available for Unlisted content.")))}):u.createElement(u.Fragment,null,u.createElement(T.Z,{background:!0,isBodyList:!0,title:j("Restrict Content"),body:u.createElement("div",{className:"publish-row publish-row-tiers"},u.createElement(S.Wi,{type:"checkbox",disabled:d!==A.c0.FREE,checked:c,label:j("Restrict content to only allow subscribers to certain memberships to view it"),name:"toggleRestrictedContent",className:"restrict-content__checkbox",onChange:function(){r({memberRestrictionOn:!c})}}),c&&u.createElement("div",{className:"tier-list"},o.map((function(e){return m&&m.includes(e.Membership.id)?u.createElement(S.Wi,{disabled:d!==A.c0.FREE,key:e.Membership.id,type:"checkbox",checked:s.includes(e.Membership.id),label:e.Membership.name,name:e.Membership.id,onChange:function(){return t=e.Membership.id,void(s.includes(t)?r({memberRestrictionTierIds:s.filter((function(e){return e!==t}))}):r({memberRestrictionTierIds:s.concat(t)}));var t}}):u.createElement("div",{key:e.Membership.id,className:"dummy-tier"})}))),d!==A.c0.FREE&&u.createElement("div",{className:"error__text"},j("This file has an attached price, disable it in order to add content restrictions.")))})):null};const P=(0,r.$j)((function(e,t){var n=(0,a.IO)(e),r=!n&&(0,a.YG)(e);return{activeChannel:r,incognito:n,myMembershipTiers:(0,l.RM)(e,null==r?void 0:r.claim_id),memberRestrictionOn:(0,o.of)(e,"memberRestrictionOn"),memberRestrictionTierIds:(0,o.of)(e,"memberRestrictionTierIds"),validTierIds:(0,o._M)(e),paywall:(0,o.of)(e,"paywall"),visibility:(0,o.of)(e,"visibility")}}),(function(e){return{updatePublishForm:function(t){return e((0,i.JC)(t))},getMembershipTiersForContentClaimId:function(t){return e((0,c.Wo)(t))},getExistingTiers:function(t){return e((0,c.OT)(t))}}}))(N)},6764:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(3658),i=n(35101),a=n(68470),l=n(32158),o=n(88441);const c=function(e){var t=e.balance,n=e.inline,r=function(e){return o.createElement(l.Z,{tokens:{balance:o.createElement(a.Z,{amount:t,precision:4})}},e)};return t?n?o.createElement("span",{className:"help--spendable"},r("%balance% available.")):o.createElement("div",{className:"help"},r("Your immediately spendable balance is %balance%.")):null};const u=(0,r.$j)((function(e){return{balance:(0,i.QM)(e)}}))(c)},87894:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(3658),i=n(35101),a=n(77369),l=n(73249),o=n(88441),c=n(44908),u=n(16062),s=n(32158),m=n(74971),d=n(71036).__;const f=(0,r.$j)((function(e){return{balance:(0,i.QM)(e)}}))((function(e){var t=e.includeWalletLink,n=void 0!==t&&t,r=e.type,i=void 0===r?"sad":r;return o.createElement("div",{className:"main--empty"},o.createElement(u.Z,{type:i,title:d("Your wallet is empty"),subtitle:o.createElement("div",null,o.createElement("p",null,o.createElement(s.Z,{tokens:{lbc:o.createElement(m.Z,null)}},"You need %lbc% to create a channel and upload content.")),o.createElement("p",null,o.createElement(s.Z,{tokens:{lbc:o.createElement(m.Z,null)}},"Never fear though, there are tons of ways to earn %lbc%. You can earn or purchase %lbc%, or you can have your friends send you some."))),actions:o.createElement("div",{className:"section__actions"},o.createElement(c.default,{button:"primary",icon:a.REWARDS,label:d("Earn Rewards"),navigate:"/$/".concat(l.REWARDS)}),o.createElement(c.default,{button:"secondary",icon:a.BUY,label:"Buy/Swap Credits",navigate:"/$/".concat(l.BUY)}),n&&o.createElement(c.default,{icon:a.RECEIVE,button:"secondary",label:d("Your Address"),navigate:"/$/".concat(l.RECEIVE)}))}))}))},23021:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(88441);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,l,o=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=function(e){r.useEffect(e,[])};function o(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=i(r.useState(e),2),c=o[0],u=o[1],s=r.useRef(),m=r.useRef(null),d=r.useRef(0);return r.useEffect((function(){if(s.current)m.current=e,d.current=!0;else{u(e);s.current=setTimeout((function e(){d.current?(d.current=!1,u(m.current),s.current=setTimeout(e,a)):s.current=void 0}),a)}}),[a,e]),t=function(){s.current&&clearTimeout(s.current)},(n=r.useRef(t)).current=t,l((function(){return function(){return n.current()}})),c}},92499:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(26612),i=n.n(r),a=n(40805),l=n.n(a)()(i());l.push([e.id,".publish-row__reason{color:var(--color-text-warning);font-size:var(--font-small)}[dir] .publish-row__reason{padding:var(--spacing-xxs) var(--spacing-xs)}","",{version:3,sources:["webpack://./../ui/component/publishProtectedContent/style.scss"],names:[],mappings:"AAAA,qBAGE,+BAAA,CADA,2BACA,CAHF,2BACE,4CAEA",sourcesContent:[".publish-row__reason {\n  padding: var(--spacing-xxs) var(--spacing-xs);\n  font-size: var(--font-small);\n  color: var(--color-text-warning);\n}\n"],sourceRoot:""}]);const o=l}}]);
//# sourceMappingURL=9434-27a6b70134885053b8a9.js.map