(function(e){function t(t){for(var r,a,o=t[0],u=t[1],d=t[2],m=0,l=[];m<o.length;m++)a=o[m],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);g&&g(t);while(l.length)l.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},i=[];function o(e){return u.p+"js/"+({"backTracking~dynamicProgramming~greedy":"backTracking~dynamicProgramming~greedy","backTracking~dynamicProgramming":"backTracking~dynamicProgramming",backTracking:"backTracking","dynamicProgramming~greedy":"dynamicProgramming~greedy",dynamicProgramming:"dynamicProgramming",greedy:"greedy"}[e]||e)+"."+{"backTracking~dynamicProgramming~greedy":"6c571b85","backTracking~dynamicProgramming":"d3414ecf",backTracking:"5bfb0101","dynamicProgramming~greedy":"b6baf085",dynamicProgramming:"fcd94f16",greedy:"2b33fee5"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"backTracking~dynamicProgramming~greedy":1,"backTracking~dynamicProgramming":1,backTracking:1,"dynamicProgramming~greedy":1,dynamicProgramming:1,greedy:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"backTracking~dynamicProgramming~greedy":"backTracking~dynamicProgramming~greedy","backTracking~dynamicProgramming":"backTracking~dynamicProgramming",backTracking:"backTracking","dynamicProgramming~greedy":"dynamicProgramming~greedy",dynamicProgramming:"dynamicProgramming",greedy:"greedy"}[e]||e)+"."+{"backTracking~dynamicProgramming~greedy":"41b7a9b7","backTracking~dynamicProgramming":"dea57a1c",backTracking:"4faecb7e","dynamicProgramming~greedy":"6390d106",dynamicProgramming:"bf77019a",greedy:"74661106"}[e]+".css",c=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var d=i[o],m=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(m===r||m===c))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){d=l[o],m=d.getAttribute("data-href");if(m===r||m===c)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],g.parentNode.removeChild(g),n(i)},g.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(g)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var d,m=document.createElement("script");m.charset="utf-8",m.timeout=120,u.nc&&m.setAttribute("nonce",u.nc),m.src=o(e);var l=new Error;d=function(t){m.onerror=m.onload=null,clearTimeout(g);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var g=setTimeout((function(){d({type:"timeout",target:m})}),12e4);m.onerror=m.onload=d,document.head.appendChild(m)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/visalgo/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],m=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var g=m;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("c760"),n("d3b7"),n("f8c9");var r=n("7a23"),a=(n("93bb"),n("e1fe"),n("eaec"),n("8f60"),n("9590"),n("b065"),n("5959"),n("f872"),n("e2bc")),c=n("fc2b"),i=n("54bb"),o=function(e){return Object(r["pushScopeId"])("data-v-96d107aa"),e=e(),Object(r["popScopeId"])(),e},u=o((function(){return Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("span",null,"Visalgo")],-1)})),d=o((function(){return Object(r["createElementVNode"])("span",null,"动态规划",-1)})),m=o((function(){return Object(r["createElementVNode"])("span",null,"面额问题",-1)})),l=o((function(){return Object(r["createElementVNode"])("span",null,"矩阵链乘法",-1)})),g=o((function(){return Object(r["createElementVNode"])("span",null,"最长公共子序列",-1)})),b=o((function(){return Object(r["createElementVNode"])("span",null,"回溯法",-1)})),f=o((function(){return Object(r["createElementVNode"])("span",null,"N皇后问题",-1)})),s=o((function(){return Object(r["createElementVNode"])("span",null,"贪心法",-1)})),y=o((function(){return Object(r["createElementVNode"])("span",null,"字符串去重",-1)}));function p(e,t){var n=a["c"],o=Object(r["resolveComponent"])("collection"),p=i["a"],h=Object(r["resolveComponent"])("files"),O=c["b"],j=c["c"],k=c["a"],P=a["a"],v=Object(r["resolveComponent"])("router-view"),x=a["d"],N=a["b"];return Object(r["openBlock"])(),Object(r["createBlock"])(N,{class:"home-container"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])((function(){return[u]})),_:1}),Object(r["createVNode"])(N,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{width:"200px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{"active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","default-active":"2","text-color":"#fff",router:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{index:"dynamic-programming"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o)]})),_:1}),d]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{index:"denomination"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),m]})),_:1}),Object(r["createVNode"])(O,{index:"matrix-chain-multiplication"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),l]})),_:1}),Object(r["createVNode"])(O,{index:"longest-common-subsequence"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),g]})),_:1})]})),_:1}),Object(r["createVNode"])(j,{index:"back-tracking"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o)]})),_:1}),b]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{index:"nqueens"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),f]})),_:1})]})),_:1}),Object(r["createVNode"])(j,{index:"greedy"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o)]})),_:1}),s]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{index:"remove-duplicate-letters"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),y]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(x,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v)]})),_:1})]})),_:1})]})),_:1})}n("b8be");var h=n("6b0d"),O=n.n(h);const j={},k=O()(j,[["render",p],["__scopeId","data-v-96d107aa"]]);var P=k,v=(n("3ca3"),n("ddb0"),n("6c02")),x=[{path:"/",redirect:"/denomination"},{path:"/nqueens",name:"NQueens",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("backTracking~dynamicProgramming"),n.e("backTracking")]).then(n.bind(null,"ffb1"))}},{path:"/denomination",name:"Denomination",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("backTracking~dynamicProgramming"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"2c7a"))}},{path:"/matrix-chain-multiplication",name:"MatrixChainMultiplication",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("backTracking~dynamicProgramming"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"7dc3"))}},{path:"/longest-common-subsequence",name:"LongestCommonSubsequence",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("backTracking~dynamicProgramming"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"b5b4"))}},{path:"/remove-duplicate-letters",name:"RemoveDuplicateLetters",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("greedy")]).then(n.bind(null,"a409"))}}],N=Object(v["a"])({history:Object(v["b"])(),routes:x}),C=N,T=(n("a630"),n("5502")),w=Object(T["a"])({state:{isFinished:!1,isBackTracking:!1,autoPlaySetting:0,backTrackingPosition:0,boardMaxCount:0,boardCurrCount:0,boardSize:4,boardData:[],boardState:[]},mutations:{boardInit:function(e,t){e.isFinished=!1,e.isBackTracking=!1,e.autoPlaySetting=0,e.backTrackingPosition=0,e.boardSize=t,e.boardMaxCount=0,e.boardCurrCount=0,e.boardData=[],e.boardState=[Array.from({length:t},(function(){return-1}))];for(var n=0;n<t;n++)e.boardData.push(Array.from({length:t},(function(){return 0})))},boardDestroy:function(e){e.isFinished=!1,e.isBackTracking=!1,e.autoPlaySetting=0,e.backTrackingPosition=0,e.boardMaxCount=0,e.boardCurrCount=0,e.boardData=[],e.boardState=[]}},actions:{},modules:{}}),V=(n("aede"),n("1ed2")),_=Object(r["createApp"])(P);for(var S in _.use(w).use(C),V)if(Reflect.has(V,S)){var E=V[S];_.component(S,E)}_.mount("#app")},aede:function(e,t,n){},b8be:function(e,t,n){"use strict";n("fdd1")},fdd1:function(e,t,n){}});
//# sourceMappingURL=app.aa677f19.js.map