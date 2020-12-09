(this.webpackJsonpdanschedules=this.webpackJsonpdanschedules||[]).push([[0],{164:function(e,t){},165:function(e,t){},168:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(55),o=c.n(s),i=c(2),j=c(57),l=(c(63),Object(r.createContext)()),d=function(e){var t=Object(r.useContext)(l).data;return Object(n.jsxs)("div",{className:"people",children:[Object(n.jsx)("h3",{className:"personnel-title",children:e.name}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{className:"personnel-title",children:"Total # of Actions by Project"}),Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Project"}),Object(n.jsx)("th",{children:"Number of Actions"}),Object(n.jsx)("th",{children:"Hours"})]})}),Object(n.jsx)("tbody",{children:t&&t.personActionsByProject[e.name].projectList.map((function(c,r){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:c}),Object(n.jsx)("td",{children:t&&t.personActionsByProject[e.name].projects[c].length}),Object(n.jsx)("td",{children:t&&t.personActionsByProject[e.name].projects[c].map((function(e){return t.actions[e].hours})).reduce((function(e,t){return e+t}))})]},"".concat(c,"-").concat(r))}))})]})]}),Object(n.jsx)("h4",{className:"personnel-title",children:"High Priority Actions"}),Object(n.jsx)("div",{children:t?Object(n.jsx)("div",{children:Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Project"}),Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:"Hours"})]})}),Object(n.jsx)("tbody",{children:t.personActionsByProject[e.name].projectList.map((function(c,r){return t.personActionsByProject[e.name].projects[c].map((function(e){return"High"===t.actions[e].priority?Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.actions[e].project}),Object(n.jsx)("td",{children:t.actions[e].description}),Object(n.jsx)("td",{children:t.actions[e].hours})]},"".concat(r,"-").concat(e)):null}))}))})]})}):null})]})},u=function(e){var t=Object(r.useContext)(l),c=t.data,a=t.processedData,s=Object(r.useState)(c),o=Object(i.a)(s,2);o[0],o[1];return null!==a&&console.log(a),Object(n.jsxs)("div",{className:"project",children:[Object(n.jsx)("h3",{className:"personnel-title",children:e.name}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{className:"personnel-title",children:"Total # of Actions by Project"}),Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Owner"}),Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:"Hours"})]})}),Object(n.jsx)("tbody",{children:c&&c.peopleArray.map((function(t){return c.personActionsByProject[t].projects[e.name]?c.personActionsByProject[t].projects[e.name].map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:c.actions[e].owner}),Object(n.jsx)("td",{children:c.actions[e].description}),Object(n.jsx)("td",{children:c.actions[e].hours})]},e)})):null}))})]})]})]})},p=c(18),h=function(){var e,t=Object(r.useContext)(l).data,c=Object(r.useState)([]),a=Object(i.a)(c,2),s=a[0],o=a[1],j=Object(r.useState)(!1),d=Object(i.a)(j,2),u=d[0],h=d[1],b=Object(r.useState)(!1),O=Object(i.a)(b,2),f=(O[0],O[1],["red","blue","green"]),x=null;if(t&&(e=t.peopleArray),null!==t&&!0!==u&&function(){for(var e=[],c=[],n=function(n){var r=t.projectsArray[n];e=[],t.peopleArray.forEach((function(c){t.personActionsByProject[c].projects[r]?e.push(t.personActionsByProject[c].projects[r].map((function(e){return t.actions[e].hours})).reduce((function(e,t){return e+t}))):e.push(0)})),c.push(e)},r=0;r<t.projectsArray.length;r++)n(r);o(c),h(!0)}(),null!==t&&!0===u){for(var m=[],y=0;y<t.projectsArray.length;y++){var v=t.projectsArray[y],A={};A.label=v,A.data=s[y],A.backgroundColor=f[y]||"white",m.push(A)}x={labels:e,datasets:m}}return x&&Object(n.jsx)("div",{className:"people-dept",children:Object(n.jsx)(p.Bar,{data:x,width:100,height:50,options:{maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}})})},b=function(){var e=Object(r.useContext)(l).data,t=Object(r.useState)([]),c=Object(i.a)(t,2),a=c[0],s=c[1],o=Object(r.useState)(!1),j=Object(i.a)(o,2),d=j[0],u=j[1],h=Object(r.useState)([]),b=Object(i.a)(h,2),O=b[0],f=b[1],x=["red","blue","green"],m=null;if(e&&e.projectsArray,null!==e&&!0!==d&&function(){for(var t=[],c=[],n=function(n){c=[];var r=e.peopleArray[n];e.projectsArray.forEach((function(t){if(e.personActionsByProject[r].projects[t]){var n=e.personActionsByProject[r].projects[t].map((function(t){return e.actions[t].hours})).reduce((function(e,t){return e+t}));c.push([n,r,t])}else c.push([0,r,t])})),t.push(c)},r=0;r<e.peopleArray.length;r++)n(r);for(var a=[],o=[],i=0;i<t[0].length;i++)o.push(t[0][i][2]);t.forEach((function(e){a.push(e.map((function(e){return e[0]})))})),s(a),f(o),u(!0)}(),null!==e&&!0===d){for(var y=[],v=0;v<e.peopleArray.length;v++){var A=e.peopleArray[v],g={};g.label=A,g.data=a[v],g.backgroundColor=x[v]||"white",y.push(g)}m={labels:O,datasets:y}}return m&&Object(n.jsx)("div",{className:"project-dept",children:Object(n.jsx)(p.Bar,{data:m,width:100,height:50,options:{maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}})})},O=c(32),f=function(){var e=Object(r.useContext)(l),t=(e.setInitialState,e.data),c=e.importData,a=e.importedData,s=e.processData,o=Object(r.useState)(""),p=Object(i.a)(o,2),f=p[0],x=p[1],m=Object(r.useState)(""),y=Object(i.a)(m,2),v=y[0],A=y[1],g=Object(r.useState)([]),D=Object(i.a)(g,2);D[0],D[1];null!==t&&""===f&&x(t.peopleArray[0]),null!==t&&""===f&&A(t.projectsArray[0]);return Object(n.jsxs)(j.a,{children:[Object(n.jsxs)("nav",{className:"main-nav",children:[Object(n.jsx)("h2",{children:"Dan's DashBoard"}),Object(n.jsx)("input",{type:"file",onChange:function(e){for(var t=e.target.files,n=[],r=function(e){new Promise((function(c,n){var r=new FileReader;r.readAsArrayBuffer(t[e]),r.onload=function(e){var t=e.target.result,n=O.read(t,{type:"buffer"}),r=n.SheetNames[0],a=n.Sheets[r],s=O.utils.sheet_to_json(a);c([s,r])},r.onerror=function(e){n(e)}})).then((function(e){var t=e[0],c=e[1];n.push([t,c])}))},a=0;a<t.length;a++)r(a);c(n)},multiple:!0}),Object(n.jsx)("button",{onClick:function(){s(a)},children:"Build Dashboard"})]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("nav",{className:"people-nav",children:Object(n.jsxs)("div",{className:"title-div",children:[Object(n.jsx)("h4",{className:"title",children:"Personnel"}),Object(n.jsx)("ul",{children:t&&t.peopleArray.map((function(e){return Object(n.jsx)("li",{className:"nav-li",children:Object(n.jsx)("button",{className:"nav-btn",onClick:function(){return function(e){x(e)}(e)},children:e})},e)}))})]})}),Object(n.jsx)("nav",{className:"project-nav",children:Object(n.jsxs)("div",{className:"title-div",children:[Object(n.jsx)("h4",{className:"title",children:"Project"}),Object(n.jsx)("ul",{children:t&&t.projectsArray.map((function(e){return Object(n.jsx)("li",{className:"nav-li",children:Object(n.jsx)("button",{className:"nav-btn",onClick:function(){return function(e){A(e)}(e)},children:e})},e)}))})]})}),Object(n.jsx)(d,{name:f}),Object(n.jsx)(h,{}),Object(n.jsx)(u,{name:v}),Object(n.jsx)(b,{}),Object(n.jsx)("footer",{className:"main-footer",children:"The footer"})]})})]})},x=c(35),m=c(6),y="SET_STORE",v="IMPORT_DATA",A="BUILD_DASHBOARD",g=function(e,t){var c=t.type,n=t.payload;switch(c){case y:return Object(m.a)(Object(m.a)({},e),{},{data:n,loading:!1});case v:return Object(m.a)(Object(m.a)({},e),{},{importedData:n,loading:!1});case A:return Object(m.a)(Object(m.a)({},e),{},{data:n,loading:!1});default:return Object(m.a)({},e)}},D=function(e){var t=Object(r.useReducer)(g,{data:null,loading:!1,importedData:null,processedData:null}),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(n.jsx)(l.Provider,{value:{data:a.data,loading:a.loading,importedData:a.importedData,processedData:a.processedData,setInitialState:function(e){s({type:y,payload:e})},importData:function(e){s({type:v,payload:e})},processData:function(e){var t={},c=new Set,n=new Set,r={},a={},o=[];e.map((function(e){n.add(e[1]),e[0].map((function(e){c.add(e.Owner)}))}));var i,j=Object(x.a)(c);try{for(j.s();!(i=j.n()).done;){t[i.value]={},e.map((function(e){var t=e[1];e[0].map((function(e){var c=t+e.ID;o.push(c),r[c]={priority:e.Priority,description:e.Description,hours:e.Hours,owner:e.Owner,project:t}}))}))}}catch(b){j.e(b)}finally{j.f()}a.actions=r;var l=Array.from(n);a.projectsArray=l;var d=Array.from(c);a.peopleArray=d,a.personActionsByProject=t;var u,p=Object(x.a)(c);try{var h=function(){var t=u.value,c=new Set,n={};e.map((function(e){var r=e[1],s=[];e[0].map((function(e){if(e.Owner===t){c.add(r);var a=r+e.ID;s.push(a),n[r]=s}})),a.personActionsByProject[t].projects=n;var o=Array.from(c);a.personActionsByProject[t].projectList=o}))};for(p.s();!(u=p.n()).done;)h()}catch(b){p.e(b)}finally{p.f()}s({type:A,payload:a})}},children:e.children})};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(D,{children:Object(n.jsx)(f,{})})}),document.getElementById("root"))},53:function(e,t){},63:function(e,t,c){}},[[168,1,2]]]);
//# sourceMappingURL=main.4d8ccf5e.chunk.js.map