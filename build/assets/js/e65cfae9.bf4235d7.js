(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[3422],{9951:function(e,t,n){"use strict";n.d(t,{A:function(){return N}});var a=n(7294),o=n(1262),l=n(4184),s=n.n(l),r="code-lineout_cZQd",i="code-box-demo_X7Ez",p="code-box-meta_GVCM",u="code-box-title_sfQs",c="code-box-description_bhuL",m="code-box-actions_vDQF",d="code-box-show-code_Yemp",g="code-icon_AL8q",h="code-icon-hide_dxEg",k="highlight-wrapper_JnmS",C="highlight-wrapper-hide_pcAC",N=function(e){var t=e.title,n=e.description,l=e.code,N=e.children,I=(0,a.useState)(!0),f=I[0],v=I[1];return a.createElement(o.Z,null,(function(){var e,o,I;return a.createElement("div",{className:r},a.createElement("div",{className:i},N),a.createElement("div",{className:p},a.createElement("div",{className:u},t),a.createElement("div",{className:c},n),l&&a.createElement("div",{className:m},a.createElement("span",{className:d},a.createElement("img",{className:s()(g,(e={},e[h]=f,e)),onClick:function(){return v(!f)},src:"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",alt:""}),a.createElement("img",{className:s()(g,(o={},o[h]=!f,o)),onClick:function(){return v(!f)},src:"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",alt:""})))),l&&a.createElement("div",{className:s()(k,(I={},I[C]=!f,I))},l))}))}},1086:function(e,t,n){"use strict";var a=n(5861),o=n(7757),l=n.n(o),s=n(7294),r=n(1352);t.Z=function(){var e=(0,s.useMemo)((function(){var e=localStorage.getItem("PRIVATE_KEY")||"",t=localStorage.getItem("PUBLIC_KEY")||"",n=localStorage.getItem("userid")||"";return e&&t&&n?{PrivateKey:e,PublicKey:t,userid:n}:null}),[]),t=(0,s.useState)(e),n=t[0],o=t[1],i=(0,s.useState)(null),p=i[0],u=i[1],c=function(){var e=(0,a.Z)(l().mark((function e(){var t,n,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("PUBLIC_KEY")||"",n=localStorage.getItem("DID_KEY")||"",e.next=4,r.Client.init({connectUrl:localStorage.getItem("FAST_URL"),app_key:"vAUJTFXbBZRkEDRE",env:"dev",didKey:n,tempPubkey:t});case 4:a=e.sent,localStorage.setItem("FAST_URL",a),u(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{keys:n,fastestUrl:p,init:c,logout:function(){localStorage.setItem("PRIVATE_KEY",""),localStorage.setItem("PUBLIC_KEY",""),localStorage.setItem("DID_KEY",""),localStorage.setItem("userid",""),o(null)},handleLoginEvent:function(e){if(e.data){if("login"===e.type){var t=e.data,n=t.privateKey,a=t.publicKey,l=t.tempPrivateKey,s=t.tempPublicKey,r=t.didKey,i=t.userid,p=t.address,u=t.pubkeyExpiredTimestamp;localStorage.setItem("userid",i),localStorage.setItem("PRIVATE_KEY",l),localStorage.setItem("PUBLIC_KEY",s),localStorage.setItem("WALLET_ADDRESS",p),localStorage.setItem("MAIN_PRIVATE_KEY",n),localStorage.setItem("MAIN_PUBLIC_KEY",a),localStorage.setItem("DID_KEY",r),localStorage.setItem("PUBKEY_EXPIRED_TIMESTAMP",String(u)),o({PrivateKey:l,PublicKey:s,userid:i})}if("register"===e.type){var c=e.data,m=c.privateKey,d=c.publicKey,g=c.address;localStorage.setItem("WALLET_ADDRESS",g),localStorage.setItem("MAIN_PRIVATE_KEY",m),localStorage.setItem("MAIN_PUBLIC_KEY",d)}}}}}},7884:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return x},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return M}});var a=n(7462),o=n(3366),l=n(7294),s=n(3905),r=n(9951),i=n(1352),p=n(4137),u=n(1086),c=function(){var e=(0,p.Nc)().sendMessage,t=(0,l.useState)(""),n=t[0],a=t[1];return l.createElement("div",{style:{display:"flex",width:"100%",height:"60px",padding:"10px",boxShadow:"0 -12px 10px rgb(30 83 133 / 3%)"}},l.createElement("input",{style:{flex:"2"},type:"text",value:n,onChange:function(e){return a(e.target.value)}}),l.createElement("button",{style:{flex:"1"},onClick:function(){return e(n),void a("")}},"send"))},m=function(e){var t=e.type,n=(0,u.Z)(),a=n.keys,o=n.init,s=n.fastestUrl,r=n.logout;if((0,l.useEffect)((function(){o(),document.getElementsByTagName("body")[0].setAttribute("data-theme","light")}),[]),!a)return l.createElement(p.zx,{size:"large",type:"ghost"},l.createElement("a",{href:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#basic-usage",style:{textDecoration:"none"}},"Please login first"));if(!s)return null;var m=i.Client.getInstance(a);return l.createElement("div",{id:"box",style:{position:"relative",border:"1px solid #f2f2f2",width:"100%",height:"600px",overflow:"auto"}},l.createElement(p.en,{containerId:"box",client:m,appType:p.KU.h5,logout:r},l.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},l.createElement(p.GO,null)),l.createElement(p.$W,null,l.createElement(p.Rz,{hasContainer:!0},l.createElement(p.Ng,null),l.createElement(p.rN,null),l.createElement(p.Ru,{Input:"custom"===t?c:void 0})))))},d=["components"],g={toc:[]};function h(e){var t=e.components,n=(0,o.Z)(e,d);return(0,s.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useEffect, useState } from 'react';\nimport { Client } from '@web3mq/client';\nimport { \n  AppTypeEnum, \n  Button,\n  Channel, \n  ChannelList, \n  Chat, \n  LoginModal,\n  MessageHeader, \n  MessageInput, \n  MessageList, \n  Window,\n  useMessageInputContext \n} from '@web3mq/react-components';\n\nimport useLogin from './hooks/useLogin';\n\nexport const App: React.FC = () => {\n  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();\n\n  useEffect(() => {\n    init();\n    document.body.setAttribute('data-theme', 'light');\n  }, [])\n\n  if (!keys) {\n    return (\n       <LoginModal \n        appType={AppTypeEnum.pc}\n        handleLoginEvent={handleLoginEvent}\n        loginBtnNode={<Button size='large' type='ghost'>login</Button>}\n      />\n    );\n  }\n  if (!fastestUrl) {\n    return null;\n  }\n\n  const client = Client.getInstance(keys);\n\n  return (\n    <div id='box' style={{position: 'relative'}}>\n      <Chat containerId='box' client={client} appType={AppTypeEnum['h5']} logout={logout}>\n        <ChannelList />\n        <Channel>\n          <Window hasContainer>\n            <MessageHeader />\n            <MessageList />\n            <MessageInput />\n          </Window>\n        </Channel>\n      </Chat>\n    </div>\n  );\n};\n")))}h.isMDXComponent=!0;var k=["components"],C={toc:[]};function N(e){var t=e.components,n=(0,o.Z)(e,k);return(0,s.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useEffect, useState } from 'react';\nimport { Client } from '@web3mq/client';\nimport { \n  AppTypeEnum, \n  Button,\n  Channel, \n  ChannelList, \n  Chat, \n  LoginModal,\n  MessageHeader, \n  MessageInput, \n  MessageList, \n  Window,\n  useMessageInputContext \n} from '@web3mq/react-components';\n\nimport useLogin from '/hooks/useLogin';\n\nconst CustomInput = () => {\n  const { sendMessage } = useMessageInputContext();\n  const [ value, setValue ] = useState('');\n\n  const handleEvent = () => {\n    sendMessage(value);\n    setValue('');\n  }\n  return (\n    <div style={{ display: 'flex',  width: '100%', height: '60px', padding: '10px', boxShadow: '0 -12px 10px rgb(30 83 133 / 3%)' }}>\n      <input style={{ flex: '2' }} type=\"text\" value={value} onChange={(e) => setValue(e.target.value)} />\n      <button style={{ flex: '1' }} onClick={() => handleEvent()}>send</button>\n    </div>\n  )\n}\n\nexport const App: React.FC = () => {\n  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();\n\n  useEffect(() => {\n    init();\n    document.body.setAttribute('data-theme', 'light');\n  }, [])\n\n  if (!keys) {\n    return (\n       <LoginModal \n        appType={AppTypeEnum.pc}\n        handleLoginEvent={handleLoginEvent}\n        loginBtnNode={<Button size='large' type='ghost'>login</Button>}\n      />\n    );\n  }\n  if (!fastestUrl) {\n    return null;\n  }\n\n  const client = Client.getInstance(keys);\n\n  return (\n    <div id='box' style={{position: 'relative'}}>\n      <Chat containerId='box' client={client} appType={AppTypeEnum['h5']} logout={logout}>\n        <ChannelList />\n        <Channel>\n          <Window hasContainer>\n            <MessageHeader />\n            <MessageList />\n            <MessageInput Input={CustomInput} />\n          </Window>\n        </Channel>\n      </Chat>\n    </div>\n  );\n};\n")))}N.isMDXComponent=!0;var I=["components"],f={sidebar_position:6},v="MessageInput",y={unversionedId:"Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageInput",id:"Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageInput",title:"MessageInput",description:"The MessageInput component is a React Context provider that does not inject any UI. The MessageInput renders ChatAutoComplete component by default when it does not inject the Input as the props.MessageInputmust be used in the Chat and Channel components.",source:"@site/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageInput.md",sourceDirName:"Web3MQ-UI-Components/Web3MQ-React/chatComponent",slug:"/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageInput",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageInput",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"MessageHead",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageHead"},next:{title:"MessageConsole",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageConsole"}},b={},M=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"ChatAutoComplete component",id:"chatautocomplete-component",level:2},{value:"Use Custom Input",id:"use-custom-input",level:2},{value:"API",id:"api",level:2},{value:"MessageInput",id:"messageinput-1",level:3},{value:"ChatAutoComplete",id:"chatautocomplete",level:3},{value:"useMessageInputContext data",id:"usemessageinputcontext-data",level:3}],E={toc:M};function x(e){var t=e.components,n=(0,o.Z)(e,I);return(0,s.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"messageinput"},"MessageInput"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageInput")," component is a React Context provider that does not inject any UI. The ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageInput")," renders ",(0,s.kt)("inlineCode",{parentName:"p"},"ChatAutoComplete")," component by default when it does not inject the Input as the props.",(0,s.kt)("inlineCode",{parentName:"p"},"MessageInput"),"must be used in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Chat")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Channel")," components."),(0,s.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If your channelList list is empty, you can create a chat room in ",(0,s.kt)("a",{parentName:"p",href:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/CreateChannel"},"createChannel")," and select it to send messages."))),(0,s.kt)(r.A,{title:"Example",description:"This is the MessageInput example",code:(0,s.kt)(h,{mdxType:"MessageInputExampleMdx"}),mdxType:"Layout"},(0,s.kt)(m,{mdxType:"MessageInputExample"})),(0,s.kt)("h2",{id:"chatautocomplete-component"},"ChatAutoComplete component"),(0,s.kt)("p",null,"As the default render Input component of ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageInpt"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ChatAutoComplete")," gets the ",(0,s.kt)("inlineCode",{parentName:"p"},"sendMessage")," method through ",(0,s.kt)("inlineCode",{parentName:"p"},"useMessageInputContext"),", and cannot be used without the ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageInput")," component."),(0,s.kt)("h2",{id:"use-custom-input"},"Use Custom Input"),(0,s.kt)("p",null,"You can render the custom ",(0,s.kt)("inlineCode",{parentName:"p"},"Input")," component by passing Input as props to the ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageInput"),"."),(0,s.kt)(r.A,{title:"Example",description:"This is the use custom Input example",code:(0,s.kt)(N,{mdxType:"CustomInputExampleMdx"}),mdxType:"Layout"},(0,s.kt)(m,{type:"custom",mdxType:"MessageInputExample"})),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("h3",{id:"messageinput-1"},"MessageInput"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The properties of the MessageInput are described as follows:")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Property"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Input"),(0,s.kt)("td",{parentName:"tr",align:null},"set your custom ",(0,s.kt)("inlineCode",{parentName:"td"},"Input")," component"),(0,s.kt)("td",{parentName:"tr",align:null},"React.ComponentType"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"false")))),(0,s.kt)("h3",{id:"chatautocomplete"},"ChatAutoComplete"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The properties of the ChatAutoComplete are described as follows:")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Property"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,s.kt)("td",{parentName:"tr",align:null},"set the placeholder"),(0,s.kt)("td",{parentName:"tr",align:null},"String"),(0,s.kt)("td",{parentName:"tr",align:null},"'Send a Message\u2019"),(0,s.kt)("td",{parentName:"tr",align:null},"false")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"row"),(0,s.kt)("td",{parentName:"tr",align:null},"adaptive content height"),(0,s.kt)("td",{parentName:"tr",align:null},"Number"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"false")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"value"),(0,s.kt)("td",{parentName:"tr",align:null},"input content"),(0,s.kt)("td",{parentName:"tr",align:null},"String"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2018\u2019"),(0,s.kt)("td",{parentName:"tr",align:null},"false")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"onChange"),(0,s.kt)("td",{parentName:"tr",align:null},"callback when the contents of the input change"),(0,s.kt)("td",{parentName:"tr",align:null},"Function"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"false")))),(0,s.kt)("h3",{id:"usemessageinputcontext-data"},"useMessageInputContext data"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Property"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"sendMessage"),(0,s.kt)("td",{parentName:"tr",align:null},"Sending message method"),(0,s.kt)("td",{parentName:"tr",align:null},"Function"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"-")))))}x.isMDXComponent=!0},3094:function(){},6601:function(){},9214:function(){},5568:function(){}}]);