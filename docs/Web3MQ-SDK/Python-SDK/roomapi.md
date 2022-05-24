---
sidebar_position: 4
---

# Room

## Room api list

- Create chat room
- Get room id list
- Get room info

## Create chat room

> Create a chat room by specifying users

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()


user_ids = ["user_id"]

room_id = client.create_chat_room(user_ids)
```


## Get room list

> Get all rooms' id that you are participating in

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()

room_id_list = client.get_my_rooms()
```

**room_id_list example**

```json
[
    "room_id1",
    "room_id2",
    "room_id3"
]
```


## Get room info

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()
room_id = "room_id"

roominfo = client.get_room_info(room_id)
```

**roominfo description**

| Parameters | Type  | Parameters Description|
| -----------|--- |--------|
| room_id |string | room's OID |
| name |string | room's name |
| description |string | room's description |
| members |list |   |room's members,list of User object |
| creator_id |string | the creator's OID of room |
| is_opensea_coll|bool  | is/not created by opensea collection |
| opensea_coll_name |string | opensea collection name |
| opensea_coll_cover|sting  | opensea collection cover image |
| opensea_coll_slug |string | opensea collection slug |
| is_1v1  |bool| is/not a private room |
| creator| User | room's creator's details, User object |
| created_at |int | the time stamp when this room created |

**roominfo example**

```json
{
    "name": "",
    "creator": {
        "opensea_username": "",
        "instagram_avatar": "",
        "user_id": "user id",
        "twitter_avatar": "https://pbs.twimg.com/profile_images/434870163112869889/jL1GyLM9_400x400.png",
        "nick_name": "XuJava",
        "created_at": 0,
        "eth_wallet_address": "eth wallet address",
        "facebook_username": "",
        "twitter_username": "XuJava",
        "ens_name": "",
        "status": "1111111",
        "opensea_avatar": "",
        "discord_avatar": "https://cdn.discordapp.com/avatars/384890640573530113/8f52c8903295f6d90fcabf7e6d0fc110.png?size=1024",
        "discord_username": "XuBin#1500",
        "instagram_username": "",
        "facebook_avatar": ""
    },
    "is_opensea_coll": false,
    "opensea_coll_cover": "",
    "opensea_coll_slug": "",
    "creator_id": "creator id",
    "room_id": "room id",
    "members": [
        {
            "opensea_username": "",
            "instagram_avatar": "",
            "user_id": "user id",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/434870163112869889/jL1GyLM9_400x400.png",
            "nick_name": "XuJava",
            "created_at": 0,
            "eth_wallet_address": "eth wallet address",
            "facebook_username": "",
            "twitter_username": "XuJava",
            "ens_name": "",
            "status": "1111111",
            "opensea_avatar": "",
            "discord_avatar": "https://cdn.discordapp.com/avatars/384890640573530113/8f52c8903295f6d90fcabf7e6d0fc110.png?size=1024",
            "discord_username": "XuBin#1500",
            "instagram_username": "",
            "facebook_avatar": ""
        }
    ],
    "is_1v1": true,
    "opensea_coll_name": "",
    "created_at": 1643444610855372555,
    "description": "ChatRoom"
}
```