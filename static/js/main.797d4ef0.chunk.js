(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/friend.e0c7b1d5.png"},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),s=a.n(c),l=a(2),i=a(3),o=a(5),u=a(4),m=a(6),d=(a(32),a(13)),h=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement(d.b,{to:"/"},r.a.createElement("h1",null,"TODO APP")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/",activeClassName:"selected"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/news",activeClassName:"selected"},"News"))))}}]),t}(r.a.Component),p=a(26),f=a(7),b=a.n(f),v=a(15),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addTodo(this.state.value),this.setState({value:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:"todo-form",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"input-item"},r.a.createElement("input",{type:"text",name:"todo",onChange:this.handleChange,value:this.state.value})),r.a.createElement("input",{className:"btn",type:"submit",value:"ADD"})))}}]),t}(r.a.Component),O=function(e){return r.a.createElement("div",{className:"item"},r.a.createElement("p",null,e.data.text),r.a.createElement("button",{className:"btn",onClick:function(t){t.preventDefault();var a=e.data;e.handleUpdate(a)}},e.data.status?"\u2611":"\u2610"))},g=a(16),j=a.n(g),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).updateItem=function(e){a.props.updateFromChild(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items,a=t.map((function(t){return r.a.createElement(O,{key:t._id,data:t,handleUpdate:e.updateItem})}));return r.a.createElement("div",{className:"todos-container"},t.length>0?r.a.createElement("div",{className:"todos"},r.a.createElement("h5",null,"TODOS"),a):r.a.createElement("div",{className:"todos"},r.a.createElement("h5",null,"TODOS"),r.a.createElement("img",{src:j.a,alt:""}),r.a.createElement("p",null,"Use the form to create a new todo!")))}}]),t}(r.a.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).updateItem=function(e){a.props.updateFromChild(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items,a=t.map((function(t){return r.a.createElement(O,{key:t._id,data:t,handleUpdate:e.updateItem})}));return r.a.createElement("div",{className:"todones-container"},t.length>0&&r.a.createElement("div",{className:"todones"},r.a.createElement("h5",null,"BACKLOG"),a))}}]),t}(r.a.Component),k=function(){return r.a.createElement("div",{className:"spinner"})},N=function(){return r.a.createElement("div",{className:"empty-screen"},r.a.createElement("img",{src:j.a}),r.a.createElement("p",null,"Use the form to create a new todo!"))},C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleUpdate=function(e){var t,n,r,c,s;return b.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t="https://todo-api.albertedelmann.now.sh/tasks/".concat(e._id),n=!e.status,a.setState({loading:!0}),l.prev=3,l.next=6,b.a.awrap(fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:n})}));case 6:return r=l.sent,l.next=9,b.a.awrap(r.json());case 9:l.sent,c=a.state.items,s=c.map((function(t){return e._id===t._id&&(t.status=!t.status),t})),a.setState({items:s,loading:!1,feedback:!1}),l.next=18;break;case 15:l.prev=15,l.t0=l.catch(3),a.setState({feedback:!0});case 18:case"end":return l.stop()}}),null,null,[[3,15]])},a.handleAddTodo=function(e){var t,n;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return"https://todo-api.albertedelmann.now.sh/tasks",a.setState({loading:!0}),r.prev=2,r.next=5,b.a.awrap(fetch("https://todo-api.albertedelmann.now.sh/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e})}));case 5:return t=r.sent,r.next=8,b.a.awrap(t.json());case 8:n=r.sent,a.setState({items:[].concat(Object(p.a)(a.state.items),[n]),feedback:!1,showFriend:!1,loading:!1}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(2),a.setState({feedback:!0});case 15:case"end":return r.stop()}}),null,null,[[2,12]])},a.state={items:[],loading:!0,feedback:!1,showFriend:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://todo-api.albertedelmann.now.sh/tasks",a.prev=1,a.next=4,b.a.awrap(fetch("https://todo-api.albertedelmann.now.sh/tasks"));case 4:return e=a.sent,a.next=7,b.a.awrap(e.json());case 7:0===(t=a.sent).length?this.setState({items:t,loading:!1,feedback:!1,showFriend:!0}):this.setState({items:t,loading:!1,feedback:!1,showFriend:!1}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),this.setState({feedback:!0});case 14:case"end":return a.stop()}}),null,this,[[1,11]])}},{key:"render",value:function(){var e=this.state.items,t=e.filter((function(e){return!e.status})),a=e.filter((function(e){return e.status}));return r.a.createElement("main",{className:"main-container"},r.a.createElement(E,{addTodo:this.handleAddTodo}),r.a.createElement("div",{className:"feedback"},this.state.feedback&&r.a.createElement("small",null,"Oops, our cat broke the internet. Please try again...")),this.state.loading&&r.a.createElement(k,null),this.state.showFriend?r.a.createElement(N,null):r.a.createElement("span",null,r.a.createElement(y,{items:t,updateFromChild:this.handleUpdate}),r.a.createElement(w,{items:a,updateFromChild:this.handleUpdate})))}}]),t}(r.a.Component),x=a(25),S=a.n(x),T=function(e){var t=e.article;return r.a.createElement("div",{className:"article",onClick:function(){return e=t.url,void window.open(e,"_blank");var e}},r.a.createElement("div",{className:"img"},t.urlToImage?r.a.createElement("img",{src:t.urlToImage}):r.a.createElement("img",{src:"https://media0.giphy.com/media/OI8TsOa9KFAPu/giphy.gif?cid=790b76116ff1b97ce66612fdfbc17f90abfb14f8d9ec70c8&rid=giphy.gif"})),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"title"},t.title),r.a.createElement("p",null,t.description)))},F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={articles:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://newsapi.org/v2/everything?domains=nationalgeographic.com&apiKey=f8d7869212c24907bc585db6b6d267be",a.next=3,b.a.awrap(fetch("https://newsapi.org/v2/everything?domains=nationalgeographic.com&apiKey=f8d7869212c24907bc585db6b6d267be"));case 3:return e=a.sent,a.next=6,b.a.awrap(e.json());case 6:t=a.sent,this.setState({articles:t.articles});case 8:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.articles.map((function(e){return r.a.createElement(T,{article:e,key:e.publishedAt})}));return r.a.createElement(S.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"news-container",columnClassName:"col"},e.length>0?e:r.a.createElement(k,null))}}]),t}(r.a.Component),A=a(11),D=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(h,null),r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/news",component:F}),r.a.createElement(A.a,{exact:!0,path:"/",component:C}),r.a.createElement(A.a,{path:"*",component:N}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.797d4ef0.chunk.js.map