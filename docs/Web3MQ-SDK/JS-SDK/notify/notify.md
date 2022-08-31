---
position: 8
---

# Notify

## Properties

| name             | type                                                                        | Description       |
| ---------------- | --------------------------------------------------------------------------- | ----------------- |
| notificationList | [NotifyResponse](/docs/Web3MQ-SDK/JS-SDK/types/#notifyresponse) [ ] \| null | notification list |

## Methods

| name                     | type     | Parameters Description                                                                    | response                  |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------- | ------------------------- |
| changeNotificationStatus | function | messages: string[], status: [MessageStatus](/docs/Web3MQ-SDK/JS-SDK/types/#messagestatus) | { "code": 0, "msg": "ok"} |

## init Client

```tsx
import { Client } from 'web3-mq';

// ws and request host url
const connectUrl = 'us-west-2.web3mq.com';
// init sdk
const register = Client.init({ connectUrl, app_key: 'vAUJTFXbBZRkEDRE' });
// sign MetaMask get keys
const { PrivateKey, PublicKey } = await register.signMetaMask(
  'https://www.web3mq.com' // your signContent URI
);
const keys = { PrivateKey, PublicKey };
// init client
const client = Client.getInstance(keys);

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
    if (event.type === 'notification.getList') {
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
