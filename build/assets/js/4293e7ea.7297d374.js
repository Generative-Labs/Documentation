"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[1273],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={position:3},c="Channel",p={unversionedId:"Web3MQ-SDK/JS-SDK-V2/channel/channel",id:"Web3MQ-SDK/JS-SDK-V2/channel/channel",title:"Channel",description:"Properties",source:"@site/docs/Web3MQ-SDK/JS-SDK-V2/channel/channel.md",sourceDirName:"Web3MQ-SDK/JS-SDK-V2/channel",slug:"/Web3MQ-SDK/JS-SDK-V2/channel/",permalink:"/docs/Web3MQ-SDK/JS-SDK-V2/channel/",tags:[],version:"current",frontMatter:{position:3},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/docs/Web3MQ-SDK/JS-SDK-V2/client/"},next:{title:"Message",permalink:"/docs/Web3MQ-SDK/JS-SDK-V2/message/"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"init Client",id:"init-client",level:2},{value:"CreateRoom &amp; QueryChannels &amp; SetActiveChannel",id:"createroom--querychannels--setactivechannel",level:2},{value:"getGroupMemberList",id:"getgroupmemberlist",level:2},{value:"InviteGroupMember",id:"invitegroupmember",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"channel"},"Channel"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelList"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK-V2/types/#activechanneltype"},"activechannelType")," ","[ ]"," ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"channel list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activeChannel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK-V2/types/#activechanneltype"},"activechannelType")," ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"current active channel")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"),(0,l.kt)("th",{parentName:"tr",align:null},"response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createRoom"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryChannels"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK-V2/types/#pageparams"},"PageParams")),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setActiveChannel"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK-V2/types/#activechanneltype"},"activechannelType")),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getGroupMemberList"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK-V2/types/#pageparams"},"PageParams")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype"},"ContactListItemType"),"[ ]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inviteGroupMember"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"(members: string[])"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype"},"ContactListItemType"),"[ ]")))),(0,l.kt)("h2",{id:"init-client"},"init Client"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from 'web3-mq';\n// sign MetaMask get keys\nconst keys = { PrivateKey, PublicKey };\n// ws host url\nconst HostURL = '94.16.119.221:23333/messages';\n// init client\nconst client = Client.getInstance(keys, HostURL);\n")),(0,l.kt)("h2",{id:"createroom--querychannels--setactivechannel"},"CreateRoom & QueryChannels & SetActiveChannel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nexport const App = () => {\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'channel.getList') {\n      // Get the latest channelList\n      console.log(client.channel.channelList);\n    }\n  };\n\n  useEffect(() => {\n    client.on('channel.getList', handleEvent);\n    return () => {\n      client.off('channel.getList');\n    };\n  }, []);\n\n  useEffect(() => {\n    client.channel.queryChannels({ page: 1, size: 100 });\n  }, []);\n\n  return (\n    <div>\n      <button\n        onClick={() => {\n          client.channel.createRoom();\n        }}>\n        create group\n      </button>\n      <button\n        onClick={() => {\n          client.channel.setActiveChannel({ topic: 'xxx', topic_type: 'xxx' });\n        }}>\n        set active channel\n      </button>\n    </div>\n  );\n};\n")),(0,l.kt)("h2",{id:"getgroupmemberlist"},"getGroupMemberList"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export const App = () => {\n  useEffect(async () => {\n    const data = await client.channel.getGroupMemberList({\n      page: 1,\n      size: 100,\n    });\n    console.log(data);\n  }, []);\n};\n")),(0,l.kt)("h2",{id:"invitegroupmember"},"InviteGroupMember"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export const App = () => {\n  return (\n    <button\n      onClick={async () => {\n        const data = await client.channel.inviteGroupMember('memberid');\n        console.log(data);\n      }}>\n      invite Group Member\n    </button>\n  );\n};\n")))}d.isMDXComponent=!0}}]);