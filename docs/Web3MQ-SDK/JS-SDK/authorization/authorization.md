---
position: 5
---

# Authorization

## Methods

| name          | type     | Parameters Description                  | response                                                        |
| ------------- | -------- | --------------------------------------- | --------------------------------------------------------------- |
| SignMetaMask  | function | (domainUrl:string, connectUrl?: string) | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype)     |
| getEthAccount | function | none                                    | [EthAccountType](/docs/Web3MQ-SDK/JS-SDK/types/#ethaccounttype) |

## GetEthAccount

### Code

```tsx
import { Register } from 'web3-mq';

const account = await Register.EthAccountType();

console.log(account);
```

## SignMetaMask

### Code

```tsx
import { Register } from 'web3-mq';

// request host url
const HostURL = 'us-west-2.web3mq.com';

const { PrivateKey, PublicKey } = await Register.signMetaMask(
  'https://www.web3mq.com', // your domain url
  HostURL // register domain url
);

console.log(PrivateKey, PublicKey);
```
