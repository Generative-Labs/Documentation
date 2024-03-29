---
position: 4
---

# Channel

## Prerequisites

:::tip

This is the detailed documentation on the channel module, before that please read the [Quickstart](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype) tutorial if you haven't done so already!

:::

> init() see: [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)

> register() see: [register](/docs/Web3MQ-SDK/JS-SDK/register/#register-or-resetpassword)

> login() see: [login](/docs/Web3MQ-SDK/JS-SDK/register/#login)

> event see: [event](/docs/Web3MQ-SDK/JS-SDK/client/#events-1)

### Init and get Client

> To use the functions of the current module, please complete the following steps first.

:::tip
After successful login, you can get the secret key pair from the returned result
:::

```tsx
import { useEffect, useState } from "react";
import { Client } from "@web3mq/client";
import { Child } from "./Child";

export const App = () => {
  const [fastestUrl, setFastUrl] = useState<string | null>(null);
  useEffect(() => {
    Client.init({
      connectUrl: "", //
      app_key: "app_key", // temporary authorization key obtained by applying, will be removed in future testnets and mainnet
    }).then((data) => {
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
  } = loginRes;

  const keys = {
    PrivateKey: tempPrivateKey,
    PublicKey: tempPublicKey,
    userid: localStorage.getItem("userid"),
  };

  const client = Client.getInstance(keys);
  return <Child client={client} />;
};
```

## Definitions

### Permission

:::tip

Group chat permission currently only has `group:join` rule, which indicates the permission to join a group.

:::

This rule has three values: `creator_invite_friends`,`public`,`nft_validation`.

#### `creator_invite_friends`

> Only the group owner can invite friends to join.

**Json example**

```json
{
  "group:join": {
    "type": "enum",
    "value": "creator_invite_friends"
  }
}
```

#### `public`

> Everyone can join without restrictions.

**Json example**

```json
{
  "group:join": {
    "type": "enum",
    "value": "public"
  }
}
```

#### `nft_validation`

> Have a specific nft to join a group chat.

**Json example**

```json
{
  "group:join": {
    "type": "enum",
    "value": "nft_validation"
  }
}
```

:::tip

When the value of the privilege is `nft_validation`, an additional `nfts` parameter is required, parameter type: [nfts](/docs/Web3MQ-SDK/JS-SDK/types/#nftpermissiontype)[].

:::

```tsx
const params = {
  groupid: "YOUR_GROUP_ID",
  permissions: {
    "group:join": {
      type: "enum",
      value: "nft_validation",
    },
  },
  nfts: [
    {
      chain_id: "SN_GOERLI",
      chain_type: "starknet",
      contract: "0x00000000000000001",
    },
  ],
};
```

### Chat type

`chat_type` indicates whether the channel is a group or private chat.

This `chat_type` has two values: `group`,`user`.

## Properties

| name                   | type                                                                                        | Parameters Description                                                                               | response                                                                                                     | desc                                       |
| ---------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| channelList            | Array of Object : [ChanneLitemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype) \| null | -                                                                                                    | -                                                                                                            | channel list                               |
| activeChannel          | object: [ChanneLitemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype) \| null           | -                                                                                                    | -                                                                                                            | current active channel                     |
| createRoom             | function                                                                                    | object: [CreateRoomParams](/docs/Web3MQ-SDK/JS-SDK/types/#createroomparams)                          | Promise: void                                                                                                | create a group channel                     |
| queryChannels          | function                                                                                    | object: [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                      | Promise: void                                                                                                | Get created or joined channels             |
| setActiveChannel       | function                                                                                    | object: [ChannelItemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype) \| null                    | Promise: void                                                                                                | Set the currently active channel           |
| getGroupMemberList     | function                                                                                    | 1. object: [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)<br/>2. string (Optional) : cahtid | Promise: Array of Object : [GroupMemberListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#groupmemberlistitemtype) | Get all members of a channel               |
| inviteGroupMember      | function                                                                                    | members: string[]                                                                                    | Promise: void                                                                                                | Invite members to a channel                |
| joinGroup              | function                                                                                    | groupid: string                                                                                      | Promise: void                                                                                                | Join a group chat                          |
| getGroupPermissions    | function                                                                                    | groupid: string                                                                                      | Promise: [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)                           | Querying permissions for a channel         |
| updateGroupPermissions | function                                                                                    | [UpdateGroupPermissionsParams](/docs/Web3MQ-SDK/JS-SDK/types/#updategrouppermissionsparams)          | Promise: void                                                                                                | Update permissions for a channel I created |

### channelList : All chat channels created and joined by the currently logged in user.

:::tip
Is a readable property of the channel class.

The value of this property changes when the `channel.updated`,`channel.created`,`channel.getList` events are triggered.
:::

#### usage : `client.channel.channelList`

#### type : Array of Object : [ChanneLitemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype)

#### example json data

```json
[
  {
    "topic": "user:58776420fa755e0e266100addbb635b2f204a93ac8b3856c87826494",
    "topic_type": "user",
    "chatid": "user:58776420fa755e0e266100addbb635b2f204a93ac8b3856c87826494",
    "chat_type": "user",
    "chat_name": "user:58776420fa755e0e266100addbb635b2f204a93ac8b3856c87826494",
    "avatar_url": "",
    "avatar_base64": ""
  },
  {
    "topic": "group:4a9682ccd3a32fa8d33ec095ded011d0503bb246",
    "topic_type": "group",
    "chatid": "group:4a9682ccd3a32fa8d33ec095ded011d0503bb246",
    "chat_type": "group",
    "chat_name": "Group-Public",
    "avatar_url": "",
    "avatar_base64": ""
  }
]
```

### activeChannel : Currently active channel

:::tip
Is a readable property of the channel class.

The value of this property changes when the `channel.activeChange` event are triggered.
:::

#### usage : `client.channel.activeChannel`

#### type : object: [ChanneLitemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype)

#### example json data

```json
{
  "topic": "group:ea8b41ea35c0cc8efd4b5a6f598d54f2ed890e3a",
  "topic_type": "group",
  "chatid": "group:ea8b41ea35c0cc8efd4b5a6f598d54f2ed890e3a",
  "chat_type": "group",
  "chat_name": "a276 room 3",
  "avatar_url": "",
  "avatar_base64": "",
  "unread": 0
}
```

### createRoom() : Create a `group` chat

:::tip
Method of the channel class.

Private chat channels don't need to be created, just send a message directly to an address.
:::

#### Params : object : [CreateRoomParams](/docs/Web3MQ-SDK/JS-SDK/types/#createroomparams)

**Fields of params**

1. groupName: Optional field, To set the name of the created group chat.
1. avatarUrl: Optional field, To set the avatar of the created group chat.
1. groupid: Optional field, To set the chatid of the created group chat.
1. permissions: Optional field, To set the [permissions](/docs/Web3MQ-SDK/JS-SDK/channel/#permission) of the created group chat.
1. nfts: Optional field, Required when the value of the permission is set to `nft_validation`.

#### Response : Promise: void

#### Usage Examples

> When func called, triggers the `channel.getList` event, and then the value of `client.channel.channelList` is updated.

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  const handleEvent = (event: { type: any }) => {
    if (event.type === "channel.getList") {
      // The channel you create will appear in the latest channelList
      console.log(client.channel.channelList);
    }
  };

  useEffect(() => {
    client.on("channel.getList", handleEvent);
    return () => {
      client.off("channel.getList");
    };
  }, []);

  return (
    <button
      onClick={() => {
        client.channel.createRoom({
          groupName: "your favourite group name", // Optional field, To set the name of the created group chat.
          avatarUrl: "your favourite image url", //Optional field
          groupid: "YOUR SET",
          permissions: undefined,
          nfts: [],
        });
      }}
    >
      create group
    </button>
  );
};
```

### queryChannels() : Get created or joined channels

:::tip
Method of the channel class.
:::

#### Params : object: [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)

**Fields of params**

1. page: Required field, Page number of the current query
1. size: Required field, Number of current queries

#### Response : Promise: void

#### Usage Examples

> When func called, triggers the `channel.getList` event, and then the value of `client.channel.channelList` is updated.

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === "channel.getList") {
      // Get the latest channelList
      console.log(client.channel.channelList);
    }
  };

  useEffect(() => {
    client.on("channel.getList", handleEvent);
    return () => {
      client.off("channel.getList");
    };
  }, []);

  return (
    <button
      onClick={async () => {
        await client.channel.queryChannels({
          page: 1,
          size: 10,
        });
      }}
    >
      query Channels
    </button>
  );
};
```

### setActiveChannel() : Set the currently active channel

:::tip
Method of the channel class.

:::

#### Params : object : [ChanneLitemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype)

> Usually just one from `client.channel.channelList`

**Fields of params**

1. avatar_url: Required field, Avatar of chat selected.
1. chat_name: Required field, Name of chat selected.
1. chat_type: Required field, Type of chat selected.
1. chatid: Required field, Chatid of chat selected.

#### Response : Promise: void

#### Usage Examples

> When func called, triggers the `channel.activeChange` event, and then the value of `client.channel.activeChannel` is updated.

> Set `activeChannel` to eliminate the need for `groupid`/`userid` in some methods, such
> as `client.message.sendMessage`.

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === "channel.activeChange") {
      // Get the latest activeChannel
      console.log(client.channel.activeChannel);
    }
    if (event.type === "channel.activeChannel") {
      // Get the latest channelList
      console.log(client.channel.channelList);
    }
  };

  useEffect(() => {
    client.channel.queryChannels({ page: 1, size: 20 });
    client.on("channel.getList", handleEvent);
    return () => {
      client.off("channel.getList");
    };
  }, []);

  const setActiveChannel = async () => {
    const { channelList } = client.channel;
    // If your `channelList` is empty please create one first
    if (channelList.length === 0) {
      await client.channel.createRoom({
        groupName: "your favourite group name",
        avatarUrl: "your favourite image url",
      });
      await client.channel.setActiveChannel(channelList[0]);
    }
    if (channelList && channelList.length > 0) {
      await client.channel.setActiveChannel(channelList[0]);
    }
  };

  return <button onClick={setActiveChannel}>set Active Channel</button>;
};
```

### getGroupMemberList() : Get all members of the current channel

:::tip
Method of the channel class.
:::

#### Params

1. Object: [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams) : Required field

   **Fields of params**

   1. page: Required field, Page number of the current query
   1. size: Required field, Number of current queries

1. string: Optional field, Members of a channel to be queried, When not passed, the members of activechannel are queried by default

#### Response : Promise: Array of Object : [GroupMemberListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#groupmemberlistitemtype)

#### response json example

```json
{
  "msg": "Ok",
  "code": 0,
  "data": {
    "result": [
      {
        "avatar_url": "https://cdn.stamp.fyi/avatar/0x4a650684f2287bb0ad50da92f64f3970315ca276?s=300",
        "create_at": 1695803377572,
        "nickname": "",
        "userid": "user:0a62ed4ea150180004a69ef8601a701d97eab109c118b98f8ec1c977",
        "wallet_address": "0x4a650684f2287bb0ad50da92f64f3970315ca276",
        "wallet_type": "eth"
      },
      {
        "avatar_url": "",
        "create_at": 1695803378550,
        "nickname": "wei2",
        "userid": "user:ea63cbd115dc2a4a2935f6ee669725c11ac2638fa5200ba94d71c84a",
        "wallet_address": "0x9b6a5a1dd55ea481f76b782862e7df2977dffe6c",
        "wallet_type": "eth"
      }
    ]
  }
}
```

#### Usage Examples

> If you have not created or joined any channels, please do so first. <br/>
> You can specify a channel to query with the second parameter

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  useEffect(() => {
    client.channel.queryChannels({
      page: 1,
      size: 100,
    });
  }, []);
  const getGroupMembers = async () => {
    const { channelList } = client.channel;
    // If your `channelList` is empty please create one first
    if (channelList.length === 0) {
      await client.channel.createRoom({
        groupName: "your favourite group name",
        avatarUrl: "your favourite image url",
      });
      await client.channel.setActiveChannel(channelList[0]);
    } else {
      await client.channel.setActiveChannel(channelList[0]);
    }
    // Queries the members of the active channel
    const data = await client.channel.getGroupMemberList({
      page: 1,
      size: 100,
    });
    // Queries the members of the specified channel
    const data1 = await client.channel.getGroupMemberList({
      page: 1,
      size: 100,
    });
    console.log(data);
  };
  return <button onClick={getGroupMembers}>get group members</button>;
};
```

### inviteGroupMember() : Invite members to activate channel or a specific channel

:::tip
Method of the channel class.
:::

#### Params

1. Array of string : Required field, The ids of the users you want to invite
1. string: Optional field, Invited channel, when not passed on, members will chant invited to activechannel

#### Response : Promise: void

#### Usage Examples

> Only allowed to invite members to the channel you created, if you don't have one, please create one first! <br/>
> You can specify a channel to query with the second parameter

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

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
    if (event.type === "channel.getList") {
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

    // or  Invite members to a specified channel
    const data2 = await client.channel.inviteGroupMember(
      [`member's userid`],
      "SPECIFY_CHANNEL"
    );
    console.log(data);
  };

  useEffect(() => {
    client.channel.queryChannels({ page: 1, size: 100 });
    client.on("channel.getList", handleEvent);
    return () => {
      client.off("channel.getList");
    };
  }, []);

  return (
    <button onClick={() => inviteGroupMember()}>invite Group Member</button>
  );
};
```

### joinGroup() : Join a group chat.

:::tip
Method of the channel class.
:::

#### Params

1. string: Required field, The id of a channel you want to join

#### Response : Promise: void

#### Usage Examples

> When func called, triggers the `channel.getList` event, and then the value of `client.channel.channelList` is updated.

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  const handleEvent = (event: { type: any }) => {
    if (event.type === "channel.getList") {
      // Get the latest channelList
      console.log(client.channel.channelList);
    }
  };

  useEffect(() => {
    client.channel.queryChannels({ page: 1, size: 100 });
    client.on("channel.getList", handleEvent);
    return () => {
      client.off("channel.getList");
    };
  }, []);

  return (
    <button
      onClick={() => {
        client.channel.joinGroup("_ID");
      }}
    >
      join Group
    </button>
  );
};
```

### getGroupPermissions : Querying permissions for a channel

> View group chat permissions by `groupid`.

:::tip
Method of the channel class.
:::

#### Params

1. string: Required field, The id of the channel you want to query with permission

#### Response : Promise: object

response json example

```json
{
  "msg": "Ok",
  "code": 0,
  "data": {
    "groupid": "group:be11c77d49abc55d832a08ec3c955d89f817f279",
    "permissions": {
      "group:join": {
        "type": "enum",
        "value": "public"
      }
    }
  }
}
```

#### Usage Examples

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  return (
    <button
      onClick={async () => {
        const data = await client.channel.getGroupPermissions("GROUP_ID");
        console.log(data);
      }}
    >
      get group permissions
    </button>
  );
};
```

### updateGroupPermissions() : Update permissions for a channel I created

> Changing group chat permissions.

:::tip
Method of the channel class.<br/>
You can only update the permissions of channels you have created
:::

#### Params : Object : [UpdateGroupPermissionsParams](/docs/Web3MQ-SDK/JS-SDK/types/#updategrouppermissionsparams)

**Fields of params**

1. groupid: Required field, The channel id for which you want to change permissions
1. permissions: Optional field, The [permissions](/docs/Web3MQ-SDK/JS-SDK/channel/#permission) you want to change.
1. nfts: Optional field, Required when the value of the permission is set to `nft_validation`.

Params examples

```tsx
// permission:  public
const params1 = {
  groupid: channelList[0].chatid,
  permissions: {
    "group:join": {
      type: "enum",
      value: "public",
    },
  },
};
// Permission: Only creator invite
const params2 = {
  groupid: channelList[0].chatid,
  permissions: {
    "group:join": {
      type: "enum",
      value: "creator_invite_friends",
    },
  },
};
// Permission: join by some nft
const params3 = {
  groupid: channelList[0].chatid,
  permissions: {
    "group:join": {
      type: "enum",
      value: "nft_validation",
    },
  },
  nfts: [
    {
      chain_id: "SN_GOERLI",
      chain_type: "starknet",
      contract: "0x00000000000000001",
    },
  ],
};
```

#### Response : Promise: void

#### Usage Examples

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  const handleEvent = (event: { type: any }) => {
    if (event.type === "channel.getList") {
      // Get the latest channelList
      console.log(client.channel.channelList);
    }
  };

  useEffect(() => {
    client.channel.queryChannels({ page: 1, size: 100 });
    client.on("channel.getList", handleEvent);
    client.on("channel.updated", handleEvent);
    return () => {
      client.off("channel.getList");
      client.off("channel.updated");
    };
  }, []);

  return (
    <button
      onClick={async () => {
        await client.channel.createRoom({ group_name: "hello world" });
        const { channelList } = client.channel;
        // permission:  public
        const data = await client.channel.updateGroupPermissions({
          groupid: channelList[0].chatid,
          permissions: {
            "group:join": {
              type: "enum",
              value: "public",
            },
          },
        });
        // Permission: Only creator invite
        const data1 = await client.channel.updateGroupPermissions({
          groupid: channelList[0].chatid,
          permissions: {
            "group:join": {
              type: "enum",
              value: "creator_invite_friends",
            },
          },
        });
        // Permission: join by some nft
        const data2 = await client.channel.updateGroupPermissions({
          groupid: channelList[0].chatid,
          permissions: {
            "group:join": {
              type: "enum",
              value: "nft_validation",
            },
          },
          nfts: [
            {
              chain_id: "SN_GOERLI",
              chain_type: "starknet",
              contract: "0x00000000000000001",
            },
          ],
        });
        console.log(data);
      }}
    >
      update group permissions
    </button>
  );
};
```
