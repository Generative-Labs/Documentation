---
position: 1
---

# QuickStart

**This Quickstart tutorial walks you through the key concepts of Web3MQ using a sample react project and successfully send your first "hello world" to your friend!**

## Installation

Install Web3MQ's JS SDK using a package manager of your choice

```bash
npm install @web3mq/client
or
yarn add @web3mq/client
```

<!-- ## Note

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
> 2. **Select the latest 4.x version (4.0.3) in terminal** -->

## Initialize Client and Connect to Web3MQ Network

In order to connect to the Web3MQ Network, both users and developers authenticate through wallet signatures, we demonstrate below with an Ethereum wallet via Metamask, but Web3MQ is built to be compatible with wallets across different chains.

### Initialize Client

:::note

While we are committed to building an open and collectively owned public good, our early stage testnet requires an API key in order to connect. This is to control capacity to make sure that each early partner and developer is able to build a great experience on top of Web3MQ. [Apply here](https://web3mq.com/apply).

:::

As Web3MQ is a federated network, our default JS SDK client has a method to help you connect to the best node for you.

Simply calling Client.init without connectUrl or an empty string returns a url of the best node determined for you, and this url can be stored locally.

```ts
import { Client } from '@web3mq/client';

// You can save the bestEndpointUrl locally to skip endpoint search next time, which will save time, and
const bestEndpointUrl = await Client.init({
  connectUrl: '', //
  app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet
});
```

Calling Client.init with a specific connectUrl forces the client to connect to that specific node. When bestEndpointUrl is stored, it might be time-saving to connect directly instead of running the search again.

```ts
import { Client } from '@web3mq/client';

const fastUrl = await Client.init({
  connectUrl: bestEndpointUrl, // takes in a valid endpoint url as input, when this paramter is given, client will always connect to that specific node.
  app_key: 'app_key', // Appkey applied from our team
});
```

#### API endpoints

During this initial testing phase, we've hosted complete networks of Web3MQ nodes in different regions around the globe. Connect to these endpoints below, to access the Web3MQ Testnet.

- https://testnet-us-west-1-1.web3mq.com
- https://testnet-us-west-1-2.web3mq.com
- https://testnet-ap-jp-1.web3mq.com
- https://testnet-ap-jp-2.web3mq.com
- https://testnet-ap-singapore-1.web3mq.com
- https://testnet-ap-singapore-2.web3mq.com

### Sign with wallet to register user and obtain message encryption keys

For any first-time user of Web3MQ's network, you'll need to register on Web3MQ's network. Web3MQ's JS SDK takes care of the key generation process and subsequent wallet signing process. Client.register.register is a utility method that does this automatically.

#### Code

import { SignMetaMaskButton } from '@site/src/components/QuickStartStep/SignMetaMaskButton';

<Layout
title='register'
description='Get your userid and key pair.'
>
<SignMetaMaskButton />
</Layout>

```ts
// You must ensure that the Client.init initialization is complete before running this

/**
 *
 Two pairs of secret key pairs are returned after login
 1. Main secret key pairs
 Same as the public-private key pair returned after registration, please keep it safe
 2. Temp secret key pairs
 A temporary public-private key pair with an expiry time that marks whether the user is online or not
 */

const password = '123456';
const didType = 'eth' | 'starknet';

// 1. connect wallet and get address
const { address } = await Client.register.getAccount(didType);
const { userid, userExist } = await Client.register.getUserInfo({
    did_value: didValue,
    did_type: didType,
});
let localMainPrivateKey = '';
let localMainPublicKey = '';
if (mainKeys && userAccount.address.toLowerCase() === mainKeys.walletAddress.toLowerCase()) {
    localMainPrivateKey = mainKeys.privateKey;
    localMainPublicKey = mainKeys.publicKey;
}
if (!localMainPublicKey || !localMainPrivateKey) {
    const { publicKey, secretKey } = await Client.register.getMainKeypair({
        password,
        did_value: address,
        did_type: walletType,
    });
    localMainPrivateKey = secretKey;
    localMainPublicKey = publicKey;
}

const { tempPrivateKey, tempPublicKey, pubkeyExpiredTimestamp, mainPrivateKey, mainPublicKey } =
    await Client.register.login({
        password,
        mainPublicKey: localMainPublicKey,
        mainPrivateKey: localMainPrivateKey,
        userid,
        didType: walletType,
        didValue: address,
});
// Keep your private key in a safe place, this is for demo purposes only
localStorage.setItem("PRIVATE_KEY", TempPrivateKey);
localStorage.setItem("PUBLIC_KEY", TempPublicKey);
localStorage.setItem("userid", userid);
localStorage.setItem(`DID_KEY`, `${didType}:${address}`);
localStorage.setItem(`MAIN_PRIVATE_KEY`, mainPublicKey);
localStorage.setItem(`MAIN_PUBLIC_KEY`, mainPrivateKey);
localStorage.setItem(`WALLET_ADDRESS`, address);
```

### Get Client Instance

#### Code

import { InitClientButton } from '@site/src/components/QuickStartStep/InitClientButton';

<Layout
title='Client'
description='Get the client instance.You can see the Client object in the console.'
>
<InitClientButton />
</Layout>

```ts
const keys = { 
    PrivateKey: localStorage.getItem('PRIVATE_KEY'),
    PublicKey: localStorage.getItem('PUBLIC_KEY'),
    userid: localStorage.getItem('userid')
};

const client = Client.getInstance(keys);
```

## Create room

After initializing the client and registering your user, the next step is to connect to a room

#### Code
import { PreButton } from '@site/src/components/QuickStartStep/PreButton'
import { CreateRoomButton } from '@site/src/components/QuickStartStep/CreateRoomButton'

<Layout
title='create Room'
description='create your Chat Room.'
>
<PreButton><CreateRoomButton /></PreButton>
</Layout>

```ts
client.channel.createRoom();
```

```tsx
<button
  onClick={() => {
    client.channel.createRoom();
  }}>
  createGroup
</button>
```

## Send message

#### Code

import { SendMessageButton } from '@site/src/components/QuickStartStep/SendMessageButton'

<Layout
title='send message'
description='send your first message.'
>
<PreButton><SendMessageButton /></PreButton>
</Layout>

```ts
client.channel.sendMessage('Hello World');
```

```tsx
<button
  onClick={() => {
    client.message.sendMessage('Hello World');
  }}>
  sendMessage
</button>
```

## Full Example

> 1. Copy the Root Components Code to App.tsx
> 2. Create a Child.tsx file and copy the Child Components Code to Child.tsx

import { Layout } from '@site/src/components/Layout'
import { Example } from '@site/src/components/Example';
import AppMdx from '@site/src/components/Example/example.mdx'

<Layout
title='Example'
description='This is the full example'
code={<AppMdx />}>
<Example src="https://web3-mq-react-example.pages.dev/" />
</Layout>

#### Root Components Code

```tsx
import React, { useMemo, useState, useEffect } from 'react';
import { Client, KeyPairsType, WalletType } from '@web3mq/client';

// Root components
const Main: React.FC = () => {
    const hasKeys = useMemo(() => {
        const PrivateKey = localStorage.getItem('PRIVATE_KEY') || '';
        const PublicKey = localStorage.getItem('PUBLIC_KEY') || '';
        const userid = localStorage.getItem('userid') || '';
        if (PrivateKey && PublicKey && userid) {
            return { PrivateKey, PublicKey, userid };
        }
        return null;
    }, []);

    const mainKeys = useMemo(() => {
        const mainPrivateKey = localStorage.getItem(`MAIN_PRIVATE_KEY`);
        const mainPublicKey = localStorage.getItem(`MAIN_PUBLIC_KEY`);
        const address = localStorage.getItem('WALLET_ADDRESS');
        if (mainPublicKey && mainPrivateKey && address) {
            return {
                publicKey: mainPublicKey,
                privateKey: mainPrivateKey,
                walletAddress: address,
            };
        }
        return null;
    }, []);
    const [keys, setKeys] = useState<KeyPairsType | null>(hasKeys);
    const [fastestUrl, setFastUrl] = useState<string | null>(null);
    const [password, setPassword] = useState('');
    const [userAccount, setUserAccount] = useState<{
        userid: string;
        address: string;
        walletType: WalletType;
        userExist: boolean;
    }>();
    const [groupMsg, setGroupMsg] = useState('');
    const [groupChatMsgList, setGroupChatMsgList] = useState([]);
    const [chatRoomName, setChatRoomName] = useState('');
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

    const getUserAccount = async (
        didType: WalletType = 'eth',
        address?: string,
    ): Promise<{
        address: string;
        userExist: boolean;
    }> => {
        let didValue = address;
        if (!didValue) {
            const { address } = await Client.register.getAccount(didType);
            didValue = address;
        }
        const { userid, userExist } = await Client.register.getUserInfo({
            did_value: didValue,
            did_type: didType,
        });
        setUserAccount({
            userid,
            address: didValue,
            walletType: didType,
            userExist,
        });
        return {
            address: didValue,
            userExist,
        };
    };
    const loginByPassword = async (password: string) => {
        if (!userAccount) {
            return;
        }
        let localMainPrivateKey = '';
        let localMainPublicKey = '';
        const { userid, address, walletType } = userAccount;
        if (mainKeys && userAccount.address.toLowerCase() === mainKeys.walletAddress.toLowerCase()) {
            localMainPrivateKey = mainKeys.privateKey;
            localMainPublicKey = mainKeys.publicKey;
        }
        if (!localMainPublicKey || !localMainPrivateKey) {
            const { publicKey, secretKey } = await Client.register.getMainKeypair({
                password,
                did_value: address,
                did_type: walletType,
            });
            localMainPrivateKey = secretKey;
            localMainPublicKey = publicKey;
        }

        const { tempPrivateKey, tempPublicKey, pubkeyExpiredTimestamp, mainPrivateKey, mainPublicKey } =
            await Client.register.login({
                password,
                mainPublicKey: localMainPublicKey,
                mainPrivateKey: localMainPrivateKey,
                userid,
                didType: walletType,
                didValue: address,
            });
        localStorage.setItem('userid', userid);
        localStorage.setItem('PRIVATE_KEY', tempPrivateKey);
        localStorage.setItem('PUBLIC_KEY', tempPublicKey);
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem(`MAIN_PRIVATE_KEY`, mainPrivateKey);
        localStorage.setItem(`MAIN_PUBLIC_KEY`, mainPublicKey);
        localStorage.setItem(`DID_KEY`, `${userAccount.walletType}:${address}`);
        localStorage.setItem('PUBKEY_EXPIRED_TIMESTAMP', String(pubkeyExpiredTimestamp));
        setKeys({
            PrivateKey: tempPrivateKey,
            PublicKey: tempPublicKey,
            userid,
        });
    };
    const register = async (password: string, isResetPassword = false) => {
        if (!userAccount) {
            return null;
        }
        const { address, userid, walletType } = userAccount;
        const { publicKey, secretKey } = await Client.register.getMainKeypair({
            password,
            did_value: address,
            did_type: walletType,
        });
        const { signContent } = await Client.register.getRegisterSignContent({
            userid,
            mainPublicKey: publicKey,
            didType: walletType,
            didValue: address,
        });
        const { sign: signature, publicKey: did_pubkey = '' } = await Client.register.sign(
            signContent,
            address,
            walletType
        );

        const params = {
            userid,
            didValue: address,
            mainPublicKey: publicKey,
            did_pubkey,
            didType: walletType,
            nickname: '',
            avatar_url: `https://cdn.stamp.fyi/avatar/${address}?s=300`,
            signature,
        }
        await Client.register.register(params);
        // if (isResetPassword) {
        //   await Client.register.resetPassword(params);
        // } else {
        //   await Client.register.register(params);
        // }
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem(`MAIN_PRIVATE_KEY`, secretKey);
        localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
    };

    const login = async () => {
        if (!password) {
            alert('Password required！');
            return;
        }
        const account = await getUserAccount('eth');
        if (!account.userExist) {
            await register(password);
        }
        await loginByPassword(password);
    };

    const resetPassword = async () => {
        await getUserAccount('eth');
        await register(password, true);
    }

    useEffect(() => {
        init();
    }, []);

    if (!keys) {
        return (
            <div>
                <div>
                    password:{' '}
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    {userAccount && (
                        <div>
                            connect:
                            <div>address: {userAccount.address}</div>
                        </div>
                    )}
                </div>
                <button onClick={login}>Login</button>
            </div>
        );
    }

    if (!fastestUrl) {
        return null;
    }
    const handleEvent = (event: any) => {
        console.log(event, 'event');
    };
    const client = Client.getInstance(keys);
    client.on('channel.activeChange', handleEvent);
    client.on('channel.created', handleEvent);
    client.on('message.delivered', handleEvent);
    client.on('channel.getList', handleEvent);
    client.on('channel.updated', handleEvent);

    const createRoom = async () => {
        await client.channel.createRoom({
            group_name: chatRoomName || 'default room',
        });
        await client.channel.queryChannels({
            page: 1,
            size: 20,
        });
        if (client.channel.channelList) {
            await client.channel.setActiveChannel(client.channel.channelList[0]);
        }
    };

    const sendMsg = async () => {
        if (!groupMsg) {
            alert('message required');
        }
        await client.message.sendMessage(groupMsg);
    };

    return (
        <div>
            <div>
                <h1>chat</h1>
                <div>
                    Chat room name :
                    <input
                        type="text"
                        value={chatRoomName}
                        onChange={(e) => setChatRoomName(e.target.value)}
                    />
                </div>
                <button onClick={createRoom}>createRoom</button>
                <div>
                    msg :<input type="text" value={groupMsg} onChange={(e) => setGroupMsg(e.target.value)} />
                </div>
                <button onClick={sendMsg}>send</button>
                <div>
                    <ul>
                        {groupChatMsgList.map((item: any, index) => {
                            return <li>{item.content}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;

```

<!-- #### Child Components Code

```tsx
import React, { useState, useEffect } from 'react';
import { Client } from '@web3mq/client';

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
``` -->
