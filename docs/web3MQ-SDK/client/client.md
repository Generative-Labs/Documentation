---
position: 1
---

# Intro

web3-mq-js is the official JavaScript client for Web3MQ, a service for building chat applications.

### Install with NPM

```bash
npm install web3-mq
```

### Install with Yarn

```bash
yarn add web3-mq
```

# Usage

# Register your first Web3MQ user and start create Web3MQ client

### register

#### Code

```typescript
import { register } from "web3-mq";

const data = await register({
  platform: "opensea",
  username: "0x000000000",
});
```

#### Params

| name      | type   | Parameters Description |
| --------- | ------ | ---------------------- |
| platform  | String | Web3MQ platform        |
| user_name | String | username               |

> #### platform
>
> | platform | username(value)                                                         |
> | -------- | ----------------------------------------------------------------------- |
> | twitter  | twitter_username (twitter's user Handle)                                |
> | discord  | discord_username (discord's username and id Eg: HousechanWeiTest1#3111) |
> | opensea  | address (eth wallet Eg: 0x4a650684f2287bb0ad50da92f64f3970315ca276)     |

#### Response

```typescript
{
        "user_id":"628b88cd053b232c0101e***",
        "nick_name":"elonmusk", // web3-mq username
        "twitter_username":"elonmusk",
        "twitter_avatar":"",
        "instagram_username":"",
        "instagram_avatar":"",
        "facebook_username":"",
        "facebook_avatar":"",
        "discord_username":"",
        "discord_avatar":"",
        "opensea_username":"",
        "opensea_avatar":"",
        "eth_wallet_address":"", // eth wallet
        "ens_name":"",
        "status":"0000000", // user verfiy platform status
        /**
         * (0: Not verify  1: verified)
         * status:  0000000 | 1111111
         * 1: eth_wallet
         * 2: twitter
         * 3: instagram
         * 4: facebook
         * 5: discord
         * 6: opensea
         * 7: swapchat invite code
         * js String should start at 0
         **/
        "created_at":1653311693648421880
}
```

# Now, You can create client after register success

### create client

```typescript
import { Web3MQ, login, register, getLoginRandomSecret } from "web3-mq";

const address = ethereum.selectedAddress; // see: https://docs.metamask.io/guide/rpc-api.html#restricted-methods

// get random secret( see Utils function getLoginRandomSecret )
const randomSecret = await getLoginRandomSecret({
  wallet_address: address,
});

const msg = `0x${Buffer.from(randomSecret, "utf8").toString("hex")}`;
let signContent = `Web3MQ wants you to sign in with your Ethereum account:
${msg}
Sign-In With Ethereum Example Statement
URI: https://chat.web3messaging.online
Version: 1
Chain ID: 1
Nonce: pkd3mfu7g
Issued At: 2022-05-23T12:52:57.500Z
Expiration Time: 2022-05-25T12:52:57.489Z`;
// @ts-ignore
const signature = await ethereum.request({
  method: "personal_sign",
  params: [signContent, address, "swapchat"],
});

// create client
const client = Web3MQ.getInstance({
  login_random_secret: randomSecret,
  wallet_address: address,
  signature,
});
```

#### or

```typescript
import { Web3MQ } from "web3-mq";

// call login api and get YOUR_ACCESS_TOKEN
// see Utils function
const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");
```

#### Params

| name                | type   | Parameters Description                      |
| ------------------- | ------ | ------------------------------------------- |
| login_random_secret | String | call getLoginRandomSecret get random secret |
| signature           | String | metamask personal_sign result               |
| wallet_address      | String | eth wallet                                  |

## Utils function

### getLoginRandomSecret

> If you want to log in yourself, Then you need to call this api and get random secret

#### Code and Response

```typescript
import { getLoginRandomSecret } from "web3-mq";

const data = await getLoginRandomSecret({
  wallet_address: "0x0000000000",
});
// data: bfe3e4162187a5336baf034714a7****
```

#### Params

| name           | type   | Parameters Description |
| -------------- | ------ | ---------------------- |
| wallet_address | String | eth wallet             |

### login

#### Code

```typescript
import { login } from "web3-mq";
const data = await login();
```

#### Params

| name                | type   | Parameters Description            |
| ------------------- | ------ | --------------------------------- |
| login_random_secret | String | getLoginRandomSecret api response |
| signature           | String | metamask personal_sign result     |
| wallet_address      | String | eth wallet                        |

#### Response

```typescript
{
  access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2....." // a JWT token
  user_info: {...} // see register response
}
```

#### Event

| name | type     | Parameters Description |
| ---- | -------- | ---------------------- |
| on   | function | create pubsub          |
| off  | function | cancel pubsub          |
| once | function | once pubsub            |
| emit | function | emit pubsub            |

#### Methods

| name        | type     | Parameters Description               |
| ----------- | -------- | ------------------------------------ |
| getInstance | function | Gets a unique client instance method |
| getMyRooms  | function | get all rooms id                     |

#### attributes

| name        | type          | Parameters Description               |
| ----------- | ------------- | ------------------------------------ |
| getInstance | function      | Gets a unique client instance method |
| getMyRooms  | function      | get all rooms id                     |
| token       | string        | your access token                    |
| listeners   | {}            | pubsub list                          |
| channel     | Channel Class | The channel correlation              |
| messages    | Message Class | The messages correlation             |
| user        | User Class    | The user correlation                 |
| contact     | Contact Class | The contact correlation              |
