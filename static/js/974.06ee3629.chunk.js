"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[974],{3974:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r=t(2791),o=t(9434),i=t(208),u="NOT_FOUND";var a=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?a:r,i=t.maxSize,c=void 0===i?1:i,l=t.resultEqualityCheck,f=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),s=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return u}return{get:r,put:function(e,o){r(e)===u&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,f);function p(){var e=s.get(arguments);if(e===u){if(e=n.apply(null,arguments),l){var t=s.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function l(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function f(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,u=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var f=a,s=f.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],g=l(r),h=n.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=g.length,t=0;t<e;t++)n.push(g[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:g,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),m};return o}var s,p,d,g,h,m,v,x,y=f(c),b=function(n){return n.contacts.contacts.items},j=function(n){return n.contacts.contacts.isLoading},w=function(n){return n.contacts.contacts.error},k=function(n){return n.contacts.filter},C=y([b,k],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),Z=t(168),S=t(6487),I=(S.default.ul(s||(s=(0,Z.Z)(["\nmargin-top:10px;\npadding: 0;\nlist-style:none;\n\n"]))),S.default.li(p||(p=(0,Z.Z)(["\nmargin-top: 10px;\npadding: 0;\nfont-weight: 400;\ncolor: #1a202c;\nfont-size:18px;\n\n\n"])))),z=S.default.p(d||(d=(0,Z.Z)(["\nmargin-top: 10px;\ndisplay:inline;\npadding: 0;\nfont-weight: 500;\ncolor: #1a202c;\nfont-size:18px;\n\n\n"]))),A=S.default.button(g||(g=(0,Z.Z)(["\nbackground-color: lightblue;\nmargin-left: 10px;\n\npadding: 0;\nborder-radius: 5px;\nwidth:60px;\nheight:20px;\n  font-size: 12px;\n  font-weight: 700; \n  border:none;\n  outline: solid grey 1px;\n\n  &:hover {\n background-color:lightgreen;\n  }\n\n"]))),E=t(184),N=function(){var n=(0,o.I0)(),e=(0,o.v9)(C);return(0,E.jsx)("ul",{children:e.map((function(e){return(0,E.jsxs)(I,{children:[e.name," ",(0,E.jsx)(z,{children:e.number}),(0,E.jsx)(A,{onClick:function(){return n((t=e.id,console.log(t),void n((0,i.GK)(t))));var t},children:"Delete"})," "]},e.id)}))})},R=t(9439),q=t(3661),F=t(7236),L=t(6487).default.div(h||(h=(0,Z.Z)(["\nmargin-top:20px;\nwidth:320px;\n\n"]))),_=function(){var n=(0,r.useState)(""),e=(0,R.Z)(n,2),t=e[0],i=e[1],u=(0,o.I0)();(0,r.useEffect)((function(){u((0,q.Tv)(t))}),[t,u]);var a=(0,o.v9)(k);return(0,E.jsxs)(L,{children:[(0,E.jsx)("p",{children:"Find contact by name"}),(0,E.jsx)(F.I,{onChange:function(n){i(n.target.value)},type:"text",placeholder:"Find by name",value:a})]})},O=t(4942),T=t(5705),U=t(6727),B=S.default.form(m||(m=(0,Z.Z)(["\nmargin-top:50px;\nwidth:320px;\nmargin:0;\npadding: 0;\ndisplay: flex;\nmargin-bottom: 20px;\nflex-direction: column;\ngap:20px;\n\n"]))),D=((0,S.default)(T.gN)(v||(v=(0,Z.Z)(["\nborder-radius: 5px;\nwidth: 350px;\nmargin-left: 10px;\n\n"]))),S.default.button(x||(x=(0,Z.Z)(["\nbackground-color: lightblue;\npadding: 0;\nborder-radius: 5px;\nwidth:150px;\nheight:30px;\n  font-size: 12px;\n  font-weight: 700; \n  border:none;\n  outline: solid grey 1px;\n  \n\n  &:hover {\n background-color:#3f51b5;\n  }\n\n"])))),K=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},V=U.Ry().shape({name:U.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),number:U.Rx().required("Required")}),G=function(){var n=(0,o.I0)(),e=(0,r.useState)(0),t=(0,R.Z)(e,2),u=t[0],a=t[1];console.log(u);var c=(0,o.v9)(b),l=function(n){var e=n.target,t=e.value,r=e.name;a((0,O.Z)({},r,t.trim()))};return(0,E.jsx)(T.J9,{initialValues:{id:K(),name:"",phone:""},validationSchema:V,onSubmit:function(e,t){if(c.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})))return alert("This contact is in your contacts");console.log(e),e.id=K(),n((0,i.uK)(e)),t.resetForm()},children:(0,E.jsxs)(B,{children:[(0,E.jsxs)("label",{children:[" ","Name",(0,E.jsx)(T.gN,{name:"name",onInput:l,placeholder:"Name"}),(0,E.jsx)(T.Bc,{name:"name"})]}),(0,E.jsxs)("label",{children:[" ","Number",(0,E.jsx)(T.gN,{name:"number",onInput:l,placeholder:"number"}),(0,E.jsx)(T.Bc,{name:"number"})]}),(0,E.jsx)(D,{type:"submit",children:"Add contact"})]})})},J=t(774);function H(){var n=(0,o.I0)(),e=(0,o.v9)(j),t=(0,o.v9)(w);return(0,r.useEffect)((function(){n((0,i.yF)())}),[n]),(0,E.jsxs)("div",{children:[(0,E.jsx)(J.I,{}),(0,E.jsx)(G,{}),(0,E.jsx)(_,{}),e&&!t&&(0,E.jsx)("b",{children:"Loading in progress..."}),(0,E.jsx)(N,{})]})}}}]);
//# sourceMappingURL=974.06ee3629.chunk.js.map