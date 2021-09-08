(this["webpackJsonpphone-guide"]=this["webpackJsonpphone-guide"]||[]).push([[0],{23:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(18),a=n.n(c),o=(n(23),n(9)),s=n(4),u=n(0),i=function(e){var t=e.person,n=e.removePerson;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.number}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-danger btn-sm",onClick:n,children:"Delete"})})]})},l=function(e){var t=e.searchTerm,n=e.handleChange;return Object(u.jsxs)("div",{className:"m-2",children:["Filter shown with",Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"Search",value:t,onChange:n})]})},d=n(3),b=n.n(d),j=n(5),h=n(6),f=n.n(h),p="/api/persons",m={getAll:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.a.get(p),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.a.post(p,t),e.next=3,n;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(j.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.a.put("".concat(p,"/").concat(t),n),e.next=3,r;case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.a.delete("".concat(p,"/").concat(t)),e.next=3,n;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),d=Object(s.a)(a,2),b=d[0],j=d[1],h=Object(r.useState)([]),f=Object(s.a)(h,2),p=f[0],O=f[1],x=Object(r.useState)(""),v=Object(s.a)(x,2),g=v[0],w=v[1],N=Object(r.useState)(""),y=Object(s.a)(N,2),k=y[0],C=y[1],S=function(){m.getAll().then((function(e){c(e)}))};Object(r.useEffect)((function(){S()}),[]);var A=function(e){m.create(e).then((function(e){c(n.concat(e)),w(""),C("")}))},P=function(e,t){var r=Object(o.a)(Object(o.a)({},e),{},{number:k});m.update(e.id,r).then((function(e){c(n.map((function(n){return n.id!==t.id?n:e}))),w(""),C(""),S()}))};return Object(r.useEffect)((function(){var e=n&&n.filter((function(e){return e.name.toLowerCase().includes(b)}));O(e)}),[b,n]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{className:"text-danger text-center",children:"Phonebook"}),Object(u.jsx)("h2",{className:"text-primary ",children:"Add a new person"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:g,number:k};n.forEach((function(e){e.name===g?window.confirm("".concat(e.name," is already added to phonebook, would you like to replace phone number"))&&P(e,t):A(t)}))},children:[Object(u.jsxs)("div",{className:"m-2",children:["Name ",Object(u.jsx)("input",{className:"form-control",value:g,onChange:function(e){w(e.target.value)}}),"Number ",Object(u.jsx)("input",{className:"form-control",value:k,onChange:function(e){return C(e.target.value)}})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn btn-primary m-2",type:"submit",children:"Add"})})]}),Object(u.jsx)(l,{searchTerm:b,handleChange:function(e){j(e.target.value)}}),Object(u.jsx)("h2",{className:"text-primary ",children:"Numbers"}),Object(u.jsxs)("table",{className:"table table-striped table-hover",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Phone"}),Object(u.jsx)("th",{scope:"col",children:"Action"})]})}),Object(u.jsx)("tbody",{children:p&&p.map((function(e){return Object(u.jsx)(i,{person:e,removePerson:function(){return function(e){var t=n.find((function(t){return t.id===e}));console.log("person.id",t.id),window.confirm("Are your sure to remove ".concat(t.name))&&m.remove(t.id).then((function(e){console.log("deletedPerson",e),console.log("".concat(t.name," fue eliminado")),S()}))}(e.id)}},e.id)}))})]})]})};a.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.fe170005.chunk.js.map