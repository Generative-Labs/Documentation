---
sidebar_position: 1
---

# Get Contacts Info
___
## Get contact's info
> GET /contacts/<page:int>/<size:int>

> JWT: Yes

*http header*

| Headers  | Required |  Headers Description|
| ------------- | ------------- |--------|
| Authorization  | Yes  |  [login api](/docs/Web3MQ-RESTFul-API/User/user-login#login-with-metamask-sign) response "access_token" |

*example*

```
Authorization: Bearer (your access token from login api)
```

| Parameters in URL | Type | Required |  Parameters Description|
| ----------|----- | ------------- |--------|
| page |int | Yes  |  page number  |
| size |int | Yes  |  page size  |

> Return:

```json
{
    "code": 0,
    "msg": "ok",
    "data": [
        {
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
    ]
}
```

| Parameters | Type | Always Return |  Parameters Description|
| -----------|---- | ------------- |--------|
| code |int | Yes  |  result code,0 means success, other code see msg's contents  |
| msg |string | Yes  | result description   |
| data |list  | Yes  | return a **List** includes contacts' ***User** info |
