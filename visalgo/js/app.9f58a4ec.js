(function(e){function t(t){for(var r,c,o=t[0],d=t[1],u=t[2],l=0,m=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&m.push(a[c][0]),a[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);b&&b(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var r={},c={app:0},a={app:0},i=[];function o(e){return d.p+"js/"+({"backTracking~divideAndConquer~dynamicProgramming~greedy":"backTracking~divideAndConquer~dynamicProgramming~greedy","backTracking~greedy":"backTracking~greedy",backTracking:"backTracking",divideAndConquer:"divideAndConquer","dynamicProgramming~greedy":"dynamicProgramming~greedy",greedy:"greedy",dynamicProgramming:"dynamicProgramming"}[e]||e)+"."+{"backTracking~divideAndConquer~dynamicProgramming~greedy":"d5c63ae2","backTracking~greedy":"82679975",backTracking:"e24b167f",divideAndConquer:"950247d2","dynamicProgramming~greedy":"6074d3f0",greedy:"cfc5b73f",dynamicProgramming:"d13b93fd"}[e]+".js"}function d(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"backTracking~divideAndConquer~dynamicProgramming~greedy":1,"backTracking~greedy":1,backTracking:1,divideAndConquer:1,"dynamicProgramming~greedy":1,greedy:1,dynamicProgramming:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({"backTracking~divideAndConquer~dynamicProgramming~greedy":"backTracking~divideAndConquer~dynamicProgramming~greedy","backTracking~greedy":"backTracking~greedy",backTracking:"backTracking",divideAndConquer:"divideAndConquer","dynamicProgramming~greedy":"dynamicProgramming~greedy",greedy:"greedy",dynamicProgramming:"dynamicProgramming"}[e]||e)+"."+{"backTracking~divideAndConquer~dynamicProgramming~greedy":"aab4ecbb","backTracking~greedy":"993ba779",backTracking:"56504c50",divideAndConquer:"66151813","dynamicProgramming~greedy":"4a26c871",greedy:"5a6bff28",dynamicProgramming:"395ca1f3"}[e]+".css",a=d.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){u=m[o],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete c[e],b.parentNode.removeChild(b),n(i)},b.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(b)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=o(e);var m=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",m.name="ChunkLoadError",m.type=r,m.request=c,n[1](m)}a[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=r,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)d.d(n,r,function(t){return e[t]}.bind(null,r));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/visalgo/",d.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var b=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("c760"),n("d3b7"),n("f8c9");var r=n("7a23"),c=(n("93bb"),n("e1fe"),n("eaec"),n("8f60"),n("9590"),n("b065"),n("5959"),n("f872"),n("e2bc")),a=n("fc2b"),i=n("54bb"),o=function(e){return Object(r["pushScopeId"])("data-v-3e59cf2a"),e=e(),Object(r["popScopeId"])(),e},d=o((function(){return Object(r["createElementVNode"])("span",null,"动态规划",-1)})),u=o((function(){return Object(r["createElementVNode"])("span",null,"面额问题",-1)})),l=o((function(){return Object(r["createElementVNode"])("span",null,"01背包问题",-1)})),m=o((function(){return Object(r["createElementVNode"])("span",null,"矩阵链乘法",-1)})),b=o((function(){return Object(r["createElementVNode"])("span",null,"最长公共子序列",-1)})),g=o((function(){return Object(r["createElementVNode"])("span",null,"回溯法",-1)})),f=o((function(){return Object(r["createElementVNode"])("span",null,"N皇后问题",-1)})),s=o((function(){return Object(r["createElementVNode"])("span",null,"贪心法",-1)})),h=o((function(){return Object(r["createElementVNode"])("span",null,"活动安排问题",-1)})),y=o((function(){return Object(r["createElementVNode"])("span",null,"田忌赛马",-1)})),p=o((function(){return Object(r["createElementVNode"])("span",null,"分治法",-1)})),O=o((function(){return Object(r["createElementVNode"])("span",null,"棋盘覆盖问题",-1)}));function j(e,t){var n=c["c"],o=Object(r["resolveComponent"])("collection"),j=i["a"],k=Object(r["resolveComponent"])("files"),C=a["b"],v=a["c"],N=a["a"],x=c["a"],P=Object(r["resolveComponent"])("router-view"),V=c["d"],w=c["b"];return Object(r["openBlock"])(),Object(r["createBlock"])(w,{class:"home-container"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(n,{class:"home-title"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.$store.state.headerTitle),1)])]})),_:1}),Object(r["createVNode"])(w,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,{width:"200px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(N,{"active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","default-active":"2","text-color":"#fff",router:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{index:"dynamic-programming"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o)]})),_:1}),d]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{index:"denomination"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k)]})),_:1}),u]})),_:1}),Object(r["createVNode"])(C,{index:"knapsack-problem"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k)]})),_:1}),l]})),_:1}),Object(r["createVNode"])(C,{index:"matrix-chain-multiplication"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k)]})),_:1}),m]})),_:1}),Object(r["createVNode"])(C,{index:"longest-common-subsequence"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k)]})),_:1}),b]})),_:1})]})),_:1}),Object(r["createVNode"])(v,{index:"back-tracking"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o)]})),_:1}),g]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{index:"nqueens"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k)]})),_:1}),f]})),_:1})]})),_:1}),Object(r["createVNode"])(v,{index:"greedy"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o)]})),_:1}),s]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{index:"activity-selection"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k)]})),_:1}),h]})),_:1}),Object(r["createVNode"])(C,{index:"horse-racing"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k)]})),_:1}),y]})),_:1})]})),_:1}),Object(r["createVNode"])(v,{index:"divide-and-conquer"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o)]})),_:1}),p]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{index:"chess-board-cover"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k)]})),_:1}),O]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P)]})),_:1})]})),_:1})]})),_:1})}n("f42e");var k=n("6b0d"),C=n.n(k);const v={},N=C()(v,[["render",j],["__scopeId","data-v-3e59cf2a"]]);var x=N,P=(n("3ca3"),n("ddb0"),n("b0c0"),n("6c02")),V=(n("a630"),n("5502")),w=Object(V["a"])({state:{headerTitle:"",boardSize:4,boardData:[]},mutations:{boardInit:function(e,t){e.boardSize=t,e.boardData=[];for(var n=0;n<t;n++)e.boardData.push(Array.from({length:t},(function(){return 0})))},boardDestroy:function(e){e.boardData=[]},boardDataChange:function(e,t){e.boardData[t.row][t.col]=t.value},headerTitleChange:function(e,t){e.headerTitle=t}},actions:{},modules:{}}),T=[{path:"/nqueens",name:"NQueens",component:function(){return Promise.all([n.e("backTracking~divideAndConquer~dynamicProgramming~greedy"),n.e("backTracking~greedy"),n.e("backTracking")]).then(n.bind(null,"ffb1"))}},{path:"/denomination",name:"Denomination",component:function(){return Promise.all([n.e("backTracking~divideAndConquer~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"2c7a"))}},{path:"/matrix-chain-multiplication",name:"MatrixChainMultiplication",component:function(){return Promise.all([n.e("backTracking~divideAndConquer~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"7dc3"))}},{path:"/longest-common-subsequence",name:"LongestCommonSubsequence",component:function(){return Promise.all([n.e("backTracking~divideAndConquer~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"b5b4"))}},{path:"/knapsack-problem",name:"KnapsackProblem",component:function(){return Promise.all([n.e("backTracking~divideAndConquer~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"4a99"))}},{path:"/activity-selection",name:"ActivitySelection",component:function(){return Promise.all([n.e("backTracking~divideAndConquer~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("backTracking~greedy"),n.e("greedy")]).then(n.bind(null,"b303"))}},{path:"/horse-racing",name:"HorseRacing",component:function(){return Promise.all([n.e("backTracking~divideAndConquer~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("backTracking~greedy"),n.e("greedy")]).then(n.bind(null,"fe98"))}},{path:"/chess-board-cover",name:"ChessBoardCover",component:function(){return Promise.all([n.e("backTracking~divideAndConquer~dynamicProgramming~greedy"),n.e("divideAndConquer")]).then(n.bind(null,"6fc2"))}},{path:"/",redirect:"/nqueens"}],_=Object(P["a"])({history:Object(P["b"])(),routes:T});_.beforeEach((function(e,t,n){"NQueens"===e.name?w.commit("headerTitleChange","N皇后问题"):"Denomination"===e.name?w.commit("headerTitleChange","面额问题"):"KnapsackProblem"===e.name?w.commit("headerTitleChange","01背包问题"):"MatrixChainMultiplication"===e.name?w.commit("headerTitleChange","矩阵链乘法"):"LongestCommonSubsequence"===e.name?w.commit("headerTitleChange","最长公共子序列"):"ActivitySelection"===e.name?w.commit("headerTitleChange","活动安排问题"):"HorseRacing"===e.name?w.commit("headerTitleChange","田忌赛马"):"ChessBoardCover"===e.name&&w.commit("headerTitleChange","棋盘覆盖问题"),n()}));var q=_,A=(n("aede"),n("1ed2")),E=Object(r["createApp"])(x);for(var S in E.use(w).use(q),A)if(Reflect.has(A,S)){var D=A[S];E.component(S,D)}E.mount("#app")},aede:function(e,t,n){},bea2:function(e,t,n){},f42e:function(e,t,n){"use strict";n("bea2")}});
//# sourceMappingURL=app.9f58a4ec.js.map