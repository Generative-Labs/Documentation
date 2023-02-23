"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[6646],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),s=u(n),c=a,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(k,i(i({ref:t},o),{},{components:n})):r.createElement(k,i({ref:t},o))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1642:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],d={title:"User Bind DID",order:1,group:{title:"DID",order:7}},p="User Bind DID",u={unversionedId:"Web3MQ-API/did/user_binddid",id:"Web3MQ-API/did/user_binddid",title:"User Bind DID",description:"POST /api/user_binddid/",source:"@site/docs/Web3MQ-API/did/user_binddid.md",sourceDirName:"Web3MQ-API/did",slug:"/Web3MQ-API/did/user_binddid",permalink:"/docs/Web3MQ-API/did/user_binddid",tags:[],version:"current",frontMatter:{title:"User Bind DID",order:1,group:{title:"DID",order:7}},sidebar:"tutorialSidebar",previous:{title:"Get User Bind DID profile",permalink:"/docs/Web3MQ-API/did/get_user_bindlist"},next:{title:"Create Provider",permalink:"/docs/Web3MQ-API/provider/create_provider"}},o={},m=[],s={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"user-bind-did"},"User Bind DID"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"POST")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/user_binddid/"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Request Headers")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"headers Description"),(0,l.kt)("th",{parentName:"tr",align:null},"example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"web3mq-request-pubkey"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"your login keyapir's public key"),(0,l.kt)("td",{parentName:"tr",align:null},"59daabd77706ba02a97c523513a2ceaed10e4275bd6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"didkey"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},'your did_type + ":" + did_value'),(0,l.kt)("td",{parentName:"tr",align:null},"eth:0xa1b1233fdfde")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Request Payload")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters in Body json"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"userid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"provider_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"provider_id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"did_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"email or other type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"did_value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:web3mq@gmail.com"},"web3mq@gmail.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp milliseconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"web3mq_signature"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"use ed25519 ",(0,l.kt)("inlineCode",{parentName:"td"},"base64 encode")," web3mq_signature ",(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-API/signature"},"see signing detail"))))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"web3mq_signature signing rule")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"base64 encode")," web3mq_signature"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"web3mq_signature = ed25519 private key signing(userid + did_type + did_value + timestamp)")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Body json params")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "provider_id": "web3mq:email:Google",\n  "userid": "web3mq_userid",\n  "did_type": "email",\n  "did_value": "web3mq@gmail.com",\n  "timestamp": 160000000,\n  "web3mq_signature": "asdfasdfadsf"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Always Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result code, 0 means success, other code see msg's contents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result description")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 0,\n  "msg": "ok"\n}\n')))}c.isMDXComponent=!0}}]);