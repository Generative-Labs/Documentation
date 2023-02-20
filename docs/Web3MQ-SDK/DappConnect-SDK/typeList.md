---
sidebar_position: 2
---

# Type and Standards

## Type List

### DappConnectInitParams

| name           | type   | format                                                             | desc                           | eg          | default |
| -------------- | ------ | ------------------------------------------------------------------ | ------------------------------ | ----------- | ------- |
| dAppID         | string | [DappID](https://docs.web3mq.com/docs/Web3MQ-API/dapp/create_dapp) | your dapp id                   | SwapChat:im | -       |
| requestTimeout | number | ms                                                                 | max request timeout            | 180000      | 180000  |
| keepAlive      | bool   | -                                                                  | Save current connection status | true        | true    |

:::tip

KeepAlive Explain

<!-- 开启状态：初始化 client 之后会自动恢复到 wallet 和 dapp 上次的连接状态

wallet 和 dapp 建立连接之后，如果 dapp 端断开网络或者因为某些意外导致了 websocket 断开了，那么我们会从之前的状态中获取您连接的钱包地址，并且恢复到您最后一次的操作。

eg: 钱包授权连接 dapp 之后，dapp 客户端关闭，再次打开 dapp 之后，初始化 client 之后会自动恢复到钱包授权的状态，可以直接发起签名

关闭状态：初始化 client 之后，dapp 每次都需要和 wallet 请求授权 -->

Opened state: After initializing the client, it will automatically revert to the last connection between the wallet and the dapp.

After the connection between wallet and dapp is established, if the dapp side disconnects from the network or the websocket is disconnected due to some accident, then we will get the wallet address from the previous state and restore to your last operation.

eg: After the wallet authorization connects to the dapp, the dapp client is closed, after opening the dapp again, after initializing the client, it will automatically revert to the wallet authorization state and you can initiate a signature directly

Closed state: After initializing the client, dapp needs to request authorization with the wallet every time

:::

### initCallback()

> params: [DappConnectCallbackParams](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#dappconnectcallbackparams)

### DappConnectCallbackParams

| name | type                                                                   | format                                                                              | desc          | eg                                      |
| ---- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------- | --------------------------------------- |
| type | connect \| dapp-connect                                                | [callbackType](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#dappconnect-callback-type) | callback type | "connect" or "dapp-connect"             |
| data | [CallbackData](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#callbackdata) | -                                                                                   | response body | { code: 0, message: '', approve: true } |

### CallbackDataType

| name     | type                                                                                   | format | desc           | eg                                                       | default   |
| -------- | -------------------------------------------------------------------------------------- | ------ | -------------- | -------------------------------------------------------- | --------- |
| metadata | [CallbackMetedataType](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#callbackmetedatatype) | -      | metadata       | { action: 'connectResponse', approve: true, result: {} } | null      |
| method   | provider_authorization \| personal_sign                                                | -      | request method | provider_authorization                                   | undefined |
| approve  | bool                                                                                   | -      | approve status | true                                                     | -         |
| code     | number                                                                                 | -      | status code    | 0                                                        | -         |
| message  | string                                                                                 | -      | message        | connect success                                          | -         |

### CallbackMetedataType

| name      | type   | format    | desc           | eg         | default   |
| --------- | ------ | --------- | -------------- | ---------- | --------- |
| signature | string | -         | sign res       | 0x00000000 | undefined |
| address   | string | 0x0000000 | wallet address | 0x00000000 | undefined |

### DappConnectSignParams

| name        | type   | format              | desc             | eg         | default |
| ----------- | ------ | ------------------- | ---------------- | ---------- | ------- |
| signContent | string | -                   | any sign message | hello      | -       |
| address     | string | a string of address | wallet address   | 0x00000000 | -       |
| password    | string | -                   | sign password    | password   | ''      |

## Standard List

### DappConnect Callback Type

> Return type of callback function

```ts
const callbackType = "connect";
// When type is connect, it means that the returned data represents the connection status of the websocket

const callbackType = "dapp-connect";
// When type is connect, it means that the data returned is the communication data representing the dapp and the wallet
```

### deeplink

> web3mq deeplink

```ts
const requsetJson = {
  request: {
    id: 1,
    jsonrpc: "2.0",
    method: "provider_authorization",
    params: {
      requiredNamespaces: {
        eip155: {
          chains: ["eip155:1"],
          methods: ["personal_sign"],
        },
      },
      // `sessionProperties` is Optional
      sessionProperties: {
        expiry: "2022-12-24T17:07:31+00:00",
      },
    },
  },
  proposer: {
    publicKey: "",
    appMetadata: {
      name: "",
      description: "",
      url: "",
      icons: ["", ""],
      redirect: "", // 可选
    },
  },
  topic: "",
};


// the deeplink is requsetJson application/x-www-form-urlencoded encode to uri

const deepLink `web3mq://?request[method]=personal_sign&request[params]=hello,world!&request[id]=test_request_id&topic=test_topic_id&proposer[publicKey]=test_public_key&proposer[metadata][description]=for%20test&proposer[metadata][url]=test_url&proposer[metadata][icons][]=https://test_icon%3F1&proposer[metadata][icons][]=https://test_icon%3F2&proposer[metadata][name]=test_app&proposer[metadata][redirect]=web3mq.com`


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
      address: "0x54277Ee3b362C2E0eeb8D9D3aEe48840C3fD3cBd",
    },
    approve: true,
    message: "",
    code: 0,
    method: "provider_authorization",
  },
};
```

#### When the wallet signature is successful

```ts
const callbackData = {
  type: "dapp-connect",
  data: {
    metadata: {
      signature:
        "0x88cd1dd1e6a53aa6a793f3accc0838a902de00b505b433f0c207ca5e45547491539ed5b73040172e29f788c5d8782aee13e1306f531e98439a6d4e38d35c60de1b",
    },
    approve: true,
    message: "",
    code: 0,
    method: "personal_sign",
  },
};
```

:::tip

When the return value of approve is FALSE, it means that there is an accident in the communication between wallet and dapp, please find below the corresponding code and message

:::

#### Wallet standard response

The valid error messages codes are the following:

- When user disapproves exposing accounts to requested chains
  - code = 5000
  - message = "User disapproved requested chains"
- When user disapproves accepting calls with the request methods
  - code = 5001
  - message = "User disapproved requested methods"
- When user disapproves accepting calls with the request events
  - code = 5002
  - message = "User disapproved requested events"
- When wallet evaluates requested chains to not be supported
  - code = 5100
  - message = "Requested chains are not supported"
- When wallet evaluates requested methods to not be supported
  - code = 5101
  - message = "Requested methods are not supported"
- When wallet evaluates requested events to not be supported
  - code = 5102
  - message = "Requested events are not supported"
- When a badly-formed request includes a `chainId` mismatched to scope
  - code = 5103
  - message = "Scope/chain mismatch"
- When a badly-formed request defines one `chainId` two ways
  - code = 5104
  - message = "ChainId defined in two different scopes"

#### wallet standard response

> Code and message when network connection fails

| type         | method                 | code | message                                         |
| ------------ | ---------------------- | ---- | ----------------------------------------------- |
| connect      | -                      | 1    | Temporary connection establishment failure      |
| connect      | -                      | 2    | Connection timeout, please try again to connect |
| connect      | -                      | 3    | Connection closed, please try again to connect  |
| dapp-connect | provider_authorization | 4    | Wallet connection timeout, please try again     |
| dapp-connect | provider_authorization | 5    | Wallet connection error, please try again       |
| dapp-connect | provider_authorization | 6    | Wallet signature timeout, please try again      |
| dapp-connect | personal_sign          | 7    | Signature error, please try again               |
| dapp-connect | personal_sign          | 8    | An unknown error has occurred, please try again |
