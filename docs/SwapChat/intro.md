---
sidebar_position: 0
---


# Intro

## API endpoint

- Production env: **https://chat.web3messaging.online**
- Development env: **https://test.web3messaging.online**


## How to authorization with JWT

1. call [login api](/docs/SwapChat/User/user-login#login-with-metamask-sign)
2. put "access_token" from login api response into http header

**JWT: yes** means you need pass Authorization http header


*http header*

| Headers  | Required |  Headers Description|
| ------------- | ------------- |--------|
| Authorization  | Yes  |  [login api](/docs/SwapChat/User/user-login#login-with-metamask-sign) response "access_token" |

*example*

```
Authorization: Bearer (your access token from login api)
```


## Wallet Direct Messaging

The Web3 world is built on top of blockchains and wallet addresses are key to identity in Web3, we make it possible to message anyone in Web3.
___
## DAO Communication

DAOs have complex communications needs, deeply tied to complex smart contracts. We enable this for everyone.
___
## Anti-Discord Scam

Current DAO operations and NFT/GameFi communities currently face identity fraud and smart contract fraud. Discord identities and bots are far too insecure for Web3 needs.
___
## GameFi Communities 

Our SDKs and APIs will allow GameFi developers to provide our interoperable, pan-metaverse chat service and build community right in their games. Separate Discord no longer necessary.

