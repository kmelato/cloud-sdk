(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(1),o=n(9),a=(n(0),n(214)),r={id:"sdk-connectivity-destination-service",title:"Use destinations to connect to other systems and services",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destinations",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other systems and services like S/4HANA or SAP Cloud Platform services.",keywords:["sap","cloud","sdk","destination","java","connectivity"]},s={id:"java/features/connectivity/sdk-connectivity-destination-service",title:"Use destinations to connect to other systems and services",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other systems and services like S/4HANA or SAP Cloud Platform services.",source:"@site/docs/java/features/connectivity/destinations.md",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-destination-service",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1588931217,sidebar_label:"Destinations",sidebar:"someSidebar",previous:{title:"Use the VDM to consume OData Services",permalink:"/cloud-sdk/docs/java/features/odata/use-generated-odata-vdm-v2-v4"},next:{title:"Multi Tenancy with the Thread Context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"}},c=[{value:"Accessing Destinations",id:"accessing-destinations",children:[]},{value:"Testing",id:"testing",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The SAP Cloud SDK offers some basic functionality that helps with connecting to other systems and services like S/4HANA Cloud. The SDK introduces the general concept of a ",Object(a.b)("inlineCode",{parentName:"p"},"Destination")," which holds basic information about how to connect to such a system. That could for instance be a ",Object(a.b)("inlineCode",{parentName:"p"},"url"),", a user name and password for basic authentication or some custom headers."),Object(a.b)("p",null,"This concept is integrated with the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html"}),"Destination Service")," that is available on SAP Cloud Platform. If the application has a service binding to this service in place the SDK will provide access to these destinations."),Object(a.b)("h2",{id:"accessing-destinations"},"Accessing Destinations"),Object(a.b)("p",null,"In general destinations are accessed through the ",Object(a.b)("inlineCode",{parentName:"p"},"DestinationAccessor"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'DestinationAccessor.getDestination("my-destination");\n')),Object(a.b)("p",null,"This will lookup the destination in the destination service, if the application is running on SAP Cloud Platform. But also other sources like the environment variables are considered."),Object(a.b)("h2",{id:"testing"},"Testing"),Object(a.b)("p",null,"For testing purposes the SDK provides functionality to provide such a destination in a local development environment. Refer to ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://developers.sap.com/tutorials/s4sdk-odata-service-cloud-foundry.html#b77d53b0-2d8b-449c-9a9a-9df80ee09a4e"}),"these tutorial steps")," on how to mock destinations for local development and testing."))}d.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=i,f=u["".concat(r,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(f,s({ref:t},l,{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);