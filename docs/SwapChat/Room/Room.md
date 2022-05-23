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