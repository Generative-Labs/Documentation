(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[3367],{9951:function(e,t,n){"use strict";n.d(t,{A:function(){return k}});var a=n(7294),l=n(1262),o=n(4184),s=n.n(o),i="code-lineout_cZQd",r="code-box-demo_X7Ez",c="code-box-meta_GVCM",p="code-box-title_sfQs",m="code-box-description_bhuL",u="code-box-actions_vDQF",d="code-box-show-code_Yemp",h="code-icon_AL8q",g="code-icon-hide_dxEg",C="highlight-wrapper_JnmS",v="highlight-wrapper-hide_pcAC",k=function(e){var t=e.title,n=e.description,o=e.code,k=e.children,f=(0,a.useState)(!0),y=f[0],N=f[1];return a.createElement(l.Z,null,(function(){var e,l,f;return a.createElement("div",{className:i},a.createElement("div",{className:r},k),a.createElement("div",{className:c},a.createElement("div",{className:p},t),a.createElement("div",{className:m},n),o&&a.createElement("div",{className:u},a.createElement("span",{className:d},a.createElement("img",{className:s()(h,(e={},e[g]=y,e)),onClick:function(){return N(!y)},src:"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",alt:""}),a.createElement("img",{className:s()(h,(l={},l[g]=!y,l)),onClick:function(){return N(!y)},src:"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",alt:""})))),o&&a.createElement("div",{className:s()(C,(f={},f[v]=!y,f))},o))}))}},1086:function(e,t,n){"use strict";var a=n(5861),l=n(7757),o=n.n(l),s=n(7294),i=n(1352);t.Z=function(){var e=(0,s.useMemo)((function(){var e=localStorage.getItem("PRIVATE_KEY")||"",t=localStorage.getItem("PUBLIC_KEY")||"",n=localStorage.getItem("userid")||"";return e&&t&&n?{PrivateKey:e,PublicKey:t,userid:n}:null}),[]),t=(0,s.useState)(e),n=t[0],l=t[1],r=(0,s.useState)(null),c=r[0],p=r[1],m=function(){var e=(0,a.Z)(o().mark((function e(){var t,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("PUBLIC_KEY")||"",n=localStorage.getItem("DID_KEY")||"",e.next=4,i.Client.init({connectUrl:localStorage.getItem("FAST_URL"),app_key:"vAUJTFXbBZRkEDRE",env:"dev",didKey:n,tempPubkey:t});case 4:a=e.sent,localStorage.setItem("FAST_URL",a),p(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{keys:n,fastestUrl:c,init:m,logout:function(){localStorage.setItem("PRIVATE_KEY",""),localStorage.setItem("PUBLIC_KEY",""),localStorage.setItem("DID_KEY",""),localStorage.setItem("userid",""),l(null)},handleLoginEvent:function(e){if(e.data){if("login"===e.type){var t=e.data,n=t.privateKey,a=t.publicKey,o=t.tempPrivateKey,s=t.tempPublicKey,i=t.didKey,r=t.userid,c=t.address,p=t.pubkeyExpiredTimestamp;localStorage.setItem("userid",r),localStorage.setItem("PRIVATE_KEY",o),localStorage.setItem("PUBLIC_KEY",s),localStorage.setItem("WALLET_ADDRESS",c),localStorage.setItem("MAIN_PRIVATE_KEY",n),localStorage.setItem("MAIN_PUBLIC_KEY",a),localStorage.setItem("DID_KEY",i),localStorage.setItem("PUBKEY_EXPIRED_TIMESTAMP",String(p)),l({PrivateKey:o,PublicKey:s,userid:r})}if("register"===e.type){var m=e.data,u=m.privateKey,d=m.publicKey,h=m.address;localStorage.setItem("WALLET_ADDRESS",h),localStorage.setItem("MAIN_PRIVATE_KEY",u),localStorage.setItem("MAIN_PUBLIC_KEY",d)}}}}}},1290:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return T},contentTitle:function(){return L},default:function(){return A},frontMatter:function(){return M},metadata:function(){return S},toc:function(){return w}});var a=n(7462),l=n(3366),o=n(7294),s=n(3905),i=n(9951),r=n(1352),c=n(4137),p=n(1086),m="custom_box_lfvH",u="dataInner_QvjX",d="name_yvag",h=function(){var e=(0,c.mx)().client,t=(0,c.JN)().activeChannel;return o.createElement("div",{className:m,style:{wordBreak:"break-all"}},o.createElement("div",null,o.createElement("span",null,"current Chat name is")," ",t.chat_name),o.createElement("div",null,o.createElement("span",null,"current Chat type is")," ",t.chat_type),o.createElement("div",null,o.createElement("span",null,"current Chat ID is")," ",t.chatid),o.createElement(c.zx,{type:"ghost",onClick:function(){e.channel.setActiveChannel(null)},style:{margin:"10px 12px"}},"back"))},g=function(){var e=(0,p.Z)(),t=e.keys,n=e.init,a=e.fastestUrl,l=e.logout;if((0,o.useEffect)((function(){n(),document.getElementsByTagName("body")[0].setAttribute("data-theme","light")}),[]),!t)return o.createElement(c.zx,{size:"large",type:"ghost"},o.createElement("a",{href:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#basic-usage",style:{textDecoration:"none"}},"Please login first"));if(!a)return null;var s=r.Client.getInstance(t);return o.createElement("div",{id:"box",style:{position:"relative",border:"1px solid #f2f2f2",width:"100%",height:"300px",overflow:"auto"}},o.createElement(c.en,{client:s,appType:c.KU.h5,logout:l},o.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},o.createElement(c.GO,null)),o.createElement(c.$W,null,o.createElement(h,null))))},C=function(){var e=(0,c.mx)().client;return o.createElement("div",{style:{display:"flex",padding:"13px",alignItems:"center",boxShadow:"0 -12px 10px rgb(30 83 133 / 3%)"}},o.createElement(c.zx,{onClick:function(){e.channel.setActiveChannel(null)},style:{height:"100%",marginRight:"8px"}},"Back"),o.createElement(c.Tf,null))},v=function(){var e=(0,c.fr)().message,t=e.senderInfo,n=(void 0===t?{}:t)||{},a=n.defaultUserAvatar,l=n.defaultUserName;return o.createElement("div",{style:{display:"flex",alignItems:"flex-start",padding:"16px 24px",borderBottom:"1px solid #f2f2f2",position:"relative"}},o.createElement(c.qE,{name:"user",image:a||"",size:30}),o.createElement("div",{style:{position:"relative",width:"100%"}},o.createElement("div",{className:u},o.createElement("span",{className:d},l||function(e){void 0===e&&(e="");var t=e.length;return e.substring(0,5)+"..."+e.substring(t-4,t)}(e.senderId)),o.createElement("span",null,e.date,"\xa0",e.timestamp)),o.createElement("div",null,e.content)))},k=function(){var e=(0,p.Z)(),t=e.keys,n=e.init,a=e.fastestUrl,l=e.logout;if((0,o.useEffect)((function(){n(),document.getElementsByTagName("body")[0].setAttribute("data-theme","light")}),[]),!t)return o.createElement(c.zx,{size:"large",type:"ghost"},o.createElement("a",{href:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#basic-usage",style:{textDecoration:"none"}},"Please login first"));if(!a)return null;var s=r.Client.getInstance(t);return o.createElement("div",{id:"box",style:{position:"relative",border:"1px solid #f2f2f2",width:"100%",height:"300px",overflow:"auto"}},o.createElement(c.en,{containerId:"box",client:s,appType:c.KU.h5,logout:l},o.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},o.createElement(c.GO,null)),o.createElement(c.$W,{Input:C,Message:v},o.createElement(c.Rz,{hasContainer:!0},o.createElement(c.rN,null),o.createElement(c.Ru,null)))))},f=["components"],y={toc:[]};function N(e){var t=e.components,n=(0,l.Z)(e,f);return(0,s.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\nimport {\n  AppTypeEnum,\n  Button, \n  Chat, \n  Channel, \n  ChannelList, \n  LoginModal,\n  useChannelStateContext, \n  useChatContext \n} from '@web3mq/react-components';\n\nimport useLogin from './hooks/useLogin';\n\nconst CustomComponent: React.FC = () => {\n  const { client } = useChatContext();\n  const { activeChannel } = useChannelStateContext();\n\n  const handleClose = () => {\n    client.channel.setActiveChannel(null);\n  };\n\n  return (\n    <div style={{wordBreak: 'break-all'}}>\n      <div>current Chat name is {activeChannel.chat_name}</div>\n      <div>current Chat type is {activeChannel.chat_type}</div>\n      <div>current Chat ID is {activeChannel.chatid}</div>\n      <Button type='ghost' onClick={handleClose} style={{margin: '10px 12px'}}>back</Button>\n    </div>\n  )\n}\n\nexport const ChannelExample: React.FC = () => {\n  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();\n\n  useEffect(() => {\n    init();\n    document.body.setAttribute('data-theme', 'light')\n  }, [])\n\n  if (!keys) {\n    return (\n       <LoginModal \n        appType={AppTypeEnum.pc}\n        handleLoginEvent={handleLoginEvent}\n        loginBtnNode={<Button size='large' type='ghost'>login</Button>}\n      />\n    );\n  }\n  if (!fastestUrl) {\n    return null;\n  }\n\n  const client = Client.getInstance(keys);\n\n  return (\n    <Chat client={client} appType={AppTypeEnum['h5']} logout={logout}>\n      <ChannelList />\n      <Channel>\n        <CustomComponent />\n      </Channel>\n    </Chat>\n  );\n};\n")))}N.isMDXComponent=!0;var x=["components"],E={toc:[]};function b(e){var t=e.components,n=(0,l.Z)(e,x);return(0,s.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useEffect, useState } from 'react';\nimport { Client } from '@web3mq/client';\nimport { \n  AppTypeEnum, \n  Avatar,\n  Chat, \n  Channel, \n  ChatAutoComplete,\n  ChannelList, \n  Button,\n  LoginModal,\n  MessageList,\n  MessageInput,\n  Window,\n  useMessageContext,\n  useChatContext\n} from '@web3mq/react-components';\n\nimport useLogin from './hooks/useLogin';\n\nconst CustomInput: React.FC = () => {\n  const [value, setValue] = useState('');\n  const { client } = useChatContext();\n  const { sendMessage } = useMessageInputContext();\n  const handleClose = () => {\n    client.channel.setActiveChannel(null);\n  };\n  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(e.target.value);\n  }\n  return (\n    <div style={{display: 'flex',padding: '13px', alignItems: 'center', boxShadow: '0 -12px 10px rgb(30 83 133 / 3%)'}}>\n      <Button onClick={handleClose} style={{height: '100%', marginRight: '8px'}}>Back</Button>\n      <input value={value} onChange={onChange} />\n      <Button onClick={() => sendMessage(value)}>send</Button>\n    </div>\n  )\n};\n\nconst CustomMessage: React.FC = () => {\n  const { message } = useMessageContext();\n  const getShortAddress = (address: string = '') => {\n    let strLength = address.length;\n    return address.substring(0, 5) + '...' + address.substring(strLength - 4, strLength);\n  };\n\n  return (\n    <div style={{ display: 'flex', alignItems: 'flex-start', padding: '16px 24px', borderBottom: '1px solid #f2f2f2', position: 'relative'}}>\n      <Avatar\n        name=\"user\"\n        image={message?.avatar || ''}\n        size={30} \n      />\n      <div style={{position: 'relative', width: '100%'}}>\n        <div>\n          <span>{getShortAddress(message.senderId)}</span>\n          <span>{message.date}&nbsp;{message.timestamp}</span>\n        </div>\n        <div>{message.content}</div>\n      </div>\n    </div>\n  )\n}\n\nexport const CustomChannelExample: React.FC = () => {\n  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();\n\n  useEffect(() => {\n    init();\n    document.body.setAttribute('data-theme', 'light')\n  }, [])\n\n  if (!keys) {\n    return (\n       <LoginModal \n        appType={AppTypeEnum.pc}\n        handleLoginEvent={handleLoginEvent}\n        loginBtnNode={<Button size='large' type='ghost'>login</Button>}\n      />\n    );\n  }\n  if (!fastestUrl) {\n    return null;\n  }\n\n  const client = Client.getInstance(keys);\n\n  return (\n    <div id='box' style={{position: 'relative'}}>\n      <Chat containerId='box' client={client} appType={AppTypeEnum['h5']} logout={logout}>\n        <ChannelList />\n        <Channel Input={CustomInput} Message={CustomMessage}>\n          <Window hasContainer>\n            <MessageList />\n            <MessageInput />\n          </Window>\n        </Channel>\n      </Chat>\n    </div>\n  );\n};\n")))}b.isMDXComponent=!0;var I=["components"],M={sidebar_position:3},L="Channel",S={unversionedId:"Web3MQ-UI-Components/Web3MQ-React/chatComponent/Channel",id:"Web3MQ-UI-Components/Web3MQ-React/chatComponent/Channel",title:"Channel",description:"The Channel component is a React Context provider that wraps all of the logic, functionality, and UI for an individual chat channel. It provides three separate contexts to its children:",source:"@site/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Channel.md",sourceDirName:"Web3MQ-UI-Components/Web3MQ-React/chatComponent",slug:"/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Channel",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Channel",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Channel List",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/ChannelList"},next:{title:"MessageList",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageList"}},T={},w=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Custom Input",id:"custom-input",level:2},{value:"Custom Message",id:"custom-message",level:2},{value:"useChannelStateContext",id:"usechannelstatecontext",level:2},{value:"useComponentContext",id:"usecomponentcontext",level:2},{value:"Api",id:"api",level:2},{value:"Channel",id:"channel-1",level:3},{value:"useChannelStateContext data",id:"usechannelstatecontext-data",level:3},{value:"useComponentContext data",id:"usecomponentcontext-data",level:3}],_={toc:w};function A(e){var t=e.components,n=(0,l.Z)(e,I);return(0,s.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"channel"},"Channel"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Channel")," component is a React Context provider that wraps all of the logic, functionality, and UI for an individual chat channel. It provides three separate contexts to its children:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"ChannelStateContext - stateful data (ex: activeChannel)"),(0,s.kt)("li",{parentName:"ul"},"ChannelActionContext - action handlers (ex: sendMessage or openThread)"),(0,s.kt)("li",{parentName:"ul"},"ComponentContext - custom component UI overrides (ex: Input or Message)")),(0,s.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Channel")," component does not inject any UI, so its implementation is fairly simple.The ",(0,s.kt)("inlineCode",{parentName:"p"},"Channel")," component listens for the ",(0,s.kt)("inlineCode",{parentName:"p"},"channel.activeChange")," event and captures the latest ",(0,s.kt)("inlineCode",{parentName:"p"},"activeChannel")," for its child components to fetch via ",(0,s.kt)("inlineCode",{parentName:"p"},"ChannelStateContext"),"."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If your channelList list is empty, you can create a chat room in ",(0,s.kt)("a",{parentName:"p",href:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/CreateChannel"},"createChannel"),"."))),(0,s.kt)(i.A,{title:"Example",description:"This is the Channel example",code:(0,s.kt)(N,{mdxType:"ChannelMdx"}),mdxType:"Layout"},(0,s.kt)(g,{mdxType:"ChannelExample"})),(0,s.kt)("h2",{id:"custom-input"},"Custom Input"),(0,s.kt)("p",null,"In the ",(0,s.kt)("inlineCode",{parentName:"p"},"channel")," component, you can pass in an Input component with custom styles and functionality, where you can get the ",(0,s.kt)("inlineCode",{parentName:"p"},"sendMessage")," method through the ",(0,s.kt)("inlineCode",{parentName:"p"},"useMessageInputContext")," method."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"  The Input property of 'channel' has a lower priority than the Input property of 'MessageInput', and it is recommended to pass in as the Input property of 'MessageInput'."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"}," const { sendMessage } = useMessageInputContext();\n")),(0,s.kt)("h2",{id:"custom-message"},"Custom Message"),(0,s.kt)("p",null,"If you want to display a custom list of messages, you can pass the custom Message component as a parameter in the ",(0,s.kt)("inlineCode",{parentName:"p"},"channel"),", and the ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageList")," will iterate through the Message component, and you can get the corresponding message in the component via the ",(0,s.kt)("inlineCode",{parentName:"p"},"useMessageContext")," method."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const { message } = useMessageContext();\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How to use custom Component Example")),(0,s.kt)(i.A,{title:"Example",description:"This is the custom Channel example",code:(0,s.kt)(b,{mdxType:"CustomChannelMdx"}),mdxType:"Layout"},(0,s.kt)(k,{mdxType:"CustomChannelExample"})),(0,s.kt)("h2",{id:"usechannelstatecontext"},"useChannelStateContext"),(0,s.kt)("p",null,"Any child of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Channel")," component has access to the channelStateContext and componentContext. Each React Context in the component library can be accessed with one of our custom hooks, which must be imported individually."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { activeChannel } = useChannelStateContext();\n")),(0,s.kt)("h2",{id:"usecomponentcontext"},"useComponentContext"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { Message, Input } = useComponentContext();\n")),(0,s.kt)("h2",{id:"api"},"Api"),(0,s.kt)("h3",{id:"channel-1"},"Channel"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The properties of the Channel are described as follows:")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Property"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Input"),(0,s.kt)("td",{parentName:"tr",align:null},"set your custom ",(0,s.kt)("inlineCode",{parentName:"td"},"Input")," component"),(0,s.kt)("td",{parentName:"tr",align:null},"React.ComponentType"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"false")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Message"),(0,s.kt)("td",{parentName:"tr",align:null},"set your custom ",(0,s.kt)("inlineCode",{parentName:"td"},"Message")," component"),(0,s.kt)("td",{parentName:"tr",align:null},"React.ComponentType"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"false")))),(0,s.kt)("h3",{id:"usechannelstatecontext-data"},"useChannelStateContext data"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Property"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"activeChannel"),(0,s.kt)("td",{parentName:"tr",align:null},"current active channel"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype"},"ChannelItemType")),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"-")))),(0,s.kt)("h3",{id:"usecomponentcontext-data"},"useComponentContext data"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Property"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Input"),(0,s.kt)("td",{parentName:"tr",align:null},"set custom ",(0,s.kt)("inlineCode",{parentName:"td"},"MessageInput")," component"),(0,s.kt)("td",{parentName:"tr",align:null},"React.Component"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"-")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Message"),(0,s.kt)("td",{parentName:"tr",align:null},"set custom ",(0,s.kt)("inlineCode",{parentName:"td"},"Message")," component"),(0,s.kt)("td",{parentName:"tr",align:null},"React.Component"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"-")))))}A.isMDXComponent=!0},3094:function(){},6601:function(){},9214:function(){},5568:function(){}}]);