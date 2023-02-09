import{S as se,i as ne,s as ie,k as y,a as w,q as O,K as oe,l as E,h as a,c as H,m as I,r as P,n as m,p as A,H as u,b as U,O as G,L as S,C as ee,N as ae,M as ce,u as re}from"../../../chunks/index-539a10cc.js";function te(l,e,n){const t=l.slice();return t[11]=e[n],t[12]=e,t[13]=n,t}function ue(l){let e,n,t,r=l[11].content+"",o,s,c;function L(){l[7].call(e,l[12],l[13])}return{c(){e=y("input"),n=w(),t=y("h4"),o=O(r),this.h()},l(f){e=E(f,"INPUT",{type:!0,class:!0}),n=H(f),t=E(f,"H4",{style:!0,class:!0});var d=I(t);o=P(d,r),d.forEach(a),this.h()},h(){m(e,"type","checkbox"),m(e,"class","checked"),A(t,"flex-grow","1"),m(t,"class","svelte-e1s8im")},m(f,d){U(f,e,d),e.checked=l[11].checked,U(f,n,d),U(f,t,d),u(t,o),s||(c=S(e,"change",L),s=!0)},p(f,d){l=f,d&1&&(e.checked=l[11].checked),d&1&&r!==(r=l[11].content+"")&&re(o,r)},d(f){f&&a(e),f&&a(n),f&&a(t),s=!1,c()}}}function de(l){let e,n,t;function r(){l[6].call(e,l[12],l[13])}return{c(){e=y("input"),this.h()},l(o){e=E(o,"INPUT",{type:!0,class:!0}),this.h()},h(){m(e,"type","text"),m(e,"class","editing svelte-e1s8im")},m(o,s){U(o,e,s),G(e,l[11].content),n||(t=S(e,"input",r),n=!0)},p(o,s){l=o,s&1&&e.value!==l[11].content&&G(e,l[11].content)},d(o){o&&a(e),n=!1,t()}}}function he(l){let e,n,t,r;function o(){return l[9](l[13])}return{c(){e=y("button"),n=O("Edit"),this.h()},l(s){e=E(s,"BUTTON",{class:!0});var c=I(e);n=P(c,"Edit"),c.forEach(a),this.h()},h(){m(e,"class","editbutton svelte-e1s8im")},m(s,c){U(s,e,c),u(e,n),t||(r=S(e,"click",o),t=!0)},p(s,c){l=s},d(s){s&&a(e),t=!1,r()}}}function fe(l){let e,n,t,r;function o(){return l[8](l[13])}return{c(){e=y("button"),n=O("Save"),this.h()},l(s){e=E(s,"BUTTON",{class:!0});var c=I(e);n=P(c,"Save"),c.forEach(a),this.h()},h(){m(e,"class","savebutton svelte-e1s8im")},m(s,c){U(s,e,c),u(e,n),t||(r=S(e,"click",o),t=!0)},p(s,c){l=s},d(s){s&&a(e),t=!1,r()}}}function le(l){let e,n,t,r,o,s,c,L,f;function d(g,p){return g[11].editing?de:ue}let k=d(l),v=k(l);function B(g,p){return g[11].editing?fe:he}let _=B(l),h=_(l);function M(){return l[10](l[13])}return{c(){e=y("div"),v.c(),n=w(),t=y("div"),h.c(),r=w(),o=y("button"),s=O("Delete"),c=w(),this.h()},l(g){e=E(g,"DIV",{style:!0});var p=I(e);v.l(p),n=H(p),t=E(p,"DIV",{style:!0});var N=I(t);h.l(N),r=H(N),o=E(N,"BUTTON",{class:!0});var q=I(o);s=P(q,"Delete"),q.forEach(a),N.forEach(a),c=H(p),p.forEach(a),this.h()},h(){m(o,"class","deletebutton svelte-e1s8im"),A(t,"display","flex"),A(e,"display","flex"),A(e,"align-items","baseline"),A(e,"width","700px"),A(e,"margin","0 auto")},m(g,p){U(g,e,p),v.m(e,null),u(e,n),u(e,t),h.m(t,null),u(t,r),u(t,o),u(o,s),u(e,c),L||(f=S(o,"click",M),L=!0)},p(g,p){l=g,k===(k=d(l))&&v?v.p(l,p):(v.d(1),v=k(l),v&&(v.c(),v.m(e,n))),_===(_=B(l))&&h?h.p(l,p):(h.d(1),h=_(l),h&&(h.c(),h.m(t,r)))},d(g){g&&a(e),v.d(),h.d(),L=!1,f()}}}function _e(l){let e,n,t,r,o,s,c,L,f,d,k,v,B,_,h,M,g,p,N,q,V,J,Q,R,X,C=l[0],T=[];for(let i=0;i<C.length;i+=1)T[i]=le(te(l,C,i));return{c(){e=y("link"),n=w(),t=y("title"),r=O("Todo App"),o=w(),s=y("div"),c=y("a"),L=O("Home"),f=w(),d=y("main"),k=y("div"),v=y("h2"),B=O("To-do List"),_=w(),h=y("p"),M=O("Enter your To-do here:"),g=w(),p=y("div"),N=y("input"),q=w(),V=y("button"),J=O("Add"),Q=w();for(let i=0;i<T.length;i+=1)T[i].c();this.h()},l(i){const D=oe("svelte-oawlkc",document.head);e=E(D,"LINK",{rel:!0,href:!0}),D.forEach(a),n=H(i),t=E(i,"TITLE",{class:!0});var b=I(t);r=P(b,"Todo App"),b.forEach(a),o=H(i),s=E(i,"DIV",{class:!0});var j=I(s);c=E(j,"A",{href:!0,class:!0});var Y=I(c);L=P(Y,"Home"),Y.forEach(a),j.forEach(a),f=H(i),d=E(i,"MAIN",{class:!0});var z=I(d);k=E(z,"DIV",{class:!0,style:!0});var K=I(k);v=E(K,"H2",{style:!0,class:!0});var Z=I(v);B=P(Z,"To-do List"),Z.forEach(a),_=H(K),h=E(K,"P",{class:!0});var $=I(h);M=P($,"Enter your To-do here:"),$.forEach(a),g=H(K),p=E(K,"DIV",{style:!0});var F=I(p);N=E(F,"INPUT",{type:!0,class:!0}),q=H(F),V=E(F,"BUTTON",{style:!0,class:!0});var x=I(V);J=P(x,"Add"),x.forEach(a),F.forEach(a),K.forEach(a),Q=H(z);for(let W=0;W<T.length;W+=1)T[W].l(z);z.forEach(a),this.h()},h(){m(e,"rel","stylesheet"),m(e,"href","https://unpkg.com/@picocss/pico@latest/css/pico.min.css"),m(t,"class","title"),m(c,"href","http://localhost:5173/"),m(c,"class","home svelte-e1s8im"),m(s,"class","home svelte-e1s8im"),A(v,"text-align","center"),m(v,"class","svelte-e1s8im"),m(h,"class","svelte-e1s8im"),m(N,"type","text"),m(N,"class","textinputbox svelte-e1s8im"),A(V,"width","200px"),m(V,"class","addbutton svelte-e1s8im"),A(p,"display","flex"),m(k,"class","main-div"),A(k,"margin","0 auto"),A(k,"padding","20px"),A(k,"width","700px"),m(d,"class","svelte-e1s8im")},m(i,D){u(document.head,e),U(i,n,D),U(i,t,D),u(t,r),U(i,o,D),U(i,s,D),u(s,c),u(c,L),U(i,f,D),U(i,d,D),u(d,k),u(k,v),u(v,B),u(k,_),u(k,h),u(h,M),u(k,g),u(k,p),u(p,N),G(N,l[1]),u(p,q),u(p,V),u(V,J),u(d,Q);for(let b=0;b<T.length;b+=1)T[b].m(d,null);R||(X=[S(N,"input",l[5]),S(V,"click",l[2])],R=!0)},p(i,[D]){if(D&2&&N.value!==i[1]&&G(N,i[1]),D&25){C=i[0];let b;for(b=0;b<C.length;b+=1){const j=te(i,C,b);T[b]?T[b].p(j,D):(T[b]=le(j),T[b].c(),T[b].m(d,null))}for(;b<T.length;b+=1)T[b].d(1);T.length=C.length}},i:ee,o:ee,d(i){a(e),i&&a(n),i&&a(t),i&&a(o),i&&a(s),i&&a(f),i&&a(d),ae(T,i),R=!1,ce(X)}}}function pe(l,e,n){let t=[],r="";function o(){n(0,t=[...t,{content:r,editing:!1,checked:!1}])}function s(_,h){n(0,t[_].editing=h,t)}function c(_){t.splice(_,1),n(0,t)}function L(){r=this.value,n(1,r)}function f(_,h){_[h].content=this.value,n(0,t)}function d(_,h){_[h].checked=this.checked,n(0,t)}return[t,r,o,s,c,L,f,d,_=>s(_,!1),_=>s(_,!0),_=>c(_)]}class ve extends se{constructor(e){super(),ne(this,e,pe,_e,ie,{})}}export{ve as default};