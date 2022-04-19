---
position: 2
---

## Usage

### Message Attribute

| name          | type                                                                  | Parameters Description |
| ------------- | --------------------------------------------------------------------- | ---------------------- |
| activeMessage | [MessageResponse](/docs/web3MQ-SDK/types/#messageresponse) \| null    | current active message |
| messageList   | [MessageResponse](/docs/web3MQ-SDK/types/#messageresponse)[ ] \| null | message list           |
| threadList    | [MessageResponse](/docs/web3MQ-SDK/types/#messageresponse)[ ] \| null | thread list            |

```typescript
class Message {
  activeMessage: MessageResponse | null;
  messageList: MessageResponse[] | null;
  threadList: MessageResponse[] | null;
}
```

### getMessageList

> Changes the messageList property on the current object and notifies the subscriber of the update

#### params

| name  | type                                                                   |
| ----- | ---------------------------------------------------------------------- |
| props | [GetRoomInfoParams](/docs/web3MQ-SDK/types/#getroominfoparams) \| null |

```typescript
getMessageList = async (props: GetRoomInfoParams) => {
  const { data = [] } = await request.post('/messages', props);
  this.messageList = data ? data.reverse() : [];
  this._client.emit('message.getList', { type: 'message.getList', data });
};
```

### openThread

> Changes the activeMessage and threadList property on the current object and notifies the subscriber of the update

#### params

| name    | type                                                               |
| ------- | ------------------------------------------------------------------ |
| message | [MessageResponse](/docs/web3MQ-SDK/types/#messageresponse) \| null |

```typescript
openThread = (message: MessageResponse | null) => {
  //... Get the data using the getMessageListByThread method
  this.activeMessage = message;
  this.threadList = data;
  this._client.emit('message.getThreadList', {
    type: 'message.getThreadList',
    data,
  });
};
```

### getMessageListByThread

> get message list API

#### params

| name     | type                                                                     |
| -------- | ------------------------------------------------------------------------ |
| params   | [GetThreadsParams](/docs/web3MQ-SDK/types/#getthreadsparams)             |
| response | { data: [MessageResponse](/docs/web3MQ-SDK/types/#messageresponse) [ ] } |

```typescript
getMessageListByThread = (params: GetThreadsParams): Promise<any> => {
  return request.get(
    `/threads/${params.room_id}/${params.page}/${params.size}?belong_to_thread_id=${params.belong_to_thread_id}&page=${params.page}&size=${params.size}`
  );
};
```
