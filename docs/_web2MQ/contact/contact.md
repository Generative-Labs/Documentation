---
position: 5
---

# Contact

## Properties

| name          | type                                                               | Description            |
| ------------- | ------------------------------------------------------------------ | ---------------------- |
| contactList   | [UserInfo](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo)[] \| null      | channel list           |
| activeContact | [ChannelResponse](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo) \| null | current active channel |

## Methods

| name             | type     | Parameters Description                                  |
| ---------------- | -------- | ------------------------------------------------------- |
| setActiveContact | function | [UserInfo](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo)     |
| queryContacts    | function | [pageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams) |

## Properties

### contactList

> Contact List

#### get

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.contact.contactList;
```

#### Returns

> **Array**: [UserInfo](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo)[]

### activeContact

> Currently selected contact

#### get

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.contact.activeContact;
```

#### Returns

> **Object**: [UserInfo](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo)

## Methods

### setActiveContact()

> Sets the currently active Contace and notifies subscribers of updates

```typescript
* setActiveContact: (contact: UserInfo) => Promise<void>;
```

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.contact.setActiveContact(user: UserInfo);

// After the request is completed, the data will be synchronized to the client
console.log(client.contact.activeContact);
```

### queryContacts()

> Get contact list and notifies subscribers of updates

```typescript
* queryContacts(option?: PageParams): Promise<void>;
```

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.contact.queryContacts({
  page: 1,
  size: 20,
});

// After the request is completed, the data will be synchronized to the client
console.log(client.contact.contactList);
```
