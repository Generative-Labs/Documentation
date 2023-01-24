---
sidebar_position: 0
---

# Intro

Web3MQ React Component Libraries

### Install with NPM

```bash
npm install web3-mq-react
```

### Install with Yarn

```bash
yarn add web3-mq-react
```

# Usage

## An example of initializing login hooks
Here is a simple hook function that provides dependencies for you to create web3MQ Client.

```tsx
import { useMemo, useState } from 'react';
import { Client, KeyPairsType } from 'web3-mq';

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
      app_key: 'vAUJTFXbBZRkEDRE',
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
import { Client } from 'web3-mq';

const client = Client.getInstance('YOUR_ACCESS_TOKEN');
```

## Your First App with Web3MQ React

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
} from 'web3-mq-react';
import useLogin from './hooks/useLogin';
import 'web3-mq-react/dist/css/index.css';

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
    </Chat>
  );
};
```
