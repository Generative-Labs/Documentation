---
position: 1
---

# QuickStart

**Let's learn how to use and successfully send the first message in the chat room we created**

## Attention

**Currently, only Webpack 4 is supported, temporary does not support Weboack 5 and above**

### If you build your project using create-react-app, you need to de-escalate

1.  install react-scripts

```bash
npm install react-scripts@latest4
or
yarn add react-scripts@latest4
```

2. Select the latest 4.x version (4.0.3)

## Usage

1. Install MetaMask extension
2. Install package
3. Register Web3MQ user if you are not
4. Create Web3MQ client connection
5. Create Web3MQ chat room
6. Send message
7. Example

## Install

```bash
npm install web3-mq
or
yarn add web3-mq
```

## API endpoint

**When using remove 'https://'**

- https://us-west-2.web3mq.com
- https://ap-jp-1.web3mq.com
- https://ap-singapore-1.web3mq.com

## Example

#### Code

```tsx
import React, { useMemo, useState, useEffect } from 'react';
import { MetaMask, Client, KeyPairsType } from 'web3-mq';

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
    if (event.type === 'message.new') {
      setText('');
      const list = client.message.messageList || [];
      setMessageList([...list, { content: text, id: list.length + 1 }]);
    }
  };

  useEffect(() => {
    client.on('channel.getList', handleEvent);
    client.on('channel.activeChange', handleEvent);
    client.on('message.getList', handleEvent);
    client.on('message.new', handleEvent);
    return () => {
      client.off('channel.getList');
      client.off('channel.activeChange');
      client.off('message.getList');
      client.off('message.new');
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
              return <div key={item.id}>message: {item.content}</div>;
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

  const signMetaMask = async () => {
    const { PrivateKey, PublicKey } = await MetaMask.signMetaMask(
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

## Connect MetaMask

> Connect MetaMask get your eth wallet

#### Code

```ts
import { MetaMask } from 'web3-mq';

const { PrivateKey, PublicKey } = await MetaMask.signMetaMask(
  'https://www.web3mq.com' // your_domain_url
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

// sign MetaMask get keys
const keys = { PrivateKey, PublicKey };

// ws host url
const HostURL = 'us-west-2.web3mq.com';

const client = Client.getInstance(keys, HostURL);

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
