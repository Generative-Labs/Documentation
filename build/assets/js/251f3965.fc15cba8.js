"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[1714],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(o,".").concat(s)]||m[s]||d[s]||p;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),l=["components"],i={title:"DApp Create Topic",order:1,group:{title:"DApp",order:6}},o="DApp Create Topic",u={unversionedId:"Web3MQ-API/dapp/dapp_create_topic",id:"Web3MQ-API/dapp/dapp_create_topic",title:"DApp Create Topic",description:"---",source:"@site/docs/Web3MQ-API/dapp/dapp_create_topic.md",sourceDirName:"Web3MQ-API/dapp",slug:"/Web3MQ-API/dapp/dapp_create_topic",permalink:"/docs/Web3MQ-API/dapp/dapp_create_topic",tags:[],version:"current",frontMatter:{title:"DApp Create Topic",order:1,group:{title:"DApp",order:6}},sidebar:"tutorialSidebar",previous:{title:"Create DApp",permalink:"/docs/Web3MQ-API/dapp/create_dapp"},next:{title:"DApp Subscribe Topic",permalink:"/docs/Web3MQ-API/dapp/dapp_subscribe_topic"}},c={},d=[],m={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"dapp-create-topic"},"DApp Create Topic"),(0,p.kt)("hr",null),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("strong",{parentName:"p"},"POST")," ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/dapp_create_topic/"))),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Request Payload")),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameters in Body json"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Required"),(0,p.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"dapp_id"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"dapp_id")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,p.kt)("td",{parentName:"tr",align:null},"int"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"timestamp milliseconds")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"web3mq_dapp_signature"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"use ed25519 ",(0,p.kt)("inlineCode",{parentName:"td"},"base64 encode")," signature ",(0,p.kt)("a",{parentName:"td",href:"/docs/Web3MQ-API/signature"},"see signing detail"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"topic_name"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"No"),(0,p.kt)("td",{parentName:"tr",align:null},"topic name")))),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"web3mq_dapp_signature signing rule")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"base64 encode")," signature"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"web3mq_dapp_signature = ",(0,p.kt)("inlineCode",{parentName:"p"},"dapp ed25519 private key")," signing(dappid + timestamp)")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Body json params")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dapp_id": "<your dappid>",\n  "web3mq_dapp_signature": "<web3mq_dapp_signature>",\n  "topic_name": "",\n  "timestamp": 1656991509327\n}\n')),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"response")),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Always Return"),(0,p.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"code"),(0,p.kt)("td",{parentName:"tr",align:null},"int"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"result code, 0 means success, other code see msg's contents")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"msg"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"result description")))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 0,\n  "msg": "ok",\n  "data": {\n    "topicid": "topic:asdfasdfasdfa"\n  }\n}\n')))}s.isMDXComponent=!0}}]);