---
sidebar_position: 0
---

# Details
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
|is_opensea_coll|bool|was it created by OpenSea coll, default value is false|
|opensea_coll_name|string|OpenSea Coll's name|
|opensea_coll_cover|string|OpenSea Coll's cover|
|opensea_coll_slug|string|OpenSea Coll's slug|
|is_1v1|bool|was it a private room,default value is false,this value will be true when and only when there are only two members.|
|is_twitter_space|bool|was it created by Twitter Space|
|space_id|string|Twitter Sapce Id|
|space_title|string|Twitter Space title|
|last_msg_time|int|timestamp of the last message received in the chat room, in nanoseconds|

___

### Message's structure
| Parameters | Type | Required |  Parameters Description|
| ---------|------ | ------------- |--------|
|from_uid|string|yes|user' OID who sent the message|
|to_room_id|string|yes|room's OID which should receivced the message|
|msg_type|string|yes|one of 'text' and 'sudo_swap_card'|
|msg_contents|string|yes|if msg_type is 'text',it is pure text,if msg_type is 'sudo_swap_card',see **sudo_swap_card's structure** Please see the notes below this form |
|is_thread|bool|yes|was it a thread,default is no|
|is_opensea_item_thread|bool|yes|was it a OpenSea item,default is no|
|opensea_item_contract_address|string|yes|if is_opensea_item_thread is true, it should be NFT's contract address|
|opensea_item_token_id|string|yes|if is_opensea_item_thread is true, it should be NFT's token id|
|opensea_item_name|string|yes|if is_opensea_item_thread is true, it should be NFT's name|
|opensea_item_description|string|yes|if is_opensea_item_thread is true, it should be NFT's description|
|opensea_item_image_url|string|yes|if is_opensea_item_thread is true, it should be NFT's image path|
|belong_to_thread_id|string|yes|if message was belong to any thread,it should be the thread's OID |
|reply_to_msg_id|string|yes|if message was reply to any msg,it should be the thread's OID|
|created_at|int|yes|the unix time stamp when the message sent|
|at_user_ids|list|yes|default value is empty list []|