"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[3602],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,g=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={position:1},c="QuickStart",l={unversionedId:"Web3MQ-SDK/JS-SDK/quickStart/quickStart",id:"Web3MQ-SDK/JS-SDK/quickStart/quickStart",title:"QuickStart",description:"Let's learn how to use and successfully send the first message in the chat room we created",source:"@site/docs/Web3MQ-SDK/JS-SDK/quickStart/quickStart.md",sourceDirName:"Web3MQ-SDK/JS-SDK/quickStart",slug:"/Web3MQ-SDK/JS-SDK/quickStart/",permalink:"/docs/Web3MQ-SDK/JS-SDK/quickStart/",tags:[],version:"current",frontMatter:{position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/Web3MQ-SDK/JS-SDK/Intro"},next:{title:"Intro",permalink:"/docs/Web3MQ-SDK/JS-SDK/authorization/Intro"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Install",id:"install",level:2},{value:"Connect MetaMask",id:"connect-metamask",level:2},{value:"Code",id:"code",level:4},{value:"Register Web2MQ user",id:"register-web2mq-user",level:2},{value:"Code",id:"code-1",level:4},{value:"Create Web2MQ client connection",id:"create-web2mq-client-connection",level:2},{value:"Get Parameters",id:"get-parameters",level:3},{value:"Code",id:"code-2",level:4},{value:"Initialize the client with parameters",id:"initialize-the-client-with-parameters",level:3},{value:"or",id:"or",level:4},{value:"Initialize the client with login token",id:"initialize-the-client-with-login-token",level:3},{value:"Create Web2MQ chat room and send message",id:"create-web2mq-chat-room-and-send-message",level:2},{value:"Code",id:"code-3",level:4}],m={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"QuickStart"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Let's learn how to use and successfully send the first message in the chat room we created")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install MetaMask extension"),(0,o.kt)("li",{parentName:"ol"},"Install package"),(0,o.kt)("li",{parentName:"ol"},"Register Web2MQ user if you are not"),(0,o.kt)("li",{parentName:"ol"},"Create Web2MQ client connection"),(0,o.kt)("li",{parentName:"ol"},"Create Web2MQ chat room"),(0,o.kt)("li",{parentName:"ol"},"Send message")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install web3-mq\nor\nyarn add web3-mq\n")),(0,o.kt)("h2",{id:"connect-metamask"},"Connect MetaMask"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Connect MetaMask get your eth wallet")),(0,o.kt)("h4",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// request permissions and get your wallet address\nasync function getEthAccount() {\n  let res = '';\n  // first request permission\n  const requestPermissionsRes = await window.ethereum\n    .request({\n      method: 'wallet_requestPermissions',\n      params: [{ eth_accounts: {} }],\n    })\n    .catch((e: any) => {\n      console.log(e, 'e');\n    });\n  if (!requestPermissionsRes) return null;\n  // call func to connect MetaMask and get your account\n  try {\n    let address = await window.ethereum.request({\n      method: 'eth_accounts',\n    });\n    if (address && address.length > 0) {\n      res = address[0];\n    }\n  } catch (e) {\n    console.log(e);\n  }\n  return res;\n}\n\ngetEthAccount();\n")),(0,o.kt)("h2",{id:"register-web2mq-user"},"Register Web2MQ user"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"call ",(0,o.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/utils/#register"},"register()"))),(0,o.kt)("h4",{id:"code-1"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Web2MQ } from 'web3-mq';\n\nconst { register } = Web2MQ;\n\nasync function registerUser() {\n  const data = await register({\n    platform: 'opensea',\n    username: '0x000000000',\n  });\n  return data;\n}\nregisterUser();\n")),(0,o.kt)("h2",{id:"create-web2mq-client-connection"},"Create Web2MQ client connection"),(0,o.kt)("h3",{id:"get-parameters"},"Get Parameters"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"call ",(0,o.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/quickStart/#connect-metamask"},"Connect MeatMask"),"\ncall ",(0,o.kt)("a",{parentName:"p",href:"/docs/Web3MQ-SDK/JS-SDK/utils/#getloginrandomsecret"},"getLoginRandomSecret()"))),(0,o.kt)("h4",{id:"code-2"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Web2MQ } from 'web3-mq';\n\nconst { login, getLoginRandomSecret } = Web2MQ;\n\nasync function getParams() {\n  const address = ethereum.selectedAddress; //  call Connect MeatMask\n  // call getLoginRandomSecret\n  const randomSecret = await getLoginRandomSecret({\n    wallet_address: address,\n  });\n\n  const msg = `0x${Buffer.from(randomSecret, 'utf8').toString('hex')}`;\n  let signContent = `Web3MQ wants you to sign in with your Ethereum account:\n${address}\nSign-In With Ethereum Example Statement\nURI: https://swapchat.me\nVersion: 1\nChain ID: 1\nNonce: ${msg}\nIssued At: 2022-05-23T12:52:57.500Z\nExpiration Time: 2022-05-25T12:52:57.489Z`;\n  // @ts-ignore\n  const signature = await ethereum.request({\n    method: 'personal_sign',\n    params: [signContent, address, 'swapchat'],\n  });\n\n  return {\n    login_random_secret: randomSecret,\n    wallet_address: address,\n    signature,\n  };\n}\ngetParams();\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There are two ways to init client")),(0,o.kt)("h3",{id:"initialize-the-client-with-parameters"},"Initialize the client with parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Web2MQ } from 'web3-mq';\n\nconst client = Web2MQ.Client.getInstance({\n  login_random_secret: randomSecret,\n  wallet_address: address,\n  signature,\n});\n")),(0,o.kt)("h4",{id:"or"},"or"),(0,o.kt)("h3",{id:"initialize-the-client-with-login-token"},"Initialize the client with login token"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Web2MQ } from "web3-mq";\n\nconst {login} = Web2MQ;\n\nconst  data = await login({\n  login_random_secret: randomSecret,\n  wallet_address: address,\n  signature,\n})\nconst client = Web2MQ.Client.getInstance(token: data.access_token);\n')),(0,o.kt)("h2",{id:"create-web2mq-chat-room-and-send-message"},"Create Web2MQ chat room and send message"),(0,o.kt)("h4",{id:"code-3"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Web2MQ } from 'web3-mq';\n\nconst { login } = Web2MQ;\n\nconst client = Web2MQ.getInstance('YOUR_ACCESS_TOKEN');\n\nasync function testSend() {\n  // 1st: Find a person you want to talk to\n  // Eg: SwapChatNFT's twitter\n  const data = await register({\n    platform: 'twitter',\n    username: 'SwapChatNFT',\n  });\n\n  // 2nd: Create room and set avtive room\n  await client.channel.createRoom({\n    user_id: data.user_id,\n  });\n\n  // 3rd: Get active room from client context\n  const activeRoom = client.channel.active;\n  // 4th: send a message to active room\n  client.send(hello, false);\n}\n\ntestSend();\n")))}p.isMDXComponent=!0}}]);