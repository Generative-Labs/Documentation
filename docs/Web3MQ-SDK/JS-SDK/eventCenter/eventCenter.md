---
position: 7
---

## Usage

### event list

```typescript
export const EVENT_MAP = {
  export const EVENT_MAP = {
  'channel.created': true,
  'channel.getList': true,
  'channel.activeChange': true,
  'channel.updated': true,
  'contact.activeChange': true,
  'contact.getList': true,
  'contact.getContactList': true,
  'contact.getFollowerList': true,
  'contact.getFollowingList': true,
  'contact.friendList': true,
  'contact.reviceList': true,
  'contact.updateList': true,
  'contact.updateContactList': true,
  'contact.updateFollowerList': true,
  'contact.updateFollowingList': true,
  'connect.changeReadyStatus': true,
  'message.delivered': true,
  'message.read': true,
  'message.updated': true,
  'message.getList': true,
  'message.getThreadList': true,
  'message.openAllThread': true,
  'notification.messageNew': true,
  'notification.getList': true,
  'notification.getMyTopicList': true,
  'notification.getMySubscribeList': true,
};
};
```

### create pubsub

```typescript
// Used in SDK
client.emit('channel.getList', data);

// Used in component libraries
client.on('channel.getList', (data) => {
  console.log(data);
});

client.off('channel.getList');
```
