---
position: 3
---

# Channel

## Properties

| name          | type                                                                                 | Description            |
| ------------- | ------------------------------------------------------------------------------------ | ---------------------- |
| channelList   | [activechannelType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#activechanneltype) [ ] \| null | channel list           |
| activeChannel | [activechannelType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#activechanneltype) \| null     | current active channel |

## Methods

| name               | type     | Parameters Description                                                   | response                                                                        |
| ------------------ | -------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| createRoom         | function | none                                                                     | none                                                                            |
| queryChannels      | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK-V2/types/#pageparams)               | none                                                                            |
| setActiveChannel   | function | [activechannelType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#activechanneltype) | none                                                                            |
| getGroupMemberList | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK-V2/types/#pageparams)               | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype)[ ] |
| inviteGroupMember  | function | (members: string[])                                                      | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype)[ ] |

## init Client

```tsx
import { Client } from 'web3-mq';
// sign MetaMask get keys
const keys = { PrivateKey, PublicKey };
// ws host url
const HostURL = '94.16.119.221:23333/messages';
// init client
const client = Client.getInstance(keys, HostURL);
```

## CreateRoom & QueryChannels & SetActiveChannel

```tsx
import { useEffect } from 'react';
export const App = () => {
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
export const App = () => {
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
export const App = () => {
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
