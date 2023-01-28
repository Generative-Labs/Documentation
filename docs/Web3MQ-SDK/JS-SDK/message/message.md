---
position: 5
---

# Message

## Properties

| name        | type                                                                          | Description  |
| ----------- | ----------------------------------------------------------------------------- | ------------ |
| messageList | [MessageListItem](/docs/Web3MQ-SDK/JS-SDK/types/#messagelistitem) [ ] \| null | message list |

## Methods

| name                | type     | Parameters Description                                                                      | response |
| ------------------- | -------- | ------------------------------------------------------------------------------------------- | -------- |
| getMessageList      | function | ([PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams), userId?: string)                  | none     |
| changeMessageStatus | function | (messages: string[], status: [MessageStatus](/docs/Web3MQ-SDK/JS-SDK/types/#messagestatus)) | none     |
| sendMessage         | function | (msg: string, secondParams: (target_userid or target_user_wallet_address) )                 | none     |
| receive             | function | receive message callback                                                                    | none     |

### init Client

```tsx
import { useEffect, useState } from 'react';
import { Client, KeyPairsType } from "web3-mq";

export const App = () => {
  const [fastUrl, setFastUrl] = useState<string | null>(null);
  const [keys, setKeys] = useState<KeyPairsType | null>(null);
  const init = async () => {
    // 1. You must initialize the SDK, the init function is asynchronous
    const newFastUrl = await Client.init({
      connectUrl: "example url", // The fastURL you saved to local
      app_key: "app_key", // Appkey applied from our team
    });
    setFastUrl(newFastUrl);
    // 2.Login and get keys
    const { address } = await Client.register.getAccount(didType);
    const { userid, userExist } = await Client.register.getUserInfo({
      did_value: address,
      did_type: didType,
    });
    let localMainPrivateKey = "";
    let localMainPublicKey = "";

    if (!userExist) {
      const registerRes = await Client.register.register({
        password,
        did_value: address,
        userid,
        did_type: didType,
        avatar_url: `https://cdn.stamp.fyi/avatar/${address}?s=300`,
      });
      localMainPrivateKey = registerRes.mainPrivateKey;
      localMainPublicKey = registerRes.mainPublicKey;
    }

    const {
      TempPrivateKey,
      TempPublicKey,
      pubkeyExpiredTimestamp,
      mainPrivateKey,
      mainPublicKey,
    } = await Client.register.login({
      password,
      userid,
      did_value: address,
      did_type: didType,
      mainPublicKey: localMainPublicKey,
      mainPrivateKey: localMainPrivateKey,
    });
    setKeys({
      PrivateKey: TempPrivateKey,
      PublicKey: TempPublicKey,
      userid: userid,
    })
  };
  useEffect(()=> {
    init();
  }, []);
  if (!fastUrl || !keys) return <div>Login...</div>;
  // 3. You must ensure that the Client.init initialization is complete and that you have a key pair
  const client = Client.getInstance(keys);
  return (
    <Child client={client} />
  )
}
```

### getMessageList & sendMessage

```tsx
import { useEffect } from 'react';
import { Client } from 'web3-mq';

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
      }, 'groupid: xxxxx...'); 
    };
  }

  useEffect(() => {
    getMessageList();
    client.on('message.getList', handleEvent);
    client.on('message.delivered', handleEvent);
    return () => {
      client.off('message.getList');
      client.off('message.delivered');
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          client.message.sendMessage('text'); // Basic use
          // or
          client.message.sendMessage('text', 'userid: xxxxx...'); // Send it directly to someone using a userid
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

```tsx
import { useEffect, useState } from 'react';
import { Client } from 'web3-mq';

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

  const handleEvent = (event: { type: any }) => {
    if (!activeChannel && channelList.length !== 0) {
      client.channel.setActiveChannel(channelList[0]);
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
    client.message.getMessageList({ page: 1, size: 100 });
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
