import{S as x,i as $,s as ee,a as I,k as v,q as G,J as te,h as d,c as T,l as g,m as M,r as N,n as m,p as z,b as j,H as i,L as J,u as le,C as F,O as se,N as w,K as Q,M as re}from"../../../chunks/index-dbeefb4d.js";function W(a,l,e){const c=a.slice();return c[9]=l[e],c[11]=e,c}function X(a){let l,e,c,s,h,n,u,k,_;function E(){return a[4](a[9])}function S(){return a[5](a[9])}return{c(){l=v("div"),e=v("img"),s=I(),h=v("img"),u=I(),this.h()},l(t){l=g(t,"DIV",{class:!0});var o=M(l);e=g(o,"IMG",{class:!0,src:!0,alt:!0}),s=T(o),h=g(o,"IMG",{class:!0,src:!0,alt:!0}),u=T(o),o.forEach(d),this.h()},h(){m(e,"class","front svelte-pnamr9"),w(e.src,c=a[9].img)||m(e,"src",c),m(e,"alt",""),m(h,"class","back svelte-pnamr9"),w(h.src,n="./kort.png")||m(h,"src",n),m(h,"alt",""),m(l,"class","card svelte-pnamr9"),Q(l,"flipped",a[9].flipped)},m(t,o){j(t,l,o),i(l,e),i(l,s),i(l,h),i(l,u),k||(_=[J(l,"click",E),J(l,"keypress",S)],k=!0)},p(t,o){a=t,o&2&&!w(e.src,c=a[9].img)&&m(e,"src",c),o&2&&Q(l,"flipped",a[9].flipped)},d(t){t&&d(l),k=!1,re(_)}}}function ae(a){let l,e,c,s,h,n,u,k,_,E,S,t,o,b,B,C,q,L,K,H=a[1],p=[];for(let r=0;r<H.length;r+=1)p[r]=X(W(a,H,r));return{c(){l=I(),e=v("a"),c=v("h1"),s=G("Home"),h=I(),n=v("main"),u=v("div");for(let r=0;r<p.length;r+=1)p[r].c();k=I(),_=v("div"),E=v("h1"),S=G("Score: "),t=G(a[0]),o=I(),b=v("button"),B=G("RESET"),C=I(),q=v("div"),this.h()},l(r){te("svelte-13cr5dy",document.head).forEach(d),l=T(r),e=g(r,"A",{href:!0,class:!0,style:!0});var f=M(e);c=g(f,"H1",{});var V=M(c);s=N(V,"Home"),V.forEach(d),f.forEach(d),h=T(r),n=g(r,"MAIN",{class:!0});var D=M(n);u=g(D,"DIV",{class:!0});var P=M(u);for(let R=0;R<p.length;R+=1)p[R].l(P);P.forEach(d),k=T(D),_=g(D,"DIV",{class:!0});var A=M(_);E=g(A,"H1",{class:!0});var O=M(E);S=N(O,"Score: "),t=N(O,a[0]),O.forEach(d),o=T(A),b=g(A,"BUTTON",{class:!0});var U=M(b);B=N(U,"RESET"),U.forEach(d),A.forEach(d),C=T(D),q=g(D,"DIV",{});var Z=M(q);Z.forEach(d),D.forEach(d),this.h()},h(){document.title="Memory Game",m(e,"href","/"),m(e,"class","homeBtn svelte-pnamr9"),z(e,"position","absolute"),z(e,"color","var(--text-color)"),m(u,"class","row svelte-pnamr9"),m(E,"class","svelte-pnamr9"),m(b,"class","svelte-pnamr9"),m(_,"class","score svelte-pnamr9"),m(n,"class","svelte-pnamr9")},m(r,y){j(r,l,y),j(r,e,y),i(e,c),i(c,s),j(r,h,y),j(r,n,y),i(n,u);for(let f=0;f<p.length;f+=1)p[f].m(u,null);i(n,k),i(n,_),i(_,E),i(E,S),i(E,t),i(_,o),i(_,b),i(b,B),i(n,C),i(n,q),L||(K=J(b,"click",a[6]),L=!0)},p(r,[y]){if(y&6){H=r[1];let f;for(f=0;f<H.length;f+=1){const V=W(r,H,f);p[f]?p[f].p(V,y):(p[f]=X(V),p[f].c(),p[f].m(u,null))}for(;f<p.length;f+=1)p[f].d(1);p.length=H.length}y&1&&le(t,r[0])},i:F,o:F,d(r){r&&d(l),r&&d(e),r&&d(h),r&&d(n),se(p,r),L=!1,K()}}}function Y(a){for(var l=a.length-1;l>0;l--){var e=Math.floor(Math.random()*(l+1)),c=a[l];a[l]=a[e],a[e]=c}}function oe(a,l,e){let c=0,s=[],h=["banan.jpg","cactus.jpg","cherry.jpg","telphone.jpg"];for(let t=0;t<h.length*2;t++)s.push({id:t,img:h[Math.floor(t/2)],flipped:!1,completed:!1});Y(s);let n=0;function u(t){if(t.flipped=!0,n=n+1,t.flipped&&n<=2){for(var o=0;o<s.length;o++)if(s[o].flipped&&!s[o].completed&&s[o].id!==t.id){s[o].img===t.img?(e(0,c++,c),t.completed=!0,e(1,s[o].completed=!0,s)):setTimeout(()=>{t.flipped=!1,e(1,s[o].flipped=!1,s)},1e3);break}n==2&&setTimeout(()=>{s.forEach(b=>{b.flipped=b.completed}),n=0,e(1,s)},1500),e(1,s)}}function k(){for(let t=0;t<s.length;t++)e(1,s[t].completed=!1,s),e(1,s[t].flipped=!1,s),e(0,c=0);setTimeout(()=>{Y(s),e(1,s)},1001)}return[c,s,u,k,t=>{u(t)},t=>{u(t)},()=>k()]}class ne extends x{constructor(l){super(),$(this,l,oe,ae,ee,{})}}export{ne as default};
