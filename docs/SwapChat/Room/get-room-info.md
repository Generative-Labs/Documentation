---
sidebar_position: 3
---

# Get Room Info
___
## Get Room info by room oid
> GET /rooms/<room_id:string>

> JWT: Yes

*http header*

| Headers  | Required |  Headers Description|
| ------------- | ------------- |--------|
| Authorization  | Yes  |  [login api](/docs/SwapChat/User/user-login#login-with-metamask-sign) response "access_token" |

*example*

```
Authorization: Bearer (your access token from login api)
```

| Parameters in URL | Required |  Parameters Description|
| ------------- | ------------- |--------|
| room_id  | Yes  |  Room OID  |

> Return:

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
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
}
```

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return room info when code is 0, otherwise return None |
| -room_id  |   | room's OID |
| -name  |   | room's name |
| -description  |   | room's description |
| -members  |   |room's members |
| -creator_id  |   | the creator's OID of room |
| -is_opensea_coll  |   | is/not created by opensea collection |
| -opensea_coll_name  |   | opensea collection name |
| -opensea_coll_cover  |   | opensea collection cover image |
| -opensea_coll_slug  |   | opensea collection slug |
| -is_1v1  |   | is/not a private room |
| -creator  |   | room's creator's details |
| -created_at  |   | the date when this room created |
