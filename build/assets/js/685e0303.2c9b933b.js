"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[1593],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:0},s="Intro",c={unversionedId:"Web3MQ-SDK/JS-SDK/Intro",id:"Web3MQ-SDK/JS-SDK/Intro",title:"Intro",description:"web3-mq-js is the official JavaScript client for Web3MQ, a service for building chat applications.",source:"@site/docs/Web3MQ-SDK/JS-SDK/Intro.md",sourceDirName:"Web3MQ-SDK/JS-SDK",slug:"/Web3MQ-SDK/JS-SDK/Intro",permalink:"/docs/Web3MQ-SDK/JS-SDK/Intro",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Jssdk",permalink:"/docs/Tutorial/JS-SDK"},next:{title:"QuickStart",permalink:"/docs/Web3MQ-SDK/JS-SDK/quickStart/"}},h={},d=[{value:"The client class is the main entry point and contains and mounts the basic properties and other classes such as Channel, Message, etc.",id:"the-client-class-is-the-main-entry-point-and-contains-and-mounts-the-basic-properties-and-other-classes-such-as-channel-message-etc",level:4},{value:"SDK There are two kinds of core ideas (can&#39;t understand? No problem! Look down the chart)",id:"sdk-there-are-two-kinds-of-core-ideas-cant-understand-no-problem-look-down-the-chart",level:4},{value:"The sdk follows the following rules to form a closed loop, (don&#39;t understand? No problem! Scroll down to see the code",id:"the-sdk-follows-the-following-rules-to-form-a-closed-loop-dont-understand-no-problem-scroll-down-to-see-the-code",level:4},{value:"Use the channelList in the channle class to demonstrate how to use it in react",id:"use-the-channellist-in-the-channle-class-to-demonstrate-how-to-use-it-in-react",level:4},{value:"Feature",id:"feature",level:2},{value:"Install",id:"install",level:2},{value:"Install with NPM",id:"install-with-npm",level:3},{value:"Install with Yarn",id:"install-with-yarn",level:3}],u={toc:d};function p(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},"Intro"),(0,i.kt)("p",null,"web3-mq-js is the official JavaScript client for Web3MQ, a service for building chat applications."),(0,i.kt)("h1",{id:"design"},"Design"),(0,i.kt)("h4",{id:"the-client-class-is-the-main-entry-point-and-contains-and-mounts-the-basic-properties-and-other-classes-such-as-channel-message-etc"},"The client class is the main entry point and contains and mounts the basic properties and other classes such as Channel, Message, etc."),(0,i.kt)("h4",{id:"sdk-there-are-two-kinds-of-core-ideas-cant-understand-no-problem-look-down-the-chart"},"SDK There are two kinds of core ideas (can't understand? No problem! Look down the chart)"),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Pub Sub Mode\uff1aManage data via publish-subscribe design pattern and notify view updates, The advantage of this is that the data can be maintained inside the sdk for unified management, and the view layer only needs to get the latest data on the sdk object in the callback function after each data update, and then trigger the view update to see the latest data display."),(0,i.kt)("li",{parentName:"ol"},"Normal api mode\uff1aCall the method, return the corresponding data to the view layer, and let the user maintain the relationship between the data and the view\uff08Under development...\uff09"))),(0,i.kt)("h4",{id:"the-sdk-follows-the-following-rules-to-form-a-closed-loop-dont-understand-no-problem-scroll-down-to-see-the-code"},"The sdk follows the following rules to form a closed loop, (don't understand? No problem! Scroll down to see the code"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:n(8637).Z,width:"1654",height:"1324"}),"\n",(0,i.kt)("img",{loading:"lazy",alt:"image",src:n(3270).Z,width:"1652",height:"1318"})),(0,i.kt)("h4",{id:"use-the-channellist-in-the-channle-class-to-demonstrate-how-to-use-it-in-react"},"Use the channelList in the channle class to demonstrate how to use it in react"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import React, { useState } from "react";\nimport { Web2MQ } from "web3-mq";\n\nconst App = () => {\n  const [channels, setChannels] = useState<ChannelResponse[]>([]);\n\n  // 1. First initialize the client instance\n  const client = Web2MQ.Client.getInstance("YOUR_ACCESS_TOKEN");\n\n  // 2. Add a listener method to the channelList using the on method under the client when the component is initialized\n  useEffect(() => {\n    client.on("channel.getList", handleEvent);\n    return () => {\n      client.off("channel.getList");\n    };\n  }, []);\n\n  // 3. Call the queryChannels method on the channel class under client to get the channelList data\n  await client.channel.queryChannels({\n    page: 1,\n    size: 20,\n  });\n\n  // 4. This method subscribes to the channel.getList event during initialization, and after doing some logic in the client.channel.queryChannels method, it will call the emit method to notify all subscribers, which means it will execute this function, and when this function is executed, it means that the channel class We just need to get the latest channelList data from client.channel, and then we can assign it to mobx, redux, useContext, useState, etc. that can trigger view rendering.\n  const handleEvent = (event: { type: string; data: any }) => {\n    // Here is an example of useState\n    // The reason for using client.channel.channelList to fetch data from the sdk tree, rather than using the data returned directly, is to maintain data consistency\n    setChannels(client.channel.channelList);\n  };\n\n  // 5. Here you can print out the latest channleList\n  console.log(channels);\n};\n')),(0,i.kt)("h2",{id:"feature"},"Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Web3MQ-SDK/JS-SDK/client"},"Client Class"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Web3MQ-SDK/JS-SDK/channel"},"Channel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Web3MQ-SDK/JS-SDK/contact"},"Contact")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Web3MQ-SDK/JS-SDK/message"},"Message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Web3MQ-SDK/JS-SDK/user/"},"User")))),(0,i.kt)("li",{parentName:"ul"},"Utils function without client",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"login()"),(0,i.kt)("li",{parentName:"ul"},"register()"),(0,i.kt)("li",{parentName:"ul"},"getLoginRandomSecret()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Web3MQ-SDK/JS-SDK/eventCenter"},"Event Center")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs//Web3MQ-SDK/JS-SDK/types"},"Type list"))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("h3",{id:"install-with-npm"},"Install with NPM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install web3-mq\n")),(0,i.kt)("h3",{id:"install-with-yarn"},"Install with Yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add web3-mq\n")))}p.isMDXComponent=!0},3270:function(e,t,n){t.Z=n.p+"assets/images/sdkProcess-153af3c785eaf9e8191fa0b8ec5b8075.jpg"},8637:function(e,t,n){t.Z=n.p+"assets/images/sdkProcessEn-2f724a9933495f443fd4e073927ad2a5.png"}}]);