"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[6368],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7346:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={title:"My Create Topic List",order:1,group:{title:"Topic",order:7}},o="My Create Topic list",u={unversionedId:"Web3MQ-API/PubSub/my_create_topic_list",id:"Web3MQ-API/PubSub/my_create_topic_list",title:"My Create Topic List",description:"---",source:"@site/docs/Web3MQ-API/PubSub/my_create_topic_list.md",sourceDirName:"Web3MQ-API/PubSub",slug:"/Web3MQ-API/PubSub/my_create_topic_list",permalink:"/docs/Web3MQ-API/PubSub/my_create_topic_list",tags:[],version:"current",frontMatter:{title:"My Create Topic List",order:1,group:{title:"Topic",order:7}},sidebar:"tutorialSidebar",previous:{title:"Create Topic",permalink:"/docs/Web3MQ-API/PubSub/create_topic"},next:{title:"My Subscribe Topic List",permalink:"/docs/Web3MQ-API/PubSub/my_subscribe_topic_list"}},c={},s=[{value:"My Create Topic list",id:"my-create-topic-list-1",level:2}],m={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"my-create-topic-list"},"My Create Topic list"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"my-create-topic-list-1"},"My Create Topic list"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/my_create_topic_list/"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters in URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"userid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp milliseconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"web3mq_signature"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"use ed25519 ",(0,l.kt)("inlineCode",{parentName:"td"},"base64 encode")," signature ",(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-API/signature"},"see signing detail"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page"),(0,l.kt)("td",{parentName:"tr",align:null},"not"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"not"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"web3mq_signature signing rule")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"base64 encode")," signature"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"web3mq_signature = ed25519 private key signing(userid + timestamp)")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"url query params")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/api/my_create_topic_list/?userid=userid&web3mq_signature=web3mq_signature&timestamp=timestamp&page=1&size=20\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Always Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result code, 0 means success, other code see msg's contents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result description")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 0,\n  "msg": "ok",\n  "data": [\n     {\n        "topicid": "topic:asdfasdfasdfa",\n        "topic_name": "topic name"\n     }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);