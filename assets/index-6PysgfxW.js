var ct=Object.defineProperty;var ut=(t,e,n)=>e in t?ct(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ie=(t,e,n)=>(ut(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function B(){}const ft=t=>t;function Pe(t,e){for(const n in e)t[n]=e[n];return t}function Qe(t){return t()}function Te(){return Object.create(null)}function se(t){t.forEach(Qe)}function Xe(t){return typeof t=="function"}function ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let je;function pe(t,e){return t===e?!0:(je||(je=document.createElement("a")),je.href=e,t===je.href)}function dt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null){for(const l of e)l(void 0);return B}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ae(t,e,n){t.$$.on_destroy.push(pt(e,n))}function gt(t,e,n,l){if(t){const r=Ye(t,e,n,l);return t[0](r)}}function Ye(t,e,n,l){return t[1]&&l?Pe(n.ctx.slice(),t[1](l(e))):n.ctx}function ht(t,e,n,l){if(t[2]&&l){const r=t[2](l(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],a=Math.max(e.dirty.length,r.length);for(let c=0;c<a;c+=1)s[c]=e.dirty[c]|r[c];return s}return e.dirty|r}return e.dirty}function mt(t,e,n,l,r,s){if(r){const a=Ye(e,n,l,s);t.p(a,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function G(t,e,n){return t.set(n),e}const Ze=typeof window<"u";let wt=Ze?()=>window.performance.now():()=>Date.now(),et=Ze?t=>requestAnimationFrame(t):B;const fe=new Set;function tt(t){fe.forEach(e=>{e.c(t)||(fe.delete(e),e.f())}),fe.size!==0&&et(tt)}function bt(t){let e;return fe.size===0&&et(tt),{promise:new Promise(n=>{fe.add(e={c:t,f:n})}),abort(){fe.delete(e)}}}function u(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function L(){return z(" ")}function lt(){return z("")}function Z(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function i(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return Array.from(t.childNodes)}function ee(t,e){e=""+e,t.data!==e&&(t.data=e)}function qe(t,e){t.value=e??""}function ge(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function De(t,e,n){t.classList.toggle(e,!!n)}let ye;function ve(t){ye=t}function kt(){if(!ye)throw new Error("Function called outside component initialization");return ye}function rt(t){kt().$$.on_mount.push(t)}const ue=[],Me=[];let de=[];const Ne=[],yt=Promise.resolve();let Se=!1;function xt(){Se||(Se=!0,yt.then(st))}function Oe(t){de.push(t)}const Ee=new Set;let ae=0;function st(){if(ae!==0)return;const t=ye;do{try{for(;ae<ue.length;){const e=ue[ae];ae++,ve(e),$t(e.$$)}}catch(e){throw ue.length=0,ae=0,e}for(ve(null),ue.length=0,ae=0;Me.length;)Me.pop()();for(let e=0;e<de.length;e+=1){const n=de[e];Ee.has(n)||(Ee.add(n),n())}de.length=0}while(ue.length);for(;Ne.length;)Ne.pop()();Se=!1,Ee.clear(),ve(t)}function $t(t){if(t.fragment!==null){t.update(),se(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Oe)}}function jt(t){const e=[],n=[];de.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),de=e}const Ce=new Set;let re;function it(){re={r:0,c:[],p:re}}function ot(){re.r||se(re.c),re=re.p}function K(t,e){t&&t.i&&(Ce.delete(t),t.i(e))}function J(t,e,n,l){if(t&&t.o){if(Ce.has(t))return;Ce.add(t),re.c.push(()=>{Ce.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function Le(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function xe(t){t&&t.c()}function he(t,e,n){const{fragment:l,after_update:r}=t.$$;l&&l.m(e,n),Oe(()=>{const s=t.$$.on_mount.map(Qe).filter(Xe);t.$$.on_destroy?t.$$.on_destroy.push(...s):se(s),t.$$.on_mount=[]}),r.forEach(Oe)}function me(t,e){const n=t.$$;n.fragment!==null&&(jt(n.after_update),se(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(t,e){t.$$.dirty[0]===-1&&(ue.push(t),xt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,l,r,s,a=null,c=[-1]){const d=ye;ve(t);const o=t.$$={fragment:null,ctx:[],props:s,update:B,not_equal:r,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Te(),dirty:c,skip_bound:!1,root:e.target||d.$$.root};a&&a(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(g,h,...k)=>{const m=k.length?k[0]:h;return o.ctx&&r(o.ctx[g],o.ctx[g]=m)&&(!o.skip_bound&&o.bound[g]&&o.bound[g](m),f&&Ct(t,g)),h}):[],o.update(),f=!0,se(o.before_update),o.fragment=l?l(o.ctx):!1,e.target){if(e.hydrate){const g=vt(e.target);o.fragment&&o.fragment.l(g),g.forEach(v)}else o.fragment&&o.fragment.c();e.intro&&K(t.$$.fragment),he(t,e.target,e.anchor),st()}ve(d)}class we{constructor(){Ie(this,"$$");Ie(this,"$$set")}$destroy(){me(this,1),this.$destroy=B}$on(e,n){if(!Xe(n))return B;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Mt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Mt);let Y;Y="https://reold-cartier.glitch.me";const le={getRoot:async()=>await(await fetch(`${Y}/`)).json(),getUserInfo:async t=>await(await fetch(`${Y}/user?username=${t}`)).json(),getPlaylistInfo:async t=>await(await fetch(`${Y}/playlist?id=${t}`)).json(),getDownloadPlaylist:async t=>await(await fetch(`${Y}/download?link=${t}`)).json(),getDownloadStatus:async t=>await(await fetch(`${Y}/status?key=${t}`)).json(),getDownloadTrack:async(t,e="",n=!1)=>await(await fetch(`${Y}/track?link=${t}&key=${e}&create=${n}`)).json(),getStreamPlaylist:async t=>{let e=await fetch(`${Y}/stream?key=${t}`);return[await e.ok,await e.blob()]}},ce=[];function Be(t,e=B){let n;const l=new Set;function r(c){if(ie(t,c)&&(t=c,n)){const d=!ce.length;for(const o of l)o[1](),ce.push(o,t);if(d){for(let o=0;o<ce.length;o+=2)ce[o][0](ce[o+1]);ce.length=0}}}function s(c){r(c(t))}function a(c,d=B){const o=[c,d];return l.add(o),l.size===1&&(n=e(r,s)||B),c(t),()=>{l.delete(o),l.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:a}}function Lt(t){let e,n,l;const r=t[2].default,s=gt(r,t,t[1],null);return{c(){e=p("div"),n=p("div"),s&&s.c(),i(n,"class","bg-gray-950 p-2 rounded-md ring-1 ring-zinc-500 max-w-[90vw]"),i(e,"class","absolute top-0 left-0 w-full h-full backdrop-blur-md flex flex-col items-center justify-center text-center text-xs"),ge(e,"visibility",t[0]?"hidden":"visible")},m(a,c){x(a,e,c),u(e,n),s&&s.m(n,null),l=!0},p(a,[c]){s&&s.p&&(!l||c&2)&&mt(s,r,a,a[1],l?ht(r,a[1],c,null):_t(a[1]),null),(!l||c&1)&&ge(e,"visibility",a[0]?"hidden":"visible")},i(a){l||(K(s,a),l=!0)},o(a){J(s,a),l=!1},d(a){a&&v(e),s&&s.d(a)}}}function At(t,e,n){let{$$slots:l={},$$scope:r}=e,{hidden:s=!1}=e;return t.$$set=a=>{"hidden"in a&&n(0,s=a.hidden),"$$scope"in a&&n(1,r=a.$$scope)},[s,r,l]}class It extends we{constructor(e){super(),_e(this,e,At,Lt,ie,{hidden:0})}}function He(t){let e,n;return{c(){e=H("svg"),n=H("path"),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(n,"d","M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","1.5"),i(e,"stroke","currentColor"),i(e,"class","aspect-square w-[1.2em] animate-spin inline")},m(l,r){x(l,e,r),u(e,n)},d(l){l&&v(e)}}}function Et(t){let e,n,l,r,s,a,c=t[0].step+"",d,o=t[0].is&&He();return{c(){e=p("h1"),e.textContent="Waking up servers!",n=L(),l=p("p"),l.textContent=`Our servers take a little break every 5 minutes when things quiet down.
    We're in the process of waking them up for you. It's automatic, so no need
    to stress!`,r=L(),s=p("p"),o&&o.c(),a=L(),d=z(c),i(e,"class","text-xl"),i(l,"class","text-xs text-gray-500 inline"),i(s,"class","inline"),De(s,"text-green-500",!t[0].is)},m(f,g){x(f,e,g),x(f,n,g),x(f,l,g),x(f,r,g),x(f,s,g),o&&o.m(s,null),u(s,a),u(s,d)},p(f,g){f[0].is?o||(o=He(),o.c(),o.m(s,a)):o&&(o.d(1),o=null),g&1&&c!==(c=f[0].step+"")&&ee(d,c),g&1&&De(s,"text-green-500",!f[0].is)},d(f){f&&(v(e),v(n),v(l),v(r),v(s)),o&&o.d()}}}function Pt(t){let e,n;return e=new It({props:{hidden:!t[0].is,$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){xe(e.$$.fragment)},m(l,r){he(e,l,r),n=!0},p(l,[r]){const s={};r&1&&(s.hidden=!l[0].is),r&5&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){n||(K(e.$$.fragment,l),n=!0)},o(l){J(e.$$.fragment,l),n=!1},d(l){me(e,l)}}}function St(t,e,n){let l;const r=Be({step:"trying to make contact",is:!0});return Ae(t,r,s=>n(0,l=s)),rt(()=>{G(r,l.step="waking up servers",l),le.getRoot().then(s=>{G(r,l.is=!1,l),G(r,l.step="servers are running!",l)}).catch(s=>{X(`unable to reach servers. err: ${s}`),G(r,l.step="servers unreachable (reload?)",l)})}),[l,r]}class Ot extends we{constructor(e){super(),_e(this,e,St,Pt,ie,{})}}function Ut(t){let e,n,l,r,s,a,c,d,o,f,g,h,k,m,y,E,I,P,S,j,O,U,R;return e=new Ot({}),{c(){xe(e.$$.fragment),n=L(),l=p("div"),r=p("p"),r.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg>
    fill-in to continue`,s=L(),a=p("div"),c=p("div"),d=p("input"),o=L(),f=p("button"),f.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline rounded-full"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"></path></svg>',g=L(),h=p("p"),h.textContent="copy your profile link from your spotify account page",k=L(),m=p("div"),y=p("label"),E=p("input"),I=L(),P=p("span"),P.textContent="persist",S=L(),j=p("button"),j.textContent="continue",i(r,"class","text-2xl"),i(d,"type","text"),i(d,"class","w-full"),i(d,"placeholder","spotify profile link"),i(f,"class","bg-zinc-500"),i(f,"aria-label","paste from clipboard"),i(c,"class","w-full flex flex-row items-center justify-center space-x-2"),i(h,"class","text-sm"),i(a,"class","flex flex-col items-center justify-center"),i(E,"type","checkbox"),i(E,"class","inline"),i(P,"class","align-middle"),i(y,"for","persisting userid"),i(y,"class","text-base flex flex-row space-x-2 bg-gray-950 p-3 rounded-md"),i(j,"class","hover:scale-110"),i(m,"class","flex flex-row items-center justify-center space-x-3"),i(l,"class","flex flex-col items-center text-center justify-center bg-aodFg ring-1 ring-zinc-500 rounded-md w-11/12 py-5 space-y-7 px-5")},m(M,$){he(e,M,$),x(M,n,$),x(M,l,$),u(l,r),u(l,s),u(l,a),u(a,c),u(c,d),qe(d,t[0]),u(c,o),u(c,f),u(a,g),u(a,h),u(l,k),u(l,m),u(m,y),u(y,E),E.checked=t[1],u(y,I),u(y,P),u(m,S),u(m,j),O=!0,U||(R=[Z(d,"input",t[5]),Z(f,"click",t[2]),Z(E,"change",t[6]),Z(j,"click",t[3])],U=!0)},p(M,[$]){$&1&&d.value!==M[0]&&qe(d,M[0]),$&2&&(E.checked=M[1])},i(M){O||(K(e.$$.fragment,M),O=!0)},o(M){J(e.$$.fragment,M),O=!1},d(M){M&&(v(n),v(l)),me(e,M),U=!1,se(R)}}}function zt(t,e,n){rt(()=>{const f=localStorage.getItem("cartier-userid");f&&(X("performing auto-login",!0),l(f))});let{handleUsername:l}=e,r="",s=!0;const a=async()=>{navigator.clipboard.readText&&n(0,r=await navigator.clipboard.readText())},c=()=>{let f;try{f=new URL(r)}catch{n(0,r="");return}const g=f.pathname.split("/")[2];s&&(localStorage.setItem("cartier-userid",g),X("login information saved!")),l(g)};function d(){r=this.value,n(0,r)}function o(){s=this.checked,n(1,s)}return t.$$set=f=>{"handleUsername"in f&&n(4,l=f.handleUsername)},[r,s,a,c,l,d,o]}class Bt extends we{constructor(e){super(),_e(this,e,zt,Ut,ie,{handleUsername:4})}}function Re(t){return Object.prototype.toString.call(t)==="[object Date]"}function Tt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Ue(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const l=e.map((r,s)=>Ue(t[s],r));return r=>l.map(s=>s(r))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(Re(t)&&Re(e)){t=t.getTime(),e=e.getTime();const s=e-t;return a=>new Date(t+a*s)}const l=Object.keys(e),r={};return l.forEach(s=>{r[s]=Ue(t[s],e[s])}),s=>{const a={};return l.forEach(c=>{a[c]=r[c](s)}),a}}if(n==="number"){const l=e-t;return r=>t+r*l}throw new Error(`Cannot interpolate ${n} values`)}function qt(t,e={}){const n=Be(t);let l,r=t;function s(a,c){if(t==null)return n.set(t=a),Promise.resolve();r=a;let d=l,o=!1,{delay:f=0,duration:g=400,easing:h=ft,interpolate:k=Ue}=Pe(Pe({},e),c);if(g===0)return d&&(d.abort(),d=null),n.set(t=r),Promise.resolve();const m=wt()+f;let y;return l=bt(E=>{if(E<m)return!0;o||(y=k(t,a),typeof g=="function"&&(g=g(t,a)),o=!0),d&&(d.abort(),d=null);const I=E-m;return I>g?(n.set(t=a),!1):(n.set(t=y(h(I/g))),!0)}),l.promise}return{set:s,update:(a,c)=>s(a(r,t),c),subscribe:n.subscribe}}function Ve(t,e,n){const l=t.slice();return l[0]=e[n],l}function Dt(t){let e,n;return{c(){e=H("svg"),n=H("path"),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(n,"d","M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","1.5"),i(e,"stroke","currentColor"),i(e,"class","w-[10vh] h-[10vh]")},m(l,r){x(l,e,r),u(e,n)},p:B,d(l){l&&v(e)}}}function Nt(t){let e,n;return{c(){e=p("img"),i(e,"loading","lazy"),pe(e.src,n=t[0].images[0].url)||i(e,"src",n),i(e,"class","rounded-full max-h-[10vh] shadow-black shadow-lg ring-1 ring-black"),i(e,"alt","playlist's cover")},m(l,r){x(l,e,r)},p(l,r){r&1&&!pe(e.src,n=l[0].images[0].url)&&i(e,"src",n)},d(l){l&&v(e)}}}function Ht(t){let e,n;return{c(){e=H("svg"),n=H("path"),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(n,"d","m19.5 8.25-7.5 7.5-7.5-7.5"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","4"),i(e,"stroke","currentColor"),i(e,"class","w-[1.2em] text-xs aspect-square")},m(l,r){x(l,e,r),u(e,n)},d(l){l&&v(e)}}}function Rt(t){let e,n;return{c(){e=H("svg"),n=H("path"),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(n,"d","m4.5 15.75 7.5-7.5 7.5 7.5"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","3"),i(e,"stroke","currentColor"),i(e,"class","w-[1.2em] aspect-square text-xs")},m(l,r){x(l,e,r),u(e,n)},d(l){l&&v(e)}}}function Vt(t){let e;return{c(){e=z("download")},m(n,l){x(n,e,l)},p:B,d(n){n&&v(e)}}}function Ft(t){let e;return{c(){e=z("downloaded")},m(n,l){x(n,e,l)},p:B,d(n){n&&v(e)}}}function Wt(t){let e,n,l,r;function s(d,o){return d[3].stage=="downloading"?Gt:Kt}let a=s(t),c=a(t);return{c(){e=H("svg"),n=H("path"),l=L(),c.c(),r=lt(),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(n,"d","M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","1.5"),i(e,"stroke","currentColor"),i(e,"class","w-4 h-4 inline animate-spin")},m(d,o){x(d,e,o),u(e,n),x(d,l,o),c.m(d,o),x(d,r,o)},p(d,o){a!==(a=s(d))&&(c.d(1),c=a(d),c&&(c.c(),c.m(r.parentNode,r)))},d(d){d&&(v(e),v(l),v(r)),c.d(d)}}}function Kt(t){let e;return{c(){e=z("converting")},m(n,l){x(n,e,l)},d(n){n&&v(e)}}}function Gt(t){let e;return{c(){e=z("downloading")},m(n,l){x(n,e,l)},d(n){n&&v(e)}}}function Fe(t){let e,n,l;return{c(){e=p("button"),e.textContent="save",i(e,"class","text-xs p-1")},m(r,s){x(r,e,s),n||(l=Z(e,"click",t[8]),n=!0)},p:B,d(r){r&&v(e),n=!1,l()}}}function We(t){let e,n,l,r=t[1].tracks.total+"",s,a,c,d=Le(t[1].tracks.items),o=[];for(let f=0;f<d.length;f+=1)o[f]=Ke(Ve(t,d,f));return{c(){e=p("div"),n=p("div"),l=p("div"),s=z(r),a=z(" tracks"),c=L();for(let f=0;f<o.length;f+=1)o[f].c();i(l,"class","bg-zinc-950 rounded-full text-white p-2"),i(n,"class","overflow-hidden overflow-x-scroll flex flex-row items-center space-x-2 p-1 relative"),i(e,"class","col-span-4 bg-zinc-500/10 rounded-md mx-2 text-xs flex flex-row justify-center")},m(f,g){x(f,e,g),u(e,n),u(n,l),u(l,s),u(l,a),u(n,c);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(n,null)},p(f,g){if(g&2&&r!==(r=f[1].tracks.total+"")&&ee(s,r),g&10){d=Le(f[1].tracks.items);let h;for(h=0;h<d.length;h+=1){const k=Ve(f,d,h);o[h]?o[h].p(k,g):(o[h]=Ke(k),o[h].c(),o[h].m(n,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=d.length}},d(f){f&&v(e),nt(o,f)}}}function Jt(t){let e;return{c(){e=p("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[5vh] h-[5vh]"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"></path></svg> ',i(e,"class","ring-1 ring-black shadow-md shadow-black rounded-full")},m(n,l){x(n,e,l)},p:B,d(n){n&&v(e)}}}function Qt(t){let e,n,l;return{c(){e=p("img"),i(e,"loading","lazy"),pe(e.src,n=t[0].track.album.images[0].url)||i(e,"src",n),i(e,"class",l="aspect-square h-[5vh] rounded-full ring-1 ring-black shadow-sm shadow-black will-change-auto "+(t[3].is?(t[3].statuses[t[0].track.id]=="downloading"?" rotating-image":"")+(t[3].statuses[t[0].track.id]=="ready"?" shadow-green-500 ring-green-500":"")+(t[3].statuses[t[0].track.id]=="failed"?" shadow-red-500 ring-red-500":""):"")),i(e,"alt","album")},m(r,s){x(r,e,s)},p(r,s){s&2&&!pe(e.src,n=r[0].track.album.images[0].url)&&i(e,"src",n),s&10&&l!==(l="aspect-square h-[5vh] rounded-full ring-1 ring-black shadow-sm shadow-black will-change-auto "+(r[3].is?(r[3].statuses[r[0].track.id]=="downloading"?" rotating-image":"")+(r[3].statuses[r[0].track.id]=="ready"?" shadow-green-500 ring-green-500":"")+(r[3].statuses[r[0].track.id]=="failed"?" shadow-red-500 ring-red-500":""):""))&&i(e,"class",l)},d(r){r&&v(e)}}}function Ke(t){let e;function n(s,a){return s[0].track&&s[0].track.album.images.length>0?Qt:Jt}let l=n(t),r=l(t);return{c(){r.c(),e=lt()},m(s,a){r.m(s,a),x(s,e,a)},p(s,a){l===(l=n(s))&&r?r.p(s,a):(r.d(1),r=l(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&v(e),r.d(s)}}}function Xt(t){let e,n,l,r,s,a,c,d,o,f=t[0].name+"",g,h,k,m,y,E,I,P=t[0].description+"",S,j,O,U,R,M,$,T,Q,te=t[4]&&Object.keys(t[1]).length>0,F,oe;function be(b,D){return b[0].images.length>0?Nt:Dt}let ne=be(t),N=ne(t);function V(b,D){return b[4]?Rt:Ht}let W=V(t),C=W(t);function $e(b,D){return b[3].is?Wt:b[2].length>0?Ft:Vt}let _=$e(t),A=_(t),w=t[2].length>0&&!t[3].is&&Fe(t),q=te&&We(t);return{c(){e=p("div"),n=p("div"),r=L(),s=p("div"),a=p("div"),N.c(),c=L(),d=p("div"),o=p("a"),g=z(f),h=L(),k=H("svg"),m=H("path"),E=L(),I=p("p"),S=z(P),j=L(),O=p("div"),U=p("button"),C.c(),R=L(),M=p("button"),A.c(),T=L(),w&&w.c(),Q=L(),q&&q.c(),i(n,"class","h-1 absolute backdrop-opacity-50 bg-aodPurple rounded-sm left-0 bottom-0 z-50"),ge(n,"width",t[5]/100*90+"vw"),n.hidden=l=!t[3].is,i(a,"class","col-span-1 flex flex-col items-center justify-center"),i(m,"stroke-linecap","round"),i(m,"stroke-linejoin","round"),i(m,"d","M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"),i(k,"xmlns","http://www.w3.org/2000/svg"),i(k,"fill","none"),i(k,"viewBox","0 0 24 24"),i(k,"stroke-width","1.5"),i(k,"stroke","currentColor"),i(k,"class","w-4 h-4 inline"),i(o,"class","hover:scale-110 duration-75 text-left line-clamp-1"),i(o,"href",y=t[0].external_urls.spotify),i(o,"target","_blank"),i(I,"class","text-xs line-clamp-1"),i(U,"class","bg-transparent text-white ring-1 p-1 ring-zinc-500 hover:scale-110"),i(U,"aria-label","show more"),i(M,"class","text-xs bg-aodPurple p-1"),M.disabled=$=t[3].is||t[2].length>0,i(O,"class","flex flex-row space-x-2"),i(d,"class","col-span-3 flex flex-col justify-center items-start"),i(s,"class","grid grid-cols-4 w-full gap-1"),i(e,"class","bg-gray-950/50 ring-1 ring-zinc-500 py-2 rounded-md w-[90vw] text-center relative transition-all duration-150")},m(b,D){x(b,e,D),u(e,n),u(e,r),u(e,s),u(s,a),N.m(a,null),u(s,c),u(s,d),u(d,o),u(o,g),u(o,h),u(o,k),u(k,m),u(d,E),u(d,I),u(I,S),u(d,j),u(d,O),u(O,U),C.m(U,null),u(O,R),u(O,M),A.m(M,null),u(O,T),w&&w.m(O,null),u(s,Q),q&&q.m(s,null),F||(oe=[Z(U,"click",t[7]),Z(M,"click",t[9])],F=!0)},p(b,[D]){D&32&&ge(n,"width",b[5]/100*90+"vw"),D&8&&l!==(l=!b[3].is)&&(n.hidden=l),ne===(ne=be(b))&&N?N.p(b,D):(N.d(1),N=ne(b),N&&(N.c(),N.m(a,null))),D&1&&f!==(f=b[0].name+"")&&ee(g,f),D&1&&y!==(y=b[0].external_urls.spotify)&&i(o,"href",y),D&1&&P!==(P=b[0].description+"")&&ee(S,P),W!==(W=V(b))&&(C.d(1),C=W(b),C&&(C.c(),C.m(U,null))),_===(_=$e(b))&&A?A.p(b,D):(A.d(1),A=_(b),A&&(A.c(),A.m(M,null))),D&12&&$!==($=b[3].is||b[2].length>0)&&(M.disabled=$),b[2].length>0&&!b[3].is?w?w.p(b,D):(w=Fe(b),w.c(),w.m(O,null)):w&&(w.d(1),w=null),D&18&&(te=b[4]&&Object.keys(b[1]).length>0),te?q?q.p(b,D):(q=We(b),q.c(),q.m(s,null)):q&&(q.d(1),q=null)},i:B,o:B,d(b){b&&v(e),N.d(),C.d(),A.d(),w&&w.d(),q&&q.d(),F=!1,se(oe)}}}function Yt(t,e,n){let l,r={},s=[],{track:a}=e;const c={is:!1,statuses:{},stage:""};let d=!1,o=qt(0,{duration:1e3,easing:Tt});Ae(t,o,m=>n(5,l=m));const f=()=>{d==!1?(Object.keys(r).length==0&&g(),n(4,d=!0)):n(4,d=!1)},g=async()=>{const m=a.external_urls.spotify,E=new URL(m).pathname.split("/")[2];X("loading playlist info",!0,1);let I=await le.getPlaylistInfo(E);n(1,r=I)},h=()=>{s.forEach((m,y)=>{const E=URL.createObjectURL(m),I=document.createElement("a");I.href=E,I.download=`${a.name}-${y+1}.mp3`,I.click()})},k=async()=>{if(Object.keys(r).length==0&&await g(),!r.tracks)return;if(r.tracks.items.length==0){X("cannot download empty playlist");return}n(3,c.is=!0,c),n(3,c.stage="converting",c),o.set(0,{duration:1}),o.set(10,{duration:1e4});let m=r.tracks.items[0].track;le.getDownloadTrack(m.external_urls.spotify,"",!0).then(async y=>{if(y.success==!1){G(o,l=0,l),n(3,c.is=!1,c),X(`serverErr: ${y.info}`);return}const E=y.data.key;for(const[P,{track:S}]of[...r.tracks.items].splice(1).entries())S&&n(3,c.statuses[S.id]="downloading",c),(await le.getDownloadTrack(S.external_urls.spotify,E,!1)).success==!1&&X(`failed downloading track (${S.name})`);await o.set(10);const I=setInterval(async()=>{let P=await le.getDownloadStatus(E);const S=P.data.filter(j=>j.status!=="downloading");if(P.data.forEach(j=>{n(3,c.statuses[j.id]=j.status,c)}),G(o,l=S.length/P.data.length*40+10,l),S.length==P.data.length){n(3,c.stage="downloading",c),clearInterval(I);for(let j=0;j<S.length;j++){let[O,U]=await le.getStreamPlaylist(E);if(!O){X(`failed downloading a track (in "${a.name}")`);continue}n(2,s=[...s,U]),G(o,l=(j+1)/S.length*50+50,l)}await o.set(100,{duration:500}),n(3,c.is=!1,c)}},5e3)})};return t.$$set=m=>{"track"in m&&n(0,a=m.track)},[a,r,s,c,d,l,o,f,h,k]}class Zt extends we{constructor(e){super(),_e(this,e,Yt,Xt,ie,{track:0})}}const ke=Be({loggedIn:!1,user:{},playlists:{}});function Ge(t,e,n){const l=t.slice();return l[2]=e[n],l}function en(t){let e,n;return{c(){e=H("svg"),n=H("path"),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(n,"d","M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","1.5"),i(e,"stroke","currentColor"),i(e,"class","w-[10vh] h-[10vh] rounded-full ring-aodBg ring-2")},m(l,r){x(l,e,r),u(e,n)},p:B,d(l){l&&v(e)}}}function tn(t){let e,n,l;return{c(){e=p("img"),i(e,"loading","lazy"),pe(e.src,n=t[0].user.images[1].url)||i(e,"src",n),i(e,"alt",l=`${t[0].user.display_name}'s profile picture`),i(e,"class","rounded-full h-[10vh] ring-aodBg ring-1 shadow-sm shadow-black")},m(r,s){x(r,e,s)},p(r,s){s&1&&!pe(e.src,n=r[0].user.images[1].url)&&i(e,"src",n),s&1&&l!==(l=`${r[0].user.display_name}'s profile picture`)&&i(e,"alt",l)},d(r){r&&v(e)}}}function Je(t){let e,n;return e=new Zt({props:{track:t[2]}}),{c(){xe(e.$$.fragment)},m(l,r){he(e,l,r),n=!0},p(l,r){const s={};r&1&&(s.track=l[2]),e.$set(s)},i(l){n||(K(e.$$.fragment,l),n=!0)},o(l){J(e.$$.fragment,l),n=!1},d(l){me(e,l)}}}function nn(t){let e,n,l,r,s,a,c=t[0].user.display_name+"",d,o,f,g=t[0].user.followers.total+"",h,k,m=t[0].playlists.total+"",y,E,I,P,S=t[0].user.id+"",j,O,U,R,M,$,T,Q,te,F,oe,be;function ne(_,A){return _[0].user.images.length==2?tn:en}let N=ne(t),V=N(t),W=Le(t[0].playlists.items),C=[];for(let _=0;_<W.length;_+=1)C[_]=Je(Ge(t,W,_));const $e=_=>J(C[_],1,1,()=>{C[_]=null});return{c(){e=p("div"),n=p("div"),l=p("div"),V.c(),r=L(),s=p("div"),a=p("p"),d=z(c),o=L(),f=p("p"),h=z(g),k=z(" followers, "),y=z(m),E=z(" playlists"),I=L(),P=p("p"),j=z(S),O=L(),U=p("div"),R=p("button"),R.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1.5em] inline"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"></path></svg>logout',M=L(),$=p("div"),T=p("div");for(let _=0;_<C.length;_+=1)C[_].c();Q=L(),te=p("div"),i(a,"class","font-semibold"),ge(a,"text-shadow","4px 3px 8px rgba(0,0,0,1)"),i(f,"class","text-xs"),i(P,"class","text-xs"),i(s,"class","flex flex-col justify-center items-start"),i(l,"class","flex flex-row items-center justify-center space-x-5"),i(R,"class","text-sm p-0.5 bg-red-500 text-gray-950"),i(R,"aria-label","logout"),i(n,"class","flex flex-row justify-center items-center h-[13vh] space-x-4 bg-gradient-to-t from-gray-950/50 backdrop-blur-sm to-zinc-500 w-[90vw] rounded-t-md ring-1 ring-zinc-500 z-50"),i(T,"class","flex flex-col justify-center items-center w-full space-y-2 pb-1"),i($,"class","h-[67vh] overflow-y-scroll w-[100vw]"),i(te,"class","backdrop-opacity-100 rounded-full backdrop-blur-sm w-[95vw] h-7 absolute bottom-0 left-auto right-auto"),i(e,"class","flex flex-col items-center -space-y-1")},m(_,A){x(_,e,A),u(e,n),u(n,l),V.m(l,null),u(l,r),u(l,s),u(s,a),u(a,d),u(s,o),u(s,f),u(f,h),u(f,k),u(f,y),u(f,E),u(s,I),u(s,P),u(P,j),u(n,O),u(n,U),u(U,R),u(e,M),u(e,$),u($,T);for(let w=0;w<C.length;w+=1)C[w]&&C[w].m(T,null);u(e,Q),u(e,te),F=!0,oe||(be=Z(R,"click",t[1]),oe=!0)},p(_,[A]){if(N===(N=ne(_))&&V?V.p(_,A):(V.d(1),V=N(_),V&&(V.c(),V.m(l,r))),(!F||A&1)&&c!==(c=_[0].user.display_name+"")&&ee(d,c),(!F||A&1)&&g!==(g=_[0].user.followers.total+"")&&ee(h,g),(!F||A&1)&&m!==(m=_[0].playlists.total+"")&&ee(y,m),(!F||A&1)&&S!==(S=_[0].user.id+"")&&ee(j,S),A&1){W=Le(_[0].playlists.items);let w;for(w=0;w<W.length;w+=1){const q=Ge(_,W,w);C[w]?(C[w].p(q,A),K(C[w],1)):(C[w]=Je(q),C[w].c(),K(C[w],1),C[w].m(T,null))}for(it(),w=W.length;w<C.length;w+=1)$e(w);ot()}},i(_){if(!F){for(let A=0;A<W.length;A+=1)K(C[A]);F=!0}},o(_){C=C.filter(Boolean);for(let A=0;A<C.length;A+=1)J(C[A]);F=!1},d(_){_&&v(e),V.d(),nt(C,_),oe=!1,be()}}}function ln(t,e,n){let l;return Ae(t,ke,s=>n(0,l=s)),[l,()=>{localStorage.removeItem("cartier-userid"),G(ke,l.loggedIn=!1,l)}]}class rn extends we{constructor(e){super(),_e(this,e,ln,nn,ie,{})}}function sn(t){let e,n;return e=new rn({}),{c(){xe(e.$$.fragment)},m(l,r){he(e,l,r),n=!0},p:B,i(l){n||(K(e.$$.fragment,l),n=!0)},o(l){J(e.$$.fragment,l),n=!1},d(l){me(e,l)}}}function on(t){let e,n;return e=new Bt({props:{handleUsername:t[1]}}),{c(){xe(e.$$.fragment)},m(l,r){he(e,l,r),n=!0},p:B,i(l){n||(K(e.$$.fragment,l),n=!0)},o(l){J(e.$$.fragment,l),n=!1},d(l){me(e,l)}}}function an(t){let e;return{c(){e=p("span"),e.textContent="PROD",i(e,"class","rounded-sm p-0.5 bg-blue-600")},m(n,l){x(n,e,l)},d(n){n&&v(e)}}}function cn(t){let e,n,l,r,s,a,c,d,o,f,g,h,k,m,y,E,I,P;const S=[on,sn],j=[];function O($,T){return $[0].loggedIn==!1?0:1}o=O(t),f=j[o]=S[o](t);function U($,T){return an}let M=U()(t);return{c(){e=p("div"),n=L(),l=p("main"),r=p("div"),r.innerHTML='<div class="bg-aodPurple shadow-sm text-gray-950 shadow-gray-950 rounded-b-md p-2 ml-2 h-full flex flex-col items-center justify-center"><span>reold&#39;s</span></div> <p class="text-3xl">Cartier Manager</p>',s=L(),a=p("div"),c=p("div"),d=L(),f.c(),g=L(),h=p("div"),k=p("p"),M.c(),m=z(`
      Built with ❤️ by
      `),y=p("a"),y.textContent="reold",E=z(`.
      `),I=p("a"),I.textContent="Report an error",i(e,"class","bg-black opacity-75 p-1 rounded-md w-[80vw] max-w-[90vw] z-50"),ge(e,"display","none"),i(r,"class","flex flex-row items-center justify-evenly font-bold h-[10vh] pb-2 bg-gray-950 ring-1 ring-zinc-500 shadow-xl"),i(c,"class","absolute left-0 top-0 w-full flex flex-col items-center justify-center space-y-1 text-xs"),i(a,"class","relative w-full flex flex-col items-center justify-center h-[85vh] bg-gradient-to-t from-gray-950 via-[#203A43] to-gray-950"),i(y,"href","https://github.com/reold"),i(y,"target","_blank"),i(y,"class","text-blue-600"),i(I,"href","https://x.com/redicrafty"),i(I,"target","_blank"),i(I,"class","text-blue-600"),i(h,"class","w-full h-[5vh] bg-gray-950 text-sm flex flex-col items-center justify-center"),i(l,"class","w-screen h-screen text-white text-xl select-none text-center")},m($,T){x($,e,T),t[2](e),x($,n,T),x($,l,T),u(l,r),u(l,s),u(l,a),u(a,c),t[3](c),u(a,d),j[o].m(a,null),u(l,g),u(l,h),u(h,k),M.m(k,null),u(k,m),u(k,y),u(k,E),u(k,I),P=!0},p($,[T]){let Q=o;o=O($),o===Q?j[o].p($,T):(it(),J(j[Q],1,1,()=>{j[Q]=null}),ot(),f=j[o],f?f.p($,T):(f=j[o]=S[o]($),f.c()),K(f,1),f.m(a,null))},i($){P||(K(f),P=!0)},o($){J(f),P=!1},d($){$&&(v(e),v(n),v(l)),t[2](null),t[3](null),j[o].d(),M.d()}}}let ze,at;const X=(t,e=!1,n=3)=>{const l=at.cloneNode(!0);l.innerHTML=e?`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1.2em] animate-spin inline aspect-square mr-1" > <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /> </svg>${t}`:t,l.style.display="block",ze.appendChild(l),setTimeout(()=>{ze.removeChild(l)},n*1e3)};function un(t,e,n){let l;Ae(t,ke,c=>n(0,l=c));const r=c=>{le.getUserInfo(c).then(d=>{if(d.success==!1){X("something went wrong!");return}G(ke,l={...l,...d.data},l),G(ke,l.loggedIn=!0,l)})};function s(c){Me[c?"unshift":"push"](()=>{at=c})}function a(c){Me[c?"unshift":"push"](()=>{ze=c})}return[l,r,s,a]}class fn extends we{constructor(e){super(),_e(this,e,un,cn,ie,{})}}new fn({target:document.getElementById("app")});