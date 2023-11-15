---
position: 5
---

# Message

## Properties

| name        | type                                                                          | Description  |
| ----------- | ----------------------------------------------------------------------------- | ------------ |
| messageList | [MessageListItem](/docs/Ethos-SDK/JS-SDK/types/#messagelistitem) [ ] \| null | message list |

## Methods

| name                | type     | Parameters Description                                                                      | response          |
| ------------------- | -------- | ------------------------------------------------------------------------------------------- | ----------------- |
| getMessageList      | function | 1.[PageParams](/docs/Ethos-SDK/JS-SDK/types/#pageparams) 2.secondParams: (target_userid or target_groupid or target_user_wallet_address)| Promise: void     |
| changeMessageStatus | function | 1.messages: string[] 2.status: [MessageStatus](/docs/Ethos-SDK/JS-SDK/types/#messagestatus)| Promise: [SearchUsersResponse](/docs/Ethos-SDK/JS-SDK/types/#searchusersresponse)     |
| sendMessage         | function | 1.msg: string 2.secondParams: (target_userid or target_user_wallet_address)                 | Promise: void     |
| receive             | function | 1.pbType: number 2.bytes: Uint8Array                                                        | Promise: void     |

## Prerequisites

> init() see: [init](/docs/Ethos-SDK/JS-SDK/client/#init)

> register() see: [register](/docs/Ethos-SDK/JS-SDK/register/#register-or-resetpassword)

> login() see: [login](/docs/Ethos-SDK/JS-SDK/register/#login)

> event see: [event](/docs/Ethos-SDK/JS-SDK/client/#events-1)

> queryChannels() see: [queryChannels](/docs/Ethos-SDK/JS-SDK/channel/#querychannels)

> setActiveChannel() see: [setActiveChannel](/docs/Ethos-SDK/JS-SDK/channel/#setactivechannel)

### Init and get Client
> To use the functions of the current module, please complete the following steps first.
:::tip
After successful login, you can get the secret key pair from the returned result
:::

```ts
import { useEffect, useState } from 'react';
import { Client } from '@web3mq/client'; 

export const App = () => {
  const [fastestUrl, setFastUrl] = useState<string | null>(null);
  useEffect(() => {
    Client.init({
        connectUrl: '', //
        app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet
    }).then(data => {
      setFastUrl(data);
    });
  }, []);
  if (!fastestUrl) return;
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
  return (
    <Child client={client} />
  )
}
```
## Methods
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
