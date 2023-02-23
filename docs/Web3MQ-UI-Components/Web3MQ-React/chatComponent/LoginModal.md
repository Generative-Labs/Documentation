---
sidebar_position: 0
---

# LoginModal
`LoginModal` component implements login and registration operations.

## Basic Usage
User must pass the `handleLoginEvent` as props to customize the callback when logging in or registering, and also can pass `account` as props to specify the user information to render the current page as a login or registration page.
### use handleLoginEvent prop
The key pair, temporary key pair, will be returned for you after a successful login or registration operation, and you need to save this data in the `handleLoginEvent` callback function.

:::tip
  Before logging, we must understand that the temporary key pair and userid are key to generating the client, while the master key pair is what allows you to skip the signing step when logging in.
  > 1. After the registration operation, the `handleLoginEvent` callback method you pass in will be based on `eventData.type === 'register'` as the current registration time, and will capture the master key pair and userid returned during registration is successful in `eventData.data`.
  > 2. If your login is successful, congratulations, you will get the temporary key pair that generated `web3MQ client`, in the `handleLoginEvent` callback, the corresponding data can be retrieved from `eventData.data` under the condition of `eventData.type === 'login'`.
:::
> Here is a simple hook function that provides dependencies for you to create web3MQ Client.

```tsx
import { useMemo, useState } from 'react';
import { Client, KeyPairsType } from '@web3mq/client';

const useLogin = () => {
  const hasKeys = useMemo(() => {
    const PrivateKey = localStorage.getItem('PRIVATE_KEY') || '';
    const PublicKey = localStorage.getItem('PUBLIC_KEY') || '';
    const userid = localStorage.getItem('userid') || '';
    if (PrivateKey && PublicKey && userid) {
      return { PrivateKey, PublicKey, userid };
    }
    return null;
  }, []);
  const [keys, setKeys] = useState<KeyPairsType | null>(hasKeys);
  const [fastestUrl, setFastUrl] = useState<string | null>(null);

  const init = async () => {
    const tempPubkey = localStorage.getItem('PUBLIC_KEY') || '';
    const didKey = localStorage.getItem('DID_KEY') || '';
    const fastUrl = await Client.init({
      connectUrl: localStorage.getItem('FAST_URL'),
      app_key: 'app_key',
      env: 'dev',
      didKey,
      tempPubkey,
    });
    localStorage.setItem('FAST_URL', fastUrl);
    setFastUrl(fastUrl);
  };
  const logout = () => {
    localStorage.setItem('PRIVATE_KEY', '');
    localStorage.setItem('PUBLIC_KEY', '');
    localStorage.setItem('DID_KEY', '');
    localStorage.setItem('userid', '');
    setKeys(null);
  };

  const handleLoginEvent = (eventData: any) => {
    if (eventData.data) {
      if (eventData.type === 'login') {
        const {
          privateKey,
          publicKey,
          tempPrivateKey,
          tempPublicKey,
          didKey,
          userid,
          address,
          pubkeyExpiredTimestamp,
        } = eventData.data;
        // Store to browser cache
        localStorage.setItem('userid', userid);
        localStorage.setItem('PRIVATE_KEY', tempPrivateKey);
        localStorage.setItem('PUBLIC_KEY', tempPublicKey);
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);
        localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
        localStorage.setItem(`DID_KEY`, didKey);
        localStorage.setItem('PUBKEY_EXPIRED_TIMESTAMP', String(pubkeyExpiredTimestamp));
        // update state
        setKeys({
          PrivateKey: tempPrivateKey,
          PublicKey: tempPublicKey,
          userid,
        });
      }
      if (eventData.type === 'register') {
        const { privateKey, publicKey, address } = eventData.data;
        // Store to browser cache
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);
        localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
      }
    }
  };

  return { keys, fastestUrl, init, logout, handleLoginEvent };
};
```

:::tip
`LoginModal` integrates with `DappConnect`, the user can select the `DappConnect` environment via the env parameter, `LoginModal` defaults to the test environment.
:::

import { Layout } from '@site/src/components/Layout'
import { LoginModalExample } from '@site/src/components/Web3MQ-React/LoginModalExample';
import LoginModalMdx from '@site/src/components/Web3MQ-React/LoginModalExample/LoginModalExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the LoginModal example'
code={<LoginModalMdx />}>
<LoginModalExample />
</Layout>

### use account prop
It is very unnecessary to make another wallet connection in the `LoginModal` component when the wallet is already connected. The user only needs to include your wallet address and wallet type as part of the account parameters. If you are not sure if your current wallet is registered with `web3mq`, you can try the Client.register.getUserInfo method and you will get the userExist and userid.

:::tip
If your wallet is not registered with `web3mq` account, just set `account.userExist = false`, it will automatically jump to the registration section
:::

import { LoginModalWithAccount } from '@site/src/components/Web3MQ-React/LoginModalExample';
import UseAccountMdx from '@site/src/components/Web3MQ-React/LoginModalExample/UseAccount.mdx';

<Layout
title='Example'
description='This is the LoginModal example'
code={<UseAccountMdx />}>
<LoginModalWithAccount />
</Layout>

## Api
### LoginModal
**The properties of the LoginModal are described as follows:**

| Property         | Description                                                             | Type                                                                                                | Default           | required |
| ---------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------- | -------- |
| account          | Set account info                                                        | [UserAccountType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#useraccounttype) | undefined         |  false   |
| appType          | set viewport type of @web3mq/react-components                           | [AppTypeEnum](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#apptypeenum)               | AppTypeEnum["pc"] |  false   |
| client           | client class                                                            | [Client](/docs/Web3MQ-SDK/JS-SDK/client)                                                            | Client            |  false   |
| containerId      | id selector for the node that wraps the `LoginModal` component          | String                                                                                              |   ""              |  false   |
| isShow           | Whether the modal dialog is visible or not                              | Boolean                                                                                             |  false            |  false   |
| env              | network environment of dappConnect                                      | "test" \| "dev"                                                                                     |  "test"           |  false   |
| loginBtnNode     | Set the custom `Button`                                                 | React.ReactNode                                                                                     |   null            |  false   |
| keys             | Set the user master key pair for skipping the login signature operation | [MainKeysType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#mainkeystype)       | undefined         |  false   |
| modalClassName   | set the dialog class selector                                           | String                                                                                              |   ""              |  false   |
| style            | set your custom style                                                   | React.CSSProperties                                                                                 |   null            |  false   |
| handleLoginEvent | Callback when login or register                                         | (eventData: [LoginEventDataType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#logineventdatatype)) => void   |   -     |  true   |

### LoginEventDataType
| Property | Description          | Type      | Default | required |
| -------- | -------------------- | --------- | ------- | -------- |
| type     | Callback return type |[LoginEventType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#logineventtype)|   -     |   true   |
| msg      | Callback return msg  | string    |   ''    |   true   |
| data     | Callback return data |[LoginResType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#logineventdatatype) \| [RegisterResType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#registerrestype) \| null|   -     |   true   |
### LoginResType
| Property             | Description                               | Type      | Default | required |
| -------------------- | ----------------------------------------- | --------- | ------- | -------- |
| address              | wallet address                            | string    |   -     |   true   |
| didKey               | didType and didValue collection           | string    |   -     |   true   |
| privateKey           | master private key of the current user    | string    |   -     |   true   |
| publicKey            | master public key of the current user     | string    |   -     |   true   |
| tempPrivateKey       | temporary private key of the current user | string    |   -     |   true   |
| tempPublicKey        | temporary public key of the current user  | string    |   -     |   true   |
| userid               | userid of user                            | string    |   -     |   true   |
|pubkeyExpiredTimestamp| Temporary key pair expiration time        | number    |   -     |   true   |

### LoginEventType
| Property          | Description                     | Type                             | Default | required |
| ----------------- | ------------------------------  | -------------------------------- | ------- | -------- |
| LoginEventType    | event type in handleLoginEvent  | 'login' \| 'register' \| 'error' |   -     |   -      |

### MainKeysType
| Property             | Description                               | Type      | Default | required |
| -------------------- | ----------------------------------------- | --------- | ------- | -------- |
| privateKey           | master private key of the current user    | string    |   -     |   true   |
| publicKey            | master public key of the current user     | string    |   -     |   true   |
| walletAddress        | wallet address                            | string    |   -     |   true   |

### RegisterResType
| Property             | Description                               | Type      | Default | required |
| -------------------- | ----------------------------------------- | --------- | ------- | -------- |
| address              | wallet address                            | string    |   -     |   true   |
| privateKey           | master private key of the current user    | string    |   -     |   true   |
| publicKey            | master public key of the current user     | string    |   -     |   true   |

### UserAccountType
| Property   | Description                            | Type      | Default | required |
| ---------- | -------------------------------------- | --------- | ------- | -------- |
| address    | wallet address                         | string    |   -     |   true   |
| userid     | userid of web3mq user                  | string    |   -     |   true   |
| userExist  | whether the user is already registered | boolean   |   -     |   true   |
| walletType | wallet type | [WalletType](/docs/Web3MQ-SDK/JS-SDK/types/#wallettype)    |   -     |   true   |
