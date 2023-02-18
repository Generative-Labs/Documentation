---
position: 2
---

# DappConnect

## Methods

| name           | type     | Parameters Description                                                                                                                                              | response                                                                        |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| constructor    | function | 1. [DappConnectInitParams](/docs/Web3MQ-SDK/DappConnect-SDK/typeList/#dappconnectinitparams) 2. [callback](/docs/Web3MQ-SDK/DappConnect-SDK/typeList/#initcallback) | DappConnect Client                                                              |
| init           | function | none                                                                                                                                                                | Promise: void                                                                   |
| getConnectLink | function | none                                                                                                                                                                | string for [web3mqDeepLink](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#deeplink) |
| sendSign       | function | [DappConnectSignParams](/docs/Web3MQ-SDK/DappConnect-SDK/typeList/#dappconnectsignparams)                                                                           | Promise: void                                                                   |

##

## Methods

### constructor
>  Init DappConnect client

```tsx
import { DappConnect, DappConnectCallbackParams } from "@web3mq/dapp-connect";

const handleDappConnectCallback = (event: DappConnectCallbackParams) => {};
const dappConnectClient = new DappConnect(
  { dAppID: "SwapChat:im" },
  handleDappConnectCallback
);
console.log("the dapp-connect client: ", dappConnectClient);
```

### getConnectLink()

> Create wallet connect deep link
```tsx
const deepLink = dappConnectClient.getConnectLink();
console.log(deepLink);
```


### sendSign()

:::tip
After calling the sendsign method, the signature result will not be received directly, but will be returned via a callback function
:::

```tsx
await dappConnectClient.sendSign({
  signContent: "test sign out",
  didValue: walletAddress || "",
});
```

