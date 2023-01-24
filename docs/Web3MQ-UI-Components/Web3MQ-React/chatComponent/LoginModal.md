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
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the LoginModal example'
code={<LoginModalMdx />}>
<LoginModalExample />
</Layout>

## Api
**LoginEventDataType**
```tsx
export type LoginResType = {
  privateKey: string;
  publicKey: string;
  tempPrivateKey: string;
  tempPublicKey: string;
  didKey: string;
  userid: string;
  address: string;
  pubkeyExpiredTimestamp: number;
};
```
**RegisterResType**
```tsx
export type RegisterResType = {
  privateKey: string;
  publicKey: string;
  address: string;
};
```

**The properties of the LoginModal are described as follows:**

| Property      | Description                            | Type                                      | Default |
| ------------- | -------------------------------------- | ----------------------------------------- | ------- |
| account       | Set account info                       | {address: string,userid: string,walletType: [WalletType](/docs/Web3MQ-SDK/JS-SDK/types/#wallettype),userExist: boolean}      |   -     |
| appType       | set viewport type of web3-mq-react     | `pc` \| `h5`                              |  `pc`   |
| containerId   | set container Id of `LoginModal`       | String                                    |    -    |
| isShow        | Whether the modal dialog is visible or not | Boolean                               |   -     |
| loginBtnNode  | Set the custom `Button`                | React.ReactNode                           |   -     |
| keys          | Set the user master key pair for skipping the login signature operation | {publicKey: string,privateKey: string,walletAddress: string} |   -     |
| modalClassName| set the dialog class selector          | String                                    |   -     |
| style         | set your custom style                  |  React.CSSProperties                      |   -     |
| handleLoginEvent | Callback when login or register     | (eventData: {type: 'login' \| 'register' \| 'error',msg: string,data: LoginResType \| RegisterResType \| null}) => void   |   -     |

