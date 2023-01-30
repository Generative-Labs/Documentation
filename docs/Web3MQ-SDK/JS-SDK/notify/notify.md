---
position: 8
---

# Notify

## Properties

| name             | type                                                                        | Description       |
| ---------------- | --------------------------------------------------------------------------- | ----------------- |
| notificationList | [NotifyResponse](/docs/Web3MQ-SDK/JS-SDK/types/#notifyresponse) [ ] \| null | notification list |

## Methods

| name                     | type     | Parameters Description                                                                   | response                  |
| ------------------------ | -------- | ---------------------------------------------------------------------------------------- | ------------------------- |
| changeNotificationStatus | function | messages: string[], status:[MessageStatus](/docs/Web3MQ-SDK/JS-SDK/types/#messagestatus) | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse) |

## init Client

```tsx
import { useEffect, useState } from 'react';
import { Client, KeyPairsType } from "@web3mq/client";

export const App = () => {
  const [fastUrl, setFastUrl] = useState<string | null>(null);
  const [keys, setKeys] = useState<KeyPairsType | null>(null);
  const init = async () => {
    // 1. You must initialize the SDK, the init function is asynchronous
    const newFastUrl = await Client.init({
      connectUrl: "example url", // The fastURL you saved to local
      app_key: "app_key", // Appkey applied from our team
    });
    setFastUrl(newFastUrl);
    // 2.Login and get keys
    const { address } = await Client.register.getAccount(didType);
    const { userid, userExist } = await Client.register.getUserInfo({
      did_value: address,
      did_type: didType,
    });
    let localMainPrivateKey = "";
    let localMainPublicKey = "";

    if (!userExist) {
      const registerRes = await Client.register.register({
        password,
        did_value: address,
        userid,
        did_type: didType,
        avatar_url: `https://cdn.stamp.fyi/avatar/${address}?s=300`,
      });
      localMainPrivateKey = registerRes.mainPrivateKey;
      localMainPublicKey = registerRes.mainPublicKey;
    }

    const {
      TempPrivateKey,
      TempPublicKey,
      pubkeyExpiredTimestamp,
      mainPrivateKey,
      mainPublicKey,
    } = await Client.register.login({
      password,
      userid,
      did_value: address,
      did_type: didType,
      mainPublicKey: localMainPublicKey,
      mainPrivateKey: localMainPrivateKey,
    });
    setKeys({
      PrivateKey: TempPrivateKey,
      PublicKey: TempPublicKey,
      userid: userid,
    })
  };
  useEffect(()=> {
    init();
  }, []);
  if (!fastUrl || !keys) return <div>Login...</div>;
  // 3. You must ensure that the Client.init initialization is complete and that you have a key pair
  const client = Client.getInstance(keys);
  return (
    <Child client={client} />
  )
}
```

## ChangeNotificationStatus

```tsx
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  return (
    <div>
      <button
        onClick={() => {
          client.notify.changeNotificationStatus(['notifyId'], 'delivered');
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
import { Client } from '@web3mq/client';

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
