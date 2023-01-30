---
position: 5
---

# Message

## Properties

| name        | type                                                                          | Description  |
| ----------- | ----------------------------------------------------------------------------- | ------------ |
| messageList | [MessageListItem](/docs/Web3MQ-SDK/JS-SDK/types/#messagelistitem) [ ] \| null | message list |

## Methods

| name                | type     | Parameters Description                                                                      | response          |
| ------------------- | -------- | ------------------------------------------------------------------------------------------- | ----------------- |
| getMessageList      | function | 1.[PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams) 2.secondParams: (target_userid or target_groupid or target_user_wallet_address)| Promise: void     |
| changeMessageStatus | function | 1.messages: string[] 2.status: [MessageStatus](/docs/Web3MQ-SDK/JS-SDK/types/#messagestatus)| Promise: [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)     |
| sendMessage         | function | 1.msg: string 2.secondParams: (target_userid or target_user_wallet_address)                 | Promise: void     |
| receive             | function | 1.pbType: number 2.bytes: Uint8Array                                                        | Promise: void     |

## Prerequisites

> init() see: [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)

> register() see: [register](/docs/Web3MQ-SDK/JS-SDK/register/#register-or-resetpassword)

> login() see: [login](/docs/Web3MQ-SDK/JS-SDK/register/#login)

> event see: [event](/docs/Web3MQ-SDK/JS-SDK/client/#events-1)

> queryChannels() see: [queryChannels](/docs/Web3MQ-SDK/JS-SDK/channel/#querychannels)

> setActiveChannel() see: [setActiveChannel](/docs/Web3MQ-SDK/JS-SDK/channel/#setactivechannel)

### init Client
> A combined web3mq-react example, and create web3mq client before chat.

```tsx
import { useMemo, useState } from 'react';
import {Client, KeyPairsType, SignClientCallBackType, WalletType} from '@web3mq/client';
import {LoginModal} from '@web3mq/react-components';

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
  const [userAccount, setUserAccount] = useState<{
    userid: string;
    address: string;
  }>();

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
    localStorage.setItem('PRIVATE_KEY', '')
    localStorage.setItem('PUBLIC_KEY', '')
    localStorage.setItem('DID_KEY', '')
    localStorage.setItem('userid', '')
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

  return { keys, fastestUrl, init, handleLoginEvent, logout };
};

export const App = () => {
  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();
  useEffect(()=> {
    init();
  }, []);
  if (!fastestUrl) return null;
  if (!keys) return (
    <LoginModal 
      handleLoginEvent={handleLoginEvent}
      appType={AppTypeEnum.pc}
    />
  );
  // 3. You must ensure that the Client.init initialization is complete and that you have a key pair
  const client = Client.getInstance(keys);
  return (
    <Child client={client} />
  )
}

```

### getMessageList
> Select the chat room to get the list of messages by userid, wallet, groupid and `setActiveChannel` operation.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    const { channelList, activeChannel } = client.channel;
    if (!activeChannel && channelList.length !== 0) {
      // The default setting for the first item of `channelList` is `activechannel`
      client.channel.setActiveChannel(channelList[0]);
    }
    if (event.type === 'message.getList') {
      console.log(client.message.messageList);
    }
  };
  const getMessageList = async () => {
    const { activeChannel } = client.channel;
    if (activeChannel) {
      // Basic use  When you set the `activeChannel`, it will get the messagesList of the `activeChannel` by default.
      await client.message.getMessageList({
        page: 1,
        size: 20,
      });
    } else {
      // Get the `messagesList` in the specified channel.(the second props can also be the `userid`)
      await client.message.getMessageList({
        page: 1,
        size: 20,
      }, 'groupid or userid'); 
    };
  }

  useEffect(() => {
    client.channel.queryChannels({page: 1, size: 20});
    client.on('channel.getList', handleEvent);
    client.on('message.getList', handleEvent);
    return () => {
      client.off('channel.getList', handleEvent);
      client.off('message.getList', handleEvent);
    };
  }, []);

  return (
    <div>
      <button onclick={getMessageList}>
        get message list
      </button>
    </div>
  );
};
```

### sendMessage
> Send a message after selecting a chat object by userid, wallet, groupid and `setActiveChannel` operation.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'message.getList') {
      console.log(client.message.messageList);
    }
    if (event.type === 'message.delivered') {
      console.log('message delivered');
    }
    if (event.type === 'message.send') {
      console.log('message send');
    }
  };

  useEffect(() => {
    client.on('message.getList', handleEvent);
    client.on('message.delivered', handleEvent);
    client.on('message.send', handleEvent);
    return () => {
      client.off('message.getList', handleEvent);
      client.off('message.delivered', handleEvent);
      client.off('message.send', handleEvent);
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          client.message.sendMessage('text'); // Basic use
          // or
          client.message.sendMessage('text', 'user: xxxxx...'); // Send it directly to someone using a userid
          // or
          client.message.sendMessage('text', 'group: xxxxx...'); // Send it directly to someone using a groupid
          // or
          client.message.sendMessage('text', '0xABCD...'); // Send it directly to someone using a wallet address
        }}>
        send Message
      </button>
    </div>
  );
};
```
### changeMessageStatus
> Select the messageId of the message to modify the message state after the setactiveChannel operation.

```tsx
import { useEffect, useState } from 'react';
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  const [msgIds, setMsgIds] = useState<Array<string>>([]);

  const changeMessageStatus = async () => {
    const { activeChannel } = client.channel;
    if (activeChannel) {
      const data = await client.message.changeMessageStatus(msgIds);
      console.log(data);
    } else {
      console.log('Please set `activeChannel` first');
    }
  };

  const handleEvent = async (event: { type: any }) => {
    if (!activeChannel && channelList.length !== 0) {
      await client.channel.setActiveChannel(channelList[0]);
      await client.message.getMessageList({ page: 1, size: 100 });
    }
    if (event.type === 'channel.getList') {
      // Get the latest channelList
      console.log(client.channel.channelList);
    }
    if (event.type === 'message.getList') {
      console.log(client.message.messageList);
      setMsgIds(client.message.messageList.map(msg => msg.id))
    }
  };

  useEffect(() => {
    client.channel.queryChannels({ page: 1, size: 100 });
    client.on('channel.getList', handleEvent);
    return () => {
      client.off('channel.getList');
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => changeMessageStatus()}>
        Change Message Status
      </button>
    </div>
  );
};
```
