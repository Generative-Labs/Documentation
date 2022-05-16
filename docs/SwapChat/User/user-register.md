---
sidebar_position: 0
---

# User Register
___

## Binding User to their ETH wallet address

> /wallet

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
        "nick_name": "user's nickname on our platform",
        "twitter_username": "",
        "instagram_username": "",
        "facebook_username": "",
        "discord_username": "",
        "eth_wallet_address": "eth wallet address",
        "status": 0,
        "created_at": 1652699469
    }
}
```

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | dict |

<!-- ## Register an User
> /register

> JWT: No

> Call Method: POST

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| platform  | Yes  |  social platform,only one of below: twitter/facebook/instagram/discord  |
| user_name  | Yes  | User's name on platform   |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return user data if code is 0, otherwise return None |
|    -user_id|| User's oid|
|    -nick_name|| User's nick name|
|    -twitter_username|| User's name on Twitter|
|    -instagram_username|| User's name on Instagram|
|    -facebook_username|| User's name on Facebook|
|    -discord_username|| User's name on Discord|
|    -eth_wallet_address|| User's ETH wallet address|
|    -status|| User's status,0 means normal|
|    -created_at|| User's created time|

___ -->