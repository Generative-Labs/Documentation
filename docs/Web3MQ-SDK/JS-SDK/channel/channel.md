---
position: 4
---

# Channel

## Properties

| name          | type                                                                              | Description            |
| ------------- | --------------------------------------------------------------------------------- | ---------------------- |
| channelList   | [ChannelItemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype) [ ] \| null     | channel list           |
| activeChannel | [ChannelItemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype) \| null         | current active channel |

## Methods

| name               | type     | Parameters Description                                                | response                                                                              |
| ------------------ | -------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| createRoom         | function | [CreateRoomParams](/docs/Web3MQ-SDK/JS-SDK/types/#createroomparams)   | Promise: void                                                                         |
| queryChannels      | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)               | Promise: void                                                                         |
| setActiveChannel   | function | [ChannelItemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype) \| null | Promise: void                                                                     |
| updateChannels     | function | [UpdateRoomListParams](/docs/Web3MQ-SDK/JS-SDK/types/#updateroomlistparams) | Promise: [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse) |
| getGroupMemberList | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)               | Promise: [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)[ ] |
| inviteGroupMember  | function | members: string[]                                                     | Promise: [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)[ ] |
| joinGroup          | function | groupid: string                                                       | Promise: void                                                                         |
| getGroupPermissions| function | groupid: string                                                       | Promise: [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)    |
| updateGroupPermissions| function | [UpdateGroupPermissionsParams](/docs/Web3MQ-SDK/JS-SDK/types/#updategrouppermissionsparams)    | Promise: [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)    |

## Prerequisites

> init() see: [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)

> register() see: [register](/docs/Web3MQ-SDK/JS-SDK/register/#register-or-resetpassword)

> login() see: [login](/docs/Web3MQ-SDK/JS-SDK/register/#login)

> event see: [event](/docs/Web3MQ-SDK/JS-SDK/client/#events-1)

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
  }, [])
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

### createRoom
> Pass in optional parameters such as `groupName` to create a group chat.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';
interface IProps {
  client: Client;
}
export const Child = (props: IProps) => {
  const { client } = props;
  const handleEvent = (event: { type: any }) => {
    if (event.type === 'channel.getList') {
      // The channel you create will appear in the latest channelList
      console.log(client.channel.channelList);
    }
  };

  useEffect(() => {
    client.on('channel.getList', handleEvent);
    return () => {
      client.off('channel.getList');
    };
  }, []);

  return (
    <button
      onClick={() => {
        client.channel.createRoom({
          groupName: 'your favourite group name',
          avatarUrl: 'your favourite image url'
        });
      }}
    >
      create group
    </button>
  );
};
```

### queryChannels
> Get the list of chat rooms, and could pass in `pageParams` type parameters to achieve paging.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

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

  return (
    <button
      onClick={() => {
        client.channel.queryChannels({
          page: 1,
          size: 20
        });
      }}
    >
      query Channels
    </button>
  );
};
```
### setActiveChannel
> Set `activeChannel` to eliminate the need for `groupid`/`userid` in some methods, such as `client.message.sendMessage`.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';
interface IProps {
  client: Client;
}
export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'channel.activeChange') {
      // Get the latest activeChannel
      console.log(client.channel.activeChannel);
    }
    if (event.type === 'channel.activeChannel') {
      // Get the latest channelList
      console.log(client.channel.channelList);
    }
  };

  useEffect(() => {
    client.channel.queryChannels({page: 1,size: 20});
    client.on('channel.getList', handleEvent);
    return () => {
      client.off('channel.getList');
    };
  }, []);

  const setActiveChannel = async () => {
    const { channelList } = client.channel;
    // If your `chanelList` is empty please create one first
    if (channelList.length === 0) {
      await client.channel.createRoom({
        groupName: 'your favourite group name',
        avatarUrl: 'your favourite image url'
      });
      await client.channel.setActiveChannel(channelList[0]);
    }
    if(channelList && channelList.length > 0) {
      await client.channel.setActiveChannel(channelList[0]);
    }
  };

  return (
    <button
      onClick={setActiveChannel}
    >
      set Active Channel
    </button>
  );
};
```
### updateChannels
> Update your channels.

```tsx
import { Client } from '@web3mq/client';
interface IProps {
  client: Client;
}
export const Child = (props: IProps) => {
  const { client } = props;

  const updateChannel = async () => {
    const date = await client.channel.updateChannels({
      chatid: 'groupid or userid',
      chat_type: 'chat type —— group or user',
      topic: 'groupid or userid',
      topic_type: 'chat type —— group or user',
    });
    console.log(data);
  };

  return (
    <button
      onClick={updateChannel};
      }}
    >
      update Channel
    </button>
  );
};
```

### getGroupMemberList
> Get the list of group chat members after setting `activeChannel`.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  useEffect(() => {
    client.channel.queryChannels({
      page: 1,
      size: 100,
    })
  }, []);
  const getGroupMembers = async() => {
    const { channelList } = client.channel;
    // If your `chanelList` is empty please create one first
    if (channelList.length === 0) {
      await client.channel.createRoom({
        groupName: 'your favourite group name',
        avatarUrl: 'your favourite image url'
      });
      await client.channel.setActiveChannel(channelList[0]);
    } else {
      await client.channel.setActiveChannel(channelList[0]);
    }
    const dat = await client.channel.getGroupMemberList({
      page: 1,
      size: 100,
    });
    console.log(data);
  }
  return (
    <button
      onClick={getGroupMembers}
    >
      get group members
    </button>
  )
};
```

### inviteGroupMember
> Invite users to the current `activeChannel`.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  const handleEvent = (event: { type: any }) => {
    if (!activeChannel && channelList.length !== 0) {
      // 1. You need to set activeChannel before inviteGroupMember
      client.channel.setActiveChannel(channelList[0]);
    }
    if (event.type === 'channel.getList') {
      // Get the latest channelList
      console.log(client.channel.channelList);
    }
  };
  const inviteGroupMember = async () => {
    const { activeChannel } = client;
    if (activeChannel) {
      // 2. You will invite users to the `activeChannel`
      const data = await client.channel.inviteGroupMember([`member's userid`]);
      console.log(data);
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
    <button
      onClick={() => inviteGroupMember()}>
      invite Group Member
    </button>
  );
};
```

### joinGroup
> Join a group chat by `groupid`.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

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
    client.channel.queryChannels({ page: 1, size: 100 });
    client.on('channel.getList', handleEvent);
    return () => {
      client.off('channel.getList');
    };
  }, []);

  return (
    <button
      onClick={() => {
        client.channel.joinGroup('groupid')
      }}>
      join Group
    </button>
  );
};
```

### getGroupPermissions
> View group chat permissions by `groupid`. Group permission currently only `Group:join` rule that has `ceator_invite_friends`, `public` and `nft_validation ` type.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

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
    client.channel.queryChannels({ page: 1, size: 100 });
    client.on('channel.getList', handleEvent);
    return () => {
      client.off('channel.getList');
    };
  }, []);

  return (
    <button
      onClick={async() => {
        const { channelList } = client.channel;
        if (channelList && channelList.length > 0) {
          const data = await client.channel.getGroupPermissions(channelList[0].chatid);
          console.log(data);
        } else {
          await client.channel.createRoom({ group_name: 'hello world'});
          const data = await client.channel.getGroupPermissions(channelList[0].chatid);
          console.log(data);
        }
      }}>
      get group permissions
    </button>
  );
};
```

### updateGroupPermissions
> Changing group chat permissions.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

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
    client.channel.queryChannels({ page: 1, size: 100 });
    client.on('channel.getList', handleEvent);
    client.on('channel.updated',  handleEvent);
    return () => {
      client.off('channel.getList');
      client.off('channel.updated');
    };
  }, []);

  return (
    <button
      onClick={async() => {
        await client.channel.createRoom({ group_name: 'hello world'});
        const { channelList } = client.channel;
        const data = await client.channel.updateGroupPermissions({
          groupid: channelList[0].chatid,
          permissions: {
            "group:join": {
                type: "enum",
                value: "public"
            }
          }
        });
        console.log(data);
      }}
    >
      update group permissions
    </button>
  );
};
```