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

## Creating a Web3MQ Client

```tsx
import { Web3MQ } from 'web3-mq';

const client = Web3MQ.getInstance('YOUR_ACCESS_TOKEN');
```

## Your First App with Web3MQ React

```tsx
import { Chat, Channel, DashBoard, Main, AppTypeEnum } from 'web3-mq-react';
import { Web3MQ } from 'web3-mq';
import 'web3-mq-react/dist/css/index.css';

const App = () => {
  const client = Web3MQ.getInstance('YOUR_ACCESS_TOKEN');

  const appType = () => {
    // Use your own logic to decide which pattern to use
    return 'pc'; // 'pc' | 'app' | 'mobile'
  };

  const logout = () => {
    // logout function
  };

  if (client) {
    // Redirect to the login page
  }

  return (
    <Chat client={client} appType={appType} logout={logout}>
      <DashBoard />
      <Main />
      <Channel>
        <ChannelInner />
      </Channel>
    </Chat>
  );
};
```
