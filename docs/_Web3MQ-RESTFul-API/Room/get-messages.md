---
sidebar_position: 5
---

# Get History Messages
___
## Get History Messages by room OID
> POST /messages

> JWT: Yes

*http header*

| Headers  | Required |  Headers Description|
| ------------- | ------------- |--------|
| Authorization  | Yes  |  [login api](/docs/Web3MQ-RESTFul-API/User/user-login#login-with-metamask-sign) response "access_token" |

*example*

```
Authorization: Bearer (your access token from login api)
```

| Parameters | Type | Required |  Parameters Description|
| ---------|------ | ------------- |--------|
| room_id |string | Yes  |  Room OID  |
| page |int | Yes  |  page number  |
| size |int | Yes  |  page size  |
| after_time_stamp |int | Yes  | The start time stamp of history messages |

> Return:

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "created_at": 1643444624578432887,
            "msg_type": "text",
            "at_user_ids": [],
            "to_room_id": "send to room id",
            "msg_contents": "Hi",
            "id": "id",
            "from_uid": "message come from uid"
        }
    ]
}
```

| Parameters | Type | Always Return |  Parameters Description|
| -----------|--- | ------------- |--------|
| code |int | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  |string| Yes  | result description   |
| data |list | Yes  | return **List** of [Message](/docs/Web3MQ-RESTFul-API/Room/#messages-structure) when code is 0, otherwise return None |
| -from_uid |string |   | sender's OID |
| -to_room_id|string  |   | the room's OID which message sent to |
| -msg_contents |string |   | message's contents |
| -msg_type |string |   | message's type |
| -created_at |int |   | the timestamp when this message created in nanosecond |
