"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[1678],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5437:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={title:"Send Message",order:1,group:{title:"Message",order:6}},l="Send Message",p={unversionedId:"Web3MQ-API/message/send_message",id:"Web3MQ-API/message/send_message",title:"Send Message",description:"---",source:"@site/docs/Web3MQ-API/message/send_message.md",sourceDirName:"Web3MQ-API/message",slug:"/Web3MQ-API/message/send_message",permalink:"/docs/Web3MQ-API/message/send_message",tags:[],version:"current",frontMatter:{title:"Send Message",order:1,group:{title:"Message",order:6}},sidebar:"tutorialSidebar",previous:{title:"Message History",permalink:"/docs/Web3MQ-API/message/message_list"},next:{title:"Overview",permalink:"/docs/Web3MQ-API/notification/"}},m={},c=[{value:"Init websocket connect",id:"init-websocket-connect",level:2},{value:"Send connect command",id:"send-connect-command",level:2},{value:"Send message",id:"send-message-1",level:2},{value:"Javascript example",id:"javascript-example",level:3},{value:"Receive message response status",id:"receive-message-response-status",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"send-message"},"Send Message"),(0,s.kt)("hr",null),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Websocket")," Protobuf")),(0,s.kt)("h2",{id:"init-websocket-connect"},"Init websocket connect"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const WS_PROTOCOL = 'wss'; // ws or wss\n\nconst HostURL = 'us-west-2.web3mq.com'; // choose one domain\n\nconst GetWSConn = () => {\n  const wsurl = WS_PROTOCOL + '://' + HostURL + '/messages';\n  const wsconn = new WebSocket(wsurl);\n  wsconn.binaryType = 'arraybuffer'; // !important Web3MQ send message use protobuf\n  return wsconn;\n};\n\nconst GetContactBytes = (command: any, bytes: Uint8Array) => {\n  // client category type\n  const categoryType = 10;\n  const concatArray = new Uint8Array([categoryType, command, ...bytes]);\n\n  return concatArray;\n};\n\n")),(0,s.kt)("h2",{id:"send-connect-command"},"Send connect command"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Before send message connect to server first")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// pb/connect build from protobuf file\nimport { ConnectCommand } from 'pb/connect';\n\n// connect command type\nconst PbTypeConnectReqCommand = 0b00000010;\n\nlet wsconn;\nwsconn = GetWSConn();\n\nlet timestamp = Date.now();\n\n// signature = ed25519 private key signing(nodeId + userId + timestamp)\nlet reqCmd: ConnectCommand = {\n  nodeId: nodeId,\n  userId: userId,\n  timestamp: timestamp,\n  msgSign: signature,\n};\n\nlet bytes = ConnectCommand.toBinary(reqCmd);\n\nconst concatArray = GetContactBytes(PbTypeConnectReqCommand, bytes);\n\nwsconn.send(concatArray);\n")),(0,s.kt)("h2",{id:"send-message-1"},"Send message"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Message protobuf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"syntax = \"proto3\";\n\npackage pb;\n\nmessage Web3MQMessage {\n    bytes payload = 1;\n    string contentTopic = 2; // target user's wallet address or group's id\n    uint32 version = 3; // 0.1 for now\n    string comeFrom = 4;\n    string fromSign = 5;\n    string payloadType = 6;\n    string cipherSuite = 7;\n    bool needStore = 8;\n    uint64 timestamp = 9;\n    string messageId = 10;\n    string nodeId = 12;\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Message description")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"payload"),(0,s.kt)("td",{parentName:"tr",align:null},"bytes"),(0,s.kt)("td",{parentName:"tr",align:null},"message content")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"contentTopic"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"content topic")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"typeId"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"content type id")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"cipherSuite"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"cipher suite")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"comeFrom"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"message come from user's unique id")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"fromSign"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"message come from user's unique id signature")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"nodeId"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"nodeId")))),(0,s.kt)("h3",{id:"javascript-example"},"Javascript example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Common.js and ECMAScript Modules (ESM)\nimport * as ed25519 from '@noble/ed25519';\n\n// pb/message build from protobuf file\nimport { Web3MQRequestMessage } from 'pb/message';\n\n// The Keccak hash function is also available\nimport { sha3_224 } from 'js-sha3';\n\nconst GenerateMessageID = async (\n  from: string,\n  topic: string,\n  timestamp: number,\n  payload: Uint8Array,\n) => {\n  return sha3_224\n    .update(from)\n    .update(topic)\n    .update(timestamp.toString())\n    .update(payload)\n    .hex();\n};\n\nconst getDataSignature = async (msg: string) => {\n  let Ed25519PrivateKey = 'your Ed25519PrivateKey hex string';\n  let signature = await ed25519.sign(\n    new TextEncoder().encode(msg),\n    Ed25519PrivateKey,\n  );\n};\n\n// message proto type\nconst PbTypeMessage = 0b00010000;\n\nlet wsconn = GetWSConn();\n\nlet timestamp = Date.now();\n\nvar payload = new TextEncoder().encode('hello web3mq');\n\nconst msgid = await GenerateMessageID(userId, topic, timestamp, payload);\n\nconst signContent = msgid + userId + topic + nodeId + timestamp.toString();\nconst fromSign = await getDataSignature(signContent);\n\n// Chat with someone `contentTopic` is userid\n// Chat in group `contentTopic` is groupid\n\nconst topic = 'group id';\n\nlet msgReq: Web3MQRequestMessage = {\n  payload: payload,\n  contentTopic: topic,\n  version: 1,\n  comeFrom: userId,\n  nodeId: nodeId,\n  fromSign: fromSign,\n  payloadType: 'text/plain; charset=utf-8',\n  cipherSuite: 'NONE',\n  needStore: needStore,\n  timestamp: BigInt(timestamp),\n  messageId: msgid,\n};\n\nlet bytes = Web3MQRequestMessage.toBinary(msgReq);\n\nconst concatArray = GetContactBytes(PbTypeMessage, bytes);\n\nwsconn.send(concatArray);\n")),(0,s.kt)("h2",{id:"receive-message-response-status"},"Receive message response status"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Message Status Response protobuf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'syntax = "proto3";\n\npackage pb;\n\nmessage Web3MQMessageStatusResp {\n    string messageId = 1;\n    string contentTopic = 2;\n    string messageStatus = 3; // received delivered read\n    string version = 4;\n    string comeFrom = 5;\n    string fromSign = 6;\n    uint64 timestamp = 7;\n}\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Web3MQMessageStatusResp description")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"messageId"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"message id")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"contentTopic"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"content topic")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"messageStatus"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"messageStatus")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"version"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"version")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"comeFrom"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"message come from user's unique id")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"fromSign"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"message come from user's unique id signature")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,s.kt)("td",{parentName:"tr",align:null},"uint64"),(0,s.kt)("td",{parentName:"tr",align:null},"timestamp")))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"messageStatus")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"userNotFound"),(0,s.kt)("li",{parentName:"ul"},"invalidSignature"),(0,s.kt)("li",{parentName:"ul"},"received (Node received message)"),(0,s.kt)("li",{parentName:"ul"},"read     (Message already read)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// pb/message build from protobuf file\nimport { Web3MQRequestMessage } from 'pb/message';\n\n\nconst WS_PROTOCOL = 'wss'; // ws or wss\n\nconst HostURL = 'us-west-2.web3mq.com'; // choose one domain\n\nconst GetWSConn = () => {\n  const wsurl = WS_PROTOCOL + '://' + HostURL + '/messages';\n  const wsconn = new WebSocket(wsurl);\n  wsconn.binaryType = 'arraybuffer'; // !important Web3MQ send message use protobuf\n  return wsconn;\n};\n\n// message response status\nconst PbTypeMessageStatusResp = 0b00010101\n\nlet wsconn;\nwsconn = GetWSConn();\n\nwsconn.onmessage = function (event) {\n  var respData = new Uint8Array(event.data);\n\n  const PbType = respData[1];\n  const bytes = respData.slice(2, respData.length);\n\n  if (PbType == PbTypeMessageStatusResp) {\n     let statusResp = Web3MQMessageStatusResp.fromBinary(bytes);\n     console.log(statusResp.messageStatus == \"invalidSignature\");\n  }\n}\n")))}d.isMDXComponent=!0}}]);