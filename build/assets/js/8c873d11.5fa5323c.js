"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[6359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"Tutorials/ens/ens",id:"Tutorials/ens/ens",title:"ens",description:"ENS",source:"@site/docs/Tutorials/ens/ens.md",sourceDirName:"Tutorials/ens",slug:"/Tutorials/ens/",permalink:"/docs/Tutorials/ens/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dotbit",permalink:"/docs/Tutorials/dotbit/"},next:{title:"notifications",permalink:"/docs/Tutorials/notifications/"}},l={},c=[{value:"ENS",id:"ens",level:2},{value:"Installation",id:"installation",level:2},{value:"Initialize Client and Connect to Web3MQ Network",id:"initialize-client-and-connect-to-web3mq-network",level:2},{value:"Initialize Client",id:"initialize-client",level:3},{value:"API endpoints",id:"api-endpoints",level:4},{value:"Get ETH address by Ens",id:"get-eth-address-by-ens",level:3},{value:"Sign with wallet to register user and obtain message encryption keys",id:"sign-with-wallet-to-register-user-and-obtain-message-encryption-keys",level:3},{value:"Code",id:"code",level:4},{value:"Get Client Instance",id:"get-client-instance",level:3},{value:"Code",id:"code-1",level:4},{value:"Create room",id:"create-room",level:2},{value:"Code",id:"code-2",level:4},{value:"Send message",id:"send-message",level:2},{value:"Code",id:"code-3",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ens"},"ENS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ENS Tutorials")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"install web3.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install web3\nor\nyarn add web3\n")),(0,r.kt)("p",null,"Install Web3MQ's JS SDK using a package manager of your choice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install web3-mq\nor\nyarn add web3-mq\n")),(0,r.kt)("h2",{id:"initialize-client-and-connect-to-web3mq-network"},"Initialize Client and Connect to Web3MQ Network"),(0,r.kt)("p",null,"In order to connect to the Web3MQ Network, both users and developers authenticate through wallet signatures, we demonstrate below with an Ethereum wallet via Metamask, but Web3MQ is built to be compatible with wallets across different chains."),(0,r.kt)("h3",{id:"initialize-client"},"Initialize Client"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"While we are committed to building an open and collectively owned public good, our early stage testnet requires an API key in order to connect. This is to control capacity to make sure that each early partner and developer is able to build a great experience on top of Web3MQ. ",(0,r.kt)("a",{parentName:"p",href:"https://web3mq.com/apply"},"Apply here"),".")),(0,r.kt)("p",null,"As Web3MQ is a federated network, our default JS SDK client has a method to help you connect to the best node for you."),(0,r.kt)("p",null,"Simply calling Client.init without connectUrl or an empty string returns a url of the best node determined for you, and this url can be stored locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Client } from 'web3-mq';\n\n// You can save the bestEndpointUrl locally to skip endpoint search next time, which will save time, and\nconst bestEndpointUrl = await Client.init({\n  connectUrl: '', //\n  app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet\n});\n")),(0,r.kt)("p",null,"Calling Client.init with a specific connectUrl forces the client to connect to that specific node. When bestEndpointUrl is stored, it might be time-saving to connect directly instead of running the search again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Client } from 'web3-mq';\n\nconst fastUrl = await Client.init({\n  connectUrl: bestEndpointUrl, // takes in a valid endpoint url as input, when this paramter is given, client will always connect to that specific node.\n  app_key: 'app_key', // Appkey applied from our team\n});\n")),(0,r.kt)("h4",{id:"api-endpoints"},"API endpoints"),(0,r.kt)("p",null,"During this initial testing phase, we've hosted complete networks of Web3MQ nodes in different regions around the globe. Connect to these endpoints below, to access the Web3MQ Testnet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet-us-west-1-1.web3mq.com"},"https://testnet-us-west-1-1.web3mq.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet-us-west-1-2.web3mq.com"},"https://testnet-us-west-1-2.web3mq.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet-ap-jp-1.web3mq.com"},"https://testnet-ap-jp-1.web3mq.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet-ap-jp-2.web3mq.com"},"https://testnet-ap-jp-2.web3mq.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet-ap-singapore-1.web3mq.com"},"https://testnet-ap-singapore-1.web3mq.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet-ap-singapore-2.web3mq.com"},"https://testnet-ap-singapore-2.web3mq.com"))),(0,r.kt)("h3",{id:"get-eth-address-by-ens"},"Get ETH address by Ens"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import Web3 from 'web3';\n\nconst web3 = new Web3(window.ethereum);\n\nconst getEthAddressByEns = async () => {\n  const address = await web3.eth.ens.getAddress('alice.eth');\n  console.log(address, 'address');\n  return address;\n};\n")),(0,r.kt)("h3",{id:"sign-with-wallet-to-register-user-and-obtain-message-encryption-keys"},"Sign with wallet to register user and obtain message encryption keys"),(0,r.kt)("p",null,"For any first-time user of Web3MQ's network, you'll need to register on Web3MQ's network. Web3MQ's JS SDK takes care of the key generation process and subsequent wallet signing process. Client.register.signMetaMask is a utility method that does this automatically."),(0,r.kt)("h4",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// get your eth address\nconst address = getEthAddressByEns();\n\n// You must ensure that the Client.init initialization is complete before running this\nconst { PrivateKey, PublicKey } = await Client.register.signMetaMask({\n  signContentURI: 'https://www.web3mq.com', // your signContent URI\n  EthAddress: address,\n});\n\nconsole.log(PrivateKey, PublicKey);\n\n// Keep your private key in a safe place, this is for demo purposes only\nlocalStorage.setItem('PRIVATE_KEY', PrivateKey);\nlocalStorage.setItem('PUBLICKEY', PublicKey);\n")),(0,r.kt)("h3",{id:"get-client-instance"},"Get Client Instance"),(0,r.kt)("h4",{id:"code-1"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const keys = { PrivateKey, PublicKey };\n\nconst client = Client.getInstance(keys);\n")),(0,r.kt)("h2",{id:"create-room"},"Create room"),(0,r.kt)("p",null,"After initializing the client and registering your user, the next step is to connect to a room"),(0,r.kt)("h4",{id:"code-2"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"client.channel.createRoom();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<button\n  onClick={() => {\n    client.channel.createRoom();\n  }}>\n  createGroup\n</button>\n")),(0,r.kt)("h2",{id:"send-message"},"Send message"),(0,r.kt)("h4",{id:"code-3"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"client.channel.sendMessage('Hello World');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<button\n  onClick={() => {\n    client.message.sendMessage('Hello World');\n  }}>\n  sendMessage\n</button>\n")))}d.isMDXComponent=!0}}]);