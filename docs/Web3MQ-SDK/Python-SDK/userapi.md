---
sidebar_position: 3
---

# User

## User api list

- Get User info
- search users
- Add user to my contact
- Get my contact list

## Get User info

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()

# platform options twitter/instagram/facebook/discord
platform = "twitter"

# User's username on the platform
username = "username"

userinfo = client.get_user_info(platform, username)
```

## Search Users

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()

# the keyword what you want to search
userlist = client.search_users(keyword)
```

## Add user to my contact

> Add an user to your contact list by user's OID

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()

user_id = "user_id"
client.add_user_to_my_contact(user_id)
```

## Get my contact list

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()
page = 1
size = 10

contact_list = client.get_my_contact(page, size)
```
