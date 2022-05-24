---
position: 2
---

## Usage

### Message Attribute

| name          | type                                                                  | Parameters Description |
| ------------- | --------------------------------------------------------------------- | ---------------------- |
| activeMessage | [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse) \| null    | current active message |
| messageList   | [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse)[ ] \| null | message list           |
| threadList    | [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse)[ ] \| null | thread list            |

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
| props | [GetRoomInfoParams](/docs/Web3MQ-SDK/JS-SDK/types/#getroominfoparams) \| null |

```typescript
getMessageList = async (props: GetRoomInfoParams) => {
  const { data = [] } = await request.post('/messages', props);
  this.messageList = data ? data.reverse() : [];
  this._client.emit('message.getList', { type: 'message.getList', data });
};
```

### loadMoreMessageList

> load more message list and notifies the subscriber of the update

```ts
loadMoreMessageList = () => {
  return new Promise(async (resolve) => {
    this._messagePage++;
    const { data = [] } = await this.getMessages({
      room_id: this._roomId,
      page: this._messagePage,
    });
    this.messageList = [...data.reverse(), ...(this.messageList as [])];
    this._client.emit('message.getList', { type: 'message.getList', data });
    resolve(true);
  });
};
```

### loadMoreThreadList

> load more thread list and notifies the subscriber of the update

```ts
loadMoreThreadList = () => {
  const { to_room_id = '', id = '' } = this.activeMessage || {};
  return new Promise(async (resolve) => {
    this._threadPage++;
    const { data = [] } = await this.getMessageListByThread({
      room_id: to_room_id,
      belong_to_thread_id: id,
      page: this._threadPage,
    });
    this.threadList = [
      ...(data ? data.reverse() : []),
      ...(this.threadList as []),
    ];
    this._client.emit('message.getThreadList', {
      type: 'message.getThreadList',
      data,
    });
    resolve(true);
  });
};
```

### openThread

> Changes the activeMessage and threadList property on the current object and notifies the subscriber of the update

#### params

| name    | type                                                               |
| ------- | ------------------------------------------------------------------ |
| message | [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse) \| null |

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

### getMessages

> get message list API

#### params

| name     | type                                                                     |
| -------- | ------------------------------------------------------------------------ |
| params   | [GetMessageParams](/docs/Web3MQ-SDK/JS-SDK/types/#getmessageparams)             |
| response | { data: [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse) [ ] } |

```ts
getMessages = (params: GetMessageParams): Promise<any> => {
  return request.post('/messages', { ...params, size: PAGE_SIZE });
};
```

### getMessageListByThread

> get message list API

#### params

| name     | type                                                                     |
| -------- | ------------------------------------------------------------------------ |
| params   | [GetThreadsParams](/docs/Web3MQ-SDK/JS-SDK/types/#getthreadsparams)             |
| response | { data: [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse) [ ] } |

```typescript
getMessageListByThread = (params: GetThreadsParams): Promise<any> => {
  return request.get(
    `/threads/${params.room_id}/${params.page}/${params.size}?belong_to_thread_id=${params.belong_to_thread_id}&page=${params.page}&size=${params.size}`
  );
};
```
