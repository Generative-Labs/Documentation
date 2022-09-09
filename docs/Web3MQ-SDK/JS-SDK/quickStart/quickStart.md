---
position: 1
---

# QuickStart

**This Quickstart tutorial walks you through the key concepts of Web3MQ using a sample react project and successfully send your first "hello world" to your friend!**

## Note

:::caution

Web3MQ's JS SDK only supports Webpack 4 for now, we are working hard to upgrade dependencies to be compatible with Webpack 5 and above.

:::


### Using create-react-app

If you are building your project using a recent version of create-react-app that's running Webpack 5 or above, you might need to downgrade in order to integrate Web3MQ into your project.

> 1.  **Copy the following command to the terminal to install the lower version of react-scripts**
>
> ```bash
> npm install react-scripts@latest4
> or
> yarn add react-scripts@latest4
> ```
>
> 2. **Select the latest 4.x version (4.0.3) in terminal**

## Usage

1. Install MetaMask extension
2. Install package
3. Init Web3MQ
4. Register Web3MQ user if you are not
5. Create Web3MQ client connection
6. Create Web3MQ chat room
7. Send message

## Install

Install Web3MQ's JS SDK using a package manager of your choice

```bash
npm install web3-mq
or
yarn add web3-mq
```

## API endpoints

During this initial testing phase, we've hosted complete networks of Web3MQ nodes in different regions around the globe. Connect to these endpoints below, to access the Web3MQ Testnet.

- https://testnet-us-west-1-1.web3mq.com
- https://testnet-us-west-1-2.web3mq.com
- https://testnet-ap-jp-1.web3mq.com
- https://testnet-ap-jp-2.web3mq.com
- https://testnet-ap-singapore-1.web3mq.com
- https://testnet-ap-singapore-2.web3mq.com

## Example

> 1. Copy the Root Components Code to App.tsx
> 2. Create a Child.tsx file and copy the Child Components Code to Child.tsx

#### Root Components Code

```tsx
import React, { useMemo, useState, useEffect } from 'react';
import { Client, KeyPairsType } from 'web3-mq';
import Child from './Child';
// Root components
const App: React.FC = () => {
  const hasKeys = useMemo(() => {
    const PrivateKey = localStorage.getItem('PRIVATE_KEY') || '';
    const PublicKey = localStorage.getItem('PUBLICKEY') || '';
    if (PrivateKey && PublicKey) {
      return { PrivateKey, PublicKey };
    }
    return null;
  }, []);

  const [keys, setKeys] = useState<KeyPairsType | null>(hasKeys);
  const [fastestUrl, setFastUrl] = useState<string | null>(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const fastUrl = await Client.init({
      connectUrl: localStorage.getItem('FAST_URL'),
      app_key: 'Appkey applied from our team',
    });
    localStorage.setItem('FAST_URL', fastUrl);
    setFastUrl(fastUrl);
  };

  const signMetaMask = async () => {
    const { PrivateKey, PublicKey } = await Client.register.signMetaMask(
      'https://www.web3mq.com'
    );
    localStorage.setItem('PRIVATE_KEY', PrivateKey);
    localStorage.setItem('PUBLICKEY', PublicKey);
    setKeys({ PrivateKey, PublicKey });
  };

  if (!keys) {
    return (
      <div>
        <button onClick={signMetaMask}>signMetaMask</button>
      </div>
    );
  }

  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <div>
      <button
        onClick={() => {
          client.channel.createRoom();
        }}>
        create Room
      </button>
      <Child client={client} />
    </div>
  );
};

export default App;
```

#### Child Components Code

```tsx
import React, { useState, useEffect } from 'react';
import { Client } from 'web3-mq';

// Child components
interface IProps {
  client: Client;
}

const Child: React.FC<IProps> = (props) => {
  const { client } = props;

  const [list, setList] = useState<any>(null);
  const [activeChannel, setActiveChannel] = useState<any>(null);
  const [text, setText] = useState<string>('');
  const [messageList, setMessageList] = useState<any>([]);

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'channel.getList') {
      setList(client.channel.channelList);
    }
    if (event.type === 'channel.activeChange') {
      setActiveChannel(client.channel.activeChannel);
      client.message.getMessageList({
        page: 1,
        size: 20,
      });
    }
    if (event.type === 'message.getList') {
      setMessageList(client.message.messageList);
    }
    if (event.type === 'message.delivered') {
      setText('');
      const list = messageList || [];
      setMessageList([...list, { content: text, id: list.length + 1 }]);
    }
  };

  useEffect(() => {
    client.on('channel.getList', handleEvent);
    client.on('channel.activeChange', handleEvent);
    client.on('message.getList', handleEvent);
    client.on('message.delivered', handleEvent);
    return () => {
      client.off('channel.getList');
      client.off('channel.activeChange');
      client.off('message.getList');
      client.off('message.delivered');
    };
  }, [text]);

  useEffect(() => {
    client.channel.queryChannels({ page: 1, size: 100 });
  }, []);

  const handleChangeActive = (channel: any) => {
    client.channel.setActiveChannel(channel);
  };

  const handleSendMessage = () => {
    client.message.sendMessage(text);
  };

  const changeMsgStatus = async () => {
    const ids = messageList.map((item: any) => item.messageid);
    const data = await client.message.changeMessageStatus(ids, 'read');
    console.log(data);
  };

  const List = () => {
    if (!list) {
      return null;
    }
    return (
      <ul>
        {list.map((item: any, idx: number) => {
          return (
            <li
              style={{ cursor: 'pointer' }}
              key={item.topic}
              onClick={() => handleChangeActive(item)}>
              {idx}-{item.topic}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <h1>room list</h1>
      <List />
      <h1>message list</h1>
      {activeChannel && (
        <div>
          <div>
            <b>activeChannel:</b>
            <span style={{ color: 'blue' }}>{activeChannel.topic}</span>
          </div>
          <div style={{ minHeight: 300, border: '1px solid #000' }}>
            {messageList.map((item: any) => {
              return (
                <div key={item.id} onClick={changeMsgStatus}>
                  message: {item.content}
                </div>
              );
            })}
          </div>
          <div>
            <input
              value={text}
              type='text'
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button onClick={handleSendMessage}>send Message</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Child;
```

## Connect MetaMask

> Connect MetaMask get your eth wallet

#### Code

```ts
import { Client } from 'web3-mq';

// 1. You can save the fastUrl locally to reduce requests
const fastUrl = await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
});

// 2. You must ensure that the Client.init initialization is complete
const { PrivateKey, PublicKey } = await Client.register.signMetaMask(
  'https://www.web3mq.com' // your signContent URI
);

console.log(PrivateKey, PublicKey);

// Keep your private key in safe place
localStorage.setItem('PRIVATE_KEY', PrivateKey);
localStorage.setItem('PUBLICKEY', PublicKey);
```

## Create Web3MQ client connection

#### Code

```typescript
import { Client } from 'web3-mq';

// 1. init SDK
await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
});

// 2. Sign MetaMask get keys
const { PrivateKey, PublicKey } = await Client.register.signMetaMask(
  'https://www.web3mq.com'
);

// 3. You must ensure that the Client.init initialization is complete and that you have a key pair
const client = Client.getInstance({ PrivateKey, PublicKey });

console.log(client);
```

## Create room

#### Code

```tsx
<button
  onClick={() => {
    client.channel.createRoom();
  }}>
  createGroup
</button>
```

## send message

#### Code

```tsx
<button
  onClick={() => {
    client.message.sendMessage('your send message');
  }}>
  sendMessage
</button>
```
