"use strict";(self.webpackChunkwindows_cv=self.webpackChunkwindows_cv||[]).push([[554],{2860:function(e,t,n){n.d(t,{Q:function(){return f}});var r=n(1504),o=n(6151),i=n(4554),a=n(8820),c=n(4651),s=n(7689),l=n(8933),d=n(6896),u=n(2791),p=n(3329),f="32px",h=function(e){var t=e.children,n=e.title,i=e.onClick;return(0,p.jsx)(r.Z,{title:n,describeChild:!0,children:(0,p.jsx)("span",{children:(0,p.jsx)(o.Z,{onClick:i,children:t})})})};function x(){var e=(0,s.s0)(),t=(0,l.TL)();return(0,p.jsx)(i.Z,{component:"header",sx:{height:f,position:"sticky",top:0,backgroundColor:"background.default",zIndex:"1"},children:(0,p.jsxs)(i.Z,{component:"nav",sx:{display:"flex",columnGap:"10px",justifyContent:"flex-end"},children:[(0,p.jsx)(h,{title:"Minimize",onClick:function(){return e("/")},children:(0,p.jsx)(c.knE,{size:20})})," ",(0,p.jsx)(h,{title:"Close",onClick:function(){t((0,d.Tq)(function(){var e=window.location.href,t=e.slice(e.search("#")+2);return t.charAt(0).toUpperCase()+t.slice(1)}())),e("/")},children:(0,p.jsx)(a.LHV,{size:20})})]})})}t.Z=(0,u.memo)(x)},9554:function(e,t,n){n.r(t),n.d(t,{default:function(){return ve}});var r,o,i,a,c=n(9439),s=n(4942),l=n(1413),d=n(7107),u=n(9458),p=(0,d.Z)((0,l.Z)((0,l.Z)({},u.Z),{},{typography:{fontFamily:"'Press Start 2P', cursive",h1:(r={},(0,s.Z)(r,u.Z.breakpoints.up("xs"),{fontSize:"17px"}),(0,s.Z)(r,u.Z.breakpoints.up("sm"),{fontSize:"20px"}),(0,s.Z)(r,u.Z.breakpoints.up("lg"),{fontSize:"25px"}),(0,s.Z)(r,u.Z.breakpoints.up("xl"),{fontSize:"40px"}),r),caption:(o={},(0,s.Z)(o,u.Z.breakpoints.up("xs"),{fontSize:"17px"}),(0,s.Z)(o,u.Z.breakpoints.up("sm"),{fontSize:"20px"}),(0,s.Z)(o,u.Z.breakpoints.up("lg"),{fontSize:"25px"}),(0,s.Z)(o,u.Z.breakpoints.up("xl"),{fontSize:"40px"}),o),body1:(i={},(0,s.Z)(i,u.Z.breakpoints.up("xs"),{fontSize:"12px"}),(0,s.Z)(i,u.Z.breakpoints.up("sm"),{fontSize:"15px"}),(0,s.Z)(i,u.Z.breakpoints.up("lg"),{fontSize:"19px"}),(0,s.Z)(i,u.Z.breakpoints.up("xl"),{fontSize:"27px"}),i),body2:(a={},(0,s.Z)(a,u.Z.breakpoints.up("xs"),{fontSize:"7px"}),(0,s.Z)(a,u.Z.breakpoints.up("sm"),{fontSize:"10px"}),(0,s.Z)(a,u.Z.breakpoints.up("lg"),{fontSize:"14px"}),(0,s.Z)(a,u.Z.breakpoints.up("xl"),{fontSize:"20px"}),a)}})),f=n(3986),h=10,x=Array(h).fill(Array(h)).fill(Array(h).fill(0)),v={Easy:300,Normal:200,Hard:100,Insane:50},m={up:"ArrowUp",down:"ArrowDown",right:"ArrowRight",left:"ArrowLeft"},b=n(7012),Z=n(4554),g=n(2791),y=n.t(g,2),k=n(8933),j=n(7089),w=n(9120),S=n(3073),z=n(2886);function C(e,t,n,r,o){var i=g.useState((function(){return o&&n?n(e).matches:r?r(e).matches:t})),a=(0,c.Z)(i,2),s=a[0],l=a[1];return(0,z.Z)((function(){var t=!0;if(n){var r=n(e),o=function(){t&&l(r.matches)};return o(),r.addListener(o),function(){t=!1,r.removeListener(o)}}}),[e,n]),s}var R=y.useSyncExternalStore;function M(e,t,n,r,o){var i=g.useCallback((function(){return t}),[t]),a=g.useMemo((function(){if(o&&n)return function(){return n(e).matches};if(null!==r){var t=r(e).matches;return function(){return t}}return i}),[i,e,r,o,n]),s=g.useMemo((function(){if(null===n)return[i,function(){return function(){}}];var t=n(e);return[function(){return t.matches},function(e){return t.addListener(e),function(){t.removeListener(e)}}]}),[i,n,e]),l=(0,c.Z)(s,2),d=l[0],u=l[1];return R(u,d,a)}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,w.Z)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,o=(0,S.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),i=o.defaultMatches,a=void 0!==i&&i,c=o.matchMedia,s=void 0===c?r?window.matchMedia:null:c,l=o.ssrMatchMedia,d=void 0===l?null:l,u=o.noSsr,p=void 0!==u&&u;var f="function"===typeof e?e(n):e;return f=f.replace(/^@media( ?)/m,""),(void 0!==R?M:C)(f,a,s,d,p)}var L=function(){var e=T("(min-width:1536px)"),t=T("(min-width:1200px)"),n=T("(min-width:900px)"),r=T("(min-width:600px)");return e?70:t?40:n?35:r?30:25},W=n(3329);function G(e){var t=e.snake,n=e.food,r=L();return(0,W.jsx)(W.Fragment,{children:x.map((function(e,o){return(0,W.jsx)(Z.Z,{display:"flex",children:e.map((function(e,i){var a={background:"transparent",borderRadius:"0"},c=a,s=a,d=t.find((function(e){return e[0]===o&&e[1]===i})),u=n[0]===o&&n[1]===i,p=t[t.length-1][0]===o&&t[t.length-1][1]===i,f=t[0][0]===o&&t[0][1]===i;return p?(s.background="white",s.borderRadius="30%"):f?(s.background="#e0dcdc",s.borderRadius="10%"):d&&(s.background="white",s.borderRadius="10%"),u&&(c.borderRadius="30%",s.background="green"),(0,W.jsx)(Z.Z,{sx:(0,l.Z)((0,l.Z)((0,l.Z)({},c),s),{},{display:"flex",width:r,height:r})},i)}))},o)}))})}var N=n(890),B=n(6151);function A(e){var t=e.score,n=e.isGameStarted,r=e.startGame,o=h*L();return(0,W.jsxs)(Z.Z,{sx:{width:o,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,W.jsx)(N.Z,{component:"span",variant:"body1",children:t}),(0,W.jsx)(B.Z,{onClick:function(){return r(!1)},sx:{visibility:"".concat(n?"visible":"hidden"),borderRadius:"5px"},children:(0,W.jsx)(N.Z,{component:"span",variant:"body1",children:"PAUSE"})})]})}var E=(0,g.memo)(A),O=n(3366),D=n(7462),F=(n(8457),n(8182)),P=n(4419),I=n(6934),q=n(1402),H=n(4036);function U(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var Q=n(5878),V=n(1217);function _(e){return(0,V.Z)("MuiToggleButtonGroup",e)}var K=(0,Q.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),J=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],X=(0,I.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,s.Z)({},"& .".concat(K.grouped),t.grouped),(0,s.Z)({},"& .".concat(K.grouped),t["grouped".concat((0,H.Z)(n.orientation))]),t.root,"vertical"===n.orientation&&t.vertical,n.fullWidth&&t.fullWidth]}})((function(e){var t=e.ownerState,n=e.theme;return(0,D.Z)({display:"inline-flex",borderRadius:(n.vars||n).shape.borderRadius},"vertical"===t.orientation&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},(0,s.Z)({},"& .".concat(K.grouped),(0,D.Z)({},"horizontal"===t.orientation?(0,s.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(K.selected," + .").concat(K.grouped,".").concat(K.selected),{borderLeft:0,marginLeft:0}):(0,s.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(K.selected," + .").concat(K.grouped,".").concat(K.selected),{borderTop:0,marginTop:0}))))})),Y=g.forwardRef((function(e,t){var n=(0,q.Z)({props:e,name:"MuiToggleButtonGroup"}),r=n.children,o=n.className,i=n.color,a=void 0===i?"standard":i,c=n.disabled,s=void 0!==c&&c,l=n.exclusive,d=void 0!==l&&l,u=n.fullWidth,p=void 0!==u&&u,f=n.onChange,h=n.orientation,x=void 0===h?"horizontal":h,v=n.size,m=void 0===v?"medium":v,b=n.value,Z=(0,O.Z)(n,J),y=(0,D.Z)({},n,{disabled:s,fullWidth:p,orientation:x,size:m}),k=function(e){var t=e.classes,n=e.orientation,r=e.fullWidth,o=e.disabled,i={root:["root","vertical"===n&&"vertical",r&&"fullWidth"],grouped:["grouped","grouped".concat((0,H.Z)(n)),o&&"disabled"]};return(0,P.Z)(i,_,t)}(y),j=function(e,t){if(f){var n,r=b&&b.indexOf(t);b&&r>=0?(n=b.slice()).splice(r,1):n=b?b.concat(t):[t],f(e,n)}},w=function(e,t){f&&f(e,b===t?null:t)};return(0,W.jsx)(X,(0,D.Z)({role:"group",className:(0,F.Z)(k.root,o),ref:t,ownerState:y},Z,{children:g.Children.map(r,(function(e){return g.isValidElement(e)?g.cloneElement(e,{className:(0,F.Z)(k.grouped,e.props.className),onChange:d?w:j,selected:void 0===e.props.selected?U(e.props.value,b):e.props.selected,size:e.props.size||m,fullWidth:p,color:e.props.color||a,disabled:e.props.disabled||s}):null}))}))})),$=n(2065),ee=n(3701);function te(e){return(0,V.Z)("MuiToggleButton",e)}var ne=(0,Q.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),re=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],oe=(0,I.ZP)(ee.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["size".concat((0,H.Z)(n.size))]]}})((function(e){var t,n,r=e.theme,o=e.ownerState,i="standard"===o.color?r.palette.text.primary:r.palette[o.color].main;return r.vars&&(i="standard"===o.color?r.vars.palette.text.primary:r.vars.palette[o.color].main,n="standard"===o.color?r.vars.palette.text.primaryChannel:r.vars.palette[o.color].mainChannel),(0,D.Z)({},r.typography.button,{borderRadius:(r.vars||r).shape.borderRadius,padding:11,border:"1px solid ".concat((r.vars||r).palette.divider),color:(r.vars||r).palette.action.active},o.fullWidth&&{width:"100%"},(t={},(0,s.Z)(t,"&.".concat(ne.disabled),{color:(r.vars||r).palette.action.disabled,border:"1px solid ".concat((r.vars||r).palette.action.disabledBackground)}),(0,s.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:r.vars?"rgba(".concat(r.vars.palette.text.primaryChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,$.Fq)(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,s.Z)(t,"&.".concat(ne.selected),{color:i,backgroundColor:r.vars?"rgba(".concat(n," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,$.Fq)(i,r.palette.action.selectedOpacity),"&:hover":{backgroundColor:r.vars?"rgba(".concat(n," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,$.Fq)(i,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:r.vars?"rgba(".concat(n," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,$.Fq)(i,r.palette.action.selectedOpacity)}}}),t),"small"===o.size&&{padding:7,fontSize:r.typography.pxToRem(13)},"large"===o.size&&{padding:15,fontSize:r.typography.pxToRem(15)})})),ie=g.forwardRef((function(e,t){var n=(0,q.Z)({props:e,name:"MuiToggleButton"}),r=n.children,o=n.className,i=n.color,a=void 0===i?"standard":i,c=n.disabled,s=void 0!==c&&c,l=n.disableFocusRipple,d=void 0!==l&&l,u=n.fullWidth,p=void 0!==u&&u,f=n.onChange,h=n.onClick,x=n.selected,v=n.size,m=void 0===v?"medium":v,b=n.value,Z=(0,O.Z)(n,re),g=(0,D.Z)({},n,{color:a,disabled:s,disableFocusRipple:d,fullWidth:p,size:m}),y=function(e){var t=e.classes,n=e.fullWidth,r=e.selected,o=e.disabled,i=e.size,a=e.color,c={root:["root",r&&"selected",o&&"disabled",n&&"fullWidth","size".concat((0,H.Z)(i)),a]};return(0,P.Z)(c,te,t)}(g);return(0,W.jsx)(oe,(0,D.Z)({className:(0,F.Z)(y.root,o),disabled:s,focusRipple:!d,ref:t,onClick:function(e){h&&(h(e,b),e.defaultPrevented)||f&&f(e,b)},onChange:f,value:b,ownerState:g,"aria-pressed":x},Z,{children:r}))}));function ae(e){var t=e.score,n=e.startGame,r=e.changeSpeed,o=e.speed,i=(0,k.CG)((function(e){return e.bestScore.bestScore})),a=(0,g.useState)(o),s=(0,c.Z)(a,2),l=s[0],d=s[1];var u=h*L();return(0,W.jsxs)(Z.Z,{sx:{width:u,height:u,p:"10px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,W.jsx)(N.Z,{component:"h1",variant:"h1",sx:{textAlign:"center",mb:"30px"},children:"Menu"}),(0,W.jsxs)(Z.Z,{sx:{display:"flex",textAlign:"center",flexDirection:"column",rowGap:"10px"},children:[(0,W.jsxs)(N.Z,{component:"span",variant:"body1",children:["Best score: ",i]}),(0,W.jsx)(B.Z,{onClick:n,sx:{my:"20px"},children:(0,W.jsx)(N.Z,{component:"span",variant:"caption",color:"secondary",children:t?"Resume":"New Game"})}),(0,W.jsx)(N.Z,{component:"span",variant:"body1",children:"Speed"}),(0,W.jsxs)(Y,{color:"secondary",value:l,exclusive:!0,onChange:function(e,t){d(Number(t)),r(Number(t))},"aria-label":"Speed",sx:{display:"flex",width:"100%",justifyContent:"center"},children:[(0,W.jsx)(ie,{value:v.Easy,sx:{color:"#dddbdb"},children:(0,W.jsx)(N.Z,{variant:"body2",children:"Easy"})}),(0,W.jsx)(ie,{value:v.Normal,sx:{color:"#dddbdb"},children:(0,W.jsx)(N.Z,{variant:"body2",children:"Normal"})}),(0,W.jsx)(ie,{value:v.Hard,sx:{color:"#dddbdb"},children:(0,W.jsx)(N.Z,{variant:"body2",children:"Hard"})}),(0,W.jsx)(ie,{value:v.Insane,sx:{color:"#dddbdb"},children:(0,W.jsx)(N.Z,{variant:"body2",children:"Insane"})})]})]})]})}var ce=n(2860),se=n(9126),le=(0,I.ZP)(B.Z)({p:0,minWidth:0});function de(e){var t=e.changeDirection;return(0,W.jsxs)(Z.Z,{sx:{display:{xs:"flex",md:"none"},flexDirection:"column",alignItems:"center",mt:"40px"},children:[(0,W.jsx)(le,{onClick:function(){return t(m.up)},children:(0,W.jsx)(se.FfE,{size:35})}),(0,W.jsxs)(Z.Z,{sx:{display:"flex",columnGap:"30px"},children:[(0,W.jsx)(le,{onClick:function(){return t(m.left)},children:(0,W.jsx)(se.knT,{size:35})}),(0,W.jsx)(le,{onClick:function(){return t(m.right)},children:(0,W.jsx)(se.mlW,{size:35})})]}),(0,W.jsx)(le,{onClick:function(){return t(m.down)},children:(0,W.jsx)(se.KN8,{size:35})})]})}var ue=(0,g.memo)(de);function pe(e){switch(!0){case e>=h:return 0;case e<0:return h-1;default:return e}}function fe(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}var he=function(e){var t=[];switch(e){case m.up:t=[-1,0];break;case m.down:t=[1,0];break;case m.right:t=[0,1];break;case m.left:t=[0,-1]}return t},xe=n(3433);function ve(){var e=(0,g.useState)([fe()]),t=(0,c.Z)(e,2),n=t[0],r=t[1],o=(0,g.useState)([1,1]),i=(0,c.Z)(o,2),a=i[0],s=i[1],l=(0,g.useRef)(m.right),d=(0,g.useState)(m.right),u=(0,c.Z)(d,2),h=u[0],x=u[1],y=(0,g.useState)(!1),w=(0,c.Z)(y,2),S=w[0],z=w[1],C=(0,g.useState)(0),R=(0,c.Z)(C,2),M=R[0],L=R[1],N=(0,g.useState)(v.Normal),B=(0,c.Z)(N,2),A=B[0],O=B[1],D=(0,k.TL)(),F=(0,k.CG)((function(e){return e.bestScore.bestScore})),P=(0,g.useCallback)((function(){return z(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])}),[]),I=(0,g.useCallback)((function(e){return O(e)}),[]),q=(0,g.useCallback)((function(e){return x(e)}),[]);return function(e){var t=e.direction,n=e.changeDirection,r=T((function(e){return e.breakpoints.up("md")}));(0,g.useEffect)((function(){if(r){var e=function(e){Object.values(m).includes(e.key)&&n(e.key)};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}}),[t,r,n])}({direction:h,changeDirection:q}),(0,g.useEffect)((function(){if(S){var e=A;l.current!==h&&(e=0,l.current=h);var t=function(e){var t=setTimeout((function(){var e=n,t=he(h),o=[pe(e[n.length-1][0]+t[0]),pe(e[n.length-1][1]+t[1])];if(e.push(o),function(e){if(e.length){var t=(0,xe.Z)(e.filter((function(t){return t[0]===e[e.length-1][0]})));return!!t.length&&t.filter((function(t){return t[1]===e[e.length-1][1]})).length>1}}(n))return r([fe()]),z(!1),F<M&&D((0,j.P)(M)),void L(0);var i=1;o[0]===a[0]&&o[1]===a[1]&&(s(fe()),L((function(e){return e+1})),i=0),r(e.slice(i))}),e);return t}(e);return function(){return clearTimeout(t)}}}),[n,h,S]),(0,W.jsxs)(b.Z,{theme:p,children:[(0,W.jsx)(ce.Z,{}),(0,W.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"calc(100vh - ".concat(f.b," - ").concat(ce.Q,")"),background:"linear-gradient(186deg, rgba(35,48,48,1) 0%, rgba(41,40,40,1) 49%, #323328 100%)"},children:[(0,W.jsx)(E,{score:M,isGameStarted:S,startGame:P}),(0,W.jsx)(Z.Z,{sx:{border:"1px solid white",borderRadius:"5px",boxShadow:"0px 0px 83px -25px #666565"},children:S?(0,W.jsx)(G,{snake:n,food:a}):(0,W.jsx)(ae,{score:M,speed:A,startGame:P,changeSpeed:I})}),(0,W.jsx)(ue,{changeDirection:q})]})]})}}}]);
//# sourceMappingURL=554.87198818.chunk.js.map