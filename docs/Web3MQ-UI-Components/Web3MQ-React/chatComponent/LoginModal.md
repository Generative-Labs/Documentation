---
sidebar_position: 0
---

# LoginModal
`LoginModal` component implements login and registration operations,

## Basic Usage
User can pass the `handleLoginEvent` as props to customize the callback when logging in or registering, and also can pass `account` as props to specify the user information to render the current page as a login or registration page.[how to use](/docs/Web3MQ-UI-Components/Web3MQ-React/Intro#an-example-of-initializing-login-hooks)

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

## Api
### LoginModal
**The properties of the LoginModal are described as follows:**

| Property         | Description                                                             | Type                                                                                                | Default           | required |
| ---------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------- | -------- |
| account          | Set account info                                                        | [UserAccountType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#useraccounttype) | undefined         |  false   |
| appType          | set viewport type of @web3mq/react-components                           | [AppTypeEnum](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#apptypeenum)               | AppTypeEnum["pc"] |  false   |
| client           | client class                                                            | [Client](/docs/Web3MQ-SDK/JS-SDK/client)                                                            | Client            |  false   |
| containerId      | set container Id of `LoginModal`                                        | String                                                                                              |   ""              |  false   |
| isShow           | Whether the modal dialog is visible or not                              | Boolean                                                                                             |  false            |  false   |
| loginBtnNode     | Set the custom `Button`                                                 | React.ReactNode                                                                                     |   null            |  false   |
| keys             | Set the user master key pair for skipping the login signature operation | [MainKeysType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#mainkeystype)       | undefined         |  false   |
| modalClassName   | set the dialog class selector                                           | String                                                                                              |   ""              |  false   |
| style            | set your custom style                                                   | React.CSSProperties                                                                                 |   null            |  false   |
| handleLoginEvent | Callback when login or register                                         | (eventData: {type: [LoginEventType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#logineventtype),msg: string,data: [LoginResType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#logineventdatatype) \| [RegisterResType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#registerrestype) \| null}) => void   |   -     |  true   |

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
