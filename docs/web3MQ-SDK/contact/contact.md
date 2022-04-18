---
position: 6
---

## Usage

### Contact State

```typescript
export class Contact {
  _client: Web3MQ;
  contactList?: UserInfo[] | null;
  activeContact: UserInfo | null;
}
```

### Contact Function

```typescript
setActiveContact = (contact: UserInfo) => {
    this._client.emit('contact.activeChange', {
      type: 'contact.activeChange',
      data: contact,
    });
  };

  queryContacts(option?: PageParams) {
    this._client.emit('contact.getList', { type: 'contact.getList', data });
  }
}
```

### Contact API

```typescript
getContacts = (params: PageParams): Promise<{ data: UserInfo[] }> => {
  return request.get(`/contacts/${params.page}/${params.size}`);
};
```
