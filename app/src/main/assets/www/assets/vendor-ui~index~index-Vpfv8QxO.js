import{p as e}from"./vendor-react~index~nag-sunset~nag-no-user~nag-degraded-performance~index~index~index~index~~i9frurse-CO--X6FL.js";import{s as t}from"./rolldown-runtime-Czos8NxU.js";import{l as n}from"./vendor-markdown~index~index~index~index~index~index~index~index~index~index~markdown-previe~f4lxz660-CwogRX3y.js";import{C as r,S as i,f as a,g as o,n as s,o as c,p as l,w as u}from"./vendor-ui~index~index~index~index~index~index~index~index~index~index~index~index~index~ind~hx6zdate-Dlvh4i0-.js";import{D as d,E as f,M as p,N as m,T as h,b as g}from"./vendor-ui~index~index~index~index~index~index~index~index~index~index~index~index~index~ind~edcctoys-DYhGsank.js";import{a as _,l as v}from"./vendor-ui~index~index~index~index~index~index~index~index~index~index~index~index~index~ind~kaa1qkgt-kLuQDcXo.js";function y(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}var b=t(e());function x(e,t){var n=function(e){return t&&(0,b.isValidElement)(e)?t(e):e},r=Object.create(null);return e&&b.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=n(e)}),r}function S(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function C(e,t,n){return n[t]==null?e.props[t]:n[t]}function w(e,t){return x(e.children,function(n){return(0,b.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:C(n,`appear`,e),enter:C(n,`enter`,e),exit:C(n,`exit`,e)})})}function T(e,t,n){var r=x(e.children),i=S(t,r);return Object.keys(i).forEach(function(a){var o=i[a];if((0,b.isValidElement)(o)){var s=a in t,c=a in r,l=t[a],u=(0,b.isValidElement)(l)&&!l.props.in;c&&(!s||u)?i[a]=(0,b.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:C(o,`exit`,e),enter:C(o,`enter`,e)}):!c&&s&&!u?i[a]=(0,b.cloneElement)(o,{in:!1}):c&&s&&(0,b.isValidElement)(l)&&(i[a]=(0,b.cloneElement)(o,{onExited:n.bind(null,o),in:l.props.in,exit:C(o,`exit`,e),enter:C(o,`enter`,e)}))}}),i}var E=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},D={component:`div`,childFactory:function(e){return e}},O=function(e){f(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(y(r)),firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?w(e,r):T(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=x(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=u({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=d(e,[`component`,`childFactory`]),i=this.state.contextValue,a=E(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,t===null?b.createElement(h.Provider,{value:i},a):b.createElement(h.Provider,{value:i},b.createElement(t,r,a))},t}(b.Component);O.propTypes={},O.defaultProps=D;var k=class e{static create(){return new e}static use(){let t=m(e.create).current,[n,r]=b.useState(!1);return t.shouldMount=n,t.setShouldMount=r,b.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=j(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}};function A(){return k.use()}function j(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var M=n();function N(e){let{className:t,classes:n,pulsate:i=!1,rippleX:a,rippleY:o,rippleSize:s,in:c,onExited:l,timeout:u}=e,[d,f]=b.useState(!1),p=r(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),m={width:s,height:s,top:-(s/2)+o,left:-(s/2)+a},h=r(n.child,d&&n.childLeaving,i&&n.childPulsate);return!c&&!d&&f(!0),b.useEffect(()=>{if(!c&&l!=null){let e=setTimeout(l,u);return()=>{clearTimeout(e)}}},[l,c,u]),(0,M.jsx)(`span`,{className:p,style:m,children:(0,M.jsx)(`span`,{className:h})})}var P=a(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`]),F=550,I=o`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,L=o`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,R=o`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,z=c(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),B=c(N,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${P.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${I};
    animation-duration: ${F}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${P.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${P.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${P.childLeaving} {
    opacity: 0;
    animation-name: ${L};
    animation-duration: ${F}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${P.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${R};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,V=b.forwardRef(function(e,t){let{center:n=!1,classes:i={},className:a,...o}=s({props:e,name:`MuiTouchRipple`}),[c,l]=b.useState([]),u=b.useRef(0),d=b.useRef(null);b.useEffect(()=>{d.current&&=(d.current(),null)},[c]);let f=b.useRef(!1),m=p(),h=b.useRef(null),g=b.useRef(null),_=b.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:a,rippleSize:o,cb:s}=e;l(e=>[...e,(0,M.jsx)(B,{classes:{ripple:r(i.ripple,P.ripple),rippleVisible:r(i.rippleVisible,P.rippleVisible),ripplePulsate:r(i.ripplePulsate,P.ripplePulsate),child:r(i.child,P.child),childLeaving:r(i.childLeaving,P.childLeaving),childPulsate:r(i.childPulsate,P.childPulsate)},timeout:F,pulsate:t,rippleX:n,rippleY:a,rippleSize:o},u.current)]),u.current+=1,d.current=s},[i]),v=b.useCallback((e={},t={},r=()=>{})=>{let{pulsate:i=!1,center:a=n||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&f.current){f.current=!1;return}e?.type===`touchstart`&&(f.current=!0);let s=o?null:g.current,c=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0},l,u,d;if(a||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)l=Math.round(c.width/2),u=Math.round(c.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-c.left),u=Math.round(n-c.top)}if(a)d=Math.sqrt((2*c.width**2+c.height**2)/3),d%2==0&&(d+=1);else{let e=Math.max(Math.abs((s?s.clientWidth:0)-l),l)*2+2,t=Math.max(Math.abs((s?s.clientHeight:0)-u),u)*2+2;d=Math.sqrt(e**2+t**2)}e?.touches?h.current===null&&(h.current=()=>{_({pulsate:i,rippleX:l,rippleY:u,rippleSize:d,cb:r})},m.start(80,()=>{h.current&&=(h.current(),null)})):_({pulsate:i,rippleX:l,rippleY:u,rippleSize:d,cb:r})},[n,_,m]),y=b.useCallback(()=>{v({},{pulsate:!0})},[v]),x=b.useCallback((e,t)=>{if(m.clear(),e?.type===`touchend`&&h.current){h.current(),h.current=null,m.start(0,()=>{x(e,t)});return}h.current=null,l(e=>e.length>0?e.slice(1):e),d.current=t},[m]);return b.useImperativeHandle(t,()=>({pulsate:y,start:v,stop:x}),[y,v,x]),(0,M.jsx)(z,{className:r(P.root,i.root,a),ref:g,...o,children:(0,M.jsx)(O,{component:null,exit:!0,children:c})})});function H(e){return l(`MuiButtonBase`,e)}var U=a(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`]),ee=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:a}=e,o=i({root:[`root`,t&&`disabled`,n&&`focusVisible`]},H,a);return n&&r&&(o.root+=` ${r}`),o},W=c(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${U.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),G=b.forwardRef(function(e,t){let n=s({props:e,name:`MuiButtonBase`}),{action:i,centerRipple:a=!1,children:o,className:c,component:l=`button`,disabled:u=!1,disableRipple:d=!1,disableTouchRipple:f=!1,focusRipple:p=!1,focusVisibleClassName:m,LinkComponent:h=`a`,onBlur:y,onClick:x,onContextMenu:S,onDragLeave:C,onFocus:w,onFocusVisible:T,onKeyDown:E,onKeyUp:D,onMouseDown:O,onMouseLeave:k,onMouseUp:j,onTouchEnd:N,onTouchMove:P,onTouchStart:F,tabIndex:I=0,TouchRippleProps:L,touchRippleRef:R,type:z,...B}=n,H=b.useRef(null),U=A(),G=g(U.ref,R),[q,J]=b.useState(!1);u&&q&&J(!1),b.useImperativeHandle(i,()=>({focusVisible:()=>{J(!0),H.current.focus()}}),[]);let Y=U.shouldMount&&!d&&!u;b.useEffect(()=>{q&&p&&!d&&U.pulsate()},[d,p,q,U]);let te=K(U,`start`,O,f),ne=K(U,`stop`,S,f),re=K(U,`stop`,C,f),ie=K(U,`stop`,j,f),ae=K(U,`stop`,e=>{q&&e.preventDefault(),k&&k(e)},f),oe=K(U,`start`,F,f),se=K(U,`stop`,N,f),ce=K(U,`stop`,P,f),le=K(U,`stop`,e=>{v(e.target)||J(!1),y&&y(e)},!1),ue=_(e=>{H.current||=e.currentTarget,v(e.target)&&(J(!0),T&&T(e)),w&&w(e)}),X=()=>{let e=H.current;return l&&l!==`button`&&!(e.tagName===`A`&&e.href)},de=_(e=>{p&&!e.repeat&&q&&e.key===` `&&U.stop(e,()=>{U.start(e)}),e.target===e.currentTarget&&X()&&e.key===` `&&e.preventDefault(),E&&E(e),e.target===e.currentTarget&&X()&&e.key===`Enter`&&!u&&(e.preventDefault(),x&&x(e))}),fe=_(e=>{p&&e.key===` `&&q&&!e.defaultPrevented&&U.stop(e,()=>{U.pulsate(e)}),D&&D(e),x&&e.target===e.currentTarget&&X()&&e.key===` `&&!e.defaultPrevented&&x(e)}),Z=l;Z===`button`&&(B.href||B.to)&&(Z=h);let Q={};if(Z===`button`){let e=!!B.formAction;Q.type=z===void 0&&!e?`button`:z,Q.disabled=u}else !B.href&&!B.to&&(Q.role=`button`),u&&(Q[`aria-disabled`]=u);let pe=g(t,H),$={...n,centerRipple:a,component:l,disabled:u,disableRipple:d,disableTouchRipple:f,focusRipple:p,tabIndex:I,focusVisible:q},me=ee($);return(0,M.jsxs)(W,{as:Z,className:r(me.root,c),ownerState:$,onBlur:le,onClick:x,onContextMenu:ne,onFocus:ue,onKeyDown:de,onKeyUp:fe,onMouseDown:te,onMouseLeave:ae,onMouseUp:ie,onDragLeave:re,onTouchEnd:se,onTouchMove:ce,onTouchStart:oe,ref:pe,tabIndex:u?-1:I,type:z,...Q,...B,children:[o,Y?(0,M.jsx)(V,{ref:G,center:a,...L}):null]})});function K(e,t,n,r=!1){return _(i=>(n&&n(i),r||e[t](i),!0))}function q(e){return typeof e.main==`string`}function J(e,t=[]){if(!q(e))return!1;for(let n of t)if(!e.hasOwnProperty(n)||typeof e[n]!=`string`)return!1;return!0}function Y(e=[]){return([,t])=>t&&J(t,e)}export{G as n,Y as t};
//# sourceMappingURL=vendor-ui~index~index-Vpfv8QxO.js.map