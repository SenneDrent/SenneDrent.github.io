import{S as re,i as se,s as ae,C as le,k as m,D as Q,a as D,l as g,m as d,E as W,h as c,c as H,n as e,b as te,F as r,G as oe,g as L,d as P,f as ne,H as ie,I as ce,J as fe,q as j,r as B,K as ue,L as X,v as de}from"../chunks/index.703bbfa5.js";const he=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:he},Symbol.toStringTag,{value:"Module"}));function ve(h){const s=h-1;return s*s*s+1}function Y(h){return h===1?h:1-Math.pow(2,-10*h)}function Z(h,{delay:s=0,duration:a=400,easing:l=ve,x:o=0,y:n=0,opacity:b=0}={}){const f=getComputedStyle(h),_=+f.opacity,E=f.transform==="none"?"":f.transform,p=_*(1-b);return{delay:s,duration:a,easing:l,css:(y,C)=>`
			transform: ${E} translate(${(1-y)*o}px, ${(1-y)*n}px);
			opacity: ${_-p*C}`}}function ee(h){let s,a,l,o,n,b,f,_,E,p,y,C,t,S,v,i,u,x,V,z,w,I,$,T;return{c(){s=m("header"),a=m("div"),l=m("nav"),o=m("a"),n=j("Start"),b=D(),f=m("a"),_=j("Hi-Horizon racing team"),E=D(),p=m("a"),y=j("Contact Info"),C=D(),t=m("div"),S=m("p"),v=j("this website is made with:"),i=D(),u=m("div"),x=m("a"),V=j("Svelte"),z=D(),w=m("a"),I=j("TailwindCSS"),this.h()},l(k){s=g(k,"HEADER",{class:!0});var O=d(s);a=g(O,"DIV",{class:!0});var M=d(a);l=g(M,"NAV",{class:!0});var A=d(l);o=g(A,"A",{href:!0,class:!0});var F=d(o);n=B(F,"Start"),F.forEach(c),b=H(A),f=g(A,"A",{href:!0,class:!0});var G=d(f);_=B(G,"Hi-Horizon racing team"),G.forEach(c),E=H(A),p=g(A,"A",{href:!0,class:!0});var J=d(p);y=B(J,"Contact Info"),J.forEach(c),A.forEach(c),C=H(M),t=g(M,"DIV",{class:!0});var N=d(t);S=g(N,"P",{});var K=d(S);v=B(K,"this website is made with:"),K.forEach(c),i=H(N),u=g(N,"DIV",{class:!0});var q=d(u);x=g(q,"A",{target:!0,rel:!0,href:!0,class:!0});var R=d(x);V=B(R,"Svelte"),R.forEach(c),z=H(q),w=g(q,"A",{target:!0,rel:!0,href:!0,class:!0});var U=d(w);I=B(U,"TailwindCSS"),U.forEach(c),q.forEach(c),N.forEach(c),M.forEach(c),O.forEach(c),this.h()},h(){e(o,"href","/"),e(o,"class","hover:text-red"),e(f,"href","/#HiHorizonContainer"),e(f,"class","hover:text-red"),e(p,"href","/#contactContainer"),e(p,"class","hover:text-red"),e(l,"class","flex flex-grow flex-col space-y-4"),e(x,"target","_blank"),e(x,"rel","noopener noreferrer"),e(x,"href","https://svelte.dev"),e(x,"class","hover:text-red"),e(w,"target","_blank"),e(w,"rel","noopener noreferrer"),e(w,"href","https://tailwindcss.com"),e(w,"class","hover:text-red"),e(u,"class","flex justify-around"),e(t,"class","text-sm text-bold space-y-2"),e(a,"class","flex flex-col flex-grow bg-green text-redBlack p-3 pt-16 m-3"),e(s,"class","sticky flex top-0 z-20 h-screen")},m(k,O){te(k,s,O),r(s,a),r(a,l),r(l,o),r(o,n),r(l,b),r(l,f),r(f,_),r(l,E),r(l,p),r(p,y),r(a,C),r(a,t),r(t,S),r(S,v),r(t,i),r(t,u),r(u,x),r(x,V),r(u,z),r(u,w),r(w,I),T=!0},p(k,O){},i(k){T||(k&&ue(()=>{$||($=X(s,Z,{duration:150,opacity:1,easing:Y,x:-150},!0)),$.run(1)}),T=!0)},o(k){k&&($||($=X(s,Z,{duration:150,opacity:1,easing:Y,x:-150},!1)),$.run(0)),T=!1},d(k){k&&c(s),k&&$&&$.end()}}}function _e(h){let s,a,l,o,n,b,f,_,E,p,y,C,t=h[0]===!1&&ee();const S=h[3].default,v=le(S,h,h[2],null);return{c(){s=m("div"),a=m("div"),l=m("div"),o=m("button"),n=Q("svg"),b=Q("path"),f=D(),_=m("div"),t&&t.c(),E=D(),v&&v.c(),this.h()},l(i){s=g(i,"DIV",{class:!0});var u=d(s);a=g(u,"DIV",{class:!0});var x=d(a);l=g(x,"DIV",{class:!0});var V=d(l);o=g(V,"BUTTON",{id:!0,class:!0});var z=d(o);n=W(z,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var w=d(n);b=W(w,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),d(b).forEach(c),w.forEach(c),z.forEach(c),V.forEach(c),f=H(x),_=g(x,"DIV",{class:!0});var I=d(_);t&&t.l(I),E=H(I),v&&v.l(I),I.forEach(c),x.forEach(c),u.forEach(c),this.h()},h(){e(b,"stroke-linecap","round"),e(b,"stroke-linejoin","round"),e(b,"d","M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"),e(n,"xmlns","http://www.w3.org/2000/svg"),e(n,"fill","none"),e(n,"viewBox","0 0 24 24"),e(n,"stroke-width","1.5"),e(n,"stroke","currentColor"),e(n,"class","w-6 h-6 hover:stroke-red"),e(o,"id","burger"),e(o,"class","absolute top-0 p-5 z-50 bg-transparent"),e(l,"class","sticky top-0 z-50 bg-transparent"),e(_,"class","flex items-stretch"),e(a,"class","min-h-screen min-w-screen bg-white dark:bg-mainSand dark:text-stone-200 font-extrabold"),e(s,"class","")},m(i,u){te(i,s,u),r(s,a),r(a,l),r(l,o),r(o,n),r(n,b),r(a,f),r(a,_),t&&t.m(_,null),r(_,E),v&&v.m(_,null),p=!0,y||(C=oe(o,"click",h[1]),y=!0)},p(i,[u]){i[0]===!1?t?(t.p(i,u),u&1&&L(t,1)):(t=ee(),t.c(),L(t,1),t.m(_,E)):t&&(de(),P(t,1,1,()=>{t=null}),ne()),v&&v.p&&(!p||u&4)&&ie(v,S,i,i[2],p?fe(S,i[2],u,null):ce(i[2]),null)},i(i){p||(L(t),L(v,i),p=!0)},o(i){P(t),P(v,i),p=!1},d(i){i&&c(s),t&&t.d(),v&&v.d(i),y=!1,C()}}}function pe(h,s,a){let{$$slots:l={},$$scope:o}=s,n=!0;function b(){a(0,n=!n)}return h.$$set=f=>{"$$scope"in f&&a(2,o=f.$$scope)},[n,b,o,l]}class be extends re{constructor(s){super(),se(this,s,pe,_e,ae,{})}}export{be as component,ge as universal};