---
position: 7
---

# User

## Methods

| name            | type     | Parameters Description                                        | response                                                                          |
| --------------- | -------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| searchUsers     | function | (walletAddress: string)                                       | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)         |
| getMyProfile    | function | none                                                          | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)         |
| updateMyProfile | function | (nickname: string, avatar_url: string)                        | [UpdateMyProfileResponse](/docs/Web3MQ-SDK/JS-SDK/types/#updatemyprofileresponse) |
| getUserBindDids | function | none                                                          |                                                                                   |
| userBindDid     | function | ( { provider_id: string, did_type: string,did_value: string}) |                                                                                   |

## init Client

```tsx
import { Client } from 'web3-mq';
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
});
// 2. sign MetaMask get keys
const { PrivateKey, PublicKey, userid } = await Client.register.signMetaMask({
  signContentURI: 'https://www.web3mq.com', // your signContent URI
  EthAddress: 'your eth address', // *Not required*  your eth address, if not use your MetaMask eth address
});
const keys = { PrivateKey, PublicKey, userid };
// 3. You must ensure that the Client.init initialization is complete and that you have a key pair
const client = Client.getInstance(keys);

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

---

## GetUserBindDids

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

## UserBindDid

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
