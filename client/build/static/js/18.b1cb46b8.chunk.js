(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[18],{268:function(e,a,t){"use strict";t.r(a);var r=t(44),n=t.n(r),l=t(45),c=t(48),s=t(0),o=t.n(s),m=(t(47),t(13)),u=t(9),i=t(43),p=t.n(i),d=t(46);a.default=function(e){u.b.getState().Login.details.email&&e.history.push("/");var a=Object(s.useState)(""),t=Object(c.a)(a,2),r=t[0],i=t[1],f=Object(s.useState)(""),b=Object(c.a)(f,2),h=b[0],g=b[1],v=Object(s.useState)(""),E=Object(c.a)(v,2),N=E[0],x=E[1],y=Object(s.useState)(""),w=Object(c.a)(y,2),j=w[0],k=w[1],I=Object(s.useState)(""),O=Object(c.a)(I,2),S=O[0],A=O[1],C=function(){var a=Object(l.a)(n.a.mark((function a(t){var l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),""!==r&&""!==h&&""!==N&&""!==j&&""!==S){a.next=5;break}p.a.fire("Error","Do not leave any fields empty!","error"),a.next=9;break;case 5:return a.next=7,Object(d.a)("post","/auth/register",{email:r,password:h,first_Name:N,last_Name:j,google_scholar_id:S});case 7:"error"===(l=a.sent).type?p.a.fire("Error",l.msg,"error"):(p.a.fire("Success",l.msg,"success"),e.history.push("/login"));case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",null,o.a.createElement("div",{className:"section_register"},o.a.createElement("div",{className:"container margin-css"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-lg-6 col-md-8"},o.a.createElement("div",{className:"card"},o.a.createElement("form",{onSubmit:C},o.a.createElement("div",{className:"form-css"},o.a.createElement("header",{className:"navbar navbar-light bg-light"},o.a.createElement("div",{className:"container p-1 ms-4"},o.a.createElement("div",{className:"main-nav"},o.a.createElement("img",{className:"mt-2 ms-2 logo",src:"/logo.jpg",alt:"logo"}))))),o.a.createElement("h1",{className:" mt-4 text-center"},"Register Page"),o.a.createElement("div",{className:"px-5 mt-4"},o.a.createElement("div",{className:"mb-3"},o.a.createElement("label",{for:"exampleInputEmail1",className:"form-label"},"First Name"),o.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Your First Name",value:N,onChange:function(e){return x(e.target.value)}})),o.a.createElement("div",{className:"mb-3"},o.a.createElement("label",{for:"exampleInputEmail1",className:"form-label"},"Last Name"),o.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Your Last Name",value:j,onChange:function(e){return k(e.target.value)}})),o.a.createElement("div",{className:"mb-3"},o.a.createElement("label",{for:"exampleInputEmail2",className:"form-label"},"Email"),o.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail2","aria-describedby":"emailHelp",placeholder:"Your Email",value:r,onChange:function(e){return i(e.target.value)}})),o.a.createElement("div",{className:"mb-3"},o.a.createElement("label",{for:"exampleInputID",className:"form-label "},"Google Scholar Account"),o.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputID",placeholder:"Your Google Scholar ID Url",value:S,onChange:function(e){return A(e.target.value)}})),o.a.createElement("div",{className:"mb-3"},o.a.createElement("label",{for:"exampleInputPassword1",className:"form-label "},"Password"),o.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"*********",value:h,onChange:function(e){return g(e.target.value)}})),o.a.createElement("div",{className:"mt-3 d-grid gap-2"},o.a.createElement("button",{type:"submit",className:"p-3 btn btn-primary"},"SIGN UP")),o.a.createElement("div",{className:" mb-4 text-end mt-3"},o.a.createElement("h6",null,"Already A User ?",o.a.createElement(m.b,{className:"ms-1 new-user",to:"/login"},"Login"))))))))))))}},46:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return i})),t.d(a,"d",(function(){return p})),t.d(a,"c",(function(){return d}));var r=t(44),n=t.n(r),l=t(45),c=t(52),s=t.n(c),o=t(43),m=t.n(o),u=function(){var e=Object(l.a)(n.a.mark((function e(a,t,r){var l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()({url:"/api"+t,method:a,data:r});case 2:return l=e.sent,e.abrupt("return",l.data);case 4:case"end":return e.stop()}}),e)})));return function(a,t,r){return e.apply(this,arguments)}}(),i=function(){var e=Object(l.a)(n.a.mark((function e(a,t,r){var l,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("authtoken");case 2:return l=e.sent,e.next=5,s()({url:"/api"+t,method:a,data:r,headers:{scholarauthtoken:"ScholarApp AuthToken "+l}});case 5:if("logout"!==(c=e.sent).data.type){e.next=11;break}window.location="/logout",m.a.fire("Error",c.data.msg,"error"),e.next=12;break;case 11:return e.abrupt("return",c.data);case 12:case"end":return e.stop()}}),e)})));return function(a,t,r){return e.apply(this,arguments)}}(),p=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},d=function(){var e=Object(l.a)(n.a.mark((function e(a,t,r){var l,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("authtoken");case 2:return l=e.sent,e.next=5,s()({url:"/api"+t,method:a,data:r,headers:{scholarauthtoken:"ScholarApp AuthToken "+l,Accept:"application/json","Content-Type":"multipart/form-data"}});case 5:if("logout"!==(c=e.sent).data.type){e.next=11;break}window.location="/logout",m.a.fire("Error",c.data.msg,"error"),e.next=12;break;case 11:return e.abrupt("return",c.data);case 12:case"end":return e.stop()}}),e)})));return function(a,t,r){return e.apply(this,arguments)}}()},47:function(e,a,t){}}]);