"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[5423],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),k=a,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2945:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Overview",order:1,sidebar_position:2,group:{title:"Quickstart"}},s="Quickstart",u={unversionedId:"Web3MQ-API/quickstart/index",id:"Web3MQ-API/quickstart/index",title:"Overview",description:"Let's start how to use and successfully send the first message in the chat room we created",source:"@site/docs/Web3MQ-API/quickstart/index.md",sourceDirName:"Web3MQ-API/quickstart",slug:"/Web3MQ-API/quickstart/",permalink:"/docs/Web3MQ-API/quickstart/",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Overview",order:1,sidebar_position:2,group:{title:"Quickstart"}},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Web3MQ-API/Intro"},next:{title:"1. User Register",permalink:"/docs/Web3MQ-API/quickstart/user_register"}},p={},c=[{value:"Usage Steps",id:"usage-steps",level:2}],m={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"Quickstart"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Let's start how to use and successfully send the first message in the chat room we created")),(0,i.kt)("h2",{id:"usage-steps"},"Usage Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Register Web3MQ Account")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type your password"),(0,i.kt)("li",{parentName:"ul"},"Generate Wallet signature\nSigning secret data(your password and other info) with Wallet (MetaMask/StarkNet)"),(0,i.kt)("li",{parentName:"ul"},"Generate Ed25519 key pair use wallet signature which call ",(0,i.kt)("inlineCode",{parentName:"li"},"Main KeyPair")),(0,i.kt)("li",{parentName:"ul"},"Signing register info use MetaMask or StarkNet and Call register api"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User login")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Generate login key pair"),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"Main KeyPair")," signing login key pair"),(0,i.kt)("li",{parentName:"ul"},"Call login api"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create a group (chat room)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create a group for next step"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Send Connect Command"),", Web3MQ Command use protobuf v3"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Send connect command to server"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Send a message in Group (chat room)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Send a message in previou create group")))))}k.isMDXComponent=!0}}]);