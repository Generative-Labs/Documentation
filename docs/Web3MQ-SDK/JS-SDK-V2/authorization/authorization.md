---
position: 5
---

# Authorization

## Methods

| name          | type     | Parameters Description | response                                                           |
| ------------- | -------- | ---------------------- | ------------------------------------------------------------------ |
| SignMetaMask  | function | (domainUrl:string)     | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#keypairstype)     |
| getEthAccount | function | none                   | [EthAccountType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#ethaccounttype) |

## GetEthAccount

### Code

```tsx
import { MetaMask } from 'web3-mq';

const account = await MetaMask.EthAccountType();

console.log(account);
```

## SignMetaMask

### Code

```tsx
import { MetaMask } from 'web3-mq';

const { PrivateKey, PublicKey } = await MetaMask.signMetaMask(
  'https://www.web3mq.com' // your_domain_url
);

console.log(PrivateKey, PublicKey);
```
