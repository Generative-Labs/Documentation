---
position: 7
---

# Type List

### EventTypes

| name       | type                                                       | format | desc                        | eg                |
| ---------- | ---------------------------------------------------------- | ------ | --------------------------- | ----------------- |
| EventTypes | "all" \| [EVENT_MAP](/docs/Ethos-SDK/JS-SDK/eventCenter/) | -      | event types in event center | "channel.getList" |

### ServiceResponse

| name | type   | format | desc                        | eg         |
| ---- | ------ | ------ | --------------------------- | ---------- |
| code | object | -      | response status code        | 0          |
| data | string | -      | response body               | {user: xx} |
| msg  | number | -      | response status description | "ok"       |

### PageParams

| name | type   | format | desc                          | eg  |
| ---- | ------ | ------ | ----------------------------- | --- |
| page | number | -      | current page number           | 1   |
| size | number | -      | number of data items per page | 20  |

### KeyPairsType

| name       | type   | format                                                                        | desc                                      | eg          |
| ---------- | ------ | ----------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| PrivateKey | string | [temporaryPrivateKey](/docs/Ethos-SDK/JS-SDK/standards/#temporaryprivatekey) | temporary private key of the current user |             |
| PublicKey  | string | [temporaryPublicKey](/docs/Ethos-SDK/JS-SDK/standards/#temporarypublickey)   | temporary public key of the current user  |             |
| userid     | string | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)                           | id of the current user                    | 'user: xxx' |

### DidType

| name    | type                | format                                                | desc     | eg                  |
| ------- | ------------------- | ----------------------------------------------------- | -------- | ------------------- |
| didType | "eth" \| "starknet" | [didType](/docs/Ethos-SDK/JS-SDK/standards/#didtype) | did type | "eth" or "starknet" |

### DidValue

| name     | type   | format                                                  | desc                                         | eg         |
| -------- | ------ | ------------------------------------------------------- | -------------------------------------------- | ---------- |
| didValue | string | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue) | The account address corresponding to didType | "0x000000" |

### WalletType

| name       | type                                                  | format | desc        | eg         |
| ---------- | ----------------------------------------------------- | ------ | ----------- | ---------- |
| WalletType | "metamask" \| "dappConnect" \| 'argentX' \| 'braavos' | -      | wallet type | "metamask" |

### BlockChainType

| name           | type                | format                                                               | desc           | eg                  |
| -------------- | ------------------- | -------------------------------------------------------------------- | -------------- | ------------------- |
| BlockChainType | "eth" \| "starknet" | [BlockChainType](/docs/Ethos-SDK/JS-SDK/standards/#blockchain-type) | wallet address | "eth" or "starknet" |

### AccountType

| name    | type   | format                                                             | desc                               | eg         |
| ------- | ------ | ------------------------------------------------------------------ | ---------------------------------- | ---------- |
| address | string | [walletAddress](/docs/Ethos-SDK/JS-SDK/standards/#wallet-address) | wallet address of the current user | '0x000000' |

### InitOptions

| name       | type                                                | format                                                                                          | desc                                                                                                                  | eg                                   |
| ---------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| app_key    | string                                              | -                                                                                               | temporary authorization key obtained by applying                                                                      |                                      |
| connectUrl | string \| null                                      | [EthosAPiEndpoints](/docs/Ethos-SDK/JS-SDK/standards/#ethos-api-endpoints)                         | takes in a valid endpoint url as input, when this paramter is given, client will always connect to that specific node | `https://testnet-ap-jp-2.web3mq.com` |
| didKey     | string                                              | [didType](/docs/Ethos-SDK/JS-SDK/types/#didtype):[didvalue](/docs/Ethos-SDK/JS-SDK/types/#didvalue) | didType and didValue collection                                                                                       | 'eth:0x000000'                       |
| env        | [EnvTypes](/docs/Ethos-SDK/JS-SDK/types/#envtypes) | -                                                                                               | network environment                                                                                                   | 'test'                               |
| tempPubkey | string                                              | [temporaryPublicKey](/docs/Ethos-SDK/JS-SDK/standards/#temporary-publickey)                    | temporary public key of the current user                                                                              |                                      |

### SendTempConnectOptions

| name    | type   | format | desc                | eg  |
| ------- | ------ | ------ | ------------------- | --- |
| dAppID  | string | -      | dApp id of user     | -   |
| topicID | string | -      | Logo for connection | -   |

### SignClientCallBackType

| name | type                                                                       | format | desc                 | eg        |
| ---- | -------------------------------------------------------------------------- | ------ | -------------------- | --------- |
| data | "success"\|"error"\|"close"\|object                                        | -      | Callback return data | "success" |
| type | "createQrcode" \| "connect" \| "messageStatus" \| "keys" \| "dapp-connect" | -      | Callback return type | "connect" |

### GetUserInfoParams

| name      | type                                                          | format                                                            | desc                                  | eg         |
| --------- | ------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------- | ---------- |
| didType   | 'web3mq' \| [didType](/docs/Ethos-SDK/JS-SDK/types/#didtype) | 'web3mq' \| [didType](/docs/Ethos-SDK/JS-SDK/standards/#didtype) | did type                              | "eth"      |
| didValue  | [didValue](/docs/Ethos-SDK/JS-SDK/types/#didvalue)           | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue)           | did value,for example, wallet address | "0x000000" |
| timestamp | number                                                        | -                                                                 | time stamp                            | Date.now() |

### EnvTypes

| name     | type            | format | desc                | eg     |
| -------- | --------------- | ------ | ------------------- | ------ |
| EnvTypes | "dev" \| "test" | -      | network environment | "test" |

### ChannelItemType

| name        | type   | format | desc                                               | eg                         |
| ----------- | ------ | ------ | -------------------------------------------------- | -------------------------- |
| avatar_url  | string | -      | current channel avatar resources                   | `https://www.xxx.com`      |
| chat_name   | string | -      | current channel name                               | "channel name"             |
| chat_type   | string | -      | current channel type                               | "user" or "group"          |
| chatid      | string | -      | current channel id                                 | "user: xxx" or "group:xxx" |
| topic       | string | -      | current channel id                                 | "user: xxx" or "group:xxx" |
| topic_type  | string | -      | current channel type                               | "user" or "group"          |
| lastMessage | string | -      | last message in the current channel                | "content of last message"  |
| updatedAt   | string | -      | time of the last message in the current chat room  | "2023-02-01 00:00:00"      |
| unread      | number | -      | number of unread messages in the current chat room | 0                          |

### NftPermissionType

| name       | type               | format   | desc                            | eg        |
| ---------- | ------------------ | -------- | ------------------------------- | --------- |
| chain_type | string: 'starknet' | starknet | chain type                      | starknet  |
| chain_id   | string             | -        | chain id                        | SN_GOERLI |
| contract   | string             | -        | nft collection contract address | "0x00000" |

### CreateRoomParams

| name        | type                                                                    | format | desc                                             | eg                                                                                                         |
| ----------- | ----------------------------------------------------------------------- | ------ | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| avatarUrl   | string                                                                  | -      | select the avatar resource for the group channel | `https://www.xxx.com`                                                                                      |
| groupid     | string                                                                  | -      | customize a group channel id                     | "group: xxx"                                                                                               |
| groupName   | string                                                                  | -      | enter the group channel name                     | "channel name"                                                                                             |
| permissions | [GroupPermissions](/docs/Ethos-SDK/JS-SDK/types/#grouppermissions)     | -      | group channel permissions                        | {"group:join": {type: "enum",value: "public"}}                                                             |
| nfts        | [NftPermissionType](/docs/Ethos-SDK/JS-SDK/types/#nftpermissiontype)[] | -      | Required to hold nfts                            | [{"chain_id":"SN_GOERLI","chain_type":"starknet","contract":"0xd29f5f02f5ffcd102faf467f2f236c601830780d"}] |

### UpdateRoomListParams

| name      | type   | format | desc                                    | eg                      |
| --------- | ------ | ------ | --------------------------------------- | ----------------------- |
| chatid    | string | -      | the id of the chat room to be updated   | "group:xx" or "user:xx" |
| chatType  | string | -      | the type of the chat room to be updated | "group" or "user"       |
| topic     | string | -      | the id of the chat room to be updated   | "group:xx" or "user:xx" |
| topicType | string | -      | the type of the chat room to be updated | "group" or "user"       |

### UpdateGroupPermissionsParams

| name        | type                                                                    | format | desc                      | eg                                                                                                         |
| ----------- | ----------------------------------------------------------------------- | ------ | ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| groupid     | string                                                                  | -      | group channel id          | "group:xx"                                                                                                 |
| permissions | [GroupPermissions](/docs/Ethos-SDK/JS-SDK/types/#grouppermissions)     | -      | group channel permissions | {"group:join": {type: "enum",value: "public"}}                                                             |
| nfts        | [NftPermissionType](/docs/Ethos-SDK/JS-SDK/types/#nftpermissiontype)[] | -      | Required to hold nfts     | [{"chain_id":"SN_GOERLI","chain_type":"starknet","contract":"0xd29f5f02f5ffcd102faf467f2f236c601830780d"}] |

### JoinGroupPermissionsType

| name  | type                                | format | desc                                            | eg       |
| ----- | ----------------------------------- | ------ | ----------------------------------------------- | -------- |
| type  | "enum"                              | -      | The type of group to join in group permissions  | "enum"   |
| value | "creator_invite_friends" \| "public" | -      | The value of group to join in group permissions | "public" |

### GroupPermissions

| name       | type                                                                                | format | desc                          | eg                                             |
| ---------- | ----------------------------------------------------------------------------------- | ------ | ----------------------------- | ---------------------------------------------- |
| group:join | [JoinGroupPermissionsType](/docs/Ethos-SDK/JS-SDK/types/#joingrouppermissionstype) | -      | Group channel permission type | {"group:join": {type: "enum",value: "public"}} |

### UserChatPermissionsType

| name  | type                                         | format | desc                                      | eg       |
| ----- | -------------------------------------------- | ------ | ----------------------------------------- | -------- |
| type  | "enum"                                       | -      | Chat permission type in user permissions  | "enum"   |
| value | "public"\|"follower"\|"following"\|"friends" | -      | Chat permission value in user permissions | "public" |

### UserPermissionsType

| name       | type                                                                              | format | desc                              | eg                                             |
| ---------- | --------------------------------------------------------------------------------- | ------ | --------------------------------- | ---------------------------------------------- |
| user: chat | [UserChatPermissionsType](/docs/Ethos-SDK/JS-SDK/types/#userchatpermissionstype) | -      | chat permission in user permisson | {'user: chat': {type: "enum",value: "public"}} |

### ContactListItemType

| name           | type                                                                      | format                                                             | desc                       | eg                                             |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------- | ---------------------------------------------- |
| avatar_url     | string                                                                    | -                                                                  | contactL avatar resources  | `https://www.xxx.com`                          |
| follow_status  | [FollowStatus](/docs/Ethos-SDK/JS-SDK/types/#followstatus)               | -                                                                  | follow status with contact | "channel name"                                 |
| nickname       | string                                                                    | -                                                                  | nickname of contact        |                                                |
| permissions    | [UserPermissionsType](/docs/Ethos-SDK/JS-SDK/types/#userpermissionstype) | -                                                                  | permissions of contact     | {'user: chat': {type: "enum",value: "public"}} |
| userid         | string                                                                    | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)                | userid of contact          | "user: xxx"                                    |
| wallet_address | string                                                                    | [walletAddress](/docs/Ethos-SDK/JS-SDK/standards/#wallet-address) | wallet address of contact  | "0x000000"                                     |
| wallet_type    | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype)                   | [walletType](/docs/Ethos-SDK/JS-SDK/standards/#blockchain-type)   | wallet type of contact     | "eth" or "starknet"                            |

### GroupMemberListItemType

| name           | type                                                    | format                                                             | desc                      | eg                    |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------- | --------------------- |
| avatar_url     | string                                                  | -                                                                  | contactL avatar resources | `https://www.xxx.com` |
| create_at      | number                                                  | -                                                                  | user create at            | `1695803377572`       |
| nickname       | string                                                  | -                                                                  | nickname of contact       |                       |
| userid         | string                                                  | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)                | userid of contact         | "user: xxx"           |
| wallet_address | string                                                  | [walletAddress](/docs/Ethos-SDK/JS-SDK/standards/#wallet-address) | wallet address of contact | "0x000000"            |
| wallet_type    | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype) | [walletType](/docs/Ethos-SDK/JS-SDK/standards/#blockchain-type)   | wallet type of contact    | "eth" or "starknet"   |

### FollowStatus

| name         | type                                       | format | desc               | eg            |
| ------------ | ------------------------------------------ | ------ | ------------------ | ------------- |
| FollowStatus | 'following' \| 'follower' \| 'follow_each' | -      | follow status type | "follow_each" |

### FollowOperationParams

| name         | type                                              | format                                                             | desc                      | eg         |
| ------------ | ------------------------------------------------- | ------------------------------------------------------------------ | ------------------------- | ---------- |
| address      | string                                            | [walletAddress](/docs/Ethos-SDK/JS-SDK/standards/#wallet-address) | wallet address            | "0x000000" |
| action       | "follow" \| "cancel"                              | -                                                                  | follow or unfollow        | "follow"   |
| didType      | [didType](/docs/Ethos-SDK/JS-SDK/types/#didtype) | [didType](/docs/Ethos-SDK/JS-SDK/standards/#didtype)              | did type                  | "eth"      |
| targetUserid | string                                            | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)                | userid of the target user | "user:xxx" |

### PublishNotificationToFollowersParams

| name    | type   | format | desc              | eg  |
| ------- | ------ | ------ | ----------------- | --- |
| content | string | -      | published content | -   |
| title   | string | -      | published title   | -   |

### MessageStatus

| name          | type                  | format | desc           | eg          |
| ------------- | --------------------- | ------ | -------------- | ----------- |
| MessageStatus | "delivered" \| "read" | -      | message status | "delivered" |

### MessageListItem

| name           | type                                                         | format | desc                          | eg                         |
| -------------- | ------------------------------------------------------------ | ------ | ----------------------------- | -------------------------- |
| cipher_suite   | string                                                       | -      | Encryption Type               | "NONE"                     |
| from           | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)          | -      | message sender user id        | "user: xxx"                |
| topic          | string                                                       | -      | current channel if            | "group: xxx"\| "user: xxx" |
| from_sign      | string                                                       | -      | from signature                | -                          |
| messageid      | string                                                       | -      | message id                    | -                          |
| payload_type   | string                                                       | -      | payload type                  | -                          |
| timestamp      | number                                                       | -      | time stamp                    | -                          |
| message_status | [MessageStatus](docs/Ethos-SDK/JS-SDK/types/#messagestatus) | -      | message status                | -                          |
| payload        | string                                                       | -      | payload base64 encode content | -                          |
| versions       | number                                                       | -      | versions                      | -                          |

### SearchUsersResponse

| name           | type                                                    | format                                                             | desc           | eg                  |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------------ | -------------- | ------------------- |
| userid         | string                                                  | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)                | userid of user | "user: xxx"         |
| wallet_address | string                                                  | [walletAddress](/docs/Ethos-SDK/JS-SDK/standards/#wallet-address) | wallet address | "0x000000"          |
| wallet_type    | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype) | [walletType](/docs/Ethos-SDK/JS-SDK/standards/#blockchain-type)   | wallet type    | "eth" or "starknet" |

### UpdateMyProfileResponse

| name           | type                                                    | format                                                             | desc            | eg                    |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------------ | --------------- | --------------------- |
| avatar_url     | string                                                  | -                                                                  | avatar resource | `https://www.xxx.com` |
| nickname       | string                                                  | -                                                                  | nickname        | -                     |
| userid         | string                                                  | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)                | userid of user  | "user:xxx"            |
| wallet_address | string                                                  | [walletAddress](/docs/Ethos-SDK/JS-SDK/standards/#wallet-address) | wallet address  | "0x000000"            |
| wallet_type    | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype) | [walletType](/docs/Ethos-SDK/JS-SDK/standards/#blockchain-type)   | userid of user  | "eth" or "starknet"   |

### UserBindDidParams

| name        | type                                                                                                                 | format                                                  | desc                                  | eg                |
| ----------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------- | ----------------- |
| did_type    | [didType](/docs/Ethos-SDK/JS-SDK/types/#didtype)                                                                    | [didType](/docs/Ethos-SDK/JS-SDK/standards/#didtype)   | did type                              | "eth"             |
| did_value   | [didValue](/docs/Ethos-SDK/JS-SDK/types/#didvalue)                                                                  | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue) | did value,for example, wallet address | "0x000000"        |
| did_action  | string                                                                                                               | -                                                       | action of did                         | -                 |
| did_content | string                                                                                                               | -                                                       | content of did                        | -                 |
| provider_id | 'web3mq:lens.xyz'\| 'web3mq: email:SwapChat'\|'web3mq:sms:SwapChat'\|'web3mq:ens:SwapChat'\|'web3mq:dotbit:SwapChat' | -                                                       | provider id                           | 'web3mq:lens.xyz' |

### UserBindDidIdsResponse

| name        | type                                                                                                                   | format                                                  | desc                                  | eg                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------- | ----------------- |
| did_type    | [didType](/docs/Ethos-SDK/JS-SDK/types/#didtype)                                                                      | [didType](/docs/Ethos-SDK/JS-SDK/standards/#didtype)   | did type                              | "eth"             |
| did_value   | [didValue](/docs/Ethos-SDK/JS-SDK/types/#didvalue)                                                                    | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue) | did value,for example, wallet address | "0x000000"        |
| provider_id | 'web3mq:lens.xyz' \| 'web3mq: email:SwapChat' \|'web3mq:sms:SwapChat'\|'web3mq:ens:SwapChat'\|'web3mq:dotbit:SwapChat' | -                                                       | provider id                           | 'web3mq:lens.xyz' |

### UpdateUserPermissionsParams

| name        | type                                                                      | format | desc             | eg                                             |
| ----------- | ------------------------------------------------------------------------- | ------ | ---------------- | ---------------------------------------------- |
| permissions | [UserPermissionsType](/docs/Ethos-SDK/JS-SDK/types/#userpermissionstype) | -      | user permissions | {'user: chat': {type: "enum",value: "public"}} |

### NotifyResponse

| name      | type                                                                                              | format | desc                       | eg  |
| --------- | ------------------------------------------------------------------------------------------------- | ------ | -------------------------- | --- |
| title     | string                                                                                            | -      | title of notification      | -   |
| content   | string                                                                                            | -      | content of notification    | -   |
| type      | "system.friend_request"\|"system.agree_friend_request"\|"system.group_invitation"\|"subscription" | -      | type of notification       | -   |
| timestamp | number                                                                                            | -      | time stamp of notification | -   |
| version   | number                                                                                            | -      | version of notification    | -   |

### SubscribeListType

| name      | type   | format | desc                                    | eg  |
| --------- | ------ | ------ | --------------------------------------- | --- |
| topicid   | string | -      | id of the subscribed topic              | -   |
| create_at | number | -      | the create time of the subscribed topic | -   |

### TopicListType

| name       | type   | format | desc                         | eg  |
| ---------- | ------ | ------ | ---------------------------- | --- |
| create_at  | number | -      | the create time of the topic | -   |
| topicid    | string | -      | id of topic                  | -   |
| topic_name | string | -      | the name of the topic        | -   |

### TopicMessageType

| name    | type   | format | desc                        | eg  |
| ------- | ------ | ------ | --------------------------- | --- |
| content | string | -      | content of the pushed topic | -   |
| topicid | string | -      | id of the pushed topic      | -   |
| title   | string | -      | title of the pushed topic   | -   |

### CreateTopicResponse

| name    | type   | format | desc            | eg  |
| ------- | ------ | ------ | --------------- | --- |
| topicid | string | -      | id of the topic | -   |

### WalletSignRes

| name      | type   | format                                                                      | desc                 | eg  |
| --------- | ------ | --------------------------------------------------------------------------- | -------------------- | --- |
| publicKey | string | [temporaryPublicKey](/docs/Ethos-SDK/JS-SDK/standards/#temporarypublickey) | temporary public key | -   |
| sign      | string | [walletSign](/docs/Ethos-SDK/JS-SDK/standards/#wallet-sign)                | wallet sign          | -   |

### GetMainKeypairParams

| name      | type                                                    | format                                                  | desc             | eg         |
| --------- | ------------------------------------------------------- | ------------------------------------------------------- | ---------------- | ---------- |
| did_type  | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype) | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype) | wallet type      | "metamask" |
| did_value | [didValue](/docs/Ethos-SDK/JS-SDK/types/#didvalue)     | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue) | wallet address   | "0x000000" |
| password  | string                                                  | -                                                       | password of user | -          |

### GetRegisterSignContentParams

| name           | type                                                    | format                                                           | desc                                  | eg                     |
| -------------- | ------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------- | ---------------------- |
| didType        | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype) | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype)          | wallet type                           | "metamask"             |
| didValue       | [didValue](/docs/Ethos-SDK/JS-SDK/types/#didvalue)     | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue)          | did value,for example, wallet address | "0x000000"             |
| mainPublicKey  | string                                                  | [PublicKey](/docs/Ethos-SDK/JS-SDK/standards/#master-publickey) | master public key                     | -                      |
| signContentURI | string                                                  | -                                                                | url of the current page               | window.location.origin |
| userid         | string                                                  | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)              | useid of user                         | "user:xxx"             |

### GetSignContentResponse

| name        | type   | format                                                         | desc            | eg  |
| ----------- | ------ | -------------------------------------------------------------- | --------------- | --- |
| signContent | string | [signContent](/docs/Ethos-SDK/JS-SDK/standards/#sign-content) | content of sign | -   |

### DappConnectSignParams

| name        | type                                                          | format                                                         | desc                                  | eg         |
| ----------- | ------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------- | ---------- |
| didValue    | [didValue](/docs/Ethos-SDK/JS-SDK/types/#didvalue)           | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue)        | did value,for example, wallet address | "0x000000" |
| signContent | string                                                        | [signContent](/docs/Ethos-SDK/JS-SDK/standards/#sign-content) | conent of sign                        | -          |
| signType    | 'get_Keys_For_Login' \| 'get_keys_For_Register' \| 'register' | -                                                              | type of sign                          | 'register' |

### EthosBridgeOptions

| name   | type   | format                                                                     | desc                   | eg                                  |
| ------ | ------ |----------------------------------------------------------------------------| ---------------------- | ----------------------------------- |
| dAppID | string | -                                                                          | dApp id of user        | -                                   |
| wsUrl  | string | [EthosApiEndpoints](/docs/Ethos-SDK/JS-SDK/standards/#ethos-api-endpoints) | ws url of Ethos nodes | `wss://testnet-ap-aj-2.web3mq.com/` |

### LoginByKeysParams

| name                   | type                                                    | format                                                             | desc                                          | eg         |
| ---------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------- | ---------- |
| didType                | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype) | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype)            | wallet type                                   | "metamask" |
| didValue               | [didValue](/docs/Ethos-SDK/JS-SDK/types/#didvalue)     | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue)            | did value,for example, wallet address         | "0x000000" |
| mainPrivateKey         | string                                                  | [PrivateKey](/docs/Ethos-SDK/JS-SDK/standards/#master-privatekey) | master private key                            | -          |
| mainPublicKey          | string                                                  | [PublicKey](/docs/Ethos-SDK/JS-SDK/standards/#master-publickey)   | master public key                             | -          |
| password               | string                                                  | -                                                                  | Login password                                | -          |
| pubkeyExpiredTimestamp | number                                                  | -                                                                  | the expiration time of the temporary key pair | -          |
| userid                 | string                                                  | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)                | useid of user                                 | "user:xxx" |

### RegisterBySignParams

| name          | type                                                    | format                                                                      | desc                                  | eg         |
| ------------- | ------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------- | ---------- |
| avatar_base64 | string                                                  | -                                                                           | avatar resource is in base64 format   | -          |
| avatar_url    | string                                                  | -                                                                           | avatar resource                       | -          |
| did_pubkey    | string                                                  | [temporaryPublicKey](/docs/Ethos-SDK/JS-SDK/standards/#temporarypublickey) | temporary public key                  | -          |
| didType       | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype) | [WalletType](/docs/Ethos-SDK/JS-SDK/types/#wallettype)                     | wallet type                           | "metamask" |
| didValue      | [didValue](/docs/Ethos-SDK/JS-SDK/types/#didvalue)     | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue)                     | did value,for example, wallet address | "0x000000" |
| mainPublicKey | string                                                  | [PublicKey](/docs/Ethos-SDK/JS-SDK/standards/#master-publickey)            | master public key                     | -          |
| nickname      | string                                                  | -                                                                           | nickname                              | -          |
| signature     | string                                                  | [signature](/docs/Ethos-SDK/JS-SDK/standards/#wallet-sign)                 | content of sign                       | -          |
| userid        | string                                                  | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)                         | useid of user                         | "user:xxx" |

### RegisterApiResponse

| name      | type                                                | format                                                  | desc                                  | eg         |
| --------- | --------------------------------------------------- | ------------------------------------------------------- | ------------------------------------- | ---------- |
| did_type  | [didType](/docs/Ethos-SDK/JS-SDK/types/#didtype)   | [didType](/docs/Ethos-SDK/JS-SDK/standards/#didtype)   | did type                              | "eth"      |
| did_value | [didValue](/docs/Ethos-SDK/JS-SDK/types/#didvalue) | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue) | did value,for example, wallet address | "0x000000" |
| userid    | string                                              | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)     | useid of user                         | "user:xxx" |

### LoginResponse

| name                   | type   | format                                                                        | desc                                          | eg  |
| ---------------------- | ------ | ----------------------------------------------------------------------------- | --------------------------------------------- | --- |
| mainPrivateKey         | string | [PrivateKey](/docs/Ethos-SDK/JS-SDK/standards/#master-privatekey)            | master private key                            | -   |
| mainPublicKey          | string | [PublicKey](/docs/Ethos-SDK/JS-SDK/standards/#master-publickey)              | master public key                             | -   |
| tempPrivateKey         | string | [temporaryPrivateKey](/docs/Ethos-SDK/JS-SDK/standards/#temporaryprivatekey) | temporary private key                         | -   |
| tempPublicKey          | string | [temporaryPublicKey](/docs/Ethos-SDK/JS-SDK/standards/#temporarypublickey)   | temporary public key                          | -   |
| pubkeyExpiredTimestamp | number | -                                                                             | the expiration time of the temporary key pair | -   |

### GetUserInfoResponse

| name      | type    | format                                              | desc                    | eg         |
| --------- | ------- | --------------------------------------------------- | ----------------------- | ---------- |
| userid    | string  | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid) | useid of user           | "user:xxx" |
| userExist | boolean | -                                                   | whether the user exists | true       |

### MainKeypairType

| name      | type   | format                                                             | desc               | eg  |
| --------- | ------ | ------------------------------------------------------------------ | ------------------ | --- |
| secretKey | string | [PrivateKey](/docs/Ethos-SDK/JS-SDK/standards/#master-privatekey) | master private key | -   |
| publicKey | string | [PublicKey](/docs/Ethos-SDK/JS-SDK/standards/#master-publickey)   | master public key  | -   |

### ResetPasswordParams

| name          | type                                                | format                                                      | desc                                  | eg         |
| ------------- | --------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------- | ---------- |
| avatar_base64 | string                                              | -                                                           | avatar resource is in base64 format   | -          |
| avatar_url    | string                                              | -                                                           | avatar resource                       | -          |
| did_type      | [didType](/docs/Ethos-SDK/JS-SDK/types/#didtype)   | [didType](/docs/Ethos-SDK/JS-SDK/standards/#didtype)       | did type                              | "eth"      |
| did_value     | [didValue](/docs/Ethos-SDK/JS-SDK/types/#didvalue) | [didValue](/docs/Ethos-SDK/JS-SDK/standards/#didvalue)     | did value,for example, wallet address | "0x000000" |
| nickname      | string                                              | -                                                           | nickname                              | -          |
| password      | string                                              | -                                                           | Login password                        | -          |
| signature     | string                                              | [signature](/docs/Ethos-SDK/JS-SDK/standards/#wallet-sign) | content of sign                       | -          |
| userid        | string                                              | [userid](/docs/Ethos-SDK/JS-SDK/standards/#userid)         | useid of user                         | "user:xxx" |

### ResetPasswordResponse

| name           | type   | format                                                             | desc               | eg  |
| -------------- | ------ | ------------------------------------------------------------------ | ------------------ | --- |
| mainPrivateKey | string | [PrivateKey](/docs/Ethos-SDK/JS-SDK/standards/#master-privatekey) | master private key | -   |
| mainPublicKey  | string | [PublicKey](/docs/Ethos-SDK/JS-SDK/standards/#master-publickey)   | master public key  | -   |
