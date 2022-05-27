---
position: 7
---

## Usage

### event list

```typescript
export const EVENT_MAP = {
  'channel.getList': true, // get channel list
  'channel.activeChange': true, // change active channel
  'channel.updated': true, // update channel
  'contact.activeChange': true, // change contact
  'contact.getList': true, // get contactlist
  'message.getList': true, // get message list
  'message.getThreadList': true, // get message thread list
  'notification.mark_read': true,
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

