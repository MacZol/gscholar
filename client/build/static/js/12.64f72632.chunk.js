(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[12],{278:function(e,t,a){"use strict";a.r(t);var n=a(44),r=a.n(n),c=a(45),l=a(48),s=a(0),o=a.n(s),u=a(265),i=a(249),m=function(e){var t=e.data,a=e.text,n=e.time;return function(){var e=new i.Element("div"),r=60,c=100,l=80,s=40;return function(e,r,c){var l=u.d().domain(t.map((function(e){return e[Object.keys(e)[0]]}))).range([0,r]),s=u.e().domain([0,u.c(t,(function(e){return e[Object.keys(e)[1]]}))]).range([c,0]),o=u.f(u.g);e.selectAll(".bar").data(t).enter().append("rect").classed("bar",!0).attr("x",(function(e){return l(e[Object.keys(e)[0]])})).attr("y",(function(e){return s(e[Object.keys(e)[1]])})).attr("height",(function(e){return c-s(e[Object.keys(e)[1]])})).attr("width",(function(e){return l.bandwidth()})).style("fill",(function(e,t){return o(t)})),e.selectAll(".bar-label").data(t).enter().append("text").classed("bar-label",!0).attr("x",(function(e){return l(e[Object.keys(e)[0]])+l.bandwidth()/2})).attr("dx",0).attr("y",(function(e){return s(e[Object.keys(e)[1]])})).attr("dy",-6).text((function(e){return e[Object.keys(e)[1]]}));var i=u.a().scale(l);e.append("g").classed("x axis",!0).attr("transform","translate(0,".concat(c,")")).call(i);var m=u.b().ticks().scale(s);e.append("g").classed("y axis",!0).attr("transform","translate(0,0)").call(m),e.select(".x.axis").append("text").attr("x",r/2).attr("y",60).attr("fill","#000").style("font-size","20px").style("text-anchor","middle").text("".concat(n)),e.select(".y.axis").append("text").attr("x",0).attr("y",0).attr("transform","translate(-50, ".concat(c/2,") rotate(-90)")).attr("fill","#000").style("font-size","20px").style("text-anchor","middle").text("".concat(a," Count Increased"))}(u.h(e).append("svg").attr("id","chart").attr("width",750).attr("height",450).append("g").classed("display",!0).attr("transform","translate(".concat(l,",").concat(r,")")),750-l-s,450-r-c),e.toReact()}()},f=a(51),p=a(49);t.default=function(e){var t=Object(s.useState)({}),a=Object(l.a)(t,2),n=a[0],u=a[1],i=Object(s.useState)(!1),d=Object(l.a)(i,2),b=d[0],h=d[1],g=Object(s.useState)([]),E=Object(l.a)(g,2),x=E[0],y=E[1],v=Object(s.useState)("daily"),k=Object(l.a)(v,2),w=k[0],j=k[1],O=Object(s.useState)([]),N=Object(l.a)(O,2),I=N[0],C=N[1],M=Object(s.useState)([]),A=Object(l.a)(M,2),S=A[0],L=A[1];Object(s.useEffect)((function(){h(!0);var t=function(){var t=Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.e)(e);case 2:a=t.sent,u(a),h(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)(e,w);case 2:a=t.sent,y(a.citations),C(a.hIndex),L(a.i10Index),h(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),a()}),[w]);var F=0===x.length&&0===I.length&&0===S.length;return o.a.createElement(p.a,null,o.a.createElement(o.a.Fragment,null,b?o.a.createElement("div",{className:"container d-flex"},o.a.createElement("div",{className:"justify-content-center"},o.a.createElement("img",{src:"giphy.gif",alt:"loading"}))):o.a.createElement("div",{className:"main-section mt-5"},o.a.createElement("h3",{className:"text-center mb-5"},"Metrics Information"),void 0===n.totalCitations?o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"text-center"},"Your account doesnot have information to display")):o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-7"},o.a.createElement("table",{className:"table table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",{className:"table-color"},o.a.createElement("th",{scope:"col"},"Personal stats"),o.a.createElement("th",{scope:"col"},"All"),o.a.createElement("th",{scope:"col"},"Last week"),o.a.createElement("th",{scope:"col"},"Last Month"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},"Citations"),o.a.createElement("td",null,n.totalCitations),o.a.createElement("td",null,n.citationsLastWeek),o.a.createElement("td",null,n.citationsLastMonth)),o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},"H-Index"),o.a.createElement("td",null,n.totalHIndex),o.a.createElement("td",null,n.hIndexLastWeek),o.a.createElement("td",null,n.hIndexLastMonth)),o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},"I10-Index"),o.a.createElement("td",null,n.totalI10Index),o.a.createElement("td",null,n.i10IndexLastWeek),o.a.createElement("td",null,n.i10IndexLastMonth)),o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},"Full text download"),o.a.createElement("td",null,"0"),o.a.createElement("td",null,"0"),o.a.createElement("td",null,"0")),o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},"Profile view"),o.a.createElement("td",null,"0"),o.a.createElement("td",null,"0"),o.a.createElement("td",null,"0")),o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},"Publication views"),o.a.createElement("td",null,"0"),o.a.createElement("td",null,"0"),o.a.createElement("td",null,"0")))))),F?o.a.createElement("h1",null,"Not enough statistics generated. Data will be shown after 24 hours of account creation."):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-7 text-center"},o.a.createElement("input",{type:"checkbox",id:"btn-check",autoComplete:"off",checked:"daily"===w,onChange:function(){return j("daily")},value:w,name:"daily"}),o.a.createElement("label",{className:"ml-3 fs-4 mr-2",htmlFor:"btn-check"},"Daily"),o.a.createElement("input",{type:"checkbox",id:"btn-check",autoComplete:"off",checked:"monthly"===w,onChange:function(){return j("monthly")},value:w,name:"weekly"}),o.a.createElement("label",{className:"ml-2 fs-4",htmlFor:"btn-check"},"Monthly"))),"daily"===w&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("div",null,o.a.createElement(m,{text:"Citations",data:x,time:"Daily"}))),o.a.createElement("div",{className:"d-flex justify-content-center mt-5"},o.a.createElement("div",null,o.a.createElement(m,{text:"H-Index ",data:I,time:"Daily"}))),o.a.createElement("div",{className:"d-flex justify-content-center mt-5 mb-3"},o.a.createElement("div",null,o.a.createElement(m,{text:"I10-Index ",data:S,time:"Daily"})))),"monthly"===w&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("div",null,o.a.createElement(m,{text:"Citations",data:x,time:"Monthly"}))),o.a.createElement("div",{className:"d-flex justify-content-center mt-5"},o.a.createElement("div",null,o.a.createElement(m,{text:"H-Index ",data:I,time:"Monthly"}))),o.a.createElement("div",{className:"d-flex justify-content-center mt-5 mb-3"},o.a.createElement("div",null,o.a.createElement(m,{text:"I10-Index ",data:S,time:"Monthly"}))))))))))}},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return m})),a.d(t,"d",(function(){return f})),a.d(t,"c",(function(){return p}));var n=a(44),r=a.n(n),c=a(45),l=a(52),s=a.n(l),o=a(43),u=a.n(o),i=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()({url:"/api"+a,method:t,data:n});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("authtoken");case 2:return c=e.sent,e.next=5,s()({url:"/api"+a,method:t,data:n,headers:{scholarauthtoken:"ScholarApp AuthToken "+c}});case 5:if("logout"!==(l=e.sent).data.type){e.next=11;break}window.location="/logout",u.a.fire("Error",l.data.msg,"error"),e.next=12;break;case 11:return e.abrupt("return",l.data);case 12:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),f=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},p=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("authtoken");case 2:return c=e.sent,e.next=5,s()({url:"/api"+a,method:t,data:n,headers:{scholarauthtoken:"ScholarApp AuthToken "+c,Accept:"application/json","Content-Type":"multipart/form-data"}});case 5:if("logout"!==(l=e.sent).data.type){e.next=11;break}window.location="/logout",u.a.fire("Error",l.data.msg,"error"),e.next=12;break;case 11:return e.abrupt("return",l.data);case 12:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},47:function(e,t,a){},49:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(21),l=a(43),s=a.n(l),o=a(9),u=a(13),i=function(){var e=o.b.getState().Login.details.first_Name,t=o.b.getState().Login.details.profile_picture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar bg-light"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand main",href:"/"},r.a.createElement("img",{src:"/logo.jpg",class:"logo",alt:"logo"})),r.a.createElement("form",{className:"d-flex navbar-a"},r.a.createElement("img",{className:"image-nav",src:t,alt:""})," ",r.a.createElement("a",{className:"nav-link",href:"/"},"Hi, ",e),r.a.createElement(u.b,{className:"nav-link active","aria-current":"page",to:"/alert"},"Set Alert"),r.a.createElement("a",{className:"nav-link",href:"#",onClick:function(){s.a.fire({title:"Are you sure to logout?",text:"You will loose your browsing session!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, log me out!"}).then((function(e){e.value&&(window.location="/logout")}))}},"Logout"))))))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-light border-right"},r.a.createElement("div",{className:"list-group list-group-flush list-group-sidebar"},r.a.createElement(u.b,{to:"/",className:"mt-3 list-group-item list-group-item-action bg-light"},"Home"),r.a.createElement(u.b,{to:"/articles",className:"list-group-item list-group-item-action bg-light"},"My Articles"),r.a.createElement(u.b,{to:"/messages",className:"list-group-item list-group-item-action bg-light"},"My Message"),r.a.createElement(u.b,{to:"/metrics",className:"list-group-item list-group-item-action bg-light"},"Metrics"),r.a.createElement(u.b,{to:"/alerts/manage",className:"list-group-item list-group-item-action bg-light"},"Manage Alert"),r.a.createElement(u.b,{to:"/account",className:"list-group-item list-group-item-action bg-light"},"My Account"))))};a(47),t.a=Object(c.b)((function(e){return{detail:e.Login.details}}),null)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"d-flex"},r.a.createElement(m,null),e.children))}))},51:function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"e",(function(){return v})),a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return x})),a.d(t,"h",(function(){return g})),a.d(t,"g",(function(){return m})),a.d(t,"f",(function(){return p})),a.d(t,"d",(function(){return w}));var n=a(44),r=a.n(n),c=a(45),l=a(46),s=a(43),o=a.n(s);function u(e){return i.apply(this,arguments)}function i(){return(i=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)("get","/account/articles");case 2:if("error"!==(a=e.sent).type){e.next=12;break}if("not found"!==a.msg){e.next=8;break}return e.abrupt("return",[]);case 8:o.a.fire("Error",a.msg,"error"),t.history.push("/");case 10:e.next=13;break;case 12:return e.abrupt("return",a.articles);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)("get","/account/messages");case 2:if("error"!==(a=e.sent).type){e.next=12;break}if("not found"!==a.msg){e.next=8;break}return e.abrupt("return",[]);case 8:o.a.fire("Error",a.msg,"error"),t.history.push("/messages");case 10:e.next=13;break;case 12:return e.abrupt("return",a.messages);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)("get","/account/message/".concat(a));case 2:if("error"!==(n=e.sent).type){e.next=12;break}if("not found"!==n.msg){e.next=8;break}return e.abrupt("return",[]);case 8:o.a.fire("Error",n.msg,"error"),t.history.push("/messages");case 10:e.next=13;break;case 12:return e.abrupt("return",n.messages);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)("get","/account/alerts");case 2:if("error"!==(a=e.sent).type){e.next=12;break}if("not found"!==a.msg){e.next=8;break}return e.abrupt("return",[]);case 8:o.a.fire("Error",a.msg,"error"),t.history.push("/alerts");case 10:e.next=13;break;case 12:return e.abrupt("return",a.alerts);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)("get","/account/profile");case 2:if("error"!==(a=e.sent).type){e.next=8;break}o.a.fire("Error",a.msg,"error"),t.history.push("/"),e.next=9;break;case 8:return e.abrupt("return",a.user);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)("get","/account/alert/".concat(a));case 2:if("error"!==(n=e.sent).type){e.next=8;break}o.a.fire("Error",n.msg,"error"),t.history.push("/"),e.next=9;break;case 8:return e.abrupt("return",n.alert);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)("get","/account/information");case 2:if("error"!==(a=e.sent).type){e.next=12;break}if("not found"!==a.msg){e.next=8;break}return e.abrupt("return",{});case 8:o.a.fire("Error",a.msg,"error"),t.history.push("/");case 10:e.next=13;break;case 12:return e.abrupt("return",a.information);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)("get","/account/information/".concat(a));case 2:if("error"!==(n=e.sent).type){e.next=12;break}if("time limit"!==n.msg){e.next=8;break}return e.abrupt("return",[]);case 8:o.a.fire("Error",n.msg,"error"),t.history.push("/metrics");case 10:e.next=13;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);