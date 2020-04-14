(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),i=(n(0),n(200)),o={id:"soap",title:"SOAP",sidebar_label:"SOAP"},l={id:"handlers/soap",title:"SOAP",description:"![image](https://user-images.githubusercontent.com/20847995/79220083-0a1d3a00-7e5c-11ea-9ac5-855428121143.png)",source:"@site/docs/handlers/soap.md",permalink:"/docs/handlers/soap",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/soap.md",sidebar_label:"SOAP",sidebar:"sidebar",previous:{title:"PostgreSQL / PostGraphile",permalink:"/docs/handlers/postgraphile"},next:{title:"MongoDB / Mongoose",permalink:"/docs/handlers/mongoose"}},c=[{value:"Codesandbox Example",id:"codesandbox-example",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/20847995/79220083-0a1d3a00-7e5c-11ea-9ac5-855428121143.png",alt:"image"}))),Object(i.b)("p",null,"This handler allows you to consume ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.soapui.org/"}),"SOAP")," ",Object(i.b)("inlineCode",{parentName:"p"},"WSDL")," files and generate a remote executable schema for those services."),Object(i.b)("p",null,"To get started, install the handler library from NPM:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/soap\n")),Object(i.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n  - name: CountryInfo\n    handler:\n      soap:\n        wsdl: http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL\n")),Object(i.b)("h2",{id:"codesandbox-example"},"Codesandbox Example"),Object(i.b)("p",null,"You can check out our example that uses SOAP Handler."),Object(i.b)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/soap-country-info?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"country-info-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(i.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(i.b)("p",null,Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"wsdl")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - A url to your WSDL"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"basicAuth")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),") - Basic Authentication Configuration\nIncluding username and password fields: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"username")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - Username for Basic Authentication"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"password")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - Password for Basic Authentication"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"securityCert")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),") - SSL Certificate Based Authentication Configuration\nIncluding public key, private key and password fields: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"publicKey")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Your public key"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"privateKey")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Your private key"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"password")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Password"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"publicKeyPath")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Path to the file or URL contains your public key"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"privateKeyPath")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Path to the file or URL contains your private key"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"passwordPath")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Path to the file or URL contains your password"))))))}b.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?a.a.createElement(m,l({ref:t},p,{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);