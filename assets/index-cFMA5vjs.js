var He=Object.defineProperty;var Fe=(t,e,n)=>e in t?He(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var me=(t,e,n)=>(Fe(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function S(){}const Ve=t=>t;function xe(t,e){for(const n in e)t[n]=e[n];return t}function Me(t){return t()}function je(){return Object.create(null)}function ee(t){t.forEach(Me)}function Oe(t){return typeof t=="function"}function ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let oe;function fe(t,e){return t===e?!0:(oe||(oe=document.createElement("a")),oe.href=e,t===oe.href)}function Ke(t){return Object.keys(t).length===0}function Ge(t,...e){if(t==null){for(const r of e)r(void 0);return S}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ke(t,e,n){t.$$.on_destroy.push(Ge(e,n))}function re(t,e,n){return t.set(n),e}const Be=typeof window<"u";let Je=Be?()=>window.performance.now():()=>Date.now(),ze=Be?t=>requestAnimationFrame(t):S;const Y=new Set;function Te(t){Y.forEach(e=>{e.c(t)||(Y.delete(e),e.f())}),Y.size!==0&&ze(Te)}function Qe(t){let e;return Y.size===0&&ze(Te),{promise:new Promise(n=>{Y.add(e={c:t,f:n})}),abort(){Y.delete(e)}}}function o(t,e){t.appendChild(e)}function B(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function We(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function O(t){return document.createTextNode(t)}function L(){return O(" ")}function W(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function i(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Xe(t){return Array.from(t.childNodes)}function X(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ae(t,e){t.value=e??""}function we(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let se;function le(t){se=t}function Ye(){if(!se)throw new Error("Function called outside component initialization");return se}function Ze(t){Ye().$$.on_mount.push(t)}const Q=[],Ee=[];let Z=[];const Ce=[],et=Promise.resolve();let be=!1;function tt(){be||(be=!0,et.then(qe))}function ye(t){Z.push(t)}const _e=new Set;let G=0;function qe(){if(G!==0)return;const t=se;do{try{for(;G<Q.length;){const e=Q[G];G++,le(e),nt(e.$$)}}catch(e){throw Q.length=0,G=0,e}for(le(null),Q.length=0,G=0;Ee.length;)Ee.pop()();for(let e=0;e<Z.length;e+=1){const n=Z[e];_e.has(n)||(_e.add(n),n())}Z.length=0}while(Q.length);for(;Ce.length;)Ce.pop()();be=!1,_e.clear(),le(t)}function nt(t){if(t.fragment!==null){t.update(),ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ye)}}function rt(t){const e=[],n=[];Z.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Z=e}const ce=new Set;let V;function De(){V={r:0,c:[],p:V}}function Ne(){V.r||ee(V.c),V=V.p}function R(t,e){t&&t.i&&(ce.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(ce.has(t))return;ce.add(t),V.c.push(()=>{ce.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Le(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function $e(t){t&&t.c()}function de(t,e,n){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),ye(()=>{const s=t.$$.on_mount.map(Me).filter(Oe);t.$$.on_destroy?t.$$.on_destroy.push(...s):ee(s),t.$$.on_mount=[]}),l.forEach(ye)}function pe(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(Q.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function he(t,e,n,r,l,s,c=null,p=[-1]){const f=se;le(t);const u=t.$$={fragment:null,ctx:[],props:s,update:S,not_equal:l,bound:je(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:je(),dirty:p,skip_bound:!1,root:e.target||f.$$.root};c&&c(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(g,$,...a)=>{const w=a.length?a[0]:$;return u.ctx&&l(u.ctx[g],u.ctx[g]=w)&&(!u.skip_bound&&u.bound[g]&&u.bound[g](w),d&&lt(t,g)),$}):[],u.update(),d=!0,ee(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const g=Xe(e.target);u.fragment&&u.fragment.l(g),g.forEach(I)}else u.fragment&&u.fragment.c();e.intro&&R(t.$$.fragment),de(t,e.target,e.anchor),qe()}le(f)}class ge{constructor(){me(this,"$$");me(this,"$$set")}$destroy(){pe(this,1),this.$destroy=S}$on(e,n){if(!Oe(n))return S;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const st="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(st);function it(t){let e,n,r,l,s,c,p,f,u,d,g,$,a,w,E,x,A,C,M,T;return{c(){e=h("div"),n=h("p"),n.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg>
    fill-in to continue`,r=L(),l=h("div"),s=h("div"),c=h("input"),p=L(),f=h("button"),f.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline rounded-full"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"></path></svg>',u=L(),d=h("p"),d.textContent="copy your profile link from your spotify account page",g=L(),$=h("div"),a=h("label"),w=h("input"),E=L(),x=h("span"),x.textContent="persist",A=L(),C=h("button"),C.textContent="continue",i(n,"class","text-2xl"),i(c,"type","text"),i(c,"class","w-full"),i(c,"placeholder","spotify profile link"),i(f,"class","bg-zinc-500"),i(s,"class","w-full flex flex-row items-center justify-center space-x-2"),i(d,"class","text-sm"),i(l,"class","flex flex-col items-center justify-center"),i(w,"type","checkbox"),i(w,"class","inline"),i(x,"class","align-middle"),i(a,"for","persisting userid"),i(a,"class","text-base flex flex-row space-x-2 bg-gray-950 p-3 rounded-md"),i(C,"class","hover:scale-110"),i($,"class","flex flex-row items-center justify-center space-x-3"),i(e,"class","flex flex-col items-center text-center justify-center bg-aodFg ring-2 ring-zinc-500 rounded-md w-11/12 py-5 space-y-7 px-5")},m(m,v){B(m,e,v),o(e,n),o(e,r),o(e,l),o(l,s),o(s,c),Ae(c,t[0]),o(s,p),o(s,f),o(l,u),o(l,d),o(e,g),o(e,$),o($,a),o(a,w),w.checked=t[1],o(a,E),o(a,x),o($,A),o($,C),M||(T=[W(c,"input",t[5]),W(f,"click",t[2]),W(w,"change",t[6]),W(C,"click",t[3])],M=!0)},p(m,[v]){v&1&&c.value!==m[0]&&Ae(c,m[0]),v&2&&(w.checked=m[1])},i:S,o:S,d(m){m&&I(e),M=!1,ee(T)}}}function ot(t,e,n){Ze(()=>{const d=localStorage.getItem("cartier-userid");d&&r(d)});let{handleUsername:r}=e,l="",s=!0;const c=async()=>{navigator.clipboard.readText&&n(0,l=await navigator.clipboard.readText())},p=()=>{let d;try{d=new URL(l)}catch{n(0,l="");return}const g=d.pathname.split("/")[2];s&&localStorage.setItem("cartier-userid",g),r(g)};function f(){l=this.value,n(0,l)}function u(){s=this.checked,n(1,s)}return t.$$set=d=>{"handleUsername"in d&&n(4,r=d.handleUsername)},[l,s,c,p,r,f,u]}class ct extends ge{constructor(e){super(),he(this,e,ot,it,ie,{handleUsername:4})}}const J=[];function Re(t,e=S){let n;const r=new Set;function l(p){if(ie(t,p)&&(t=p,n)){const f=!J.length;for(const u of r)u[1](),J.push(u,t);if(f){for(let u=0;u<J.length;u+=2)J[u][0](J[u+1]);J.length=0}}}function s(p){l(p(t))}function c(p,f=S){const u=[p,f];return r.add(u),r.size===1&&(n=e(l,s)||S),p(t),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:l,update:s,subscribe:c}}function Pe(t){return Object.prototype.toString.call(t)==="[object Date]"}function ut(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function ve(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((l,s)=>ve(t[s],l));return l=>r.map(s=>s(l))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(Pe(t)&&Pe(e)){t=t.getTime(),e=e.getTime();const s=e-t;return c=>new Date(t+c*s)}const r=Object.keys(e),l={};return r.forEach(s=>{l[s]=ve(t[s],e[s])}),s=>{const c={};return r.forEach(p=>{c[p]=l[p](s)}),c}}if(n==="number"){const r=e-t;return l=>t+l*r}throw new Error(`Cannot interpolate ${n} values`)}function at(t,e={}){const n=Re(t);let r,l=t;function s(c,p){if(t==null)return n.set(t=c),Promise.resolve();l=c;let f=r,u=!1,{delay:d=0,duration:g=400,easing:$=Ve,interpolate:a=ve}=xe(xe({},e),p);if(g===0)return f&&(f.abort(),f=null),n.set(t=l),Promise.resolve();const w=Je()+d;let E;return r=Qe(x=>{if(x<w)return!0;u||(E=a(t,c),typeof g=="function"&&(g=g(t,c)),u=!0),f&&(f.abort(),f=null);const A=x-w;return A>g?(n.set(t=c),!1):(n.set(t=E($(A/g))),!0)}),r.promise}return{set:s,update:(c,p)=>s(c(l,t),p),subscribe:n.subscribe}}let ne;ne="https://reold-cartier.glitch.me";const ue={getUserInfo:async t=>await(await fetch(`${ne}/user?username=${t}`)).json(),getPlaylistInfo:async t=>await(await fetch(`${ne}/playlist?id=${t}`)).json(),getDownloadPlaylist:async t=>await(await fetch(`${ne}/download?link=${t}`)).json(),getStreamPlaylist:async t=>{let e=await fetch(`${ne}/stream?unique_code=${t}`);return[await e.ok,await e.blob()]}};function ft(t){let e,n;return{c(){e=F("svg"),n=F("path"),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(n,"d","M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","1.5"),i(e,"stroke","currentColor"),i(e,"class","w-[10vh] h-[10vh]")},m(r,l){B(r,e,l),o(e,n)},p:S,d(r){r&&I(e)}}}function dt(t){let e,n;return{c(){e=h("img"),fe(e.src,n=t[0].images[0].url)||i(e,"src",n),i(e,"class","rounded-full max-h-[10vh]"),i(e,"alt","playlist's cover")},m(r,l){B(r,e,l)},p(r,l){l&1&&!fe(e.src,n=r[0].images[0].url)&&i(e,"src",n)},d(r){r&&I(e)}}}function pt(t){let e;return{c(){e=O("download")},m(n,r){B(n,e,r)},d(n){n&&I(e)}}}function ht(t){let e;return{c(){e=O("downloaded")},m(n,r){B(n,e,r)},d(n){n&&I(e)}}}function gt(t){let e,n,r;return{c(){e=F("svg"),n=F("path"),r=O(`
            downloading`),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(n,"d","M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","1.5"),i(e,"stroke","currentColor"),i(e,"class","w-4 h-4 inline animate-spin")},m(l,s){B(l,e,s),o(e,n),B(l,r,s)},d(l){l&&(I(e),I(r))}}}function Ue(t){let e,n,r;return{c(){e=h("button"),e.textContent="save",i(e,"class","text-xs")},m(l,s){B(l,e,s),n||(r=W(e,"click",t[5]),n=!0)},p:S,d(l){l&&I(e),n=!1,r()}}}function mt(t){let e,n,r,l,s,c,p,f,u,d=t[0].name+"",g,$,a,w,E,x,A,C=t[0].description+"",M,T,m,v,P,te,H,z;function N(k,D){return k[0].images.length>0?dt:ft}let y=N(t),q=y(t);function _(k,D){return k[2]?gt:k[1].length>0?ht:pt}let j=_(t),b=j(t),U=t[1].length>0&&!t[2]&&Ue(t);return{c(){e=h("div"),n=h("div"),l=L(),s=h("div"),c=h("div"),q.c(),p=L(),f=h("div"),u=h("a"),g=O(d),$=L(),a=F("svg"),w=F("path"),x=L(),A=h("p"),M=O(C),T=L(),m=h("div"),v=h("button"),b.c(),te=L(),U&&U.c(),i(n,"class","h-full absolute backdrop-invert brightness-50 left-0 top-0 rounded-md"),we(n,"width",t[3]/100*90+"vw"),n.hidden=r=!t[2],i(c,"class","col-span-1"),i(w,"stroke-linecap","round"),i(w,"stroke-linejoin","round"),i(w,"d","M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"),i(a,"xmlns","http://www.w3.org/2000/svg"),i(a,"fill","none"),i(a,"viewBox","0 0 24 24"),i(a,"stroke-width","1.5"),i(a,"stroke","currentColor"),i(a,"class","w-4 h-4 inline"),i(u,"class","hover:scale-110 duration-75 text-left line-clamp-1"),i(u,"href",E=t[0].external_urls.spotify),i(u,"target","_blank"),i(A,"class","text-xs line-clamp-1"),i(v,"class","text-xs bg-aodPurple"),v.disabled=P=t[2]||t[1].length>0,i(f,"class","col-span-2 flex flex-col justify-center items-start"),i(s,"class","grid grid-cols-3 w-full gap-2 p-2"),i(e,"class","bg-gray-950 ring-2 ring-zinc-500 p-2 rounded-md w-[90vw] text-center relative")},m(k,D){B(k,e,D),o(e,n),o(e,l),o(e,s),o(s,c),q.m(c,null),o(s,p),o(s,f),o(f,u),o(u,g),o(u,$),o(u,a),o(a,w),o(f,x),o(f,A),o(A,M),o(f,T),o(f,m),o(m,v),b.m(v,null),o(m,te),U&&U.m(m,null),H||(z=W(v,"click",t[6]),H=!0)},p(k,[D]){D&8&&we(n,"width",k[3]/100*90+"vw"),D&4&&r!==(r=!k[2])&&(n.hidden=r),y===(y=N(k))&&q?q.p(k,D):(q.d(1),q=y(k),q&&(q.c(),q.m(c,null))),D&1&&d!==(d=k[0].name+"")&&X(g,d),D&1&&E!==(E=k[0].external_urls.spotify)&&i(u,"href",E),D&1&&C!==(C=k[0].description+"")&&X(M,C),j!==(j=_(k))&&(b.d(1),b=j(k),b&&(b.c(),b.m(v,null))),D&6&&P!==(P=k[2]||k[1].length>0)&&(v.disabled=P),k[1].length>0&&!k[2]?U?U.p(k,D):(U=Ue(k),U.c(),U.m(m,null)):U&&(U.d(1),U=null)},i:S,o:S,d(k){k&&I(e),q.d(),b.d(),U&&U.d(),H=!1,z()}}}function _t(t,e,n){let r,l=[],{track:s}=e,c=!1,p=at(0,{duration:100,easing:ut});ke(t,p,d=>n(3,r=d));const f=()=>{l.forEach((d,g)=>{const $=URL.createObjectURL(d),a=document.createElement("a");a.href=$,a.download=`${s.name}-${g+1}.mp3`,a.click()})},u=()=>{n(2,c=!0);const d=s.external_urls.spotify,$=new URL(d).pathname.split("/")[2];let a=0;p.set(25,{duration:1e4}),ue.getPlaylistInfo($).then(w=>{a=w.tracks.total,re(p,r=25,r);const E=a*20+.001;a>20&&alert(`There are ${a} tracks in the playlist. It will take about ${E/60} minutes`),p.set(50,{duration:E*1e3}),ue.getDownloadPlaylist(d).then(async x=>{re(p,r=50,r),p.set(75,{duration:1e4});for(let A=0;A<a;A++){let[C,M]=await ue.getStreamPlaylist(x.data.unique_code);if(re(p,r=75+A/a*25,r),!C){alert("something went wrong");return}n(1,l=[...l,M])}n(2,c=!1)})})};return t.$$set=d=>{"track"in d&&n(0,s=d.track)},[s,l,c,r,p,f,u]}class wt extends ge{constructor(e){super(),he(this,e,_t,mt,ie,{track:0})}}const ae=Re({loggedIn:!1,user:{},playlists:{}});function Se(t,e,n){const r=t.slice();return r[1]=e[n],r}function bt(t){let e,n;return{c(){e=F("svg"),n=F("path"),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(n,"d","M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","1.5"),i(e,"stroke","currentColor"),i(e,"class","w-[10vh] h-[10vh] rounded-full ring-aodBg ring-4")},m(r,l){B(r,e,l),o(e,n)},p:S,d(r){r&&I(e)}}}function yt(t){let e,n,r;return{c(){e=h("img"),fe(e.src,n=t[0].user.images[1].url)||i(e,"src",n),i(e,"alt",r=`${t[0].user.display_name}'s profile picture`),i(e,"class","rounded-full h-[10vh] ring-aodBg ring-4")},m(l,s){B(l,e,s)},p(l,s){s&1&&!fe(e.src,n=l[0].user.images[1].url)&&i(e,"src",n),s&1&&r!==(r=`${l[0].user.display_name}'s profile picture`)&&i(e,"alt",r)},d(l){l&&I(e)}}}function Ie(t){let e,n;return e=new wt({props:{track:t[1]}}),{c(){$e(e.$$.fragment)},m(r,l){de(e,r,l),n=!0},p(r,l){const s={};l&1&&(s.track=r[1]),e.$set(s)},i(r){n||(R(e.$$.fragment,r),n=!0)},o(r){K(e.$$.fragment,r),n=!1},d(r){pe(e,r)}}}function vt(t){let e,n,r,l,s,c=t[0].user.display_name+"",p,f,u,d=t[0].user.followers.total+"",g,$,a=t[0].playlists.total+"",w,E,x,A,C=t[0].user.id+"",M,T,m,v,P;function te(_,j){return _[0].user.images.length==2?yt:bt}let H=te(t),z=H(t),N=Le(t[0].playlists.items),y=[];for(let _=0;_<N.length;_+=1)y[_]=Ie(Se(t,N,_));const q=_=>K(y[_],1,1,()=>{y[_]=null});return{c(){e=h("div"),n=h("div"),z.c(),r=L(),l=h("div"),s=h("p"),p=O(c),f=L(),u=h("p"),g=O(d),$=O(" followers, "),w=O(a),E=O(" playlists"),x=L(),A=h("p"),M=O(C),T=L(),m=h("div"),v=h("div");for(let _=0;_<y.length;_+=1)y[_].c();i(s,"class","font-semibold"),we(s,"text-shadow","4px 3px 8px rgba(0,0,0,1)"),i(u,"class","text-xs"),i(A,"class","text-xs"),i(l,"class","flex flex-col justify-center items-start"),i(n,"class","flex flex-row justify-center items-center h-[15vh] space-x-4 bg-gray-500 w-[90vw] rounded-t-xl ring-2 ring-zinc-500 py-5"),i(v,"class","flex flex-col justify-center items-center w-full space-y-2 pb-1"),i(m,"class","h-[65vh] overflow-y-scroll w-[100vw]"),i(e,"class","flex flex-col items-center space-y--2")},m(_,j){B(_,e,j),o(e,n),z.m(n,null),o(n,r),o(n,l),o(l,s),o(s,p),o(l,f),o(l,u),o(u,g),o(u,$),o(u,w),o(u,E),o(l,x),o(l,A),o(A,M),o(e,T),o(e,m),o(m,v);for(let b=0;b<y.length;b+=1)y[b]&&y[b].m(v,null);P=!0},p(_,[j]){if(H===(H=te(_))&&z?z.p(_,j):(z.d(1),z=H(_),z&&(z.c(),z.m(n,r))),(!P||j&1)&&c!==(c=_[0].user.display_name+"")&&X(p,c),(!P||j&1)&&d!==(d=_[0].user.followers.total+"")&&X(g,d),(!P||j&1)&&a!==(a=_[0].playlists.total+"")&&X(w,a),(!P||j&1)&&C!==(C=_[0].user.id+"")&&X(M,C),j&1){N=Le(_[0].playlists.items);let b;for(b=0;b<N.length;b+=1){const U=Se(_,N,b);y[b]?(y[b].p(U,j),R(y[b],1)):(y[b]=Ie(U),y[b].c(),R(y[b],1),y[b].m(v,null))}for(De(),b=N.length;b<y.length;b+=1)q(b);Ne()}},i(_){if(!P){for(let j=0;j<N.length;j+=1)R(y[j]);P=!0}},o(_){y=y.filter(Boolean);for(let j=0;j<y.length;j+=1)K(y[j]);P=!1},d(_){_&&I(e),z.d(),We(y,_)}}}function kt(t,e,n){let r;return ke(t,ae,l=>n(0,r=l)),console.log(r),[r]}class $t extends ge{constructor(e){super(),he(this,e,kt,vt,ie,{})}}function xt(t){let e,n;return e=new $t({}),{c(){$e(e.$$.fragment)},m(r,l){de(e,r,l),n=!0},p:S,i(r){n||(R(e.$$.fragment,r),n=!0)},o(r){K(e.$$.fragment,r),n=!1},d(r){pe(e,r)}}}function jt(t){let e,n;return e=new ct({props:{handleUsername:t[1]}}),{c(){$e(e.$$.fragment)},m(r,l){de(e,r,l),n=!0},p:S,i(r){n||(R(e.$$.fragment,r),n=!0)},o(r){K(e.$$.fragment,r),n=!1},d(r){pe(e,r)}}}function At(t){let e;return{c(){e=h("span"),e.textContent="PROD",i(e,"class","rounded-sm p-0.5 bg-blue-600")},m(n,r){B(n,e,r)},d(n){n&&I(e)}}}function Et(t){let e,n,r,l,s,c,p,f,u,d,g,$,a,w;const E=[jt,xt],x=[];function A(m,v){return m[0].loggedIn==!1?0:1}s=A(t),c=x[s]=E[s](t);function C(m,v){return At}let T=C()(t);return{c(){e=h("main"),n=h("div"),n.innerHTML='<div class="bg-aodPurple shadow-sm shadow-gray-950 rounded-b-md p-2 ml-2 h-full flex flex-col items-center justify-center"><span>reold&#39;s</span></div> <p class="text-3xl">Cartier Manager</p>',r=L(),l=h("div"),c.c(),p=L(),f=h("div"),u=h("p"),T.c(),d=O(`
      Built with ❤️ by
      `),g=h("a"),g.textContent="reold",$=O(`.
      `),a=h("a"),a.textContent="Report an error",i(n,"class","flex flex-row items-center justify-evenly font-bold h-[10vh] pb-2 bg-gray-950 ring-2 ring-zinc-500 shadow-xl"),i(l,"class","w-full flex flex-col items-center justify-center h-[85vh] bg-gradient-to-t from-gray-950 via-aodBg to-aodBg"),i(g,"href","https://github.com/reold"),i(g,"target","_blank"),i(g,"class","text-blue-600"),i(a,"href","https://x.com/redicrafty"),i(a,"target","_blank"),i(a,"class","text-blue-600"),i(f,"class","w-full h-[5vh] bg-gray-950 text-sm flex flex-col items-center justify-center"),i(e,"class","w-screen h-screen text-white text-xl select-none")},m(m,v){B(m,e,v),o(e,n),o(e,r),o(e,l),x[s].m(l,null),o(e,p),o(e,f),o(f,u),T.m(u,null),o(u,d),o(u,g),o(u,$),o(u,a),w=!0},p(m,[v]){let P=s;s=A(m),s===P?x[s].p(m,v):(De(),K(x[P],1,1,()=>{x[P]=null}),Ne(),c=x[s],c?c.p(m,v):(c=x[s]=E[s](m),c.c()),R(c,1),c.m(l,null))},i(m){w||(R(c),w=!0)},o(m){K(c),w=!1},d(m){m&&I(e),x[s].d(),T.d()}}}function Ct(t,e,n){let r;return ke(t,ae,s=>n(0,r=s)),[r,s=>{ue.getUserInfo(s).then(c=>{if(c.success==!1){alert("something went wrong!");return}re(ae,r={...c.data},r),re(ae,r.loggedIn=!0,r)})}]}class Lt extends ge{constructor(e){super(),he(this,e,Ct,Et,ie,{})}}new Lt({target:document.getElementById("app")});