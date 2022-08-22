---
position: 4
---

# Message

## Properties

| name        | type                                                                             | Description  |
| ----------- | -------------------------------------------------------------------------------- | ------------ |
| messageList | [MessageListItem](/docs/Web3MQ-SDK/JS-SDK-V2/types/#messagelistitem) [ ] \| null | message list |

## Methods

| name                | type     | Parameters Description                                                                         | response |
| ------------------- | -------- | ---------------------------------------------------------------------------------------------- | -------- |
| getMessageList      | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK-V2/types/#pageparams)                                     | none     |
| changeMessageStatus | function | (messages: string[], status: [MessageStatus](/docs/Web3MQ-SDK/JS-SDK-V2/types/#messagestatus)) | none     |
| sendMessage         | function | (msg: string)                                                                                  | none     |
| receive             | function | receive message callback                                                                       | none     |

## init Client

```tsx
import { Client } from 'web3-mq';
// sign MetaMask get keys
const keys = { PrivateKey, PublicKey };
// ws host url
const HostURL = '94.16.119.221:23333/messages';
// init client
const client = Client.getInstance(keys, HostURL);
```

## GetMessageList & SendMessage

```tsx
export const App = () => {
  const handleEvent = (event: { type: any }) => {
    if (event.type === 'message.getList' || event.type === 'message.new') {
      console.log(client.message.messageList);
    }
  };

  useEffect(() => {
    client.on('message.getList', handleEvent);
    client.on('message.new', handleEvent);
    return () => {
      client.off('message.getList');
      client.off('message.new');
    };
  }, []);

  useEffect(() => {
    client.message.getMessageList({
      page: 1,
      size: 20,
    });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          client.message.sendMessage('text');
        }}>
        send Message
      </button>
    </div>
  );
};
```

## ChangeMessageStatus

```tsx
export const App = () => {
  return (
    <div>
      <button
        onClick={async () => {
          const data = await client.message.changeMessageStatus(['msgId']);
          console.log(data);
        }}>
        Change Message Status
      </button>
    </div>
  );
};
```
