(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["backTracking"],{"49af":function(e,t,a){"use strict";a("dfd1")},bc4f:function(e,t,a){},dfd1:function(e,t,a){},ef99:function(e,t,a){"use strict";a("bc4f")},ffb1:function(e,t,a){"use strict";a.r(t);var o=a("2909"),n=a("8bbf"),c=a("5502"),r=a("be66"),l=(a("5e0e"),{class:"board"}),i={setup:function(e){var t=Object(c["b"])();return Object(n["onUnmounted"])((function(){t.commit("boardDestroy")})),function(e,t){var a=Object(n["resolveComponent"])("el-tag"),o=Object(n["resolveComponent"])("el-row");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.$store.state.boardSize,(function(t,c){return Object(n["openBlock"])(),Object(n["createBlock"])(o,{key:c},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.$store.state.boardSize,(function(o,c){return Object(n["openBlock"])(),Object(n["createBlock"])(a,{key:c,type:2===e.$store.state.boardData[t-1][o-1]?"warning":"",class:"qblock",effect:"dark",size:"large"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(1===e.$store.state.boardData[t-1][o-1]?"X":""),1)]})),_:2},1032,["type"])})),128))]})),_:2},1024)})),128))])}}},u=(a("ef99"),a("6b0d")),b=a.n(u);const s=b()(i,[["__scopeId","data-v-0cb24e4c"]]);var d=s,f=function(e){return Object(n["pushScopeId"])("data-v-6a0d6cfb"),e=e(),Object(n["popScopeId"])(),e},j={class:"n-queens-container-box"},O={class:"board-setting-container"},p=f((function(){return Object(n["createElementVNode"])("span",{class:"demonstration"},"请选择棋盘大小（4-10）",-1)})),v={class:"slider"},C=Object(n["createTextVNode"])("确认"),k=Object(n["createTextVNode"])("重置"),m={class:"board"},w=Object(n["createTextVNode"])(" 开始回溯 "),g={setup:function(e){var t=Object(n["ref"])(4),a=Object(n["ref"])(!1),l=Object(c["b"])(),i=function(){t.value<4?r["ElMessage"].error({message:"棋盘大小不能小于4"}):(l.commit("boardInit",t.value),a.value=!0)},u=function(){a.value=!1},b=function(){for(var e=l.state.boardState[l.state.boardCurrCount],a=0;a<t.value;a++)for(var o=0;o<t.value;o++)l.state.boardData[a][o]=0;for(var n=0;n<t.value;n++){if(-1===e[n])break;for(var c=e[n],r=n,i=0;i<t.value;i++)l.state.boardData[c][i]=1;for(var u=0;u<t.value;u++)l.state.boardData[u][r]=1;while(1){if(c--,r--,!(c>=0&&r>=0))break;l.state.boardData[c][r]=1}c=e[n],r=n;while(1){if(c--,r++,!(c>=0&&r<t.value))break;l.state.boardData[c][r]=1}c=e[n],r=n;while(1){if(c++,r--,!(c<t.value&&r>=0))break;l.state.boardData[c][r]=1}c=e[n],r=n;while(1){if(c++,r++,!(c<t.value&&r<t.value))break;l.state.boardData[c][r]=1}l.state.boardData[e[n]][n]=2}},s=function(){l.state.boardCurrCount>0?(l.state.boardCurrCount--,b()):r["ElMessage"].warning({message:"已经是第一步了"})},f=function(){if(l.state.boardCurrCount<l.state.boardMaxCount)l.state.boardCurrCount++;else{if(l.state.isFinished)return g(),r["ElMessage"].success({message:"已经是最后一步了"});var e=Object(o["a"])(l.state.boardState[l.state.boardCurrCount]);if(l.state.isBackTracking){for(var a=0;a<t.value;a++)if(-1===e[a]){var n=l.state.backTrackingPosition+1;while(n<t.value){if(0===l.state.boardData[n][a]){e[a]=n,l.state.isBackTracking=!1;break}n++}if(n===t.value){var c=t.value-1;while(-1===e[c])c--;l.state.backTrackingPosition=e[c],e[c]=-1}break}l.state.boardMaxCount++,l.state.boardCurrCount=l.state.boardMaxCount,l.state.boardState.push(e)}else{for(var i=0;i<t.value;i++)if(-1===e[i]){var u=0;while(u<t.value){if(0===l.state.boardData[u][i]){e[i]=u;break}u++}u===t.value&&(l.state.isBackTracking=!0);break}if(l.state.isBackTracking){var s=t.value-1;while(-1===e[s])s--;l.state.backTrackingPosition=e[s],e[s]=-1}l.state.boardMaxCount++,l.state.boardCurrCount=l.state.boardMaxCount,l.state.boardState.push(e)}-1!==e[e.length-1]&&(l.state.isFinished=!0)}b()},g=function(){0!==l.state.autoPlaySetting&&(clearInterval(l.state.autoPlaySetting),l.state.autoPlaySetting=0)},h=function(){if(0!==l.state.autoPlaySetting)return r["ElMessage"].warning({message:"正在自动演示"});l.state.autoPlaySetting=setInterval(f,1e3)};return function(e,o){var c=Object(n["resolveComponent"])("video-play"),r=Object(n["resolveComponent"])("el-icon"),l=Object(n["resolveComponent"])("el-button"),b=Object(n["resolveComponent"])("el-tooltip"),V=Object(n["resolveComponent"])("video-pause"),x=Object(n["resolveComponent"])("d-arrow-right"),N=Object(n["resolveComponent"])("d-arrow-left"),y=Object(n["resolveComponent"])("el-row"),_=Object(n["resolveComponent"])("el-slider"),B=Object(n["resolveComponent"])("info-filled"),D=Object(n["resolveComponent"])("el-tag");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",j,[Object(n["createVNode"])(y,{class:"step-bar"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{content:"自动演示",placement:"top"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{size:"large",type:"primary",plain:"",class:"step-button",disabled:!a.value,onClick:h},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(r,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(c)]})),_:1})]})),_:1},8,["disabled"])]})),_:1}),Object(n["createVNode"])(b,{content:"暂停演示",placement:"top"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{size:"large",type:"primary",plain:"",class:"step-button",disabled:!a.value,onClick:g},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(r,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V)]})),_:1})]})),_:1},8,["disabled"])]})),_:1}),Object(n["createVNode"])(b,{content:"前进",placement:"top"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{size:"large",type:"primary",plain:"",class:"step-button",disabled:!a.value,onClick:f},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(r,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x)]})),_:1})]})),_:1},8,["disabled"])]})),_:1}),Object(n["createVNode"])(b,{content:"后退",placement:"top"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{size:"large",type:"primary",plain:"",class:"step-button",disabled:!a.value,onClick:s},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(r,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N)]})),_:1})]})),_:1},8,["disabled"])]})),_:1})]})),_:1}),Object(n["createElementVNode"])("div",O,[Object(n["createVNode"])(y,{class:"board-setting"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,null,{default:Object(n["withCtx"])((function(){return[p]})),_:1}),Object(n["createVNode"])(y,null,{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",v,[Object(n["createVNode"])(_,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=function(e){return t.value=e}),"show-input":"",max:10},null,8,["modelValue"])]),a.value?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:1,type:"info",plain:"",class:"set-board-button",onClick:u},{default:Object(n["withCtx"])((function(){return[k]})),_:1})):(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,type:"primary",plain:"",class:"set-board-button",onClick:i},{default:Object(n["withCtx"])((function(){return[C]})),_:1}))]})),_:1})]})),_:1})]),Object(n["createElementVNode"])("div",m,[a.value?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:0})):Object(n["createCommentVNode"])("",!0),e.$store.state.isBackTracking?(Object(n["openBlock"])(),Object(n["createBlock"])(D,{key:1,type:"warning",size:"large"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(r,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(B)]})),_:1}),w]})),_:1})):Object(n["createCommentVNode"])("",!0)])])}}};a("49af");const h=b()(g,[["__scopeId","data-v-6a0d6cfb"]]);t["default"]=h}}]);
//# sourceMappingURL=backTracking.025a86fb.js.map