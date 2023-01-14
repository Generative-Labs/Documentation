---
position: 3
---

# Client

## Events

| name                                         | type     | Parameters Description |
| -------------------------------------------- | -------- | ---------------------- |
| [on](/docs/Web3MQ-SDK/JS-SDK/client/#on)     | function | create pubsub          |
| [off](/docs/Web3MQ-SDK/JS-SDK/client/#off)   | function | cancel pubsub          |
| [once](/docs/Web3MQ-SDK/JS-SDK/client/#once) | function | once pubsub            |
| [emit](/docs/Web3MQ-SDK/JS-SDK/client/#emit) | function | emit pubsub            |

## Properties

| name                                       | type                                                        | Parameters Description        |
| ------------------------------------------ | ----------------------------------------------------------- | ----------------------------- |
| keys                                       | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype) | your PrivateKey and PublicKey |
| listeners                                  | {}                                                          | pubsub list                   |
| [channel](/docs/Web3MQ-SDK/JS-SDK/channel) | Channel Class                                               | The channel correlation       |
| [message](/docs/Web3MQ-SDK/JS-SDK/message) | Message Class                                               | The messages correlation      |
| [user](/docs/Web3MQ-SDK/JS-SDK/user)       | User Class                                                  | The user correlation          |
| [contact](/docs/Web3MQ-SDK/JS-SDK/contact) | Contact Class                                               | The contact correlation       |
| [notify](/docs/Web3MQ-SDK/JS-SDK/notify)   | Notify Class                                                | The notify correlation        |
| [topic](/docs/Web3MQ-SDK/JS-SDK/pubsub)    | Topic Class                                                 | The topic correlation         |

## Methods

| name                                                           | type     | Parameters Description                                                                        | response                                 |
| -------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)                   | function | [initOptions](/docs/Web3MQ-SDK/JS-SDK/types/#initoptions)                                     | fastUrl: string                          |
| [getInstance](/docs/Web3MQ-SDK/JS-SDK/client/#getinstance)     | function | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype)                                   | [Client](/docs/Web3MQ-SDK/JS-SDK/client) |
| [getSignClient](/docs/Web3MQ-SDK/JS-SDK/client/#getsignclient) | function | ([SendTempConnectOptions](/docs/Web3MQ-SDK/JS-SDK/types/#sendtempconnectoptions), callbackFn) | null                                     |

## Methods

### init()

```ts
import { Client } from 'web3-mq';
// 1. You must initialize the SDK, the init function is asynchronous

const tempPubkey = localStorage.getItem('PUBLIC_KEY') || '';
// 1. tempPubkey
// We will give you the exclusive tempPubkey when you log in successfully;
// Usually this key is kept by you eg: save in localStorage
const didKey = localStorage.getItem('DID_KEY') || '';
//  2. didKey
//  A concatenated string of the account and account type to be logged into
// eg: eth:0x0000000000000


await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
  env: 'test', // The default is the test environment
  tempPubkey, // After login get temp public key
  didKey // did_key:did_value  eg: eth:0x00000000123123;
});
```

### getInstance()

```typescript
import { Client } from 'web3-mq';
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
});
// 2. sign MetaMask get keys
const { PrivateKey, PublicKey, userid } = await Client.register.signMetaMask({
  signContentURI: 'https://www.web3mq.com', // your signContent URI
  EthAddress: 'your eth address', // *Not required*  your eth address, if not use your MetaMask eth address
});
const keys = { PrivateKey, PublicKey, userid };
// 3. You must ensure that the Client.init initialization is complete and that you have a key pair
const client = Client.getInstance(keys);

console.log(client);
```

### getSignClient

```ts
import { Client, SignClientCallBackType } from 'web3-mq';
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
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
client.emit('channel.activeChange', {
  data: '',
});
```
