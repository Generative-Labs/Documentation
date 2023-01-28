---
position: 7
---

# User

## Methods

| name             | type     | Parameters Description                                       | response                                                                          |
| ---------------- | -------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| searchUsers      | function | (walletAddress: string)                                      | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)         |
| getMyProfile     | function | none                                                         | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)         |
| updateMyProfile  | function | (nickname: string, avatar_url: string)                       | [UpdateMyProfileResponse](/docs/Web3MQ-SDK/JS-SDK/types/#updatemyprofileresponse) |
| getUserBindDids  | function | none                                                         | [UserBindDidIdsResponse](/docs/Web3MQ-SDK/JS-SDK/types/#userbinddididsresponse)[ ]  |
| userBindDid      | function | Omit<[UserBindDidParams](/docs/Web3MQ-SDK/JS-SDK/types/#userbinddidparams), 'userid' \| 'web3mq_signature' \| 'timestamp'> | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)         |
| getUserPermissions | function | none                                                       | [UserPermissionsType](/docs/Web3MQ-SDK/JS-SDK/types/#userpermissionstype)      |
| getTargetUserPermissions| function | (userid: string)                                      | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)         |
| updateUserPermissions| function | Pick<[UpdateUserPermissionsParams](/docs/Web3MQ-SDK/JS-SDK/types/#updateuserpermissionsparams), 'permissions'> | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)         |

### init Client

```tsx
import { useEffect, useState } from 'react';
import { Client, KeyPairsType } from "web3-mq";

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

### searchUsers

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
        onClick={async () => {
          const data = await client.user.searchUsers('walletAddress');
          console.log(data);
        }}>
        Search Users
      </button>
    </div>
  );
};
```

### getMyProfile

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