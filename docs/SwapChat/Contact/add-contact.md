---
sidebar_position: 0
---

# Add User To Your Contact List
___
## Add an user to your contact list by user's OID
> POST /contacts

> JWT: Yes

*http header*

| Headers  | Required |  Headers Description|
| ------------- | ------------- |--------|
| Authorization  | Yes  |  [login api](/docs/SwapChat/User/user-login#login-with-metamask-sign) response "access_token" |

*example*

```
Authorization: Bearer (your access token from login api)
```


| Parameters| Type | Required |  Parameters Description|
| ----------|----- | ------------- |--------|
| user_id|string  | Yes  |  User's OID  |

> Return:

```json
{
    "code": 0,
    "msg": "ok",
    "data": null
}
```

| Parameters| Type  | Always Return |  Parameters Description|
| ----------|----- | ------------- |--------|
| code|int  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg |string | Yes  | result description   |
| data |null  | Yes  | Always return null|
