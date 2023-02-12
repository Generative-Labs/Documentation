"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[6336],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),g=l(n),d=i,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||a;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8041:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={position:8},p="Topics",l={unversionedId:"Web3MQ-SDK/Swift-SDK/Topics/Topics",id:"Web3MQ-SDK/Swift-SDK/Topics/Topics",title:"Topics",description:"Methods",source:"@site/docs/Web3MQ-SDK/Swift-SDK/Topics/Topics.md",sourceDirName:"Web3MQ-SDK/Swift-SDK/Topics",slug:"/Web3MQ-SDK/Swift-SDK/Topics/",permalink:"/docs/Web3MQ-SDK/Swift-SDK/Topics/",tags:[],version:"current",frontMatter:{position:8},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/docs/Web3MQ-SDK/Swift-SDK/Notifications/"},next:{title:"Structs",permalink:"/docs/Web3MQ-SDK/Swift-SDK/Structs/"}},s={},u=[{value:"Methods",id:"methods",level:2},{value:"Creating Topic",id:"creating-topic",level:2},{value:"Getting Topic List",id:"getting-topic-list",level:2},{value:"Getting Created Topics",id:"getting-created-topics",level:3},{value:"Getting <strong>Subscribed Topics</strong>",id:"getting-subscribed-topics",level:3},{value:"Publishing Messages to a Topic",id:"publishing-messages-to-a-topic",level:2},{value:"<strong>Subscribing Topic</strong>",id:"subscribing-topic",level:2}],g={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topics"},"Topics"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Response"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"create"),(0,a.kt)("td",{parentName:"tr",align:null},"topicName: String"),(0,a.kt)("td",{parentName:"tr",align:null},"topicId: String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"subscribe"),(0,a.kt)("td",{parentName:"tr",align:null},"topicId: String"),(0,a.kt)("td",{parentName:"tr",align:null},"isSuccess: Bool")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"publishMessage"),(0,a.kt)("td",{parentName:"tr",align:null},"topicid: String; title: String; content: String"),(0,a.kt)("td",{parentName:"tr",align:null},"isSuccess: Bool")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getCreatedTopicList"),(0,a.kt)("td",{parentName:"tr",align:null},"page: Int, size: Int"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/Swift-SDK/Structs/###Topic"},"Topic"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getSubscribedTopicList"),(0,a.kt)("td",{parentName:"tr",align:null},"page: Int, size: Int"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/Swift-SDK/Structs/###Topic"},"Topic"))))),(0,a.kt)("h2",{id:"creating-topic"},"Creating Topic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'// topicName is optional \nlet topic: Topic = await Client.shared.topicManager.create(topicName: "{topic_name}")\n')),(0,a.kt)("h2",{id:"getting-topic-list"},"Getting Topic List"),(0,a.kt)("h3",{id:"getting-created-topics"},"Getting Created Topics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// get the topic ids \nlet topics: [String] = await Client.shared.topicManager.myCreateTopics(page: Int, size: Int)\n")),(0,a.kt)("h3",{id:"getting-subscribed-topics"},"Getting ",(0,a.kt)("strong",{parentName:"h3"},"Subscribed Topics")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let topics: [String] = await Client.shared.topicManager.mySubscribeTopics(page: Int, size: Int)\n")),(0,a.kt)("h2",{id:"publishing-messages-to-a-topic"},"Publishing Messages to a Topic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'await Client.shared.topicManager.publishMessage(topicId: "{TopicId}", title: "{title}", content: "{content}")\n')),(0,a.kt)("h2",{id:"subscribing-topic"},(0,a.kt)("strong",{parentName:"h2"},"Subscribing Topic")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let isSuccess: Bool = await Client.shared.topicManager.subscribeTopic("{TopicId}")\n')))}d.isMDXComponent=!0}}]);