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
  userid: string;
};
```

### signMetaMaskParams

```ts
export type signMetaMaskParams = {
  signContentURI: string;
  EthAddress?: string;
  nickname?: string;
  avatar_url?: string;
  avatar_base64?: string;
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

### InitOptions

```ts
export type initOptions = {
    connectUrl?: string | null;
    app_key?: string;
    env?: EnvTypes;
    tempPubkey?: string;
    didKey?: string;
};
```

### SendTempConnectOptions

```ts
export type SendTempConnectOptions = {
  dAppID: string;
  topicID: string;
  signatureTimestamp: number;
  dAppSignature: string;
};
```

### SignClientCallBackType

```ts
export type SignClientCallBackType = {
  type: 'connect' | 'messageStatus' | 'keys';
  data: any;
};
```

### getUserInfoParams

```ts
export type getUserInfoParams = {
    did_type: string;
    did_value: string;
    timestamp: number;
};
```

### EnvTypes

```ts
export type EnvTypes = 'dev' | 'test';
```

### ActiveChannelType

```ts
export type ActiveChannelType = {
  topic: string;
  topic_type: string;
};
```

### CreateRoomParams

```ts
export interface CreateRoomParams extends BaseParams {
  group_name?: string;
  avatar_url?: string;
  avatar_base64?: string;
}
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

## GetUserBindDidsParams

```ts
export interface GetUserBindDidsParams extends BaseParams {}
```

## UserBindDidParams

```ts
export interface UserBindDidParams extends BaseParams {
  provider_id: string;
  did_type: string;
  did_value: string;
}
```

## ChangeNotificationStatusParams

```ts
export interface ChangeNotificationStatusParams extends BaseParams {
  messages: string[];
  status: MessageStatus;
}
```

## NotifyResponse

```ts
export type NotifyResponse = {
  title: string;
  content: string;
  type: string;
  version: number;
  timestamp: number;
};
```

## CreateTopicParams

```ts
export interface CreateTopicParams extends BaseParams {
  topic_name: string;
}
```

## SubscribeTopicParams

```ts
export interface SubscribeTopicParams extends BaseParams {
  topicid: string;
}
```

## PublishTopicMessageParams

```ts
export interface PublishTopicMessageParams extends SubscribeTopicParams {
  title: string;
  content: string;
}
```

## GetTopicListParams

```ts
export interface GetTopicListParams extends PageParams, BaseParams {}
```

## SubscribeListType

```ts
export type SubscribeListType = {
  topicid: string;
  create_at: number;
};
```

## TopicListType

```ts
export interface TopicListType extends SubscribeListType {
  topic_name: string;
}
```

## WalletType

```ts
export type WalletType = "eth" | "starknet";
```

## WalletType

```ts
export type WalletSignRes = {
  sign: string;
  publicKey?: string;
};
```
## RegisterMetaMaskParams

```ts
export type RegisterMetaMaskParams = {
  password: string;
  userid: string;
  did_value: string;
  did_type?: WalletType;
  signContentURI?: string;
  nickname?: string;
  avatar_url?: string;
  avatar_base64?: string;
};
```
## SignMetaMaskParams

```ts
export type SignMetaMaskParams = {
  password: string;
  userid: string;
  did_value: string;
  did_type?: WalletType;
  mainPrivateKey?: string;
  mainPublicKey?: string;
  pubkeyExpiredTimestamp?: number;
};
```
