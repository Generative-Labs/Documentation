"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[6048],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2511:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,title:"User Register",order:1,group:{title:"User",order:1}},o="User Register",u={unversionedId:"Web3MQ-API/user/user_register_v2",id:"Web3MQ-API/user/user_register_v2",title:"User Register",description:"- Generate Wallet signature",source:"@site/docs/Web3MQ-API/user/user_register_v2.md",sourceDirName:"Web3MQ-API/user",slug:"/Web3MQ-API/user/user_register_v2",permalink:"/docs/Web3MQ-API/user/user_register_v2",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"User Register",order:1,group:{title:"User",order:1}},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Web3MQ-API/user/"},next:{title:"User Login",permalink:"/docs/Web3MQ-API/user/user_login_v2"}},p={},d=[{value:"Generate Wallet signature",id:"generate-wallet-signature",level:2},{value:"Register API",id:"register-api",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"user-register"},"User Register"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generate Wallet signature",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Signing secret data(your password and other info) with Wallet (MetaMask/StarkNet)"))),(0,l.kt)("li",{parentName:"ul"},"Generate Ed25519 key pair use wallet signature which call Main KeyPair")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// import nacl, { BoxKeyPair } from 'tweetnacl';\nimport * as ed from '@noble/ed25519';\n\nimport jssha256 from 'js-sha256';\n\nfunction sha256(data: string | Uint8Array): Uint8Array {\n  return new Uint8Array(jssha256.sha256.digest(data));\n}\n\nlet wallet_type = 'eth'; // if use another wallet StartkNet wallet_type equal startkent\nlet wallet_address = '<your wallet_address>';\nlet keyIndex = 1;\nlet password = '<your enter password>';\nlet keyMSG = `${wallet_type}:${wallet_address}${keyIndex}${password}`;\n\nconst magicString = new TextEncoder().encode(\n  sha3_224_hash(`$web3mq${keyMSG}web3mq$`),\n);\n// magicString need format to Base64String;\n\nlet signContent = `Signing this message will allow this app to decrypt messages in the Web3MQ protocol for the following address: ${wallet_address}. This won\u2019t cost you anything.\n\nIf your Web3MQ wallet-associated password and this signature is exposed to any malicious app, this would result in exposure of Web3MQ account access and encryption keys, and the attacker would be able to read your messages.\n\nIn the event of such an incident, don\u2019t panic. You can call Web3MQ\u2019s key revoke API and service to revoke access to the exposed encryption key and generate a new one!\n\nNonce: ${magicString}`;\n\n// get wallet signing result call wallet_signing\nlet secretKey = sha256(wallet_signing(signContent)); // format to bytes;\n\nif (secretKey.length !== 32) {\n  // ed25519\n  throw new Error('Secret key must have 32 bytes');\n}\n\nlet privateKey = secretKey;\nlet pubkey = await ed.getPublicKey(privateKey);\n\n// We recommend use AES-GCM 256   encrypt private key protect user's privateKey;\n\n// symmetricEncrypt(secretKey, sha256(password));\n")),(0,l.kt)("h2",{id:"generate-wallet-signature"},"Generate Wallet signature"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signing secret data(your password and other info) with Wallet (MetaMask/StarkNet)")),(0,l.kt)("h2",{id:"register-api"},"Register API"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"POST")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/user_register_v2/"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters in Body"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"userid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"did_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"eth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"did_value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"wallet address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp milliseconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"did_signature"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"metamask_signature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signature_content"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"signature_content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pubkey_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"ed25519")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pubkey_value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"pubkey_value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nickname"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nickname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar_url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"avatar_url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testnet_access_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"testnet_access_key")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// NonceContent = contact string and sha3_224 hash\nNonceContent = sha3_224 hash(userid + pubkey_type + pubkey_value + did_type + did_value +  timestamp)\n\nlet signature_content = `Web3MQ wants you to sign in with your Ethereum account:\n${wallet_address}\nFor Web3MQ login\nURI: ${your_domain_url}\nVersion: 1\n\nNonce: ${NonceContent}\nIssued At: ${moment().utc().local().format('DD/MM/YYYY hh:mm')}`;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testnet_access_key": "testnet_access_key",\n\n  "userid": "user:3fasdf324234",\n  "did_type": "eth",\n  "did_value": "0x123456",\n  "did_signature": "<your wallet signature>",\n  "sign_content": "<your wallet signature_content>",\n  "pubkey_value": "pubkey",\n  "pubkey_type": "ed25519",\n  "timestamp": 160000000,\n\n  "nickename": "nickename",\n  "avatar_url": "avatar_url"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Always Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result code, 0 means success, other code see msg's contents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"dict"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"return includes response info")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 0,\n  "msg": "ok",\n  "data": {\n    "userid": "userid",\n    "did_value": "wallet_address",\n    "did_type": "eth"\n  }\n}\n')))}c.isMDXComponent=!0}}]);