---
position: 2
---

# Register

## Methods

| name          | type     | Parameters Description  | response                                                        |
| ------------- | -------- | ----------------------- | --------------------------------------------------------------- |
| SignMetaMask  | function | (signContentURI:string) | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype)     |
| getEthAccount | function | none                    | [EthAccountType](/docs/Web3MQ-SDK/JS-SDK/types/#ethaccounttype) |

## GetEthAccount

### Code

```tsx
import { Client } from 'web3-mq';

// 1. You must initialize the SDK, the init function is asynchronous
await Client.init();

// 2. Meke sure your sdk is initialize
const account = await Client.register.getEthAccount();

console.log(account);
```

## SignMetaMask

### Code

```tsx
import { Client } from 'web3-mq';

// 1. You can save the fastUrl locally to reduce requests
const fastUrl = await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key',// Appkey applied from our team
});

// 2. You must ensure that the Client.init initialization is complete
const { PrivateKey, PublicKey } = await Client.register.signMetaMask(
  'https://www.web3mq.com' // your signContent URI
);

console.log(PrivateKey, PublicKey);
```
