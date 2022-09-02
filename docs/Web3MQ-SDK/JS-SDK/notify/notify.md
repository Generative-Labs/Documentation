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
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
});
// 2. sign MetaMask get keys
const { PrivateKey, PublicKey } = await Client.register.signMetaMask(
  'https://www.web3mq.com' // your signContent URI
);
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
