---
position: 9
---

## event list

### Connect
> When the user creates a client, it will automatically connect to the websocket, and the user can listen to the `Connect` events, to get the latest status of the current websoctet from `client.connect.ws`.

|         event             |                  trigger                                                                                   |                 recipients                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| connect.changeReadyStatus | When the ready status of your connected WebSocket changes                                                  | web3MQ clients watching the ws            |
<!-- `connect.changeReadyStatus` -->

### Channel
> The `Channel` event helps you keep up to date with channel changes and get the latest status from the data maintained by the Web3MQ client, such as client.channel.chanelList.

|         event        |                  trigger                                                                                   |                 recipients                |
| -------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| channel.activeChange | When one of the channels is set to active(such as `setActiveChannel`)                                      | web3MQ clients watching the activeChannel |
| channel.getList      | When channelList have been given to the latest status(such as `queryChannels`,`createRoom` and `joinGroup`)| web3MQ clients watching the channelList   |

<!-- `channel.created`
> This event is triggered when a new channel is created

`channel.getList`
> This event is triggered when call client.channel.queryChannels

`channel.activeChange`
> This event is triggered when the currently active channel has changed

`channel.updated`
> This event is triggered when a channel is updated -->

### Contact
> The `contact` event always notifies you when you get a list of followers, etc. For example, you can get the latest status from `client.contact.follower` after the event is triggered.

|           event          |                  trigger                                                                                   |                 recipients                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| contact.getContactList   | When contactList have been given to the latest status(such as `getContactList`)                            | web3MQ clients watching the contactList   |
| contact.getFollowerList  | When followerList have been given to the latest status(such as `getFollowerList`)                          | web3MQ clients watching the followerList  |
| contact.getFollowingList | When followingList have been given to the latest status(such as `getFollowingList`)                        | web3MQ clients watching the followingList |

<!-- `contact.activeChange`
> This event is triggered when the currently active contact has changed

`contact.getList`
> This event is triggered when all contact lists were updated

`contact.getContactList`
> This event is triggered when get the list of people who follow each other

`contact.getFollowerList`
> This event is triggered when get the list of followers list

`contact.getFollowingList`
> This event is triggered when get the list of people you follow

`contact.friendList`
> This event is triggered when get the list of friend requests I have sent

`contact.reviceList`
> This event is triggered when get the list of friend requests I have received

`contact.updateContactList`
> This event is triggered when the contact list is updated

`contact.updateFollowerList`
> This event is triggered when the list of followers is updated

`contact.updateFollowingList`
> This event is triggered when the list of following is updated -->

### Message
> When you send a message, get a message, etc., it's all about the `Message` event.

|           event          |                  trigger                                                                                   |                 recipients                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| message.getList          | When messageList have been given to the latest status(such as `getMessageList`)                            | web3MQ clients watching the messageList   |
| message.send             | When you send a new message(such as `sendMessage`)                                                         | web3MQ clients watching the messageList, msg_text  |
| message.delivered        | When your sent new message is successfully delivered to the other(such as `receive`)                       | web3MQ clients watching the messageList   |

<!-- `message.send`
> This event is triggered when you send a message

`message.delivered`
> This event is triggered when you receive a new message

`message.read`
> This event is triggered when a message has been read

`message.updated`
> This event is triggered when the message is updated

`message.getList`
> This event is triggered when getting a list of messages -->


### Notification
> Notification events notify you when an action happens to you, for example, when someone follows you in an application.All notification event type start with notification.

|           event          |                  trigger                                                                                   |                 recipients                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| notification.getList     | When notificationList have been given to the latest status(such as `receiveNotify`)                        | web3MQ clients watching the notificationList|

<!-- `notification.messageNew`
> This event is triggered when you receive a new message

`notification.getList`
> This event is triggered when getting the notification list

`notification.getMyTopicList`
> This event is triggered when getting the topic list I created

`notification.getMySubscribeList`
>This event is triggered when getting the topic list I subscribed -->

### Event usage

#### Used in SDK  publish an event

```ts
client.emit('channel.getList', data);
```

#### Create an event listener

```ts
client.on('channel.getList', (data) => {
    console.log(data);
});
```

#### Delete an event listener

client.off('channel.getList');
