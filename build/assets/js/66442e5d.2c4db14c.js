"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[7611],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9245:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:0},p="Chat",s={unversionedId:"Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/chat",id:"Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/chat",title:"Chat",description:"Basic Usage",source:"@site/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/chat.md",sourceDirName:"Web3MQ-UI-Components/Web3MQ-Vue/chatComponent",slug:"/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/chat",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/chat",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-Vue/Intro"},next:{title:"Channel",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/Channel"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Provide/Inject",id:"provideinject",level:2},{value:"Api",id:"api",level:2},{value:"Chat",id:"chat-1",level:3},{value:"useInjectChat data",id:"useinjectchat-data",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"chat"},"Chat"),(0,l.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Chat")," component does not inject any UI, so its implementation is fairly simple. Once an instance of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Chat")," client has been created, you pass the client object as a prop, and ",(0,l.kt)("inlineCode",{parentName:"p"},"chat")," component provides it to a component's descendants by the ",(0,l.kt)("inlineCode",{parentName:"p"},"ChatProvide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},"<script setup lang='ts'>\nimport { ref, shallowRef } from 'vue';\nimport { Chat, Channel, DashBoard, MessageList, MessageInput } from '@web3mq/vue-components';\nimport { Web3MQ } from '@web3mq/client';\n\nconst PrivateKey = localStorage.getItem(\"PRIVATE_KEY\") || \"\";\nconst PublicKey = localStorage.getItem(\"PUBLICKEY\") || \"\";\nconst userid = localStorage.getItem(\"userid\") || \"\";\nconst hasKeys =\n  PrivateKey && PublicKey && userid\n    ? { PrivateKey, PublicKey, userid }\n    : null;\nconst keys = shallowRef<KeyPairsType | null>(hasKeys);\nconst fastestUrl = ref<string | null>(null);\nconst appType = ref<'pc' | 'h5'>(window.innerWidth <= 600 ? 'h5' : 'pc');\n\nconst init = async () => {\n  const tempPubkey = localStorage.getItem('PUBLIC_KEY') || '';\n  const didKey = localStorage.getItem('DID_KEY') || '';\n  const fastUrl = await Client.init({\n    connectUrl: localStorage.getItem('FAST_URL'),\n    app_key: 'vAUJTFXbBZRkEDRE',\n    env: 'dev',\n    didKey,\n    tempPubkey,\n  });\n  localStorage.setItem('FAST_URL', fastUrl);\n  fastestUrl.value = fastUrl;\n};\nconst handleLoginEvent = (eventData: any) => {\n  if (eventData.data) {\n    if (eventData.type === 'login') {\n      const {\n        privateKey,\n        publicKey,\n        tempPrivateKey,\n        tempPublicKey,\n        didKey,\n        userid,\n        address,\n        pubkeyExpiredTimestamp,\n      } = eventData.data;\n      localStorage.setItem('userid', userid);\n      localStorage.setItem('PRIVATE_KEY', tempPrivateKey);\n      localStorage.setItem('PUBLIC_KEY', tempPublicKey);\n      localStorage.setItem('WALLET_ADDRESS', address);\n      localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);\n      localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);\n      localStorage.setItem(`DID_KEY`, didKey);\n      localStorage.setItem('PUBKEY_EXPIRED_TIMESTAMP', String(pubkeyExpiredTimestamp));\n      keys.value = {\n        PrivateKey: tempPrivateKey,\n        PublicKey: tempPublicKey,\n        userid,\n      };\n    }\n    if (eventData.type === 'register') {\n      const { privateKey, publicKey, address } = eventData.data;\n      localStorage.setItem('WALLET_ADDRESS', address);\n      localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);\n      localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);\n    }\n  }\n};\n\nconst logout = () => {\n  localStorage.setItem('PRIVATE_KEY', '');\n  localStorage.setItem('PUBLIC_KEY', '');\n  localStorage.setItem('DID_KEY', '');\n  localStorage.setItem('userid', '');\n  keys.value = null;\n};\nonMounted(() => {\n  console.log('app mount')\n  init();\n  window.addEventListener('resize', () => {\n    appType.value = window.innerWidth <= 600 ? 'h5' : 'pc';\n  });\n});\n<\/script>\n<template>\n  <template v-if=\"!fastestUrl\"></template>\n  <template v-else-if=\"!keys\">\n    <LoginModal\n      @handleLoginEvent=\"handleLoginEvent\"\n      :appType=\"appType\"\n    />\n  </template>\n  <template v-else>\n    <Chat :client=\"Web3MQ.getInstance(keys)\" :appType=\"appType\" @logout=\"logout\">\n      <DashBoard />\n      <Channel>\n        <Window>\n          <MessageHeader :avatarSize=40 />\n          <MessageList />\n          <MessageInput />\n        </Window>\n      </Channel>\n    </Chat>\n  </template>\n</template>\n")),(0,l.kt)("h2",{id:"provideinject"},"Provide/Inject"),(0,l.kt)("p",null,"Any child of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Chat")," component has access to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ChatProvide"),". Each Vue Provide in the component library can be accessed with one of our custom hooks, which must be imported individually."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},"<script setup>\n  import { useInjectChat } from '@web3mq/vue-components'\n  const { \n    client,\n    appType,\n    userInfo,\n    showListTypeView,\n    setShowListTypeView,\n    logout\n  } = useInjectChat();\n<\/script>\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"client")," Object is not a reactive State, cannot be used for view rendering."))),(0,l.kt)("h2",{id:"api"},"Api"),(0,l.kt)("h3",{id:"chat-1"},"Chat"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The properties of the Chat are described as follows:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appType"),(0,l.kt)("td",{parentName:"tr",align:null},"set viewport type of @web3mq/vue-components"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pc")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"h5")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pc")),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"classNmae"),(0,l.kt)("td",{parentName:"tr",align:null},"set your custom className"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client"),(0,l.kt)("td",{parentName:"tr",align:null},"Chat Client Object"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client/"},"Client")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"containerId"),(0,l.kt)("td",{parentName:"tr",align:null},"Set a unique id selector for the container wrapping ",(0,l.kt)("inlineCode",{parentName:"td"},"chat")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"style"),(0,l.kt)("td",{parentName:"tr",align:null},"set your custom style"),(0,l.kt)("td",{parentName:"tr",align:null},"CSSProperties"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logout"),(0,l.kt)("td",{parentName:"tr",align:null},"Set your exit method"),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h3",{id:"useinjectchat-data"},"useInjectChat data"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showListTypeView"),(0,l.kt)("td",{parentName:"tr",align:null},"Tabs type in ",(0,l.kt)("inlineCode",{parentName:"td"},"DashBoard")," component"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'room'"),(0,l.kt)("td",{parentName:"tr",align:null},"--------")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"user Info"),(0,l.kt)("td",{parentName:"tr",align:null},"Ref<",(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse"},"SearchUsersResponse"),">"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"--------")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setShowListTypeView"),(0,l.kt)("td",{parentName:"tr",align:null},"Update showListTypeView"),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"--------")))))}d.isMDXComponent=!0}}]);