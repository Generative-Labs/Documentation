---
position: 7
---

# Type List

### EventTypes

| name      | type                                              |
| --------- | ------------------------------------------------- |
| EVENT_MAP | [EVENT_MAP](/docs/Web3MQ-SDK/JS-SDK/eventCenter/) |

```ts
import { EVENT_MAP } from './core/events';

export type EventTypes = 'all' | keyof typeof EVENT_MAP;
```

### ServiceResponse

```ts
export interface ServiceResponse {
  data: any;
  msg: string;
  code: number;
}
```

### PageParams

```ts
export interface PageParams {
  page: number;
  size: number;
}
```

## BaseParams

```ts
export type BaseParams = {
  userid: string;
  signature: string;
  timestamp: number;
};
```

### KeyPairsType

```ts
export type KeyPairsType = {
  PrivateKey: string;
  PublicKey: string;
};
```

### EthAccountType

```ts
export type EthAccountType = {
  address: string;
  balance: number;
  shortAddress: string;
};
```

### ActiveChannelType

```ts
export type ActiveChannelType = {
  topic: string;
  topic_type: string;
};
```

### ContactListItemType

```ts
export type ContactListItemType = {
  userid: string;
};
```

## ActionType

```ts
export type ActionType = 'agree';
```

## MessageStatus

```ts
export type MessageStatus = 'delivered' | 'read';
```

## changeMessageStatusParams

```ts
export interface changeMessageStatusParams extends BaseParams {
  topic: string;
  messages: string[];
  status: MessageStatus;
}
```

## MessageListItem

```ts
export type MessageListItem = {
  cipher_suite: string;
  from: string;
  topic: string;
  from_sign: string;
  messageid: string;
  payload_type: string;
  timestamp: number;
  message_status: {
    status: MessageStatus;
    timestamp: number;
  };
  payload: string;
  version: number;
};
```

## SearchUsersResponse

```ts
export type SearchUsersResponse = {
  userid: string;
  wallet_address: string;
  wallet_type: string;
};
```

## UpdateMyProfileResponse

```ts
export type UpdateMyProfileResponse = {
  userid: string;
  wallet_address: string;
  wallet_type: string;
  nickname: string;
  avatar_url: string;
};
```
