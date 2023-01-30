---
position: 7
---

## event list

### Channel

**channel.created**
> This event is triggered when a new channel is created
**channel.getList**
> This event is triggered when call client.channel.queryChannels
**channel.activeChange**
> This event is triggered when the currently active channel has changed
**channel.updated**
> This event is triggered when a channel is updated

### Contact

**contact.activeChange**
> This event is triggered when the currently active contact has changed
**contact.getList**
> This event is triggered when all contact lists were updated
**contact.getContactList**
> This event is triggered when get the list of people who follow each other
**contact.getFollowerList**
> This event is triggered when get the list of followers list
**contact.getFollowingList**
> This event is triggered when get the list of people you follow
**contact.friendList**
> This event is triggered when get the list of friend requests I have sent
**contact.reviceList**
> This event is triggered when get the list of friend requests I have received
**contact.updateContactList**
**contact.updateFollowerList**
**contact.updateFollowingList**
**connect.changeReadyStatus**

### Message

**message.send**
> This event is triggered when you send a message
**message.delivered**
> This event is triggered when you receive a new message
**message.read**
> This event is triggered when you receive a new message
**message.updated**
**message.getList**
**message.getThreadList**
**message.openAllThread**

### Notification

**notification.messageNew**
**notification.getList**
**notification.getMyTopicList**
**notification.getMySubscribeList**

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
