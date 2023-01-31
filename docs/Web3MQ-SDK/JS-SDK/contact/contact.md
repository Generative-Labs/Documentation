---
position: 6
---

# Contact

## Properties

| name                     | type                                                                                  | Description                  |
| ------------------------ | ------------------------------------------------------------------------------------- | ---------------------------- |
| contactList              | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype) [ ] \| null | contact list                 |
| followerList             | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype) [ ] \| null | follower list                |
| followingList            | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype) [ ] \| null | following list               |

## Methods

| name                        | type     | Parameters Description                                                                    | response                                                                      |
| --------------------------- | -------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| sendFriend                  | function | firstParams: (target_userid or target_user_wallet_address)                    | Promise:[ServiceResponse](/docs/Web3MQ-SDK/JS-SDK/types/#serviceresponse)     |                                                      
| getContactList              | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                   | Promise:[ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype) |
| getFollowerList             | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                   | Promise:[ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype) |
| getFollowingList            | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                   | Promise:[ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype) |
| followOperation             | function | [FollowOperationParams](/docs/Web3MQ-SDK/JS-SDK/types/#followoperationparams)             | Promise:[ServiceResponse](/docs/Web3MQ-SDK/JS-SDK/types/#serviceresponse)         |
|publishNotificationToFollowers | function | [PublishNotificationToFollowersParams](/docs/Web3MQ-SDK/JS-SDK/types/#publishnotificationtofollowersparams) | Promise:[ServiceResponse](/docs/Web3MQ-SDK/JS-SDK/types/#serviceresponse) |

## Prerequisites

> init() see: [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)

> register() see: [register](/docs/Web3MQ-SDK/JS-SDK/register/#register-or-resetpassword)

> login() see: [login](/docs/Web3MQ-SDK/JS-SDK/register/#login)

> event see: [event](/docs/Web3MQ-SDK/JS-SDK/client/#events-1)

### Init and get Client
> To use the functions of the current module, please complete the following steps first.
:::tip
After successful login, you can get the secret key pair from the returned result
:::

```ts
import { useEffect, useState } from 'react';
import { Client } from '@web3mq/client'; 

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

### getFollowerList
> Get your list of follower, and could pass in `pageParams` type parameters to achieve paging.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'contact.getFollowerList') {
      console.log(client.contact.followerList);
    }
  };

  useEffect(() => {
    client.on('contact.getFollowerList', handleEvent);
    return () => {
      client.off('contact.getFollowerList');
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {client.contact.getFollowerList({ page: 1, size: 100 })}}
      >
        get follower list
      </button>
    </>
  )
};
```
### getFollowingList
> Get your list of following, and could pass in `pageParams` type parameters to achieve paging.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'contact.getFollowingList') {
      console.log(client.contact.followingList);
    }
  };

  useEffect(() => {
    client.on('contact.getFollowingList', handleEvent);
    return () => {
      client.off('contact.getFollowingList');
    };
  }, []);

  return (
    <button
      onClick={() => {client.contact.getFollowingList({ page: 1, size: 100 })}}
    >
      get following list
    </button>
  )
};
```

### getContactList
> Get your list of contact, and could pass in `pageParams` type parameters to achieve paging.

```tsx
import { useEffect } from 'react';
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'contact.getContactList') {
      console.log(client.contact.followingList);
    }
  };

  useEffect(() => {
    client.on('contact.getContactList', handleEvent);
    return () => {
      client.off('contact.getContactList');
    };
  }, []);

  return (
    <button
      onClick={() => {client.contact.getContactList({ page: 1, size: 100 })}}
    >
      get contact list
    </button>
  )
};
```
### sendFriend
> Select userid or wallet address to send a friend request.

```tsx
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  return (
    <button
      onClick={async () => {
        const data = await client.contact.sendFriend('target_userid or target_walletAddress', 'Can you follow me?');
        console.log(data);
      }}
    >
      send friend
    </button>
  );
};
```

### followOperation
> Following or unfollowing others.

```tsx
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  return (
    <button
      onClick={async () => {
        const data = await client.contact.followOperation({
          action: 'follow',
          address: 'wallet_address',
          didType: 'wallet_type'
          targetUserid: 'userid',
        });
        console.log(data);
      }}
    >
      follow user
    </button>
  );
};
```

### publishNotificationToFollowers
> Customize your content and send notifications to your followers.

```tsx
import { Client } from '@web3mq/client';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  return (
    <button
      onClick={async () => {
        const data = await client.contact.publishNotificationToFollowers({
          title: 'hello world',
          content: 'have a good day'
        });
        console.log(data);
      }}
    >
      publish notification to follower
    </button>
  );
};
```