(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[2797],{9951:function(e,t,n){"use strict";n.d(t,{A:function(){return k}});var a=n(7294),o=n(1262),r=n(4184),l=n.n(r),i="code-lineout_cZQd",s="code-box-demo_X7Ez",c="code-box-meta_GVCM",p="code-box-title_sfQs",u="code-box-description_bhuL",m="code-box-actions_vDQF",d="code-box-show-code_Yemp",g="code-icon_AL8q",f="code-icon-hide_dxEg",h="highlight-wrapper_JnmS",y="highlight-wrapper-hide_pcAC",k=function(e){var t=e.title,n=e.description,r=e.code,k=e.children,b=(0,a.useState)(!0),E=b[0],v=b[1];return a.createElement(o.Z,null,(function(){var e,o,b;return a.createElement("div",{className:i},a.createElement("div",{className:s},k),a.createElement("div",{className:c},a.createElement("div",{className:p},t),a.createElement("div",{className:u},n),r&&a.createElement("div",{className:m},a.createElement("span",{className:d},a.createElement("img",{className:l()(g,(e={},e[f]=E,e)),onClick:function(){return v(!E)},src:"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",alt:""}),a.createElement("img",{className:l()(g,(o={},o[f]=!E,o)),onClick:function(){return v(!E)},src:"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",alt:""})))),r&&a.createElement("div",{className:l()(h,(b={},b[y]=!E,b))},r))}))}},1086:function(e,t,n){"use strict";var a=n(5861),o=n(7757),r=n.n(o),l=n(7294),i=n(1352);t.Z=function(){var e=(0,l.useMemo)((function(){var e=localStorage.getItem("PRIVATE_KEY")||"",t=localStorage.getItem("PUBLIC_KEY")||"",n=localStorage.getItem("userid")||"";return e&&t&&n?{PrivateKey:e,PublicKey:t,userid:n}:null}),[]),t=(0,l.useState)(e),n=t[0],o=t[1],s=(0,l.useState)(null),c=s[0],p=s[1],u=function(){var e=(0,a.Z)(r().mark((function e(){var t,n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("PUBLIC_KEY")||"",n=localStorage.getItem("DID_KEY")||"",e.next=4,i.Client.init({connectUrl:localStorage.getItem("FAST_URL"),app_key:"vAUJTFXbBZRkEDRE",env:"dev",didKey:n,tempPubkey:t});case 4:a=e.sent,localStorage.setItem("FAST_URL",a),p(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{keys:n,fastestUrl:c,init:u,logout:function(){localStorage.setItem("PRIVATE_KEY",""),localStorage.setItem("PUBLIC_KEY",""),localStorage.setItem("DID_KEY",""),localStorage.setItem("userid",""),o(null)},handleLoginEvent:function(e){if(e.data){if("login"===e.type){var t=e.data,n=t.privateKey,a=t.publicKey,r=t.tempPrivateKey,l=t.tempPublicKey,i=t.didKey,s=t.userid,c=t.address,p=t.pubkeyExpiredTimestamp;localStorage.setItem("userid",s),localStorage.setItem("PRIVATE_KEY",r),localStorage.setItem("PUBLIC_KEY",l),localStorage.setItem("WALLET_ADDRESS",c),localStorage.setItem("MAIN_PRIVATE_KEY",n),localStorage.setItem("MAIN_PUBLIC_KEY",a),localStorage.setItem("DID_KEY",i),localStorage.setItem("PUBKEY_EXPIRED_TIMESTAMP",String(p)),o({PrivateKey:r,PublicKey:l,userid:s})}if("register"===e.type){var u=e.data,m=u.privateKey,d=u.publicKey,g=u.address;localStorage.setItem("WALLET_ADDRESS",g),localStorage.setItem("MAIN_PRIVATE_KEY",m),localStorage.setItem("MAIN_PUBLIC_KEY",d)}}}}}},5884:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return y},default:function(){return I},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return E}});var a=n(7462),o=n(3366),r=n(7294),l=n(3905),i=n(9951),s=n(1352),c=n(4137),p=n(1086),u=function(){var e=(0,r.useState)(c.KU.h5),t=e[0],n=e[1],a=(0,p.Z)(),o=a.keys,l=a.init,i=a.fastestUrl,u=a.logout;if((0,r.useEffect)((function(){l(),document.getElementsByTagName("body")[0].setAttribute("data-theme","light")}),[]),!o)return r.createElement(c.zx,{size:"large",type:"ghost"},r.createElement("a",{href:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#basic-usage",style:{textDecoration:"none"}},"Please login first"));if(!i)return null;var m=s.Client.getInstance(o);return r.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center",flexDirection:"column"}},r.createElement(c.zx,{size:"large",type:"ghost",onClick:function(){t===c.KU.h5?n(c.KU.pc):n(c.KU.h5)},style:{marginBottom:"10px"}},"update appType"),r.createElement("div",{id:"box",style:{position:"relative",border:"1px solid #f2f2f2",width:"100%",height:"370px",overflow:"auto"}},r.createElement(c.en,{containerId:"box",client:m,appType:t,logout:u},r.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",height:"100%",width:"88px",borderRight:"1px solid rgba(0,0,0,.06)"}},r.createElement(c.NZ,{AvatarNode:"pc"===t?r.createElement(c.qE,{name:"user",size:56}):void 0,isTab:"h5"===t,hasLogout:!0})))))},m=["components"],d={toc:[]};function g(e){var t=e.components,n=(0,o.Z)(e,m);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useEffect, useState } from 'react';\nimport { Client } from '@web3mq/client';\nimport { AppTypeEnum, Avatar, Button, Chat, LoginModal, Profile } from '@web3mq/react-components';\n\nimport useLogin from './hooks/useLogin';\n\nexport const ProfileExample: React.FC = () => {\n  const [appType, setAppType] = useState(AppTypeEnum['h5']);\n  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();\n\n  useEffect(() => {\n    init();\n    document.body.setAttribute('data-theme', 'light');\n  }, [])\n\n  if (!keys) {\n    return (\n       <LoginModal \n        appType={AppTypeEnum.pc}\n        handleLoginEvent={handleLoginEvent}\n        loginBtnNode={<Button size='large' type='ghost'>login</Button>}\n      />\n    );\n  }\n  if (!fastestUrl) {\n    return null;\n  }\n\n  const client = Client.getInstance(keys);\n\n  return (\n    <Chat client={client} appType={appType} logout={logout}>\n      <Profile \n        AvatarNode={appType === 'pc' ? <Avatar name=\"user\" size={56} /> : undefined}\n        isTab={appType === 'h5' ? true : false} \n        hasLogout \n      />\n    </Chat>\n  );\n};\n")))}g.isMDXComponent=!0;var f=["components"],h={},y="Profile",k={unversionedId:"Web3MQ-UI-Components/Web3MQ-React/chatComponent/Profile",id:"Web3MQ-UI-Components/Web3MQ-React/chatComponent/Profile",title:"Profile",description:"Profile is a component that displays display userinfo.",source:"@site/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Profile.md",sourceDirName:"Web3MQ-UI-Components/Web3MQ-React/chatComponent",slug:"/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Profile",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Profile",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DashBoard",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/DashBoard"},next:{title:"Avatar",permalink:"/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Avatar"}},b={},E=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"API",id:"api",level:2},{value:"Profile",id:"profile-1",level:3}],v={toc:E};function I(e){var t=e.components,n=(0,o.Z)(e,f);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"profile"},"Profile"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Profile")," is a component that displays display userinfo. "),(0,l.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"Profile")," gets userinfo through ",(0,l.kt)("inlineCode",{parentName:"p"},"useChatcontext")," and displays it. You can also display it by passing the userInfo as props."),(0,l.kt)(i.A,{title:"Example",description:"This is the Profile example",code:(0,l.kt)(g,{mdxType:"ProfileMdx"}),mdxType:"Layout"},(0,l.kt)(u,{mdxType:"ProfileExample"})),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"profile-1"},"Profile"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AvatarNode"),(0,l.kt)("td",{parentName:"tr",align:null},"set the custom avatar part when appType is 'pc'"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isTab"),(0,l.kt)("td",{parentName:"tr",align:null},"sets the display of the back button"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hasLogout"),(0,l.kt)("td",{parentName:"tr",align:null},"set the display of exit button"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"set userinfo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#commonuserinfotype"},"CommonUserInfoType")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))))}I.isMDXComponent=!0},3094:function(){},6601:function(){},9214:function(){},5568:function(){}}]);