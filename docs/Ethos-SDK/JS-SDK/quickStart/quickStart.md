---
position: 1
---

# QuickStart

**This Quickstart tutorial walks you through the key concepts of Ethos using a sample react project and successfully
send your first "hello world" to your friend!**

## Installation

> Install Ethos's JS SDK using a package manager of your choice

```bash
npm install @ethos/client
or
yarn add @ethos/client
```

:::tip
The webpack version in your React application needs to be above `5.0.0`, webpack `4.0.0` is not supported at the moment.

Vite `^4.0.0` is also supported;
:::

<!-- ## Note

:::caution

Ethos's JS SDK only supports Webpack 4 for now, we are working hard to upgrade dependencies to be compatible with Webpack 5 and above.

:::


### Using create-react-app

If you are building your project using a recent version of create-react-app that's running Webpack 5 or above, you might need to downgrade in order to integrate Ethos into your project.

> 1.  **Copy the following command to the terminal to install the lower version of react-scripts**
>
> ```bash
> npm install react-scripts@latest4
> or
> yarn add react-scripts@latest4
> ```
>
> 2. **Select the latest 4.x version (4.0.3) in terminal** -->

## Initialize Client

> Initialize Client and Connect to Ethos Network

In order to connect to the Ethos Network, both users and developers authenticate through wallet signatures, we
demonstrate below with an Ethereum wallet via Metamask, but Ethos is built to be compatible with wallets across
different chains.

#### Initialize Client and Connect to Ethos Network

:::note

While we are committed to building an open and collectively owned public good, our early stage testnet requires an API
key in order to connect. This is to control capacity to make sure that each early partner and developer is able to build
a great experience on top of Ethos. [Apply here](https://web3mq.com/apply).

:::

As Ethos is a federated network, our default JS SDK client has a method to help you connect to the best node for you.

Simply calling Client.init without connectUrl or an empty string returns a url of the best node determined for you, and
this url can be stored locally.

```ts
import {Client} from '@ethos/client';

// You can save the bestEndpointUrl locally to skip endpoint search next time, which will save time, and
const bestEndpointUrl = await Client.init({
    connectUrl: '', //
    app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet
});
```

Calling Client.init with a specific connectUrl forces the client to connect to that specific node. When bestEndpointUrl
is stored, it might be time-saving to connect directly instead of running the search again.

```ts
import {Client} from '@ethos/client';

const fastUrl = await Client.init({
    connectUrl: bestEndpointUrl, // takes in a valid endpoint url as input, when this paramter is given, client will always connect to that specific node.
    app_key: 'app_key', // Appkey applied from our team
});
```

#### API endpoints

During this initial testing phase, we've hosted complete networks of Ethos nodes in different regions around the globe.
Connect to these endpoints below, to access the Ethos Testnet.

- https://testnet-us-west-1-1.web3mq.com
- https://testnet-us-west-1-2.web3mq.com
- https://testnet-ap-jp-1.web3mq.com
- https://testnet-ap-jp-2.web3mq.com
- https://testnet-ap-singapore-1.web3mq.com
- https://testnet-ap-singapore-2.web3mq.com

## Register User

> Sign with wallet to register user and obtain message encryption keys

For any first-time user of Ethos's network, you'll need to register on Ethos's network. Ethos's JS SDK takes care of
the key generation process and subsequent wallet signing process. Client.register.register is a utility method that does
this automatically.

#### Login demo

import { SignMetaMaskButton } from '@site/src/components/QuickStartStep/SignMetaMaskButton';

<Layout
title='register'
description='Get your userid and key pair.'
>
<SignMetaMaskButton />
</Layout>

#### Code

#### login registration using JavaScript SDK

```ts
import React, {useMemo, useState, useEffect} from "react";
import {Client, KeyPairsType, WalletType} from "@ethos/client";

const loginDemo = async () => {
    const password = '123456';
    const didType: WalletType = 'eth' // or 'starknet';

// 1. connect wallet and get user
    const {address: didValue} = await Client.register.getAccount(didType);
    const {userid, userExist} = await Client.register.getUserInfo({
        did_value: didValue,
        did_type: didType,
    });
// 2. create main key pairs
    const {publicKey: localMainPublicKey, secretKey: localMainPrivateKey} = await Client.register.getMainKeypair({
        password,
        did_value: didValue,
        did_type: didType,
    });

    if (!userExist) {
//    register func
        const {signContent} = await Client.register.getRegisterSignContent({
            userid,
            mainPublicKey: localMainPublicKey,
            didType,
            didValue,
        });
        const {sign: signature, publicKey: did_pubkey = ""} =
            await Client.register.sign(signContent, didValue, didType);
        const params = {
            userid,
            didValue,
            mainPublicKey: localMainPublicKey,
            did_pubkey,
            didType,
            nickname: "",
            avatar_url: `https://cdn.stamp.fyi/avatar/${didValue}?s=300`,
            signature,
        };
        const registerRes = await Client.register.register(params);
        console.log(registerRes)
    }
// login func
    const {
        tempPrivateKey,
        tempPublicKey,
        pubkeyExpiredTimestamp,
        mainPrivateKey,
        mainPublicKey,
    } = await Client.register.login({
        password,
        mainPublicKey: localMainPublicKey,
        mainPrivateKey: localMainPrivateKey,
        userid,
        didType,
        didValue,
    });
}

loginDemo()
```

#### login registration using react components

#### Installation

Install Ethos's react components using a package manager of your choice

```bash
npm install @ethos/react-components
or
yarn add @ethos/react-components
```

```tsx
import React, {useEffect, useState} from "react";
import {AppTypeEnum, LoginModal} from "@ethos/react-components";
import "@ethos/react-components/dist/css/index.css";
import {Client} from "@ethos/client";

const App: React.FC = () => {
    const [fastestUrl, setFastUrl] = useState<string | null>(null);
    const [isLogin, setIsLogin] = useState(false);
    const handleLoginEvent = (event: any) => {
        console.log(event, "event");
        if (event.data && event.type === "login") {
            setIsLogin(true);
        }
    };

    const init = async () => {
        const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";
        const didKey = localStorage.getItem("DID_KEY") || "";
        const fastUrl = await Client.init({
            connectUrl: localStorage.getItem("FAST_URL"),
            app_key: "vAUJTFXbBZRkEDRE",
            env: "dev",
            didKey,
            tempPubkey,
        });
        localStorage.setItem("FAST_URL", fastUrl);
        setFastUrl(fastUrl);
    };

    useEffect(() => {
        init();
        document.body.setAttribute("data-theme", "light");
    }, []);
    if (!fastestUrl) {
        return null;
    }

    let mainKeys = null;
    const mainPrivateKey = localStorage.getItem(`MAIN_PRIVATE_KEY`);
    const mainPublicKey = localStorage.getItem(`MAIN_PUBLIC_KEY`);
    const address = localStorage.getItem("WALLET_ADDRESS");
    if (mainPublicKey && mainPrivateKey && address) {
        mainKeys = {
            publicKey: mainPublicKey,
            privateKey: mainPrivateKey,
            walletAddress: address,
        };
    }

    return (
        <div>
            {isLogin ? (
                <div>login success</div>
            ) : (
                <LoginModal
                    keys={mainKeys || undefined}
                    handleLoginEvent={handleLoginEvent}
                    appType={AppTypeEnum.pc}
                    containerId={""}
                    loginBtnNode={<button className="sign_btn">MetaMask</button>}
                />
            )}
        </div>
    );
};

export default App;


```

## Get Client Instance
> Get Client Instance

#### Use Demo

import { InitClientButton } from '@site/src/components/QuickStartStep/InitClientButton';

<Layout
title='Client'
description='Get the client instance.You can see the Client object in the console.'
>
<InitClientButton />
</Layout>

#### Code

:::tip
After successful login, you can get the secret key pair from the returned result
:::

```ts

const {
    tempPrivateKey,
    tempPublicKey,
    pubkeyExpiredTimestamp,
    mainPrivateKey,
    mainPublicKey,
} = loginRes

const keys = {
    PrivateKey: tempPrivateKey,
    PublicKey: tempPublicKey,
    userid: localStorage.getItem('userid')
};

const client = Client.getInstance(keys);
```

## Create room

> After initializing the client and registering your user, the next step is to connect to a room

#### Use Demo Code

import { PreButton } from '@site/src/components/QuickStartStep/PreButton'
import { CreateRoomButton } from '@site/src/components/QuickStartStep/CreateRoomButton'

<Layout
title='create Room'
description='create your Chat Room.'
>
<PreButton><CreateRoomButton /></PreButton>
</Layout>

#### Code

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
client.message.sendMessage('Hello World');
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
import React, {useEffect, useMemo, useState} from 'react';
import {Client, KeyPairsType, WalletType} from '@ethos/client';
import {AppTypeEnum, LoginModal} from "@ethos/react-components";
import '@ethos/react-components/dist/css/index.css';

// Root components
const App: React.FC = () => {
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

    useEffect(() => {
        init();
        document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
    }, []);

    if (!keys) {
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
        return <LoginModal
            keys={mainKeys || undefined}
            handleLoginEvent={handleLoginEvent}
            appType={AppTypeEnum.pc}
            containerId={''}
            loginBtnNode={
                <button className="sign_btn">
                    MetaMask
                </button>
            }
        />;
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

export default App;

```

<!-- #### Child Components Code

```tsx
import React, { useState, useEffect } from 'react';
import { Client } from '@ethos/client';

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
