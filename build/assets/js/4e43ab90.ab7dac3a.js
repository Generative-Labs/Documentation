"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[5004],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),m=s,d=g["".concat(o,".").concat(m)]||g[m]||u[m]||r;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7489:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),l=["components"],i={position:5},o="Message",c={unversionedId:"Web3MQ-SDK/JS-SDK/message/message",id:"Web3MQ-SDK/JS-SDK/message/message",title:"Message",description:"Properties",source:"@site/docs/Web3MQ-SDK/JS-SDK/message/message.md",sourceDirName:"Web3MQ-SDK/JS-SDK/message",slug:"/Web3MQ-SDK/JS-SDK/message/",permalink:"/docs/Web3MQ-SDK/JS-SDK/message/",tags:[],version:"current",frontMatter:{position:5},sidebar:"tutorialSidebar",previous:{title:"Channel",permalink:"/docs/Web3MQ-SDK/JS-SDK/channel/"},next:{title:"Contact",permalink:"/docs/Web3MQ-SDK/JS-SDK/contact/"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init and get Client",id:"init-and-get-client",level:3},{value:"Methods",id:"methods-1",level:2},{value:"getMessageList",id:"getmessagelist",level:3},{value:"sendMessage",id:"sendmessage",level:3},{value:"changeMessageStatus",id:"changemessagestatus",level:3}],g={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"message"},"Message"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageList"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#messagelistitem"},"MessageListItem")," ","[ ]"," ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"message list")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters Description"),(0,r.kt)("th",{parentName:"tr",align:null},"response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getMessageList"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#pageparams"},"PageParams")," 2.secondParams: (target_userid or target_groupid or target_user_wallet_address)"),(0,r.kt)("td",{parentName:"tr",align:null},"Promise: void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changeMessageStatus"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"1.messages: string[] 2.status: ",(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#messagestatus"},"MessageStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"Promise: ",(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse"},"SearchUsersResponse"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"1.msg: string 2.secondParams: (target_userid or target_user_wallet_address)"),(0,r.kt)("td",{parentName:"tr",align:null},"Promise: void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"receive"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"1.pbType: number 2.bytes: Uint8Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Promise: void")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"init() see: ",(0,r.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/client/#init"},"init"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"auth() see: ",(0,r.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/auth/#auth-or-resetpassword"},"register"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"login() see: ",(0,r.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/auth/#login"},"login"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"event see: ",(0,r.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/client/#events-1"},"event"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"queryChannels() see: ",(0,r.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/channel/#querychannels"},"queryChannels"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"setActiveChannel() see: ",(0,r.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/channel/#setactivechannel"},"setActiveChannel"))),(0,r.kt)("h3",{id:"init-and-get-client"},"Init and get Client"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To use the functions of the current module, please complete the following steps first.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"After successful login, you can get the secret key pair from the returned result"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useEffect, useState } from 'react';\nimport { Client } from '@web3mq/client'; \n\nexport const App = () => {\n  const [fastestUrl, setFastUrl] = useState<string | null>(null);\n  useEffect(() => {\n    Client.init({\n        connectUrl: '', //\n        app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet\n    }).then(data => {\n      setFastUrl(data);\n    });\n  }, []);\n  if (!fastestUrl) return;\n  const {\n      tempPrivateKey,\n      tempPublicKey,\n      pubkeyExpiredTimestamp,\n      mainPrivateKey,\n      mainPublicKey,\n  } = loginRes\n\n  const keys = {\n      PrivateKey: tempPrivateKey,\n      PublicKey: tempPublicKey,\n      userid: localStorage.getItem('userid')\n  };\n\n  const client = Client.getInstance(keys);\n  return (\n    <Child client={client} />\n  )\n}\n")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"getmessagelist"},"getMessageList"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Select the chat room to get the list of messages by userid, wallet, groupid and ",(0,r.kt)("inlineCode",{parentName:"p"},"setActiveChannel")," operation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  const handleEvent = (event: { type: any }) => {\n    const { channelList, activeChannel } = client.channel;\n    if (!activeChannel && channelList.length !== 0) {\n      // The default setting for the first item of `channelList` is `activechannel`\n      client.channel.setActiveChannel(channelList[0]);\n    }\n    if (event.type === 'message.getList') {\n      console.log(client.message.messageList);\n    }\n  };\n  const getMessageList = async () => {\n    const { activeChannel } = client.channel;\n    if (activeChannel) {\n      // Basic use  When you set the `activeChannel`, it will get the messagesList of the `activeChannel` by default.\n      await client.message.getMessageList({\n        page: 1,\n        size: 20,\n      });\n    } else {\n      // Get the `messagesList` in the specified channel.(the second props can also be the `userid`)\n      await client.message.getMessageList({\n        page: 1,\n        size: 20,\n      }, 'groupid or userid'); \n    };\n  }\n\n  useEffect(() => {\n    client.channel.queryChannels({page: 1, size: 20});\n    client.on('channel.getList', handleEvent);\n    client.on('message.getList', handleEvent);\n    return () => {\n      client.off('channel.getList', handleEvent);\n      client.off('message.getList', handleEvent);\n    };\n  }, []);\n\n  return (\n    <div>\n      <button onclick={getMessageList}>\n        get message list\n      </button>\n    </div>\n  );\n};\n")),(0,r.kt)("h3",{id:"sendmessage"},"sendMessage"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Send a message after selecting a chat object by userid, wallet, groupid and ",(0,r.kt)("inlineCode",{parentName:"p"},"setActiveChannel")," operation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'message.getList') {\n      console.log(client.message.messageList);\n    }\n    if (event.type === 'message.delivered') {\n      console.log('message delivered');\n    }\n    if (event.type === 'message.send') {\n      console.log('message send');\n    }\n  };\n\n  useEffect(() => {\n    client.on('message.getList', handleEvent);\n    client.on('message.delivered', handleEvent);\n    client.on('message.send', handleEvent);\n    return () => {\n      client.off('message.getList', handleEvent);\n      client.off('message.delivered', handleEvent);\n      client.off('message.send', handleEvent);\n    };\n  }, []);\n\n  return (\n    <div>\n      <button\n        onClick={() => {\n          client.message.sendMessage('text'); // Basic use\n          // or\n          client.message.sendMessage('text', 'user: xxxxx...'); // Send it directly to someone using a userid\n          // or\n          client.message.sendMessage('text', 'group: xxxxx...'); // Send it directly to someone using a groupid\n          // or\n          client.message.sendMessage('text', '0xABCD...'); // Send it directly to someone using a wallet address\n        }}>\n        send Message\n      </button>\n    </div>\n  );\n};\n")),(0,r.kt)("h3",{id:"changemessagestatus"},"changeMessageStatus"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Select the messageId of the message to modify the message state after the setactiveChannel operation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect, useState } from 'react';\nimport { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n  const [msgIds, setMsgIds] = useState<Array<string>>([]);\n\n  const changeMessageStatus = async () => {\n    const { activeChannel } = client.channel;\n    if (activeChannel) {\n      const data = await client.message.changeMessageStatus(msgIds);\n      console.log(data);\n    } else {\n      console.log('Please set `activeChannel` first');\n    }\n  };\n\n  const handleEvent = async (event: { type: any }) => {\n    if (!activeChannel && channelList.length !== 0) {\n      await client.channel.setActiveChannel(channelList[0]);\n      await client.message.getMessageList({ page: 1, size: 100 });\n    }\n    if (event.type === 'channel.getList') {\n      // Get the latest channelList\n      console.log(client.channel.channelList);\n    }\n    if (event.type === 'message.getList') {\n      console.log(client.message.messageList);\n      setMsgIds(client.message.messageList.map(msg => msg.id))\n    }\n  };\n\n  useEffect(() => {\n    client.channel.queryChannels({ page: 1, size: 100 });\n    client.on('channel.getList', handleEvent);\n    return () => {\n      client.off('channel.getList');\n    };\n  }, []);\n\n  return (\n    <div>\n      <button\n        onClick={() => changeMessageStatus()}>\n        Change Message Status\n      </button>\n    </div>\n  );\n};\n")))}m.isMDXComponent=!0}}]);