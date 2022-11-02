"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[4330],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),g=o,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||a;return t?r.createElement(d,s(s({ref:n},l),{},{components:t})):r.createElement(d,s({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={title:"6. Send a message",order:7,group:{title:"Quickstart"}},s="6. Send a message to group (chat room)",i={unversionedId:"Web3MQ-API/quickstart/Send_message_in_Group",id:"Web3MQ-API/quickstart/Send_message_in_Group",title:"6. Send a message",description:"- Chat with someone contentTopic is userid",source:"@site/docs/Web3MQ-API/quickstart/Send_message_in_Group.md",sourceDirName:"Web3MQ-API/quickstart",slug:"/Web3MQ-API/quickstart/Send_message_in_Group",permalink:"/docs/Web3MQ-API/quickstart/Send_message_in_Group",draft:!1,tags:[],version:"current",frontMatter:{title:"6. Send a message",order:7,group:{title:"Quickstart"}},sidebar:"tutorialSidebar",previous:{title:"5. Send Connect Command",permalink:"/docs/Web3MQ-API/quickstart/Send_Connect_Command"},next:{title:"Overview",permalink:"/docs/Web3MQ-API/pubkey/"}},c={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"6-send-a-message-to-group-chat-room"},"6. Send a message to group (chat room)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chat with someone ",(0,o.kt)("inlineCode",{parentName:"li"},"contentTopic")," is userid"),(0,o.kt)("li",{parentName:"ul"},"Chat in group ",(0,o.kt)("inlineCode",{parentName:"li"},"contentTopic")," is groupid")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message Web3MQRequestMessage {\n    bytes payload = 1;\n    string contentTopic = 2;\n    uint32 version = 3;\n    string comeFrom = 4;\n    string fromSign = 5;\n    string payloadType = 6;\n    string cipherSuite = 7;\n    bool needStore = 8;\n    uint64 timestamp = 9;\n    string messageId = 10;\n    string nodeId = 12;\n}\n")),(0,o.kt)("p",null,"use ",(0,o.kt)("inlineCode",{parentName:"p"},"Web3MQ JSSDK")," or build protobuf yourself"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Send message")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// pb/message build from protobuf file\nimport { Web3MQRequestMessage } from 'pb/message';\n\nconst getDataSignature = async (msg: string) => {\n  let Ed25519PrivateKey = 'your Ed25519PrivateKey hex string';\n  let signature = await ed25519.sign(\n    new TextEncoder().encode(msg),\n    Ed25519PrivateKey,\n  );\n};\n\n// message proto type\nconst PbTypeMessage = 0b00010000;\n\nlet wsconn;\nwsconn = GetWSConn();\n\n// Chat with someone `contentTopic` is userid\n// Chat in group `contentTopic` is groupid\n\nconst topic = 'group id';\n\nvar payload = new TextEncoder().encode('hello web3mq');\n\nconst signContent = msgid + userId + topic + nodeId + timestamp.toString();\nconst fromSign = await getDataSignature(signContent);\n\nlet msgReq: Web3MQRequestMessage = {\n  payload: payload,\n  contentTopic: topic,\n  version: 1,\n  comeFrom: userId,\n  fromSign: fromSign,\n  payloadType: 'text/plain; charset=utf-8',\n  cipherSuite: 'NONE',\n  needStore: needStore,\n  timestamp: BigInt(timestamp),\n  messageId: msgid,\n  nodeId: nodeId,\n};\n\nlet bytes = Web3MQRequestMessage.toBinary(msgReq);\n\nconst concatArray = GetContactBytes(PbTypeMessage, bytes);\n\nwsconn.send(concatArray);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Receive message")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// pb/message build from protobuf file\nimport { Web3MQRequestMessage } from 'pb/message';\n\n// message proto type\nconst PbTypeMessage = 0b00010000;\n\nlet wsconn;\nwsconn = GetWSConn();\n\nwsconn.onmessage = function (event) {\n  var respData = new Uint8Array(event.data);\n\n  const PbType = respData[1];\n  const bytes = respData.slice(2, respData.length);\n\n  if (PbType == PbTypeMessage) {\n    console.log('Receive message');\n  }\n};\n")))}u.isMDXComponent=!0}}]);