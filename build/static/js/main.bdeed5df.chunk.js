(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),u=n(16),r=n.n(u),i=(n(7),n(6)),o=n(3),s=n(0);function l(e){var t=e.handleSubmit,n=e.newName,c=e.handleName,a=e.filterName,u=e.newNumber,r=e.handleNumber;return Object(s.jsxs)("form",{onSubmit:t,children:[Object(s.jsxs)("div",{children:["name:",Object(s.jsx)("input",{id:"nameInput",value:n,onChange:c,onKeyUp:a})]}),Object(s.jsxs)("div",{children:["number:",Object(s.jsx)("input",{id:"numberInput",type:"tel",value:u,onChange:r})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"add",type:"submit",children:Object(s.jsx)("b",{children:"Add contact"})})})]})}var d=function(e){var t=e.persons,n=e.filteredPersons,c=e.newName,a=e.handleDelete;return 0===c.length?t.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("li",{children:[e.name," - - - ",e.number]}),Object(s.jsx)("button",{detector_id:e.id,onClick:a,className:"delete__btn",children:"Delete"})]},e.name)})):n.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("li",{children:[e.name," - - - ",e.number,Object(s.jsx)("button",{detector_id:e.id,onClick:a,className:"delete__btn",children:"Delete"})]})},e.name)}))},b=n(4),j=n.n(b),m="/api/persons",f={getAll:function(){return j.a.get(m)},create:function(e){return j.a.post(m,e)},deleteContact:function(e){return j.a.delete("".concat(m,"/").concat(e))},update:function(e,t){return j.a.put("".concat(m,"/").concat(e),t)}},h=function(e){var t=e.message,n=e.style;return null===t?null:Object(s.jsx)("div",{id:"messg",className:n,children:t})},O=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],u=Object(c.useState)([]),r=Object(o.a)(u,2),b=r[0],j=r[1],m=Object(c.useState)(""),O=Object(o.a)(m,2),p=O[0],x=O[1],v=Object(c.useState)([]),g=Object(o.a)(v,2),w=g[0],N=g[1],S=Object(c.useState)(null),y=Object(o.a)(S,2),k=y[0],C=y[1],_=Object(c.useState)("success"),D=Object(o.a)(_,2),A=D[0],T=D[1];Object(c.useEffect)((function(){f.getAll().then((function(e){a(e.data)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Phonebook"}),Object(s.jsx)(h,{message:k,style:A}),Object(s.jsx)(l,{handleSubmit:function(e){e.preventDefault();var t=n.map((function(e){return e.name})),c=t.indexOf(p);if(t.includes(p)){var u=n[c];if(u.number!==w){var r=Object(i.a)(Object(i.a)({},u),{},{number:w}),o=r.id;window.confirm("Would you like to replace number of ".concat(p,"?"))&&f.update(o,r).then((function(e){a(n.map((function(t){return t.id!==o?t:e.data}))),T("success"),C("Changed number of ".concat(p)),setTimeout((function(){C(null)}),4e3)})).catch((function(e){T("error"),C("Something went wrong"),setTimeout((function(){C(null)}),4e3)}))}else T("error"),C("".concat(p," with this number already exists")),setTimeout((function(){C(null)}),4e3)}else{var s={name:p,number:w};f.create(s).then((function(e){a(n.concat(e.data))})),T("success"),C("".concat(p," added to contacts")),setTimeout((function(){C(null)}),4e3)}x(""),N("")},newName:p,handleName:function(e){x(e.target.value)},filterName:function(){var e=new RegExp("^"+p,"i"),t=n.filter((function(t){return e.test(t.name)}));0===p.length?a(n):j(t)},newNumber:w,handleNumber:function(e){N(e.target.value)}}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)("ul",{id:"myUL",children:Object(s.jsx)(d,{persons:n,filteredPersons:b,newName:p,handleDelete:function(e){var t=e.target.getAttribute("detector_id");window.confirm("Do you want to delete?")&&f.deleteContact(t).then((function(){f.getAll().then((function(e){a(e.data)})),T("success"),C("deleted from contacts"),setTimeout((function(){C(null)}),4e3)}))}})})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[40,1,2]]]);
//# sourceMappingURL=main.bdeed5df.chunk.js.map