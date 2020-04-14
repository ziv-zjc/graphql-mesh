(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(9),o=(r(0),r(200)),s={id:"typescript",title:"TypeScript Support",sidebar_label:"TypeScript Support"},p={id:"recipes/typescript",title:"TypeScript Support",description:"GraphQL Mesh supports TypeScript, and you can easily use it to generate typings for the fetched data, or for you custom resolvers that specific under `additionalResolvers`",source:"@site/docs/recipes/typescript.md",permalink:"/docs/recipes/typescript",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/recipes/typescript.md",sidebar_label:"TypeScript Support",sidebar:"sidebar",previous:{title:"Runtime",permalink:"/docs/api/runtime"},next:{title:"Mesh as SDK",permalink:"/docs/recipes/as-sdk"}},i=[{value:"Type safety for custom resolvers",id:"type-safety-for-custom-resolvers",children:[]},{value:"Type safety for fetched data",id:"type-safety-for-fetched-data",children:[]}],c={rightToc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL Mesh supports TypeScript, and you can easily use it to generate typings for the fetched data, or for you custom resolvers that specific under ",Object(o.b)("inlineCode",{parentName:"p"},"additionalResolvers")),Object(o.b)("h2",{id:"type-safety-for-custom-resolvers"},"Type safety for custom resolvers"),Object(o.b)("p",null,"GraphQL Mesh allow API handler packages to provide TypeScript typings in order to have types support in your code."),Object(o.b)("p",null,"In order to use the TypeScript support, use the CLI to generate typings file based on your unified GraphQL schema:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"graphql-mesh typescript --output ./src/generated/mesh.ts\n")),Object(o.b)("p",null,"Now, you can import ",Object(o.b)("inlineCode",{parentName:"p"},"Resolvers")," interface from the generated file, and use it as the type for your custom resolvers. It will make sure that your parent value, arguments, context type and return value are fully compatible with the implementation. It will also provide fully typed SDK from the context:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { Resolvers } from './generated/mesh';\n\nexport const resolvers: Resolvers = {\n  // Your custom resolvers here\n};\n")),Object(o.b)("p",null,"And make sure you have ",Object(o.b)("inlineCode",{parentName:"p"},"require")," section set in your config file (to allow GraphQL Mesh to compile TypeScript files):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"require:\n  - ts-node/register/transpile-only\nadditionalResolvers:\n  - ./src/mesh-resolvers.ts  \n")),Object(o.b)("h2",{id:"type-safety-for-fetched-data"},"Type safety for fetched data"),Object(o.b)("p",null,"Instead of using GraphQL operations as string with ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," - you can use GraphQL Mesh and generate a ready-to-use TypeScript SDK to fetch your data. It will make sure to have type-safety and auto-complete for variables and returned data."),Object(o.b)("p",null,"To generate this SDK, start by creating your GraphQL operations in a ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query myQuery($someVar: String!) {\n  getSomething(var: $someVar) {\n    fieldA\n    fieldB\n  }\n}\n")),Object(o.b)("p",null,"Now, use GraphQL Mesh CLI and point it to the list of your ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files, and specify the output path for the TypeScript SDK:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'graphql-mesh generate-sdk --operations "./src/**/*.graphql" --output ./src/generated/sdk.ts\n')),Object(o.b)("p",null,"Now, instead of using ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," manually, you can use the generated ",Object(o.b)("inlineCode",{parentName:"p"},"getSdk")," method with your a GraphQL Mesh client, and use the functions that are generated based on your operations:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { getSdk } from './generated/sdk';\nimport { getMesh, findAndParseConfig } from '@graphql-mesh/runtime';\nimport { ApolloServer } from 'apollo-server';\n\nasync function test() {\n  // Load mesh config and get the sdkClient from it\n  const meshConfig = await findAndParseConfig();\n  const { sdkRequester } = await getMesh(meshConfig);\n  // Get fully-typed SDK using the Mesh client and based on your GraphQL operations\n  const sdk = getSdk(sdkRequester);\n\n  // Execute `myQuery` and get a type-safe result\n  // Variables and result are typed: { data?: { getSomething: { fieldA: string, fieldB: number }, errors?: GraphQLError[] } }\n  const { data, errors } = await sdk.myQuery({ someVar: 'foo' });\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can find an example for that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/postgres-geodb#using-the-generated-sdk"}),"here"))))}l.isMDXComponent=!0},200:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,p({ref:t},c,{components:r})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);