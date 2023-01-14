---
sidebar_position: 0
---

# LoginModal
In `LoginModal`, you can connect wallets to register user or login `web3mq`.

## Basic Usage
You need to provide getEthAccount, login and register as props for LoginModal.[how to use](/docs/Web3MQ-UI-Components/Web3MQ-React/Intro#an-example-of-initializing-login-hooks)

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

**The properties of the LoginModal are described as follows:**

| Property      | Description                            | Type                                      | Default |
| ------------- | -------------------------------------- | ----------------------------------------- | ------- |
| account       | Set account info                       | {address: string;userExist: boolean}      |   -     |
| appType       | set viewport type of web3-mq-react     | `pc` \| `h5`                              |  `pc`   |
| containerId   | set container Id of `LoginModal`       | String                                    |    -    |
| isShow        | Whether the modal dialog is visible or not | Boolean                               |   -     |
| loginBtnNode  | Set the custom `Button`                | React.ReactNode                           |   -     |
| modalClassName| set the dialog class selector          | String                                    |   -     |
| login         | login method                           | (password: string) => Promise< void >     |   -     |
| register      | register method                        | (password: string) => Promise< void >     |   -     |
| getEthAccount | method of get wallet info              | (walletType?: WalletType) => Promise<{address: string;userid: string;userExist:boolean> |   -     |
| style         | set your custom style                  |  React.CSSProperties                      |   -     |

