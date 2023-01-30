
# Web3MQ Tutorial

**This tutorial walks you through the key concepts of Web3MQ using a sample react project and successfully
send your first "hello world" to your friend!**

## Installation

> Install Web3MQ's JS SDK using a package manager of your choice

```bash
npm install @web3mq/client
or
yarn add @web3mq/client
```


## Usage

### Initialize Client

> Initialize Client and Connect to Web3MQ Network

In order to connect to the Web3MQ Network, both users and developers authenticate through wallet signatures, we
demonstrate below with an Ethereum wallet via Metamask, but Web3MQ is built to be compatible with wallets across
different chains.

#### Initialize Client and Connect to Web3MQ Network

:::note

While we are committed to building an open and collectively owned public good, our early stage testnet requires an API
key in order to connect. This is to control capacity to make sure that each early partner and developer is able to build
a great experience on top of Web3MQ. [Apply here](https://web3mq.com/apply).

:::

As Web3MQ is a federated network, our default JS SDK client has a method to help you connect to the best node for you.

Simply calling Client.init without connectUrl or an empty string returns a url of the best node determined for you, and
this url can be stored locally.

```ts
import {Client} from '@web3mq/client';

// You can save the bestEndpointUrl locally to skip endpoint search next time, which will save time, and
const bestEndpointUrl = await Client.init({
    connectUrl: '', //
    app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet
});
```

Calling Client.init with a specific connectUrl forces the client to connect to that specific node. When bestEndpointUrl
is stored, it might be time-saving to connect directly instead of running the search again.

```ts
import {Client} from '@web3mq/client';

const fastUrl = await Client.init({
    connectUrl: bestEndpointUrl, // takes in a valid endpoint url as input, when this paramter is given, client will always connect to that specific node.
    app_key: 'app_key', // Appkey applied from our team
});
```

#### API endpoints

During this initial testing phase, we've hosted complete networks of Web3MQ nodes in different regions around the globe.
Connect to these endpoints below, to access the Web3MQ Testnet.

- https://testnet-us-west-1-1.web3mq.com
- https://testnet-us-west-1-2.web3mq.com
- https://testnet-ap-jp-1.web3mq.com
- https://testnet-ap-jp-2.web3mq.com
- https://testnet-ap-singapore-1.web3mq.com
- https://testnet-ap-singapore-2.web3mq.com

### Register User

> Sign with wallet to register user and obtain message encryption keys

For any first-time user of Web3MQ's network, you'll need to register on Web3MQ's network. 

1. 调用Client.init()方法来初始化您的网络环境 
```tsx
import React, { useEffect, useState } from "react";
import { Client } from "@web3mq/client";
const fastUrl = await Client.init({
      connectUrl: '',
      app_key: "APP_KEY",
    });
```

:::tip
为了方便您的后续开发， 可以自定义方法去获取用户信息
:::
```tsx
const getAccount = async (didType: WalletType = "eth") => {
    const {address} = await Client.register.getAccount(didType);
    const {userid, userExist} = await Client.register.getUserInfo({
        did_value: address,
        did_type: didType,
    });
    return {
        address,
        userid,
        userExist,
    };
};

```

2. 需要首先生成一个基于您自定义密码加密的主密钥对，该秘钥对对您的web3mq账户有最高的权限，所以您需要非常安全的保管他
```tsx
const walletType = 'eth' | 'starknet'
const password = '123456'
const {address, userid } = await getAccount()
const {signContent: keysSignContent} = await Client.register.getMainKeypairSignContent({
    password,
    did_value: address,
    did_type: walletType,
});
const {sign: keysSignature} = await Client.register.sign(keysSignContent, address, walletType);
const {publicKey, secretKey} = await Client.register.getMainKeypairBySignature(
    keysSignature,
    password
);
```
3. 生成秘钥对之后需要使用公钥和钱包进行签名，这样才可以完成注册
```tsx
const {signContent} = await Client.register.getRegisterSignContent({
        userid,
        mainPublicKey: publicKey,
        didType: walletType,
        didValue: address,
    });
    const {sign: signature, publicKey: did_pubkey = ''} = await Client.register.sign(
        signContent,
        address,
        walletType
    );
const params = {
    userid,
    didValue: address,
    mainPublicKey: publicKey,
    did_pubkey,
    didType,
    nickname: '',
    avatar_url: '',
    signature,
}
const registerRes = await Client.register.register(params);
// register success
```
3. 注册成功后，利用您刚刚生成的秘钥对以及密码可以获取一对临时的keys,这对keys是为了让您能更加安全快捷的登录到Web3MQ网络
```ts
// login func
const {
    tempPrivateKey,
    tempPublicKey,
    pubkeyExpiredTimestamp,
    mainPrivateKey,
    mainPublicKey,
} = await Client.register.login({
    password,
    mainPublicKey: publicKey,
    mainPrivateKey: secretKey,
    userid,
    didType: walletType,
    didValue: address,
})
```
### Get client instance

:::tip
在此之前，我们再来看一下Client.init()的参数，[InitOptions](/docs/Web3MQ-SDK/JS-SDK/types/#initoptions)，两个需要特别注意的参数，
1. didKey  (格式：walletType:walletAddress  eg:   eth:0x00000000000)
2. tempPubkey  ( 登录成功之后返回给您的临时公钥 )

这两个参数可以保证您的web3mq client 处于在线状态，所以当您成功登录之后，每次调用init方法都需要传递该参数
:::

```tsx
import {Client} from "@web3mq/client";

await Client.init({
    connectUrl: '',
    app_key: "APP_KEY", // your Appkey
    didKey: `${walletType}:${address}`,
    tempPubkey: tempPublicKey,
})
const client = Client.getInstance({
    PrivateKey: tempPrivateKey,
    PublicKey: tempPublicKey,
    userid
})
```
### Events

:::tip
web3mq sdk 的数据是事件发布和监听来进行交互的，这样能使您更加优雅的更新数据 see: [Event center](/docs/Web3MQ-SDK/JS-SDK/eventCenter)
:::

### Send message
> send a message to a user
```tsx
const client = Client.getInstance(keys);
const address =  '0x1111111'
await client.message.sendMessage('hello world', address)
```

### Channels 
> Channels created or joined by you, which can also be understood as chat rooms

```tsx
const client = Client.getInstance(keys);
const address =  '0x1111111'
```

