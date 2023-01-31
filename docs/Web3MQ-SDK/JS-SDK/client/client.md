---
position: 3
---

# Client

## Events

| name                                         | type     | Parameters Description  |
| -------------------------------------------- | -------- | ----------------------- |
| [on](/docs/Web3MQ-SDK/JS-SDK/client/#on)     | function | Mount an event listener |
| [off](/docs/Web3MQ-SDK/JS-SDK/client/#off)   | function | Cancel an event listener|
| [once](/docs/Web3MQ-SDK/JS-SDK/client/#once) | function | Trigger an event once   |
| [emit](/docs/Web3MQ-SDK/JS-SDK/client/#emit) | function | Trigger an event        |

## Properties

| name                                       | type                                                        | Parameters Description        |
| ------------------------------------------ | ----------------------------------------------------------- | ----------------------------- |
| keys                                       | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype) | your PrivateKey and PublicKey |
| listeners                                  | {}                                                          | Event Center                  |
| [channel](/docs/Web3MQ-SDK/JS-SDK/channel) | Channel Class                                               | The channel correlation       |
| [message](/docs/Web3MQ-SDK/JS-SDK/message) | Message Class                                               | The messages correlation      |
| [user](/docs/Web3MQ-SDK/JS-SDK/user)       | User Class                                                  | The user correlation          |
| [contact](/docs/Web3MQ-SDK/JS-SDK/contact) | Contact Class                                               | The contact correlation       |
| [notify](/docs/Web3MQ-SDK/JS-SDK/notify)   | Notify Class                                                | The notify correlation        |
| [topic](/docs/Web3MQ-SDK/JS-SDK/pubsub)    | Topic Class                                                 | The topic correlation         |

## Methods

| name                                                               | type     | Parameters Description                                                                        | response                                 |
| ------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)                       | function | [InitOptions](/docs/Web3MQ-SDK/JS-SDK/types/#initoptions)                                     | Promise: [Web3MQAPiEndpoints](/docs/Web3MQ-SDK/JS-SDK/standards/#web3mq-api-endpoints)|
| [getInstance](/docs/Web3MQ-SDK/JS-SDK/client/#getinstance)         | function | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype)                                   | [Client](/docs/Web3MQ-SDK/JS-SDK/client) |
| [getSignClient](/docs/Web3MQ-SDK/JS-SDK/client/#getsignclient)     | function | ([SendTempConnectOptions](/docs/Web3MQ-SDK/JS-SDK/types/#sendtempconnectoptions), callbackFn) | void                                     |
| [initDappConnectClient](/docs/Web3MQ-SDK/JS-SDK/client/#getQrCodeClient) | function | ([SendTempConnectOptions](/docs/Web3MQ-SDK/JS-SDK/types/#sendtempconnectoptions), callbackFn) | void                                     |

## Methods

### init()
> Connect the best Web3MQ's network node.

```ts
import { Client } from "@web3mq/client";
// 1. You must initialize the SDK, the init function is asynchronous

const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";
// 1. tempPubkey
// We will give you the exclusive tempPubkey when you log in successfully;
// Usually this key is kept by you eg: save in localStorage
const didKey = localStorage.getItem("DID_KEY") || "";
//  2. didKey
//  A concatenated string of the account and account type to be logged into
// eg: eth:0x0000000000000

await Client.init({
  connectUrl: "example url", // The fastURL you saved to local
  app_key: "app_key", // Appkey applied from our team
  env: "test", // The default is the test environment
  tempPubkey, // After login get temp public key
  didKey, // did_key:did_value  eg: eth:0x00000000123123;
});
```

### getInstance()
> Create and get the Client Instance.

```typescript
import { Client } from "@web3mq/client";
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: "example url", // The fastURL you saved to local
  app_key: "app_key", // Appkey applied from our team
});
// 2.Login and get keys
const { address } = await Client.register.getAccount(didType);
const { userid, userExist } = await Client.register.getUserInfo({
  did_value: address,
  did_type: didType,
});

let localMainPrivateKey = "";
let localMainPublicKey = "";

if (!userExist) {
  const registerRes = await Client.register.register({
    password,
    did_value: address,
    userid,
    did_type: didType,
    avatar_url: `https://cdn.stamp.fyi/avatar/${address}?s=300`,
  });
  localMainPrivateKey = registerRes.mainPrivateKey;
  localMainPublicKey = registerRes.mainPublicKey;
}

const {
  TempPrivateKey,
  TempPublicKey,
  pubkeyExpiredTimestamp,
  mainPrivateKey,
  mainPublicKey,
} = await Client.register.login({
  password,
  userid,
  did_value: address,
  did_type: didType,
  mainPublicKey: localMainPublicKey,
  mainPrivateKey: localMainPrivateKey,
});
// 3. You must ensure that the Client.init initialization is complete and that you have a key pair
const client = Client.getInstance({
  PrivateKey: TempPrivateKey,
  PublicKey: TempPublicKey,
  userid: userid,
});

console.log(client);
```

### getSignClient
> Get sign client.

```ts
import { Client, SignClientCallBackType } from "@web3mq/client";
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: "example url", // The fastURL you saved to local
  app_key: "app_key", // Appkey applied from our team
});
// 2. Create the handleEvent function to receive events
const handleEvent = (options: SignClientCallBackType) => {
  console.log(options);
};
// 3. get Sign Client, Make sure that init is complete
await Client.getSignClient(
  {
    dAppID: dapp_id,
    topicID: topic_id,
    signatureTimestamp: signature_timestamp,
    dAppSignature: dapp_signature,
  },
  handleEvent
);
```

### initDappConnectClient
> Create the client that connects to the DApp.

```ts
import { Client } from "@web3mq/client";
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: "example url", // The fastURL you saved to local
  app_key: "app_key", // Appkey applied from our team
});
// 2. Create the handleEvent function to receive events
const handleEvent = (options: SignClientCallBackType) => {
  console.log(options);
};
// 3. get DappConnect Client
Client.initDappConnectClient({ dAppID: "SwapChat:im" }, handleEvent);

// 4. Here you can use the client to interact with the wallet
Client.dappConnectClient.getConnectLink();
```

## Events

### on()

```typescript
* on: (eventName: EventTypes, callback: any) => void;
```

```typescript
client.on('channel.activeChange', (event) {
  console.log(event)
})
```

### off()

```typescript
* off: (eventName: EventTypes, callback?: any) => void;
```

```typescript
client.off('channel.activeChange', (event) {
  console.log(event)
})
```

### once()

```typescript
* once: (eventName: EventTypes, callback?: any) => void;
```

```typescript
client.once('channel.activeChange', (event) {
  console.log(event)
})
```

### emit()

```typescript
* emit: (eventName: EventTypes, ...args: any[]) => void;
```

```typescript
client.emit("channel.activeChange", {
  data: "",
});
```
