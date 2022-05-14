---
sidebar_position: 0
---

# What is Room
Room is a container for chatting behavior, and some of its properties are affected by the way it was created. It has at least one member.
___

## Room' structure

| Parameters  | Parameters Description |
| ----------  | ---------------------- |
|name| Room's name,default value is 'Chat Room' |
|description|Room's description,default value is empty string|
|members| a list of members' oid|
|creator_id|creator's oid|
|created_at|timestamp when Room was created,in nanoseconds|
|is_opensea_coll|was it created by OpenSea coll, default value is false|
|opensea_coll_name|OpenSea Coll's name|
|opensea_coll_cover|OpenSea Coll's cover|
|opensea_coll_slug|OpenSea Coll's slug|
|is_1v1|was it a private room,default value is false,this value will be true when and only when there are only two members.|
|is_twitter_space|was it created by Twitter Space|
|space_id|Twitter Sapce Id|
|space_title|Twitter Space title|
|last_msg_time|timestamp of the last message received in the chat room, in nanoseconds|

___