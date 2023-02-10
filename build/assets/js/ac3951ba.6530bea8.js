"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[5773],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),y=o,b=f["".concat(p,".").concat(y)]||f[y]||l[y]||a;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5550:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={nav:{title:"docs"},title:"ProtoType",order:30,sidebar_position:30},p="ProtoType",s={unversionedId:"Web3MQ-API/ProtoType",id:"Web3MQ-API/ProtoType",title:"ProtoType",description:"",source:"@site/docs/Web3MQ-API/ProtoType.md",sourceDirName:"Web3MQ-API",slug:"/Web3MQ-API/ProtoType",permalink:"/docs/Web3MQ-API/ProtoType",tags:[],version:"current",sidebarPosition:30,frontMatter:{nav:{title:"docs"},title:"ProtoType",order:30,sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Signature",permalink:"/docs/Web3MQ-API/signature"},next:{title:"Heartbeat",permalink:"/docs/Web3MQ-API/heartbeat"}},u={},l=[],f={toc:l};function y(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prototype"},"ProtoType"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// connect to node\nconst PbTypeConnectReqCommand = 0b00000010;\nconst PbTypeConnectRespCommand = 0b00000011;\n\n// normally message\nconst PbTypeMessage = 0b00010000;\nconst PbTypeMessageStatusResp = 0b00010101;\n\n// notification\nconst PbTypeNotificationListResp = 0b00010100;\n")))}y.isMDXComponent=!0}}]);