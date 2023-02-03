---
position: 7
---

# Type List

### EventTypes
| name       | type                                                      | format     | desc                        | eg               |
| ---------- | --------------------------------------------------------- | ---------- | --------------------------- | ---------------- |
| EventTypes | "all" \| [EVENT_MAP](/docs/Web3MQ-SDK/JS-SDK/eventCenter/)|     -      | event types in event center | "channel.getList"|

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

### KeyPairsType
| name         | type           | format     | desc                                      | eg           |
| ------------ | -------------- | ---------- | ----------------------------------------- | ------------ |
| PrivateKey   |  string        |    -       | temporary private key of the current user |              |
| PublicKey    |  string        |    -       | temporary public key of the current user  |              |
| userid       |  string        |    -       | id of the current user                    |  'user: xxx' |

### DidType
| name        | type                 | format     | desc                        | eg                        |
| ----------- | -------------------- | ---------- | --------------------------- | ------------------------  |
| didType     | "eth" \| "starknet"  |     -      | did type                    |  "eth" or "starknet"      |

### DidValue
| name        | type                 | format     | desc                                | eg                        |
| ----------- | -------------------- | ---------- | ----------------------------------- | ------------------------  |
| didValue    | string               |     -      | address corresponding to `didType`  |  "0x000000"               |

### WalletType
| name        | type                 | format     | desc                        | eg                        |
| ----------- | -------------------- | ---------- | --------------------------- | ------------------------  |
| WalletType  | "eth" \| "starknet"  |     -      | wallet address              |  "eth" or "starknet"      |

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
| didKey        |  string        | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype):[didvalue](/docs/Web3MQ-SDK/JS-SDK/types/#didvalue) | didType and didValue collection                                                                             |  'eth:0x000000'                         |
| env           |  [EnvTypes](/docs/Web3MQ-SDK/JS-SDK/types/#envtypes) |       -          | network environment                                                                                                   |  'test'                           |
| tempPubkey    |  string        |       -          | temporary public key of the current user                                                                              |                                         |

### SendTempConnectOptions
| name               | type           | format     | desc                                       | eg           |
| ------------------ | -------------- | ---------- | ------------------------------------------ | ------------ |
| dAppID             |  string        |     -      | dApp id of user                            |      -       |
| topicID            |  string        |     -      | Logo for connection                        |      -       |

### SignClientCallBackType
| name     | type                                   | format     | desc                        | eg           |
| -------- | -------------------------------------- | ---------- | --------------------------- | ------------ |
| data     | "success"\|"error"\|"close"\|object    |     -      | Callback return data        |  "success"   |
| type     | "createQrcode" \| "connect" \| "messageStatus" \| "keys" \| "dapp-connect" |     -      | Callback return type        | "connect"    |

### GetUserInfoParams
| name       | type                                               | format     | desc                                  | eg                        |
| ---------- | -------------------------------------------------- | ---------- | ------------------------------------- | ------------------------  |
| didType    | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype)  |     -      | did type                              | "eth"                     |
| didValue   | [didvalue](/docs/Web3MQ-SDK/JS-SDK/types/#didvalue)|     -      | did value,for example, wallet address | "0x000000"                |
| timestamp  |  number                                            |     -      | time stamp                            | Date.now()                |

### EnvTypes
| name       | type                                   | format     | desc                        | eg                        |
| ---------- | -------------------------------------- | ---------- | --------------------------- | ------------------------  |
| EnvTypes   |  "dev" \| "test"                       |     -      | network environment         | "test"                    |

### ChannelItemType
| name         | type                      | format     | desc                                              | eg                        |
| ------------ | ------------------------- | ---------- | ------------------------------------------------- | ------------------------  |
| avatar_url   |  string                   |     -      | current channel avatar resources                  | `https://www.xxx.com`     |
| chat_name    |  string                   |     -      | current channel name                              | "channel name"            |
| chat_type    |  string                   |     -      | current channel type                              | "user" or "group"         |
| chatid       |  string                   |     -      | current channel id                                | "user: xxx" or "group:xxx"|
| topic        |  string                   |     -      | current channel id                                | "user: xxx" or "group:xxx"|
| topic_type   |  string                   |     -      | current channel type                              | "user" or "group"         |
| lastMessage  |  string                   |     -      | last message in the current channel               | "content of last message" |
| updatedAt    |  string                   |     -      | time of the last message in the current chat room | "2023-02-01 00:00:00"     |
| unread       |  number                   |     -      | number of unread messages in the current chat room|  0                        |

### CreateRoomParams
| name         | type                      | format     | desc                                              | eg                        |
| ------------ | ------------------------- | ---------- | ------------------------------------------------- | ------------------------  |
| avatarUrl    |  string                   |     -      | select the avatar resource for the group channel  | `https://www.xxx.com`     |
| groupid      |  string                   |     -      | customize a group channel id                      | "group: xxx"              |
| groupName    |  string                   |     -      | enter the group channel name                      | "channel name"            |
| permissions  | [GroupPermissions](/docs/Web3MQ-SDK/JS-SDK/types/#grouppermissions)|     -      |  group channel permissions      | {"group:join": {type: "enum",value: "public"}}| 
### UpdateRoomListParams 
| name         | type             | format     | desc                                              | eg                        |
| ------------ | ---------------- | ---------- | ------------------------------------------------- | ------------------------  |
| chatid       |  string          |     -      | the id of the chat room to be updated             | "group:xx" or "user:xx"   |
| chat_type    |  string          |     -      | the type of the chat room to be updated           | "group" or "user"         |
| topic        |  string          |     -      | the id of the chat room to be updated             | "group:xx" or "user:xx"   |
| topic_type   |  string          |     -      | the type of the chat room to be updated           | "group" or "user"         |

### UpdateGroupPermissionsParams

| name         | type             | format     | desc                                              | eg                        |
| ------------ | ---------------- | ---------- | ------------------------------------------------- | ------------------------  |
| groupid      |  string          |     -      | group channel id                                  | "group:xx"                |
| permissions  | GroupPermissions |     -      | group channel permissions                         | {"group:join": {type: "enum",value: "public"}}  |

### GroupPermissions
| name              | type             | format     | desc                                              | eg                        |
| ----------------- | ---------------- | ---------- | ------------------------------------------------- | ------------------------  |
| GroupPermissions  | Record<string, { type: string; value: "ceator_invite_friends" \| "public" \| "nft_validation" }>  |     -      | Group channel permission type      | {"group:join": {type: "enum",value: "public"}} |


### UserPermissionsType
| name                 | type             | format     | desc                                              | eg                        |
| -------------------- | ---------------- | ---------- | ------------------------------------------------- | ------------------------  |
| UserPermissionsType  | Record<string, { type: string; value: boolean}>  |     -      | user channel permission type      | {'user: chat': {type: "enum",value: "public"}} |


### ContactListItemType
| name          | type                      | format     | desc                                              | eg                        |
| ------------- | ------------------------- | ---------- | ------------------------------------------------- | ------------------------  |
| avatar_url    |  string                   |     -      | contactL avatar resources                         | `https://www.xxx.com`     |
| follow_status |  [FollowStatus](/docs/Web3MQ-SDK/JS-SDK/types/#followstatus)|     -      | follow status with contact       | "channel name"            |
| nickname      |  string                   |     -      | nickname of contact                               |                            |
| permissions   |  [UserPermissionsType](/docs/Web3MQ-SDK/JS-SDK/types/#userpermissionstype)  |     -      | permissions of contact    | {'user: chat': {type: "enum",value: "public"}}|
| userid        |  string                   |     -      | userid of contact                                 | "user: xxx"               |
| wallet_address|  string                   |     -      | wallet address of contact                         | "0x000000"                |
| wallet_type   |  [WalletType](/docs/Web3MQ-SDK/JS-SDK/types/#wallettype) |     -      | wallet type of contact                | "eth" or "starknet" |

### FollowStatus
| name          | type                                       | format     | desc                                              | eg                        |
| ------------- | ------------------------------------------ | ---------- | ------------------------------------------------- | ------------------------  |
| FollowStatus  | 'following' \| 'follower' \| 'follow_each' |     -      |  follow status type                               | "follow_each"             |

### FollowOperationParams
| name          | type                                                    | format     | desc                                              | eg                        |
| ------------- | ------------------------------------------------------- | ---------- | ------------------------------------------------- | ------------------------  |
| address       | string                                                  |     -      |  wallet address                                   | "0x000000"                |
| action        | "follow" \| "cancel"                                    |     -      |  follow or unfollow                               | "follow"                  |
| didType       | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype)       |     -      |  did type                                         | "eth"                     |
| targetUserid  | string                                                  |     -      |  userid of the target user                        | "user:xxx"                |

### PublishNotificationToFollowersParams
| name         | type             | format     | desc              | eg                        |
| ------------ | ---------------- | ---------- | ----------------- | ------------------------  |
| content      |  string          |     -      | published content |        -                  |
| title        |  string          |     -      | published title   |        -                  |

<!-- ### ActionType

```ts
export type ActionType = "agree";
``` -->

### MessageStatus
| name         | type                  | format     | desc              | eg              |
| ------------ | --------------------- | ---------- | ----------------- | --------------  |
| MessageStatus| "delivered" \| "read" |     -      | message status    |   "delivered"   |

### MessageListItem
| name           | type                  | format     | desc                   | eg  |
| -------------- | --------------------- | ---------- | ---------------------- | --- |
| cipher_suite   | string                |     -      | cipher                 |  -  |
| from           | string                |     -      | message sender user id |  -  |
| topic          | string                |     -      | current channel type   |  -  |
| from_sign      | string                |     -      | from signature         |  -  |
| messageid      | string                |     -      | message id             |  -  |
| payload_type   | string                |     -      | payload type           |  -  |
| timestamp      | number                |     -      | time stamp             |  -  |
| message_status | [MessageStatus](docs/Web3MQ-SDK/JS-SDK/types/#messagestatus) |     -      | message status    |  -  |
| payload        | string                |     -      | payload base64 encode content|  -  |
| versions       | number                |     -      | versions               |  -  |

### SearchUsersResponse
| name           | type      | format     | desc                        | eg                        |
| -------------- | --------- | ---------- | --------------------------- | ------------------------  |
| userid         |  string   |     -      | userid of user              | "user: xxx"               |
| wallet_address |  string   |     -      | wallet address              | "0x000000"                |
| wallet_type    | [WalletType](/docs/Web3MQ-SDK/JS-SDK/types/#wallettype)  |     -      | wallet type              | "eth" or "starknet"           |


### UpdateMyProfileResponse
| name           | type      | format     | desc                        | eg                        |
| -------------- | --------- | ---------- | --------------------------- | ------------------------  |
| avatar_url     |  string   |     -      | avatar resource             | `https://www.xxx.com`     |
| nickname       |  string   |     -      | nickname                    |      -                    |
| userid         |  string   |     -      | userid of user              | "user:xxx"                |
| wallet_address |  string   |     -      | wallet address              | "0x000000"                |
| wallet_type    | [WalletType](/docs/Web3MQ-SDK/JS-SDK/types/#wallettype)   |     -      | userid of user              | "eth" or "starknet"       |

### UserBindDidParams
| name           | type                                                | format     | desc                                  | eg                        |
| -------------- | --------------------------------------------------- | ---------- | ---------------------------------- -- | ------------------------  |
| did_type       | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype)   |     -      | did type                              |    "eth"                  |
| did_value      | [didvalue](/docs/Web3MQ-SDK/JS-SDK/types/#didvalue) |     -      | did value,for example, wallet address |   "0x000000"              |
| did_action     |  string                                             |     -      | action of did                         |       -                   |
| did_content    |  string                                             |     -      | content of did                        |       -                   |
| provider_id    |  string                                             |     -      | provider id                           |       -                   |

### UserBindDidIdsResponse
| name           | type                                                | format     | desc                                  | eg                        |
| -------------- | --------------------------------------------------- | ---------- | ------------------------------------- | ------------------------  |
| did_type       | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype)   |     -      | did type                              |    "eth"                  |
| did_value      | [didvalue](/docs/Web3MQ-SDK/JS-SDK/types/#didvalue) |     -      | did value,for example, wallet address |   "0x000000"              |
| provider_id    |  string                                             |     -      | provider id                           |       -                   |
| metadata       |  any                                                |     -      |  metadata                             |       -                   |

### UpdateUserPermissionsParams
| name           | type      | format     | desc                        | eg                        |
| -------------- | --------- | ---------- | --------------------------- | ------------------------  |
| permissions    | [UserPermissionsType](/docs/Web3MQ-SDK/JS-SDK/types/#userpermissionstype)   |     -      | user permissions      |{'user: chat': {type: "enum",value: "public"}}|

### NotifyResponse
| name      | type      | format     | desc                        | eg                        |
| --------- | --------- | ---------- | --------------------------- | ------------------------  |
| title     |  string   |     -      | title of notification       |       -                   |
| content   |  string   |     -      | content of notification     |       -                   |
| type      |  string   |     -      | type of notification        |       -                   |
| timestamp |  number   |     -      | time stamp of notification  |       -                   |
| version   |  number   |     -      | version of notification     |       -                   |


### SubscribeListType
| name      | type      | format     | desc                        | eg                        |
| --------- | --------- | ---------- | --------------------------- | ------------------------  |
| topicid   |  string   |     -      | id of the subscribed topic  |       -                   |
| create_at |  number   |     -      | the create time of the subscribed topic|       -                   |

### TopicListType
| name      | type      | format     | desc                        | eg                        |
| --------- | --------- | ---------- | --------------------------- | ------------------------  |
| create_at |  number   |     -      | the create time of the topic|       -                   |
| topicid   |  string   |     -      | id of topic                 |       -                   |
| topic_name|  string   |     -      | the name of the topic       |       -                   |

### TopicMessageType
| name      | type      | format     | desc                        | eg                        |
| --------- | --------- | ---------- | --------------------------- | ------------------------  |
| content   |  string   |     -      | content of the pushed topic |       -                   |
| topicid   |  string   |     -      | id of the pushed topic      |       -                   |
| title     |  string   |     -      | title of the pushed topic   |       -                   |

### CreateTopicResponse
| name      | type      | format     | desc                        | eg                        |
| --------- | --------- | ---------- | --------------------------- | ------------------------  |
| topicid   |  string   |     -      | id of the  topic            |       -                   |

### WalletSignRes
| name      | type      | format     | desc                        | eg                        |
| --------- | --------- | ---------- | --------------------------- | ------------------------  |
| publicKey |  string   |     -      | temporary public key        |       -                   |
| sign      |  string   |     -      | sign content                |       -                   |

### GetMainKeypairParams
| name      | type      | format     | desc                        | eg                        |
| --------- | --------- | ---------- | --------------------------- | ------------------------  |
| did_type  | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype)    |     -      | did type      |    "eth"        |
| did_value |  string   |     -      | wallet address              |    "0x000000"             |
| password  |  string   |     -      | password of user            |       -                   |

### GetRegisterSignContentParams
| name                  | type                                                 | format     | desc                                 | eg                        |
| --------------------- | ---------------------------------------------------- | ---------- | ------------------------------------ | ------------------------  |
| didType               | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype)    |     -      | did type                             |    "eth"                  |
| didValue              | [didvalue](/docs/Web3MQ-SDK/JS-SDK/types/#didvalue)  |     -      | did value,for example, wallet address|      "0x000000"           |
| mainPublicKey         |  string                                              |     -      | master public key                    |        -                  |
| signContentURI        |  string                                              |     -      | content url of sign                  |        -                  |
| userid                |  string                                              |     -      | useid of user                        |     "user:xxx"            |

### GetSignContentResponse
| name        | type      | format     | desc                        | eg                        |
| ----------- | --------- | ---------- | --------------------------- | ------------------------  |
| signContent |  string   |     -      | conent of sign              |        -                  |

### DappConnectSignParams

| name        | type                                               | format     | desc                                  | eg                        |
| ----------- | -------------------------------------------------- | ---------- | ------------------------------------- | ------------------------  |
| didValue    | [didvalue](/docs/Web3MQ-SDK/JS-SDK/types/#didvalue)|     -      | did value,for example, wallet address |      "0x000000"           |
| signContent |  string                                            |     -      | conent of sign                        |        -                  |
| signType    |  string                                            |     -      | type of sign                          |        -                  |

### Web3MQBridgeOptions
| name               | type           | format     | desc                                       | eg           |
| ------------------ | -------------- | ---------- | ------------------------------------------ | ------------ |
| dAppID             |  string        |     -      | dApp id of user                            |      -       |
| nodeID             |  string        |     -      | node id                                    |      -       |
| wsUrl              |  string        |     -      | ws url of Web3MQ nodes                     | `wss://testnet-ap-aj-2.web3mq.com/` |

### LoginByKeysParams
| name                  | type                                                | format     | desc                        | eg                        |
| --------------------- | --------------------------------------------------- | ---------- | --------------------------- | ------------------------  |
| didType               | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype)   |     -      | did type                    |    "eth"                  |
| didValue              | [didvalue](/docs/Web3MQ-SDK/JS-SDK/types/#didvalue) |     -      |did value,for example, wallet address|      "0x000000"           |
| mainPrivateKey        |  string                                             |     -      | master private key          |        -                  |
| mainPublicKey         |  string                                             |     -      | master public key           |        -                  |
| password              |  string                                             |     -      | Login password              |        -                  |
| pubkeyExpiredTimestamp|  number                                             |     -      | the expiration time of the temporary key pair |        -                  |
| userid                |  string                                             |     -      | useid of user               |       "user:xxx"          |

### RegisterBySignParams
| name                  | type      | format     | desc                        | eg                        |
| --------------------- | --------- | ---------- | --------------------------- | ------------------------  |
| avatar_base64         |  string   |     -      | avatar resource is in base64 format |        -                  |
| avatar_url            |  string   |     -      | avatar resource             |        -                  |
| did_pubkey            |  string   |     -      | temporary public key        |        -                  |
| didType               | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype)   |     -      | did type                             |    "eth"                 |
| didValue              | [didvalue](/docs/Web3MQ-SDK/JS-SDK/types/#didvalue) |     -      | did value,for example, wallet address|     "0x000000"           |
| mainPublicKey         |  string   |     -      | master public key           |        -                  |
| nickname              |  string   |     -      | nickname                    |        -                  |
| signature             |  string   |     -      | content of sign             |        -                  |
| signContentURI        |  string   |     -      | content url of sign         |        -                  |
| userid                |  string   |     -      | useid of user               |     "user:xxx"            |

### RegisterApiResponse
| name           | type                                                | format     | desc                                  | eg                        |
| ----------- -- | --------------------------------------------------- | ---------- | ------------------------------------- | ------------------------  |
| did_type       | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype)   |     -      | did type                              |    "eth"                  |
| did_value      | [didvalue](/docs/Web3MQ-SDK/JS-SDK/types/#didvalue) |     -      | did value,for example, wallet address |   "0x000000"              |
| userid         |  string                                             |     -      | useid of user                         |    "user:xxx"             |

### LoginResponse
| name                  | type      | format     | desc                        | eg                        |
| --------------------- | --------- | ---------- | --------------------------- | ------------------------  |
| mainPrivateKey        |  string   |     -      | master private key          |        -                  |
| mainPublicKey         |  string   |     -      | master public key           |        -                  |
| tempPrivateKey        |  string   |     -      | temporary private key       |        -                  |
| tempPublicKey         |  string   |     -      | temporary public key        |        -                  |
| pubkeyExpiredTimestamp|  number   |     -      | the expiration time of the temporary key pair |        -                  |

### GetUserInfoResponse

| name        | type      | format     | desc                        | eg                        |
| ----------- | --------- | ---------- | --------------------------- | ------------------------  |
| userid      |  string   |     -      | useid of user               |      "user:xxx"           |
| userExist   |  boolean  |     -      | whether the user exists     |       true                |

### MainKeypairType
| name            | type      | format     | desc                        | eg                        |
| --------------- | --------- | ---------- | --------------------------- | ------------------------  |
| secretKey       |  string   |     -      | master private key          |        -                  |
| publicKey       |  string   |     -      | master public key           |        -                  |

### ResetPasswordParams
| name           | type                                                | format     | desc                                  | eg                        |
| -------------- | --------------------------------------------------- | ---------- | ------------------------------------- | ------------------------  |
| avatar_base64  |  string                                             |     -      | avatar resource is in base64 format   |        -                  |
| avatar_url     |  string                                             |     -      | avatar resource                       |        -                  |
| did_type       | [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype)   |     -      | did type                              |    "eth"                  |
| did_value      | [didvalue](/docs/Web3MQ-SDK/JS-SDK/types/#didvalue) |     -      | did value,for example, wallet address |   "0x000000"              |
| nickname       |  string                                             |     -      | nickname                              |        -                  |
| password       |  string                                             |     -      | Login password                        |        -                  |
| signature      |  string                                             |     -      | content of sign                       |        -                  |
| userid         |  string                                             |     -      | useid of user                         |     "user:xxx"            |

### ResetPasswordResponse
| name                  | type      | format     | desc                        | eg                        |
| --------------------- | --------- | ---------- | --------------------------- | ------------------------  |
| mainPrivateKey        |  string   |     -      | master private key          |        -                  |
| mainPublicKey         |  string   |     -      | master public key           |        -                  |