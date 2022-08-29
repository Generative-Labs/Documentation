"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[9080],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9423:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},i="Get Contacts Info",u={unversionedId:"Web3MQ-RESTFul-API/Contact/get-contacts",id:"Web3MQ-RESTFul-API/Contact/get-contacts",title:"Get Contacts Info",description:"_",source:"@site/docs/Web3MQ-RESTFul-API/Contact/get-contacts.md",sourceDirName:"Web3MQ-RESTFul-API/Contact",slug:"/Web3MQ-RESTFul-API/Contact/get-contacts",permalink:"/docs/Web3MQ-RESTFul-API/Contact/get-contacts",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Add User To Your Contact List",permalink:"/docs/Web3MQ-RESTFul-API/Contact/add-contact"},next:{title:"Details about Room/Message",permalink:"/docs/Web3MQ-RESTFul-API/Room/"}},c={},p=[{value:"Get contact&#39;s info",id:"get-contacts-info-1",level:2}],m={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-contacts-info"},"Get Contacts Info"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"get-contacts-info-1"},"Get contact's info"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"GET /contacts/<page:int>/<size:int>")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JWT: Yes")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"http header")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Headers"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Headers Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-RESTFul-API/User/user-login#login-with-metamask-sign"},"login api"),' response "access_token"')))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Authorization: Bearer (your access token from login api)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters in URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"page number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"page size")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 0,\n    "msg": "ok",\n    "data": [\n        {\n            "user_id": "user\'s OID",\n            "nick_name": "user\'s nick_name",\n            "twitter_username": "user\'s twitter_username",\n            "twitter_avatar": "user\'s twitter_avatar",\n            "instagram_username": "user\'s instagram_username",\n            "instagram_avatar": "user\'s instagram_avatar",\n            "facebook_username": "user\'s facebook_username",\n            "facebook_avatar": "user\'s facebook_avatar",\n            "discord_username": "user\'s discord_username",\n            "discord_avatar": "user\'s discord_avatar",\n            "opensea_username": "user\'s opensea_username",\n            "opensea_avatar": "user\'s opensea_avatar",\n            "eth_wallet_address": "user\'s eth_wallet_address",\n            "ens_name": "user\'s ens_name",\n            "status": "user\'s status",\n            "created_at": "the timestamp when user created"\n        }\n    ]\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Always Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result code,0 means success, other code see msg's contents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"return a ",(0,l.kt)("strong",{parentName:"td"},"List")," includes contacts' ",(0,l.kt)("strong",{parentName:"td"},"*User")," info")))))}d.isMDXComponent=!0}}]);