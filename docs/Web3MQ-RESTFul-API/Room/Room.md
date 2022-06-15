---
sidebar_position: 0
---

# Details about Room and Message
Room is a container for chatting behavior, and some of its properties are affected by the way it was created. It has at least one member.
___

## Room' structure

| Parameters |Type | Parameters Description |
| ---------- |---- | ---------------------- |
|name|string| Room's name,default value is 'Chat Room' |
|description|string|Room's description,default value is empty string|
|members|list| a list of members' OID|
|creator_id|string|creator's OID|
|created_at|int|timestamp when Room was created,in nanoseconds|
|created_with|None or string|None,or one of ["nft_coll","twitter_space"]|
|is_1v1|bool|was it a private room,default value is false,this value will be true when and only when there are only two members.|
|last_msg_time|int|timestamp of the last message received in the chat room, in nanoseconds|

___

### nft_coll's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|nft_marketplace_name|string|Yes|one of ["openseaio","cryptyocom","gamaio","binancecom","ftxcom"], but we only suport "openseaio" for now|
|nft_coll_name|string|Yes|Coll's name|
|nft_coll_cover|string|Yes|Coll's cover|
|nft_coll_slug|string|Yes|Coll's slug|


___

### twitter_space's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|space_id|string|Yes|Twitter Sapce Id|
|space_title|string|Yes|Twitter Sapce title|


___

## Message's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|from_uid|string|yes|user' OID who sent the message|
|to_room_id|string|yes|room's OID which should receivced the message|
|msg_type|string|yes|one of ["text","thread","reply","nft","trade","notification"]|
|msg_payload|object|yes|if msg_type is 'text',it is pure text,if msg_type is 'trade',see **trade's structure**,if msg_type is 'nft' see **nft's structure**,if msg_type is 'thread' see **thread's structure**,if msg_type is 'reply' see **reply's structure**,if msg_type is 'notification' see **notification's structure**, Please see the tables below this form|
|created_at|int|yes|the unix time stamp when the message sent|
|at_user_ids|list|yes|default value is empty list []|

___

### trade's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|platform_name|string|Yes|one of ["sudoswap","swapchat","nifty"], but we only support "sudoswap" for now|

___

### nft's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|nft_marketplace_name|string|Yes|one of ["openseaio","cryptyocom","gamaio","binancecom","ftxcom","onchain"], but we only suport "openseaio" for now|
|nft_chain_type|string|Yes|one of ["ethereum","polygon","solana"]|
|nft_contract_address|string|Yes|NFT's contract address|
|nft_token_id|string|Yes|NFT's token id|
|nft_name|string|Yes|NFT's name|
|nft_description|string|Yes|NFT's description|
|nft_image_url|string|Yes|NFT's image url|

___

### thread's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|thread_name|string|Yes|Thread's name|
|thread_description|string|Yes|Thread's description|
|thread_contents|string|Yes|Thread's contents|
|thread_cover_image_url|string|Yes|Thread's cover image url|

___

### reply's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|reply_to_msg_id|string|Yes|the Message's id which reply to|
|reply_contents|string|Yes|the Reply's contents|

___

### notification's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|notification_type|string|Yes|type of notification, one of ["invitecode","text","article"]|
|notification_payload|object|Yes|if msg_type is 'text',it is pure text,if msg_type is 'invitecode',see **invitecode's structure**,if msg_type is 'article' see **article's structure**, Please see the tables below this form|

___

#### invitecode's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|invitecodes|list|Yes|A list of invite code|

___

#### article's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|title|string|Yes|the title of article|
|subtitle|string|Yes|the subtitle of article|
|cover_image|string|Yes|the url of cover image|