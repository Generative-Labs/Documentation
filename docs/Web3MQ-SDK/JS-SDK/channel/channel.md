---
position: 4
---

# Channel

## Properties

| name          | type                                                                              | Description            |
| ------------- | --------------------------------------------------------------------------------- | ---------------------- |
| channelList   | [activechannelType](/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype) [ ] \| null | channel list           |
| activeChannel | [activechannelType](/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype) \| null     | current active channel |

## Methods

| name               | type     | Parameters Description                                                | response                                                                     |
| ------------------ | -------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| createRoom         | function | none                                                                  | none                                                                         |
| queryChannels      | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)               | none                                                                         |
| setActiveChannel   | function | [activechannelType](/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype) | none                                                                         |
| getGroupMemberList | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)               | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)[ ] |
| inviteGroupMember  | function | (members: string[])                                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)[ ] |

## init Client

```tsx
import { Client } from 'web3-mq';
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
});
// 2. sign MetaMask get keys
const { PrivateKey, PublicKey, userid } = await Client.register.signMetaMask({
  signContentURI: 'https://www.web3mq.com', // your signContent URI
  EthAddress: 'your eth address', // *Not required*  your eth address, if not use your MetaMask eth address
});
const keys = { PrivateKey, PublicKey, userid };
// 3. You must ensure that the Client.init initialization is complete and that you have a key pair
const client = Client.getInstance(keys);

console.log(client);

export const App = () => {
  return (
    <div>
      <Child client={client} />
    </div>
  );
};
```

## CreateRoom & QueryChannels & SetActiveChannel

```tsx
import { useEffect } from 'react';
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'channel.getList') {
      // Get the latest channelList
      console.log(client.channel.channelList);
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
      <button
        onClick={() => {
          client.channel.setActiveChannel({ topic: 'xxx', topic_type: 'xxx' });
        }}>
        set active channel
      </button>
    </div>
  );
};
```

## getGroupMemberList

```tsx
import { useEffect } from 'react';
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  useEffect(async () => {
    const data = await client.channel.getGroupMemberList({
      page: 1,
      size: 100,
    });
    console.log(data);
  }, []);
};
```

## InviteGroupMember

```tsx
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  return (
    <button
      onClick={async () => {
        const data = await client.channel.inviteGroupMember('memberid');
        console.log(data);
      }}>
      invite Group Member
    </button>
  );
};
```
