---
position: 7
---

# User

## Methods

| name            | type     | Parameters Description                 | response                                                                          |
| --------------- | -------- | -------------------------------------- | --------------------------------------------------------------------------------- |
| searchUsers     | function | (walletAddress: string)                | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)         |
| getMyProfile    | function | none                                   | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)         |
| updateMyProfile | function | (nickname: string, avatar_url: string) | [UpdateMyProfileResponse](/docs/Web3MQ-SDK/JS-SDK/types/#updatemyprofileresponse) |

## init Client

```tsx
import { Client, Register } from 'web3-mq';

// ws and request host url
const HostURL = 'us-west-2.web3mq.com';
// sign MetaMask get keys
const { PrivateKey, PublicKey } = await Register.signMetaMask(
  'https://www.web3mq.com', // your_domain_url
  HostURL
);
const keys = { PrivateKey, PublicKey };
// init client
const client = Client.getInstance(keys, HostURL);

console.log(client);

export const Child = () => {
  return (
    <div>
      <Child client={client} />
    </div>
  );
};
```

## SearchUsers

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

## GetMyProfile

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

## UpdateMyProfile

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
