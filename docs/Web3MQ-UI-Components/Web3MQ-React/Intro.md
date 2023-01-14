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

## Initialize Client and Connect to Web3MQ Network

```tsx
import React, { useState } from 'react';
import { Client } from 'web3-mq';

const init = async () => {
  const tempPubkey = 'YOUR_PUBLIC_KEY';
  const walletAddress = 'YOUR_WALLET_ADDRESS';
  const didKey = walletAddress ? `eth:${walletAddress}` : '';
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
  MessageHeader,
  MessageList,
  MessageInput,
  Window,
} from 'web3-mq-react';
import 'web3-mq-react/dist/css/index.css';

const App = () => {
  const [fastestUrl, setFastUrl] = useState<string | null>(null);
  // Use your own logic to decide which pattern to use
  const appType = 'pc'; // 'pc' | 'app' | 'mobile'

  const logout = () => {
    // logout function
  };

  const init = async () => {
    const tempPubkey = 'YOUR_PUBLIC_KEY';
    const walletAddress = 'YOUR_WALLET_ADDRESS';
    const didKey = walletAddress ? `eth:${walletAddress}` : '';
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

  useEffect(() => {
    init();
    // set your component theme
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, []);

  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance('YOUR_ACCESS_TOKEN');
  if (!client) {
    // Redirect to the login page
  }

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
