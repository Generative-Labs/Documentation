"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[7403],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},p=Object.keys(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,p=t.originalType,d=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),s=u(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||p;return n?a.createElement(c,l(l({ref:e},o),{},{components:n})):a.createElement(c,l({ref:e},o))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=n.length,l=new Array(p);l[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<p;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5133:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),p=(n(7294),n(3905)),l=["components"],i={title:"Update DApp",order:1,group:{title:"DApp",order:6}},d="Update DApp",u={unversionedId:"Web3MQ-API/dapp/update_dapp",id:"Web3MQ-API/dapp/update_dapp",title:"Update DApp",description:"POST /api/update_dapp/",source:"@site/docs/Web3MQ-API/dapp/update_dapp.md",sourceDirName:"Web3MQ-API/dapp",slug:"/Web3MQ-API/dapp/update_dapp",permalink:"/docs/Web3MQ-API/dapp/update_dapp",tags:[],version:"current",frontMatter:{title:"Update DApp",order:1,group:{title:"DApp",order:6}},sidebar:"tutorialSidebar",previous:{title:"My Create DApp List",permalink:"/docs/Web3MQ-API/dapp/get_my_dapps"},next:{title:"Overview",permalink:"/docs/Web3MQ-API/notification/"}},o={},m=[],s={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,l);return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"update-dapp"},"Update DApp"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("strong",{parentName:"p"},"POST")," ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/update_dapp/"))),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Request Headers")),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"field"),(0,p.kt)("th",{parentName:"tr",align:null},"Required"),(0,p.kt)("th",{parentName:"tr",align:null},"headers Description"),(0,p.kt)("th",{parentName:"tr",align:null},"example"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"web3mq-request-pubkey"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"your login keyapir's public key"),(0,p.kt)("td",{parentName:"tr",align:null},"59daabd77706ba022ceaed10e4275bd6")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"didkey"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},'your did_type + ":" + did_value'),(0,p.kt)("td",{parentName:"tr",align:null},"eth:0xa1b1233fdfde")))),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Request Payload")),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameters in Body json"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Required"),(0,p.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"creator_id"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"userid")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"dapp_id"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"dapp_id")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"dapp_name"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"No"),(0,p.kt)("td",{parentName:"tr",align:null},"Web3MQ chat service")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"dapp_description"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"No"),(0,p.kt)("td",{parentName:"tr",align:null},"Web3MQ chat dapp")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"dapp_type"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"No"),(0,p.kt)("td",{parentName:"tr",align:null},"im or other type")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"dapp_pubkey"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"No"),(0,p.kt)("td",{parentName:"tr",align:null},"dapp ed25519 pubkey")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"domain"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"No"),(0,p.kt)("td",{parentName:"tr",align:null},"dapp deploy domain")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,p.kt)("td",{parentName:"tr",align:null},"int"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"timestamp milliseconds")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"web3mq_user_signature"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"use creator ed25519 private key signing ( ",(0,p.kt)("inlineCode",{parentName:"td"},"base64 encode")," ) ",(0,p.kt)("a",{parentName:"td",href:"/docs/Web3MQ-API/signature"},"see signing detail"))))),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"web3mq_signature signing rule")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"base64 encode")," signature"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"web3mq_user_signature = ed25519 private key signing(creator_id + dapp_id + ","[dapp_type]"," + ","[dapp_name]"," + ","[dapp_pubkey]"," + ","[domain]"," + timestamp)")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Body json params")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "creator_id": "userid",\n  "dapp_id": "web3mq:im",\n  "dapp_type": "im",\n  "domain": "www.yourdomain.com", //\n  "dapp_name": "Web3mqIM",\n  "dapp_description": "Web3mq is a chat service dapp",\n  "dapp_pubkey": "ed25519 pubkey",\n  "timestamp": 1632432434,\n  "web3mq_user_signature": "web3mq_user_signature"\n}\n')),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"response")),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Always Return"),(0,p.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"code"),(0,p.kt)("td",{parentName:"tr",align:null},"int"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"result code, 0 means success, other code see msg's contents")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"msg"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"Yes"),(0,p.kt)("td",{parentName:"tr",align:null},"result description")))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 0,\n  "msg": "ok"\n}\n')))}k.isMDXComponent=!0}}]);