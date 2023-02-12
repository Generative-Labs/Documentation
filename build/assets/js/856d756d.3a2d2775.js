"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[1036],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1387:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={position:3},l=void 0,c={unversionedId:"Tutorials/notifications/notifications",id:"Tutorials/notifications/notifications",title:"notifications",description:"Notifications",source:"@site/docs/Tutorials/notifications/notifications.md",sourceDirName:"Tutorials/notifications",slug:"/Tutorials/notifications/",permalink:"/docs/Tutorials/notifications/",tags:[],version:"current",frontMatter:{position:3},sidebar:"tutorialSidebar",previous:{title:"ens",permalink:"/docs/Tutorials/ens/"},next:{title:"PubSub",permalink:"/docs/Tutorials/PubSub/"}},p={},u=[{value:"Notifications",id:"notifications",level:2},{value:"Installation",id:"installation",level:2},{value:"Initialize Client and Connect to Web3MQ Network",id:"initialize-client-and-connect-to-web3mq-network",level:2},{value:"Initialize Client",id:"initialize-client",level:3},{value:"API endpoints",id:"api-endpoints",level:4},{value:"Sign with wallet to register user and obtain message encryption keys",id:"sign-with-wallet-to-register-user-and-obtain-message-encryption-keys",level:3},{value:"Code",id:"code",level:4},{value:"Get Client Instance",id:"get-client-instance",level:3},{value:"Code",id:"code-1",level:4},{value:"Create topic",id:"create-topic",level:2},{value:"Code",id:"code-2",level:4},{value:"Subscribe Topic",id:"subscribe-topic",level:2},{value:"Code",id:"code-3",level:4},{value:"Receive Notifications",id:"receive-notifications",level:2},{value:"Code",id:"code-4",level:4},{value:"Publish Notifications",id:"publish-notifications",level:2},{value:"Code",id:"code-5",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"notifications"},"Notifications"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notifications Tutorials")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install Web3MQ's JS SDK using a package manager of your choice"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @web3mq/client\nor\nyarn add @web3mq/client\n")),(0,o.kt)("h2",{id:"initialize-client-and-connect-to-web3mq-network"},"Initialize Client and Connect to Web3MQ Network"),(0,o.kt)("p",null,"In order to connect to the Web3MQ Network, both users and developers authenticate through wallet signatures, we demonstrate below with an Ethereum wallet via Metamask, but Web3MQ is built to be compatible with wallets across different chains."),(0,o.kt)("h3",{id:"initialize-client"},"Initialize Client"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While we are committed to building an open and collectively owned public good, our early stage testnet requires an API key in order to connect. This is to control capacity to make sure that each early partner and developer is able to build a great experience on top of Web3MQ. ",(0,o.kt)("a",{parentName:"p",href:"https://web3mq.com/apply"},"Apply here"),"."))),(0,o.kt)("p",null,"As Web3MQ is a federated network, our default JS SDK client has a method to help you connect to the best node for you."),(0,o.kt)("p",null,"Simply calling Client.init without connectUrl or an empty string returns a url of the best node determined for you, and this url can be stored locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Client } from '@web3mq/client';\n\n// You can save the bestEndpointUrl locally to skip endpoint search next time, which will save time, and\nconst bestEndpointUrl = await Client.init({\n  connectUrl: '', //\n  app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet\n});\n")),(0,o.kt)("p",null,"Calling Client.init with a specific connectUrl forces the client to connect to that specific node. When bestEndpointUrl is stored, it might be time-saving to connect directly instead of running the search again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Client } from '@web3mq/client';\n\nconst fastUrl = await Client.init({\n  connectUrl: bestEndpointUrl, // takes in a valid endpoint url as input, when this paramter is given, client will always connect to that specific node.\n  app_key: 'app_key', // Appkey applied from our team\n});\n")),(0,o.kt)("h4",{id:"api-endpoints"},"API endpoints"),(0,o.kt)("p",null,"During this initial testing phase, we've hosted complete networks of Web3MQ nodes in different regions around the globe. Connect to these endpoints below, to access the Web3MQ Testnet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet-us-west-1-1.web3mq.com"},"https://testnet-us-west-1-1.web3mq.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet-us-west-1-2.web3mq.com"},"https://testnet-us-west-1-2.web3mq.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet-ap-jp-1.web3mq.com"},"https://testnet-ap-jp-1.web3mq.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet-ap-jp-2.web3mq.com"},"https://testnet-ap-jp-2.web3mq.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet-ap-singapore-1.web3mq.com"},"https://testnet-ap-singapore-1.web3mq.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet-ap-singapore-2.web3mq.com"},"https://testnet-ap-singapore-2.web3mq.com"))),(0,o.kt)("h3",{id:"sign-with-wallet-to-register-user-and-obtain-message-encryption-keys"},"Sign with wallet to register user and obtain message encryption keys"),(0,o.kt)("p",null,"For any first-time user of Web3MQ's network, you'll need to register on Web3MQ's network. Web3MQ's JS SDK takes care of the key generation process and subsequent wallet signing process. Client.register.signMetaMask is a utility method that does this automatically."),(0,o.kt)("h4",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// You must ensure that the Client.init initialization is complete before running this\nconst { PrivateKey, PublicKey } = await Client.register.signMetaMask({\n  signContentURI: 'https://www.web3mq.com', // your signContent URI\n  EthAddress: 'your eth address', // *Not required*  your eth address, if not use your MetaMask eth address\n});\n\nconsole.log(PrivateKey, PublicKey);\n\n// Keep your private key in a safe place, this is for demo purposes only\nlocalStorage.setItem('PRIVATE_KEY', PrivateKey);\nlocalStorage.setItem('PUBLICKEY', PublicKey);\n")),(0,o.kt)("h3",{id:"get-client-instance"},"Get Client Instance"),(0,o.kt)("h4",{id:"code-1"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const keys = { PrivateKey, PublicKey };\n\nconst client = Client.getInstance(keys);\n")),(0,o.kt)("h2",{id:"create-topic"},"Create topic"),(0,o.kt)("p",null,"After initializing the client and registering your user, the next step is to create topic"),(0,o.kt)("h4",{id:"code-2"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"client.topic.createTopic('topicName');\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleCreate = async () => {\n  const data = await client.topic.createTopic(topicName);\n  console.log(data);\n};\n\n<button onClick={handleCreate}>createGroup</button>;\n")),(0,o.kt)("h2",{id:"subscribe-topic"},"Subscribe Topic"),(0,o.kt)("h4",{id:"code-3"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"client.topic.subscribeTopic('topicId');\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleSubscribe = async () => {\n  const data = await client.topic.subscribeTopic(topicId);\n  console.log(data);\n};\n<button onClick={handleSubscribe}>Subscribe Topic</button>;\n")),(0,o.kt)("h2",{id:"receive-notifications"},"Receive Notifications"),(0,o.kt)("h4",{id:"code-4"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const handleEvent = (event: { type: string }) => {\n  const { type } = event;\n  if (type === 'notification.getList') {\n    console.log('notification list -------', client.notify.notificationList);\n  }\n};\n\nclient.on('notification.getList', handleEvent);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const [notifyList, setNotifyList] = useState<any>([]);\n\nconst handleEvent = (event: { type: string }) => {\n  const { type } = event;\n  if (type === 'notification.getList') {\n    console.log('notification list -------', client.notify.notificationList);\n  }\n};\n\nuseEffect(() => {\n  client.on('notification.getList', handleEvent);\n  return () => {\n    client.off('notification.getList', handleEvent);\n  };\n}, [notifyList]);\n\n<div>\n<h1>Notify List</h1>\n{\n  notifyList?.map((item: any, idx: number) => (\n    <div key={item.timestamp}>\n      {`notify${idx + 1}-------title:`}\n      <b>{item.title}</b>, content: <b>{item.content}</b>\n    </div>\n  ));\n}\n</div>\n")),(0,o.kt)("h2",{id:"publish-notifications"},"Publish Notifications"),(0,o.kt)("h4",{id:"code-5"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const params = {\n  topicid: 'topicId',\n  title: 'test title',\n  content: 'test content',\n};\n\nclient.topic.publishTopicMessage(params);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const handlePublishMsg = async () => {\n  const params = {\n    topicid: topicId,\n    title: 'test title',\n    content: 'test content',\n  };\n  await client.topic.publishTopicMessage(params);\n};\n\n<button onClick={handlePublishMsg}>publish Msg</button>;\n")))}m.isMDXComponent=!0}}]);