---
position: 8
---

# Notify

## Properties

| name             | type                                                                        | Description       |
| ---------------- | --------------------------------------------------------------------------- | ----------------- |
| notificationList | [NotifyResponse](/docs/Ethos-SDK/JS-SDK/types/#notifyresponse) [ ] \| null | notification list |

## Methods

| name                     | type     | Parameters Description                                                                   | response                  |
| ------------------------ | -------- | ---------------------------------------------------------------------------------------- | ------------------------- |
| changeNotificationStatus | function | 1.messages: string[] 2.status:[MessageStatus](/docs/Ethos-SDK/JS-SDK/types/#messagestatus) | Promise:[SearchUsersResponse](/docs/Ethos-SDK/JS-SDK/types/#searchusersresponse) |

## Prerequisites

> init() see: [init](/docs/Ethos-SDK/JS-SDK/client/#init)

> register() see: [register](/docs/Ethos-SDK/JS-SDK/register/#register-or-resetpassword)

> login() see: [login](/docs/Ethos-SDK/JS-SDK/register/#login)

> event see: [event](/docs/Ethos-SDK/JS-SDK/client/#events-1)

### Init and get Client
> To use the functions of the current module, please complete the following steps first.
:::tip
After successful login, you can get the secret key pair from the returned result
:::

```ts
import { useEffect, useState } from 'react';
import { Client } from '@ethos/client'; 

export const App = () => {
  const [fastestUrl, setFastUrl] = useState<string | null>(null);
  useEffect(() => {
    Client.init({
        connectUrl: '', //
        app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet
    }).then(data => {
      setFastUrl(data);
    });
  }, [])
  if (!fastestUrl) return;
  const {
      tempPrivateKey,
      tempPublicKey,
      pubkeyExpiredTimestamp,
      mainPrivateKey,
      mainPublicKey,
  } = loginRes

  const keys = {
      PrivateKey: tempPrivateKey,
      PublicKey: tempPublicKey,
      userid: localStorage.getItem('userid')
  };

  const client = Client.getInstance(keys);
  return (
    <Child client={client} />
  )
}
```

## Methods

### ChangeNotificationStatus
> Change notification status.

```tsx
import { Client } from '@ethos/client';

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

### Get NotificationList
> Get the list of notifications in the `notification.getList` event.

```tsx
import { useEffect } from 'react';
import { Client } from '@ethos/client';

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
