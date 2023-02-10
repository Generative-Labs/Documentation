---
sidebar_position: 0
---

# Intro

**This tutorial walks you through how to use @web3mq/react-components using a sample React projects, and successfully build a chat app interface**

## Installation

> Install @web3mq/react-components Library using a package manager of your choice

```bash
npm install @web3mq/react-components
or
yarn add @web3mq/react-components
```

# Usage
**Before using the @web3mq/react-components component library, we need to understand a series of processes for initializing Web3MQ.And Web3MQ network nodes, key pairs and other dependencies need to be provided by the user to the component library**

In all example, the dependencies used to generate Web3mq are stored in the browser cache, or the user can choose how they want to store them.

## Initialize Client
> Initialize Client and Connect to Web3MQ Network.[Details](/docs/Web3MQ-SDK/JS-SDK/quickStart/#initialize-client)

```ts
import { useState } from 'react';
import {Client} from '@web3mq/client';

const [fastestUrl, setFastUrl] = useState<string | null>(null);

// You can save the bestEndpointUrl locally to skip endpoint search next time, which will save time, and
const init = async () => {
  const tempPubkey = localStorage.getItem('PUBLIC_KEY') || '';
  const didKey = localStorage.getItem('DID_KEY') || '';
  const fastUrl = await Client.init({
    connectUrl: localStorage.getItem('FAST_URL'),
    app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet
    env: 'dev',
    didKey,
    tempPubkey,
  });
  localStorage.setItem('FAST_URL', fastUrl);
  setFastUrl(fastUrl);
};
```

## Get the Key pair for generating the web3mq client
> First you need to register and login to get. [Details](/docs/Web3MQ-SDK/JS-SDK/quickStart/#register-user). But the @web3mq/react-components component library provides a `LoginModal` component to make it easier for you to get the dependencies for creating a Web3MQ Client.

```tsx
import React, { useState } from 'react';
import { Client, KeyPairsType } from '@web3mq/client';
import { LoginModal } from '@web3mq/react-components';
import '@web3mq/react-components/dist/css/index.css';

export const App = () => {
  const appType = 'pc'; // 'pc' | 'app' | 'mobile'
  const [fastestUrl, setFastUrl] = useState<string | null>(null);
  const [keys, setKeys] = useState<KeyPairsType | null>(hasKeys);
  // You can save the bestEndpointUrl locally to skip endpoint search next time, which will save time, and
  const init = async () => {
    const tempPubkey = localStorage.getItem('PUBLIC_KEY') || '';
    const didKey = localStorage.getItem('DID_KEY') || '';
    const fastUrl = await Client.init({
      connectUrl: localStorage.getItem('FAST_URL'),
      app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet
      env: 'dev',
      didKey,
      tempPubkey,
    });
    localStorage.setItem('FAST_URL', fastUrl);
    setFastUrl(fastUrl);
  };
  // Callback on login or registration
  const handleLoginEvent = (eventData: any) => {
    if (eventData.data) {
      // when login
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
        localStorage.setItem('userid', userid);
        localStorage.setItem('PRIVATE_KEY', tempPrivateKey);
        localStorage.setItem('PUBLIC_KEY', tempPublicKey);
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);
        localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
        localStorage.setItem(`DID_KEY`, didKey);
        localStorage.setItem('PUBKEY_EXPIRED_TIMESTAMP', String(pubkeyExpiredTimestamp));
        setKeys({
          PrivateKey: tempPrivateKey,
          PublicKey: tempPublicKey,
          userid,
        });
      }
      // when register
      if (eventData.type === 'register') {
        const { privateKey, publicKey, address } = eventData.data;
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);
        localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
      }
    }
  };
  useEffect(() => {
    init();
    // set your component theme
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, []);

  if (!fastUrl) return null;
  if (!keys) {
    return (
      <LoginModal
        appType={appType}
        isShow={true}
        handleLoginEvent={handleLoginEvent}
      />
    )
  }
  return (
    <div>
      <p>The Public key: {key.PublicKey}</p>
      <p>The Private Key key: {key.privateKey}</p>
      <p>The userid: {key.userid}</p>
    <div>
  )
};
```

## An example of initializing login hooks
> The above two steps can be combined into a very simple hooks for login,Here is a simple hook function that provides dependencies for you to create web3MQ Client.

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
  // Callback on login or registration
  const handleLoginEvent = (eventData: any) => {
    if (eventData.data) {
      // when login
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
        localStorage.setItem('userid', userid);
        localStorage.setItem('PRIVATE_KEY', tempPrivateKey);
        localStorage.setItem('PUBLIC_KEY', tempPublicKey);
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);
        localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
        localStorage.setItem(`DID_KEY`, didKey);
        localStorage.setItem('PUBKEY_EXPIRED_TIMESTAMP', String(pubkeyExpiredTimestamp));
        setKeys({
          PrivateKey: tempPrivateKey,
          PublicKey: tempPublicKey,
          userid,
        });
      }
      // when register
      if (eventData.type === 'register') {
        const { privateKey, publicKey, address } = eventData.data;
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);
        localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
      }
    }
  };

  return { keys, fastestUrl, init, logout, handleLoginEvent };
};

export default useLogin;

```
## Creating a Web3MQ Client

```tsx
import { Client } from '@web3mq/client';

const client = Client.getInstance('YOUR_ACCESS_TOKEN');
```

## Your First App with Web3MQ React
> Congratulations, we have reached the last step and combined with the login hooks, we can build a complete chat application interface!
:::tip
When using the `@web3mq/react-components` 
>1. need to introduce css file of `@web3mq/react-components` firstly.
>2. set the theme used, you need to set the `data-theme` attribute in the body, currently only `light` is a theme.
:::
```tsx
import React, { useState } from 'react';
import {
  AppTypeEnum,
  Chat,
  Channel,
  DashBoard,
  LoginModal,
  MessageHeader,
  MessageList,
  MessageInput,
  Window,
} from '@web3mq/react-components';
import useLogin from './hooks/useLogin';
import '@web3mq/react-components/dist/css/index.css';

const App = () => {
  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();
  // Use your own logic to decide which pattern to use
  const appType = 'pc'; // 'pc' | 'app' | 'mobile'

  useEffect(() => {
    init();
    // set your component theme
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, []);

  if (!fastestUrl) {
    return null;
  }

  if (!keys) {
    // Redirect to the login page
    let mainKeys = null;
    const mainPrivateKey = localStorage.getItem(`MAIN_PRIVATE_KEY`);
    const mainPublicKey = localStorage.getItem(`MAIN_PUBLIC_KEY`);
    const address = localStorage.getItem('WALLET_ADDRESS');
    if (mainPublicKey && mainPrivateKey && address) {
      mainKeys = {
        publicKey: mainPublicKey,
        privateKey: mainPrivateKey,
        walletAddress: address,
      };
    }
    return (
      <LoginModal 
        appType={appType}
        containerId=''
        keys={mainKeys}
        isShow={true}
        handleLoginEvent={handleLoginEvent}
      />
    )
  }
  const client = Client.getInstance(key);

  return (
    <Chat client={client} appType={appType} logout={logout}>
      <DashBoard />
      <Channel>
        <Window>
          <MessageHeader avatarSize={40} />
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
      <Main />
    </Chat>
  );
};
```
