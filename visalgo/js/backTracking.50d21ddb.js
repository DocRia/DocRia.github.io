(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["backTracking"],{"49af":function(e,t,a){"use strict";a("a8f7")},a8f7:function(e,t,a){},b88e:function(e,t,a){},ef99:function(e,t,a){"use strict";a("b88e")},ffb1:function(e,t,a){"use strict";a.r(t);a("3e9e"),a("9a84"),a("781c"),a("bc43"),a("797a"),a("5959");var c=a("a3ae"),n=a("7a23"),o=a("54bb"),r=a("7bc7"),l=a("bc34");const s=Object(l["b"])({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:["large","default","small"]},effect:{type:String,values:["dark","light","plain"],default:"light"}}),i={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent};var b=a("2711"),u=a("c23a"),d=a("304f");const f=Object(n["defineComponent"])({name:"ElTag",components:{ElIcon:o["a"],Close:r["Close"]},props:s,emits:i,setup(e,{emit:t}){const a=Object(u["b"])(),c=Object(d["a"])("tag"),o=Object(n["computed"])(()=>{const{type:t,hit:n,effect:o,closable:r}=e;return[c.b(),c.is("closable",r),c.m(t),c.m(a.value),c.m(o),c.is("hit",n)]}),r=e=>{e.stopPropagation(),t("close",e)},l=e=>{t("click",e)};return{ns:c,classes:o,handleClose:r,handleClick:l}}});function j(e,t,a,c,o,r){const l=Object(n["resolveComponent"])("close"),s=Object(n["resolveComponent"])("el-icon");return e.disableTransitions?(Object(n["openBlock"])(),Object(n["createBlock"])(n["Transition"],{key:1,name:e.ns.namespace.value+"-zoom-in-center"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",{class:Object(n["normalizeClass"])(e.classes),style:Object(n["normalizeStyle"])({backgroundColor:e.color}),onClick:t[1]||(t[1]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(n["createElementVNode"])("span",{class:Object(n["normalizeClass"])(e.ns.e("content"))},[Object(n["renderSlot"])(e.$slots,"default")],2),e.closable?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0,class:Object(n["normalizeClass"])(e.ns.e("close")),onClick:e.handleClose},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l)]),_:1},8,["class","onClick"])):Object(n["createCommentVNode"])("v-if",!0)],6)]),_:3},8,["name"])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{key:0,class:Object(n["normalizeClass"])(e.classes),style:Object(n["normalizeStyle"])({backgroundColor:e.color}),onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(n["createElementVNode"])("span",{class:Object(n["normalizeClass"])(e.ns.e("content"))},[Object(n["renderSlot"])(e.$slots,"default")],2),e.closable?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0,class:Object(n["normalizeClass"])(e.ns.e("close")),onClick:e.handleClose},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l)]),_:1},8,["class","onClick"])):Object(n["createCommentVNode"])("v-if",!0)],6))}var O=Object(b["a"])(f,[["render",j]]);const p=Object(c["a"])(O);var k=a("f19b"),C=a("7f58"),v=a("f80f"),m=a("cf2e"),h=a("2909"),g=a("5502"),w=a("3ef4"),V=(a("5e0e"),{class:"board"}),y={setup:function(e){var t=Object(g["b"])();return Object(n["onUnmounted"])((function(){t.commit("boardDestroy")})),function(e,t){var a=p,c=C["a"];return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",V,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.$store.state.boardSize,(function(t,o){return Object(n["openBlock"])(),Object(n["createBlock"])(c,{key:o},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.$store.state.boardSize,(function(c,o){return Object(n["openBlock"])(),Object(n["createBlock"])(a,{key:o,type:2===e.$store.state.boardData[t-1][c-1]?"warning":"",class:"qblock",effect:"dark",size:"large"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(1===e.$store.state.boardData[t-1][c-1]?"X":""),1)]})),_:2},1032,["type"])})),128))]})),_:2},1024)})),128))])}}},N=(a("ef99"),a("6b0d")),x=a.n(N);const B=x()(y,[["__scopeId","data-v-0cb24e4c"]]);var _=B,S=function(e){return Object(n["pushScopeId"])("data-v-6a0d6cfb"),e=e(),Object(n["popScopeId"])(),e},z={class:"n-queens-container-box"},T={class:"board-setting-container"},E=S((function(){return Object(n["createElementVNode"])("span",{class:"demonstration"},"请选择棋盘大小（4-10）",-1)})),D={class:"slider"},P=Object(n["createTextVNode"])("确认"),I=Object(n["createTextVNode"])("重置"),M={class:"board"},$=Object(n["createTextVNode"])(" 开始回溯 "),F={setup:function(e){var t=Object(n["ref"])(4),a=Object(n["ref"])(!1),c=Object(g["b"])(),r=function(){t.value<4?w["a"].error({message:"棋盘大小不能小于4"}):(c.commit("boardInit",t.value),a.value=!0)},l=function(){a.value=!1},s=function(){for(var e=c.state.boardState[c.state.boardCurrCount],a=0;a<t.value;a++)for(var n=0;n<t.value;n++)c.state.boardData[a][n]=0;for(var o=0;o<t.value;o++){if(-1===e[o])break;for(var r=e[o],l=o,s=0;s<t.value;s++)c.state.boardData[r][s]=1;for(var i=0;i<t.value;i++)c.state.boardData[i][l]=1;while(1){if(r--,l--,!(r>=0&&l>=0))break;c.state.boardData[r][l]=1}r=e[o],l=o;while(1){if(r--,l++,!(r>=0&&l<t.value))break;c.state.boardData[r][l]=1}r=e[o],l=o;while(1){if(r++,l--,!(r<t.value&&l>=0))break;c.state.boardData[r][l]=1}r=e[o],l=o;while(1){if(r++,l++,!(r<t.value&&l<t.value))break;c.state.boardData[r][l]=1}c.state.boardData[e[o]][o]=2}},i=function(){c.state.boardCurrCount>0?(c.state.boardCurrCount--,s()):w["a"].warning({message:"已经是第一步了"})},b=function(){if(c.state.boardCurrCount<c.state.boardMaxCount)c.state.boardCurrCount++;else{if(c.state.isFinished)return u(),w["a"].success({message:"已经是最后一步了"});var e=Object(h["a"])(c.state.boardState[c.state.boardCurrCount]);if(c.state.isBackTracking){for(var a=0;a<t.value;a++)if(-1===e[a]){var n=c.state.backTrackingPosition+1;while(n<t.value){if(0===c.state.boardData[n][a]){e[a]=n,c.state.isBackTracking=!1;break}n++}if(n===t.value){var o=t.value-1;while(-1===e[o])o--;c.state.backTrackingPosition=e[o],e[o]=-1}break}c.state.boardMaxCount++,c.state.boardCurrCount=c.state.boardMaxCount,c.state.boardState.push(e)}else{for(var r=0;r<t.value;r++)if(-1===e[r]){var l=0;while(l<t.value){if(0===c.state.boardData[l][r]){e[r]=l;break}l++}l===t.value&&(c.state.isBackTracking=!0);break}if(c.state.isBackTracking){var i=t.value-1;while(-1===e[i])i--;c.state.backTrackingPosition=e[i],e[i]=-1}c.state.boardMaxCount++,c.state.boardCurrCount=c.state.boardMaxCount,c.state.boardState.push(e)}-1!==e[e.length-1]&&(c.state.isFinished=!0)}s()},u=function(){0!==c.state.autoPlaySetting&&(clearInterval(c.state.autoPlaySetting),c.state.autoPlaySetting=0)},d=function(){if(0!==c.state.autoPlaySetting)return w["a"].warning({message:"正在自动演示"});c.state.autoPlaySetting=setInterval(b,1e3)};return function(e,c){var s=Object(n["resolveComponent"])("video-play"),f=o["a"],j=m["a"],O=v["a"],h=Object(n["resolveComponent"])("video-pause"),g=Object(n["resolveComponent"])("d-arrow-right"),w=Object(n["resolveComponent"])("d-arrow-left"),V=C["a"],y=k["a"],N=Object(n["resolveComponent"])("info-filled"),x=p;return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",z,[Object(n["createVNode"])(V,{class:"step-bar"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(O,{content:"自动演示",placement:"top"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j,{size:"large",type:"primary",plain:"",class:"step-button",disabled:!a.value,onClick:d},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s)]})),_:1})]})),_:1},8,["disabled"])]})),_:1}),Object(n["createVNode"])(O,{content:"暂停演示",placement:"top"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j,{size:"large",type:"primary",plain:"",class:"step-button",disabled:!a.value,onClick:u},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(h)]})),_:1})]})),_:1},8,["disabled"])]})),_:1}),Object(n["createVNode"])(O,{content:"前进",placement:"top"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j,{size:"large",type:"primary",plain:"",class:"step-button",disabled:!a.value,onClick:b},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g)]})),_:1})]})),_:1},8,["disabled"])]})),_:1}),Object(n["createVNode"])(O,{content:"后退",placement:"top"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j,{size:"large",type:"primary",plain:"",class:"step-button",disabled:!a.value,onClick:i},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w)]})),_:1})]})),_:1},8,["disabled"])]})),_:1})]})),_:1}),Object(n["createElementVNode"])("div",T,[Object(n["createVNode"])(V,{class:"board-setting"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,null,{default:Object(n["withCtx"])((function(){return[E]})),_:1}),Object(n["createVNode"])(V,null,{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",D,[Object(n["createVNode"])(y,{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=function(e){return t.value=e}),"show-input":"",max:10},null,8,["modelValue"])]),a.value?(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:1,type:"info",plain:"",class:"set-board-button",onClick:l},{default:Object(n["withCtx"])((function(){return[I]})),_:1})):(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:0,type:"primary",plain:"",class:"set-board-button",onClick:r},{default:Object(n["withCtx"])((function(){return[P]})),_:1}))]})),_:1})]})),_:1})]),Object(n["createElementVNode"])("div",M,[a.value?(Object(n["openBlock"])(),Object(n["createBlock"])(_,{key:0})):Object(n["createCommentVNode"])("",!0),e.$store.state.isBackTracking?(Object(n["openBlock"])(),Object(n["createBlock"])(x,{key:1,type:"warning",size:"large"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N)]})),_:1}),$]})),_:1})):Object(n["createCommentVNode"])("",!0)])])}}};a("49af");const q=x()(F,[["__scopeId","data-v-6a0d6cfb"]]);t["default"]=q}}]);
//# sourceMappingURL=backTracking.50d21ddb.js.map