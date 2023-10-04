"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[6506],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8162:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={position:2},p="DappConnect",c={unversionedId:"Web3MQ-SDK/JS-SDK/dappConnect/dappConnect",id:"Web3MQ-SDK/JS-SDK/dappConnect/dappConnect",title:"DappConnect",description:"Methods",source:"@site/docs/Web3MQ-SDK/JS-SDK/dappConnect/dappConnect.md",sourceDirName:"Web3MQ-SDK/JS-SDK/dappConnect",slug:"/Web3MQ-SDK/JS-SDK/dappConnect/",permalink:"/docs/Web3MQ-SDK/JS-SDK/dappConnect/",tags:[],version:"current",frontMatter:{position:2},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/docs/Web3MQ-SDK/JS-SDK/client/"},next:{title:"Register",permalink:"/docs/Web3MQ-SDK/JS-SDK/auth/"}},d={},s=[{value:"Methods",id:"methods",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Methods",id:"methods-1",level:2},{value:"getConnectLink()",id:"getconnectlink",level:3},{value:"sendSign()",id:"sendsign",level:3},{value:"usage",id:"usage",level:2},{value:"React Demo",id:"react-demo",level:2}],u={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dappconnect"},"DappConnect"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameters Description"),(0,i.kt)("th",{parentName:"tr",align:null},"response"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"getConnectLink"),(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sendSign"),(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/Web3MQ-SDK/JS-SDK/types/#dappconnectsignparams"},"DappConnectSignParams")),(0,i.kt)("td",{parentName:"tr",align:null},"Promise: void")))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"init() see: ",(0,i.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/client/#init"},"init"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Client.initDappConnectClient() see: ",(0,i.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/client/#initdappconnectclient"},"initDappConnectClient"))),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"getconnectlink"},"getConnectLink()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Create wallet connect deep link")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Client } from "@web3mq/client";\nawait Client.init({\n  connectUrl: "example url", // The fastURL you saved to local\n  app_key: "app_key", // Appkey applied from our team\n  env: "test", // The default is the test environment\n  tempPubkey, // After login get temp public key\n  didKey, // did_key:did_value  eg: eth:0x00000000123123;\n});\nClient.initDappConnectClient({ dAppID: "SwapChat:im" }, handleWeb3mqCallback);\n\nconst deepLink = Client.dappConnectClient.getConnectLink();\nconsole.log(deepLink);\n')),(0,i.kt)("h3",{id:"sendsign"},"sendSign()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Evoke the wallet to send a signature request")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Client } from "@web3mq/client";\nawait Client.init({\n  connectUrl: "example url", // The fastURL you saved to local\n  app_key: "app_key", // Appkey applied from our team\n  env: "test", // The default is the test environment\n  tempPubkey, // After login get temp public key\n  didKey, // did_key:did_value  eg: eth:0x00000000123123;\n});\nClient.initDappConnectClient({ dAppID: "SwapChat:im" }, handleWeb3mqCallback);\n\nawait Client.dappConnectClient.sendSign({\n  signContent,\n  didValue: address,\n  signType: signAuditType,\n});\n')),(0,i.kt)("h2",{id:"usage"},"usage"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"call ",(0,i.kt)("inlineCode",{parentName:"li"},"Client.initDappConnectClient")," init client"),(0,i.kt)("li",{parentName:"ol"},"call ",(0,i.kt)("inlineCode",{parentName:"li"},"Client.dappConnectClient.getConnectLink()")," get deepLink and connect wallet"),(0,i.kt)("li",{parentName:"ol"},"call ",(0,i.kt)("inlineCode",{parentName:"li"},"Client.dappConnectClient.sendSign()")," send a sign request to wallet")),(0,i.kt)("h2",{id:"react-demo"},"React Demo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { Client } from "@web3mq/client";\nimport QRCode from "qrcode";\n\nconst Main: React.FC = () => {\n  const [qrCodeUrl, setQrCodeUrl] = useState("");\n  const [address, setAddress] = useState("");\n\n  const generateQrCode = async (text: string) => {\n    try {\n      return await QRCode.toDataURL(text);\n    } catch (err: any) {\n      throw new Error(err.message);\n    }\n  };\n  const handleWeb3mqCallback = async (event: any) => {\n    console.log(event, "event");\n    const { type, data } = event;\n    if (type === "connect") {\n      if (data === "success") {\n        const link = Client.dappConnectClient.getConnectLink();\n        const qrCodeImg = await generateQrCode(link);\n        setQrCodeUrl(qrCodeImg);\n      }\n    }\n\n    if (type === "dapp-connect") {\n      if (data) {\n        if (data.action === "connectResponse" && data.walletInfo) {\n          setAddress(data.walletInfo.address);\n        }\n        if (data.action === "signResponse" && data.approve) {\n          console.log(data);\n        }\n      }\n    }\n  };\n\n  const init = async () => {\n    const fastUrl = await Client.init({\n      connectUrl: localStorage.getItem("FAST_URL"),\n      app_key: "vAUJTFXbBZRkEDRE",\n      env: "dev",\n    });\n    Client.initDappConnectClient(\n      { dAppID: "SwapChat:im" },\n      handleWeb3mqCallback\n    );\n  };\n  const testSign = async () => {\n    await Client.dappConnectClient.sendSign({\n      didValue: address,\n      signType: "test",\n      signContent: "123123",\n    });\n  };\n\n  return (\n    <div>\n      <button onClick={init}>init</button>\n      <button onClick={testSign}>test Sign</button>\n      <div>\n        <h2>{address}</h2>\n        {qrCodeUrl && (\n          <img\n            src={qrCodeUrl}\n            style={{ width: "200px", height: "200px" }}\n            alt=""\n          />\n        )}\n      </div>\n    </div>\n  );\n};\nexport default Main;\n')))}m.isMDXComponent=!0}}]);