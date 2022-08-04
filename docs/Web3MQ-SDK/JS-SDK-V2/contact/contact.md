---
position: 6
---

# Contact

## Properties

| name                     | type                                                                                     | Description                  |
| ------------------------ | ---------------------------------------------------------------------------------------- | ---------------------------- |
| contactList              | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype) [ ] \| null | contact list                 |
| myFriendRequestList      | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype)[ ] \| null  | i send friend requests       |
| receiveFriendRequestList | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype)[ ] \| null  | receive friend requests list |

## Methods

| name                        | type     | Parameters Description                                                                       | response                                                                         |
| --------------------------- | -------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| searchContact               | function | (walletAddress: string)                                                                      | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype) [ ] |
| sendFriend                  | function | (target_userid: string)                                                                      | {code: 0, msg: 'ok'}                                                             |
| operationFriend             | function | (target_userid: string, action?: [ActionType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#actiontype)) | {code: 0, msg: 'ok'}                                                             |
| getContactList              | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK-V2/types/#pageparams)                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype)     |
| getMyFriendRequestList      | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK-V2/types/#pageparams)                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype)     |
| getReceiveFriendRequestList | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK-V2/types/#pageparams)                                   | [ContactListItemType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#contactlistitemtype)     |

## init Client

```tsx
import { Web3MQ } from 'web3-mq';
// sign MetaMask get keys
const keys = { PrivateKey, PublicKey };
// ws host url
const HostURL = '94.16.119.221:23333/messages';
// init client
const client = Web3MQ.Client.getInstance(keys, HostURL);
```

## getContactList & getMyFriendRequestList & getReceiveFriendRequestList

```tsx
export const App = () => {
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
export const App = () => {
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
export const App = () => {
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
export const App = () => {
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
