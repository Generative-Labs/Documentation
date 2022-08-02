"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[4330],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,d=m["".concat(i,".").concat(h)]||m[h]||u[h]||l;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7110:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],c={position:3},i="Channel",s={unversionedId:"Web3MQ-SDK/JS-SDK/channel/channel",id:"Web3MQ-SDK/JS-SDK/channel/channel",title:"Channel",description:"Properties",source:"@site/docs/Web3MQ-SDK/JS-SDK/channel/channel.md",sourceDirName:"Web3MQ-SDK/JS-SDK/channel",slug:"/Web3MQ-SDK/JS-SDK/channel/",permalink:"/docs/Web3MQ-SDK/JS-SDK/channel/",tags:[],version:"current",frontMatter:{position:3},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/docs/Web3MQ-SDK/JS-SDK/client/"},next:{title:"Messages",permalink:"/docs/Web3MQ-SDK/JS-SDK/message/"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"channelList",id:"channellist",level:3},{value:"get",id:"get",level:4},{value:"Returns",id:"returns",level:4},{value:"activeChannel",id:"activechannel",level:3},{value:"get",id:"get-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Methods",id:"methods-1",level:2},{value:"setActiveChannel()",id:"setactivechannel",level:3},{value:"queryChannels()",id:"querychannels",level:3},{value:"createRoom()",id:"createroom",level:3}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"channel"},"Channel"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelList"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#channelresponse"},"ChannelResponse")," ","[ ]"," ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"channel list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activeChannel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#channelresponse"},"ChannelResponse")," ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"current active channel")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setActiveChannel"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#channelresponse"},"ChannelResponse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryChannels"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#pageparams"},"pageParams"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createRoom"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"{ user_id: string }")))),(0,l.kt)("h3",{id:"channellist"},"channelList"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Chat List")),(0,l.kt)("h4",{id:"get"},"get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Web3MQ } from "web3-mq";\n\nconst client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");\n\nclient.channel.channelList;\n')),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Array"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/types/#channelresponse"},"ChannelResponse"),"[]")),(0,l.kt)("h3",{id:"activechannel"},"activeChannel"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Currently active chat rooms")),(0,l.kt)("h4",{id:"get-1"},"get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Web3MQ } from "web3-mq";\n\nconst client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");\n\nclient.channel.activeChannel;\n')),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Object"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/types/#channelresponse"},"ChannelResponse"))),(0,l.kt)("h2",{id:"methods-1"},"Methods"),(0,l.kt)("h3",{id:"setactivechannel"},"setActiveChannel()"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the currently active channel and notifies all subscribers of updates")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"* setActiveChannel: (channel: ChannelResponse) => void;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Web3MQ } from "web3-mq";\n\nconst client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");\n\nclient.channel.setActiveChannel(channel: ChannelResponse);\n\n// After the request is completed, the data will be synchronized to the client\nconsole.log(client.channel.activeChannel);\n')),(0,l.kt)("h3",{id:"querychannels"},"queryChannels()"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Query all channel data and notifies all subscribers of updates")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"* queryChannels: (option: PageParams) => Promise<void>;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Web3MQ } from "web3-mq";\n\nconst client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");\n\nawait client.channel.queryChannels({\n  page: 1,\n  size: 20,\n});\n\n// After the request is completed, the data will be synchronized to the client\nconsole.log(client.channel.channelList);\n')),(0,l.kt)("h3",{id:"createroom"},"createRoom()"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Select a person to create a chat room and set the currently active chat room")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"* createRoom: (params: GetRoomInfoByTargetUserIdParams) => Promise<void>;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Web3MQ } from "web3-mq";\n\nconst client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");\n\nawait client.channel.createRoom({\n  user_id: "******",\n});\n\n// After the request is completed, the data will be synchronized to the client\nconsole.log(client.channel.activeChannel);\nconsole.log(client.channel.channelList);\n')))}h.isMDXComponent=!0}}]);