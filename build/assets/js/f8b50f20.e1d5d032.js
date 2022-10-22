"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[111],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>l});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),m=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(t),l=o,y=p["".concat(i,".").concat(l)]||p[l]||d[l]||a;return t?r.createElement(y,c(c({ref:n},u),{},{components:t})):r.createElement(y,c({ref:n},u))}));function l(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var m=2;m<a;m++)c[m]=t[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=t(7462),o=(t(7294),t(3905));const a={title:"5. Send Connect Command",order:6,group:{title:"Quickstart"}},c="Send Connect Command",s={unversionedId:"Web3MQ-API/quickstart/Send_Connect_Command",id:"Web3MQ-API/quickstart/Send_Connect_Command",title:"5. Send Connect Command",description:"use Web3MQ JSSDK or build protobuf yourself",source:"@site/docs/Web3MQ-API/quickstart/Send_Connect_Command.md",sourceDirName:"Web3MQ-API/quickstart",slug:"/Web3MQ-API/quickstart/Send_Connect_Command",permalink:"/docs/Web3MQ-API/quickstart/Send_Connect_Command",draft:!1,tags:[],version:"current",frontMatter:{title:"5. Send Connect Command",order:6,group:{title:"Quickstart"}},sidebar:"tutorialSidebar",previous:{title:"4. Create group",permalink:"/docs/Web3MQ-API/quickstart/Create_group"},next:{title:"6. Send a message",permalink:"/docs/Web3MQ-API/quickstart/Send_message_in_Group"}},i={},m=[],u={toc:m};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-connect-command"},"Send Connect Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'syntax = "proto3";\n\n// msgSign = Ed25519 signing(nodeId + userId + timestamp)\nmessage ConnectCommand {\n    string nodeId = 1;\n    string userId = 2;\n    uint64 timestamp = 3;\n    string msgSign = 4;\n}\n')),(0,o.kt)("p",null,"use ",(0,o.kt)("inlineCode",{parentName:"p"},"Web3MQ JSSDK")," or build protobuf yourself"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// pb/connect build from protobuf file\nimport { ConnectCommand } from 'pb/connect';\n\nconst WS_PROTOCOL = 'wss'; // ws or wss\n\nconst HostURL = 'us-west-2.web3mq.com'; // choose one domain\n\nconst GetWSConn = () => {\n  const wsurl = WS_PROTOCOL + '://' + HostURL + '/messages';\n  const wsconn = new WebSocket(wsurl);\n  wsconn.binaryType = 'arraybuffer'; // !important Web3MQ send message use protobuf\n  return wsconn;\n};\n\nconst GetContactBytes = (command: any, bytes: Uint8Array) => {\n  // client category type\n  const categoryType = 10;\n  const concatArray = new Uint8Array([categoryType, command, ...bytes]);\n\n  return concatArray;\n};\n\n\n// connect command type\nconst PbTypeConnectReqCommand = 0b00000010;\n\n// signature = ed25519 private key signing(nodeId + userId + timestamp)\nlet reqCmd: ConnectCommand = {\n  nodeId: nodeId,\n  userId: userId,\n  timestamp: ts,\n  msgSign: signature,\n};\n\nlet bytes = ConnectCommand.toBinary(reqCmd);\nwsconn.send(concatArray);\n")))}d.isMDXComponent=!0}}]);