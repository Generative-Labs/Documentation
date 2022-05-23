---
sidebar_position: 0
---

# User Register
___

## Binding User to their ETH wallet address

> /register

> JWT: No

> Call Method: POST

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| wallet_address  | Yes  |  User's ETH wallet address, get it by MetaMask's API  |

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

| Parameters  | Always Return |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | **User** object, see [User](/docs/SwapChat/User/) |
