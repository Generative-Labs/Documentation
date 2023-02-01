---
position: 7
---

# Type List

### EventTypes

| name      | type                                              |
| --------- | ------------------------------------------------- |
| EVENT_MAP | [EVENT_MAP](/docs/Web3MQ-SDK/JS-SDK/eventCenter/) |

```ts
import { EVENT_MAP } from "./core/events";

export type EventTypes = "all" | keyof typeof EVENT_MAP;
```

### ServiceResponse
| name       | type           | format     | desc                        | eg           |
| ---------- | -------------- | ---------- | --------------------------- | ------------ |
| code       |  object        |     -      | response status code        |  0           |
| data       |  string        |     -      | response body               | {user: xx}   |
| msg        |  number        |     -      | response status description |  "ok"        |

### PageParams
| name       | type           | format     | desc                          | eg           |
| ---------- | -------------- | ---------- | ----------------------------- | ------------ |
| page       |  number        |    -       | current page number           |  1           |
| size       |  number        |    -       | number of data items per page |  20          |

### BaseParams
| name             | type           | format     | desc                        | eg           |
| ---------------- | -------------- | ---------- | --------------------------- | ------------ |
| timestamp        |  number        |     -      | time stamp                  |  Date.now()  |
| userid           |  string        |     -      | id of the current user      |  'user: xxx' |
| web3mq_signature |  string        | ed25519 private key signing(userid + timestamp) | web3mq signature content    |              |

### KeyPairsType
| name         | type           | format     | desc                                      | eg           |
| ------------ | -------------- | ---------- | ----------------------------------------- | ------------ |
| PrivateKey   |  string        |    -       | temporary private key of the current user |              |
| PublicKey    |  string        |    -       | temporary public key of the current user  |              |
| userid       |  string        |    -       | id of the current user                    |  'user: xxx' |

<!-- ```ts
export type signMetaMaskParams = {
  signContentURI: string;
  EthAddress?: string;
  nickname?: string;
  avatar_url?: string;
  avatar_base64?: string;
};
``` -->

### AccountType
| name          | type           | format     | desc                                       | eg           |
| ------------- | -------------- | ---------- | ------------------------------------------ | ------------ |
| address       |  string        |     -      | wallet address of the current user         | '0x000000'   |
| balance       |  number        |     -      | current user's wallet balance              |  0           |
| shortAddress  |  string        |     -      | the current user wallet address is omitted |  '0x00...00' |

### InitOptions
| name          | type           | format           | desc                                                                                                                  | eg                                      |
| ------------- | -------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------   | --------------------------------------- |
| app_key       |  string        |       -          | temporary authorization key obtained by applying                                                                      |                                         |
| connectUrl    |  string \| null |       -          | takes in a valid endpoint url as input, when this paramter is given, client will always connect to that specific node | `https://testnet-ap-jp-2.web3mq.com`   |
| didKey        |  string        | didType:didvalue | wallet type and wallet address collection                                                                             |  'eth:0x000000'                         |
| env           |  string        |       -          | network environment                                                                                                   |  'dev' or 'test'                        |
| tempPubkey    |  string        |       -          | temporary public key of the current user                                                                              |                                         |

### SendTempConnectOptions
<!-- | name               | type           | format     | desc                                       | eg           |
| ------------------ | -------------- | ---------- | ------------------------------------------ | ------------ |
| dAppID             |  string        |     -      | wallet address of the current user         | '0x000000'   |
| dAppSignature      |  string        |     -      | current user's wallet balance              |  0           |
| signatureTimestamp |  number        |     -      | the current user wallet address is omitted |  '0x00...00' |
| topicID            |  string        |     -      | the current user wallet address is omitted |  '0x00...00' | -->
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
  type: "connect" | "messageStatus" | "keys";
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
export type EnvTypes = "dev" | "test";
```

### ChannelItemType

```ts
export type ChannelItemType = {
  avatar_url: string;
  chat_name: string;
  chat_type: string;
  chatid: string;
  topic: string;
  topic_type: string;
  lastMessage?: string;
  updatedAt?: string;
  unread?: number;
};
```

### CreateRoomParams

```ts
export interface CreateRoomParams {
  groupName?: string;
  groupid?: string;
  avatarUrl?: string;
  avatarBase64?: string;
  permissions?: GroupPermissions;
}
```

### UpdateRoomListParams 

```tsx
export interface UpdateRoomListParams {
  chatid: string,
  chat_type: string
  topic: string,
  topic_type: string,
}
```

### GroupPermissions

```ts
export type GroupPermissions = {
  [key: string]: {
    type: string;
    value: "ceator_invite_friends" | "public" | "nft_validation";
  };
};
```

### UpdateGroupPermissionsParams

```ts
export interface UpdateGroupPermissionsParams {
  groupid: string;
  permissions: GroupPermissions;
}
```

### UserPermissionsType

```ts
export type UserPermissionsType = Record<
  string,
  { type: string; value: boolean }
>;
```

### ContactListItemType

```ts
export type ContactListItemType = {
  avatar_url: string;
  follow_status: FollowStatus;
  nickname: string;
  permissions: UserPermissionsType;
  userid: string;
  wallet_address: string;
  wallet_type: WalletType;
};
```

### FollowOperationParams

```ts
export interface FollowOperationParams {
  address: string;
  action: "follow" | "cancel";
  didType: WalletType;
  targetUserid: string;
}
```

### PublishNotificationToFollowersParams

```ts
export interface PublishNotificationToFollowersParams {
  content: string;
  title: string;
}
```

### ActionType

```ts
export type ActionType = "agree";
```

### MessageStatus

```ts
export type MessageStatus = "delivered" | "read";
```

### changeMessageStatusParams

```ts
export interface changeMessageStatusParams extends BaseParams {
  topic: string;
  messages: string[];
  status: MessageStatus;
}
```

### MessageListItem

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

### SearchUsersResponse

```ts
export type SearchUsersResponse = {
  userid: string;
  wallet_address: string;
  wallet_type: string;
};
```

### UpdateMyProfileResponse

```ts
export type UpdateMyProfileResponse = {
  userid: string;
  wallet_address: string;
  wallet_type: string;
  nickname: string;
  avatar_url: string;
};
```

### GetUserBindDidsParams

```ts
export interface GetUserBindDidsParams extends BaseParams {}
```

### UserBindDidParams

```ts
export interface UserBindDidParams {
  did_type: string;
  did_value: string;
  did_action?: string;
  did_content?: string;
  provider_id: string;
}
```

### UserBindDidIdsResponse

```ts
export type UserBindDidIdsResponse = Pick<
  UserBindDidParams,
  "did_type" | "did_value" | "provider_id"
> & {
  metadata: any;
};
```

### UpdateUserPermissionsParams

```ts
export interface UpdateUserPermissionsParams {
  permissions: UserPermissionsType;
}
```

### ChangeNotificationStatusParams

```ts
export interface ChangeNotificationStatusParams extends BaseParams {
  messages: string[];
  status: MessageStatus;
}
```

### NotifyResponse

```ts
export type NotifyResponse = {
  title: string;
  content: string;
  type: string;
  version: number;
  timestamp: number;
};
```

### CreateTopicParams

```ts
export interface CreateTopicParams extends BaseParams {
  topic_name: string;
}
```

### SubscribeTopicParams

```ts
export interface SubscribeTopicParams extends BaseParams {
  topicid: string;
}
```

### PublishTopicMessageParams

```ts
export interface PublishTopicMessageParams extends SubscribeTopicParams {
  title: string;
  content: string;
}
```

### GetTopicListParams

```ts
export interface GetTopicListParams extends PageParams, BaseParams {}
```

### SubscribeListType

```ts
export type SubscribeListType = {
  topicid: string;
  create_at: number;
};
```

### TopicListType

```ts
export interface TopicListType extends SubscribeListType {
  topic_name: string;
}
```

### TopicMessageType

```ts
export type TopicMessageType = {
  content: string
  topicid: string;
  title: string;
};
```

### CreateTopicResponse

```ts
export type CreateTopicResponsee = {
  topicid: string;
};
```
### WalletType

```ts
export type WalletType = "eth" | "starknet";
```

### WalletSignRes

```ts
export type WalletSignRes = {
  sign: string;
  publicKey?: string;
};
```

### RegisterMetaMaskParams

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

### SignMetaMaskParams

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

### GetMainKeypairParams

```ts
type GetMainKeypairParams = {
  password: string;
  did_type: WalletType;
  did_value: string;
};
```

### GetSignContentResponse

```ts
export type GetSignContentResponse = {
  signContent: string;
};
```

### QrCodeRegisterParams

```ts
type QrCodeRegisterParams = {
  userid: string;
  signature: string;
  did_pubkey?: string;
  nickname?: string;
  avatar_url?: string;
};
```

### QrCodeLoginParams

```ts
type QrCodeLoginParams = {
  userid: string;
  did_type: string;
  did_value: string;
  mainPrivateKey: string;
  mainPublicKey: string;
  password?: string;
  pubkeyExpiredTimestamp?: number;
};
```

### SignClientCallBackType

```ts
type SignClientCallBackType = {
  type: "createQrcode" | "connect" | "messageStatus" | "keys" | "dapp-connect";
  data: any;
};
```

### DappConnectSignParams

```ts
type DappConnectSignParams = {
  signContent: string;
  didValue: string;
  signType: string;
};
```

### Web3MQBridgeOptions

```ts
type Web3MQBridgeOptions = {
  wsUrl: string;
  dAppID: string;
  nodeID?: string;
};
```

### LoginByKeysParams

```ts
type LoginByKeysParams = {
  mainPrivateKey: string;
  mainPublicKey: string;
  didType: WalletType;
  didValue: string;
  userid: string;
  password: string;
  pubkeyExpiredTimestamp?: number;
};
```

### RegisterBySignParams

```ts
type RegisterBySignParams = {
  userid: string;
  didValue: string;
  mainPublicKey: string;
  signature: string;
  did_pubkey?: string;
  didType?: WalletType;
  signContentURI?: string;
  nickname?: string;
  avatar_url?: string;
  avatar_base64?: string;
};
```

### RegisterApiResponse

```ts
type RegisterApiResponse = {
  did_type: string;
  did_value: string;
  userid: string;
};
```

### LoginResponse

```ts
type LoginResponse = {
  tempPrivateKey: string;
  tempPublicKey: string;
  mainPrivateKey: string;
  mainPublicKey: string;
  pubkeyExpiredTimestamp: number;
};
```

### GetUserInfoResponse

```ts
type GetUserInfoResponse = { userid: string; userExist: boolean };
```

### MainKeypairType

```ts
type MainKeypairType = {
  publicKey: string;
  secretKey: string;
};
```

### ResetPasswordParams

```ts
type ResetPasswordParams = {
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

### ResetPasswordResponse

```ts
type ResetPasswordResponse = {
  mainPrivateKey: string;
  mainPublicKey: string;
};
```
