/*! For license information please see 344.033b8886.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,u=o(e),s=1;s<arguments.length;s++){for(var f in a=Object(arguments[s]))r.call(a,f)&&(u[f]=a[f]);if(t){c=t(a);for(var l=0;l<c.length;l++)n.call(a,c[l])&&(u[c[l]]=a[c[l]])}}return u}},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4270:function(e,t,r){"use strict";r.d(t,{q:function(){return fe}});var n=r(2007),o=r.n(n),i=r(9475),a=r.n(i),c=r(3967),u=r.n(c),s=r(2791),f=r(1725),l=r.n(f),p="bodyAttributes",d="htmlAttributes",y="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(h).map((function(e){return h[e]})),"charset"),m="cssText",T="href",v="http-equiv",g="innerHTML",w="itemprop",O="name",A="property",C="rel",S="src",E="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",P="defer",I="encodeSpecialCharacters",x="onChangeClientState",L="titleTemplate",_=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),N=[h.NOSCRIPT,h.SCRIPT,h.STYLE],R="data-react-helmet",q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=V(e,h.TITLE),r=V(e,L);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=V(e,k);return t||n||void 0},Z=function(e){return V(e,x)||function(){}},z=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},W=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&X("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===C&&"canonical"===e[r].toLowerCase()||u===C&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==g&&c!==m&&c!==w||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=l()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},V=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},G=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout((function(){G(t)}),0)}}(),J=function(e){return clearTimeout(e)},$="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:r.g.requestAnimationFrame||G,Q="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||J:r.g.cancelAnimationFrame||J,X=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},ee=null,te=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;oe(h.BODY,n),oe(h.HTML,o),ne(l,p);var d={baseTag:ie(h.BASE,r),linkTags:ie(h.LINK,i),metaTags:ie(h.META,a),noscriptTags:ie(h.NOSCRIPT,c),scriptTags:ie(h.SCRIPT,s),styleTags:ie(h.STYLE,f)},y={},b={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(b[e]=d[e].oldTags)})),t&&t(),u(e,y,b)},re=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=re(e)),oe(h.TITLE,t)},oe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(R),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute(R):r.getAttribute(R)!==a.join(",")&&r.setAttribute(R,a.join(","))}},ie=function(e,t){var r=document.head||document.querySelector(h.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===g)r.innerHTML=t.innerHTML;else if(n===m)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(R,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ae=function(e){return Object.keys(e).reduce((function(t,r){var n="undefined"!==typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},ue=function(e,t,r){switch(e){case h.TITLE:return{toComponent:function(){return function(e,t,r){var n,o=((n={key:t})[R]=!0,n),i=ce(r,o);return[s.createElement(h.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,r,n){var o=ae(r),i=re(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case p:case d:return{toComponent:function(){return ce(t)},toString:function(){return ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[R]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===g||r===m){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===g||e===m)})).reduce((function(e,t){var o="undefined"===typeof n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===N.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},se=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,y=e.titleAttributes;return{base:ue(h.BASE,t,n),bodyAttributes:ue(p,r,n),htmlAttributes:ue(d,o,n),link:ue(h.LINK,i,n),meta:ue(h.META,a,n),noscript:ue(h.NOSCRIPT,c,n),script:ue(h.SCRIPT,u,n),style:ue(h.STYLE,s,n),title:ue(h.TITLE,{title:l,titleAttributes:y},n)}},fe=function(e){var t,r;return r=t=function(t){function r(){return M(this,r),F(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),r.prototype.shouldComponentUpdate=function(e){return!u()(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},n,((t={})[r.type]=[].concat(n[r.type]||[],[B({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case h.TITLE:return B({},o,((t={})[n.type]=a,t.titleAttributes=B({},i),t));case h.BODY:return B({},o,{bodyAttributes:B({},i)});case h.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((r={})[n.type]=B({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=B({},t);return Object.keys(e).forEach((function(t){var n;r=B({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(H(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=H(t,["children"]),o=B({},n);return r&&(o=this.mapChildrenToProps(r,o)),s.createElement(e,o)},D(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(s.Component),t.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(a()((function(e){return{baseTag:K([T,E],e),bodyAttributes:z(p,e),defer:V(e,P),encode:V(e,I),htmlAttributes:z(d,e),linkTags:W(h.LINK,[C,T],e),metaTags:W(h.META,[O,b,v,A,w],e),noscriptTags:W(h.NOSCRIPT,[g],e),onChangeClientState:Z(e),scriptTags:W(h.SCRIPT,[S,g],e),styleTags:W(h.STYLE,[m],e),title:U(e),titleAttributes:z(y,e)}}),(function(e){ee&&Q(ee),e.defer?ee=$((function(){te(e,(function(){ee=null}))})):(te(e),ee=null)}),se)((function(){return null})));fe.renderStatic=fe.rewind},3967:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,f;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;for(f=e.entries();!(u=f.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!==u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!==u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},9475:function(e,t,r){"use strict";var n,o=r(2791),i=(n=o)&&"object"===typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!==typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),l.canUseDOM?t(u):r&&(u=r(u))}var l=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(l,"canUseDOM",c),l}}},7438:function(e,t,r){"use strict";r.d(t,{l:function(){return d}});var n=r(1413),o=r(4925),i=r(9050),a=r(5597),c=r(6516),u=r(2996),s=r(5113),f=r(6992),l=r(184),p=["className","children","requiredIndicator","optionalIndicator"],d=(0,a.G)((function(e,t){var r,a=(0,c.mq)("FormLabel",e),d=(0,u.Lr)(e),h=(d.className,d.children),b=d.requiredIndicator,m=void 0===b?(0,l.jsx)(y,{}):b,T=d.optionalIndicator,v=void 0===T?null:T,g=(0,o.Z)(d,p),w=(0,i.NJ)(),O=null!=(r=null==w?void 0:w.getLabelProps(g,t))?r:(0,n.Z)({ref:t},g);return(0,l.jsxs)(s.m.label,(0,n.Z)((0,n.Z)({},O),{},{className:(0,f.cx)("chakra-form__label",d.className),__css:(0,n.Z)({display:"block",textAlign:"start"},a),children:[h,(null==w?void 0:w.isRequired)?m:v]}))}));d.displayName="FormLabel";var y=(0,a.G)((function(e,t){var r=(0,i.NJ)(),o=(0,i.e)();if(!(null==r?void 0:r.isRequired))return null;var a=(0,f.cx)("chakra-form__required-indicator",e.className);return(0,l.jsx)(s.m.span,(0,n.Z)((0,n.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,t)),{},{__css:o.requiredIndicator,className:a}))}));y.displayName="RequiredIndicator"}}]);
//# sourceMappingURL=344.033b8886.chunk.js.map