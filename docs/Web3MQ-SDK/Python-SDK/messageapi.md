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
after_time_stamp = 1653381151000
client.get_history_messages(room_id, page, size, after_time_stamp)
```
