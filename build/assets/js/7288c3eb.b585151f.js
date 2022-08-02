"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[7946],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2852:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},c="Slope",p={unversionedId:"Web3MQ-SDK/JS-SDK/authorization/Slope",id:"Web3MQ-SDK/JS-SDK/authorization/Slope",title:"Slope",description:"Properties",source:"@site/docs/Web3MQ-SDK/JS-SDK/authorization/Slope.md",sourceDirName:"Web3MQ-SDK/JS-SDK/authorization",slug:"/Web3MQ-SDK/JS-SDK/authorization/Slope",permalink:"/docs/Web3MQ-SDK/JS-SDK/authorization/Slope",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MetaMask",permalink:"/docs/Web3MQ-SDK/JS-SDK/authorization/MetaMask"},next:{title:"Walletconnect",permalink:"/docs/Web3MQ-SDK/JS-SDK/authorization/Walletconnect"}},u={},s=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Usage",id:"usage",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slope"},"Slope"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"signSlope"),(0,a.kt)("td",{parentName:"tr",align:null},"function"),(0,a.kt)("td",{parentName:"tr",align:null},"Wrapped functions such as login authorization using Slope")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disconnecting"),(0,a.kt)("td",{parentName:"tr",align:null},"function"),(0,a.kt)("td",{parentName:"tr",align:null},"disconnecting")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Web3MQ, Slope } from "web3-mq";\n\nconst token = await Slope.signSlope();\n\nSlope.disconnecting();\n\nconst client = Web3MQ.getInstance(token);\n')))}f.isMDXComponent=!0}}]);