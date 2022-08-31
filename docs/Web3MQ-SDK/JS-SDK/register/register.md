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

const register = Client.init();

const account = await Register.getEthAccount();

console.log(account);
```

## SignMetaMask

### Code

```tsx
import { Client } from 'web3-mq';

const register = Client.init({ app_key: 'vAUJTFXbBZRkEDRE' });

const { PrivateKey, PublicKey } = await register.signMetaMask(
  'https://www.web3mq.com' // your signContent URI
);

console.log(PrivateKey, PublicKey);
```
