"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[3313],{50048:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(3658),o=n(15927),r=n(18264),i=n(33441),l=n(88441),u=n(1017),c=n(6993),s=n(16395),d=n(25043).lW,f=n(71036).__;const m=function(e){var t,n=e.closeModal,a=e.filePath,o=e.upload,r=e.showToast,i=(0,l.useRef)();function m(){r({isError:!0,message:f("Something didn't work. Please try again.")})}return t="string"==typeof a?(0,c.Gi)(a):URL.createObjectURL(a),l.createElement(u.u_,{isOpen:!0,title:f("Upload thumbnail"),contentLabel:f("Confirm Thumbnail Upload"),type:"confirm",confirmButtonLabel:f("Upload"),onConfirmed:function(){var e=function(e){var t=function(e){var t=i.current;if(!t)return;var n=document.createElement("canvas");n.width=t.videoWidth,n.height=t.videoHeight,n.getContext("2d").drawImage(t,0,0,n.width,n.height);var a=n.toDataURL("image/jpeg",e),o=a.replace(/data:image\/\w+;base64,/i,"");return n.remove(),d.from(o,"base64")}(e);return{imageBuffer:t,file:new File([t],"thumbnail.jpeg",{type:"image/jpeg"})}},t=e(1);t.file&&t.file.size>s.THUMBNAIL_CDN_SIZE_LIMIT_BYTES&&(t=e(.8)),t.imageBuffer?(o(t.file),n()):m()},onAborted:n},l.createElement("p",{className:"section__subtitle"},f("Pause at any time to select a thumbnail from your video"),"."),l.createElement("video",{className:"video-thumbnail-generator",ref:i,src:t,onLoadedMetadata:function(){var e=i.current;if(e){var t=e.videoWidth,n=e.videoHeight;e.width=450,e.height=Math.floor(n*(450/t))}},onError:m,controls:!0}))};const h=(0,a.$j)(null,(function(e){return{closeModal:function(){return e((0,o.gG)())},upload:function(t){return e((0,r.qF)(null,t,null,null,"Generated"))},showToast:function(t){return e((0,i.QJ)(t))}}}))(m)}}]);
//# sourceMappingURL=modalAutoGenerateThumbnail-e9c37019be8caa362379.js.map