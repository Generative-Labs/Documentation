---
position: 7
---

# User

## Methods

| name             | type     | Parameters Description                                       | response                                                                          |
| ---------------- | -------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| searchUsers      | function | walletAddress: string                                        | Promise:[SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse) |
| getMyProfile     | function | none                                                         | Promise:[SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse) |
| updateMyProfile  | function | 1.nickname: string 2.avatar_url: string                      | Promise:[UpdateMyProfileResponse](/docs/Web3MQ-SDK/JS-SDK/types/#updatemyprofileresponse) |
| getUserBindDids  | function | none                                                         | Promise:[UserBindDidIdsResponse](/docs/Web3MQ-SDK/JS-SDK/types/#userbinddididsresponse)[ ]  |
| userBindDid      | function | [UserBindDidParams](/docs/Web3MQ-SDK/JS-SDK/types/#userbinddidparams) | Promise:[SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)         |
| getUserPermissions | function | none                                                       | Promise:[UserPermissionsType](/docs/Web3MQ-SDK/JS-SDK/types/#userpermissionstype) |
| getTargetUserPermissions| function | userid: string                                       | Promise:[SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse) |
| updateUserPermissions| function  | [UpdateUserPermissionsParams](/docs/Web3MQ-SDK/JS-SDK/types/#updateuserpermissionsparams) |Promise: [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)  |

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

### searchUsers
> Search for users by wallet address, support eth and starknet.

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
        const data = await client.user.searchUsers('walletAddress');
        console.log(data);
      }}>
      Search Users
    </button>
  );
};
```

### getMyProfile
> Get my profile.

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
        onClick={async () => {
          const data = await client.user.getMyProfile();
          console.log(data);
        }}>
        Get My Profile
      </button>
    </div>
  );
};
```

### updateMyProfile
> update my profile, such as nickname and avatar.

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
        onClick={async () => {
          const data = await client.user.updateMyProfile(
            'nickname',
            'avatar_url'
          );
          console.log(data);
        }}>
        Update My Profile
      </button>
    </div>
  );
};
```

### getUserBindDids
> Get my bound dids.

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
        onClick={async () => {
          const data = await client.user.getUserBindDids();
          console.log(data);
        }}>
        Get User Bind Dids
      </button>
    </div>
  );
};
```

### userBindDid
> Bound dids.

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
        onClick={async () => {
          const data = await client.user.userBindDid({
            provider_id: 'provider_id',
            did_type: 'did_type',
            did_value: 'did_value',
          });
          console.log(data);
        }}>
        User Bind Did
      </button>
    </div>
  );
};
```

### getUserPermissions
> Get my user permissions.

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
        onClick={async () => {
          const data = await client.user.getUserPermissions();
          console.log(data);
        }}>
        get my permissions
      </button>
    </div>
  );
};
```

### getTargetUserPermissions
> Get the user permissions of target users.

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
        onClick={async () => {
          const data = await client.user.getTargetUserPermissions('userid or wallet_address');
          console.log(data);
        }}>
        get other user permissions
      </button>
    </div>
  );
};
```

### updateUserPermissions
> Change my user permissions.

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
        onClick={async () => {
          const data = await client.user.updateUserPermissions({
            permissions: {
              'user: chat': {
                type: "enum",
                value: "public"
              }
            }
          });
          console.log(data);
        }}>
        update my permissions
      </button>
    </div>
  );
};
```