(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{206:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return f})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return v}));var n=r(2),o=r(9),a=r(0),i=r.n(a),c=r(210),s=r(213),l=["1.22.0","1.21.2","1.21.1","1.21.0","1.20.1","1.20.0","1.19.0","1.18.1","1.18.0"],u=l;var d=function(){return i.a.createElement("ul",null,u.map((function(e,t){return i.a.createElement("li",{key:""+e},i.a.createElement("a",{href:Object(s.a)("api/"+e+"/")},""+e),t?"":i.a.createElement("strong",null,i.a.createElement("em",null," - latest ")))})))},p={id:"api-reference-js-ts",title:"JS/TS API Reference",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"JSDoc API reference",description:"Check our generated API Documentation to discover SDK capabilities via code",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},f={id:"js/api-reference-js-ts",title:"JS/TS API Reference",description:"Check our generated API Documentation to discover SDK capabilities via code",source:"@site/docs/js/api-reference.md",permalink:"/cloud-sdk/docs/js/api-reference-js-ts",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/api-reference.md",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1588066203,sidebar_label:"JSDoc API reference",sidebar:"someSidebar",previous:{title:"Migrate to Open Source version of SDK for JS/TS",permalink:"/cloud-sdk/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript"},next:{title:"SAP Cloud SDK for Continuous Delivery",permalink:"/cloud-sdk/docs/devops/getting-started"}},b=[{value:"SDK Versions",id:"sdk-versions",children:[]},{value:"See also",id:"see-also",children:[]}],m={rightToc:b};function v(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The SAP Cloud SDK for JavaScript and TypeScript consists of multiple libraries to enable you to write side-by-side\nextensions on SAP Cloud Platform. Check ",Object(c.b)("inlineCode",{parentName:"p"},"JSDoc"),"API documentation."),Object(c.b)("h2",{id:"sdk-versions"},"SDK Versions"),Object(c.b)(d,{mdxType:"ApiReleaseList"}),Object(c.b)("h2",{id:"see-also"},"See also"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.sap.com/doc/2324e9c3b28748a4ae2ad08166d77675/1.0/en-US/js-index.html"}),"Release notes")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"getting-started"}),"Getting Started"))))}v.isMDXComponent=!0},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},211:function(e,t,r){"use strict";var n=r(0),o=r(49);t.a=function(){return Object(n.useContext)(o.a)}},213:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(214);var n=r(211);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},214:function(e,t,r){"use strict";var n=r(17),o=r(35),a=r(215),i="".startsWith;n(n.P+n.F*r(216)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},215:function(e,t,r){var n=r(70),o=r(24);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},216:function(e,t,r){var n=r(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);