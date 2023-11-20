
# Ethos Tutorial

**This tutorial walks you through the key concepts of Ethos using a sample react project and successfully
send your first "hello world" to your friend!**

## Installation

> Install Ethos's JS SDK using a package manager of your choice

```bash
npm install @web3mq/client
or
yarn add @web3mq/client
```


## Usage

### Initialize Client

> Initialize Client and Connect to Ethos Network

In order to connect to the Ethos Network, both users and developers authenticate through wallet signatures, we
demonstrate below with an Ethereum wallet via Metamask, but Ethos is built to be compatible with wallets across
different chains.

#### Initialize Client and Connect to Ethos Network

:::note

While we are committed to building an open and collectively owned public good, our early stage testnet requires an API
key in order to connect. This is to control capacity to make sure that each early partner and developer is able to build
a great experience on top of Ethos. [Apply here](https://web3mq.com/apply).

:::

As Ethos is a federated network, our default JS SDK client has a method to help you connect to the best node for you.

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

During this initial testing phase, we've hosted complete networks of Ethos nodes in different regions around the globe.
Connect to these endpoints below, to access the Ethos Testnet.

- https://testnet-us-west-1-1.web3mq.com
- https://testnet-us-west-1-2.web3mq.com
- https://testnet-ap-jp-1.web3mq.com
- https://testnet-ap-jp-2.web3mq.com
- https://testnet-ap-singapore-1.web3mq.com
- https://testnet-ap-singapore-2.web3mq.com

### Register User

> Sign with wallet to register user and obtain message encryption keys

For any first-time user of Ethos's network, you'll need to register on Ethos's network. 

1. Call the Client.init() to initialize your network
```tsx
import React, { useEffect, useState } from "react";
import { Client } from "@web3mq/client";
const fastUrl = await Client.init({
    connectUrl: '',
    app_key: "APP_KEY",
});
```

:::tip
For your convenience, custom methods can be used to get user information
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

2. You need to first generate a main key pair based on your custom password encryption, this secret key pair has the highest authority over your Ethos account, so you need to keep it very safe
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
3. After generating the secret key pair, you need to sign with the public key and the wallet to complete the registration
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
    didType: walletType,
    nickname: '',
    avatar_url: '',
    signature,
}
const registerRes = await Client.register.register(params);
// register success
```
3. After successful registration, you can get a pair of temporary keys with the secret key pair you just generated and the password, this pair of keys is to allow you to login to the Ethos network more securely and quickly
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
Before that, let's take a look at the parameters of Client.init(), [InitOptions](/docs/Ethos-SDK/JS-SDK/types/#initoptions), two parameters that need special attention, 
1. didKey  (Format：walletType:walletAddress  eg:   eth:0x00000000000)
2. tempPubkey  ( The temporary public key returned to you after a successful login )

These two parameters ensure that your Ethos client is online, so after you have successfully logged in, you will need to pass this parameter every time you call the init method
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
The Ethos sdk data interaction is done through event posting and listening, which allows you to update data more elegantly 

see: [Event center](/docs/Ethos-SDK/JS-SDK/eventCenter)
:::

### Send message
> send a message to a user

```tsx
const handleEvent = (event: any) => {
    console.log(event)
}
const client = Client.getInstance(keys);
//  After the message has been sent, the latest message sent can be retrieved in this event callback
client.on('message.send', handleEvent)
// After the message has been sent successfully, the latest message sent can be retrieved in this event callback
client.on('message.delivered', handleEvent)
const address =  '0x1111111'
await client.message.sendMessage('hello world', address)

```
### Channels
> Usually a conversation in Ethos is between two or more wallets

#### Create  a channel and send message to channel 
```ts
const handleEvent = (event: any) => {
    console.log(event)
    const { channelList, activeChannel } = client.channel;
    if (!channelList) {
      return;
    }
    // set active channel
    client.channel.setActiveChannel(channelList[0])
    // send message to channel
    client.message.sendMessage('hello channel');
}
const client = Client.getInstance(keys);
// Once the channel has been created, the latest channel created can be retrieved in the event callback
client.on('channel.getList', handleEvent)
const chatRoomName = ''
await client.channel.createRoom({
    group_name: chatRoomName || 'default room',
})
```

#### Invite friend join your channel 
```ts
const handleEvent = (event: any) => {
    console.log(event)
    const { channelList, activeChannel } = client.channel;
    if (!channelList) {
      return;
    }
    // set active channel
    client.channel.setActiveChannel(channelList[0])
    // send message to channel
    client.message.sendMessage('hello channel');
}
const client = Client.getInstance(keys);
const channel = {} // your create channel obj  
await client.channel.setActiveChannel(channel);
const ids = [
    'ethos userid1',
    'ethos userid2',
]
await client.channel.inviteGroupMember(ids);
```


#### Query channels
> Query the channels you have created or joined, including the addresses you have chatted with

```ts
const handleEvent = (props: { type: EventTypes }) => {
    console.log(event)
    if (props.type === 'channel.getList') {
        const { channelList, activeChannel } = client.channel;
        console.log('your channel list:', channelList)
    }
}
const client = Client.getInstance(keys);
// Call queryChannels func ，You can get the latest channel list in the event callback
client.on('channel.getList', handleEvent)
await client.channel.queryChannels({
    page: 1,
    size: 20
})
```

### Messages 
> Messages usually come from group chats or 1v1

#### Receive new messages
> We use the `message.delivered` event to get a listener to see if someone sends you a new message

```tsx
const handleEvent = (event: any) => {
    console.log(event)
    if (event.type === 'message.delivered') {
        const { messageList } = client.message;
        console.log(messageList)
    }
}
const client = Client.getInstance(keys);
// After the message has been sent successfully, the latest message sent can be retrieved in this event callback
client.on('message.delivered', handleEvent)
```


#### Query the history of messages in a channel
> The source of the message is usually a chat or an address


```tsx

const handleEvent = (props: { type: EventTypes }) => {
    console.log(event)
    if (props.type === 'message.getList') {
        const { messageList } = client.message;
        console.log('message list:', messageList)
    }
}
const client = Client.getInstance(keys);
// Call getMessageList func ，You can get the latest message list in the event callback
client.on('channel.getList', handleEvent)
const channelId = `Ethos's userid` | 'chat id'
await await client.message.getMessageList({
    page: 1, size: 20
}, channelId);
```

### Notification
> Generally notifications are received passively, we can also actively send some notifications to the address, such as requesting a follow, or pushing some notifications to your followers

#### Receive new notification
> The `notification.getList` event is fired when a new notification is available

```tsx
const handleEvent = (event: any) => {
    console.log(event)
    if (event.type === 'notification.getList') {
        const { notificationList } = client.notify;
        console.log(notificationList)
    }
}
const client = Client.getInstance(keys);
// After the message has been sent successfully, the latest message sent can be retrieved in this event callback
client.on('notification.getList', handleEvent)
```

