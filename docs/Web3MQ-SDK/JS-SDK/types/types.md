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

### BaseParams

```ts
export type BaseParams = {
  userid: string;
  web3mq_signature: string;
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
export type InitOptions = {
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
