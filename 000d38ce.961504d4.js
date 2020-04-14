(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(200)),c={id:"mysql",title:"MySQL",sidebar_label:"MySQL"},i={id:"handlers/mysql",title:"MySQL",description:"![image](https://user-images.githubusercontent.com/20847995/79219205-84e55580-7e5a-11ea-96e2-c39581b90e61.png)",source:"@site/docs/handlers/mysql.md",permalink:"/docs/handlers/mysql",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/mysql.md",sidebar_label:"MySQL",sidebar:"sidebar",previous:{title:"SQLite / Tuql",permalink:"/docs/handlers/tuql"},next:{title:"Neo4j",permalink:"/docs/handlers/neo4j"}},l=[{value:"Config API Reference",id:"config-api-reference",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/20847995/79219205-84e55580-7e5a-11ea-96e2-c39581b90e61.png",alt:"image"}))),Object(o.b)("p",null,"This handler allows you to generate GraphQL schema based on a MySQL database schema or an SQL dump file."),Object(o.b)("p",null,"To get started, install the handler library from NPM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/mysql\n")),Object(o.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n  - name: Employees\n    handler:\n      mysql:\n        connectionString: path/to/database.sqlite\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can check out our example that uses MySQL handler.\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/mysql-employees"}),"Click here to open the example on GitHub"))),Object(o.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(o.b)("p",null,Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"connectionString")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required)"))))}u.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,i({ref:t},p,{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);