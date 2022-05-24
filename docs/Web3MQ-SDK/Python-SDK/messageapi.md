---
sidebar_position: 5
---


# Message

## Get history messages

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()

room_id = 'room_id'
page = 1
size = 10
after_time_stamp = 1643444624578432887
message_list = client.get_history_messages(room_id, page, size, after_time_stamp)
```

**message_list example**

```json
[
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
```

**message_list description**

| Parameters | Type |  Parameters Description|
| -----------| --- | --------|
| from_uid | string | sender's OID |
| to_room_id|string  | the room's OID which message sent to |
| msg_contents |string | message's contents |
| msg_type |string | message's type |
| created_at |int | the timestamp when this message created in nanosecond |
