"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[1687],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8826:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},s="Channel List",p={unversionedId:"Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/ChannelList",id:"Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/ChannelList",title:"Channel List",description:"The ChannelList component queries an array of channel objects from the Chat API, it subscribes internally to the channel.type event and updates the channel list data based on it.",source:"@site/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/ChannelList.md",sourceDirName:"Web3MQ-UI-Components/Web3MQ-Vue/chatComponent",slug:"/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/ChannelList",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/ChannelList",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Channel",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/Channel"},next:{title:"MessageList",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageList"}},c={},m=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Api",id:"api",level:2},{value:"ChannelList",id:"channellist",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"channel-list"},"Channel List"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelList")," component queries an array of channel objects from the Chat API, it subscribes internally to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/eventCenter/#eventList"},"channel.type")," event and updates the channel list data based on it."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelList")," component loads and updates channels as the same as the ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageList")," component."),(0,l.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("p",null,"The",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelList")," UI is determined by two of its props, List and Preview,if no props are injected, the default rendering ChannelListMessenger and Channel item Style."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"changeListRef")," is used as a required props of the custom List component to bind the current custom ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," component to the root node, This is necessary for the ",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelList")," to implement paging."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n\x3c!--custom List props --\x3e\n  <div v-if="props.error">loading error...</div>\n  <div v-else-if="props.error">loading...</div>\n  <template v-else>\n    <div :ref="(el) => emit(\'changeListRef\', el)">\n      <slot></slot>\n    </div>\n  </template>\n</template>\n<script>\nconst props = withDefaults(defineProps<{\n  error?: boolean;\n  loading?: boolean;\n}>(), {});\nconst emit = defineEmits({\n  \'changeListRef\': (el: any) => true\n});\n<\/script>\n')),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"List")," renders loading failure, loading, and loading success views by ",(0,l.kt)("inlineCode",{parentName:"li"},"error")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"loading")," properties."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"DefaultEmptyStateIndicator")," is used to show the empty state view."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Paginator")," is a ",(0,l.kt)("inlineCode",{parentName:"li"},"channelList")," subcomponent for pagination, ",(0,l.kt)("inlineCode",{parentName:"li"},"Paginator")," component accepts elment, loadNextPage, and showLoading properties from ",(0,l.kt)("inlineCode",{parentName:"li"},"ChannelList")," component;"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Preview")," is used to render style and click functionality of channel in the list."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},"<script setup lang='ts'>\nimport { ref, shallowRef } from 'vue';\nimport { Chat, ChannelList, Channel, MessageList, MessageInput } from '@web3mq/vue-components';\nimport { Web3MQ } from '@web3mq/client';\n\nconst PrivateKey = localStorage.getItem(\"PRIVATE_KEY\") || \"\";\nconst PublicKey = localStorage.getItem(\"PUBLICKEY\") || \"\";\nconst userid = localStorage.getItem(\"userid\") || \"\";\nconst hasKeys =\n  PrivateKey && PublicKey && userid\n    ? { PrivateKey, PublicKey, userid }\n    : null;\nconst keys = shallowRef<KeyPairsType | null>(hasKeys);\nconst fastestUrl = ref<string | null>(null);\nconst appType = ref<'pc' | 'h5'>(window.innerWidth <= 600 ? 'h5' : 'pc');\n\nconst init = async () => {\n  const tempPubkey = localStorage.getItem('PUBLIC_KEY') || '';\n  const didKey = localStorage.getItem('DID_KEY') || '';\n  const fastUrl = await Client.init({\n    connectUrl: localStorage.getItem('FAST_URL'),\n    app_key: 'vAUJTFXbBZRkEDRE',\n    env: 'dev',\n    didKey,\n    tempPubkey,\n  });\n  localStorage.setItem('FAST_URL', fastUrl);\n  fastestUrl.value = fastUrl;\n};\nconst handleLoginEvent = (eventData: any) => {\n  if (eventData.data) {\n    if (eventData.type === 'login') {\n      const {\n        privateKey,\n        publicKey,\n        tempPrivateKey,\n        tempPublicKey,\n        didKey,\n        userid,\n        address,\n        pubkeyExpiredTimestamp,\n      } = eventData.data;\n      localStorage.setItem('userid', userid);\n      localStorage.setItem('PRIVATE_KEY', tempPrivateKey);\n      localStorage.setItem('PUBLIC_KEY', tempPublicKey);\n      localStorage.setItem('WALLET_ADDRESS', address);\n      localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);\n      localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);\n      localStorage.setItem(`DID_KEY`, didKey);\n      localStorage.setItem('PUBKEY_EXPIRED_TIMESTAMP', String(pubkeyExpiredTimestamp));\n      keys.value = {\n        PrivateKey: tempPrivateKey,\n        PublicKey: tempPublicKey,\n        userid,\n      };\n    }\n    if (eventData.type === 'register') {\n      const { privateKey, publicKey, address } = eventData.data;\n      localStorage.setItem('WALLET_ADDRESS', address);\n      localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);\n      localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);\n    }\n  }\n};\n\nconst logout = () => {\n  localStorage.setItem('PRIVATE_KEY', '');\n  localStorage.setItem('PUBLIC_KEY', '');\n  localStorage.setItem('DID_KEY', '');\n  localStorage.setItem('userid', '');\n  keys.value = null;\n};\nonMounted(() => {\n  console.log('app mount')\n  init();\n  window.addEventListener('resize', () => {\n    appType.value = window.innerWidth <= 600 ? 'h5' : 'pc';\n  });\n});\n<\/script>\n<template>\n  <template v-if=\"!fastestUrl\"></template>\n  <template v-else-if=\"!keys\">\n    <LoginModal\n      @handleLoginEvent=\"handleLoginEvent\"\n      :appType=\"appType\"\n    />\n  </template>\n  <template v-else>\n    <Chat :client=\"Web3MQ.getInstance(keys)\" :appType=\"appType\" @logout=\"logout\">\n      <ChannelList :List=\"CustomList\" :Preview=\"CustomPreview\"  />\n    </Chat>\n  </template>\n</template>\n")),(0,l.kt)("h2",{id:"api"},"Api"),(0,l.kt)("h3",{id:"channellist"},"ChannelList"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The properties of the ChannelList are described as follows:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"as ",(0,l.kt)("inlineCode",{parentName:"td"},"ChannelList"),"\u2018s root component, used to display a component that the list load and failed to load"),(0,l.kt)("td",{parentName:"tr",align:null},"Component"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Preview"),(0,l.kt)("td",{parentName:"tr",align:null},"set your custom ",(0,l.kt)("inlineCode",{parentName:"td"},"ChannelItem")," component"),(0,l.kt)("td",{parentName:"tr",align:null},"Component"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DefaultEmptyStateIndicator"),(0,l.kt)("td",{parentName:"tr",align:null},"displays an empty list of components"),(0,l.kt)("td",{parentName:"tr",align:null},"Component"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Paginator"),(0,l.kt)("td",{parentName:"tr",align:null},"set your custom ",(0,l.kt)("inlineCode",{parentName:"td"},"paging")," component"),(0,l.kt)("td",{parentName:"tr",align:null},"Component"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))))}d.isMDXComponent=!0}}]);