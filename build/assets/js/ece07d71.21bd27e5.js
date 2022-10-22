"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[702],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,l(l({ref:e},p),{},{components:n})):a.createElement(g,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9993:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={position:6},l="Contact",o={unversionedId:"Web3MQ-SDK/JS-SDK/contact/contact",id:"Web3MQ-SDK/JS-SDK/contact/contact",title:"Contact",description:"Properties",source:"@site/docs/Web3MQ-SDK/JS-SDK/contact/contact.md",sourceDirName:"Web3MQ-SDK/JS-SDK/contact",slug:"/Web3MQ-SDK/JS-SDK/contact/",permalink:"/docs/Web3MQ-SDK/JS-SDK/contact/",draft:!1,tags:[],version:"current",frontMatter:{position:6},sidebar:"tutorialSidebar",previous:{title:"Message",permalink:"/docs/Web3MQ-SDK/JS-SDK/message/"},next:{title:"User",permalink:"/docs/Web3MQ-SDK/JS-SDK/user/"}},c={},s=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"init Client",id:"init-client",level:2},{value:"getContactList &amp; getMyFriendRequestList &amp; getReceiveFriendRequestList",id:"getcontactlist--getmyfriendrequestlist--getreceivefriendrequestlist",level:2},{value:"SearchContact",id:"searchcontact",level:2},{value:"SendFriend",id:"sendfriend",level:2},{value:"OperationFriend",id:"operationfriend",level:2}],p={toc:s};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contact"},"Contact"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contactList"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType")," ","[ ]"," ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"contact list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"myFriendRequestList"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType"),"[ ]"," ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"i send friend requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"receiveFriendRequestList"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType"),"[ ]"," ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"receive friend requests list")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters Description"),(0,r.kt)("th",{parentName:"tr",align:null},"response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"searchContact"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"(walletAddress: string)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType")," ","[ ]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendFriend"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"(target_userid: string)"),(0,r.kt)("td",{parentName:"tr",align:null},"{code: 0, msg: 'ok'}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operationFriend"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"(target_userid: string, action?: ",(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#actiontype"},"ActionType"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"{code: 0, msg: 'ok'}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getContactList"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#pageparams"},"PageParams")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getMyFriendRequestList"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#pageparams"},"PageParams")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getReceiveFriendRequestList"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#pageparams"},"PageParams")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType"))))),(0,r.kt)("h2",{id:"init-client"},"init Client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from 'web3-mq';\n// 1. You must initialize the SDK, the init function is asynchronous\nawait Client.init({\n  connectUrl: 'example url', // The fastURL you saved to local\n  app_key: 'app_key', // Appkey applied from our team\n});\n// 2. sign MetaMask get keys\nconst { PrivateKey, PublicKey, userid } = await Client.register.signMetaMask({\n  signContentURI: 'https://www.web3mq.com', // your signContent URI\n  EthAddress: 'your eth address', // *Not required*  your eth address, if not use your MetaMask eth address\n});\nconst keys = { PrivateKey, PublicKey, userid };\n// 3. You must ensure that the Client.init initialization is complete and that you have a key pair\nconst client = Client.getInstance(keys);\n\nconsole.log(client);\n\nexport const Child = () => {\n  return (\n    <div>\n      <Child client={client} />\n    </div>\n  );\n};\n")),(0,r.kt)("h2",{id:"getcontactlist--getmyfriendrequestlist--getreceivefriendrequestlist"},"getContactList & getMyFriendRequestList & getReceiveFriendRequestList"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from 'web3-mq';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'contact.getList') {\n      console.log(client.contact.contactList);\n    }\n    if (event.type === 'contact.friendList') {\n      console.log(client.contact.myFriendRequestList);\n    }\n    if (event.type === 'contact.reviceList') {\n      console.log(client.contact.receiveFriendRequestList);\n    }\n  };\n\n  useEffect(() => {\n    client.on('contact.getList', handleEvent);\n    client.on('contact.friendList', handleEvent);\n    client.on('contact.reviceList', handleEvent);\n    return () => {\n      client.off('contact.getList');\n      client.off('contact.friendList');\n      client.off('contact.reviceList');\n    };\n  }, []);\n\n  useEffect(() => {\n    client.contact.getContactList({ page: 1, size: 100 });\n    client.contact.getMyFriendRequestList({ page: 1, size: 100 });\n    client.contact.getReceiveFriendRequestList({ page: 1, size: 100 });\n  }, []);\n};\n")),(0,r.kt)("h2",{id:"searchcontact"},"SearchContact"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from 'web3-mq';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <button\n      onClick={async () => {\n        const data = await client.contact.searchContact('walletAddress');\n        console.log(data);\n      }}>\n      search contact\n    </button>\n  );\n};\n")),(0,r.kt)("h2",{id:"sendfriend"},"SendFriend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from 'web3-mq';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n  return (\n    <button\n      onClick={async () => {\n        const data = await client.contact.sendFriend('target_userid');\n        console.log(data);\n      }}>\n      send friend\n    </button>\n  );\n};\n")),(0,r.kt)("h2",{id:"operationfriend"},"OperationFriend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from 'web3-mq';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <button\n      onClick={async () => {\n        const data = await client.contact.operationFriend(\n          'target_userid',\n          'agree'\n        );\n        console.log(data);\n      }}>\n      send friend\n    </button>\n  );\n};\n")))}d.isMDXComponent=!0}}]);