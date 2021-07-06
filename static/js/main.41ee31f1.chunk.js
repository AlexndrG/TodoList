(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{58:function(e,t,a){e.exports=a(70)},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),r=a.n(l),c=(a(63),a(25)),o=a(15),u=a(31),s=a(20),d=(a(64),a(103)),m=a(112),f=a(102);function v(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),s=u[0],v=u[1],b=function(){""!==l.trim()?(e.addItem(l),r("")):v("Title is required")};return i.a.createElement("div",null,i.a.createElement(m.a,{value:l,onChange:function(e){r(e.currentTarget.value)},onKeyPress:function(e){v(null),13===e.charCode&&b()},className:s?"error":"",label:"Title",variant:"outlined",error:!!s,helperText:s,size:"small"}),i.a.createElement(f.a,{onClick:b,color:"primary",size:"small"},i.a.createElement(d.a,{fontSize:"large"})))}function b(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(e.value),u=Object(o.a)(c,2),s=u[0],d=u[1];return l?i.a.createElement(m.a,{value:s,onChange:function(e){d(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.onChange(s)}}):i.a.createElement("span",{onDoubleClick:function(){r(!0),d(e.value)}},e.value)}var E=a(114),h=a(105),j=a(104);function p(e){return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(b,{value:e.title,onChange:function(t){e.changeTodolistTitle(e.id,t)}}),i.a.createElement(f.a,{onClick:function(){e.removeTodolist(e.id)},style:{color:"black"},size:"small"},i.a.createElement(j.a,null))),i.a.createElement(v,{addItem:function(t){e.addTask(t,e.id)}}),i.a.createElement("ul",{style:{listStyle:"none",padding:"1px"}},e.tasks.map((function(t){return i.a.createElement("li",{key:t.id},i.a.createElement(E.a,{onChange:function(a){var n=a.currentTarget.checked;e.changeTaskStatus(t.id,n,e.id)},checked:t.isDone,size:"small",color:"primary"}),i.a.createElement("span",{className:t.isDone?"is-done":""},i.a.createElement(b,{value:t.title,onChange:function(a){e.changeTaskTitle(t.id,a,e.id)}})),i.a.createElement(f.a,{onClick:function(){return e.removeTask(t.id,e.id)},color:"primary",size:"small"},i.a.createElement(j.a,{fontSize:"small"})))}))),i.a.createElement("div",null,i.a.createElement(h.a,{color:"all"===e.filter?"primary":"secondary",variant:"contained",size:"small",onClick:function(){return e.changeFilter("all",e.id)}},"All "),i.a.createElement(h.a,{style:{margin:"1px"},color:"active"===e.filter?"primary":"secondary",variant:"contained",size:"small",onClick:function(){return e.changeFilter("active",e.id)}},"Active "),i.a.createElement(h.a,{color:"completed"===e.filter?"primary":"secondary",variant:"contained",size:"small",onClick:function(){return e.changeFilter("completed",e.id)}},"Completed ")))}var O=a(113),g=a(106),k=a(107),y=a(109),T=a(110),C=a(111),S=a(71),D=a(108);var z=function(){var e;function t(e,t){var a=W[t];W[t]=a.filter((function(t){return t.id!==e})),A(Object(s.a)({},W))}function a(e,t){var a={id:Object(O.a)(),title:e,isDone:!1},n=W[t];W[t]=[a].concat(Object(u.a)(n)),A(Object(s.a)({},W))}function l(e,t){var a=x.find((function(e){return e.id===t}));a&&(a.filter=e,B(Object(u.a)(x)))}function r(e,t,a){var n=W[a].find((function(t){return t.id===e}));n&&(n.isDone=t,A(Object(s.a)({},W)))}function d(e,t,a){var n=W[a].find((function(t){return t.id===e}));n&&(n.title=t,A(Object(s.a)({},W)))}function m(e){B(x.filter((function(t){return t.id!==e}))),delete W[e],A(Object(s.a)({},W))}function b(e,t){var a=x.find((function(t){return t.id===e}));a&&(a.title=t,B(Object(u.a)(x)))}var E=Object(O.a)(),j=Object(O.a)(),z=Object(n.useState)([{id:E,title:"What to learn",filter:"all"},{id:j,title:"What to buy",filter:"all"}]),w=Object(o.a)(z,2),x=w[0],B=w[1],F=Object(n.useState)((e={},Object(c.a)(e,E,[{id:Object(O.a)(),title:"HTML&CSS",isDone:!0},{id:Object(O.a)(),title:"JS",isDone:!0}]),Object(c.a)(e,j,[{id:Object(O.a)(),title:"Milk",isDone:!0},{id:Object(O.a)(),title:"React Book",isDone:!0}]),e)),I=Object(o.a)(F,2),W=I[0],A=I[1];return i.a.createElement("div",{className:"App"},i.a.createElement(g.a,{position:"static"},i.a.createElement(k.a,{style:{justifyContent:"space-between"}},i.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(D.a,null)),i.a.createElement(y.a,{variant:"h6"},"Todolists"),i.a.createElement(h.a,{variant:"outlined",color:"inherit"}," Login"))),i.a.createElement(T.a,{fixed:!0,style:{padding:"20px 0"}},i.a.createElement(C.a,{container:!0,style:{marginBottom:"20px"}},i.a.createElement(v,{addItem:function(e){var t=Object(O.a)();B([{id:t,title:e,filter:"all"}].concat(Object(u.a)(x))),A(Object(s.a)(Object(s.a)({},W),{},Object(c.a)({},t,[])))}})),i.a.createElement(C.a,{container:!0,spacing:5},x.map((function(e){var n=W[e.id],c=n;return"active"===e.filter&&(c=n.filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(c=n.filter((function(e){return!0===e.isDone}))),i.a.createElement(C.a,{item:!0,key:e.id},i.a.createElement(S.a,{elevation:5,style:{padding:"20px"}},i.a.createElement(p,{id:e.id,title:e.title,tasks:c,removeTask:t,changeFilter:l,addTask:a,changeTaskStatus:r,filter:e.filter,removeTodolist:m,changeTaskTitle:d,changeTodolistTitle:b})))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.41ee31f1.chunk.js.map