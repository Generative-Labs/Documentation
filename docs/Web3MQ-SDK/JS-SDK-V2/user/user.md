---
position: 7
---

# User

## Methods

| name            | type     | Parameters Description                 | response                                                                             |
| --------------- | -------- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| searchUsers     | function | (walletAddress: string)                | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK-V2/types/#searchusersresponse)         |
| getMyProfile    | function | none                                   | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK-V2/types/#searchusersresponse)         |
| updateMyProfile | function | (nickname: string, avatar_url: string) | [UpdateMyProfileResponse](/docs/Web3MQ-SDK/JS-SDK-V2/types/#updatemyprofileresponse) |

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

## SearchUsers

```tsx
export const App = () => {
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

## GetMyProfile

```tsx
export const App = () => {
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

## UpdateMyProfile

```tsx
export const App = () => {
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
