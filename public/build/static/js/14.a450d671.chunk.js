(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[14],{277:function(e,t,r){"use strict";r.r(t);var a=r(44),n=r.n(a),c=r(45),s=r(48),o=r(0),u=r.n(o),i=r(49),l=r(51),m=r(46),p=r(43),f=r.n(p);t.default=function(e){var t=Object(o.useState)(""),r=Object(s.a)(t,2),a=r[0],p=r[1],b=Object(o.useState)(""),g=Object(s.a)(b,2),d=g[0],h=g[1],v=Object(o.useState)(""),E=Object(s.a)(v,2),x=E[0],y=E[1],k=Object(o.useState)(!1),N=Object(s.a)(k,2),w=N[0],j=N[1];Object(o.useEffect)((function(){j(!0),function(){var t=Object(c.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)(e,e.match.params.id);case 2:r=t.sent,p(r.alert_name),h(r.email),y(r.schedule),j(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]);var O=function(){var t=Object(c.a)(n.a.mark((function t(r){var c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),""!==a&&""!==d&&""!==x){t.next=5;break}f.a.fire("Error","Do not leave any fields empty!","error"),t.next=9;break;case 5:return t.next=7,Object(m.b)("patch","/account/alert/".concat(e.match.params.id),{alert_name:a,schedule:x.toLowerCase(),email:d});case 7:"error"===(c=t.sent).type?f.a.fire("Error",c.msg,"error"):(f.a.fire("Success",c.msg,"success"),e.history.push("/"));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return console.log(x),u.a.createElement(u.a.Fragment,null,u.a.createElement(i.a,null,w?u.a.createElement("div",{className:"container d-flex"},u.a.createElement("div",{className:"justify-content-center"},u.a.createElement("img",{src:"giphy.gif",alt:"loading"}))):u.a.createElement("div",{className:"mt-5 main-section"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row justify-content-center"},u.a.createElement("div",{className:"col-12"},u.a.createElement("div",{className:"card"},u.a.createElement("form",{onSubmit:O},u.a.createElement("div",{className:"form-css"},u.a.createElement("header",{className:"navbar navbar-light bg-light"},u.a.createElement("div",{className:"container p-1 ms-4"},u.a.createElement("div",{className:"main-nav"},u.a.createElement("h2",{className:"text-center mt-2 ms-2"},"Update Alert"))))),u.a.createElement("div",{className:"px-5 mt-4"},u.a.createElement("div",{className:"mb-3"},u.a.createElement("label",{htmlFor:"exampleInputName1",className:"form-label"},"Alert Name"),u.a.createElement("input",{type:"name",className:"colors form-control",id:"exampleInputName1","aria-describedby":"emailHelp",placeholder:"Name",value:a,onChange:function(e){return p(e.target.value)}})),u.a.createElement("div",{className:"mb-3"},u.a.createElement("label",{htmlFor:"exampleInputEmail",className:"form-label "},"Email Address"),u.a.createElement("input",{type:"text",className:" colors form-control",id:"exampleInputEmail",placeholder:"Email",value:d,onChange:function(e){return h(e.target.value)}})),u.a.createElement("div",{className:"select_group mb-2"},u.a.createElement("select",{defaultValue:x?Object(m.d)(x):"Daily",className:"colors form-control-lg width-color",onChange:function(e){return y(e.target.value)}},u.a.createElement("option",{defaultValue:"Weekly"},"Weekly"),u.a.createElement("option",{defaultValue:"Bi-Weekly"},"Bi-Weekly"),u.a.createElement("option",{defaultValue:"Monthly"},"Monthly"))),u.a.createElement("div",{className:"mt-3 mb-4 d-grid gap-2"},u.a.createElement("button",{type:"submit",className:"p-3 btn btn-primary"},"Update")))))))))))}},46:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m})),r.d(t,"d",(function(){return p})),r.d(t,"c",(function(){return f}));var a=r(44),n=r.n(a),c=r(45),s=r(52),o=r.n(s),u=r(43),i=r.n(u),l=function(){var e=Object(c.a)(n.a.mark((function e(t,r,a){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o()({url:"/api"+r,method:t,data:a});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(n.a.mark((function e(t,r,a){var c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("authtoken");case 2:return c=e.sent,e.next=5,o()({url:"/api"+r,method:t,data:a,headers:{scholarauthtoken:"ScholarApp AuthToken "+c}});case 5:if("logout"!==(s=e.sent).data.type){e.next=11;break}window.location="/logout",i.a.fire("Error",s.data.msg,"error"),e.next=12;break;case 11:return e.abrupt("return",s.data);case 12:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),p=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},f=function(){var e=Object(c.a)(n.a.mark((function e(t,r,a){var c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("authtoken");case 2:return c=e.sent,e.next=5,o()({url:"/api"+r,method:t,data:a,headers:{scholarauthtoken:"ScholarApp AuthToken "+c,Accept:"application/json","Content-Type":"multipart/form-data"}});case 5:if("logout"!==(s=e.sent).data.type){e.next=11;break}window.location="/logout",i.a.fire("Error",s.data.msg,"error"),e.next=12;break;case 11:return e.abrupt("return",s.data);case 12:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}()},47:function(e,t,r){},49:function(e,t,r){"use strict";var a=r(0),n=r.n(a),c=r(21),s=r(43),o=r.n(s),u=r(9),i=r(13),l=function(){var e=u.b.getState().Login.details.first_Name,t=u.b.getState().Login.details.profile_picture;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("nav",{className:"navbar bg-light"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand main",href:"/"},n.a.createElement("img",{src:"/logo.jpg",class:"logo",alt:"logo"})),n.a.createElement("form",{className:"d-flex navbar-a"},n.a.createElement("img",{className:"image-nav",src:t,alt:""})," ",n.a.createElement("a",{className:"nav-link",href:"/"},"Hi, ",e),n.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/alert"},"Set Alert"),n.a.createElement("a",{className:"nav-link",href:"#",onClick:function(){o.a.fire({title:"Are you sure to logout?",text:"You will loose your browsing session!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, log me out!"}).then((function(e){e.value&&(window.location="/logout")}))}},"Logout"))))))},m=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"bg-light border-right"},n.a.createElement("div",{className:"list-group list-group-flush list-group-sidebar"},n.a.createElement(i.b,{to:"/",className:"mt-3 list-group-item list-group-item-action bg-light"},"Home"),n.a.createElement(i.b,{to:"/articles",className:"list-group-item list-group-item-action bg-light"},"My Articles"),n.a.createElement(i.b,{to:"/messages",className:"list-group-item list-group-item-action bg-light"},"My Message"),n.a.createElement(i.b,{to:"/metrics",className:"list-group-item list-group-item-action bg-light"},"Metrics"),n.a.createElement(i.b,{to:"/alerts/manage",className:"list-group-item list-group-item-action bg-light"},"Manage Alert"),n.a.createElement(i.b,{to:"/account",className:"list-group-item list-group-item-action bg-light"},"My Account"))))};r(47),t.a=Object(c.b)((function(e){return{detail:e.Login.details}}),null)((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l,null),n.a.createElement("div",{className:"d-flex"},n.a.createElement(m,null),e.children))}))},51:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"e",(function(){return y})),r.d(t,"b",(function(){return g})),r.d(t,"a",(function(){return E})),r.d(t,"h",(function(){return h})),r.d(t,"g",(function(){return m})),r.d(t,"f",(function(){return f})),r.d(t,"d",(function(){return N}));var a=r(44),n=r.n(a),c=r(45),s=r(46),o=r(43),u=r.n(o);function i(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)("get","/account/articles");case 2:if("error"!==(r=e.sent).type){e.next=12;break}if("not found"!==r.msg){e.next=8;break}return e.abrupt("return",[]);case 8:u.a.fire("Error",r.msg,"error"),t.history.push("/");case 10:e.next=13;break;case 12:return e.abrupt("return",r.articles);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)("get","/account/messages");case 2:if("error"!==(r=e.sent).type){e.next=12;break}if("not found"!==r.msg){e.next=8;break}return e.abrupt("return",[]);case 8:u.a.fire("Error",r.msg,"error"),t.history.push("/messages");case 10:e.next=13;break;case 12:return e.abrupt("return",r.messages);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)("get","/account/message/".concat(r));case 2:if("error"!==(a=e.sent).type){e.next=12;break}if("not found"!==a.msg){e.next=8;break}return e.abrupt("return",[]);case 8:u.a.fire("Error",a.msg,"error"),t.history.push("/messages");case 10:e.next=13;break;case 12:return e.abrupt("return",a.messages);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)("get","/account/alerts");case 2:if("error"!==(r=e.sent).type){e.next=12;break}if("not found"!==r.msg){e.next=8;break}return e.abrupt("return",[]);case 8:u.a.fire("Error",r.msg,"error"),t.history.push("/alerts");case 10:e.next=13;break;case 12:return e.abrupt("return",r.alerts);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)("get","/account/profile");case 2:if("error"!==(r=e.sent).type){e.next=8;break}u.a.fire("Error",r.msg,"error"),t.history.push("/"),e.next=9;break;case 8:return e.abrupt("return",r.user);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)("get","/account/alert/".concat(r));case 2:if("error"!==(a=e.sent).type){e.next=8;break}u.a.fire("Error",a.msg,"error"),t.history.push("/"),e.next=9;break;case 8:return e.abrupt("return",a.alert);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)("get","/account/information");case 2:if("error"!==(r=e.sent).type){e.next=12;break}if("not found"!==r.msg){e.next=8;break}return e.abrupt("return",{});case 8:u.a.fire("Error",r.msg,"error"),t.history.push("/");case 10:e.next=13;break;case 12:return e.abrupt("return",r.information);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)("get","/account/information/".concat(r));case 2:if("error"!==(a=e.sent).type){e.next=12;break}if("time limit"!==a.msg){e.next=8;break}return e.abrupt("return",[]);case 8:u.a.fire("Error",a.msg,"error"),t.history.push("/metrics");case 10:e.next=13;break;case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);