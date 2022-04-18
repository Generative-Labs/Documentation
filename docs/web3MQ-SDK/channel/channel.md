---
position: 5
---

## Usag

### Channel State

```typescript
export class Channel {
  _client: Web3MQ;
  channelList: ChannelResponse[] | null;
  activeChannel: ChannelResponse | null;
  members: MembersItem | null;
  activeMember: ActiveMemberItem;
}
```

### Channel Function

```typescript
onNewMessage = (message: MessageResponse) => {
  this._client.emit('channel.updated', data);
};
setActiveChannel = (channel: ChannelResponse) => {
  this._client.emit('channel.activeChange', {
    type: 'channel.activeChange',
    data,
  });
};
getActiveMember = (current: ChannelResponse) => {
  this.activeMember = data;
};
queryChannels = (option: GetChatsByUserIdParams) => {
  this.members = cacheObj;
  this._client.emit('channel.getList', { type: 'channel.getList', data });
};
```

### Channel API

```typescript
getChatsByUserId = (
  params: GetChatsByUserIdParams
): Promise<{ data: ChannelResponse[] }> => {
  return request.post('/my_chats', params);
};
```
