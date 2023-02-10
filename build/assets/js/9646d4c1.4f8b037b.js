(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[2556],{9951:function(t,e,n){"use strict";n.d(e,{A:function(){return k}});var a=n(7294),i=n(1262),o=n(4184),r=n.n(o),l="code-lineout_cZQd",s="code-box-demo_X7Ez",c="code-box-meta_GVCM",p="code-box-title_sfQs",m="code-box-description_bhuL",u="code-box-actions_vDQF",d="code-box-show-code_Yemp",f="code-icon_AL8q",g="code-icon-hide_dxEg",N="highlight-wrapper_JnmS",h="highlight-wrapper-hide_pcAC",k=function(t){var e=t.title,n=t.description,o=t.code,k=t.children,y=(0,a.useState)(!0),v=y[0],b=y[1];return a.createElement(i.Z,null,(function(){var t,i,y;return a.createElement("div",{className:l},a.createElement("div",{className:s},k),a.createElement("div",{className:c},a.createElement("div",{className:p},e),a.createElement("div",{className:m},n),o&&a.createElement("div",{className:u},a.createElement("span",{className:d},a.createElement("img",{className:r()(f,(t={},t[g]=v,t)),onClick:function(){return b(!v)},src:"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",alt:""}),a.createElement("img",{className:r()(f,(i={},i[g]=!v,i)),onClick:function(){return b(!v)},src:"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",alt:""})))),o&&a.createElement("div",{className:r()(N,(y={},y[h]=!v,y))},o))}))}},1086:function(t,e,n){"use strict";var a=n(5861),i=n(7757),o=n.n(i),r=n(7294),l=n(1352);e.Z=function(){var t=(0,r.useMemo)((function(){var t=localStorage.getItem("PRIVATE_KEY")||"",e=localStorage.getItem("PUBLIC_KEY")||"",n=localStorage.getItem("userid")||"";return t&&e&&n?{PrivateKey:t,PublicKey:e,userid:n}:null}),[]),e=(0,r.useState)(t),n=e[0],i=e[1],s=(0,r.useState)(null),c=s[0],p=s[1],m=function(){var t=(0,a.Z)(o().mark((function t(){var e,n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("PUBLIC_KEY")||"",n=localStorage.getItem("DID_KEY")||"",t.next=4,l.Client.init({connectUrl:localStorage.getItem("FAST_URL"),app_key:"vAUJTFXbBZRkEDRE",env:"dev",didKey:n,tempPubkey:e});case 4:a=t.sent,localStorage.setItem("FAST_URL",a),p(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{keys:n,fastestUrl:c,init:m,logout:function(){localStorage.setItem("PRIVATE_KEY",""),localStorage.setItem("PUBLIC_KEY",""),localStorage.setItem("DID_KEY",""),localStorage.setItem("userid",""),i(null)},handleLoginEvent:function(t){if(t.data){if("login"===t.type){var e=t.data,n=e.privateKey,a=e.publicKey,o=e.tempPrivateKey,r=e.tempPublicKey,l=e.didKey,s=e.userid,c=e.address,p=e.pubkeyExpiredTimestamp;localStorage.setItem("userid",s),localStorage.setItem("PRIVATE_KEY",o),localStorage.setItem("PUBLIC_KEY",r),localStorage.setItem("WALLET_ADDRESS",c),localStorage.setItem("MAIN_PRIVATE_KEY",n),localStorage.setItem("MAIN_PUBLIC_KEY",a),localStorage.setItem("DID_KEY",l),localStorage.setItem("PUBKEY_EXPIRED_TIMESTAMP",String(p)),i({PrivateKey:o,PublicKey:r,userid:s})}if("register"===t.type){var m=t.data,u=m.privateKey,d=m.publicKey,f=m.address;localStorage.setItem("WALLET_ADDRESS",f),localStorage.setItem("MAIN_PRIVATE_KEY",u),localStorage.setItem("MAIN_PUBLIC_KEY",d)}}}}}},8258:function(t,e,n){"use strict";n.r(e),n.d(e,{assets:function(){return y},contentTitle:function(){return h},default:function(){return E},frontMatter:function(){return N},metadata:function(){return k},toc:function(){return v}});var a=n(7462),i=n(3366),o=n(7294),r=n(3905),l=n(9951),s=n(1352),c=n(4137),p=n(1086),m=function(){var t=(0,p.Z)(),e=t.keys,n=t.init,a=t.fastestUrl,i=t.logout;if((0,o.useEffect)((function(){n(),document.getElementsByTagName("body")[0].setAttribute("data-theme","light")}),[]),!e)return o.createElement(c.zx,{size:"large",type:"ghost"},o.createElement("a",{href:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#basic-usage",style:{textDecoration:"none"}},"Please login first"));if(!a)return null;var r=s.Client.getInstance(e);return o.createElement("div",{id:"box",style:{position:"relative",border:"1px solid #f2f2f2",width:"100%",height:"300px",overflow:"auto"}},o.createElement(c.en,{client:r,appType:c.KU.h5,logout:i},o.createElement(c.xG,null)))},u=["components"],d={toc:[]};function f(t){var e=t.components,n=(0,i.Z)(t,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useEffect } from 'react';\nimport { Client } from '@web3mq/client';\nimport { \n  AppTypeEnum, \n  Button,\n  Chat, \n  NotificationList\n} from '@web3mq/react-components';\n\nimport useLogin from './hooks/useLogin';\n\nexport const NotificationListExample: React.FC = () => {\n  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();\n\n  useEffect(() => {\n    init();\n    document.body.setAttribute('data-theme', 'light');\n  }, [])\n\n  if (!keys) {\n    return (\n       <LoginModal \n        appType={AppTypeEnum.pc}\n        handleLoginEvent={handleLoginEvent}\n        loginBtnNode={<Button size='large' type='ghost'>login</Button>}\n      />\n    );\n  }\n  if (!fastestUrl) {\n    return null;\n  }\n\n  const client = Client.getInstance(keys);\n\n  return (\n    <div id='box' style={{position: 'relative'}}>\n      <Chat client={client} appType={AppTypeEnum['h5']} logout={logout}>\n        <NotificationList />\n      </Chat>\n    </div>\n  );\n};\n")))}f.isMDXComponent=!0;var g=["components"],N={sidebar_position:8},h="NotificationList",k={unversionedId:"Web3MQ-UI-Components/Web3MQ-React/chatComponent/NotificationList",id:"Web3MQ-UI-Components/Web3MQ-React/chatComponent/NotificationList",title:"NotificationList",description:"NotificationList, which renders the current list when other users send you friend requests, follow you, invite you to groups, subscribe to topics and post content. And must be nested as children of Chat to maintain proper functionality.",source:"@site/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/NotificationList.md",sourceDirName:"Web3MQ-UI-Components/Web3MQ-React/chatComponent",slug:"/Web3MQ-UI-Components/Web3MQ-React/chatComponent/NotificationList",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/NotificationList",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"MessageConsole",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageConsole"},next:{title:"Notify",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Notify"}},y={},v=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"API",id:"api",level:2},{value:"NotificationList",id:"notificationlist-1",level:3},{value:"NotificationPreview",id:"notificationpreview",level:3}],b={toc:v};function E(t){var e=t.components,n=(0,i.Z)(t,g);return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notificationlist"},"NotificationList"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NotificationList"),", which renders the current list when other users send you friend requests, follow you, invite you to groups, subscribe to topics and post content. And must be nested as children of Chat to maintain proper functionality."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can try to get other users to follow you or send you friend requests to get the notification list to show content."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NotificationList")," UI is determined by two of its props, ",(0,r.kt)("inlineCode",{parentName:"p"},"Notification")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EmptyContaniner")," . The Notification prop dictates the design and click functionality of an individual notification in the list.The EmptyContainer prop allows you to customize the container when NotificationList is empty. If not provided via props, these UI components will render the default style. Each item will trigger ",(0,r.kt)("inlineCode",{parentName:"p"},"setActiveNotification")," when clicked"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { setActiveNotification } = useChat('NotificationList');\n")),(0,r.kt)(l.A,{title:"Example",description:"This is the NotificationList example",code:(0,r.kt)(f,{mdxType:"NotificationListMdx"}),mdxType:"Layout"},(0,r.kt)(m,{mdxType:"NotificationListExample"})),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"notificationlist-1"},"NotificationList"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The properties of the NotificationList are described as follows:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Notification"),(0,r.kt)("td",{parentName:"tr",align:null},"set your custom Notification in list"),(0,r.kt)("td",{parentName:"tr",align:null},"React.ComponentType"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EmptyContaniner"),(0,r.kt)("td",{parentName:"tr",align:null},"displays an empty list of components"),(0,r.kt)("td",{parentName:"tr",align:null},"React.ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h3",{id:"notificationpreview"},"NotificationPreview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The properties of the NotificationPreview are described as follows:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client"),(0,r.kt)("td",{parentName:"tr",align:null},"Client Instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/client/"},"Client")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notification"),(0,r.kt)("td",{parentName:"tr",align:null},"notification content in list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#notifyresponse"},"NotifyResponse")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"info about the user who pushed the notification to me"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#commonuserinfotype"},"CommonUserInfoType")," ","|"," undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setActiveNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"set the current notification as active"),(0,r.kt)("td",{parentName:"tr",align:null},"React.Dispatch"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))))}E.isMDXComponent=!0},3094:function(){},6601:function(){},9214:function(){},5568:function(){}}]);