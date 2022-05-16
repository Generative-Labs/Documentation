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
| Authorization  | Yes  |  [login api](/docs/SwapChat/User/user-login#login-with-metamask-sign) response "access_token" |

*example*

```
Authorization: Bearer (your access token from login api)
```

| Parameters in URL | Required |  Parameters Description|
| ------------- | ------------- |--------|
| page  | Yes  |  page number  |
| size  | Yes  |  page size  |

> Return:

```json
{
    "code": 0,
    "msg": "ok",
    "data": [
        {
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
    ]
}
```

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return a **List** includes contacts' ***User** info |
