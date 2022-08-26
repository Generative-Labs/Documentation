---
position: 8
---

# Notify

## Properties

| name             | type                                                                           | Description       |
| ---------------- | ------------------------------------------------------------------------------ | ----------------- |
| notificationList | [NotifyResponse](/docs/Web3MQ-SDK/JS-SDK/types/#notifyresponse) [ ] \| null | notification list |

## Methods

| name                     | type     | Parameters Description                                                                       | response                  |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------- | ------------------------- |
| changeNotificationStatus | function | messages: string[], status: [MessageStatus](/docs/Web3MQ-SDK/JS-SDK/types/#messagestatus) | { "code": 0, "msg": "ok"} |

## init Client

```tsx
import { Client, MetaMask } from 'web3-mq';
// sign MetaMask get keys
const { PrivateKey, PublicKey } = await MetaMask.signMetaMask(
  'https://www.web3mq.com' // your_domain_url
);
const keys = { PrivateKey, PublicKey };
// ws host url
const HostURL = 'us-west-2.web3mq.com';
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

## ChangeNotificationStatus

```tsx
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  return (
    <div>
      <button
        onClick={() => {
          client.message.changeMessageStatus(['msgId'], 'delivered');
        }}>
        Change Notification Status
      </button>
    </div>
  );
};
```

## Get NotificationList

```tsx
import { useEffect } from 'react';
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  
  const handleEvent = (event: { type: any }) => {
    if (event.type === 'notification.getList' || event.type === 'message.new') {
      console.log(client.notify.notificationList);
    }
  };

  useEffect(() => {
    client.on('notification.getList', handleEvent);
    return () => {
      client.off('notification.getList');
    };
  }, []);

  return <div>Notify Test</div>;
};
```
