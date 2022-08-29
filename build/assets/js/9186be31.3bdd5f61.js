"use strict";(self.webpackChunkchat_service_api_doc=self.webpackChunkchat_service_api_doc||[]).push([[3782],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),k=u(n),d=r,c=k["".concat(i,".").concat(d)]||k[d]||m[d]||l;return n?a.createElement(c,s(s({ref:e},p),{},{components:n})):a.createElement(c,s({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6688:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),s=["components"],o={sidebar_position:1},i="User Login",u={unversionedId:"Web3MQ-RESTFul-API/User/user-login",id:"Web3MQ-RESTFul-API/User/user-login",title:"User Login",description:"_",source:"@site/docs/Web3MQ-RESTFul-API/User/user-login.md",sourceDirName:"Web3MQ-RESTFul-API/User",slug:"/Web3MQ-RESTFul-API/User/user-login",permalink:"/docs/Web3MQ-RESTFul-API/User/user-login",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"User Register",permalink:"/docs/Web3MQ-RESTFul-API/User/user-register"},next:{title:"Bind social platform",permalink:"/docs/Web3MQ-RESTFul-API/User/bind-social-platform"}},p={},m=[{value:"Get User&#39;s Random Login Secret",id:"get-users-random-login-secret",level:2},{value:"Login with MetaMask sign",id:"login-with-metamask-sign",level:2},{value:"Refresh JWT",id:"refresh-jwt",level:2}],k={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"user-login"},"User Login"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"get-users-random-login-secret"},"Get User's Random Login Secret"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"/login_random_secret")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JWT: No")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Call Method: POST")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wallet_address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"User's ETH wallet address, get it by MetaMask's API")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code":0,\n    "msg": "Here\'s your login random secret.",\n    "data":"b1e069cab9827c08700280b6ed1151fe"\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Always Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result code,0 means success, other code see msg's contents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"return random login secret if code is 0, otherwise return None")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"login-with-metamask-sign"},"Login with MetaMask sign"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"/login")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JWT: No")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Call Method: POST")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"login_random_secret"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"User's login random secret, get it from the previous step")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signature"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Generated by MetaMask-Sign with user's random login secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wallet_address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"User's ETH wallet address, get it by MetaMask's API")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 0,\n    "msg": "Here\'s your JWT.",\n    "data": {\n        "access_token": "your access token",\n        "user_info": {\n            "user_id": "user\'s OID",\n            "nick_name": "user\'s nick_name",\n            "twitter_username": "user\'s twitter_username",\n            "twitter_avatar": "user\'s twitter_avatar",\n            "instagram_username": "user\'s instagram_username",\n            "instagram_avatar": "user\'s instagram_avatar",\n            "facebook_username": "user\'s facebook_username",\n            "facebook_avatar": "user\'s facebook_avatar",\n            "discord_username": "user\'s discord_username",\n            "discord_avatar": "user\'s discord_avatar",\n            "opensea_username": "user\'s opensea_username",\n            "opensea_avatar": "user\'s opensea_avatar",\n            "eth_wallet_address": "user\'s eth_wallet_address",\n            "ens_name": "user\'s ens_name",\n            "status": "user\'s status",\n            "created_at": "the timestamp when user created"\n        }\n    }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Always Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result code,0 means success, other code see msg's contents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"return Map if code is 0, otherwise return None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-access_token"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"return access_token if code is 0, otherwise return None, will expired after 7 days")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-user_info"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"User")," object, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-RESTFul-API/User/"},"User"))))),(0,l.kt)("h2",{id:"refresh-jwt"},"Refresh JWT"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"GET /refresh")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JWT: Yes")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"http header")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Headers"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Headers Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/Web3MQ-RESTFul-API/User/user-login#login-with-metamask-sign"},"login api"),' response "access_token"')))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Authorization: Bearer (your access token from login api)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 0,\n    "msg": "Here\'s your JWT.",\n    "data": {\n        "access_token": "your access token"\n    }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Always Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result code,0 means success, other code see msg's contents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"result description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"return random login secret if code is 0, otherwise return None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-access_token"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"return access_token if code is 0, otherwise return None")))))}d.isMDXComponent=!0}}]);