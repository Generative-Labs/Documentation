---
position: 8
---

# Notify

> You will receive notifications in certain situations, e.g. a new friend request, a new user following you, etc.

## Prerequisites

:::tip

This is the detailed documentation on the notification module, before that please read
the [Quickstart](/docs/Ethos-SDK/JS-SDK/types/#channelitemtype) tutorial if you haven't done so already!
:::

> init() see: [init](/docs/Ethos-SDK/JS-SDK/client/#init)

> register() see: [register](/docs/Ethos-SDK/JS-SDK/register/#register-or-resetpassword)

> login() see: [login](/docs/Ethos-SDK/JS-SDK/register/#login)

> event see: [event](/docs/Ethos-SDK/JS-SDK/client/#events-1)

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

## Notification type

### All of notifications type<br/>

> - `system.friend_request`
> - `system.followed`
> - `system.group.join_request`
> - `system.group.agree_join_request`
> - `system.group.reject_join_request`
> - `system.group_invitation`

### system.group.join_request

> Someone has made a friend request to you.

**Json Demo**

```json
{
  "come_from": "user:48bbd9e64de016cb002290792d800c5930d0bdc058336517e34b3a14",
  "title": "NewFriend request",
  "content": "aaa",
  "type": "system.friend_request",
  "version": 1,
  "timestamp": 1702450882293,
  "metadata": {},
  "messageId": "6ef703a86cb0608a935fc896c6cd88d710c8469164c7f213346df15c",
  "read": false
}
```

### system.followed

> Someone followed you.

**Json Demo**

```json
{
  "come_from": "user:314b153ca2cc818101f9de01ac9ef291be269645ef52308e311b9773",
  "title": "Follow notification",
  "content": "user:314b153ca2cc818101f9de01ac9ef291be269645ef52308e311b9773 follow you.",
  "type": "system.followed",
  "version": 1,
  "timestamp": 1701397353076,
  "metadata": {},
  "messageId": "8927dc14cd5a499b87e14e03286cf2dc260f7fc9deb04da9d04d270a",
  "read": false
}
```

### system.group.join_request

> Someone asks you to join a group chat you've created.

**Json Demo**

```json
{
  "come_from": "user:d81c20832c8f5a8b50194a4ef2d9a8ce958f7359ad9c5d2559c18069",
  "title": "Group notification",
  "content": "user:d81c20832c8f5a8b50194a4ef2d9a8ce958f7359ad9c5d2559c18069 want to join group.",
  "type": "system.group.join_request",
  "version": 1,
  "timestamp": 1701310126286,
  "metadata": {
    "group_creator_id": "user:388e9930a98d9e5cf02b0718ee3caf40fb3400cc1bdc0aac3599d188",
    "groupid": "group:e4a534b43ffc9a985f0e3ce5cc85707ff2461ae6",
    "userid": "user:d81c20832c8f5a8b50194a4ef2d9a8ce958f7359ad9c5d2559c18069"
  },
  "messageId": "05a760ad261f594fb1db516f2aa7af6e17c8ab466f5954d83e7654a0",
  "read": false
}
```

### system.group.agree_join_request

> A group creator has approved your request to join.

**Json Demo**

```json
{
  "come_from": "user:d81c20832c8f5a8b50194a4ef2d9a8ce958f7359ad9c5d2559c18069",
  "title": "Group notification",
  "content": "user:d81c20832c8f5a8b50194a4ef2d9a8ce958f7359ad9c5d2559c18069 approve join group request.",
  "type": "system.group.agree_join_request",
  "version": 1,
  "timestamp": 1701394493425,
  "metadata": {
    "groupid": "group:87deed8b45daae015185febde5c490e4cc0d845f",
    "request_userid": "user:388e9930a98d9e5cf02b0718ee3caf40fb3400cc1bdc0aac3599d188",
    "status": 1,
    "status_reason": ""
  },
  "messageId": "f23ec6092da557f171753249a4a6a9be6001a8c83ba3b369a7b69f10",
  "read": false
}
```

### system.group.reject_join_request

> A group creator has rejected your request to join.

**Json Demo**

```json
{
  "come_from": "user:d81c20832c8f5a8b50194a4ef2d9a8ce958f7359ad9c5d2559c18069",
  "title": "Group notification",
  "content": "user:d81c20832c8f5a8b50194a4ef2d9a8ce958f7359ad9c5d2559c18069 reject join group request.",
  "type": "system.group.reject_join_equest",
  "version": 1,
  "timestamp": 1701351044005,
  "metadata": {
    "groupid": "group:dbc202ffbf93bf578a7318d4a7bc5d440f00c3c8",
    "request_userid": "user:388e9930a98d9e5cf02b0718ee3caf40fb3400cc1bdc0aac3599d188",
    "status": 0,
    "status_reason": ""
  },
  "messageId": "19d3d9f9584d492f5550546e56b2523bb41674e39225a2019d5d5306",
  "read": false
}
```

### system.group_invitation

> You've been invited to join a group chat

**Json Demo**

```json
{
  "come_from": "user:ea63cbd115dc2a4a2935f6ee669725c11ac2638fa5200ba94d71c84a",
  "content": "user:ea63cbd115dc2a4a2935f6ee669725c11ac2638fa5200ba94d71c84a Invitating you join group.",
  "messageId": "af024b18d6a041d76f630cc48e4b17d81e3e95cce6ad05ce8cc27630",
  "metadata": {},
  "read": false,
  "timestamp": 1703142438552,
  "title": "Group Invitation",
  "type": "system.group_invitation",
  "version": 1
}
```

## Properties

| name                     | type                                                                                         | Parameters Description                                                                                           | response                                                                             | desc                                            |
| ------------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------- |
| notificationList         | Array of Object : [NotificationType](/docs/Ethos-SDK/JS-SDK/types/#notificationtype) \| null | -                                                                                                                | -                                                                                    | notification list                               |
| changeNotificationStatus | function                                                                                     | 1.Array of string: notification ids <br /> 2.status:[MessageStatus](/docs/Ethos-SDK/JS-SDK/types/#messagestatus) | Promise: void                                                                        | Update the read status of notifications via ids |
| queryNotifications       | function                                                                                     | Object: [QeuryNotificationsParams](/docs/Ethos-SDK/JS-SDK/types/#qeurynotificationsparams)                       | Array of Object : [NotificationType](/docs/Ethos-SDK/JS-SDK/types/#notificationtype) | Query notification history                      |

### notificationList : All notifications received by this user

:::tip
Is a readable property of the notify class.

The value of this property changes when the `notification.getList`,`notification.received` events are triggered.
:::

#### usage : `client.notify.notificationList`

#### type : Array of Object : [NotificationType](/docs/Ethos-SDK/JS-SDK/types/#notificationtype)

#### example json data

```json
[
  {
    "come_from": "user:ea63cbd115dc2a4a2935f6ee669725c11ac2638fa5200ba94d71c84a",
    "content": "user:ea63cbd115dc2a4a2935f6ee669725c11ac2638fa5200ba94d71c84a Invitating you join group.",
    "messageId": "af024b18d6a041d76f630cc48e4b17d81e3e95cce6ad05ce8cc27630",
    "metadata": {},
    "read": false,
    "timestamp": 1703142438552,
    "title": "Group Invitation",
    "type": "system.group_invitation",
    "version": 1
  }
]
```

### queryNotifications() : Query notification history

:::tip
Method of the notify class.
:::

#### Params : object: [QeuryNotificationsParams](/docs/Ethos-SDK/JS-SDK/types/#qeurynotificationsparams)

**Fields of params**

1. page: Required field, Page number of the current query
1. size: Required field, Number of current queries
1. notice_type: Query specific types of notifications
1. read_status: Optional field,Notification of querying a specific status

#### Response : Promise: Array of Object : [NotificationType](/docs/Ethos-SDK/JS-SDK/types/#notificationtype)

#### Response json example

```json
[
  {
    "come_from": "user:ea63cbd115dc2a4a2935f6ee669725c11ac2638fa5200ba94d71c84a",
    "content": "user:ea63cbd115dc2a4a2935f6ee669725c11ac2638fa5200ba94d71c84a Invitating you join group.",
    "messageId": "af024b18d6a041d76f630cc48e4b17d81e3e95cce6ad05ce8cc27630",
    "metadata": {},
    "read": false,
    "timestamp": 1703142438552,
    "title": "Group Invitation",
    "type": "system.group_invitation",
    "version": 1
  }
]
```

#### Usage Examples

> When func called, triggers the `notification.getList` event, and then the value of `client.notify.notificationList` is updated.

```tsx
import { useEffect } from "react";
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === "notification.getList") {
      console.log(client.channel.notificationList);
    }
  };

  useEffect(() => {
    client.on("notification.getList", handleEvent);
    return () => {
      client.off("notification.getList");
    };
  }, []);

  return (
    <button
      onClick={async () => {
        const searchValues = await client.notify.queryNotifications({
          page: 1,
          size: 10,
        });
        console.log("current searchValues: ", searchValues);
      }}
    >
      Query Notifications
    </button>
  );
};
```

### ChangeNotificationStatus : Update the read status of notifications via ids

:::tip
Method of the notify class.
:::

#### Params : object: [QeuryNotificationsParams](/docs/Ethos-SDK/JS-SDK/types/#qeurynotificationsparams)

**Fields of params**

1. Array of string : Required field, notification ids
1. string : Required field, message status:[MessageStatus](/docs/Ethos-SDK/JS-SDK/types/#messagestatus)

#### Response : void

```tsx
import { Client } from "@web3mq/client";

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  return (
    <div>
      <button
        onClick={() => {
          client.notify.changeNotificationStatus(["notifyId"], "delivered");
        }}
      >
        Change Notification Status
      </button>
    </div>
  );
};
```
