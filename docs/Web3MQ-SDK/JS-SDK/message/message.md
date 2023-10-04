---
position: 5
---

# Message

## Properties

| name        | type                                                                          | Description  |
| ----------- | ----------------------------------------------------------------------------- | ------------ |
| messageList | [MessageListItem](/docs/Web3MQ-SDK/JS-SDK/types/#messagelistitem) [ ] \| null | message list |

## Methods

| name                | type     | Parameters Description                                                                                                                     | response                                                                           |
| ------------------- | -------- |--------------------------------------------------------------------------------------------------------------------------------------------| ---------------------------------------------------------------------------------- |
| getMessageList      | function | 1.[PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams) 2.chatId: string (target_userid or target_groupid or target_user_wallet_address) | Promise: [MessageListItem](/docs/Web3MQ-SDK/JS-SDK/types/#messagelistitem)[]       |
| changeMessageStatus | function | 1.messages: string[] 2.status: [MessageStatus](/docs/Web3MQ-SDK/JS-SDK/types/#messagestatus) 3. chatId: string                             | Promise: [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse) |
| sendMessage         | function | 1.msg: string 2.secondParams: (target_userid or target_user_wallet_address)                                                                | Promise: void                                                                      |
| receive             | function | 1.pbType: number 2.bytes: Uint8Array                                                                                                       | Promise: void                                                                      |

## Prerequisites

> init() see: [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)

> register() see: [register](/docs/Web3MQ-SDK/JS-SDK/register/#register-or-resetpassword)

> login() see: [login](/docs/Web3MQ-SDK/JS-SDK/register/#login)

> event see: [event](/docs/Web3MQ-SDK/JS-SDK/client/#events-1)

> queryChannels() see: [queryChannels](/docs/Web3MQ-SDK/JS-SDK/channel/#querychannels)

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

## Methods

### getMessageList

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const getMessageList = async () => {
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
      const data = await client.message.getMessageList(
          {
              page: 1,
              size: 20,
          },
          "groupid or userid"
      );
      console.log(data)
  };

  return (
    <div>
      <button onclick={getMessageList}>get message list</button>
    </div>
  );
};
```

### sendMessage

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
    if (event.type === "message.delivered") {
      console.log("message delivered");
    }
    if (event.type === "message.send") {
      console.log("message send");
    }
  };

  useEffect(() => {
    client.on("message.getList", handleEvent);
    client.on("message.delivered", handleEvent);
    client.on("message.send", handleEvent);
    return () => {
      client.off("message.getList", handleEvent);
      client.off("message.delivered", handleEvent);
      client.off("message.send", handleEvent);
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          client.message.sendMessage("text"); // Basic use
          // or
          client.message.sendMessage("text", "user: xxxxx..."); // Send it directly to someone using a userid
          // or
          client.message.sendMessage("text", "group: xxxxx..."); // Send it directly to someone using a groupid
          // or
          client.message.sendMessage("text", "0xABCD..."); // Send it directly to someone using a wallet address
        }}
      >
        send Message
      </button>
    </div>
  );
};
```

### changeMessageStatus

```tsx
import {useEffect, useState} from "react";
import {Client} from "@web3mq/client";

interface IProps {
    client: Client;
}

export const Child = (props: IProps) => {
    const {client} = props;
    const [msgIds, setMsgIds] = useState<Array<string>>([]);

    const changeMessageStatus = async () => {
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

        const data = await client.message.changeMessageStatus(msgIds);
        console.log(data);
    };

    const handleEvent = async (event: { type: any }) => {
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
        client.channel.queryChannels({page: 1, size: 100});
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
```
