(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(8),r=n.n(c),l=(n(14),n(6)),o=n(1),u=n(3),d=n(2);n(15);function s(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(null),o=Object(d.a)(l,2),u=o[0],s=o[1],f=function(){var t=c.trim();""!==t?(e.addItem(t),r("")):s("Title is required")};return i.a.createElement("div",null,i.a.createElement("input",{value:c,onChange:function(e){r(e.currentTarget.value)},onKeyPress:function(e){s(null),13===e.charCode&&f()},style:u?{border:"3px solid red"}:{}}),i.a.createElement("button",{onClick:f},"+"),i.a.createElement("div",{style:u?{color:"red"}:{display:"none"}},u))}function f(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(e.title),o=Object(d.a)(l,2),u=o[0],s=o[1],f=function(){r(!1),u.trim()?e.changeTitle(u):s(e.title)};return c?i.a.createElement("input",{autoFocus:!0,value:u,onBlur:f,onChange:function(e){s(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&f()}}):i.a.createElement("span",{onDoubleClick:function(){return r(!0)}},e.title)}function m(e){return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(f,{title:e.title,changeTitle:function(t){return e.changeTodoListTitle(t,e.id)}}),i.a.createElement("button",{onClick:function(){return e.removeTodolist(e.id)}},"x")),i.a.createElement(s,{addItem:function(t){e.addTask(t,e.id)}}),i.a.createElement("ul",null,e.tasks.map((function(t){return i.a.createElement("li",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement("input",{type:"checkbox",onChange:function(n){var a=n.currentTarget.checked;e.changeTaskStatus(t.id,a,e.id)},checked:t.isDone}),i.a.createElement(f,{title:t.title,changeTitle:function(n){e.changeTaskTitle(t.id,n,e.id)}}),i.a.createElement("button",{onClick:function(){return e.removeTask(t.id,e.id)}},"x"))}))),i.a.createElement("div",null,i.a.createElement("button",{className:"all"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter("all",e.id)}},"All"),i.a.createElement("button",{className:"active"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter("active",e.id)}},"Active"),i.a.createElement("button",{className:"completed"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter("completed",e.id)}},"Completed")))}var b=n(18);var v=function(){var e,t=Object(b.a)(),n=Object(b.a)(),c=Object(a.useState)([{id:t,title:"What to learn",filter:"all"},{id:n,title:"What to buy",filter:"all"}]),r=Object(d.a)(c,2),f=r[0],v=r[1],j=Object(a.useState)((e={},Object(u.a)(e,t,[{id:Object(b.a)(),title:"HTML&CSS",isDone:!1},{id:Object(b.a)(),title:"JS",isDone:!1}]),Object(u.a)(e,n,[{id:Object(b.a)(),title:"Milk",isDone:!1},{id:Object(b.a)(),title:"React Book",isDone:!1}]),e)),O=Object(d.a)(j,2),h=O[0],k=O[1];function E(e,t){var n=h[t];h[t]=n.filter((function(t){return t.id!=e})),k(Object(o.a)({},h))}function g(e,t){var n={id:Object(b.a)(),title:e,isDone:!1},a=h[t];h[t]=[n].concat(Object(l.a)(a)),k(Object(o.a)({},h))}function T(e,t,n){var a=h[n].find((function(t){return t.id===e}));a&&(a.isDone=t,k(Object(o.a)({},h)))}function p(e,t){var n=f.find((function(e){return e.id===t}));n&&(n.filter=e,v(Object(l.a)(f)))}function C(e){v(f.filter((function(t){return t.id!=e}))),delete h[e],k(Object(o.a)({},h))}function y(e,t,n){var a=h[n].find((function(t){return t.id===e}));a&&(a.title=t,k(Object(o.a)({},h)))}function D(e,t){var n=f.map((function(n){return n.id===t?Object(o.a)(Object(o.a)({},n),{},{title:e}):n}));v(n)}return i.a.createElement("div",{className:"App"},i.a.createElement(s,{addItem:function(e){var t={id:Object(b.a)(),title:e,filter:"all"};v([].concat(Object(l.a)(f),[t])),k(Object(o.a)(Object(o.a)({},h),{},Object(u.a)({},t.id,[])))}}),f.map((function(e){var t=h[e.id],n=t;return"active"===e.filter&&(n=t.filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(n=t.filter((function(e){return!0===e.isDone}))),i.a.createElement(m,{key:e.id,id:e.id,title:e.title,tasks:n,removeTask:E,changeFilter:p,addTask:g,changeTaskStatus:T,filter:e.filter,removeTodolist:C,changeTaskTitle:y,changeTodoListTitle:D})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bd3e6887.chunk.js.map