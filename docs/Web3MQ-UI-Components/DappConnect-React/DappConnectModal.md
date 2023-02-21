---
sidebar_position: 1
---

# DappConnectModal
A customizable wallet-connected/signatures component consisting of buttons and Modal.

## Basic Usage

**The complete process of connection/signatures for dapp and wallet.**
> 1. Install DappConnect sdk
> 2. Init DappConnect client to connect ws network
> 3. Call getConnectLink function to get deeplink
> 4. open deeplink in web3mq wallet
> 5. Connect Wallet
> 6. Call sendSign function
> 7. Wallet Confirmation Signature

When you use the `DappConnectModal` component, you only need to complete two steps to initialize the DappConnect client and initiate the wallet signature.

### Init DappConnect client
> As a necessary parameter of DappConnectModal - client, the user must first initialize DappConnect and then use the `DappConnectModal` component.

:::tip
  In the following code block, the empty function is passed in the new DappConnect operation, which is not a bug. In the DappConnectModal component, the handleSuccess parameter is provided to the user for the success callback of the wallet connection and sending the signature, and the user can get the address and signature of the wallet in the callback.
:::

```tsx
import React, {useEffect, useState} from 'react';
import { DappConnectModal } from '@web3mq/dapp-connect-react';
import {DappConnect, WalletMethodMap} from '@web3mq/dapp-connect';
import '@web3mq/dapp-connect-react/dist/css/index.css';
const App: React.FC = () => {
  const [client, setClient] = useState<DappConnect>();
  const init = async () => {
    const dappConnect = new DappConnect({ dAppID: 'SwapChat:im'}, () => {});
    setClient(dappConnect);
  };
  const handleModalSuccess = async (event: any) => {
    const { method, result } = event
    if (method === WalletMethodMap.providerAuthorization) {
      console.log('connect success, wallet address is : ', result?.address);
      setWalletAddress(result?.address || '');
    }
    if (method === WalletMethodMap.personalSign) {
      console.log('sign success: ', result?.signature);
      setSignRes(result?.signature || '');
    }
  }
  useEffect(() => {
    init();
  }, []);
  if (!client) return <div>Initializing...</div>
  return (
    <DappConnectModal
      client={client}
      handleSuccess={handleModalSuccess}
    />
  )
};
```
:::tip

When the `DappConnectModal` is displayed, the wallet connect deep link is already provided for you internally. When the return method value of the callback function is [WalletMethodMap.providerAuthorization](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#when-the-network-connection-is-successful),  it means that the wallet and dapp are successfully connected.

Once the wallet and dapp are successfully connected, the sendSign method can be called to request a signature.

:::

### send wallet sign
> After your successful connection to the wallet is established, you will find that the component doesn't have any subsequent content, yes! You need to pass in custom style content via the `signBtnNode` props, and you need to have the node that triggers the `sendSign` method;

``` tsx
import React, {useEffect, useState} from 'react';
import { DappConnectModal } from '@web3mq/dapp-connect-react';
import {DappConnect, WalletMethodMap} from '@web3mq/dapp-connect';
import '@web3mq/dapp-connect-react/dist/css/index.css';
const App: React.FC = () => {
  const [client, setClient] = useState<DappConnect>();
  const [walletAddress, setWalletAddress] = useState('');
  const init = async () => {
    const dappConnect = new DappConnect({ dAppID: 'SwapChat:im'}, () => {});
    setClient(dappConnect);
  };
  const handleModalSuccess = async (event: any) => {
    const { method, result } = event
    if (method === WalletMethodMap.providerAuthorization) {
      console.log('connect success, wallet address is : ', result?.address);
      setWalletAddress(result?.address || '');
    }
    if (method === WalletMethodMap.personalSign) {
      console.log('sign success: ', result?.signature);
    }
  }
  const sign = async () => {
    await client?.sendSign({
      signContent: 'test sign out',
      address: walletAddress || '',
      password: 'test sign without react',
    });
  };
  useEffect(() => {
    init();
  }, []);
  if (!client) return <div>Initializing...</div>
  return (
    <DappConnectModal
      client={client}
      handleSuccess={handleModalSuccess}
      signBtnNode={<Button onClick={sign}>sign</Button>}
    />
  )
};
```

:::tip
When the return method value of the callback function is [WalletMethodMap.personalSign](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#when-the-wallet-signature-is-successful), the wallet is successfully signed and the signature result is returned
:::

### This is Full Example

import { Layout } from '@site/src/components/Layout'
import { DappConnectModalExample } from '@site/src/components/DappConnect-React/DappConnectModal';
import DappConnectMdx from '@site/src/components/DappConnect-React/DappConnectModal/DappConnectMdx.mdx';
import '@web3mq/dapp-connect-react/dist/css/index.css';

<Layout
title='Example'
description='This is the DappConnectModal example'
code={<DappConnectMdx />}>
<DappConnectModalExample />
</Layout>


## Api
### DappConnectModal
**The properties of the DappConnectModal are described as follows:**

| Property       | Description                                                                        | Type                                                                                      | Default           | required |
| -------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------- | -------- |
| appType        | Viewport type of `DappConnectModal`                                                | [AppTypeEnum](/docs/Web3MQ-UI-Components/DappConnect-React/DappConnectModal#apptypeenum)  |   AppTypeEnum.pc  |  false   |
| client         | Instance of DappConnect Class                                                      | [DappConnect](/docs/Web3MQ-SDK/DappConnect-SDK/client)  |        -          |   true   |
| containerId    | Id selector for the node that wraps the `DappConnectModal` component               | String                                                                                    |        ''         |  false   |
| isShow         | The initial `DappConnectModal` dialog is visible or not                            | Boolean                                                                                   |       true        |  false   |
| modalClassName | The class name of the container of the `DappConnectModal` dialog                   | String                                                                                    |        ''         |  false   |
| connectBtnNode | Custom button to control `DappConnectModal` and content display                    | React.ReactNode                                                                           |       null        |  false   |
| signBtnNode    | Custom styled buttons for sending signatures in `DappConnectModal`                 | React.ReactNode                                                                           |       null        |  false   |
| handleSuccess  | Success callbacks for wallet connections, sending signatures, and other operations | (event: [CallBackEvent](/docs/Web3MQ-UI-Components/DappConnect-React/DappConnectModal#callbackevent)) => void |         -         |   true   | 
 
### AppTypeEnum
> an enum type

| Property  | Description             | Type                       | Default       |
| --------- | ----------------------- | -------------------------- | ------------- |
|  h5       | Mobile side type        | string                     |   'h5'        |
|  pc       | Computer side type      | string                     |   'pc'        |

### CallBackEvent
| Property  | Description                    | Type                                                                                      | Default       | required |
| --------- | ------------------------------ | ----------------------------------------------------------------------------------------- | ------------- | -------- |
|  method   | Method for callback events     | [Callbackdatatype.method](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#callbackdatatype)     |     -         |   true   |
|  result   | Result for calling back events | [DappConnectMetadataType](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#callbackmetedatatype) |     -         |   true   |