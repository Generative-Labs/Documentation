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
| sendFriend                  | function | (target_userid: string)                                                                   | [ServiceResponse](/docs/Web3MQ-SDK/JS-SDK/types/#serviceresponse)                                                             |                                                      
| getContactList              | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)                                                         |
| getFollowerList             | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)                                                         |
| getFollowingList            | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)                                                         |
| followOperation             | function | Pick<[FollowOperationParams](/docs/Web3MQ-SDK/JS-SDK/types/#followoperationparams), 'address' \| 'target_userid' \| 'action' \| 'did_type'>                  | [ServiceResponse](/docs/Web3MQ-SDK/JS-SDK/types/#serviceresponse)                                                             |
|publishNotificationToFollowers | function | Pick<[PublishNotificationToFollowersParams](/docs/Web3MQ-SDK/JS-SDK/types/#publishnotificationtofollowersparams), 'title' \| 'content'>                                 | [ServiceResponse](/docs/Web3MQ-SDK/JS-SDK/types/#serviceresponse)                                                             |

### init Client

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

### getContactList & getFollowerList & getFollowingList

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
      console.log(client.contact.contactList);
    }
    if (event.type === 'contact.getFollowerList') {
      console.log(client.contact.followerList);
    }
    if (event.type === 'contact.getFollowingList') {
      console.log(client.contact.followingList);
    }
  };

  useEffect(() => {
    client.on('contact.getContactList', handleEvent);
    client.on('contact.getFollowerList', handleEvent);
    client.on('contact.getFollowingList', handleEvent);
    return () => {
      client.off('contact.getList');
      client.off('contact.getFollowerList');
      client.off('contact.getFollowingList');
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {client.contact.getContactList({ page: 1, size: 100 })}}
      >
        get contact List
      </button>
      <button
        onClick={() => {client.contact.getFollowerList({ page: 1, size: 100 })}}
      >
        get follower List
      </button>
      <button
        onClick={() => {client.contact.getFollowingList({ page: 1, size: 100 })}}
      >
        get following List
      </button>
    </>
  )
};
```

### sendFriend

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
        const data = await client.contact.sendFriend('target_userid', 'Can you follow me?');
        console.log(data);
      }}
    >
      send friend
    </button>
  );
};
```

### followOperation

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
          did_type: 'wallet_type'
          target_userid: 'userid',
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