import{S as y,i as z,s as A,e as E,t as v,c as d,a as b,h as N,d as o,g as u,H as P,j as R,k as H,l as q,m as S,N as C}from"./chunks/vendor-394a6f70.js";function h(r){let l,t=r[1].frame+"",a;return{c(){l=E("pre"),a=v(t)},l(f){l=d(f,"PRE",{});var s=b(l);a=N(s,t),s.forEach(o)},m(f,s){u(f,l,s),P(l,a)},p(f,s){s&2&&t!==(t=f[1].frame+"")&&R(a,t)},d(f){f&&o(l)}}}function w(r){let l,t=r[1].stack+"",a;return{c(){l=E("pre"),a=v(t)},l(f){l=d(f,"PRE",{});var s=b(l);a=N(s,t),s.forEach(o)},m(f,s){u(f,l,s),P(l,a)},p(f,s){s&2&&t!==(t=f[1].stack+"")&&R(a,t)},d(f){f&&o(l)}}}function B(r){let l,t,a,f,s=r[1].message+"",c,k,n,p,i=r[1].frame&&h(r),_=r[1].stack&&w(r);return{c(){l=E("h1"),t=v(r[0]),a=H(),f=E("pre"),c=v(s),k=H(),i&&i.c(),n=H(),_&&_.c(),p=q()},l(e){l=d(e,"H1",{});var m=b(l);t=N(m,r[0]),m.forEach(o),a=S(e),f=d(e,"PRE",{});var j=b(f);c=N(j,s),j.forEach(o),k=S(e),i&&i.l(e),n=S(e),_&&_.l(e),p=q()},m(e,m){u(e,l,m),P(l,t),u(e,a,m),u(e,f,m),P(f,c),u(e,k,m),i&&i.m(e,m),u(e,n,m),_&&_.m(e,m),u(e,p,m)},p(e,[m]){m&1&&R(t,e[0]),m&2&&s!==(s=e[1].message+"")&&R(c,s),e[1].frame?i?i.p(e,m):(i=h(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null),e[1].stack?_?_.p(e,m):(_=w(e),_.c(),_.m(p.parentNode,p)):_&&(_.d(1),_=null)},i:C,o:C,d(e){e&&o(l),e&&o(a),e&&o(f),e&&o(k),i&&i.d(e),e&&o(n),_&&_.d(e),e&&o(p)}}}function G({error:r,status:l}){return{props:{error:r,status:l}}}function D(r,l,t){let{status:a}=l,{error:f}=l;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,f=s.error)},[a,f]}class I extends y{constructor(l){super();z(this,l,D,B,A,{status:0,error:1})}}export{I as default,G as load};
