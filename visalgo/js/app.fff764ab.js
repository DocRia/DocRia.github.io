(function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({"backTracking~dynamicProgramming":"backTracking~dynamicProgramming",backTracking:"backTracking",dynamicProgramming:"dynamicProgramming",greedy:"greedy"}[e]||e)+"."+{"backTracking~dynamicProgramming":"92b7bbf8",backTracking:"025a86fb",dynamicProgramming:"1fdfaf17",greedy:"3bfcfc36"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"backTracking~dynamicProgramming":1,backTracking:1,dynamicProgramming:1,greedy:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({"backTracking~dynamicProgramming":"backTracking~dynamicProgramming",backTracking:"backTracking",dynamicProgramming:"dynamicProgramming",greedy:"greedy"}[e]||e)+"."+{"backTracking~dynamicProgramming":"72a87fa5",backTracking:"8cb52b44",dynamicProgramming:"b527e5ea",greedy:"74661106"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===a))return t()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){l=b[i],d=l.getAttribute("data-href");if(d===r||d===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],m.parentNode.removeChild(m),n(o)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var b=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",b.name="ChunkLoadError",b.type=r,b.request=c,n[1](b)}a[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/visalgo/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var m=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("c760"),n("d3b7"),n("f8c9");var r=n("8bbf"),c=function(e){return Object(r["pushScopeId"])("data-v-96d107aa"),e=e(),Object(r["popScopeId"])(),e},a=c((function(){return Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("span",null,"Visalgo")],-1)})),o=c((function(){return Object(r["createElementVNode"])("span",null,"动态规划",-1)})),i=c((function(){return Object(r["createElementVNode"])("span",null,"面额问题",-1)})),u=c((function(){return Object(r["createElementVNode"])("span",null,"矩阵链乘法",-1)})),l=c((function(){return Object(r["createElementVNode"])("span",null,"最长公共子序列",-1)})),d=c((function(){return Object(r["createElementVNode"])("span",null,"回溯法",-1)})),b=c((function(){return Object(r["createElementVNode"])("span",null,"N皇后问题",-1)})),m=c((function(){return Object(r["createElementVNode"])("span",null,"贪心法",-1)})),f=c((function(){return Object(r["createElementVNode"])("span",null,"字符串去重",-1)}));function s(e,t){var n=Object(r["resolveComponent"])("el-header"),c=Object(r["resolveComponent"])("collection"),s=Object(r["resolveComponent"])("el-icon"),g=Object(r["resolveComponent"])("files"),p=Object(r["resolveComponent"])("el-menu-item"),O=Object(r["resolveComponent"])("el-sub-menu"),j=Object(r["resolveComponent"])("el-menu"),h=Object(r["resolveComponent"])("el-aside"),y=Object(r["resolveComponent"])("router-view"),k=Object(r["resolveComponent"])("el-main"),v=Object(r["resolveComponent"])("el-container");return Object(r["openBlock"])(),Object(r["createBlock"])(v,{class:"home-container"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])((function(){return[a]})),_:1}),Object(r["createVNode"])(v,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{width:"200px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{"active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","default-active":"2","text-color":"#fff",router:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{index:"dynamic-programming"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c)]})),_:1}),o]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{index:"denomination"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g)]})),_:1}),i]})),_:1}),Object(r["createVNode"])(p,{index:"matrix-chain-multiplication"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g)]})),_:1}),u]})),_:1}),Object(r["createVNode"])(p,{index:"longest-common-subsequence"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g)]})),_:1}),l]})),_:1})]})),_:1}),Object(r["createVNode"])(O,{index:"back-tracking"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c)]})),_:1}),d]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{index:"nqueens"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g)]})),_:1}),b]})),_:1})]})),_:1}),Object(r["createVNode"])(O,{index:"greedy"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c)]})),_:1}),m]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{index:"remove-duplicate-letters"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g)]})),_:1}),f]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(k,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(y)]})),_:1})]})),_:1})]})),_:1})}n("b8be");var g=n("6b0d"),p=n.n(g);const O={},j=p()(O,[["render",s],["__scopeId","data-v-96d107aa"]]);var h=j,y=(n("3ca3"),n("ddb0"),n("6c02")),k=[{path:"/",redirect:"/denomination"},{path:"/nqueens",name:"NQueens",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming"),n.e("backTracking")]).then(n.bind(null,"ffb1"))}},{path:"/denomination",name:"Denomination",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming"),n.e("dynamicProgramming")]).then(n.bind(null,"2c7a"))}},{path:"/matrix-chain-multiplication",name:"MatrixChainMultiplication",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming"),n.e("dynamicProgramming")]).then(n.bind(null,"7dc3"))}},{path:"/longest-common-subsequence",name:"LongestCommonSubsequence",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming"),n.e("dynamicProgramming")]).then(n.bind(null,"b5b4"))}},{path:"/remove-duplicate-letters",name:"RemoveDuplicateLetters",component:function(){return n.e("greedy").then(n.bind(null,"a409"))}}],v=Object(y["a"])({history:Object(y["b"])(),routes:k}),C=v,x=(n("a630"),n("5502")),N=Object(x["a"])({state:{isFinished:!1,isBackTracking:!1,autoPlaySetting:0,backTrackingPosition:0,boardMaxCount:0,boardCurrCount:0,boardSize:4,boardData:[],boardState:[]},mutations:{boardInit:function(e,t){e.isFinished=!1,e.isBackTracking=!1,e.autoPlaySetting=0,e.backTrackingPosition=0,e.boardSize=t,e.boardMaxCount=0,e.boardCurrCount=0,e.boardData=[],e.boardState=[Array.from({length:t},(function(){return-1}))];for(var n=0;n<t;n++)e.boardData.push(Array.from({length:t},(function(){return 0})))},boardDestroy:function(e){e.isFinished=!1,e.isBackTracking=!1,e.autoPlaySetting=0,e.backTrackingPosition=0,e.boardMaxCount=0,e.boardCurrCount=0,e.boardData=[],e.boardState=[]}},actions:{},modules:{}}),w=(n("aede"),n("1ed2")),P=n("be66"),V=n.n(P),_=Object(r["createApp"])(h);for(var T in _.use(N).use(C).use(V.a),w)if(Reflect.has(w,T)){var E=w[T];_.component(T,E)}_.mount("#app")},"8bbf":function(e,t){e.exports=Vue},ae1c:function(e,t,n){},aede:function(e,t,n){},b8be:function(e,t,n){"use strict";n("ae1c")},be66:function(e,t){e.exports=ElementPlus}});
//# sourceMappingURL=app.fff764ab.js.map