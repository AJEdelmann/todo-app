(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/friend.e0c7b1d5.png"},34:function(e,t,a){e.exports=a(46)},39:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),o=a(3),i=a(4),l=a(6),u=a(5),m=a(7),p=(a(39),a(16)),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement(p.b,{style:{textDecoration:"none"},to:"/"},r.a.createElement("h1",{className:"logo"},"TODO APP")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/",activeClassName:"selected"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/news",activeClassName:"selected"},"News"))))}}]),t}(r.a.Component),h=a(17),b=a(2),f=a.n(b),O=function(){var e;return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://todo-api.albertedelmann.now.sh/tasks",t.prev=1,t.t0=f.a,t.next=5,f.a.awrap(fetch("https://todo-api.albertedelmann.now.sh/tasks"));case 5:return t.t1=t.sent.json(),t.next=8,t.t0.awrap.call(t.t0,t.t1);case 8:return e=t.sent,t.abrupt("return",e);case 12:return t.prev=12,t.t2=t.catch(1),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),null,null,[[1,12]])},v=function(e){var t,a;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://todo-api.albertedelmann.now.sh/tasks",n.prev=1,n.next=4,f.a.awrap(fetch("https://todo-api.albertedelmann.now.sh/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e})}));case 4:return t=n.sent,n.next=7,f.a.awrap(t.json());case 7:return a=n.sent,n.abrupt("return",a);case 11:return n.prev=11,n.t0=n.catch(1),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),null,null,[[1,11]])},E=a(10),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({value:""}),this.props.showLoading(),this.props.addTodo(this.state.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:"todo-form",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"input-item"},r.a.createElement("input",{type:"text",name:"todo",value:this.state.value,onChange:this.handleChange})),r.a.createElement("input",{className:"btn",type:"submit",value:"ADD"})))}}]),t}(r.a.Component),y=Object(E.b)((function(e){return e}),{addTodo:function(e){return function(t){var a;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.awrap(v(e));case 2:a=n.sent,t({type:"ADD_TODO",payload:a});case 4:case"end":return n.stop()}}))}},showLoading:function(e){return{type:"SHOW_LOADING",payload:e}}})(j),g=Object(E.b)((function(e){return e}),{updateTodo:function(e){return{type:"UPDATE_TODO",payload:e}}})((function(e){return r.a.createElement("div",{className:"item"},r.a.createElement("p",null,e.data.text),r.a.createElement("button",{className:"btn",onClick:function(){return e.updateTodo(e.data)}},e.data.status?"\u2611":"\u2610"))})),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.items,t=e.map((function(e){return r.a.createElement(g,{key:e._id,data:e})}));return r.a.createElement("div",{className:"todos-container"},e.length>0&&r.a.createElement("div",{className:"todos"},r.a.createElement("h5",null,"TODOS"),t))}}]),t}(r.a.Component),N=Object(E.b)((function(e){return{items:e.items.filter((function(e){return!e.status}))}}))(w),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.items,t=e.map((function(e){return r.a.createElement(g,{key:e._id,data:e})}));return r.a.createElement("div",{className:"todones-container"},e.length>0&&r.a.createElement("div",{className:"todones"},r.a.createElement("h5",null,"BACKLOG"),t))}}]),t}(r.a.Component),D=Object(E.b)((function(e){return{items:e.items.filter((function(e){return e.status}))}}))(k),T=function(){return r.a.createElement("div",{className:"spinner"})},C=a(31),x=a.n(C),A=function(){return r.a.createElement("div",{className:"empty-screen"},r.a.createElement("img",{src:x.a}),r.a.createElement("p",null,"Use the form to create a new todo!"))},S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){return console.log("I AM RERENDERING"),console.log("MAINCONTAINER PROPS: ",this.props),r.a.createElement("main",{className:"main-container"},r.a.createElement(y,{addTodo:this.handleAddTodo}),r.a.createElement("div",{className:"feedback"},this.props.feedback&&r.a.createElement("small",null,"Oops, our cat broke the internet. Please try again...")),this.props.loading&&r.a.createElement(T,null),this.props.showFriend?r.a.createElement(A,null):r.a.createElement("span",null,r.a.createElement(N,null),r.a.createElement(D,null)))}}]),t}(r.a.Component),_=Object(E.b)((function(e){return{feedback:e.feedback,loading:e.loading,showFriend:e.showFriend}}),{fetchData:function(e){return function(e){var t;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(O());case 2:t=a.sent,e({type:"FETCH_DATA",payload:t});case 4:case"end":return a.stop()}}))}}})(S),I=a(32),P=a.n(I),F=function(e){var t=e.article;return r.a.createElement("div",{className:"article",onClick:function(){return e=t.url,void window.open(e,"_blank");var e}},r.a.createElement("div",{className:"img"},t.urlToImage?r.a.createElement("img",{src:t.urlToImage}):r.a.createElement("img",{src:"https://media0.giphy.com/media/OI8TsOa9KFAPu/giphy.gif?cid=790b76116ff1b97ce66612fdfbc17f90abfb14f8d9ec70c8&rid=giphy.gif"})),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"title"},t.title),r.a.createElement("p",null,t.description)))},H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={articles:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://newsapi.org/v2/everything?domains=nationalgeographic.com&apiKey=f8d7869212c24907bc585db6b6d267be",a.next=3,f.a.awrap(fetch("https://newsapi.org/v2/everything?domains=nationalgeographic.com&apiKey=f8d7869212c24907bc585db6b6d267be"));case 3:return e=a.sent,a.next=6,f.a.awrap(e.json());case 6:t=a.sent,this.setState({articles:t.articles});case 8:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.articles.map((function(e){return r.a.createElement(F,{article:e,key:e.publishedAt})}));return r.a.createElement(P.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"news-container",columnClassName:"col"},e.length>0?e:r.a.createElement(T,null))}}]),t}(r.a.Component),L=a(15),R=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(d,null),r.a.createElement(L.c,null,r.a.createElement(L.a,{exact:!0,path:"/news",component:H}),r.a.createElement(L.a,{exact:!0,path:"/",component:_}),r.a.createElement(L.a,{path:"*",component:A}))))}}]),t}(r.a.Component),G=a(19),K=a(22),M={items:[],loading:!1,feedback:!1,showFriend:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;if("UPDATE_TODO"===t.type){e.items.map((function(e){return e._id===t.payload._id&&(e.status=!e.status),e}));return e.loading=!1,Object.assign({},e)}return"ADD_TODO"===t.type?(e.items=[].concat(Object(K.a)(e.items),[t.payload]),e.loading=!1,Object.assign({},e)):"SHOW_LOADING"===t.type?(e.loading=!0,Object.assign({},e)):"FETCH_DATA"===t.type?(e.items=[].concat(Object(K.a)(e.items),Object(K.a)(t.payload)),Object.assign({},e)):e},U=a(33),B=Object(G.c)(J,Object(G.a)(U.a));s.a.render(r.a.createElement(E.a,{store:B},r.a.createElement(R,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.eff8c70b.chunk.js.map