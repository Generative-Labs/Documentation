---
position: 9
---

## event list

*** Why subscribe to events? The SDK maintains some data internally, such as channelList, messageList, etc, when the event is listened to, it means that some data in the client is updated to the latest state. ***

:::tip
When you connect to Web3MQ, you must subscribe to the following events regarding instant messaging 
- message.delivered
- message.getList
:::

## Connect
> When the user creates a client, it will automatically connect to the websocket, and the user can listen to the `Connect` events, to get the latest status of the current websoctet from `client.connect.ws`.

|         event             |                  trigger                                  |                trigger function                 |                           recipients                         |
| ------------------------- | --------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| connect.changeReadyStatus | When the ready status of your connected WebSocket changes |             client.getInstance                  | client.connect.ws.readyStatus is updated to the latest state |

### usage
> A simple example of how to subscribe to connenct events and get the latest status of connect.

```ts
import type { Client, EventTypes } from '@web3mq/client';
const client = Client.getInstance('your Key pairs');
const handleEvent = (props: { type: EventTypes }) => {
    const { type } = props;
    const { ws } = client.connect;
    if (!ws) retrun null;
    if (type === 'connect.changeReadyStatus') {
        console.log('the current websocket readyStatus is: ', ws.readyState);
    }
};
client.on('connect.changeReadyStatus', handleEvent);
// Cancel event after one hour
setTimeout(() => {
    client.off('connect.changeReadyStatus', handleEvent)
}, 1000 * 60 * 60);
```

## Channel
> The `Channel` event helps you keep up to date with channel changes and get the latest status from the data maintained by the Web3MQ client, such as client.channel.chanelList.

|         event        |                  trigger                                           |                     trigger function                                                       |                         recipients                          |
| -------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| channel.activeChange | When one of the channels is set to active                          | client.channel.setActiveChannel                                                            | client.channel.activeChannel is updated to the latest state |
| channel.getList      | When channelList is acquired, channel is created and join channel  | client.channel.queryChannels,client.channel.createRoom and client.channel.joinGroup        | client.channel.channelList is updated to the latest state   |

### usage
> A simple example of how to subscribe to channel events and get the latest status of channel list.

```ts
import type { Client, EventTypes } from '@web3mq/client';
const client = Client.getInstance('your Key pairs');
const handleEvent = (props: { type: EventTypes }) => {
    const { type } = props;
    const { channelList } = client.channel;
    if (!channelList) {
      return;
    }
    if (type === 'channel.getList') {
      console.log('the current channelList is: ', channelList);
    }
};
// subscribe event
client.on('channel.getList', handleEvent);
// get channel list
clietn.channel.queryChannels({page: 1, size: 20});
// Cancel event after one hour
setTimeout(() => {
    client.off('channel.getList', handleEvent)
}, 1000 * 60 * 60);
```

## Contact
> The `contact` event always notifies you when you get a list of followers, etc. For example, you can get the latest status from `client.contact.follower` after the event is triggered.

|           event          |                  trigger             |        trigger function               |                          recipients                         |
| ------------------------ | ------------------------------------ | ------------------------------------- | ----------------------------------------------------------- |
| contact.getContactList   | When contactList is acquired         |  client.contact.getContactList        | client.contact.contactList is updated to the latest state   |
| contact.getFollowerList  | When followerList is acquired        |  client.contact.getFollowerList       | client.contact.followerList is updated to the latest state  |
| contact.getFollowingList | When followingList is acquired       |  client.contact.getFollowingList      | client.contact.followingList is updated to the latest state |

### usage
> A simple example of how to subscribe to channel events and get the latest status of follower list.

```ts
import type { Client, EventTypes } from '@web3mq/client';
const client = Client.getInstance('your Key pairs');
const handleEvent = (props: { type: EventTypes }) => {
    const { type } = props;
    const { followerList } = client.contact;
    if (!followerList) {
      return;
    }
    if (type === 'contact.getFollowerList') {
      console.log('the current followerList is: ', followerList);
    }
};
// subscribe event
client.on('contact.getFollowerList', handleEvent);
// get follower list
clietn.channel.getFollowerList({page: 1, size: 20});
// Cancel event after one hour
setTimeout(() => {
    client.off('contact.getFollowerList', handleEvent)
}, 1000 * 60 * 60);
```

## Message
> When you send a message, get a message, etc., it's all about the `Message` event. When the web3mq Client is created successfully, client.message.receive will be used as a websocket callback

|           event          |                  trigger                                          |             trigger function            |                                              recipients                                |
| ------------------------ | ----------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------- |
| message.getList          | When messageList is acquired                                      | client.message.getMessageList           | client.message.messageList is updated to the latest state                              |
| message.send             | When you send a new message                                       | client.message.sendMessage              | client.message.messageList and client.message.msg_text are updated to the latest state |
| message.delivered        | When your send new message is successfully delivered to the other | client.message.receive                  | client.message.messageList is updated to the latest state                              |

### usage
> A simple example of how to subscribe to message events and send a message, get messages list.

```ts
import type { Client, EventTypes } from '@web3mq/client';
const client = Client.getInstance('your Key pairs');
const handleEvent = (props: { type: EventTypes }) => {
    const { type } = props;
    const { messageList, msg_text } = client.message;
    if (!messageList) {
      return;
    }
    if (type === 'message.getList') {
      console.log('the current messageList is: ', messageList);
    }
    if (type === 'message.send') {
      console.log('you are sending a message, the message content is: ', msg_text);
      console.log('the latest MessageList when you send a message: ', messageList);
    }
    if (type === 'message.delivered') {
      console.log('the message you sent was successfully delivered');
      console.log('the latest MessageList when you send a message successfully: ', messageList);
    }
};
// subscribe event
client.on('message.getList', handleEvent);
client.on('message.send', handleEvent);
client.on('message.delivered', handleEvent);
// get message list of user who userid is user: xxx
clietn.message.getMessageList({page: 1, size: 20}, "user: xxxx")
    .then(() => {
        // send message after get message list
        client.message.send('hello world', "user: xxx")
    });
// Cancel event after one hour
setTimeout(() => {
    client.off('message.getList', handleEvent);
    client.off('message.send', handleEvent);
    client.off('message.delivered', handleEvent);
}, 1000 * 60 * 60);
```

## Notification
> Notification events notify you when an action happens to you, for example, when someone follows you in an application.All notification event type start with notification.

|           event                |                  trigger                       |        trigger function                |                          recipients                           |
| ------------------------------ | ---------------------------------------------- | -------------------------------------- | ------------------------------------------------------------- |
| notification.getList           | When notificationList is acquired              | client.notify.receiveNotify            | client.notify.notificationList is updated to the latest state |
| notification.getMyTopicList    | When list of topics I created is acquired      | client.topic.getMyCreateTopicList      | client.topic.myTopicList is updated to the latest state       |
| notification.getMySubscribeList| When list of topics I subscribed is acquired   | client.topic.getMySubscribeTopicList   | client.topic.mySubscribeList is updated to the latest state   |

### usage
> A simple example of how to subscribe to message events and get list of topics I created.

```ts
import type { Client, EventTypes } from '@web3mq/client';
const client = Client.getInstance('your Key pairs');
const handleEvent = (props: { type: EventTypes }) => {
    const { type } = props;
    const { myTopicList } = client.topic;
    if (!myTopicList) {
      return;
    }
    if (type === 'notification.getMyTopicList') {
      console.log('the current myTopicList is: ', myTopicList);
    }
};
// subscribe event
client.on('notification.getMyTopicList', handleEvent);
// get myTopicList
client.topic.getMyCreateTopicList({page: 1, size: 20});
// Cancel event after one hour
setTimeout(() => {
    client.off('notification.getMyTopicList', handleEvent);
}, 1000 * 60 * 60);
```