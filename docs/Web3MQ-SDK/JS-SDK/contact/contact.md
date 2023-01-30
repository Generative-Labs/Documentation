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

### init Client
> A combined web3mq-react example, and create web3mq client before chat.

```tsx
import { useMemo, useState } from 'react';
import {Client, KeyPairsType, SignClientCallBackType, WalletType} from '@web3mq/client';
import {LoginModal} from '@web3mq/react-components';

const useLogin = () => {
  const hasKeys = useMemo(() => {
    const PrivateKey = localStorage.getItem('PRIVATE_KEY') || '';
    const PublicKey = localStorage.getItem('PUBLIC_KEY') || '';
    const userid = localStorage.getItem('userid') || '';
    if (PrivateKey && PublicKey && userid) {
      return { PrivateKey, PublicKey, userid };
    }
    return null;
  }, []);

  const [keys, setKeys] = useState<KeyPairsType | null>(hasKeys);
  const [fastestUrl, setFastUrl] = useState<string | null>(null);
  const [userAccount, setUserAccount] = useState<{
    userid: string;
    address: string;
  }>();

  const init = async () => {
    const tempPubkey = localStorage.getItem('PUBLIC_KEY') || '';
    const didKey = localStorage.getItem('DID_KEY') || '';
    const fastUrl = await Client.init({
      connectUrl: localStorage.getItem('FAST_URL'),
      app_key: 'vAUJTFXbBZRkEDRE',
      env: 'dev',
      didKey,
      tempPubkey,
    });
    localStorage.setItem('FAST_URL', fastUrl);
    setFastUrl(fastUrl);
  };

  const logout = () => {
    localStorage.setItem('PRIVATE_KEY', '')
    localStorage.setItem('PUBLIC_KEY', '')
    localStorage.setItem('DID_KEY', '')
    localStorage.setItem('userid', '')
    setKeys(null);
  };

  const handleLoginEvent = (eventData: any) => {
    if (eventData.data) {
      if (eventData.type === 'login') {
        const {
          privateKey,
          publicKey,
          tempPrivateKey,
          tempPublicKey,
          didKey,
          userid,
          address,
          pubkeyExpiredTimestamp,
        } = eventData.data;
        localStorage.setItem('userid', userid);
        localStorage.setItem('PRIVATE_KEY', tempPrivateKey);
        localStorage.setItem('PUBLIC_KEY', tempPublicKey);
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);
        localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
        localStorage.setItem(`DID_KEY`, didKey);
        localStorage.setItem('PUBKEY_EXPIRED_TIMESTAMP', String(pubkeyExpiredTimestamp));
        setKeys({
          PrivateKey: tempPrivateKey,
          PublicKey: tempPublicKey,
          userid,
        });
      }
      if (eventData.type === 'register') {
        const { privateKey, publicKey, address } = eventData.data;
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);
        localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
      }
    }
  };

  return { keys, fastestUrl, init, handleLoginEvent, logout };
};

export const App = () => {
  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();
  useEffect(()=> {
    init();
  }, []);
  if (!fastestUrl) return null;
  if (!keys) return (
    <LoginModal 
      handleLoginEvent={handleLoginEvent}
      appType={AppTypeEnum.pc}
    />
  );
  // 3. You must ensure that the Client.init initialization is complete and that you have a key pair
  const client = Client.getInstance(keys);
  return (
    <Child client={client} />
  )
}
```

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