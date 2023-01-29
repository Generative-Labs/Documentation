---
position: 4
---

# Messages

## Properties

| name          | type                                                                         | Parameters Description |
| ------------- | ---------------------------------------------------------------------------- | ---------------------- |
| activeMessage | [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse) \| null    | current active message |
| messageList   | [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse)[ ] \| null | message list           |
| threadList    | [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse)[ ] \| null | thread list            |

## Methods

| name                                                                        | type     | Parameters Description                                            |
| --------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| [getMessageList](/docs/Web3MQ-SDK/JS-SDK/message/#getmessagelist)           | function | { room_id: string }                                               |
| [loadMoreMessageList](/docs/Web3MQ-SDK/JS-SDK/message/#loadmoremessagelist) | function | null                                                              |
| [openThread](/docs/Web3MQ-SDK/JS-SDK/message/#openthread)                   | function | [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse) |
| [loadMoreThreadList](/docs/Web3MQ-SDK/JS-SDK/message/#loadmorethreadlist)   | function | null                                                              |

## Properties

### activeMessage

> The currently selected message

#### Get

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.messages.activeMessage;
```

#### Returns

> **Object**: [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse)

### messageList

> Current chat room message logs

#### Get

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.messages.messageList;
```

#### Returns

> **Array**: [MessageResponse](/docs/Web3MQ-SDK/JS-SDK/types/#messageresponse)[]

## Methods

### getMessageList()

> Changes the messageList property on the current object and notifies the subscriber of the update

```typescript
* getMessageList: (props: { room_id: string; }) => Promise<void>;
```

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.messages
  .getMessageList({
    room_id: "YOUR_ROOM_ID",
  })
  .then((res) => {
    console.log(res);
  });
// After the request is completed, the data will be synchronized to the client
console.log(client.messages.messageList);
```

### loadMoreMessageList()

> load more message list and notifies the subscriber of the update

```typescript
* loadMoreMessageList: () => Promise<unknown>;
```

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.messages.loadMoreMessageList().then((res) => {
  console.log(res);
});

// After the request is completed, the data will be synchronized to the client
console.log(client.messages.messageList);
```

### openThread()

> Changes the activeMessage and threadList property on the current object and notifies the subscriber of the update

```typescript
* openThread: (message: MessageResponse | null) => Promise<void>;
```

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.messages.openThread(message: MessageResponse);

// After the request is completed, the data will be synchronized to the client
console.log(client.messages.threadList);

```

### loadMoreThreadList()

> load more thread list and notifies the subscriber of the update

```typescript
loadMoreThreadList: () => Promise<unknown>;
```

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.messages.loadMoreThreadList().then((res) => {
  console.log(res);
});

// After the request is completed, the data will be synchronized to the client
console.log(client.messages.messageList);
```
