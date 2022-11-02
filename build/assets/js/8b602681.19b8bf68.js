"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[4178],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5452:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={position:8},o="Notify",l={unversionedId:"Web3MQ-SDK/JS-SDK/notify/notify",id:"Web3MQ-SDK/JS-SDK/notify/notify",title:"Notify",description:"Properties",source:"@site/docs/Web3MQ-SDK/JS-SDK/notify/notify.md",sourceDirName:"Web3MQ-SDK/JS-SDK/notify",slug:"/Web3MQ-SDK/JS-SDK/notify/",permalink:"/docs/Web3MQ-SDK/JS-SDK/notify/",draft:!1,tags:[],version:"current",frontMatter:{position:8},sidebar:"tutorialSidebar",previous:{title:"User",permalink:"/docs/Web3MQ-SDK/JS-SDK/user/"},next:{title:"Pub/Sub",permalink:"/docs/Web3MQ-SDK/JS-SDK/PubSub/"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"init Client",id:"init-client",level:2},{value:"ChangeNotificationStatus",id:"changenotificationstatus",level:2},{value:"Get NotificationList",id:"get-notificationlist",level:2}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notify"},"Notify"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"notificationList"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#notifyresponse"},"NotifyResponse")," ","[ ]"," ","|"," null"),(0,i.kt)("td",{parentName:"tr",align:null},"notification list")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameters Description"),(0,i.kt)("th",{parentName:"tr",align:null},"response"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"changeNotificationStatus"),(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"messages: string[], status:",(0,i.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#messagestatus"},"MessageStatus")),(0,i.kt)("td",{parentName:"tr",align:null},'{ "code": 0, "msg": "ok"}')))),(0,i.kt)("h2",{id:"init-client"},"init Client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from 'web3-mq';\n// 1. You must initialize the SDK, the init function is asynchronous\nawait Client.init({\n  connectUrl: 'example url', // The fastURL you saved to local\n  app_key: 'app_key', // Appkey applied from our team\n});\n// 2. sign MetaMask get keys\nconst { PrivateKey, PublicKey, userid } = await Client.register.signMetaMask({\n  signContentURI: 'https://www.web3mq.com', // your signContent URI\n  EthAddress: 'your eth address', // *Not required*  your eth address, if not use your MetaMask eth address\n});\nconst keys = { PrivateKey, PublicKey, userid };\n// 3. You must ensure that the Client.init initialization is complete and that you have a key pair\nconst client = Client.getInstance(keys);\n\nconsole.log(client);\n\nexport const Child = () => {\n  return (\n    <div>\n      <Child client={client} />\n    </div>\n  );\n};\n")),(0,i.kt)("h2",{id:"changenotificationstatus"},"ChangeNotificationStatus"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from 'web3-mq';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <div>\n      <button\n        onClick={() => {\n          client.message.changeMessageStatus(['msgId'], 'delivered');\n        }}>\n        Change Notification Status\n      </button>\n    </div>\n  );\n};\n")),(0,i.kt)("h2",{id:"get-notificationlist"},"Get NotificationList"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from 'web3-mq';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'notification.getList') {\n      console.log(client.notify.notificationList);\n    }\n  };\n\n  useEffect(() => {\n    client.on('notification.getList', handleEvent);\n    return () => {\n      client.off('notification.getList');\n    };\n  }, []);\n\n  return <div>Notify Test</div>;\n};\n")))}u.isMDXComponent=!0}}]);