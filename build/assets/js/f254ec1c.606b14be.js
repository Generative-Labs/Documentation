"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[1746],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2687:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={position:2},s="Register",c={unversionedId:"Web3MQ-SDK/Swift-SDK/Register/Register",id:"Web3MQ-SDK/Swift-SDK/Register/Register",title:"Register",description:"Methods",source:"@site/docs/Web3MQ-SDK/Swift-SDK/Register/Register.md",sourceDirName:"Web3MQ-SDK/Swift-SDK/Register",slug:"/Web3MQ-SDK/Swift-SDK/Register/",permalink:"/docs/Web3MQ-SDK/Swift-SDK/Register/",tags:[],version:"current",frontMatter:{position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/Web3MQ-SDK/Swift-SDK/QuickStart/"},next:{title:"Channels",permalink:"/docs/Web3MQ-SDK/Swift-SDK/Channels/"}},u={},p=[{value:"Methods",id:"methods",level:2},{value:"<strong>Register</strong>",id:"auth-1",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"register"},"Register"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"response"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"register"),(0,a.kt)("td",{parentName:"tr",align:null},"didType: String, didValue: String, signatureContent: String, didSignature: String, timestamp: UInt64, keychainStore: Bool"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/Swift-SDK/Structs/###KeyPair"},"KeyPair"),", userId")))),(0,a.kt)("h2",{id:"auth-1"},(0,a.kt)("strong",{parentName:"h2"},"Register")),(0,a.kt)("p",null,"You should get the Wallet signature firstly. The keypair will be stored in Keychain by default, set the keychainStore parameter to false to disable keychain storage. You need to keep the private key in a safe place."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let result: (KeyPair, UserId) = await Client.shared.auth(didType: String, didValue: String, signatureContent: String, didSignature: String, timestamp: UInt64, keychainStore: Bool)\n")))}f.isMDXComponent=!0}}]);