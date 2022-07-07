---
sidebar_position: 0
---

# Details about Room/Message
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
|created_with|null or object|null,or one of ["nft_coll","twitter_space"]|
|is_1v1|bool|was it a private room,default value is false,this value will be true when and only when there are only two members.|
|last_msg_time|int|timestamp of the last message received in the chat room, in nanoseconds|

___

### nft_coll's structure
| Parameters | Type | Always return |  Parameters Description|
| ---------|------ | ------------- |--------|
|nft_marketplace_name|string|Yes|one of ["openseaio","cryptocom","gamaio","binancecom","ftxcom"], but we only support "openseaio" for now|
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
|is_thread|boolean|yes|is/not a thread|
|belong_to_thread_id|string|yes|which thread the message belong to,it is empty string when the mseeage is a general message|
|replay_to_msg_id|string|yes|if the message is reply to an other message,then here is the other's id, otherwise is empty string "" |
|msg_type|string|yes|one of ["text","image","audio","video","nft","trade"]|
|msg_payload|object|yes|if msg_type is 'text',it is pure text, if msg_type is "image"/"audio"/"video",it is the URL of media, if msg_type is 'trade',see **trade's structure**,if msg_type is 'nft' see **nft's structure**,Please see the tables below this form|
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
|nft_marketplace_name|string|Yes|one of ["openseaio","x2y2io","cryptocom","gamaio","binancecom","ftxcom","onchain"], but we only suport "openseaio" for now|
|nft_chain_type|string|Yes|one of ["ethereum","polygon","solana"]|
|nft_contract_address|string|Yes|NFT's contract address|
|nft_token_id|string|Yes|NFT's token id|
|nft_name|string|Yes|NFT's name|
|nft_description|string|Yes|NFT's description|
|nft_image_url|string|Yes|NFT's image url|