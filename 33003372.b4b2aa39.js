(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(0),n(163)),i={id:"getting-started",title:"CI/CD getting started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting started",description:"Continuous integration and delivery are pillars for contemporary application development.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},c={id:"devops/getting-started",title:"CI/CD getting started",description:"Continuous integration and delivery are pillars for contemporary application development.",source:"@site/docs/devops/getting-started.md",permalink:"/cloud-sdk/docs/devops/getting-started",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1587377740,sidebar_label:"Getting started",sidebar:"someSidebar",previous:{title:"Cloud SDK API Documentation",permalink:"/cloud-sdk/docs/js/api-documentation"},next:{title:"CAP - Cloud Application Model",permalink:"/cloud-sdk/docs/related-projects/cloud-application-model"}},l=[{value:"DevOps",id:"devops",children:[{value:"CI/CD for SAP Cloud SDK",id:"cicd-for-sap-cloud-sdk",children:[]},{value:"Project Piper",id:"project-piper",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"devops"},"DevOps"),Object(a.b)("p",null,"Continuous integration and delivery are pillars for contemporary application development. DevOps is a first class\ncitizen in SAP Cloud SDK and shipped as best practice with all generated project templates."),Object(a.b)("h3",{id:"cicd-for-sap-cloud-sdk"},"CI/CD for SAP Cloud SDK"),Object(a.b)("p",null,"SAP Cloud SDK for Pipeline is Open Source."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-s4-sdk-pipeline"}),"This repository")," contains a Jenkins Pipeline-as-Code that enables\ndevelopment teams to assure a high level of quality on process as well as code level. While the SAP Cloud SDK enables to\nbuild high-quality cloud applications, this pipeline helps to assure high quality on project level by a set of standard\nand SDK-specific quality checks."),Object(a.b)("h3",{id:"project-piper"},"Project Piper"),Object(a.b)("p",null,"In great park pipeline and action configuration for Cloud SDK is based on open sourced SAP library dubbed ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://sap.github.io/jenkins-library/guidedtour/"}),"Project\nPiper"),"."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://sap.github.io/jenkins-library/"}),"Please, check official documentation for more details.")))}s.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(f,c({ref:t},p,{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);