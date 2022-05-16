---
sidebar_position: 5
---

# Get History Messages
___
## Get History Messages by room oid
> /messages

> JWT: Yes

> Call Method: POST

| Parameters | Required |  Parameters Description|
| ------------- | ------------- |--------|
| room_id  | Yes  |  Room OID  |
| page  | Yes  |  page number  |
| size  | Yes  |  page size  |
| after_time_stamp  | Yes  | The start time stamp of history messages |

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

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return message **List** when code is 0, otherwise return None |
| -from_uid  |   | sender's OID |
| -to_room_id  |   | the room's OID which message sent to |
| -msg_contents  |   | message's contents |
| -msg_type  |   | message's type |
| -created_at  |   | the date when this message created |
