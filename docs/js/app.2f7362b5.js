(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ab0aff8b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/cmp-tests/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("router-view"),n("footer",[n("div",[n("a",{attrs:{href:"#"},on:{click:function(t){return e.openConsent(t)}}},[e._v("Cookie settings")])])])],1)},a=[],i={name:"App",created:function(){var e=window.sessionStorage.redirect;delete window.sessionStorage.redirect,e&&e!==window.location.href&&this.$router.push(e)},methods:{openConsent:function(e){window.CookieConsent.show(),e.stopPropagation(),e.preventDefault()}}},u=i,c=(n("034f"),n("2877")),s=Object(c["a"])(u,o,a,!1,null,null,null),l=s.exports,f=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("CPM")]),n("p",[e._v(" This app displayes and integrates multiple consent platform managers to test differences between them. ")])])}],m={name:"Home"},h=m,v=(n("cccb"),Object(c["a"])(h,p,d,!1,null,null,null)),b=v.exports;r["a"].use(f["a"]);var g=[{path:"/",name:"Home",component:b},{path:"/consent-manager",name:"ConsentManager",component:function(){return n.e("about").then(n.bind(null,"d245"))}},{path:"/cookiebot",name:"Cookiebot",component:function(){return n.e("about").then(n.bind(null,"b384"))}},{path:"/usercentric",name:"Usercentric",component:function(){return n.e("about").then(n.bind(null,"e9cf"))}}],w=new f["a"]({mode:"history",base:"/cmp-tests/",routes:g}),y=w;r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("5ced"),o=n.n(r);o.a}});
//# sourceMappingURL=app.2f7362b5.js.map