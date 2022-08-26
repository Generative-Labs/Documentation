---
position: 6
---

# Contact

## Properties

| name                     | type                                                                                  | Description                  |
| ------------------------ | ------------------------------------------------------------------------------------- | ---------------------------- |
| contactList              | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype) [ ] \| null | contact list                 |
| myFriendRequestList      | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)[ ] \| null  | i send friend requests       |
| receiveFriendRequestList | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)[ ] \| null  | receive friend requests list |

## Methods

| name                        | type     | Parameters Description                                                                    | response                                                                      |
| --------------------------- | -------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| searchContact               | function | (walletAddress: string)                                                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype) [ ] |
| sendFriend                  | function | (target_userid: string)                                                                   | {code: 0, msg: 'ok'}                                                          |
| operationFriend             | function | (target_userid: string, action?: [ActionType](/docs/Web3MQ-SDK/JS-SDK/types/#actiontype)) | {code: 0, msg: 'ok'}                                                          |
| getContactList              | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)     |
| getMyFriendRequestList      | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)     |
| getReceiveFriendRequestList | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK/types/#contactlistitemtype)     |

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

## getContactList & getMyFriendRequestList & getReceiveFriendRequestList

```tsx
import { useEffect } from 'react';
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'contact.getList') {
      console.log(client.contact.contactList);
    }
    if (event.type === 'contact.friendList') {
      console.log(client.contact.myFriendRequestList);
    }
    if (event.type === 'contact.reviceList') {
      console.log(client.contact.receiveFriendRequestList);
    }
  };

  useEffect(() => {
    client.on('contact.getList', handleEvent);
    client.on('contact.friendList', handleEvent);
    client.on('contact.reviceList', handleEvent);
    return () => {
      client.off('contact.getList');
      client.off('contact.friendList');
      client.off('contact.reviceList');
    };
  }, []);

  useEffect(() => {
    client.contact.getContactList({ page: 1, size: 100 });
    client.contact.getMyFriendRequestList({ page: 1, size: 100 });
    client.contact.getReceiveFriendRequestList({ page: 1, size: 100 });
  }, []);
};
```

## SearchContact

```tsx
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  return (
    <button
      onClick={async () => {
        const data = await client.contact.searchContact('walletAddress');
        console.log(data);
      }}>
      search contact
    </button>
  );
};
```

## SendFriend

```tsx
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;
  return (
    <button
      onClick={async () => {
        const data = await client.contact.sendFriend('target_userid');
        console.log(data);
      }}>
      send friend
    </button>
  );
};
```

## OperationFriend

```tsx
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  return (
    <button
      onClick={async () => {
        const data = await client.contact.operationFriend(
          'target_userid',
          'agree'
        );
        console.log(data);
      }}>
      send friend
    </button>
  );
};
```
