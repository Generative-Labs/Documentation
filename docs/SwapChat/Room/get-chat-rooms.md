---
sidebar_position: 4
---

# Get Chat Rooms
___
## Get the chat rooms you are participating in
> /my_chats

> JWT: Yes

> Call Method: POST

| Parameters | Required |  Parameters Description|
| ------------- | ------------- |--------|
| page  | Yes  |  page number  |
| size  | Yes  |  page size  |

> Return:

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "name": "",
            "creator": {
                "opensea_username": "",
                "twitter_username": "XuJava",
                "user_id": "user id",
                "nick_name": "XuJava",
                "created_at": 0,
                "eth_wallet_address": "wallet address",
                "facebook_username": "",
                "instagram_avatar": "",
                "ens_name": "",
                "status": "1111111",
                "discord_username": "XuBin#1500",
                "instagram_username": "",
                "facebook_avatar": ""
            },
            "is_opensea_coll": false,
            "description": "ChatRoom",
            "latest_msg": {
                "opensea_item_contract_address": "",
                "opensea_item_image_url": "",
                "msg_type": "text",
                "msg_contents": "Hi",
                "belong_to_thread_id": "",
                "created_at": 1643444624578432887,
                "from_uid": "from uid",
                "is_thread": false,
                "to_room_id": "send to room id",
                "opensea_item_name": "",
                "reply_to_msg_id": "",
                "id": "id",
                "at_user_ids": []
            },
            "creator_id": "creator id",
            "room_id": "root id",
            "members": [
                {
                    "opensea_username": "",
                    "twitter_username": "XuJava",
                    "user_id": "user id",
                    "nick_name": "XuJava",
                    "created_at": 0,
                    "eth_wallet_address": "eth wallet address",
                    "facebook_username": "",
                    "instagram_avatar": "",
                    "ens_name": "",
                    "status": "1111111",
                    "discord_username": "XuBin#1500",
                    "instagram_username": "",
                    "facebook_avatar": ""
                }
            ],
            "is_1v1": true,
            "created_at": 1643444610855372555,
        }
    ]
}
```

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return a **List** includes all rooms you are participating in when code is 0, otherwise return None. See **Details** on the left for Room's structure |


## Get all rooms' id that you are participating in

> /my_rooms

> JWT: Yes

> Call Method: GET


> Return:

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        "room id",
        "room id"
    ]
}
```

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return a **List** includes all rooms' id you are participating in when code is 0, otherwise return empty list|
