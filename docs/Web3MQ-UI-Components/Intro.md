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
import {
  Chat,
  Channel,
  ChannelList,
  DashBoard,
  ContactList,
  Window,
  MessageInput,
  MessageList,
  Thread,
  MessageHeader,
} from 'web3-mq-react';

import 'web3-mq-react/dist/css/index.css';

const App = () => (
  <Chat client={client}>
    <DashBoard />
    <div className='channelContainer'>
      <ChannelList />
      <ContactList />
    </div>
    <Channel>
      <Window>
        <MessageHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);
```
