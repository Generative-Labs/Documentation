---
position: 4
---

# Channel

## Properties

| name          | type                                                                          | Description            |
| ------------- | ----------------------------------------------------------------------------- | ---------------------- |
| channelList   | [ChannelItemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype) [ ] \| null | channel list           |

## Methods

| name                   | type     | Parameters Description                                                                      | response                                                                              |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| createRoom             | function | [CreateRoomParams](/docs/Web3MQ-SDK/JS-SDK/types/#createroomparams)                         | Promise: void                                                                         |
| queryChannels          | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                     | Promise: void                                                                         |
| updateChannels         | function | [UpdateRoomListParams](/docs/Web3MQ-SDK/JS-SDK/types/#updateroomlistparams)                 | Promise: [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)    |
| getGroupMemberList     | function | 1. [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams) 2. chatId : string               | Promise: [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)[ ] |
| inviteGroupMember      | function | 1. members: string[] 2. chatId: string                                                      | Promise: [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)[ ] |
| joinGroup              | function | groupid: string                                                                             | Promise: void                                                                         |
| getGroupPermissions    | function | groupid: string                                                                             | Promise: [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)    |
| updateGroupPermissions | function | [UpdateGroupPermissionsParams](/docs/Web3MQ-SDK/JS-SDK/types/#updategrouppermissionsparams) | Promise: [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)    |

## Permission

> Group chat permission currently only has `group:join` rule, which indicates the permission to join a group. `group:join` rule has `public` and `ceator_invite_friends` values, and its value type is 'enum'

- 1.`ceator_invite_friends`: Only the group owner can invite friends to join.
- 2.`public`: Everyone can join without restrictions.

### JoinGroupPermissionsType

| name  | type                                | format | desc                                            | eg       |
| ----- | ----------------------------------- | ------ | ----------------------------------------------- | -------- |
| type  | "enum"                              | -      | The type of group to join in group permissions  | "enum"   |
| value | "ceator_invite_friends" \| "public" | -      | The value of group to join in group permissions | "public" |

### GroupPermissions

| name         | type                                                                                  | format | desc                          | eg                                             |
| ------------ | ------------------------------------------------------------------------------------- | ------ | ----------------------------- | ---------------------------------------------- |
| "group:join" | [JoinGroupPermissionsType](/docs/Web3MQ-SDK/JS-SDK/channel/#joingrouppermissionstype) | -      | Group channel permission type | {"group:join": {type: "enum",value: "public"}} |

## Prerequisites

> init() see: [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)

> register() see: [register](/docs/Web3MQ-SDK/JS-SDK/register/#register-or-resetpassword)

> login() see: [login](/docs/Web3MQ-SDK/JS-SDK/register/#login)

> event see: [event](/docs/Web3MQ-SDK/JS-SDK/client/#events-1)

### Init and get Client

> To use the functions of the current module, please complete the following steps first.
> :::tip
> After successful login, you can get the secret key pair from the returned result
> :::

```ts
import { useEffect, useState } from "react";
import { Client } from "@web3mq/client";

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
  return <Child client={client}/>;
};
```

## Methods

### createRoom

> Pass in optional parameters such as `groupName` to create a group chat.

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

  const callCreateRoom = async () => {
    const res = await client.channel.createRoom({
      groupName: "your favourite group name",
      avatarUrl: "your favourite image url",
    });
    /**
         * console.log(res)
         * {
              "avatar_base64":"",
              "avatar_url":"",
              "group_name":"testRoom 1",
              "groupid":"group:da034f7b852c22df502f6d29008936665ea0f9cb"
            }
         */
  };

  return <button onClick={callCreateRoom}>create group</button>;
};
```

### queryChannels

> Get the list of chat rooms, and could pass in `pageParams` type parameters to achieve paging.

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}
export const Child = (props: IProps) => {
  const { client } = props;

  const callQueryChannels = async () => {
    const res = await client.channel.queryChannels({
      page: 1,
      size: 20,
    });

    /**
     * console.log(res)
 * [
    {
        "topic":"group:d75724130864b3a1aaa8b9c8196da3ec7017b495",
        "topic_type":"group",
        "chatid":"group:d75724130864b3a1aaa8b9c8196da3ec7017b495",
        "chat_type":"group",
        "chat_name":"ttttt222",
        "avatar_url":"",
        "avatar_base64":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgzMDM5OTUyMzgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI4ODgiIGlkPSJteF9uXzE2ODMwMzk5NTIzODQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTg5NiA2NEgxMjhhNjQgNjQgMCAwIDAtNjQgNjR2NzY4YTY0IDY0IDAgMCAwIDY0IDY0aDc2OGE2NCA2NCAwIDAgMCA2NC02NFYxMjhhNjQgNjQgMCAwIDAtNjQtNjR6TTEyOCAxMjhoNzY4djE5MkgxMjhWMTI4eiBtNzY4IDc2OEgxMjhWMzg0aDc2OHY1MTJ6IiBwLWlkPSIyODg5IiBmaWxsPSIjNjYzQ0VFIj48L3BhdGg+PHBhdGggZD0iTTI1NiA1NzZoNTEyYTMyIDMyIDAgMCAwIDAtNjRIMjU2YTMyIDMyIDAgMCAwIDAgNjR6TTI1NiA3MzZoNTEyYTMyIDMyIDAgMCAwIDAtNjRIMjU2YTMyIDMyIDAgMCAwIDAgNjR6TTc2OCAxOTJoLTY0YTMyIDMyIDAgMCAwIDAgNjRoNjRhMzIgMzIgMCAwIDAgMC02NHoiIHAtaWQ9IjI4OTAiIGZpbGw9IiM2NjNDRUUiPjwvcGF0aD48L3N2Zz4="
      }
    ]
 */
  };

  return <button onClick={callQueryChannels}>query Channels</button>;
};
```

### updateChannels

> Update your channels.

```tsx
import { Client } from "@web3mq/client";
interface IProps {
  client: Client;
}
export const Child = (props: IProps) => {
  const { client } = props;

  const updateChannel = async () => {
    const data = await client.channel.updateChannels({
      chatid: "groupid or userid",
      chatType: "chat type —— group or user",
      topic: "groupid or userid",
      topicType: "chat type —— group or user",
    });
    console.log(data);
  };

  return <button onClick={updateChannel}>update Channel</button>;
};
```

### getGroupMemberList


```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  const getGroupMembers = async () => {
    const channelList = await client.channel.queryChannels({
      page: 1,
      size: 20,
    });
    let chatId = "";
    if (channelList.length === 0) {
      const createRes = await client.channel.createRoom({
        groupName: "your favourite group name",
        avatarUrl: "your favourite image url",
      });
      chatId = createRes.groupid;
    } else {
      chatId = channelList[0].chatid;
    }
    const data = await client.channel.getGroupMemberList(
      {
        page: 1,
        size: 100,
      },
      chatId
    );
    console.log(data);
  };
  return <button onClick={getGroupMembers}>get group members</button>;
};
```

### inviteGroupMember


```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  const inviteGroupMember = async () => {
    const channelList = await client.channel.queryChannels({
      page: 1,
      size: 20,
    });
    let chatId = "";
    if (channelList.length === 0) {
      const createRes = await client.channel.createRoom({
        groupName: "your favourite group name",
        avatarUrl: "your favourite image url",
      });
      chatId = createRes.groupid;
    } else {
      chatId = channelList[0].chatid;
    }

    const data = await client.channel.inviteGroupMember(
      [`member's userid`],
      chatId
    );
  };

  return <button onClick={inviteGroupMember}>invite Group Member</button>;
};
```

### joinGroup

> Join a group chat by `groupid`.

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const callJoinGroup = async () => {
    const res = await client.channel.joinGroup("groupid");
    /**
       * console.log(res)
       * {
          "avatar_url":"",
          "group_name":"testRoom 1",
          "groupid":"group:da034f7b852c22df502f6d29008936665ea0f9cb"
        }
       * 
       */
  };

  return <button onClick={callJoinGroup}>join Group</button>;
};
```

### getGroupPermissions

> View group chat permissions by `groupid`.

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  const callGetGroupPermission = async () => {
    const channelList = await client.channel.queryChannels({
      page: 1,
      size: 20,
    });
    let chatId = "";
    if (channelList.length === 0) {
      const createRes = await client.channel.createRoom({
        groupName: "your favourite group name",
        avatarUrl: "your favourite image url",
      });
      chatId = createRes.groupid;
    } else {
      chatId = channelList[0].chatid;
    }

    const data = await client.channel.getGroupPermissions(chatId);
    console.log(data);
  };

  return (
    <button onClick={callGetGroupPermission}>get group permissions</button>
  );
};
```

### updateGroupPermissions

> Changing group chat permissions.

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const callUpdateGroupPermission = async () => {
    const channelList = await client.channel.queryChannels({
      page: 1,
      size: 20,
    });
    let chatId = "";
    if (channelList.length === 0) {
      const createRes = await client.channel.createRoom({
        groupName: "your favourite group name",
        avatarUrl: "your favourite image url",
      });
      chatId = createRes.groupid;
    } else {
      chatId = channelList[0].chatid;
    }
    const data = await client.channel.updateGroupPermissions({
      groupid: chatId,
      permissions: {
        "group:join": {
          type: "enum",
          value: "public",
        },
      },
    });
    console.log(data);
  };

  return (
    <button
      onClick={async () => {
        await client.channel.createRoom({ group_name: "hello world" });
        const { channelList } = client.channel;
      }}
    >
      update group permissions
    </button>
  );
};
```
