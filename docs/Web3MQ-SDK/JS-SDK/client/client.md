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

| name                                        | type          | Parameters Description   |
| ------------------------------------------- | ------------- | ------------------------ |
| token                                       | string        | your access token        |
| listeners                                   | {}            | pubsub list              |
| [channel](/docs/Web3MQ-SDK/JS-SDK/channel)  | Channel Class | The channel correlation  |
| [messages](/docs/Web3MQ-SDK/JS-SDK/message) | Message Class | The messages correlation |
| user                                        | User Class    | The user correlation     |
| [contact](/docs/Web3MQ-SDK/JS-SDK/contact)  | Contact Class | The contact correlation  |

## Methods

| name                                                       | type     | Parameters Description |
| ---------------------------------------------------------- | -------- | ---------------------- |
| [getInstance](/docs/Web3MQ-SDK/JS-SDK/client/#getInstance) | function | LoginParams or string  |

## Events

### on()

```typescript
* on: (eventName: EventTypes, callback: any) => void;
```

```typescript
import { Web3MQ } from "web3-mq";

const client = Web3MQ.getInstance('YOUR_ACCESS_TOKEN');

client.on('channel.activeChange', (event) {
  console.log(event)
})
```

### off()

```typescript
* off: (eventName: EventTypes, callback?: any) => void;
```

```typescript
import { Web3MQ } from "web3-mq";

const client = Web3MQ.getInstance('YOUR_ACCESS_TOKEN');

client.off('channel.activeChange', (event) {
  console.log(event)
})
```

### once()

```typescript
* once: (eventName: EventTypes, callback?: any) => void;
```

```typescript
import { Web3MQ } from "web3-mq";

const client = Web3MQ.getInstance('YOUR_ACCESS_TOKEN');

client.once('channel.activeChange', (event) {
  console.log(event)
})
```

### emit()

```typescript
* emit: (eventName: EventTypes, ...args: any[]) => void;
```

```typescript
import { Web3MQ } from "web3-mq";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.emit("channel.activeChange", {
  data: "",
});
```

## Methods

### getInstance()

```typescript
Web3MQ.getInstance([LoginParams](/docs/Web3MQ-SDK/JS-SDK/types/#loginparams) | token: string);
```

> create a client

#### Usage

> call [Connect MeatMask](/docs/Web3MQ-SDK/JS-SDK/quickStart/#connect-metamask)
>
> call [getLoginRandomSecret()](/docs/Web3MQ-SDK/JS-SDK/utils/#getloginrandomsecret)

```typescript
import { Web3MQ, login, getLoginRandomSecret } from "web3-mq";
async function getParams() {
  const address = ethereum.selectedAddress; //  call Connect MeatMask
  // call getLoginRandomSecret
  const randomSecret = await getLoginRandomSecret({
    wallet_address: address,
  });

  const msg = `0x${Buffer.from(randomSecret, "utf8").toString("hex")}`;
  let signContent = `Web3MQ wants you to sign in with your Ethereum account:
${address}
Sign-In With Ethereum Example Statement
URI: https://chat.web3messaging.online
Version: 1
Chain ID: 1
Nonce: ${msg}
Issued At: 2022-05-23T12:52:57.500Z
Expiration Time: 2022-05-25T12:52:57.489Z`;
  // @ts-ignore
  const signature = await ethereum.request({
    method: "personal_sign",
    params: [signContent, address, "swapchat"],
  });

  return {
    login_random_secret: randomSecret,
    wallet_address: address,
    signature,
  };
}
const initParams = getParams();

// create client
const client = Web3MQ.getInstance(Params);
```

or

```typescript
import { Web3MQ } from "web3-mq";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");
```
