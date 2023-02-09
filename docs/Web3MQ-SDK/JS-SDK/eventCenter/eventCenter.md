---
position: 9
---

## event list

### Connect

`connect.changeReadyStatus`

### Channel

`channel.created`
> This event is triggered when a new channel is created

`channel.getList`
> This event is triggered when call client.channel.queryChannels

`channel.activeChange`
> This event is triggered when the currently active channel has changed

`channel.updated`
> This event is triggered when a channel is updated

### Contact

`contact.activeChange`
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
> This event is triggered when the list of following is updated

### Message

`message.send`
> This event is triggered when you send a message

`message.delivered`
> This event is triggered when you receive a new message

`message.read`
> This event is triggered when a message has been read

`message.updated`
> This event is triggered when the message is updated

`message.getList`
> This event is triggered when getting a list of messages


### Notification

`notification.messageNew`
> This event is triggered when you receive a new message

`notification.getList`
> This event is triggered when getting the notification list

`notification.getMyTopicList`
> This event is triggered when getting the topic list I created

`notification.getMySubscribeList`
>This event is triggered when getting the topic list I subscribed

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
