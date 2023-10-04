---
position: 3
---

# UseAuth

> UseAuth is a handle auth and secret key related hook, also includes a common wallet connection and signature , can create web3mq encrypted secret key pairs , provides a secret key storage management , can also support the user to export the secret key . Easier connection to web3mq.

:::tip
Currently walletType only supports metamask, argentx and braavos wallets, if you want to use other wallet types, please use the split method.
:::

## Easy Methods

### connectToWeb3MQ()

|                 |                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Initialize the client, the network, and choose the network with the lowest latency based on your location                                                                                         |
| **Type**        | function: (paylaod: [ConnectToWeb3MQPayload](/docs/Web3MQ-SDK/ReactHooks/auth/#connecttoweb3mqpayload) ) => Promise<[ConnectToWeb3MQRes](/docs/Web3MQ-SDK/ReactHooks/auth/#connecttoweb3mqres) \> |
| **Params**      | [ConnectToWeb3MQPayload](/docs/Web3MQ-SDK/ReactHooks/auth/#connecttoweb3mqpayload)                                                                                                                |
| **Response**    | [ConnectToWeb3MQRes](/docs/Web3MQ-SDK/ReactHooks/auth/#connecttoweb3mqres)                                                                                                                        |

## Split Methods

### init()

|                 |                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| **Description** | Initialize the client, the network, and choose the network with the lowest latency based on your location |
| **Type**        | function: () => Promise<string\>                                                                          |
| **Params**      | null                                                                                                      |
| **Response**    | string                                                                                                    |

### checkUser()

|                 |                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Connects to the selected wallet, generates a Web3mq user id, and verifies that the user exists.                                                                          |
| **Type**        | function: ( walletType: [WalletType](/docs/Web3MQ-SDK/ReactHooks/auth/#wallettype) ) => Promise<[CheckUserResType](/docs/Web3MQ-SDK/ReactHooks/auth/#checkuserrestype)\> |
| **Params**      | [walletType](/docs/Web3MQ-SDK/ReactHooks/auth/#wallettype)                                                                                                               |
| **Response**    | [CheckUserResType](/docs/Web3MQ-SDK/ReactHooks/auth/#checkuserrestype)                                                                                                   |

### getSignContentForMainKeys()

coming soon

### getMainKeysBySign()

coming soon

### getSignContentForRegister()

coming soon

### registerBySign()

coming soon

### connectToWeb3MQBySign()

coming soon

#### Usage

```tsx
import React, { useEffect, useState } from "react";
import { ChatProvider, useAuth, useChat } from "@web3mq/react-hooks";
import "./app.css";

const walletType = "metamask";
const appkey = "YOUR_APP_KEY";

const App: React.FC = () => {
  const { init, checkUser } = useAuth(appkey);
  const callInit = async () => {
    const res = await init();
    /**
  respose: https://dev-ap-jp-1.web3mq.com
  */
  };
  const callCheckUser = async () => {
    await init();
    const res = await checkUser(walletType);
    /**
  respose: {
    "userid":"user:8284a0e7d4fb46d389f444bc84a348d8e8d0e1d94d1c6a1c2ef38a8e",
    "userExist":true,
    "didValue":"0x7236b0f4f1409afdc7c9fc446943a7b84b6513a1",
    "didType":"eth"
}
  */
  };

  return (
    <div className="app">
      <div className="btns">
        <button onClick={callInit}>init</button>
        <button onClick={callCheckUser}>checkUser</button>
      </div>
      <div></div>
    </div>
  );
};

export default App;
```

## States

## Types

### WalletType

| name           | type   | enum value                          | Description |
| -------------- | ------ | ----------------------------------- | ----------- |
| **WalletType** | string | `metamask` \|`argentX` \| `braavos` | wallet type |

### CheckUserResType

| Keys           | Value Type | enum value                                                                             | Description        |
| -------------- | ---------- | -------------------------------------------------------------------------------------- | ------------------ |
| **didType**    | string     | [BlockChainType](https://docs.web3mq.com/docs/Web3MQ-SDK/JS-SDK/types/#blockchaintype) | block chain type   |
| **didValue**   | string     | -                                                                                      | 钱包地址           |
| **userExist**  | bool       | `true` \|`false`                                                                       | 表示用户是否注册过 |
| **userid**     | string     | -                                                                                      | web3mq 用户 id     |
| **WalletType** | string     | `metamask` \|`argentX` \| `braavos`                                                    | wallet type        |

### ConnectToWeb3MQPayload

| Keys           | Value Type | enum value                                                 | Description     | Required |
| -------------- | ---------- | ---------------------------------------------------------- | --------------- | -------- |
| **walletType** | string     | [walletType](/docs/Web3MQ-SDK/ReactHooks/auth/#wallettype) | wallet type     | true     |
| **password**   | string     | -                                                          | user password   | true     |
| **nickname**   | string     | -                                                          | user nickname   | false    |
| **avatarUrl**  | string     | -                                                          | user avatar url | false    |

### ConnectToWeb3MQRes

| Keys                       | Value Type | Description             |
| -------------------------- | ---------- | ----------------------- |
| **tempPrivateKey**         | string     | session key             |
| **tempPublicKey**          | string     | session key             |
| **mainPublicKey**          | string     | web3mq main public key  |
| **mainPrivateKey**         | string     | web3mq main private key |
| **pubkeyExpiredTimestamp** | string     | session expired time    |
