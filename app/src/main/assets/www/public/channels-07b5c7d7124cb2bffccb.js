"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[8595],{53445:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(77369),l=t(88441),c=t(44908),i=t(71036).__;function r(e){var n=e.href,t=e.navigate,r=e.icon,s=e.iconSize,o=e.description;return l.createElement(c.default,{onClick:function(e){n&&e.stopPropagation()},className:"icon--help",icon:r||a.HELP,iconSize:s||14,title:o||i("Help"),description:o||i("Help"),href:n,navigate:t})}},20280:(e,n,t)=>{t.r(n),t.d(n,{default:()=>L});var a=t(3658),l=t(7920),c=t(52338),i=t(90416),r=t(52705),s=t(15927),o=t(9767),d=t(46727),u=t(88441),h=t(42074),m=t(9319),E=t(44908),p=t(60732),f=t(16062),v=t(74971),C=t(96284),_=t(77369),N=t(73249),b=t(53445),g=t(13690),y=t(16643),A=t(71036).__,w=(0,g.e)((function(){return t.e(3909).then(t.bind(t,51707))}));var k={doFetchChannelListMine:r.wA,doSetActiveChannel:s.ds,doFetchOdyseeMembershipForChannelIds:c.i6,doUserViewRateList:i.qB};const L=(0,a.$j)((function(e){return{channelUrls:(0,l.Hc)(e),channelIds:(0,l.Pg)(e),fetchingChannels:(0,l.Y7)(e),hasYoutubeChannels:(0,o.ly)(e),pendingIds:(0,l.DX)(e),viewRateById:(0,d.kY)(e),claimsByUri:(0,l.As)(e)}}),k)((function(e){var n=e.channelUrls,t=e.channelIds,a=e.fetchingChannels,l=e.hasYoutubeChannels,c=e.pendingIds,i=e.viewRateById,r=e.doFetchChannelListMine,s=e.doUserViewRateList,o=e.doSetActiveChannel,d=e.doFetchOdyseeMembershipForChannelIds,g=Number.isInteger(null==t?void 0:t.length);u.useEffect((function(){t?(d(t),s()):r()}),[t,r,d,s]);var k=(0,y.k6)().push;return g||l?u.createElement(m.Z,{className:"channelsPage-wrapper"},u.createElement("div",{className:"card-stack"},l&&u.createElement(u.Suspense,{fallback:null},u.createElement(w,{hideChannelLink:!0})),u.createElement(h.Z,{header:u.createElement("h1",{className:"page__title"},u.createElement(C.default,{icon:_.CHANNEL}),u.createElement("label",null,A("Your channels"))),headerAltControls:u.createElement(u.Fragment,null,u.createElement(E.default,{button:"secondary",label:A("Sync YouTube Channel"),icon:_.YOUTUBE,navigate:"/$/".concat(N.YOUTUBE_SYNC)}),u.createElement(E.default,{button:"secondary",icon:_.CHANNEL,label:A("New Channel"),navigate:"/$/".concat(N.CHANNEL_NEW)})),loading:a,uris:n,renderActions:function(e){return 0===e.meta.claims_in_channel?u.createElement("span",null):u.createElement("div",{className:"section__actions"},u.createElement(E.default,{button:"alt",icon:_.ANALYTICS,label:A("Analytics"),onClick:function(){o(e.claim_id),k("/$/".concat(N.CREATOR_DASHBOARD))}}))},renderProperties:function(e){var n=e.meta.claims_in_channel;if(!e||0===n)return null;var t=i[e.claim_id];return t&&!c.includes(e.claim_id)?u.createElement("span",{className:"claim-preview__custom-properties"},u.createElement("span",{className:"help--inline"},A("Earnings per view: "),u.createElement(v.Z,{postfix:t.view_rate.toFixed(2)}),u.createElement(b.Z,{href:"https://help.odysee.tv/category-monetization/"}))):null}}))):u.createElement(m.Z,{className:"channelsPage-wrapper"},a?u.createElement("div",{className:"main--empty"},u.createElement(p.Z,{delayed:!0})):u.createElement(f.Z,{title:A("No channels"),subtitle:A("You haven't created a channel yet. All of your beautiful channels will be listed here!"),actions:u.createElement("div",{className:"section__actions"},u.createElement(E.default,{button:"primary",label:A("Create Channel"),navigate:"/$/".concat(N.CHANNEL_NEW)}))}))}))}}]);
//# sourceMappingURL=channels-07b5c7d7124cb2bffccb.js.map