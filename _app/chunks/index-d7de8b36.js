var je=Object.defineProperty;var te=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var se=(s,e,t)=>e in s?je(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,V=(s,e)=>{for(var t in e||(e={}))Ie.call(e,t)&&se(s,t,e[t]);if(te)for(var t of te(e))Pe.call(e,t)&&se(s,t,e[t]);return s};import{S as H,i as N,s as Y,Q,C as A,e as ce,c as fe,a as pe,d as P,a5 as L,g as W,I as q,a6 as O,R as G,T as J,U as K,z as X,a7 as de,q as D,o as U,a8 as me,a9 as M,aa as Z,ab as De,v as Ue,ac as ze,ad as Fe,ae as Re,af as ke,ag as v,L as Le,M as w,r as ne,w as ae,l as oe,x as Oe,y as le,A as Ve,n as qe,B as re,p as He,ah as Ne,N as Ye}from"./vendor-394a6f70.js";import{c as j,u as ge,f as x,d as Qe}from"./useActions-21185e2b.js";import{c as he,D as We,a as Ge,M as Je}from"./Ripple-07307ac5.js";const{window:ie}=Le;function Ke(s){let e,t,i,u,c,_,o;const l=s[22].default,f=Q(l,s,s[21],null);let h=[{class:t=j(V({[s[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":s[4]==="short","mdc-top-app-bar--short-collapsed":s[0],"mdc-top-app-bar--fixed":s[4]==="fixed","smui-top-app-bar--static":s[4]==="static","smui-top-app-bar--color-secondary":s[5]==="secondary","mdc-top-app-bar--prominent":s[6],"mdc-top-app-bar--dense":s[7]},s[11]))},{style:i=Object.entries(s[12]).map(ue).concat([s[3]]).join(" ")},s[15]],r={};for(let n=0;n<h.length;n+=1)r=A(r,h[n]);return{c(){e=ce("header"),f&&f.c(),this.h()},l(n){e=fe(n,"HEADER",{class:!0,style:!0});var p=pe(e);f&&f.l(p),p.forEach(P),this.h()},h(){L(e,r)},m(n,p){W(n,e,p),f&&f.m(e,null),s[25](e),c=!0,_||(o=[q(ie,"resize",s[23]),q(ie,"scroll",s[24]),O(u=ge.call(null,e,s[1])),O(s[13].call(null,e)),q(e,"SMUITopAppBarIconButton:nav",s[26])],_=!0)},p(n,p){f&&f.p&&(!c||p[0]&2097152)&&G(f,l,n,n[21],c?K(l,n[21],p,null):J(n[21]),null),L(e,r=X(h,[(!c||p[0]&2293&&t!==(t=j(V({[n[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":n[4]==="short","mdc-top-app-bar--short-collapsed":n[0],"mdc-top-app-bar--fixed":n[4]==="fixed","smui-top-app-bar--static":n[4]==="static","smui-top-app-bar--color-secondary":n[5]==="secondary","mdc-top-app-bar--prominent":n[6],"mdc-top-app-bar--dense":n[7]},n[11]))))&&{class:t},(!c||p[0]&4104&&i!==(i=Object.entries(n[12]).map(ue).concat([n[3]]).join(" ")))&&{style:i},p[0]&32768&&n[15]])),u&&de(u.update)&&p[0]&2&&u.update.call(null,n[1])},i(n){c||(D(f,n),c=!0)},o(n){U(f,n),c=!1},d(n){n&&P(e),f&&f.d(n),s[25](null),_=!1,me(o)}}}const ue=([s,e])=>`${s}: ${e};`;function Xe(s,e,t){const i=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let u=M(e,i),{$$slots:c={},$$scope:_}=e;const o=x(Z());let l=()=>{};function f(a){return a===l}let{use:h=[]}=e,{class:r=""}=e,{style:n=""}=e,{variant:p="standard"}=e,{color:E="primary"}=e,{collapsed:d=l}=e;const B=!f(d)&&!!d;f(d)&&(d=!1);let{prominent:T=!1}=e,{dense:C=!1}=e,{scrollTarget:b=void 0}=e,m,g,S={},y={},z,_e=De({variant:p,prominent:T,dense:C},a=>{t(18,z=a)}),I,F=p;Ue(()=>(t(9,g=$()),g.init(),()=>{g.destroy()}));function $(){const a={static:ze,short:Fe,fixed:Re}[p]||ke;return new a({hasClass:be,addClass:Se,removeClass:Ae,setStyle:Ee,getTopAppBarHeight:()=>m.clientHeight,notifyNavigationIconClicked:()=>Qe(m,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>b==null?window.pageYOffset:b.scrollTop,getTotalActionItems:()=>m.querySelectorAll(".mdc-top-app-bar__action-item").length})}function be(a){return a in S?S[a]:ee().classList.contains(a)}function Se(a){S[a]||t(11,S[a]=!0,S)}function Ae(a){(!(a in S)||S[a])&&t(11,S[a]=!1,S)}function Ee(a,k){y[a]!=k&&(k===""||k==null?(delete y[a],t(12,y),t(20,F),t(4,p),t(9,g)):t(12,y[a]=k,y))}function R(){g&&(g.handleTargetScroll(),p==="short"&&t(0,d="isCollapsed"in g&&g.isCollapsed))}function Te(){return _e}function ee(){return m}const ye=()=>p!=="short"&&p!=="fixed"&&g&&g.handleWindowResize(),Be=()=>b==null&&R();function Ce(a){w[a?"unshift":"push"](()=>{m=a,t(10,m)})}const Me=()=>g&&g.handleNavigationClick();return s.$$set=a=>{e=A(A({},e),v(a)),t(15,u=M(e,i)),"use"in a&&t(1,h=a.use),"class"in a&&t(2,r=a.class),"style"in a&&t(3,n=a.style),"variant"in a&&t(4,p=a.variant),"color"in a&&t(5,E=a.color),"collapsed"in a&&t(0,d=a.collapsed),"prominent"in a&&t(6,T=a.prominent),"dense"in a&&t(7,C=a.dense),"scrollTarget"in a&&t(8,b=a.scrollTarget),"$$scope"in a&&t(21,_=a.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&262352&&z&&z({variant:p,prominent:T,dense:C}),s.$$.dirty[0]&1049104&&F!==p&&g&&(t(20,F=p),g.destroy(),t(11,S={}),t(12,y={}),t(9,g=$()),g.init()),s.$$.dirty[0]&528&&g&&p==="short"&&"setAlwaysCollapsed"in g&&g.setAlwaysCollapsed(B),s.$$.dirty[0]&524544&&I!==b&&(I&&I.removeEventListener("scroll",R),b&&b.addEventListener("scroll",R),t(19,I=b))},[d,h,r,n,p,E,T,C,b,g,m,S,y,o,R,u,Te,ee,z,I,F,_,c,ye,Be,Ce,Me]}class lt extends H{constructor(e){super();N(this,e,Xe,Ke,Y,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}var rt=he({class:"mdc-top-app-bar__row",component:We});function Ze(s){let e,t,i,u,c,_;const o=s[9].default,l=Q(o,s,s[8],null);let f=[{class:t=j({[s[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":s[2]==="start","mdc-top-app-bar__section--align-end":s[2]==="end"})},s[3]?{role:"toolbar"}:{},s[6]],h={};for(let r=0;r<f.length;r+=1)h=A(h,f[r]);return{c(){e=ce("section"),l&&l.c(),this.h()},l(r){e=fe(r,"SECTION",{class:!0});var n=pe(e);l&&l.l(n),n.forEach(P),this.h()},h(){L(e,h)},m(r,n){W(r,e,n),l&&l.m(e,null),s[10](e),u=!0,c||(_=[O(i=ge.call(null,e,s[0])),O(s[5].call(null,e))],c=!0)},p(r,[n]){l&&l.p&&(!u||n&256)&&G(l,o,r,r[8],u?K(o,r[8],n,null):J(r[8]),null),L(e,h=X(f,[(!u||n&6&&t!==(t=j({[r[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":r[2]==="start","mdc-top-app-bar__section--align-end":r[2]==="end"})))&&{class:t},n&8&&(r[3]?{role:"toolbar"}:{}),n&64&&r[6]])),i&&de(i.update)&&n&1&&i.update.call(null,r[0])},i(r){u||(D(l,r),u=!0)},o(r){U(l,r),u=!1},d(r){r&&P(e),l&&l.d(r),s[10](null),c=!1,me(_)}}}function ve(s,e,t){const i=["use","class","align","toolbar","getElement"];let u=M(e,i),{$$slots:c={},$$scope:_}=e;const o=x(Z());let{use:l=[]}=e,{class:f=""}=e,{align:h="start"}=e,{toolbar:r=!1}=e,n;ne("SMUI:icon-button:context",r?"top-app-bar:action":"top-app-bar:navigation"),ne("SMUI:button:context",r?"top-app-bar:action":"top-app-bar:navigation");function p(){return n}function E(d){w[d?"unshift":"push"](()=>{n=d,t(4,n)})}return s.$$set=d=>{e=A(A({},e),v(d)),t(6,u=M(e,i)),"use"in d&&t(0,l=d.use),"class"in d&&t(1,f=d.class),"align"in d&&t(2,h=d.align),"toolbar"in d&&t(3,r=d.toolbar),"$$scope"in d&&t(8,_=d.$$scope)},[l,f,h,r,n,o,u,p,_,c,E]}class we extends H{constructor(e){super();N(this,e,ve,Ze,Y,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}var it=he({class:"mdc-top-app-bar__title",component:Ge});function xe(s){let e;const t=s[11].default,i=Q(t,s,s[13],null);return{c(){i&&i.c()},l(u){i&&i.l(u)},m(u,c){i&&i.m(u,c),e=!0},p(u,c){i&&i.p&&(!e||c&8192)&&G(i,t,u,u[13],e?K(t,u[13],c,null):J(u[13]),null)},i(u){e||(D(i,u),e=!0)},o(u){U(i,u),e=!1},d(u){i&&i.d(u)}}}function $e(s){let e,t,i;const u=[{use:[s[6],...s[0]]},{class:j({[s[1]]:!0,[s[5]]:!0})},s[7]];var c=s[2];function _(o){let l={$$slots:{default:[xe]},$$scope:{ctx:o}};for(let f=0;f<u.length;f+=1)l=A(l,u[f]);return{props:l}}return c&&(e=new c(_(s)),s[12](e)),{c(){e&&ae(e.$$.fragment),t=oe()},l(o){e&&Oe(e.$$.fragment,o),t=oe()},m(o,l){e&&le(e,o,l),W(o,t,l),i=!0},p(o,[l]){const f=l&227?X(u,[l&65&&{use:[o[6],...o[0]]},l&34&&{class:j({[o[1]]:!0,[o[5]]:!0})},l&128&&Ve(o[7])]):{};if(l&8192&&(f.$$scope={dirty:l,ctx:o}),c!==(c=o[2])){if(e){qe();const h=e;U(h.$$.fragment,1,0,()=>{re(h,1)}),He()}c?(e=new c(_(o)),o[12](e),ae(e.$$.fragment),D(e.$$.fragment,1),le(e,t.parentNode,t)):e=null}else c&&e.$set(f)},i(o){i||(e&&D(e.$$.fragment,o),i=!0)},o(o){e&&U(e.$$.fragment,o),i=!1},d(o){s[12](null),o&&P(t),e&&re(e,o)}}}function et(s,e,t){let i,u;const c=["use","class","topAppBar","component","getElement"];let _=M(e,c),o,l=Ye,f=()=>(l(),l=Ne(i,m=>t(10,o=m)),i);s.$$.on_destroy.push(()=>l());let{$$slots:h={},$$scope:r}=e;const n=x(Z());let{use:p=[]}=e,{class:E=""}=e,{topAppBar:d}=e,B,{component:T=Je}=e;function C(){return B.getElement()}function b(m){w[m?"unshift":"push"](()=>{B=m,t(4,B)})}return s.$$set=m=>{e=A(A({},e),v(m)),t(7,_=M(e,c)),"use"in m&&t(0,p=m.use),"class"in m&&t(1,E=m.class),"topAppBar"in m&&t(8,d=m.topAppBar),"component"in m&&t(2,T=m.component),"$$scope"in m&&t(13,r=m.$$scope)},s.$$.update=()=>{s.$$.dirty&256&&f(t(3,i=d&&d.getPropStore())),s.$$.dirty&1032&&t(5,u=(()=>!i||o.variant==="static"?"":o.variant==="short"?"mdc-top-app-bar--short-fixed-adjust":o.prominent&&o.dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":o.prominent?"mdc-top-app-bar--prominent-fixed-adjust":o.dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust")())},[p,E,T,i,B,u,n,_,d,C,o,h,b,r]}class tt extends H{constructor(e){super();N(this,e,et,$e,Y,{use:0,class:1,topAppBar:8,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const ut=we,ct=tt;export{ct as A,rt as R,ut as S,lt as T,it as a};
