---
sidebar_position: 2
---

# Bind social platform
___
## Bind user's twitter to their account
> POST /verify_platform

> JWT: Yes

*http header*

| Headers  | Required |  Headers Description|
| ------------- | ------------- |--------|
| Authorization  | Yes  |  [login api](/docs/SwapChat/User/user-login#login-with-metamask-sign) response "access_token" |

*example*

```
Authorization: Bearer (your access token from login api)
```


| Parameters | Type  | Required |  Parameters Description|
| ----------|----- | ------------- |--------|
| platform |string | Yes  |  The platform name, one of follwing values: twitter/facebook/instagram/youtube  |
| data |string | Yes  |  The URL of article which include user's ETH wallet address  |

> Return:


```json
{
    "code": 0,
    "msg": "ok",
    "data": null
}
```

| Parameters | Type | Always Return |  Parameters Description|
| ------------|---- | ------------- |--------|
| code  |int| Yes  |  result code,0 means success, other code see msg's contents  |
| msg  |string| Yes  | result description   |
| data | null| Yes  | always return null |
