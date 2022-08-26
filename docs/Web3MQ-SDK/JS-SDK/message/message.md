---
position: 4
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
import { Client, Register } from 'web3-mq';

// ws and request host url
const HostURL = 'us-west-2.web3mq.com';
// sign MetaMask get keys
const { PrivateKey, PublicKey } = await Register.signMetaMask(
  'https://www.web3mq.com', // your_domain_url
  HostURL
);
const keys = { PrivateKey, PublicKey };
// init client
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
