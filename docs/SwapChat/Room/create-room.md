---
sidebar_position: 1
---

# Create Chat Room
There are 2 ways to create a room:
* Create a chat room by specifying users
* Create a chat room by specifying Opensea Collection
___
> POST /rooms

> JWT: Yes

*http header*

| Headers  | Required |  Headers Description|
| ------------- | ------------- |--------|
| Authorization  | Yes  |  [login api](/docs/SwapChat/User/user-login#login-with-metamask-sign) response "access_token" |

*example*

```
Authorization: Bearer (your access token from login api)
```


## Create a chat room by specifying users

| Parameters | Type | Required |  Parameters Description|
| ---------|----- | ------------- |--------|
| user_id |list | Yes  |  The list of target user's OID  |

___
## Create a chat room by specifying Opensea Collection

| Parameters | Type | Required |  Parameters Description|
| ----------|----- | ------------- |--------|
| is_opensea_coll |bool | Yes  | true/false  |
| opensea_coll_slug |string | Yes  | opensea collection slug  |

> Return:

```json
{
    "code": 0,
    "msg": "ok",
    "data": "room id"
}
```

| Parameters| Type  | Always Return |  Parameters Description|
| ----------|----- | ------------- |--------|
| code |int | Yes  |  result code,0 means success, other code see msg's contents  |
| msg |string | Yes  | result description   |
| data |null/string  | Yes  | return null when code is 1,return room's OID when code is 0 |
