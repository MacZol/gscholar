(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[17],{270:function(e,t,a){"use strict";a.r(t);var r=a(44),n=a.n(r),c=a(45),s=a(48),o=a(0),l=a.n(o),i=(a(47),a(43)),u=a.n(i),m=a(13),p=a(46),d=a(9);t.default=function(e){d.b.getState().Login.details.email&&e.history.push("/");var t=Object(o.useState)(""),a=Object(s.a)(t,2),r=a[0],i=a[1],f=Object(o.useState)(!1),b=Object(s.a)(f,2),h=b[0],g=b[1],v=function(){var t=Object(c.a)(n.a.mark((function t(a){var c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==r){t.next=5;break}u.a.fire("Error","Do not leave any fields empty!","error"),t.next=11;break;case 5:return g(!0),t.next=8,Object(p.a)("post","/auth/forgot",{email:r});case 8:"error"===(c=t.sent).type?u.a.fire("Error",c.msg,"error"):(u.a.fire("Success",c.msg,"success"),e.history.push("/login")),g(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement("div",{className:"main-section"},l.a.createElement("div",{className:"container margin-css"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-5 col-md-8"},l.a.createElement("div",{className:"card"},l.a.createElement("form",{onSubmit:v},l.a.createElement("div",{className:"form-css"},l.a.createElement("header",{className:"navbar navbar-light bg-light"},l.a.createElement("div",{className:"container p-1 ms-4"},l.a.createElement("div",{className:"main-nav"},l.a.createElement("img",{className:"mt-2 ms-2 logo",src:"/logo.jpg",alt:"logo"}))))),l.a.createElement("h1",{className:" mt-4 text-center"},"Did you forget your password?"),l.a.createElement("p",{className:"password-forget-p mt-1 text-center"},"Enter your email address and we will send you password reset link on your email."),l.a.createElement("div",{className:"px-5 mt-4"},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleInputEmail1",className:"form-label"},"Email"),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Your Email",value:r,onChange:function(e){return i(e.target.value)}})),l.a.createElement("div",{className:"mt-3 d-grid gap-2"},l.a.createElement("button",{type:"submit",className:"p-3 btn btn-primary",disabled:h},"Request Reset Link")),l.a.createElement("div",{className:" mb-4 text-center mt-3"},l.a.createElement(m.b,{className:"ms-1  g-back",to:"/login"},"Back to Sign in")))))))))))}},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return d}));var r=a(44),n=a.n(r),c=a(45),s=a(52),o=a.n(s),l=a(43),i=a.n(l),u=function(){var e=Object(c.a)(n.a.mark((function e(t,a,r){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o()({url:"/api"+a,method:t,data:r});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(n.a.mark((function e(t,a,r){var c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("authtoken");case 2:return c=e.sent,e.next=5,o()({url:"/api"+a,method:t,data:r,headers:{scholarauthtoken:"ScholarApp AuthToken "+c}});case 5:if("logout"!==(s=e.sent).data.type){e.next=11;break}window.location="/logout",i.a.fire("Error",s.data.msg,"error"),e.next=12;break;case 11:return e.abrupt("return",s.data);case 12:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),p=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},d=function(){var e=Object(c.a)(n.a.mark((function e(t,a,r){var c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("authtoken");case 2:return c=e.sent,e.next=5,o()({url:"/api"+a,method:t,data:r,headers:{scholarauthtoken:"ScholarApp AuthToken "+c,Accept:"application/json","Content-Type":"multipart/form-data"}});case 5:if("logout"!==(s=e.sent).data.type){e.next=11;break}window.location="/logout",i.a.fire("Error",s.data.msg,"error"),e.next=12;break;case 11:return e.abrupt("return",s.data);case 12:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}()},47:function(e,t,a){}}]);