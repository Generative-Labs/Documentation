"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[7873],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={position:3},p="Client",c={unversionedId:"Web3MQ-SDK/JS-SDK/client/client",id:"Web3MQ-SDK/JS-SDK/client/client",title:"Client",description:"Events",source:"@site/docs/Web3MQ-SDK/JS-SDK/client/client.md",sourceDirName:"Web3MQ-SDK/JS-SDK/client",slug:"/Web3MQ-SDK/JS-SDK/client/",permalink:"/docs/Web3MQ-SDK/JS-SDK/client/",tags:[],version:"current",frontMatter:{position:3},sidebar:"tutorialSidebar",previous:{title:"QuickStart",permalink:"/docs/Web3MQ-SDK/JS-SDK/quickStart/"},next:{title:"DappConnect",permalink:"/docs/Web3MQ-SDK/JS-SDK/dappConnect/"}},s={},d=[{value:"Events",id:"events",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Methods",id:"methods-1",level:2},{value:"init()",id:"init",level:3},{value:"getInstance()",id:"getinstance",level:3},{value:"getSignClient",id:"getsignclient",level:3},{value:"initDappConnectClient",id:"initdappconnectclient",level:3},{value:"Events",id:"events-1",level:2},{value:"on()",id:"on",level:3},{value:"off()",id:"off",level:3},{value:"once()",id:"once",level:3},{value:"emit()",id:"emit",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"client"},"Client"),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client/#on"},"on")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Mount an event listener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client/#off"},"off")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Cancel an event listener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client/#once"},"once")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger an event once")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client/#emit"},"emit")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger an event")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keys"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype"},"KeyPairsType")),(0,r.kt)("td",{parentName:"tr",align:null},"your PrivateKey and PublicKey")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listeners"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"Event Center")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/channel"},"channel")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel Class"),(0,r.kt)("td",{parentName:"tr",align:null},"The channel correlation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/message"},"message")),(0,r.kt)("td",{parentName:"tr",align:null},"Message Class"),(0,r.kt)("td",{parentName:"tr",align:null},"The messages correlation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/user"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},"User Class"),(0,r.kt)("td",{parentName:"tr",align:null},"The user correlation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/contact"},"contact")),(0,r.kt)("td",{parentName:"tr",align:null},"Contact Class"),(0,r.kt)("td",{parentName:"tr",align:null},"The contact correlation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/notify"},"notify")),(0,r.kt)("td",{parentName:"tr",align:null},"Notify Class"),(0,r.kt)("td",{parentName:"tr",align:null},"The notify correlation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/pubsub"},"topic")),(0,r.kt)("td",{parentName:"tr",align:null},"Topic Class"),(0,r.kt)("td",{parentName:"tr",align:null},"The topic correlation")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters Description"),(0,r.kt)("th",{parentName:"tr",align:null},"response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client/#init"},"init")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#initoptions"},"InitOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Promise: ",(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/standards/#web3mq-api-endpoints"},"Web3MQAPiEndpoints"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client/#getinstance"},"getInstance")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype"},"KeyPairsType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client"},"Client"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client/#getsignclient"},"getSignClient")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#sendtempconnectoptions"},"SendTempConnectOptions"),", callbackFn)"),(0,r.kt)("td",{parentName:"tr",align:null},"void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client/#getQrCodeClient"},"initDappConnectClient")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#sendtempconnectoptions"},"SendTempConnectOptions"),", callbackFn)"),(0,r.kt)("td",{parentName:"tr",align:null},"void")))),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"init"},"init()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Connect the best Web3MQ's network node.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Client } from "@web3mq/client";\n// 1. You must initialize the SDK, the init function is asynchronous\n\nconst tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";\n// 1. tempPubkey\n// We will give you the exclusive tempPubkey when you log in successfully;\n// Usually this key is kept by you eg: save in localStorage\nconst didKey = localStorage.getItem("DID_KEY") || "";\n//  2. didKey\n//  A concatenated string of the account and account type to be logged into\n// eg: eth:0x0000000000000\n\nawait Client.init({\n  connectUrl: "example url", // The fastURL you saved to local\n  app_key: "app_key", // Appkey applied from our team\n  env: "test", // The default is the test environment\n  tempPubkey, // After login get temp public key\n  didKey, // did_key:did_value  eg: eth:0x00000000123123;\n});\n')),(0,r.kt)("h3",{id:"getinstance"},"getInstance()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Create and get the Client Instance.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Client } from "@web3mq/client";\n// 1. You must initialize the SDK, the init function is asynchronous\nawait Client.init({\n  connectUrl: "example url", // The fastURL you saved to local\n  app_key: "app_key", // Appkey applied from our team\n});\n// 2.Login and get keys\nconst { address } = await Client.auth.getAccount(didType);\nconst { userid, userExist } = await Client.auth.getUserInfo({\n  did_value: address,\n  did_type: didType,\n});\n\nlet localMainPrivateKey = "";\nlet localMainPublicKey = "";\n\nif (!userExist) {\n  const registerRes = await Client.auth.auth({\n    password,\n    did_value: address,\n    userid,\n    did_type: didType,\n    avatar_url: `https://cdn.stamp.fyi/avatar/${address}?s=300`,\n  });\n  localMainPrivateKey = registerRes.mainPrivateKey;\n  localMainPublicKey = registerRes.mainPublicKey;\n}\n\nconst {\n  TempPrivateKey,\n  TempPublicKey,\n  pubkeyExpiredTimestamp,\n  mainPrivateKey,\n  mainPublicKey,\n} = await Client.auth.login({\n  password,\n  userid,\n  did_value: address,\n  did_type: didType,\n  mainPublicKey: localMainPublicKey,\n  mainPrivateKey: localMainPrivateKey,\n});\n// 3. You must ensure that the Client.init initialization is complete and that you have a key pair\nconst client = Client.getInstance({\n  PrivateKey: TempPrivateKey,\n  PublicKey: TempPublicKey,\n  userid: userid,\n});\n\nconsole.log(client);\n')),(0,r.kt)("h3",{id:"getsignclient"},"getSignClient"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Get sign client.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Client, SignClientCallBackType } from "@web3mq/client";\n// 1. You must initialize the SDK, the init function is asynchronous\nawait Client.init({\n  connectUrl: "example url", // The fastURL you saved to local\n  app_key: "app_key", // Appkey applied from our team\n});\n// 2. Create the handleEvent function to receive events\nconst handleEvent = (options: SignClientCallBackType) => {\n  console.log(options);\n};\n// 3. get Sign Client, Make sure that init is complete\nawait Client.getSignClient(\n  {\n    dAppID: dapp_id,\n    topicID: topic_id,\n    signatureTimestamp: signature_timestamp,\n    dAppSignature: dapp_signature,\n  },\n  handleEvent\n);\n')),(0,r.kt)("h3",{id:"initdappconnectclient"},"initDappConnectClient"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Create the client that connects to the DApp.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Client } from "@web3mq/client";\n// 1. You must initialize the SDK, the init function is asynchronous\nawait Client.init({\n  connectUrl: "example url", // The fastURL you saved to local\n  app_key: "app_key", // Appkey applied from our team\n});\n// 2. Create the handleEvent function to receive events\nconst handleEvent = (options: SignClientCallBackType) => {\n  console.log(options);\n};\n// 3. get DappConnect Client\nClient.initDappConnectClient({ dAppID: "SwapChat:im" }, handleEvent);\n\n// 4. Here you can use the client to interact with the wallet\nClient.dappConnectClient.getConnectLink();\n')),(0,r.kt)("h2",{id:"events-1"},"Events"),(0,r.kt)("h3",{id:"on"},"on()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"* on: (eventName: EventTypes, callback: any) => void;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"client.on('channel.activeChange', (event) {\n  console.log(event)\n})\n")),(0,r.kt)("h3",{id:"off"},"off()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"* off: (eventName: EventTypes, callback?: any) => void;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"client.off('channel.activeChange', (event) {\n  console.log(event)\n})\n")),(0,r.kt)("h3",{id:"once"},"once()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"* once: (eventName: EventTypes, callback?: any) => void;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"client.once('channel.activeChange', (event) {\n  console.log(event)\n})\n")),(0,r.kt)("h3",{id:"emit"},"emit()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"* emit: (eventName: EventTypes, ...args: any[]) => void;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'client.emit("channel.activeChange", {\n  data: "",\n});\n')))}m.isMDXComponent=!0}}]);