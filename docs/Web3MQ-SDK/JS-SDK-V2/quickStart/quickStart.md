---
position: 1
---

# QuickStart

**Let's learn how to use and successfully send the first message in the chat room we created**

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

## Connect MetaMask

> Connect MetaMask get your eth wallet

#### Code

```ts
import { Web3MQ } from 'web3-mq';

const { MetaMask } = Web3MQ;

const { PrivateKey, PublicKey } = await MetaMask.signMetaMask(
  'https://www.web3mq.com' // your_domain_url
);

// Keep your private key in safe place
localStorage.setItem('PRIVATE_KEY', PrivateKey);
localStorage.setItem('PUBLICKEY', PublicKey);
```

## Create Web3MQ client connection

#### Code

```typescript
// sign MetaMask get keys
const keys = { PrivateKey, PublicKey };

// ws host url
const HostURL = '94.16.119.221:23333/messages';

const client = Web3MQ.Client.getInstance(keys, HostURL);
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

## Example

#### Code

```tsx
import { useMemo, useState } from 'react';
import { Web3MQ } from 'web3-mq';
import { KeyPairsType } from 'web3-mq/dist/web3MQ';

const { MetaMask } = Web3MQ;

const App = () => {
  const hasKeys = useMemo(() => {
    const PrivateKey = localStorage.getItem('PRIVATE_KEY') || '';
    const PublicKey = localStorage.getItem('PUBLICKEY') || '';
    if (PrivateKey && PublicKey) {
      return { PrivateKey, PublicKey };
    }
    return null;
  }, []);

  const [keys, setKeys] = useState<KeyPairsType | null>(hasKeys);
  const [list, setList] = useState<any>(null);

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
  const client = Web3MQ.Client.getInstance(
    keys,
    '94.16.119.221:23333/messages'
  );

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'channel.getList') {
      setList(client.channel.channelList);
    }
  };

  useEffect(() => {
    client.on('channel.getList', handleEvent);
    return () => {
      client.off('channel.getList');
    };
  }, []);

  useEffect(() => {
    client.channel.queryChannels({ page: 1, size: 100 });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          client.channel.createRoom();
        }}>
        create group
      </button>
      <ul>
        {list.map((item: any, idx: number) => {
          return (
            <li key={item.topic}>
              {idx}-{item.topic}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
```
