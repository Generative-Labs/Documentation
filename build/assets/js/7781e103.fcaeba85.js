"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[3146],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),o=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=o(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=o(n),b=a,d=m["".concat(u,".").concat(b)]||m[b]||c[b]||i;return n?r.createElement(d,l(l({ref:e},s),{},{components:n})):r.createElement(d,l({ref:e},s))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7335:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],p={title:"My Subscribe Topic List",order:1,group:{title:"Topic",order:7}},u="My Subscribe Topic list",o={unversionedId:"Web3MQ-API/PubSub/my_subscribe_topic_list",id:"Web3MQ-API/PubSub/my_subscribe_topic_list",title:"My Subscribe Topic List",description:"---",source:"@site/docs/Web3MQ-API/PubSub/my_subscribe_topic_list.md",sourceDirName:"Web3MQ-API/PubSub",slug:"/Web3MQ-API/PubSub/my_subscribe_topic_list",permalink:"/docs/Web3MQ-API/PubSub/my_subscribe_topic_list",tags:[],version:"current",frontMatter:{title:"My Subscribe Topic List",order:1,group:{title:"Topic",order:7}},sidebar:"tutorialSidebar",previous:{title:"My Create Topic List",permalink:"/docs/Web3MQ-API/PubSub/my_create_topic_list"},next:{title:"Publish Topic Message",permalink:"/docs/Web3MQ-API/PubSub/publish_topic_message"}},s={},c=[{value:"My Subscribe Topic list",id:"my-subscribe-topic-list-1",level:2}],m={toc:c};function b(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"my-subscribe-topic-list"},"My Subscribe Topic list"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"my-subscribe-topic-list-1"},"My Subscribe Topic list"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/my_subscribe_topic_list/"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters in URL"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"userid"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"userid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"timestamp milliseconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"web3mq_signature"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"use ed25519 ",(0,i.kt)("inlineCode",{parentName:"td"},"base64 encode")," signature ",(0,i.kt)("a",{parentName:"td",href:"/docs/Web3MQ-API/signature"},"see signing detail"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"page"),(0,i.kt)("td",{parentName:"tr",align:null},"not"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"size"),(0,i.kt)("td",{parentName:"tr",align:null},"not"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"web3mq_signature signing rule")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"base64 encode")," signature"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"web3mq_signature = ed25519 private key signing(userid + timestamp)")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"url query params")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/api/my_subscribe_topic_list/?userid=userid&web3mq_signature=web3mq_signature&timestamp=timestamp&page=1&size=20\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"response")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Always Return"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"code"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"result code, 0 means success, other code see msg's contents")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"msg"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"result description")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 0,\n  "msg": "ok",\n  "data": [\n    {\n      "topicid": "topic:asdfasdfasdfa",\n      "topic_name": "topic name"\n    }\n  ]\n}\n')))}b.isMDXComponent=!0}}]);