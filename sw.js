if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>s(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"11b4223ef3463b0f10142a057bbe92d3"},{url:"assets/fsWorker-B4qXksyp.js",revision:null},{url:"assets/index-CVNiJ2Sy.js",revision:null},{url:"assets/index-DHAacFvR.css",revision:null},{url:"assets/nunito-D2sADkEI.ttf",revision:null},{url:"assets/nunito-italic-COE5o7Ya.ttf",revision:null},{url:"cartier.svg",revision:"5b047d2bf255349cc71cb3e388257c54"},{url:"index.html",revision:"d9324ab415f3d839a837e098454baad6"},{url:"mask-icon.png",revision:"944f7a3f13fb5f8682a72bf13776d126"},{url:"pwa-192x192.png",revision:"8e851744ce691624039c0c9641c61db9"},{url:"pwa-512x512.png",revision:"abb22960dbdb8eb02622175c62e6d6db"},{url:"registerSW.js",revision:"5ca88eaadf2f17a8d10295c31c983012"},{url:"cartier.svg",revision:"5b047d2bf255349cc71cb3e388257c54"},{url:"apple-touch-icon.png",revision:"11b4223ef3463b0f10142a057bbe92d3"},{url:"pwa-512x512.png",revision:"abb22960dbdb8eb02622175c62e6d6db"},{url:"pwa-192x192.png",revision:"8e851744ce691624039c0c9641c61db9"},{url:"manifest.webmanifest",revision:"1193efb258e8a59eeecbe90fb54652a8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
