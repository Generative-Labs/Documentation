
---
position: 8
---

# Type List

### EventTypes

| name      | type                                       |
| --------- | ------------------------------------------ |
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

### GetRoomsParams

```ts
export interface GetRoomsParams {
  user_id?: string;
  is_opensea_coll?: boolean;
  opensea_coll_slug?: string;
  item_contract_address?: string;
}
```

### GetChatsByUserIdParams

```ts
export interface GetChatsByUserIdParams extends PageParams {
  page: number;
  size: number;
  user_id?: number;
}
```

### GetChatsByUserIdResponse

```ts
export interface GetChatsByUserIdResponse {
  created_at: string;
  creator: UserInfoInterface;
  creator_id: string;
  description: string;
  is_1v1: boolean;
  is_opensea_coll: boolean;
  latest_msg: MessageResponse;
  members: UserInfoInterface[];
  name: string;
  opensea_coll_cover: string;
  opensea_coll_name: string;
  opensea_coll_slug: string;
  room_id: string;
}
```

### GetMessageByIdParams

```ts
export interface GetMessageByIdParams {
  msg_id: string;
}
```

### CreateThreadsParams

```ts
export type CreateThreadsParams = {
  msg_id?: string;
  is_opensea_item_thread?: boolean;
  opensea_item_contract_address?: string;
  opensea_item_token_id?: string;
};
```

### GetThreadsParams

```ts
export interface GetThreadsParams extends PageParams {
  room_id: string;
  belong_to_thread_id: string;
}
```

### UserInfoInterface

```ts
export interface UserInfoInterface {
  created_at: number;
  eth_wallet_address: string;
  discord_username: string;
  facebook_username: string;
  instagram_username: string;
  opensea_username: string;
  twitter_username: string;
  twitter_avatar?: string;
  discord_avatar?: string;
  facebook_avatar?: string;
  instagram_avatar?: string;
  opensea_avatar?: string;
  nick_name: string;
  status: number;
  user_id: string;
}
```

### RoomResponse

```ts
export interface RoomResponse {
  created_at: number;
  creator: UserInfoInterface;
  description: string;
  members: UserInfoInterface[];
  name: string;
  room_id: string;
  opensea_coll_cover?: string;
  is_1v1: boolean;
}
```

### GetRoomInfoParams

```ts
export interface GetRoomInfoParams extends PageParams {
  room_id: string;
}
```

### AddMemberToRoomParams

```ts
export interface AddMemberToRoomParams {
  room_id: string;
  target_user_id: string;
}
```

### DelMemberFromRoomParams

```ts
export interface DelMemberFromRoomParams {
  room_id: string;
  member_id: string;
}
```

### GetMessageParams

```ts
export interface GetMessageParams extends PageParams {
  room_id: string;
}
```

### LoginRandomSecret

```ts
export interface LoginRandomSecret {
  wallet_address: string;
}
```

### LoginParams

```ts
export interface LoginParams {
  login_random_secret: string;
  signature: string;
  wallet_address: string;
  appid?: string;
}
```

### LoginResponse

```ts
export interface LoginResponse {
  access_token: string;
}
```

### LoginRandomSecretParams

```ts
export interface LoginRandomSecretParams {
  wallet_address: string;
}
```

### PlatformType

```ts
export type PlatformType = 'invite_code' | 'twitter';
```

### PLATFORM_ENUM

```ts
export enum PLATFORM_ENUM {
  TWITTER = 'twitter',
  DISCORD = 'discord',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  OPENSEA = 'opensea',
}
```

### RegisterParams

```ts
export interface RegisterParams {
  platform: PLATFORM_ENUM;
  user_name: string;
}
```

### UserInfo

```ts
export interface UserInfo {
  access_expired_at: number;
  created_at: number;
  discord_avatar: string;
  discord_username: string;
  eth_wallet_address: string;
  facebook_avatar: string;
  facebook_username: string;
  instagram_avatar: string;
  instagram_username: string;
  nick_name: string;
  opensea_avatar: string;
  opensea_username: string;
  refresh_expired_at: number;
  status: string;
  twitter_avatar: string;
  twitter_username: string;
  user_id: string;
}
```

### SearchFormatUserInfo

```ts
export interface SearchFormatUserInfo {
  avatar: string;
  userId: string;
  userName: string;
  createdAt: number;
}
```

### CreateContractsParams

```ts
export interface CreateContractsParams {
  contract_id?: string;
  erc20s: string[];
  amounts: number[];
  NFTs: any[];
  NFTIDs: any[];
  recipient_id?: string; // userid
  expiration: number;
}
```

### UpdateWalletAddressParams

```ts
export interface UpdateWalletAddressParams {
  user_id: string;
  wallet_address: string;
}
```

### GetOpenSeaAssetParams

```ts
export interface GetOpenSeaAssetParams {
  owner: string;
  offset: number;
  limit: number;
}
```

### GetOpenSeaAssetResponse

```ts
export interface GetOpenSeaAssetResponse {
  assets: any[];
}
```

### MessageResponse

```ts
export interface MessageResponse {
  at_user_ids: any[];
  belong_to_thread_id: string;
  created_at: number;
  from_uid: string;
  id: string;
  is_opensea_item_thread: boolean;
  is_thread: boolean;
  msg_contents: string;
  msg_type: 'text' | 'video';
  opensea_item_contract_address: string;
  opensea_item_description: string;
  opensea_item_image_url: string;
  opensea_item_name: string;
  opensea_item_token_id: string;
  reply_to_msg_id: string;
  to_room_id: string;
}
```

### ChannelResponse

```ts
export interface ChannelResponse {
  created_at: number;
  creator: UserInfoInterface[];
  creator_id: number;
  description: string;
  is_1v1: boolean;
  is_opensea_coll: boolean;
  latest_msg: MessageResponse;
  members?: UserInfoInterface[];
  name: string;
  opensea_coll_cover: string;
  opensea_coll_name: string;
  opensea_coll_slug: string;
  room_id: string;
}
```

### MsgType

```ts
export type MsgType = 'text';
```

### SendMessageData

```ts
export type SendMessageData = {
  from_uid: string;
  to: string;
  msg_contents: string;
  msg_type: MsgType;
  is_thread?: boolean;
  is_opensea_item_thread: boolean;
  opensea_item_contract_address: string;
  opensea_item_token_id: string;
  opensea_item_name: string;
  opensea_item_description: string;
  opensea_item_image_url: string;
  belong_to_thread_id: string;
  reply_to_msg_id: string;
  created_at: number;
  at_user_ids: any[];
};
```

### MembersItem

```ts
export type MembersItem = Record<string, UserInfoInterface[] | undefined>;
```

### ActiveMemberItem

```ts
export type ActiveMemberItem = Record<string, UserInfoInterface>;
```
