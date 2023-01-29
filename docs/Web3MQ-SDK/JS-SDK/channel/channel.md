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
| createRoom         | function | [CreateRoomParams](/docs/Web3MQ-SDK/JS-SDK/types/#createroomparams)   | none                                                                         |
| queryChannels      | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)               | none                                                                         |
| setActiveChannel   | function | [activechannelType](/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype) | none                                                                         |
| getGroupMemberList | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)               | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)[ ] |
| inviteGroupMember  | function | (members: string[])                                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)[ ] |
| joinGroup          | function | (groupid: string)                                                     | none                                                                         |
| getGroupPermissions| function | (groupid: string)                                                     | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)    |
| updateGroupPermissions| function | Pick<[UpdateGroupPermissionsParams](/docs/Web3MQ-SDK/JS-SDK/types/#updategrouppermissionsparams)), 'groupid' \|'permissions'>    | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)    |
### init Client

```tsx
import { useEffect, useState } from 'react';
import { Client, KeyPairsType } from "@web3mq/client";

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

### createRoom & queryChannels & setActiveChannel

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

  const setActiveChannel = async () => {
    const { channelList } = client.channel;
    if(channelList && channelList.length > 0) {
      await client.channel.setActiveChannel(channelList[0]);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          client.channel.createRoom({
            group_name: 'your favourite group name'
            avatar_url: 'your favourite image url'
          });
        }}
      >
        create group
      </button>
      <button
        onClick={() => setActiveChannel()}
      >
        set active channel
      </button>
    </div>
  );
};
```

### getGroupMemberList

```tsx
import { useEffect, useState } from 'react';
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  const [members, setMembers] = useState([]);
  useEffect(() => {
    client.channel.getGroupMemberList({
      page: 1,
      size: 100,
    }).then(res => {
      console.lof(res);
      setMembers(res.data.result);
    });
  }, []);
  return (
    <div>
      {members.map(member => (
        <div>
          {member.userid}
        </div>
      ))}
    </div>
  )
};
```

### inviteGroupMember

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
      // 2. You will invite users to the first Channel in your ChannelList
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
Group permission currently only `Group:join` rule that has `ceator_invite_friends`, `public` and `nft_validation ` type.

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