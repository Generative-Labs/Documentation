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

## Methods

| name                                                       | type     | Parameters Description                                      | response                                     |
| ---------------------------------------------------------- | -------- | ----------------------------------------------------------- | -------------------------------------------- |
| [getInstance](/docs/Web3MQ-SDK/JS-SDK/client/#getInstance) | function | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype) | [Client](/docs/Web3MQ-SDK/JS-SDK/client)     |
| [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)               | function | [initOptions](/docs/Web3MQ-SDK/JS-SDK/types/#initoptions)   | [Register](/docs/Web3MQ-SDK/JS-SDK/register) |

## Methods

### init()

```ts
import { Client } from 'web3-mq';
// ws and request host url
const connectUrl = 'us-west-2.web3mq.com';
// init sdk
Client.init({ connectUrl, app_key: 'vAUJTFXbBZRkEDRE' });
```

### getInstance()

```typescript
import { Client } from 'web3-mq';
// ws and request host url
const connectUrl = 'us-west-2.web3mq.com';
// init sdk
const register = Client.init({ connectUrl, app_key: 'vAUJTFXbBZRkEDRE' });
// sign MetaMask get keys
const { PrivateKey, PublicKey } = await register.signMetaMask(
  'https://www.web3mq.com' // your signContent URI
);
const keys = { PrivateKey, PublicKey };
// init client
const client = Client.getInstance(keys, HostURL);

console.log(client);
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
