"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[5040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={position:4},i="Channel",o={unversionedId:"Web3MQ-SDK/JS-SDK/channel/channel",id:"Web3MQ-SDK/JS-SDK/channel/channel",title:"Channel",description:"Properties",source:"@site/docs/Web3MQ-SDK/JS-SDK/channel/channel.md",sourceDirName:"Web3MQ-SDK/JS-SDK/channel",slug:"/Web3MQ-SDK/JS-SDK/channel/",permalink:"/docs/Web3MQ-SDK/JS-SDK/channel/",draft:!1,tags:[],version:"current",frontMatter:{position:4},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/docs/Web3MQ-SDK/JS-SDK/client/"},next:{title:"Message",permalink:"/docs/Web3MQ-SDK/JS-SDK/message/"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"init Client",id:"init-client",level:2},{value:"CreateRoom &amp; QueryChannels &amp; SetActiveChannel",id:"createroom--querychannels--setactivechannel",level:2},{value:"getGroupMemberList",id:"getgroupmemberlist",level:2},{value:"InviteGroupMember",id:"invitegroupmember",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"channel"},"Channel"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelList"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype"},"activechannelType")," ","[ ]"," ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"channel list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"activeChannel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype"},"activechannelType")," ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"current active channel")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters Description"),(0,r.kt)("th",{parentName:"tr",align:null},"response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createRoom"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryChannels"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#pageparams"},"PageParams")),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setActiveChannel"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype"},"activechannelType")),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getGroupMemberList"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#pageparams"},"PageParams")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType"),"[ ]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inviteGroupMember"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"(members: string[])"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType"),"[ ]")))),(0,r.kt)("h2",{id:"init-client"},"init Client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from 'web3-mq';\n// 1. You must initialize the SDK, the init function is asynchronous\nawait Client.init({\n  connectUrl: 'example url', // The fastURL you saved to local\n  app_key: 'app_key', // Appkey applied from our team\n});\n// 2. sign MetaMask get keys\nconst { PrivateKey, PublicKey, userid } = await Client.register.signMetaMask({\n  signContentURI: 'https://www.web3mq.com', // your signContent URI\n  EthAddress: 'your eth address', // *Not required*  your eth address, if not use your MetaMask eth address\n});\nconst keys = { PrivateKey, PublicKey, userid };\n// 3. You must ensure that the Client.init initialization is complete and that you have a key pair\nconst client = Client.getInstance(keys);\n\nconsole.log(client);\n\nexport const App = () => {\n  return (\n    <div>\n      <Child client={client} />\n    </div>\n  );\n};\n")),(0,r.kt)("h2",{id:"createroom--querychannels--setactivechannel"},"CreateRoom & QueryChannels & SetActiveChannel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from 'web3-mq';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'channel.getList') {\n      // Get the latest channelList\n      console.log(client.channel.channelList);\n    }\n  };\n\n  useEffect(() => {\n    client.on('channel.getList', handleEvent);\n    return () => {\n      client.off('channel.getList');\n    };\n  }, []);\n\n  useEffect(() => {\n    client.channel.queryChannels({ page: 1, size: 100 });\n  }, []);\n\n  return (\n    <div>\n      <button\n        onClick={() => {\n          client.channel.createRoom();\n        }}>\n        create group\n      </button>\n      <button\n        onClick={() => {\n          client.channel.setActiveChannel({ topic: 'xxx', topic_type: 'xxx' });\n        }}>\n        set active channel\n      </button>\n    </div>\n  );\n};\n")),(0,r.kt)("h2",{id:"getgroupmemberlist"},"getGroupMemberList"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from 'web3-mq';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  useEffect(async () => {\n    const data = await client.channel.getGroupMemberList({\n      page: 1,\n      size: 100,\n    });\n    console.log(data);\n  }, []);\n};\n")),(0,r.kt)("h2",{id:"invitegroupmember"},"InviteGroupMember"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from 'web3-mq';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <button\n      onClick={async () => {\n        const data = await client.channel.inviteGroupMember('memberid');\n        console.log(data);\n      }}>\n      invite Group Member\n    </button>\n  );\n};\n")))}u.isMDXComponent=!0}}]);