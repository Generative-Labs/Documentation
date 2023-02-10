"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[2301],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={sidebar_position:1,title:"2. MetaMask Signing",order:3,group:{title:"Quickstart"}},l=void 0,c={unversionedId:"Web3MQ-API/quickstart/Signing_data_with_MetaMask",id:"Web3MQ-API/quickstart/Signing_data_with_MetaMask",title:"2. MetaMask Signing",description:"Signing data with MetaMask",source:"@site/docs/Web3MQ-API/quickstart/Signing_data_with_MetaMask.md",sourceDirName:"Web3MQ-API/quickstart",slug:"/Web3MQ-API/quickstart/Signing_data_with_MetaMask",permalink:"/docs/Web3MQ-API/quickstart/Signing_data_with_MetaMask",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"2. MetaMask Signing",order:3,group:{title:"Quickstart"}},sidebar:"tutorialSidebar",previous:{title:"1. Generate key pairs",permalink:"/docs/Web3MQ-API/quickstart/Generate_Key_pairs"},next:{title:"3. User Login",permalink:"/docs/Web3MQ-API/quickstart/User_login"}},u={},d=[{value:"Signing data with MetaMask",id:"signing-data-with-metamask",level:2},{value:"MetaMask signing example",id:"metamask-signing-example",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"signing-data-with-metamask"},"Signing data with MetaMask"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"signing your ed25519 public key and your wallet address use MetaMask")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Get your eth wallet address")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { MetaMaskAccountApp } from 'Web3MQ-Docs';\n\nexport default () => <MetaMaskAccountApp />;\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Code Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const getEthAccount = async () => {\n  let res = {\n    address: '',\n    balance: 0,\n    shortAddress: '',\n  };\n  let reqParams = {\n    method: 'wallet_requestPermissions',\n    params: [{ eth_accounts: {} }],\n  };\n  // @ts-ignore\n  const requestPermissionsRes = await window.ethereum\n    .request(reqParams)\n    .catch((e: any) => {\n      console.log(e, 'e');\n    });\n\n  if (!requestPermissionsRes) return res;\n  try {\n    //@ts-ignore\n    let address = await window.ethereum.request({\n      method: 'eth_accounts',\n    });\n    if (address && address.length > 0) {\n      res.address = address[0];\n      let strLength = address[0].length;\n      res.shortAddress =\n        address[0].substring(0, 5) +\n        '...' +\n        address[0].substring(strLength - 4, strLength);\n\n      //@ts-ignore\n      let balance = await window.ethereum.request({\n        method: 'eth_getBalance',\n        params: [address[0], 'latest'],\n      });\n      if (balance) {\n        let realMoney = balance.toString(10);\n        res.balance = realMoney / 1000000000000000000;\n      }\n    }\n  } catch (e) {\n    console.log(e);\n  }\n  return res;\n};\n\nlet ethAccount = await getEthAccount();\nethWalletAddress = ethAccount.address;\n")),(0,s.kt)("h2",{id:"metamask-signing-example"},"MetaMask signing example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install js-sha3\n# or\nyarn add js-sha3\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { sha3_224 } from 'js-sha3';\n\nconst { PrivateKey, PublicKey } = await GenerateEd25519KeyPair();\n// \u26a0\ufe0f Keep your private key in safe place\n\nlet ed25519_pubkey = PublicKey;\nlet userid = 'user:' + ed25519_pubkey;\n\nlet wallet_address = 'your wallet address';\nlet wallet_type = 'eth';\n\nlet timestamp = Date.now();\n\nlet NonceContent = sha3_224(\n  userid + wallet_address + wallet_type + ed25519_pubkey + timestamp.toString(),\n);\n\nlet your_domain_url = 'https://www.web3mq.com';\n\nlet signContent = `Web3MQ wants you to sign in with your Ethereum account:\n${wallet_address}\nFor Web3MQ registration\nURI: ${your_domain_url}\nVersion: 1\n\nNonce: ${NonceContent}\nIssued At: ${moment().utc().local().format('DD/MM/YYYY hh:mm')}`;\n\n// @ts-ignore metamask signature\nconst signature = await window.ethereum.request({\n  method: 'personal_sign',\n  params: [signContent, wallet_address, 'web3mq'],\n});\n\nlet payload = {\n  userid: userid,\n  pubkey: ed25519_pubkey,\n  signature: signature,\n  sign_content: signContent,\n  wallet_address: wallet_address,\n  wallet_type: 'eth',\n  timestamp: timestamp,\n};\n")))}m.isMDXComponent=!0}}]);