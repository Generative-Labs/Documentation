---
position: 5
---

## Prerequisites

:::tip

This is the detailed documentation on the message module, before that please read
the [Quickstart](/docs/Ethos-SDK/JS-SDK/types/#channelitemtype) tutorial if you haven't done so already!

:::

> init() see: [init](/docs/Ethos-SDK/JS-SDK/client/#init)

> register() see: [register](/docs/Ethos-SDK/JS-SDK/register/#register-or-resetpassword)

> login() see: [login](/docs/Ethos-SDK/JS-SDK/register/#login)

> event see: [event](/docs/Ethos-SDK/JS-SDK/client/#events-1)

> queryChannels() see: [queryChannels](/docs/Ethos-SDK/JS-SDK/channel/#querychannels--get-created-or-joined-channels)

> setActiveChannel() see: [setActiveChannel](/docs/Ethos-SDK/JS-SDK/channel/#setactivechannel--set-the-currently-active-channel)

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
  return <Child client={client} />;
};
```

## Types

### [MessageItemType](/docs/Ethos-SDK/JS-SDK/types/#messageitemtype)

**Fields of message**

1. senderId: The [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid) of this message.
1. topic: The chat room id of this message.
1. chatId: The chat room id of this message.
1. content: Content of the message.
1. contentType: Currently only one type of `text` is supported.
1. timestamp: Timestamp of when the message was sent.
1. messageId: identity of message.
1. date: Date the message was sent. eg: 2023-01-01
1. time: The time the message was sent. eg: 12:00.
1. msgLoading: Indicates whether the message was sent successfully. There are three states : `success` , `error`, `loading`.

Json Example

```json
{
  "senderId": "user:bbd72f541e802f09060c1e524bd407b1bf3df058837554fcb704b491",
  "topic": "user:a2127f2923a951fd4c41e981e95a4e1d21447e987134890ea820d898",
  "chatId": "user:a2127f2923a951fd4c41e981e95a4e1d21447e987134890ea820d898",
  "content": "ccc",
  "contentType": "text",
  "messageId": "bfa66e3a20744c83390cb9ffe86c2bac006a60c250a8273ff531d5d0",
  "date": "2023-5-23",
  "time": "2:26",
  "timestamp": 1684779973451,
  "msgLoading": "success"
}
```

## Properties

| name           | type                                                                               | Parameters Description                                                                                                  | response                                                                                    | desc                           |
| -------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------ |
| messageList    | Array of Object : [MessageItemType](/docs/Ethos-SDK/JS-SDK/types/#messageitemtype) | -                                                                                                                       | -                                                                                           | message list                   |
| getMessageList | function                                                                           | 1.Object : [PageParams](/docs/Ethos-SDK/JS-SDK/types/#pageparams) <br/> 2.string (Optional) : cahtid                    | Promise: Array of Object : [MessageItemType](/docs/Ethos-SDK/JS-SDK/types/#messageitemtype) | get chat room history messages |
| sendMessage    | function                                                                           | 1.msg: string<br/> 2.string (Optional) : cahtid or wallet address <br/> 3. string (Optional) : the wallet of chain type | Promise: void                                                                               | ----                           |

<!-- | changeMessageStatus | function                                                                           | 1.string[] <br/> 2.Object: [MessageStatus](/docs/Ethos-SDK/JS-SDK/types/#messagestatus)                                 | Promise: void                                                                               | change messagestatus           | -->

### messageList : Chat history of a particular chat room

:::tip
Is a readable property of the Message class.

The value of this property changes when the `message.getList`,`message.send` events are triggered.
:::

#### usage : `client.message.messageList`

#### type : Array of Object : [MessageItemType](/docs/Ethos-SDK/JS-SDK/types/#messageitemtype)

#### Json Example

```json
[
  {
    "senderId": "user:bbd72f541e802f09060c1e524bd407b1bf3df058837554fcb704b491",
    "topic": "user:a2127f2923a951fd4c41e981e95a4e1d21447e987134890ea820d898",
    "chatId": "user:a2127f2923a951fd4c41e981e95a4e1d21447e987134890ea820d898",
    "content": "ccc",
    "contentType": "text",
    "messageId": "bfa66e3a20744c83390cb9ffe86c2bac006a60c250a8273ff531d5d0",
    "date": "2023-5-23",
    "time": "2:26",
    "timestamp": 1684779973451,
    "msgLoading": "success"
  }
]
```

### getMessageList() : Get the message history of the [activeChannel](/docs/Ethos-SDK/JS-SDK/channel/#activechannel--currently-active-channel) or other chat rooms.

:::tip
Method of the message class.
:::

#### Params

1. Object: [PageParams](/docs/Ethos-SDK/JS-SDK/types/#pageparams) : Required field

   **Fields of params**

   1. page: Required field, Page number of the current query
   1. size: Required field, Number of current queries

1. string: Optional field, The id of a specific chat room

#### Response : Promise: Array of Object : [GroupMemberListItemType](/docs/Ethos-SDK/JS-SDK/types/#groupmemberlistitemtype)

#### Usage Examples

> When func called, triggers the `message.getList` event, and then the value of `client.messae.messageList` is updated.

1. Get the message list of the [activeChannel](/docs/Ethos-SDK/JS-SDK/channel/#activechannel--currently-active-channel)

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === "message.getList") {
      console.log(client.message.messageList);
    }
  };

  const getChannels = async () => {
    await client.channel.queryChannels({ page: 1, size: 20 });
  };

  const setActiveChannel = async () => {
    const { channelList } = client.channel;
    await client.channel.setActiveChannel(channelList[0]);
  };

  const getMessageList = async () => {
    const { activeChannel } = client.channel;
    if (activeChannel) {
      // Basic use  When you set the `activeChannel`, it will get the messagesList of the `activeChannel` by default.
      await client.message.getMessageList({
        page: 1,
        size: 20,
      });
    }
  };

  useEffect(() => {
    client.on("channel.getList", handleEvent);
    client.on("message.getList", handleEvent);
    client.on("channel.activeChange", handleEvent);
    return () => {
      client.off("channel.getList", handleEvent);
      client.off("channel.getList", handleEvent);
      client.off("channel.activeChange", handleEvent);
    };
  }, []);

  return (
    <div>
      <button onclick={getChannels}>1. get channel list</button>
      <button onclick={setActiveChannel}>2. set active channel</button>
      <button onclick={getMessageList}>3. get message list</button>
    </div>
  );
};
```

2. Get the `messagesList` in the specified channel or user.

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;?

  const chatId = 'group:xxxx' // or 'user:xxx'

  const handleEvent = (event: { type: any }) => {
    if (event.type === "message.getList") {
      console.log(client.message.messageList);
    }
  };

  const getMessageList = async () => {
      await client.message.getMessageList({
        page: 1,
        size: 20,
      }, chatId);
    }
  };

  useEffect(() => {
    client.on("message.getList", handleEvent);
    return () => {
      client.off("message.getList", handleEvent);
    };
  }, []);

  return (
    <div>
      <button onclick={getMessageList}>get message list</button>
    </div>
  );
};
```

### sendMessage() : Send a message to the [activeChannel](/docs/Ethos-SDK/JS-SDK/channel/#activechannel--currently-active-channel) or other chat rooms.

:::tip
Method of the channel class.

:::

#### Params

1. string: Required field, The content of the message to be sent
1. string: Optional field, The id of a specific chat room or specific user id or specific wallet address
1. string: Optional field, If the second parameter is the wallet address, then the third parameter is to set the chaintype of the wallet

#### Response : Promise: void

#### Usage Examples

1. Send a message to the [activeChannel](/docs/Ethos-SDK/JS-SDK/channel/#activechannel--currently-active-channel)

:::tip
This method is associated with [getMessageList](/docs/Ethos-SDK/JS-SDK/message/#getmessagelist--get-the-message-history-of-the-activechannel-or-other-chat-rooms). If the message history of this chat room has been queried, after sending a message, the new message will be added to the head of the [messageList](/docs/Ethos-SDK/JS-SDK/message/#messagelist--chat-history-of-a-particular-chat-room) automatically when the event is triggered.
:::

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any; data }) => {
    if (event.type === "message.getList") {
      console.log(client.message.messageList);
    }
  };

  const getChannels = async () => {
    await client.channel.queryChannels({ page: 1, size: 20 });
  };

  const setActiveChannel = async () => {
    const { channelList } = client.channel;
    await client.channel.setActiveChannel(channelList[0]);
  };

  const getMessageList = async () => {
    const { activeChannel } = client.channel;
    if (activeChannel) {
      // Basic use  When you set the `activeChannel`, it will get the messagesList of the `activeChannel` by default.
      await client.message.getMessageList({
        page: 1,
        size: 20,
      });
    }
  };

  const sendMessage = async () => {
    await client.message.sendMessage("text");
  };

  useEffect(() => {
    client.on("channel.getList", handleEvent);
    client.on("message.getList", handleEvent);
    client.on("message.delivered", handleEvent);
    client.on("message.send", handleEvent);
    client.on("channel.activeChange", handleEvent);
    return () => {
      client.off("channel.getList", handleEvent);
      client.off("channel.activeChange", handleEvent);
      client.off("message.getList", handleEvent);
      client.off("message.delivered", handleEvent);
      client.off("message.send", handleEvent);
    };
  }, []);

  return (
    <div>
      <button onclick={getChannels}>1. get channel list</button>
      <button onclick={setActiveChannel}>2. set active channel</button>
      <button onclick={getMessageList}>3. get message list</button>
      <button onclick={sendMessage}>4. send message to active channel</button>
    </div>
  );
};
```

2. Send mesage to the specified channel or user.

:::tip
You can set the second parameter to send a message to a specific chat room, which can be a chat id, a userid or the wallet address of a chain, provided you have joined the chat or have a social relationship with the user.
:::

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any; data: any }) => {
    if (event.type === "message.send") {
      console.log(data);
    }
  };

  const sendMessage = async () => {
    client.message.sendMessage("text", "user: xxxxx..."); // Send it directly to someone using a userid
    // or
    client.message.sendMessage("text", "group: xxxxx..."); // Send it directly to someone using a groupid
    // or
    client.message.sendMessage("text", "0xABCD...", "eth"); // Send it directly to someone using a eth wallet address
    // or
    client.message.sendMessage("text", "0xABCD...", "starknet"); // Send it directly to someone using a starknet wallet address
  };

  useEffect(() => {
    client.on("message.send", handleEvent);
    return () => {
      client.off("message.send", handleEvent);
    };
  }, []);

  return (
    <div>
      <button onClick={sendMessage}>send Message</button>
    </div>
  );
};
```

<!--
### changeMessageStatus() : Updating the status of some messages from active channel or other specific chat room

:::tip
Method of the channel class.
<br />

The currently supported message states are: `received`, `delivered`, `read`.
:::

#### Params

1. Array of string: Required field, Some message ids you want to change
1. string: Required field, The status you want to change
1. string: Optional field, The id of a specific chat room or specific user id, If the value of ActiveChannel is null, then this field is required.

#### Response : Promise:

```tsx
import { useEffect, useState } from "react";
import { Client } from "@web3mq/client";

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
      console.log("Please set `activeChannel` first");
    }
  };

  const handleEvent = async (event: { type: any }) => {
    if (!activeChannel && channelList.length !== 0) {
      await client.channel.setActiveChannel(channelList[0]);
      await client.message.getMessageList({ page: 1, size: 100 });
    }
    if (event.type === "channel.getList") {
      // Get the latest channelList
      console.log(client.channel.channelList);
    }
    if (event.type === "message.getList") {
      console.log(client.message.messageList);
      setMsgIds(client.message.messageList.map((msg) => msg.id));
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
    <div>
      <button onClick={() => changeMessageStatus()}>
        Change Message Status
      </button>
    </div>
  );
};
``` -->
