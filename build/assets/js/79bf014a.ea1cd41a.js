"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[1745],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),g=c(n),m=l,d=g["".concat(o,".").concat(m)]||g[m]||u[m]||i;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,s=new Array(i);s[0]=g;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:l,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},230:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),s=["components"],r={position:9},o=void 0,c={unversionedId:"Web3MQ-SDK/JS-SDK/eventCenter/eventCenter",id:"Web3MQ-SDK/JS-SDK/eventCenter/eventCenter",title:"eventCenter",description:"event list",source:"@site/docs/Web3MQ-SDK/JS-SDK/eventCenter/eventCenter.md",sourceDirName:"Web3MQ-SDK/JS-SDK/eventCenter",slug:"/Web3MQ-SDK/JS-SDK/eventCenter/",permalink:"/docs/Web3MQ-SDK/JS-SDK/eventCenter/",tags:[],version:"current",frontMatter:{position:9},sidebar:"tutorialSidebar",previous:{title:"Standard List",permalink:"/docs/Web3MQ-SDK/JS-SDK/standards/"},next:{title:"Quick Start",permalink:"/docs/Web3MQ-SDK/Swift-SDK/QuickStart/"}},p={},u=[{value:"event list",id:"event-list",level:2},{value:"Connect",id:"connect",level:2},{value:"usage",id:"usage",level:3},{value:"Channel",id:"channel",level:2},{value:"usage",id:"usage-1",level:3},{value:"Contact",id:"contact",level:2},{value:"usage",id:"usage-2",level:3},{value:"Message",id:"message",level:2},{value:"usage",id:"usage-3",level:3},{value:"Notification",id:"notification",level:2},{value:"usage",id:"usage-4",level:3}],g={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"event-list"},"event list"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"}," Why subscribe to events? The SDK maintains some data internally, such as channelList, messageList, etc, when the event is listened to, it means that some data in the client is updated to the latest state. "))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When you connect to Web3MQ, you must subscribe to the following events regarding instant messaging "),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"message.delivered"),(0,i.kt)("li",{parentName:"ul"},"message.getList")))),(0,i.kt)("h2",{id:"connect"},"Connect"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When the user creates a client, it will automatically connect to the websocket, and the user can listen to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")," events, to get the latest status of the current websoctet from ",(0,i.kt)("inlineCode",{parentName:"p"},"client.connect.ws"),".")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"event"),(0,i.kt)("th",{parentName:"tr",align:null},"trigger"),(0,i.kt)("th",{parentName:"tr",align:null},"trigger function"),(0,i.kt)("th",{parentName:"tr",align:null},"recipients"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"connect.changeReadyStatus"),(0,i.kt)("td",{parentName:"tr",align:null},"When the ready status of your connected WebSocket changes"),(0,i.kt)("td",{parentName:"tr",align:null},"client.getInstance"),(0,i.kt)("td",{parentName:"tr",align:null},"client.connect.ws.readyStatus is updated to the latest state")))),(0,i.kt)("h3",{id:"usage"},"usage"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A simple example of how to subscribe to connenct events and get the latest status of connect.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Client, EventTypes } from '@web3mq/client';\nconst client = Client.getInstance('your Key pairs');\nconst handleEvent = (props: { type: EventTypes }) => {\n    const { type } = props;\n    const { ws } = client.connect;\n    if (!ws) retrun null;\n    if (type === 'connect.changeReadyStatus') {\n        console.log('the current websocket readyStatus is: ', ws.readyState);\n    }\n};\nclient.on('connect.changeReadyStatus', handleEvent);\n// Cancel event after one hour\nsetTimeout(() => {\n    client.off('connect.changeReadyStatus', handleEvent)\n}, 1000 * 60 * 60);\n")),(0,i.kt)("h2",{id:"channel"},"Channel"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Channel")," event helps you keep up to date with channel changes and get the latest status from the data maintained by the Web3MQ client, such as client.channel.chanelList.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"event"),(0,i.kt)("th",{parentName:"tr",align:null},"trigger"),(0,i.kt)("th",{parentName:"tr",align:null},"trigger function"),(0,i.kt)("th",{parentName:"tr",align:null},"recipients"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"channel.activeChange"),(0,i.kt)("td",{parentName:"tr",align:null},"When one of the channels is set to active"),(0,i.kt)("td",{parentName:"tr",align:null},"client.channel.setActiveChannel"),(0,i.kt)("td",{parentName:"tr",align:null},"client.channel.activeChannel is updated to the latest state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"channel.getList"),(0,i.kt)("td",{parentName:"tr",align:null},"When channelList is acquired, channel is created and join channel"),(0,i.kt)("td",{parentName:"tr",align:null},"client.channel.queryChannels,client.channel.createRoom and client.channel.joinGroup"),(0,i.kt)("td",{parentName:"tr",align:null},"client.channel.channelList is updated to the latest state")))),(0,i.kt)("h3",{id:"usage-1"},"usage"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A simple example of how to subscribe to channel events and get the latest status of channel list.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Client, EventTypes } from '@web3mq/client';\nconst client = Client.getInstance('your Key pairs');\nconst handleEvent = (props: { type: EventTypes }) => {\n    const { type } = props;\n    const { channelList } = client.channel;\n    if (!channelList) {\n      return;\n    }\n    if (type === 'channel.getList') {\n      console.log('the current channelList is: ', channelList);\n    }\n};\n// subscribe event\nclient.on('channel.getList', handleEvent);\n// get channel list\nclietn.channel.queryChannels({page: 1, size: 20});\n// Cancel event after one hour\nsetTimeout(() => {\n    client.off('channel.getList', handleEvent)\n}, 1000 * 60 * 60);\n")),(0,i.kt)("h2",{id:"contact"},"Contact"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"contact")," event always notifies you when you get a list of followers, etc. For example, you can get the latest status from ",(0,i.kt)("inlineCode",{parentName:"p"},"client.contact.follower")," after the event is triggered.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"event"),(0,i.kt)("th",{parentName:"tr",align:null},"trigger"),(0,i.kt)("th",{parentName:"tr",align:null},"trigger function"),(0,i.kt)("th",{parentName:"tr",align:null},"recipients"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"contact.getContactList"),(0,i.kt)("td",{parentName:"tr",align:null},"When contactList is acquired"),(0,i.kt)("td",{parentName:"tr",align:null},"client.contact.getContactList"),(0,i.kt)("td",{parentName:"tr",align:null},"client.contact.contactList is updated to the latest state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"contact.getFollowerList"),(0,i.kt)("td",{parentName:"tr",align:null},"When followerList is acquired"),(0,i.kt)("td",{parentName:"tr",align:null},"client.contact.getFollowerList"),(0,i.kt)("td",{parentName:"tr",align:null},"client.contact.followerList is updated to the latest state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"contact.getFollowingList"),(0,i.kt)("td",{parentName:"tr",align:null},"When followingList is acquired"),(0,i.kt)("td",{parentName:"tr",align:null},"client.contact.getFollowingList"),(0,i.kt)("td",{parentName:"tr",align:null},"client.contact.followingList is updated to the latest state")))),(0,i.kt)("h3",{id:"usage-2"},"usage"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A simple example of how to subscribe to channel events and get the latest status of follower list.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Client, EventTypes } from '@web3mq/client';\nconst client = Client.getInstance('your Key pairs');\nconst handleEvent = (props: { type: EventTypes }) => {\n    const { type } = props;\n    const { followerList } = client.contact;\n    if (!followerList) {\n      return;\n    }\n    if (type === 'contact.getFollowerList') {\n      console.log('the current followerList is: ', followerList);\n    }\n};\n// subscribe event\nclient.on('contact.getFollowerList', handleEvent);\n// get follower list\nclietn.channel.getFollowerList({page: 1, size: 20});\n// Cancel event after one hour\nsetTimeout(() => {\n    client.off('contact.getFollowerList', handleEvent)\n}, 1000 * 60 * 60);\n")),(0,i.kt)("h2",{id:"message"},"Message"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When you send a message, get a message, etc., it's all about the ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," event. When the web3mq Client is created successfully, client.message.receive will be used as a websocket callback")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"event"),(0,i.kt)("th",{parentName:"tr",align:null},"trigger"),(0,i.kt)("th",{parentName:"tr",align:null},"trigger function"),(0,i.kt)("th",{parentName:"tr",align:null},"recipients"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message.getList"),(0,i.kt)("td",{parentName:"tr",align:null},"When messageList is acquired"),(0,i.kt)("td",{parentName:"tr",align:null},"client.message.getMessageList"),(0,i.kt)("td",{parentName:"tr",align:null},"client.message.messageList is updated to the latest state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message.send"),(0,i.kt)("td",{parentName:"tr",align:null},"When you send a new message"),(0,i.kt)("td",{parentName:"tr",align:null},"client.message.sendMessage"),(0,i.kt)("td",{parentName:"tr",align:null},"client.message.messageList and client.message.msg_text are updated to the latest state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message.delivered"),(0,i.kt)("td",{parentName:"tr",align:null},"When your send new message is successfully delivered to the other"),(0,i.kt)("td",{parentName:"tr",align:null},"client.message.receive"),(0,i.kt)("td",{parentName:"tr",align:null},"client.message.messageList is updated to the latest state")))),(0,i.kt)("h3",{id:"usage-3"},"usage"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A simple example of how to subscribe to message events and send a message, get messages list.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Client, EventTypes } from '@web3mq/client';\nconst client = Client.getInstance('your Key pairs');\nconst handleEvent = (props: { type: EventTypes }) => {\n    const { type } = props;\n    const { messageList, msg_text } = client.message;\n    if (!messageList) {\n      return;\n    }\n    if (type === 'message.getList') {\n      console.log('the current messageList is: ', messageList);\n    }\n    if (type === 'message.send') {\n      console.log('you are sending a message, the message content is: ', msg_text);\n      console.log('the latest MessageList when you send a message: ', messageList);\n    }\n    if (type === 'message.delivered') {\n      console.log('the message you sent was successfully delivered');\n      console.log('the latest MessageList when you send a message successfully: ', messageList);\n    }\n};\n// subscribe event\nclient.on('message.getList', handleEvent);\nclient.on('message.send', handleEvent);\nclient.on('message.delivered', handleEvent);\n// get message list of user who userid is user: xxx\nclietn.message.getMessageList({page: 1, size: 20}, \"user: xxxx\")\n    .then(() => {\n        // send message after get message list\n        client.message.send('hello world', \"user: xxx\")\n    });\n// Cancel event after one hour\nsetTimeout(() => {\n    client.off('message.getList', handleEvent);\n    client.off('message.send', handleEvent);\n    client.off('message.delivered', handleEvent);\n}, 1000 * 60 * 60);\n")),(0,i.kt)("h2",{id:"notification"},"Notification"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notification events notify you when an action happens to you, for example, when someone follows you in an application.All notification event type start with notification.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"event"),(0,i.kt)("th",{parentName:"tr",align:null},"trigger"),(0,i.kt)("th",{parentName:"tr",align:null},"trigger function"),(0,i.kt)("th",{parentName:"tr",align:null},"recipients"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"notification.getList"),(0,i.kt)("td",{parentName:"tr",align:null},"When notificationList is acquired"),(0,i.kt)("td",{parentName:"tr",align:null},"client.notify.receiveNotify"),(0,i.kt)("td",{parentName:"tr",align:null},"client.notify.notificationList is updated to the latest state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"notification.getMyTopicList"),(0,i.kt)("td",{parentName:"tr",align:null},"When list of topics I created is acquired"),(0,i.kt)("td",{parentName:"tr",align:null},"client.topic.getMyCreateTopicList"),(0,i.kt)("td",{parentName:"tr",align:null},"client.topic.myTopicList is updated to the latest state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"notification.getMySubscribeList"),(0,i.kt)("td",{parentName:"tr",align:null},"When list of topics I subscribed is acquired"),(0,i.kt)("td",{parentName:"tr",align:null},"client.topic.getMySubscribeTopicList"),(0,i.kt)("td",{parentName:"tr",align:null},"client.topic.mySubscribeList is updated to the latest state")))),(0,i.kt)("h3",{id:"usage-4"},"usage"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A simple example of how to subscribe to notification events and get list of topics I created.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Client, EventTypes } from '@web3mq/client';\nconst client = Client.getInstance('your Key pairs');\nconst handleEvent = (props: { type: EventTypes }) => {\n    const { type } = props;\n    const { myTopicList } = client.topic;\n    if (!myTopicList) {\n      return;\n    }\n    if (type === 'notification.getMyTopicList') {\n      console.log('the current myTopicList is: ', myTopicList);\n    }\n};\n// subscribe event\nclient.on('notification.getMyTopicList', handleEvent);\n// get myTopicList\nclient.topic.getMyCreateTopicList({page: 1, size: 20});\n// Cancel event after one hour\nsetTimeout(() => {\n    client.off('notification.getMyTopicList', handleEvent);\n}, 1000 * 60 * 60);\n")))}m.isMDXComponent=!0}}]);