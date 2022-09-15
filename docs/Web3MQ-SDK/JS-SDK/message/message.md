---
position: 5
---

# Message

## Properties

| name        | type                                                                          | Description  |
| ----------- | ----------------------------------------------------------------------------- | ------------ |
| messageList | [MessageListItem](/docs/Web3MQ-SDK/JS-SDK/types/#messagelistitem) [ ] \| null | message list |

## Methods

| name                | type     | Parameters Description                                                                      | response |
| ------------------- | -------- | ------------------------------------------------------------------------------------------- | -------- |
| getMessageList      | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                     | none     |
| changeMessageStatus | function | (messages: string[], status: [MessageStatus](/docs/Web3MQ-SDK/JS-SDK/types/#messagestatus)) | none     |
| sendMessage         | function | (msg: string)                                                                               | none     |
| receive             | function | receive message callback                                                                    | none     |

## init Client

```tsx
import { Client } from 'web3-mq';
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
});
// 2. sign MetaMask get keys
const { PrivateKey, PublicKey } = await Client.register.signMetaMask({
  signContentURI: 'https://www.web3mq.com', // your signContent URI
  EthAddress: 'your eth address', // *Not required*  your eth address, if not use your MetaMask eth address
});
const keys = { PrivateKey, PublicKey };
// 3. You must ensure that the Client.init initialization is complete and that you have a key pair
const client = Client.getInstance(keys, HostURL);

console.log(client);

export const Child = () => {
  return (
    <div>
      <Child client={client} />
    </div>
  );
};
```

## GetMessageList & SendMessage

```tsx
import { useEffect } from 'react';
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'message.getList') {
      console.log(client.message.messageList);
    }
    if (event.type === 'message.delivered') {
      console.log('message delivered');
    }
  };

  useEffect(() => {
    client.on('message.getList', handleEvent);
    client.on('message.delivered', handleEvent);
    return () => {
      client.off('message.getList');
      client.off('message.delivered');
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
import { useEffect } from 'react';
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

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
