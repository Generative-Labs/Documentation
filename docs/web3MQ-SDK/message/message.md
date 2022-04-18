---
position: 2
---

## Usage

### Message State

```typescript
class Message {
  _client: Web3MQ;
  activeMessage: MessageResponse | null;
  messageList: MessageResponse[] | null;
  threadList: MessageResponse[] | null;
}
```

### Message Function

```typescript
getMessageList = (props: GetRoomInfoParams) => {
  this._client.emit('message.getList', { type: 'message.getList', data });
};
openThread = (message: MessageResponse | null) => {
  this._client.emit('message.getThreadList', {
    type: 'message.getThreadList',
    data,
  });
};
```

### Message API

```typescript
getMessageListByThread = (params: GetThreadsParams): Promise<any> => {
  return request.get(
    `/threads/${params.room_id}/${params.page}/${params.size}?belong_to_thread_id=${params.belong_to_thread_id}&page=${params.page}&size=${params.size}`
  );
};
```
