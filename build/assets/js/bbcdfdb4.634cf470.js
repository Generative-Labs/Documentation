"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[7001],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},i="MessageList",p={unversionedId:"Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageList",id:"Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageList",title:"MessageList",description:"The MessageList component renders a scrollable list of messages. The UI for each individual message is rendered conditionally based on its message.type value. The list renders standard messages.",source:"@site/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageList.md",sourceDirName:"Web3MQ-UI-Components/Web3MQ-Vue/chatComponent",slug:"/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageList",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageList",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Channel List",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/ChannelList"},next:{title:"Message Input",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageInput"}},c={},m=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Message",id:"message",level:2},{value:"MessageSimple",id:"messagesimple",level:2},{value:"Api",id:"api",level:2},{value:"MessageList",id:"messagelist-1",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"messagelist"},"MessageList"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageList")," component renders a scrollable list of messages. The UI for each individual message is rendered conditionally based on its ",(0,r.kt)("inlineCode",{parentName:"p"},"message.type")," value. The list renders standard messages."),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageList")," component contains a separate state management library, it loads the most recent 20 messages held in the current library. More messages are fetched from the Chat API and loaded into the DOM on scrolling up the list. "),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageList")," could pass custom Message component as props, it will override the default ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},"<script setup lang='ts'>\nimport { ref, shallowRef } from 'vue';\nimport { Chat, ChannelList, Channel, MessageList, MessageInput } from '@web3mq/vue-components';\nimport { Web3MQ } from '@web3mq/client';\n\nconst PrivateKey = localStorage.getItem(\"PRIVATE_KEY\") || \"\";\nconst PublicKey = localStorage.getItem(\"PUBLICKEY\") || \"\";\nconst userid = localStorage.getItem(\"userid\") || \"\";\nconst hasKeys =\n  PrivateKey && PublicKey && userid\n    ? { PrivateKey, PublicKey, userid }\n    : null;\nconst keys = shallowRef<KeyPairsType | null>(hasKeys);\nconst fastestUrl = ref<string | null>(null);\nconst appType = ref<'pc' | 'h5'>(window.innerWidth <= 600 ? 'h5' : 'pc');\n\nconst init = async () => {\n  const tempPubkey = localStorage.getItem('PUBLIC_KEY') || '';\n  const didKey = localStorage.getItem('DID_KEY') || '';\n  const fastUrl = await Client.init({\n    connectUrl: localStorage.getItem('FAST_URL'),\n    app_key: 'vAUJTFXbBZRkEDRE',\n    env: 'dev',\n    didKey,\n    tempPubkey,\n  });\n  localStorage.setItem('FAST_URL', fastUrl);\n  fastestUrl.value = fastUrl;\n};\nconst handleLoginEvent = (eventData: any) => {\n  if (eventData.data) {\n    if (eventData.type === 'login') {\n      const {\n        privateKey,\n        publicKey,\n        tempPrivateKey,\n        tempPublicKey,\n        didKey,\n        userid,\n        address,\n        pubkeyExpiredTimestamp,\n      } = eventData.data;\n      localStorage.setItem('userid', userid);\n      localStorage.setItem('PRIVATE_KEY', tempPrivateKey);\n      localStorage.setItem('PUBLIC_KEY', tempPublicKey);\n      localStorage.setItem('WALLET_ADDRESS', address);\n      localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);\n      localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);\n      localStorage.setItem(`DID_KEY`, didKey);\n      localStorage.setItem('PUBKEY_EXPIRED_TIMESTAMP', String(pubkeyExpiredTimestamp));\n      keys.value = {\n        PrivateKey: tempPrivateKey,\n        PublicKey: tempPublicKey,\n        userid,\n      };\n    }\n    if (eventData.type === 'register') {\n      const { privateKey, publicKey, address } = eventData.data;\n      localStorage.setItem('WALLET_ADDRESS', address);\n      localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);\n      localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);\n    }\n  }\n};\n\nconst logout = () => {\n  localStorage.setItem('PRIVATE_KEY', '');\n  localStorage.setItem('PUBLIC_KEY', '');\n  localStorage.setItem('DID_KEY', '');\n  localStorage.setItem('userid', '');\n  keys.value = null;\n};\nonMounted(() => {\n  console.log('app mount')\n  init();\n  window.addEventListener('resize', () => {\n    appType.value = window.innerWidth <= 600 ? 'h5' : 'pc';\n  });\n});\n<\/script>\n<template>\n  <template v-if=\"!fastestUrl\"></template>\n  <template v-else-if=\"!keys\">\n    <LoginModal\n      @handleLoginEvent=\"handleLoginEvent\"\n      :appType=\"appType\"\n    />\n  </template>\n  <template v-else>\n    <Chat :client=\"Web3MQ.getInstance(keys)\" :appType=\"appType\" @logout=\"logout\">\n      <ChannelList />\n      <Channel :Input=\"CustomInput\" :Message=\"CustomMessage\">\n        <Window>\n          <MessageList />\n        </Window>\n      </Channel>\n    </Chat>\n  </template>\n</template>\n")),(0,r.kt)("h2",{id:"message"},"Message"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," component is the ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageList")," component's descendants. It provides child component with message data that comes in from ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageList")),(0,r.kt)("h2",{id:"messagesimple"},"MessageSimple"),(0,r.kt)("p",null,"As the ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," component's descendants, the ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageSimple")," component could inject message data, and show the message. If you want to display custom message body, you should pass your custom Message component as Channel props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},"<script setup>\nimport { useInjectMessage } from '@web3mq/vue-components';\nconst { message } = useInjectMessage();\n<\/script>\n\n")),(0,r.kt)("h2",{id:"api"},"Api"),(0,r.kt)("h3",{id:"messagelist-1"},"MessageList"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The properties of the MessageList are described as follows:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"set your custom ",(0,r.kt)("inlineCode",{parentName:"td"},"Message")," component"),(0,r.kt)("td",{parentName:"tr",align:null},"Component"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))))}d.isMDXComponent=!0}}]);