if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>r(e,c),d={module:{uri:c},exports:o,require:t};i[c]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"11b4223ef3463b0f10142a057bbe92d3"},{url:"assets/index-Cpq3jOlZ.js",revision:null},{url:"assets/index-DHAacFvR.css",revision:null},{url:"cartier.svg",revision:"5b047d2bf255349cc71cb3e388257c54"},{url:"index.html",revision:"05e18605f7aec9514e175c7df7e4a65d"},{url:"mask-icon.png",revision:"944f7a3f13fb5f8682a72bf13776d126"},{url:"pwa-192x192.png",revision:"8e851744ce691624039c0c9641c61db9"},{url:"pwa-512x512.png",revision:"abb22960dbdb8eb02622175c62e6d6db"},{url:"registerSW.js",revision:"5ca88eaadf2f17a8d10295c31c983012"},{url:"cartier.svg",revision:"5b047d2bf255349cc71cb3e388257c54"},{url:"apple-touch-icon.png",revision:"11b4223ef3463b0f10142a057bbe92d3"},{url:"pwa-512x512.png",revision:"abb22960dbdb8eb02622175c62e6d6db"},{url:"pwa-192x192.png",revision:"8e851744ce691624039c0c9641c61db9"},{url:"manifest.webmanifest",revision:"91f784fa907bbd3c17508cc8ae78aa25"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
