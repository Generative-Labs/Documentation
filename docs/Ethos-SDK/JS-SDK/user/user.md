---
position: 7
---

# User

## Methods

| name             | type     | Parameters Description                                       | response                                                                          |
| ---------------- | -------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| searchUsers      | function | walletAddress: string                                        | Promise:[SearchUsersResponse](/docs/Ethos-SDK/JS-SDK/types/#searchusersresponse) |
| getMyProfile     | function | none                                                         | Promise:[SearchUsersResponse](/docs/Ethos-SDK/JS-SDK/types/#searchusersresponse) |
| updateMyProfile  | function | 1.nickname: string 2.avatar_url: string                      | Promise:[UpdateMyProfileResponse](/docs/Ethos-SDK/JS-SDK/types/#updatemyprofileresponse) |
| getUserBindDids  | function | none                                                         | Promise:[UserBindDidIdsResponse](/docs/Ethos-SDK/JS-SDK/types/#userbinddididsresponse)[ ]  |
| userBindDid      | function | [UserBindDidParams](/docs/Ethos-SDK/JS-SDK/types/#userbinddidparams) | Promise:[SearchUsersResponse](/docs/Ethos-SDK/JS-SDK/types/#searchusersresponse)         |
| getUserPermissions | function | none                                                       | Promise:[UserPermissionsType](/docs/Ethos-SDK/JS-SDK/types/#userpermissionstype) |
| getTargetUserPermissions| function | userid: string                                       | Promise:[SearchUsersResponse](/docs/Ethos-SDK/JS-SDK/types/#searchusersresponse) |
| updateUserPermissions| function  | [UpdateUserPermissionsParams](/docs/Ethos-SDK/JS-SDK/types/#updateuserpermissionsparams) |Promise: [SearchUsersResponse](/docs/Ethos-SDK/JS-SDK/types/#searchusersresponse)  |

## Permission
> User permission currently only has `user: chat` rule, which Indicates the setting of user chat permission. `user: chat` rule has `public`, `follower`, `following`, `friends` values, and its value type is 'enum'
- 1.`public`: Everyone can send me messages.
- 2.`follower`: Only those who follow me can send messages to me.
- 3.`following`: Only those I follow can send me messages.
- 4.`friends`: Only those who follow each other can send me messages.

### UserChatPermissionsType
| name   | type                                        | format     | desc                                              | eg              |
| ------ | ------------------------------------------- | ---------- | ------------------------------------------------- | --------------  |
| type   | "enum"                                      |     -      | Chat permission type in user permissions          | "enum"          |
| value  | "public"\|"follower"\|"following"\|"friends"|     -      | Chat permission value in user permissions         | "public"        |

### UserPermissionsType
| name                 | type                                                                              | format     | desc                               | eg                        |
| -------------------- | --------------------------------------------------------------------------------- | ---------- | ---------------------------------- | ------------------------  |
| user: chat           | [UserChatPermissionsType](/docs/Ethos-SDK/JS-SDK/user/#userchatpermissionstype)  |     -      | chat permission in user permisson  | {'user: chat': {type: "enum",value: "public"}} |

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