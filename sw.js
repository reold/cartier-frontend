if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>n(e,c),l={module:{uri:c},exports:o,require:t};i[c]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"11b4223ef3463b0f10142a057bbe92d3"},{url:"assets/fsWorker-Ren_M3cg.js",revision:null},{url:"assets/index-DHAacFvR.css",revision:null},{url:"assets/index-Dtnutxz9.js",revision:null},{url:"assets/nunito-D2sADkEI.ttf",revision:null},{url:"assets/nunito-italic-COE5o7Ya.ttf",revision:null},{url:"cartier.svg",revision:"5b047d2bf255349cc71cb3e388257c54"},{url:"index.html",revision:"5855e3940d22fae3cb0bdc8f117aebd0"},{url:"mask-icon.png",revision:"944f7a3f13fb5f8682a72bf13776d126"},{url:"pwa-192x192.png",revision:"8e851744ce691624039c0c9641c61db9"},{url:"pwa-512x512.png",revision:"abb22960dbdb8eb02622175c62e6d6db"},{url:"registerSW.js",revision:"5ca88eaadf2f17a8d10295c31c983012"},{url:"cartier.svg",revision:"5b047d2bf255349cc71cb3e388257c54"},{url:"apple-touch-icon.png",revision:"11b4223ef3463b0f10142a057bbe92d3"},{url:"pwa-512x512.png",revision:"abb22960dbdb8eb02622175c62e6d6db"},{url:"pwa-192x192.png",revision:"8e851744ce691624039c0c9641c61db9"},{url:"manifest.webmanifest",revision:"1193efb258e8a59eeecbe90fb54652a8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
