---
position: 8
---

# Notify

## Properties

| name             | type                                                                           | Description       |
| ---------------- | ------------------------------------------------------------------------------ | ----------------- |
| notificationList | [NotifyResponse](/docs/Web3MQ-SDK/JS-SDK-V2/types/#notifyresponse) [ ] \| null | notification list |

## Methods

| name                     | type     | Parameters Description                                                                       | response                  |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------- | ------------------------- |
| changeNotificationStatus | function | messages: string[], status: [MessageStatus](/docs/Web3MQ-SDK/JS-SDK-V2/types/#messagestatus) | { "code": 0, "msg": "ok"} |

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

## ChangeNotificationStatus

```tsx
export const App = () => {
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

export const App = () => {
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
