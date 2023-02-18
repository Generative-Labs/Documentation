---
sidebar_position: 2
---

# Type and Standards

## Type List

### DappConnectInitParams

```ts
export interface Web3MQBridgeOptions {
  dAppID: string;
  nodeID?: string;
}
```

### initCallback()

> params: [DappConnectCallbackParams](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#dappconnectcallbackparams)

### DappConnectCallbackParams

| name | type                                                                   | format                                                                              | desc          | eg                                      |
| ---- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------- | --------------------------------------- |
| type | connect \| dapp-connect                                                | [callbackType](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#dappconnect-callback-type) | callback type | "connect" or "dapp-connect"             |
| data | [CallbackData](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#callbackdata) | -                                                                                   | response body | { code: 0, message: '', approve: true } |

### CallbackData

| name     | type                                                                                   | format | desc           | eg                                                       | default |
| -------- | -------------------------------------------------------------------------------------- | ------ | -------------- | -------------------------------------------------------- | ------- |
| metadata | [CallbackMetedataType](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#callbackmetedatatype) | -      | metadata       | { action: 'connectResponse', approve: true, result: {} } | null    |
| approve  | bool                                                                                   | -      | approve status | true                                                     | -       |
| code     | number                                                                                 | -      | status code    | 0                                                        | -       |
| message  | string                                                                                 | -      | message        | connect success                                          | -       |

### CallbackMetedataType

| name    | type                                                                                               | format                                                                               | desc           | eg                                        |
| ------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------- | ----------------------------------------- |
| action  | signResponse \| connectResponse                                                                    | [action](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#dappconnect-callback-action-type) | metadata       | 'connectResponse'                         |
| approve | bool                                                                                               | -                                                                                    | approve status | true                                      |
| result  | [CallbackMetedataResultType](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#callbackmetedataresulttype) | -                                                                                    | message        | { address: '0x0000', walletTypes: 'eth' } |

### CallbackMetedataResultType

| name       | type   | format    | desc           | eg                                        | default   |
| ---------- | ------ | --------- | -------------- | ----------------------------------------- | --------- |
| signature  | string | -         | sign res       | { address: '0x0000', walletTypes: 'eth' } | undefined |
| address    | string | 0x0000000 | wallet address | true                                      | undefined |
| walletType | string | eth       | wallet type    | 0                                         | undefined |

### DappConnectSignParams

| name        | type   | format              | desc             | eg         |
| ----------- | ------ | ------------------- | ---------------- | ---------- |
| signContent | string | -                   | any sign message | hello      |
| didValue    | string | a string of address | wallet address   | 0x00000000 |

## Standard List

### DappConnect Callback Type

> Return type of callback function

```ts
const callbackType = "connect";
// When type is connect, it means that the returned data represents the connection status of the websocket

const callbackType = "dapp-connect";
// When type is connect, it means that the data returned is the communication data representing the dapp and the wallet
```

### DappConnect Callback action type

> Return action of callback function

```ts
const callbackType = "connectResponse";
// When type is connectResponse, it means that the result in the metadata corresponds to the wallet connection action

const callbackType = "signResponse";
// When type is connect, it means that the result in the metadata corresponds to the wallet action
```

### deeplink

> web3mq deeplink

```ts
`web3mq://?action=connect&topicId=${topicID}&ed25519Pubkey=${PublicKey}&bridge=${encodeURIComponent(
  wsUrl
)}&iconUrl=&website=${encodeURIComponent(`${window.location.href}`)}&redirect=`;
```

### DappConnectCallbackParams

> The data correspond to some description of the situation

#### When the network connection is successful

```tsx
const callbackData = {
  type: "connect",
  data: {
    message: "connect success",
    approve: true,
    code: 0,
    metadata: null,
  },
};
```

#### When the wallet is successfully connected

```ts
const callbackData = {
  type: "dapp-connect",
  data: {
    metadata: {
      action: "connectResponse",
      approve: true,
      result: {
        address: "0xB330358efD537E9B62e3bAE4c34f7694d857058b",
        walletType: "eth",
      },
    },
    approve: true,
    message: "",
    code: 0,
  },
};
```

#### When the wallet signature is successful

```ts
const callbackData = {
  type: "dapp-connect",
  data: {
    metadata: {
      action: "signResponse",
      approve: true,
      result: {
        signature:
          "0xeca2fc617eb63f5fb7c9978811fa25ff1ba01d38d3f219a5be8dc2712a0ce8497f98415f8d1ead518dc6c8c3ac5f53217044c477f550adf34fe2c57b8f1b52d01b",
      },
    },
    approve: true,
    message: "",
    code: 0,
  },
};
```

:::tip

When the return value of approve is FALSE, it means that there is an accident in the communication between wallet and dapp, please find below the corresponding code and message

:::

#### Code and message when network connection fails

| type         | action          | code | message                                         |
| ------------ | --------------- | ---- | ----------------------------------------------- |
| connect      | -               | 1    | Temporary connection establishment failure      |
| connect      | -               | 2    | Connection timeout, please try again to connect |
| connect      | -               | 3    | Connection closed, please try again to connect  |
| dapp-connect | connectResponse | 4    | QR code has expired, please regenerate QR code  |
| dapp-connect | connectResponse | 5    | Wallet cancels authorization, please try again  |
| dapp-connect | connectResponse | 6    | Wallet connection error, please try again       |
| dapp-connect | signResponse    | 7    | Wallet signature timeout, please try again      |
| dapp-connect | signResponse    | 8    | Wallet cancels signature, please try again      |
| dapp-connect | signResponse    | 9    | Signature error, please try again               |
| dapp-connect | signResponse    | 10   | An unknown error has occurred, please try again |
