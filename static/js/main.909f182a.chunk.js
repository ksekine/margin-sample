(this["webpackJsonpmargin-sample"]=this["webpackJsonpmargin-sample"]||[]).push([[0],{210:function(e,a,t){e.exports=t(396)},215:function(e,a,t){},216:function(e,a,t){},396:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(14),i=t.n(r),c=(t(215),t(216),t(23)),o=t(110),u=t(432),m=t(430),s=t(434),d=t(435),E=t(433),f=t(431),p=t(41),g=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.b,{width:730,height:350,data:e.data,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(p.e,{dataKey:"marginMaintenanceRate",label:"\u8a3c\u62e0\u91d1\u7dad\u6301\u7387"}),l.a.createElement(p.f,{label:"\u30ec\u30fc\u30c8"}),l.a.createElement(p.c,{strokeDasharray:"3 3"}),l.a.createElement(p.d,null),l.a.createElement(p.a,{dataKey:"currentRate",fill:"#8884d8"})))},h=["\u8cb7\u3044","\u58f2\u308a"],v=function(){var e=[.3,.5,1,1.5,2,4,5],a=Object(n.useState)([]),t=Object(c.a)(a,2),r=t[0],i=t[1],p=Object(o.b)(),v=p.register,b=p.handleSubmit,y=p.control,R=p.errors,w=b((function(a){var t,n=a.depositeMargin,l=a.executionRate,r=a.transactionQuantity,c=a.leverage,o=a.position,u=[];e.map((function(e){t=o===h[0]?(1+e/c)*l-n/r:o===h[1]?(1-e/c)*l+n/r:1,u.push({currentRate:t,marginMaintenanceRate:e})})),i(u),console.log(u)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"\u8a3c\u62e0\u91d1\u7dad\u6301\u7387\u8a08\u7b97"),l.a.createElement(g,{data:r}),l.a.createElement("form",{onSubmit:w},l.a.createElement("div",null,l.a.createElement(u.a,{inputRef:v({required:!0}),label:"\u9810\u5165\u8a3c\u62e0\u91d1",name:"depositeMargin"}),R.depositeMargin&&l.a.createElement("div",null,"This field is required")),l.a.createElement("div",null,l.a.createElement(u.a,{inputRef:v({required:!0}),label:"\u7d04\u5b9a\u30ec\u30fc\u30c8",name:"executionRate"}),R.executionRate&&l.a.createElement("div",null,"This field is required")),l.a.createElement("div",null,l.a.createElement(u.a,{inputRef:v({required:!0}),label:"\u53d6\u5f15\u6570\u91cf",name:"transactionQuantity"}),R.transactionQuantity&&l.a.createElement("div",null,"This field is required")),l.a.createElement("div",null,l.a.createElement(u.a,{inputRef:v({required:!0}),label:"\u30ec\u30d0\u30ec\u30c3\u30b8",name:"leverage"}),R.leverage&&l.a.createElement("div",null,"This field is required")),l.a.createElement("div",null,l.a.createElement(m.a,null,"\u30dd\u30b8\u30b7\u30e7\u30f3"),l.a.createElement(o.a,{name:"position",as:l.a.createElement(s.a,null,h.map((function(e){return l.a.createElement(d.a,{key:e,value:e,control:l.a.createElement(E.a,null),label:e})}))),control:y,defaultValue:h[0]})),l.a.createElement(f.a,{type:"submit",variant:"outlined",color:"primary"},"\u8a08\u7b97")))},b=function(){return l.a.createElement("div",null,l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[210,1,2]]]);
//# sourceMappingURL=main.909f182a.chunk.js.map