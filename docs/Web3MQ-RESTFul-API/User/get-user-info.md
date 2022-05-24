---
sidebar_position: 3
---

# Get User Info
___
## Get user info by platform and username
> /info

> JWT: No

> Call Method: POST

| Parameters  | Type | Required |  Parameters Description|
| ----------|---- | ------------- |--------|
| platform |string | Yes  |  One of these values: twitter/instagram/facebook/discord  |
| user_name |string | Yes  |  User's username on the platform  |

> Return:

```json
{
    "code": 0,
    "msg": "ok",
    "data": {
        "user_id": "user's OID",
        "nick_name": "user's nick_name",
        "twitter_username": "user's twitter_username",
        "twitter_avatar": "user's twitter_avatar",
        "instagram_username": "user's instagram_username",
        "instagram_avatar": "user's instagram_avatar",
        "facebook_username": "user's facebook_username",
        "facebook_avatar": "user's facebook_avatar",
        "discord_username": "user's discord_username",
        "discord_avatar": "user's discord_avatar",
        "opensea_username": "user's opensea_username",
        "opensea_avatar": "user's opensea_avatar",
        "eth_wallet_address": "user's eth_wallet_address",
        "ens_name": "user's ens_name",
        "status": "user's status",
        "created_at": "the timestamp when user created"
    }
}
```

| Parameters | Type | Always Return |  Parameters Description|
| ----------|---- | ------------- |--------|
| code |int | Yes  |  result code,0 means success, other code see msg's contents  |
| msg |string | Yes  | result description   |
| data |object | Yes  | return **user** object when code is 0, otherwise return None |