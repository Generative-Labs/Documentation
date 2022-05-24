---
position: 5
---

## Usage

### Channel Attribute

| name          | type                                                                   | Parameters Description |
| ------------- | ---------------------------------------------------------------------- | ---------------------- |
| channelList   | [ChannelResponse](/docs/web3MQ-SDK/types/#channelresponse) [ ] \| null | channel list           |
| activeChannel | [ChannelResponse](/docs/web3MQ-SDK/types/#channelresponse) \| null     | current active channel |
| members       | [MembersItem](/docs/web3MQ-SDK/types/#membersitem) \| null             | member list            |
| activeMember  | [ActiveMemberItem](/docs/web3MQ-SDK/types/#activememberitem)           | current active member  |

```typescript
export class Channel {
  channelList: ChannelResponse[] | null;
  activeChannel: ChannelResponse | null;
  members: MembersItem | null;
  activeMember: ActiveMemberItem;
}
```

### onNewMessage

> Notify all subscribers when a new message is received

| name    | type                                                       |
| ------- | ---------------------------------------------------------- |
| message | [MessageResponse](/docs/web3MQ-SDK/types/#messageresponse) |

```typescript
onNewMessage = (message: MessageResponse) => {
  // ...
  this._client.emit('channel.updated', data);
};
```

### setActiveChannel

> Sets the currently active channel and notifies all subscribers of updates

| name    | type                                                       |
| ------- | ---------------------------------------------------------- |
| channel | [ChannelResponse](/docs/web3MQ-SDK/types/#channelresponse) |

```ts
setActiveChannel = (channel: ChannelResponse) => {
  this._client.emit('channel.activeChange', {
    type: 'channel.activeChange',
    data,
  });
};
```

### queryChannels

> Query all channel data and notifies all subscribers of updates

| name   | type                                                                     |
| ------ | ------------------------------------------------------------------------ |
| option | [GetChatsByUserIdParams](/docs/web3MQ-SDK/types/#getchatsbyuseridparams) |

```ts
queryChannels = (option: GetChatsByUserIdParams) => {
  //...
  this._client.emit('channel.getList', { type: 'channel.getList', data });
};
```

### getChatsByUserId

> Query all channel data API

| name     | type                                                                     |
| -------- | ------------------------------------------------------------------------ |
| params   | [GetChatsByUserIdParams](/docs/web3MQ-SDK/types/#getchatsbyuseridparams) |
| response | { data: [ChannelResponse](/docs/web3MQ-SDK/types/#channelresponse) [ ] } |

```typescript
getChatsByUserId = (
  params: GetChatsByUserIdParams
): Promise<{ data: ChannelResponse[] }> => {
  return request.post('/my_chats', params);
};
```
