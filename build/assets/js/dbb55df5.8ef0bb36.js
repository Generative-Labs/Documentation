"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[5987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),c=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,m=d["".concat(r,".").concat(b)]||d[b]||u[b]||o;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={position:4},s=void 0,l={unversionedId:"Tutorials/PubSub/PubSub",id:"Tutorials/PubSub/PubSub",title:"PubSub",description:"Pub/Sub",source:"@site/docs/Tutorials/PubSub/PubSub.md",sourceDirName:"Tutorials/PubSub",slug:"/Tutorials/PubSub/",permalink:"/docs/Tutorials/PubSub/",draft:!1,tags:[],version:"current",frontMatter:{position:4},sidebar:"tutorialSidebar",previous:{title:"notifications",permalink:"/docs/Tutorials/notifications/"},next:{title:"QuickStart",permalink:"/docs/Web3MQ-SDK/JS-SDK/quickStart/"}},r={},c=[{value:"Pub/Sub",id:"pubsub",level:2},{value:"Installation",id:"installation",level:2},{value:"Initialize Client and Connect to Web3MQ Network",id:"initialize-client-and-connect-to-web3mq-network",level:2},{value:"Initialize Client",id:"initialize-client",level:3},{value:"API endpoints",id:"api-endpoints",level:4},{value:"Sign with wallet to register user and obtain message encryption keys",id:"sign-with-wallet-to-register-user-and-obtain-message-encryption-keys",level:3},{value:"Code",id:"code",level:4},{value:"Get Client Instance",id:"get-client-instance",level:3},{value:"Code",id:"code-1",level:4},{value:"Create topic",id:"create-topic",level:2},{value:"Code",id:"code-2",level:4},{value:"Publish Message to Topic",id:"publish-message-to-topic",level:2},{value:"Code",id:"code-3",level:4},{value:"Subscribe Topic",id:"subscribe-topic",level:2},{value:"Code",id:"code-4",level:4},{value:"Receive Notifications",id:"receive-notifications",level:2},{value:"Code",id:"code-5",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pubsub"},"Pub/Sub"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This is a quick tutorial around experimental raw Pub/Sub capabilities of Web3MQ.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install Web3MQ's JS SDK using a package manager of your choice"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install web3-mq\nor\nyarn add web3-mq\n")),(0,a.kt)("h2",{id:"initialize-client-and-connect-to-web3mq-network"},"Initialize Client and Connect to Web3MQ Network"),(0,a.kt)("p",null,"In order to connect to the Web3MQ Network, both users and developers authenticate through wallet signatures, we demonstrate below with an Ethereum wallet via Metamask, but Web3MQ is built to be compatible with wallets across different chains."),(0,a.kt)("h3",{id:"initialize-client"},"Initialize Client"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"While we are committed to building an open and collectively owned public good, our early stage testnet requires an API key in order to connect. This is to control capacity to make sure that each early partner and developer is able to build a great experience on top of Web3MQ. ",(0,a.kt)("a",{parentName:"p",href:"https://web3mq.com/apply"},"Apply here"),".")),(0,a.kt)("p",null,"As Web3MQ is a federated network, our default JS SDK client has a method to help you connect to the best node for you."),(0,a.kt)("p",null,"Simply calling Client.init without connectUrl or an empty string returns a url of the best node determined for you, and this url can be stored locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Client } from 'web3-mq';\n\n// You can save the bestEndpointUrl locally to skip endpoint search next time, which will save time, and\nconst bestEndpointUrl = await Client.init({\n  connectUrl: '', //\n  app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet\n});\n")),(0,a.kt)("p",null,"Calling Client.init with a specific connectUrl forces the client to connect to that specific node. When bestEndpointUrl is stored, it might be time-saving to connect directly instead of running the search again."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Client } from 'web3-mq';\n\nconst fastUrl = await Client.init({\n  connectUrl: bestEndpointUrl, // takes in a valid endpoint url as input, when this paramter is given, client will always connect to that specific node.\n  app_key: 'app_key', // Appkey applied from our team\n});\n")),(0,a.kt)("h4",{id:"api-endpoints"},"API endpoints"),(0,a.kt)("p",null,"During this initial testing phase, we've hosted complete networks of Web3MQ nodes in different regions around the globe. Connect to these endpoints below, to access the Web3MQ Testnet."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testnet-us-west-1-1.web3mq.com"},"https://testnet-us-west-1-1.web3mq.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testnet-us-west-1-2.web3mq.com"},"https://testnet-us-west-1-2.web3mq.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testnet-ap-jp-1.web3mq.com"},"https://testnet-ap-jp-1.web3mq.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testnet-ap-jp-2.web3mq.com"},"https://testnet-ap-jp-2.web3mq.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testnet-ap-singapore-1.web3mq.com"},"https://testnet-ap-singapore-1.web3mq.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testnet-ap-singapore-2.web3mq.com"},"https://testnet-ap-singapore-2.web3mq.com"))),(0,a.kt)("h3",{id:"sign-with-wallet-to-register-user-and-obtain-message-encryption-keys"},"Sign with wallet to register user and obtain message encryption keys"),(0,a.kt)("p",null,"For any first-time user of Web3MQ's network, you'll need to register on Web3MQ's network. Web3MQ's JS SDK takes care of the key generation process and subsequent wallet signing process. Client.register.signMetaMask is a utility method that does this automatically."),(0,a.kt)("h4",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// You must ensure that the Client.init initialization is complete before running this\nconst { PrivateKey, PublicKey } = await Client.register.signMetaMask({\n  signContentURI: 'https://www.web3mq.com', // your signContent URI\n  EthAddress: 'your eth address', // *Not required*  your eth address, if not use your MetaMask eth address\n});\n\nconsole.log(PrivateKey, PublicKey);\n\n// Keep your private key in a safe place, this is for demo purposes only\nlocalStorage.setItem('PRIVATE_KEY', PrivateKey);\nlocalStorage.setItem('PUBLICKEY', PublicKey);\n")),(0,a.kt)("h3",{id:"get-client-instance"},"Get Client Instance"),(0,a.kt)("h4",{id:"code-1"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const keys = { PrivateKey, PublicKey };\n\nconst client = Client.getInstance(keys);\n")),(0,a.kt)("h2",{id:"create-topic"},"Create topic"),(0,a.kt)("p",null,"After initializing the client and registering your user, the next step is to create a topic."),(0,a.kt)("h4",{id:"code-2"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"client.topic.createTopic('topicName');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleCreate = async () => {\n  const data = await client.topic.createTopic(topicName);\n  console.log(data);\n};\n\n<button onClick={handleCreate}>createGroup</button>;\n")),(0,a.kt)("h2",{id:"publish-message-to-topic"},"Publish Message to Topic"),(0,a.kt)("p",null,"Now that we've created a topic, let's try publishing a message to the topic we've just created."),(0,a.kt)("h4",{id:"code-3"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const params = {\n  topicid: 'topicId',\n  title: 'test title',\n  content: 'test content',\n};\n\nclient.topic.publishTopicMessage(params);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const handlePublishMsg = async () => {\n  const params = {\n    topicid: topicId,\n    title: 'test title',\n    content: 'test content',\n  };\n  await client.topic.publishTopicMessage(params);\n};\n\n<button onClick={handlePublishMsg}>publish Msg</button>;\n")),(0,a.kt)("h2",{id:"subscribe-topic"},"Subscribe Topic"),(0,a.kt)("p",null,"Subscribe to topics to receive messages."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This subscription function only tells the Web3MQ network that the user wants to subscribe to a topic. This is not where applications subscribe to the actual data feed via a WebSocket persistent connection. This happens in the notifications section below.")),(0,a.kt)("h4",{id:"code-4"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"client.topic.subscribeTopic('topicId');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleSubscribe = async () => {\n  const data = await client.topic.subscribeTopic(topicId);\n  console.log(data);\n};\n<button onClick={handleSubscribe}>Subscribe Topic</button>;\n")),(0,a.kt)("h2",{id:"receive-notifications"},"Receive Notifications"),(0,a.kt)("p",null,"Each Web3MQ account is equipped with a notifications queue, currently, all subscriptions go to this notifications queue, and applications can subscribe to this notifications queue for real-time content, data, and event updates."),(0,a.kt)("h4",{id:"code-5"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const handleEvent = (event: { type: string }) => {\n  const { type } = event;\n  if (type === 'notification.getList') {\n    console.log('notification list -------', client.notify.notificationList);\n  }\n};\n\nclient.on('notification.getList', handleEvent);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const [notifyList, setNotifyList] = useState<any>([]);\n\nconst handleEvent = (event: { type: string }) => {\n  const { type } = event;\n  if (type === 'notification.getList') {\n    console.log('notification list -------', client.notify.notificationList);\n  }\n};\n\nuseEffect(() => {\n  client.on('notification.getList', handleEvent);\n  return () => {\n    client.off('notification.getList', handleEvent);\n  };\n}, [notifyList]);\n\n<div>\n<h1>Notify List</h1>\n{\n  notifyList?.map((item: any, idx: number) => (\n    <div key={item.timestamp}>\n      {`notify${idx + 1}-------title:`}\n      <b>{item.title}</b>, content: <b>{item.content}</b>\n    </div>\n  ));\n}\n</div>\n")))}u.isMDXComponent=!0}}]);