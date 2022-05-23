---
sidebar_position: 0
---


# Intro

## API endpoint

- Production env: **https://chat.web3messaging.online**
- Development env: **https://test.web3messaging.online**


## How to authorization with JWT

1. call [login api](/docs/SwapChat/User/user-login#login-with-metamask-sign)
2. put "access_token" that from login api response into http header

**JWT: yes** means you need pass Authorization http header


*http header*

| Headers  | Required |  Headers Description|
| ------------- | ------------- |--------|
| Authorization  | Yes  |  [login api](/docs/SwapChat/User/user-login#login-with-metamask-sign) response "access_token" |

*example*

```
Authorization: Bearer (your access token from login api)
```

## Quickstart

Install the dependency packages first:
```bash
npm install web3 mqtt.js -D
```


then follow the steps below.

> 1. Use JavaScript code to get eth wallet address from MetaMask:

for example, the following code is used to get the wallet address in the browser.
```javascript
import Web3 from 'web3.js'

const web3 = new Web3(Web3.givenProvider || window.ethereum)
console.log("Web3:", Web3.version)

const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
const account = accounts[0];

await ethereum.request({ method: 'eth_requestAccounts' })
alert('Your wallet address is: ' + account)
```

> 2. signin with your wallet address:

* get login random secret:
```bash
curl -d '{"wallet_address": "your wallet address"}' -H 'Content-Type: application/json' https://test.web3messaging.online/login_random_secret
```
Return:

```json
{
    "code":0,
    "msg": "Here's your login random secret.",
    "data":"b1e069cab9827c08700280b6ed1151fe"
}
```

* get MetaMask's signature:
for example, the following code is used to get the MetaMask's signature in the browser.
```javascript
let signContent = `Web3MQ wants you to sign in with your Ethereum account:
${account}
Sign-In With Ethereum Example Statement
URI: https://chat.web3messaging.online
Version: 1
Chain ID: 1
Nonce: ${your login random secret}
Issued At: 2022-05-23T12:52:57.500Z
Expiration Time: 2022-05-25T12:52:57.489Z`;
const signature = await ethereum.request({
  method: "personal_sign",
  params: [signContent, address, "swapchat"],
});
alert("Your MetaMask's signature is: " + signature)
```

* signin with MetaMask's signature:
```bash
curl -d '{"wallet_address": "your wallet address","signature":"your signature","login_random_secret":"login_random_secret"}' -H 'Content-Type: application/json' https://test.web3messaging.online/login_random_secret
```
Return:

```json
{
    "code": 0,
    "msg": "Here's your JWT.",
    "data": {
        "access_token": "your access token",
        "user_info": {
            "user_id": "user's OID",
            "nick_name": "user's nick_name",
            "twitter_username": "user's twitter_username",
            "twitter_avatar": "user's twitter_avatar",
            "instagram_username": "user's instagram_username",
            "instagram_avatar": "user's instagram_avatar",
            "facebook_username": "user's facebook_username",
            "facebook_avatar": "user's facebook_avatar",
            "discord_username": "user's discord_username",
            "discord_avatar": "user's discord_avatar",
            "opensea_username": "user's opensea_username",
            "opensea_avatar": "user's opensea_avatar",
            "eth_wallet_address": "user's eth_wallet_address",
            "ens_name": "user's ens_name",
            "status": "user's status",
            "created_at": "the timestamp when user created"
        }
    }
}
```

> 3. search a user in Swapchat:
```bash
curl -d '{"keyword": "swapchat"}' -H 'Content-Type: application/json' -H 'Authorization: Bearer your_jwt' https://test.web3messaging.online/search
```
Return:

```json
{
    "code": 0,
    "msg": "ok",
    "data": [{
        "user_id": "user's OID",
        "nick_name": "user's nick_name",
        "twitter_username": "user's twitter_username",
        "twitter_avatar": "user's twitter_avatar",
        "instagram_username": "user's instagram_username",
        "instagram_avatar": "user's instagram_avatar",
        "facebook_username": "user's facebook_username",
        "facebook_avatar": "user's facebook_avatar",
        "discord_username": "user's discord_username",
        "discord_avatar": "user's discord_avatar",
        "opensea_username": "user's opensea_username",
        "opensea_avatar": "user's opensea_avatar",
        "eth_wallet_address": "user's eth_wallet_address",
        "ens_name": "user's ens_name",
        "status": "user's status",
        "created_at": "the timestamp when user created"
    }]
}
```

> 4. create a room with target user's oid:
```bash
curl -d '{"user_id": "target users oid"}' -H 'Content-Type: application/json' -H 'Authorization: Bearer your_jwt' https://test.web3messaging.online/search
```
Return
```json
{
    "code": 0,
    "msg": "ok",
    "data": "room id"
}
```

> 5. use your 'user_id' and 'access_token' to login to message server:
```javascript
import { connect } from "mqtt"  // import connect from mqtt

// create a client
let client  = await mqtt.connectAsync("wss://test-msg.web3messaging.online/mqtt", {
    clientId: "your user oid",
    username: "your user oid",
    password: "your jwt(access_token)"
})
```

> 6. publish a message to your room:

```javascript
topic = 'msg/your_user_id'
client.publish(topic,"Hello Swapchat")
```

Enjoy!