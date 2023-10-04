"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[2954],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6948:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],l={position:7},o="User",p={unversionedId:"Web3MQ-SDK/JS-SDK/user/user",id:"Web3MQ-SDK/JS-SDK/user/user",title:"User",description:"Methods",source:"@site/docs/Web3MQ-SDK/JS-SDK/user/user.md",sourceDirName:"Web3MQ-SDK/JS-SDK/user",slug:"/Web3MQ-SDK/JS-SDK/user/",permalink:"/docs/Web3MQ-SDK/JS-SDK/user/",tags:[],version:"current",frontMatter:{position:7},sidebar:"tutorialSidebar",previous:{title:"Contact",permalink:"/docs/Web3MQ-SDK/JS-SDK/contact/"},next:{title:"Notify",permalink:"/docs/Web3MQ-SDK/JS-SDK/notify/"}},u={},d=[{value:"Methods",id:"methods",level:2},{value:"Permission",id:"permission",level:2},{value:"UserChatPermissionsType",id:"userchatpermissionstype",level:3},{value:"UserPermissionsType",id:"userpermissionstype",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init and get Client",id:"init-and-get-client",level:3},{value:"Methods",id:"methods-1",level:2},{value:"searchUsers",id:"searchusers",level:3},{value:"getMyProfile",id:"getmyprofile",level:3},{value:"updateMyProfile",id:"updatemyprofile",level:3},{value:"getUserBindDids",id:"getuserbinddids",level:3},{value:"userBindDid",id:"userbinddid",level:3},{value:"getUserPermissions",id:"getuserpermissions",level:3},{value:"getTargetUserPermissions",id:"gettargetuserpermissions",level:3},{value:"updateUserPermissions",id:"updateuserpermissions",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"user"},"User"),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"name"),(0,s.kt)("th",{parentName:"tr",align:null},"type"),(0,s.kt)("th",{parentName:"tr",align:null},"Parameters Description"),(0,s.kt)("th",{parentName:"tr",align:null},"response"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"searchUsers"),(0,s.kt)("td",{parentName:"tr",align:null},"function"),(0,s.kt)("td",{parentName:"tr",align:null},"walletAddress: string"),(0,s.kt)("td",{parentName:"tr",align:null},"Promise:",(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse"},"SearchUsersResponse"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"getMyProfile"),(0,s.kt)("td",{parentName:"tr",align:null},"function"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"Promise:",(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse"},"SearchUsersResponse"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"updateMyProfile"),(0,s.kt)("td",{parentName:"tr",align:null},"function"),(0,s.kt)("td",{parentName:"tr",align:null},"1.nickname: string 2.avatar_url: string"),(0,s.kt)("td",{parentName:"tr",align:null},"Promise:",(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#updatemyprofileresponse"},"UpdateMyProfileResponse"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"getUserBindDids"),(0,s.kt)("td",{parentName:"tr",align:null},"function"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"Promise:",(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#userbinddididsresponse"},"UserBindDidIdsResponse"),"[ ]")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"userBindDid"),(0,s.kt)("td",{parentName:"tr",align:null},"function"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#userbinddidparams"},"UserBindDidParams")),(0,s.kt)("td",{parentName:"tr",align:null},"Promise:",(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse"},"SearchUsersResponse"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"getUserPermissions"),(0,s.kt)("td",{parentName:"tr",align:null},"function"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"Promise:",(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#userpermissionstype"},"UserPermissionsType"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"getTargetUserPermissions"),(0,s.kt)("td",{parentName:"tr",align:null},"function"),(0,s.kt)("td",{parentName:"tr",align:null},"userid: string"),(0,s.kt)("td",{parentName:"tr",align:null},"Promise:",(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse"},"SearchUsersResponse"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"updateUserPermissions"),(0,s.kt)("td",{parentName:"tr",align:null},"function"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#updateuserpermissionsparams"},"UpdateUserPermissionsParams")),(0,s.kt)("td",{parentName:"tr",align:null},"Promise: ",(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse"},"SearchUsersResponse"))))),(0,s.kt)("h2",{id:"permission"},"Permission"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"User permission currently only has ",(0,s.kt)("inlineCode",{parentName:"p"},"user: chat")," rule, which Indicates the setting of user chat permission. ",(0,s.kt)("inlineCode",{parentName:"p"},"user: chat")," rule has ",(0,s.kt)("inlineCode",{parentName:"p"},"public"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"follower"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"following"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"friends")," values, and its value type is 'enum'"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"1.",(0,s.kt)("inlineCode",{parentName:"li"},"public"),": Everyone can send me messages."),(0,s.kt)("li",{parentName:"ul"},"2.",(0,s.kt)("inlineCode",{parentName:"li"},"follower"),": Only those who follow me can send messages to me."),(0,s.kt)("li",{parentName:"ul"},"3.",(0,s.kt)("inlineCode",{parentName:"li"},"following"),": Only those I follow can send me messages."),(0,s.kt)("li",{parentName:"ul"},"4.",(0,s.kt)("inlineCode",{parentName:"li"},"friends"),": Only those who follow each other can send me messages."))),(0,s.kt)("h3",{id:"userchatpermissionstype"},"UserChatPermissionsType"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"name"),(0,s.kt)("th",{parentName:"tr",align:null},"type"),(0,s.kt)("th",{parentName:"tr",align:null},"format"),(0,s.kt)("th",{parentName:"tr",align:null},"desc"),(0,s.kt)("th",{parentName:"tr",align:null},"eg"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"type"),(0,s.kt)("td",{parentName:"tr",align:null},'"enum"'),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"Chat permission type in user permissions"),(0,s.kt)("td",{parentName:"tr",align:null},'"enum"')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"value"),(0,s.kt)("td",{parentName:"tr",align:null},'"public"',"|",'"follower"',"|",'"following"',"|",'"friends"'),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"Chat permission value in user permissions"),(0,s.kt)("td",{parentName:"tr",align:null},'"public"')))),(0,s.kt)("h3",{id:"userpermissionstype"},"UserPermissionsType"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"name"),(0,s.kt)("th",{parentName:"tr",align:null},"type"),(0,s.kt)("th",{parentName:"tr",align:null},"format"),(0,s.kt)("th",{parentName:"tr",align:null},"desc"),(0,s.kt)("th",{parentName:"tr",align:null},"eg"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"user: chat"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/user/#userchatpermissionstype"},"UserChatPermissionsType")),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"chat permission in user permisson"),(0,s.kt)("td",{parentName:"tr",align:null},'{\'user: chat\': {type: "enum",value: "public"}}')))),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"init() see: ",(0,s.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/client/#init"},"init"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"auth() see: ",(0,s.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/auth/#auth-or-resetpassword"},"register"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"login() see: ",(0,s.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/auth/#login"},"login"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"event see: ",(0,s.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/client/#events-1"},"event"))),(0,s.kt)("h3",{id:"init-and-get-client"},"Init and get Client"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To use the functions of the current module, please complete the following steps first.")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"After successful login, you can get the secret key pair from the returned result"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { useEffect, useState } from 'react';\nimport { Client } from '@web3mq/client'; \n\nexport const App = () => {\n  const [fastestUrl, setFastUrl] = useState<string | null>(null);\n  useEffect(() => {\n    Client.init({\n        connectUrl: '', //\n        app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet\n    }).then(data => {\n      setFastUrl(data);\n    });\n  }, [])\n  if (!fastestUrl) return;\n  const {\n      tempPrivateKey,\n      tempPublicKey,\n      pubkeyExpiredTimestamp,\n      mainPrivateKey,\n      mainPublicKey,\n  } = loginRes\n\n  const keys = {\n      PrivateKey: tempPrivateKey,\n      PublicKey: tempPublicKey,\n      userid: localStorage.getItem('userid')\n  };\n\n  const client = Client.getInstance(keys);\n  return (\n    <Child client={client} />\n  )\n}\n")),(0,s.kt)("h2",{id:"methods-1"},"Methods"),(0,s.kt)("h3",{id:"searchusers"},"searchUsers"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Search for users by wallet address, support eth and starknet.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <button\n      onClick={async () => {\n        const data = await client.user.searchUsers('walletAddress');\n        console.log(data);\n      }}>\n      Search Users\n    </button>\n  );\n};\n")),(0,s.kt)("h3",{id:"getmyprofile"},"getMyProfile"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get my profile.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <div>\n      <button\n        onClick={async () => {\n          const data = await client.user.getMyProfile();\n          console.log(data);\n        }}>\n        Get My Profile\n      </button>\n    </div>\n  );\n};\n")),(0,s.kt)("h3",{id:"updatemyprofile"},"updateMyProfile"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"update my profile, such as nickname and avatar.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <div>\n      <button\n        onClick={async () => {\n          const data = await client.user.updateMyProfile(\n            'nickname',\n            'avatar_url'\n          );\n          console.log(data);\n        }}>\n        Update My Profile\n      </button>\n    </div>\n  );\n};\n")),(0,s.kt)("h3",{id:"getuserbinddids"},"getUserBindDids"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get my bound dids.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <div>\n      <button\n        onClick={async () => {\n          const data = await client.user.getUserBindDids();\n          console.log(data);\n        }}>\n        Get User Bind Dids\n      </button>\n    </div>\n  );\n};\n")),(0,s.kt)("h3",{id:"userbinddid"},"userBindDid"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Bound dids.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <div>\n      <button\n        onClick={async () => {\n          const data = await client.user.userBindDid({\n            provider_id: 'provider_id',\n            did_type: 'did_type',\n            did_value: 'did_value',\n          });\n          console.log(data);\n        }}>\n        User Bind Did\n      </button>\n    </div>\n  );\n};\n")),(0,s.kt)("h3",{id:"getuserpermissions"},"getUserPermissions"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get my user permissions.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <div>\n      <button\n        onClick={async () => {\n          const data = await client.user.getUserPermissions();\n          console.log(data);\n        }}>\n        get my permissions\n      </button>\n    </div>\n  );\n};\n")),(0,s.kt)("h3",{id:"gettargetuserpermissions"},"getTargetUserPermissions"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the user permissions of target users.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <div>\n      <button\n        onClick={async () => {\n          const data = await client.user.getTargetUserPermissions('userid or wallet_address');\n          console.log(data);\n        }}>\n        get other user permissions\n      </button>\n    </div>\n  );\n};\n")),(0,s.kt)("h3",{id:"updateuserpermissions"},"updateUserPermissions"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Change my user permissions.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Client } from '@web3mq/client';\n\ninterface IProps {\n  client: Client;\n}\n\nexport const Child = (props: IProps) => {\n  const { client } = props;\n\n  return (\n    <div>\n      <button\n        onClick={async () => {\n          const data = await client.user.updateUserPermissions({\n            permissions: {\n              'user: chat': {\n                type: \"enum\",\n                value: \"public\"\n              }\n            }\n          });\n          console.log(data);\n        }}>\n        update my permissions\n      </button>\n    </div>\n  );\n};\n")))}m.isMDXComponent=!0}}]);