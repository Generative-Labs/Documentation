---
position: 2
---

# Register

## Methods

| name          | type     | Parameters Description                                                  | response                                                        |
| ------------- | -------- | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
| SignMetaMask  | function | [signMetaMaskParams](/docs/Web3MQ-SDK/JS-SDK/types/#signmetamaskparams) | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype)     |
| getEthAccount | function | none                                                                    | [EthAccountType](/docs/Web3MQ-SDK/JS-SDK/types/#ethaccounttype) |

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
  app_key: 'app_key', // Appkey applied from our team
});

// 2. You must ensure that the Client.init initialization is complete
const { PrivateKey, PublicKey, userid } = await Client.register.signMetaMask({
  signContentURI: 'https://www.web3mq.com', // your signContent URI
  EthAddress: 'your eth address', //  *Not required* your eth address, if not use your MetaMask eth address
});

console.log(PrivateKey, PublicKey, userid);
```
