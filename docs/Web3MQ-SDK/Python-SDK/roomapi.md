---
sidebar_position: 4
---

# Room

## Room api list

- Create chat room
- Get room id list
- Get room info

## Create chat room

> Create a chat room by specifying users

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()


user_ids = ["user_id"]

client.create_chat_room(user_ids)
```


## Get room list

> Get all rooms' id that you are participating in

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()

room_id_list = client.get_my_rooms()
```


## Get room info

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()
room_id = "room_id"

client.get_room_info(room_id)
```
