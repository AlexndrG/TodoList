(this["webpackJsonptodo-16"]=this["webpackJsonptodo-16"]||[]).push([[0],{106:function(t,e,n){},107:function(t,e,n){},131:function(t,e,n){"use strict";n.r(e);var a,c,i=n(3),o=n(0),r=n.n(o),s=n(10),d=n.n(s),l=(n(106),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))}),u=(n(107),n(175)),j=n(176),b=n(177),O=n(168),f=n(133),h=n(171),T=n(179),m=n(178),g=n(17),p=n(8),v=n(60),x=n(81),k=n.n(x).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"ca2d4280-c827-4a30-a630-27fd3baa0cf3"}}),I=function(){return k.get("todo-lists")},S=function(t){return k.post("todo-lists",{title:t})},E=function(t){return k.delete("todo-lists/".concat(t))},C=function(t,e){return k.put("todo-lists/".concat(t),{title:e})},L=function(t){return k.get("todo-lists/".concat(t,"/tasks"))},y=function(t,e){return k.delete("todo-lists/".concat(t,"/tasks/").concat(e))},A=function(t,e){return k.post("todo-lists/".concat(t,"/tasks"),{title:e})},D=function(t,e,n){return k.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},w=function(t){return k.post("auth/login",t)},P=function(){return k.get("auth/me")},N=function(){return k.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var F=function(t,e){t.messages.length?e(Z(t.messages[0])):e(Z("Some error occurred")),e(q("failed"))},R=function(t,e){e(Z(t.message?t.message:"Some error occurred")),e(q("failed"))},M=n(36),G={},K=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(i){var o=Object(p.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);D(n,t,o).then((function(c){if(0===c.data.resultCode){var i=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(i)}else F(c.data,a)})).catch((function(t){R(t,a)}))}else console.warn("task not found in the state")}},U={isLoggedIn:!1},H=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},V={status:"idle",error:null,isInitialized:!1},Z=function(t){return{type:"APP/SET-ERROR",error:t}},q=function(t){return{type:"APP/SET-STATUS",status:t}},z=[],B=n(172),Y=n(132),J=n(44),_=n(180),$=n(169),Q=r.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var c=Object(o.useState)(""),r=Object(J.a)(c,2),s=r[0],d=r[1],l=Object(o.useState)(null),u=Object(J.a)(l,2),j=u[0],b=u[1],f=function(){""!==s.trim()?(e(s),d("")):b("Title is required")};return Object(i.jsxs)("div",{children:[Object(i.jsx)(_.a,{variant:"outlined",disabled:a,error:!!j,value:s,onChange:function(t){d(t.currentTarget.value)},onKeyPress:function(t){null!==j&&b(null),13===t.charCode&&f()},label:"Title",helperText:j}),Object(i.jsx)(O.a,{color:"primary",onClick:f,disabled:a,children:Object(i.jsx)($.a,{})})]})})),W=n(90),X=r.a.memo((function(t){console.log("EditableSpan called");var e=Object(o.useState)(!1),n=Object(J.a)(e,2),a=n[0],c=n[1],r=Object(o.useState)(t.value),s=Object(J.a)(r,2),d=s[0],l=s[1];return a?Object(i.jsx)(_.a,{value:d,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(d)}}):Object(i.jsx)("span",{onDoubleClick:function(){c(!0),l(t.value)},children:t.value})})),tt=n(170),et=n(182),nt=r.a.memo((function(t){var e=Object(o.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(o.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(o.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(i.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(i.jsx)(et.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(i.jsx)(X,{value:t.task.title,onChange:c}),Object(i.jsx)(O.a,{onClick:e,children:Object(i.jsx)(tt.a,{})})]},t.task.id)})),at=r.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,c=Object(W.a)(t,["demo"]);console.log("Todolist called");var r=Object(g.b)();Object(o.useEffect)((function(){if(!n){var t,e=(t=c.todolist.id,function(e){e(q("loading")),L(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(q("succeeded"))}))});r(e)}}),[]);var s=Object(o.useCallback)((function(t){c.addTask(t,c.todolist.id)}),[c.addTask,c.todolist.id]),d=Object(o.useCallback)((function(t){c.changeTodolistTitle(c.todolist.id,t)}),[c.todolist.id,c.changeTodolistTitle]),l=Object(o.useCallback)((function(){return c.changeFilter("all",c.todolist.id)}),[c.todolist.id,c.changeFilter]),u=Object(o.useCallback)((function(){return c.changeFilter("active",c.todolist.id)}),[c.todolist.id,c.changeFilter]),j=Object(o.useCallback)((function(){return c.changeFilter("completed",c.todolist.id)}),[c.todolist.id,c.changeFilter]),b=c.tasks;return"active"===c.todolist.filter&&(b=c.tasks.filter((function(t){return t.status===a.New}))),"completed"===c.todolist.filter&&(b=c.tasks.filter((function(t){return t.status===a.Completed}))),Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{children:[Object(i.jsx)(X,{value:c.todolist.title,onChange:d}),Object(i.jsx)(O.a,{onClick:function(){c.removeTodolist(c.todolist.id)},disabled:"loading"===c.todolist.entityStatus,children:Object(i.jsx)(tt.a,{})})]}),Object(i.jsx)(Q,{addItem:s,disabled:"loading"===c.todolist.entityStatus}),Object(i.jsx)("div",{children:b.map((function(t){return Object(i.jsx)(nt,{task:t,todolistId:c.todolist.id,removeTask:c.removeTask,changeTaskTitle:c.changeTaskTitle,changeTaskStatus:c.changeTaskStatus},t.id)}))}),Object(i.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(i.jsx)(h.a,{variant:"all"===c.todolist.filter?"outlined":"text",onClick:l,color:"default",children:"All"}),Object(i.jsx)(h.a,{variant:"active"===c.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(i.jsx)(h.a,{variant:"completed"===c.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),ct=n(14),it=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(g.c)((function(t){return t.todolists})),c=Object(g.c)((function(t){return t.tasks})),r=Object(g.b)(),s=Object(g.c)((function(t){return t.auth.isLoggedIn}));Object(o.useEffect)((function(){if(!n&&s){var t=function(t){t(q("loading")),I().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(q("succeeded"))}))};r(t)}}),[]);var d=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){y(e,t).then((function(a){var c=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(c)}))}}(t,e);r(n)}),[]),l=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){n(q("loading")),A(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(q("succeeded"))}else F(t.data,n)})).catch((function(t){R(t,n)}))}}(t,e);r(n)}),[]),u=Object(o.useCallback)((function(t,e,n){var a=K(t,{status:e},n);r(a)}),[]),j=Object(o.useCallback)((function(t,e,n){var a=K(t,{title:e},n);r(a)}),[]),b=Object(o.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};r(n)}),[]),O=Object(o.useCallback)((function(t){var e,n=(e=t,function(t){t(q("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),E(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(q("succeeded"))}))});r(n)}),[]),f=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){C(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);r(n)}),[]),h=Object(o.useCallback)((function(t){var e=function(t){return function(e){e(q("loading")),S(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(q("succeeded"))}))}}(t);r(e)}),[r]);return s?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(B.a,{container:!0,style:{padding:"20px"},children:Object(i.jsx)(Q,{addItem:h})}),Object(i.jsx)(B.a,{container:!0,spacing:3,children:a.map((function(t){var e=c[t.id];return Object(i.jsx)(B.a,{item:!0,children:Object(i.jsx)(Y.a,{style:{padding:"10px"},children:Object(i.jsx)(at,{todolist:t,tasks:e,removeTask:d,changeFilter:b,addTask:l,changeTaskStatus:u,removeTodolist:O,changeTaskTitle:j,changeTodolistTitle:f,demo:n})})},t.id)}))})]}):Object(i.jsx)(ct.a,{to:"/login"})},ot=n(184),rt=n(181);function st(t){return Object(i.jsx)(rt.a,Object(p.a)({elevation:6,variant:"filled"},t))}function dt(){var t=Object(g.c)((function(t){return t.app.error})),e=Object(g.b)(),n=function(t,n){"clickaway"!==n&&e(Z(null))},a=null!==t;return Object(i.jsx)(ot.a,{open:a,autoHideDuration:6e3,onClose:n,children:Object(i.jsx)(st,{onClose:n,severity:"error",children:t})})}var lt=n(185),ut=n(167),jt=n(173),bt=n(174),Ot=n(89),ft=function(){var t=Object(g.c)((function(t){return t.auth.isLoggedIn})),e=Object(g.b)(),n=Object(Ot.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Minimum length 3 symbols"):e.password="Required",e},onSubmit:function(t){var a;e((a=t,function(t){t(q("loading")),w(a).then((function(e){0===e.data.resultCode?(t(H(!0)),t(q("succeeded"))):F(e.data,t)})).catch((function(e){R(e,t)}))})),n.resetForm()}});return t?Object(i.jsx)(ct.a,{to:"/"}):Object(i.jsx)("div",{children:Object(i.jsxs)(lt.a,{children:[Object(i.jsxs)(ut.a,{children:[Object(i.jsxs)("p",{children:["To log in get registered",Object(i.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(i.jsx)("p",{children:"or use common test account credentials:"}),Object(i.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(i.jsx)("p",{children:"Password: free"})]}),Object(i.jsx)("form",{onSubmit:n.handleSubmit,children:Object(i.jsxs)(jt.a,{children:[Object(i.jsx)(_.a,Object(p.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email&&Object(i.jsx)("div",{style:{color:"red"},children:n.errors.email}),Object(i.jsx)(_.a,Object(p.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password&&Object(i.jsx)("div",{style:{color:"red"},children:n.errors.password}),Object(i.jsx)(bt.a,{label:"Remember me",control:Object(i.jsx)(et.a,Object(p.a)(Object(p.a)({},n.getFieldProps("rememberMe")),{},{checked:n.values.rememberMe}))}),Object(i.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})]})})};var ht=function(t){var e=t.demo,n=void 0!==e&&e;Object(o.useEffect)((function(){s((function(t){t(q("loading")),P().then((function(e){0===e.data.resultCode?(t(H(!0)),t({type:"APP/SET-INITIALIZED"}),t(q("succeeded"))):F(e.data,t)})).finally((function(){t({type:"APP/SET-INITIALIZED"})})).catch((function(e){R(e,t)}))}))}),[]);var a=Object(g.c)((function(t){return t.app.isInitialized})),c=Object(g.c)((function(t){return t.app.status})),r=Object(g.c)((function(t){return t.auth.isLoggedIn})),s=Object(g.b)();return a?Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(dt,{}),Object(i.jsxs)(j.a,{position:"static",children:[Object(i.jsxs)(b.a,{children:[Object(i.jsx)(O.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(i.jsx)(m.a,{})}),Object(i.jsx)(f.a,{variant:"h6",children:"News"}),r&&Object(i.jsx)(h.a,{color:"inherit",onClick:function(){s((function(t){t(q("loading")),N().then((function(e){0===e.data.resultCode?(t(H(!1)),t({type:"DELETE-ALL"}),t(q("succeeded"))):F(e.data,t)})).catch((function(e){R(e,t)}))}))},children:"Log out"})]}),"loading"===c&&Object(i.jsx)(u.a,{})]}),Object(i.jsx)(T.a,{fixed:!0,children:Object(i.jsxs)(ct.d,{children:[Object(i.jsx)(ct.b,{exact:!0,path:"/",render:function(){return Object(i.jsx)(it,{demo:n})}}),Object(i.jsx)(ct.b,{path:"/login",render:function(){return Object(i.jsx)(ft,{})}}),Object(i.jsx)(ct.b,{path:"/404",render:function(){return Object(i.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(i.jsx)(ct.a,{from:"*",to:"/404"})]})})]}):Object(i.jsx)(u.a,{})},Tt=n(41),mt=n(88),gt=Object(Tt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(p.a)(Object(p.a)({},t),{},Object(M.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!=e.taskId}))));case"ADD-TASK":return Object(p.a)(Object(p.a)({},t),{},Object(M.a)({},e.task.todoListId,[e.task].concat(Object(v.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(p.a)(Object(p.a)({},t),{},Object(M.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(p.a)(Object(p.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(p.a)(Object(p.a)({},t),{},Object(M.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(p.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(p.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(p.a)(Object(p.a)({},t),{},Object(M.a)({},e.todolistId,e.tasks));case"DELETE-ALL":return{};default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!=e.id}));case"ADD-TODOLIST":return[Object(p.a)(Object(p.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(v.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(p.a)(Object(p.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"DELETE-ALL":return[];default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(p.a)(Object(p.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(p.a)(Object(p.a)({},t),{},{error:e.error});case"APP/SET-INITIALIZED":return Object(p.a)(Object(p.a)({},t),{},{isInitialized:!0});default:return Object(p.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(p.a)(Object(p.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),pt=Object(Tt.d)(gt,Object(Tt.a)(mt.a));window.store=pt;var vt=n(46);d.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(vt.a,{children:Object(i.jsx)(g.a,{store:pt,children:Object(i.jsx)(ht,{})})})}),document.getElementById("root")),l()}},[[131,1,2]]]);
//# sourceMappingURL=main.b1cc53e0.chunk.js.map