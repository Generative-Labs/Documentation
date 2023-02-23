"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[5040],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7110:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={position:4},s="Channel",p={unversionedId:"Web3MQ-SDK/JS-SDK/channel/channel",id:"Web3MQ-SDK/JS-SDK/channel/channel",title:"Channel",description:"Properties",source:"@site/docs/Web3MQ-SDK/JS-SDK/channel/channel.md",sourceDirName:"Web3MQ-SDK/JS-SDK/channel",slug:"/Web3MQ-SDK/JS-SDK/channel/",permalink:"/docs/Web3MQ-SDK/JS-SDK/channel/",tags:[],version:"current",frontMatter:{position:4},sidebar:"tutorialSidebar",previous:{title:"Register",permalink:"/docs/Web3MQ-SDK/JS-SDK/register/"},next:{title:"Message",permalink:"/docs/Web3MQ-SDK/JS-SDK/message/"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Permission",id:"permission",level:2},{value:"JoinGroupPermissionsType",id:"joingrouppermissionstype",level:3},{value:"GroupPermissions",id:"grouppermissions",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init and get Client",id:"init-and-get-client",level:3},{value:"Methods",id:"methods-1",level:2},{value:"createRoom",id:"createroom",level:3},{value:"queryChannels",id:"querychannels",level:3},{value:"setActiveChannel",id:"setactivechannel",level:3},{value:"updateChannels",id:"updatechannels",level:3},{value:"getGroupMemberList",id:"getgroupmemberlist",level:3},{value:"inviteGroupMember",id:"invitegroupmember",level:3},{value:"joinGroup",id:"joingroup",level:3},{value:"getGroupPermissions",id:"getgrouppermissions",level:3},{value:"updateGroupPermissions",id:"updategrouppermissions",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"channel"},"Channel"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelList"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype"},"ChannelItemType")," ","[ ]"," ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"channel list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activeChannel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype"},"ChannelItemType")," ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"current active channel")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"),(0,l.kt)("th",{parentName:"tr",align:null},"response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createRoom"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#createroomparams"},"CreateRoomParams")),(0,l.kt)("td",{parentName:"tr",align:null},"Promise: void")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryChannels"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#pageparams"},"PageParams")),(0,l.kt)("td",{parentName:"tr",align:null},"Promise: void")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setActiveChannel"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype"},"ChannelItemType")," ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"Promise: void")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateChannels"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#updateroomlistparams"},"UpdateRoomListParams")),(0,l.kt)("td",{parentName:"tr",align:null},"Promise: ",(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse"},"SearchUsersResponse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getGroupMemberList"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#pageparams"},"PageParams")),(0,l.kt)("td",{parentName:"tr",align:null},"Promise: ",(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType"),"[ ]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inviteGroupMember"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"members: string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Promise: ",(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype"},"ContactListItemType"),"[ ]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"joinGroup"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"groupid: string"),(0,l.kt)("td",{parentName:"tr",align:null},"Promise: void")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getGroupPermissions"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"groupid: string"),(0,l.kt)("td",{parentName:"tr",align:null},"Promise: ",(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse"},"SearchUsersResponse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateGroupPermissions"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#updategrouppermissionsparams"},"UpdateGroupPermissionsParams")),(0,l.kt)("td",{parentName:"tr",align:null},"Promise: ",(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse"},"SearchUsersResponse"))))),(0,l.kt)("h2",{id:"permission"},"Permission"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Group chat permission currently only has ",(0,l.kt)("inlineCode",{parentName:"p"},"group:join")," rule, which indicates the permission to join a group. ",(0,l.kt)("inlineCode",{parentName:"p"},"group:join")," rule has ",(0,l.kt)("inlineCode",{parentName:"p"},"public")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ceator_invite_friends")," values, and its value type is 'enum'"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"1.",(0,l.kt)("inlineCode",{parentName:"li"},"ceator_invite_friends"),": Only the group owner can invite friends to join."),(0,l.kt)("li",{parentName:"ul"},"2.",(0,l.kt)("inlineCode",{parentName:"li"},"public"),": Everyone can join without restrictions."))),(0,l.kt)("h3",{id:"joingrouppermissionstype"},"JoinGroupPermissionsType"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"format"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"),(0,l.kt)("th",{parentName:"tr",align:null},"eg"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},'"enum"'),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of group to join in group permissions"),(0,l.kt)("td",{parentName:"tr",align:null},'"enum"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},'"ceator_invite_friends" ',"|",' "public"'),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of group to join in group permissions"),(0,l.kt)("td",{parentName:"tr",align:null},'"public"')))),(0,l.kt)("h3",{id:"grouppermissions"},"GroupPermissions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"format"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"),(0,l.kt)("th",{parentName:"tr",align:null},"eg"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"group:join"'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/channel/#joingrouppermissionstype"},"JoinGroupPermissionsType")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Group channel permission type"),(0,l.kt)("td",{parentName:"tr",align:null},'{"group:join": {type: "enum",value: "public"}}')))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"init() see: ",(0,l.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/client/#init"},"init"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"register() see: ",(0,l.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/register/#register-or-resetpassword"},"register"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"login() see: ",(0,l.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/register/#login"},"login"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"event see: ",(0,l.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/client/#events-1"},"event"))),(0,l.kt)("h3",{id:"init-and-get-client"},"Init and get Client"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To use the functions of the current module, please complete the following steps first.")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"After successful login, you can get the secret key pair from the returned result"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { useEffect, useState } from 'react';\nimport { Client } from '@web3mq/client'; \n\nexport const App = () => {\n  const [fastestUrl, setFastUrl] = useState<string | null>(null);\n  useEffect(() => {\n    Client.init({\n        connectUrl: '', //\n        app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet\n    }).then(data => {\n      setFastUrl(data);\n    });\n  }, [])\n  if (!fastestUrl) return;\n  const {\n      tempPrivateKey,\n      tempPublicKey,\n      pubkeyExpiredTimestamp,\n      mainPrivateKey,\n      mainPublicKey,\n  } = loginRes\n\n  const keys = {\n      PrivateKey: tempPrivateKey,\n      PublicKey: tempPublicKey,\n      userid: localStorage.getItem('userid')\n  };\n\n  const client = Client.getInstance(keys);\n  return (\n    <Child client={client} />\n  )\n}\n")),(0,l.kt)("h2",{id:"methods-1"},"Methods"),(0,l.kt)("h3",{id:"createroom"},"createRoom"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Pass in optional parameters such as ",(0,l.kt)("inlineCode",{parentName:"p"},"groupName")," to create a group chat.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\ninterface IProps {\n  client: Client;\n}\nexport const Child = (props: IProps) => {\n  const { client } = props;\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'channel.getList') {\n      // The channel you create will appear in the latest channelList\n      console.log(client.channel.channelList);\n    }\n  };\n\n  useEffect(() => {\n    client.on('channel.getList', handleEvent);\n    return () => {\n      client.off('channel.getList');\n    };\n  }, []);\n\n  return (\n    <button\n      onClick={() => {\n        client.channel.createRoom({\n          groupName: 'your favourite group name',\n          avatarUrl: 'your favourite image url'\n        });\n      }}\n    >\n      create group\n    </button>\n  );\n};\n")),(0,l.kt)("h3",{id:"querychannels"},"queryChannels"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the list of chat rooms, and could pass in ",(0,l.kt)("inlineCode",{parentName:"p"},"pageParams")," type parameters to achieve paging.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'channel.getList') {\n      // Get the latest channelList\n      console.log(client.channel.channelList);\n    }\n  };\n\n  useEffect(() => {\n    client.on('channel.getList', handleEvent);\n    return () => {\n      client.off('channel.getList');\n    };\n  }, []);\n\n  return (\n    <button\n      onClick={() => {\n        client.channel.queryChannels({\n          page: 1,\n          size: 20\n        });\n      }}\n    >\n      query Channels\n    </button>\n  );\n};\n")),(0,l.kt)("h3",{id:"setactivechannel"},"setActiveChannel"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Set ",(0,l.kt)("inlineCode",{parentName:"p"},"activeChannel")," to eliminate the need for ",(0,l.kt)("inlineCode",{parentName:"p"},"groupid"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"userid")," in some methods, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"client.message.sendMessage"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\ninterface IProps {\n  client: Client;\n}\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'channel.activeChange') {\n      // Get the latest activeChannel\n      console.log(client.channel.activeChannel);\n    }\n    if (event.type === 'channel.activeChannel') {\n      // Get the latest channelList\n      console.log(client.channel.channelList);\n    }\n  };\n\n  useEffect(() => {\n    client.channel.queryChannels({page: 1,size: 20});\n    client.on('channel.getList', handleEvent);\n    return () => {\n      client.off('channel.getList');\n    };\n  }, []);\n\n  const setActiveChannel = async () => {\n    const { channelList } = client.channel;\n    // If your `channelList` is empty please create one first\n    if (channelList.length === 0) {\n      await client.channel.createRoom({\n        groupName: 'your favourite group name',\n        avatarUrl: 'your favourite image url'\n      });\n      await client.channel.setActiveChannel(channelList[0]);\n    }\n    if(channelList && channelList.length > 0) {\n      await client.channel.setActiveChannel(channelList[0]);\n    }\n  };\n\n  return (\n    <button\n      onClick={setActiveChannel}\n    >\n      set Active Channel\n    </button>\n  );\n};\n")),(0,l.kt)("h3",{id:"updatechannels"},"updateChannels"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Update your channels.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from '@web3mq/client';\ninterface IProps {\n  client: Client;\n}\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  const updateChannel = async () => {\n    const date = await client.channel.updateChannels({\n      chatid: 'groupid or userid',\n      chatType: 'chat type \u2014\u2014 group or user',\n      topic: 'groupid or userid',\n      topicType: 'chat type \u2014\u2014 group or user',\n    });\n    console.log(data);\n  };\n\n  return (\n    <button\n      onClick={updateChannel};\n      }}\n    >\n      update Channel\n    </button>\n  );\n};\n")),(0,l.kt)("h3",{id:"getgroupmemberlist"},"getGroupMemberList"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the list of group chat members after setting ",(0,l.kt)("inlineCode",{parentName:"p"},"activeChannel"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n  useEffect(() => {\n    client.channel.queryChannels({\n      page: 1,\n      size: 100,\n    })\n  }, []);\n  const getGroupMembers = async() => {\n    const { channelList } = client.channel;\n    // If your `channelList` is empty please create one first\n    if (channelList.length === 0) {\n      await client.channel.createRoom({\n        groupName: 'your favourite group name',\n        avatarUrl: 'your favourite image url'\n      });\n      await client.channel.setActiveChannel(channelList[0]);\n    } else {\n      await client.channel.setActiveChannel(channelList[0]);\n    }\n    const dat = await client.channel.getGroupMemberList({\n      page: 1,\n      size: 100,\n    });\n    console.log(data);\n  }\n  return (\n    <button\n      onClick={getGroupMembers}\n    >\n      get group members\n    </button>\n  )\n};\n")),(0,l.kt)("h3",{id:"invitegroupmember"},"inviteGroupMember"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Invite users to the current ",(0,l.kt)("inlineCode",{parentName:"p"},"activeChannel"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n  const handleEvent = (event: { type: any }) => {\n    if (!activeChannel && channelList.length !== 0) {\n      // 1. You need to set activeChannel before inviteGroupMember\n      client.channel.setActiveChannel(channelList[0]);\n    }\n    if (event.type === 'channel.getList') {\n      // Get the latest channelList\n      console.log(client.channel.channelList);\n    }\n  };\n  const inviteGroupMember = async () => {\n    const { activeChannel } = client;\n    if (activeChannel) {\n      // 2. You will invite users to the `activeChannel`\n      const data = await client.channel.inviteGroupMember([`member's userid`]);\n      console.log(data);\n    }\n  };\n\n  useEffect(() => {\n    client.channel.queryChannels({ page: 1, size: 100 });\n    client.on('channel.getList', handleEvent);\n    return () => {\n      client.off('channel.getList');\n    };\n  }, []);\n\n  return (\n    <button\n      onClick={() => inviteGroupMember()}>\n      invite Group Member\n    </button>\n  );\n};\n")),(0,l.kt)("h3",{id:"joingroup"},"joinGroup"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Join a group chat by ",(0,l.kt)("inlineCode",{parentName:"p"},"groupid"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'channel.getList') {\n      // Get the latest channelList\n      console.log(client.channel.channelList);\n    }\n  };\n\n  useEffect(() => {\n    client.channel.queryChannels({ page: 1, size: 100 });\n    client.on('channel.getList', handleEvent);\n    return () => {\n      client.off('channel.getList');\n    };\n  }, []);\n\n  return (\n    <button\n      onClick={() => {\n        client.channel.joinGroup('groupid')\n      }}>\n      join Group\n    </button>\n  );\n};\n")),(0,l.kt)("h3",{id:"getgrouppermissions"},"getGroupPermissions"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"View group chat permissions by ",(0,l.kt)("inlineCode",{parentName:"p"},"groupid"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'channel.getList') {\n      // Get the latest channelList\n      console.log(client.channel.channelList);\n    }\n  };\n\n  useEffect(() => {\n    client.channel.queryChannels({ page: 1, size: 100 });\n    client.on('channel.getList', handleEvent);\n    return () => {\n      client.off('channel.getList');\n    };\n  }, []);\n\n  return (\n    <button\n      onClick={async() => {\n        const { channelList } = client.channel;\n        if (channelList && channelList.length > 0) {\n          const data = await client.channel.getGroupPermissions(channelList[0].chatid);\n          console.log(data);\n        } else {\n          await client.channel.createRoom({ group_name: 'hello world'});\n          const data = await client.channel.getGroupPermissions(channelList[0].chatid);\n          console.log(data);\n        }\n      }}>\n      get group permissions\n    </button>\n  );\n};\n")),(0,l.kt)("h3",{id:"updategrouppermissions"},"updateGroupPermissions"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Changing group chat permissions.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n  const handleEvent = (event: { type: any }) => {\n    if (event.type === 'channel.getList') {\n      // Get the latest channelList\n      console.log(client.channel.channelList);\n    }\n  };\n\n  useEffect(() => {\n    client.channel.queryChannels({ page: 1, size: 100 });\n    client.on('channel.getList', handleEvent);\n    client.on('channel.updated',  handleEvent);\n    return () => {\n      client.off('channel.getList');\n      client.off('channel.updated');\n    };\n  }, []);\n\n  return (\n    <button\n      onClick={async() => {\n        await client.channel.createRoom({ group_name: 'hello world'});\n        const { channelList } = client.channel;\n        const data = await client.channel.updateGroupPermissions({\n          groupid: channelList[0].chatid,\n          permissions: {\n            \"group:join\": {\n                type: \"enum\",\n                value: \"public\"\n            }\n          }\n        });\n        console.log(data);\n      }}\n    >\n      update group permissions\n    </button>\n  );\n};\n")))}d.isMDXComponent=!0}}]);