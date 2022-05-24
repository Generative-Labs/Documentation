---
position: 6
---

## Usage

### Contact Attribute

| name          | type                                                     | Parameters Description |
| ------------- | -------------------------------------------------------- | ---------------------- |
| contactList   | [UserInfo](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo) [ ] \| null | contact list           |
| activeContact | [UserInfo](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo) \| null     | current active contact |

```typescript
export class Contact {
  contactList: UserInfo[] | null;
  activeContact: UserInfo | null;
}
```

### setActiveContact

> Sets the currently active Contace and notifies subscribers of updates

| name    | type                                         |
| ------- | -------------------------------------------- |
| contact | [UserInfo](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo) |

```typescript
setActiveContact = (contact: UserInfo) => {
    this._client.emit('contact.activeChange', {
      type: 'contact.activeChange',
      data: contact,
    });
  };
}
```

### queryContacts

> get contact list and notifies subscribers of updates

| name   | type                                             |
| ------ | ------------------------------------------------ |
| option | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams) |

```ts
 queryContacts(option?: PageParams) {
    const { data } = await this.getContacts(option || { page: 1, size: 10 });
    this.contactList = data;
    this._client.emit('contact.getList', { type: 'contact.getList', data });
  }
```

### getContacts

> get contact list API

| name     | type                                                       |
| -------- | ---------------------------------------------------------- |
| params   | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)           |
| response | { data: [UserInfo](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo) [ ] } |

```typescript
getContacts = (params: PageParams): Promise<{ data: UserInfo[] }> => {
  return request.get(`/contacts/${params.page}/${params.size}`);
};
```
