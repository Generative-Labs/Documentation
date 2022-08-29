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

**userinfo example**

```json
{
    "user_id": "user's OID",
    "nick_name": "user's nick_name",
    "twitter_username": "user's twitter_username",
    "twitter_avatar": "user's twitter_avatar",
    "instagram_username": "user's instagram_username",
    "instagram_avatar": "user's instagram_avatar",
    "facebook_username": "user's facebook_username",
    "facebook_avatar": "user's facebook_avatar",
    "discord_username": "user's discord_username",
    "discord_avatar": "user's discord_avatar",
    "opensea_username": "user's opensea_username",
    "opensea_avatar": "user's opensea_avatar",
    "eth_wallet_address": "user's eth_wallet_address",
    "ens_name": "user's ens_name",
    "status": "user's status",
    "created_at": "the timestamp when user created"
}
```

## Search Users

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()

# the keyword what you want to search
userlist = client.search_users(keyword)
```

**userlist example**

```json
[{
    "user_id": "user's OID",
    "nick_name": "user's nick_name",
    "twitter_username": "user's twitter_username",
    "twitter_avatar": "user's twitter_avatar",
    "instagram_username": "user's instagram_username",
    "instagram_avatar": "user's instagram_avatar",
    "facebook_username": "user's facebook_username",
    "facebook_avatar": "user's facebook_avatar",
    "discord_username": "user's discord_username",
    "discord_avatar": "user's discord_avatar",
    "opensea_username": "user's opensea_username",
    "opensea_avatar": "user's opensea_avatar",
    "eth_wallet_address": "user's eth_wallet_address",
    "ens_name": "user's ens_name",
    "status": "user's status",
    "created_at": "the timestamp when user created"
}]
```

## Add user to my contact

> Add an user to your contact list by user's OID

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()

user_id = "user_id"
errmsg = client.add_user_to_my_contact(user_id)
if not errmsg:
    print("add user to my contact success")
else:
    print(errmsg)
```

## Get my contact list

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()
page = 1
size = 10

contact_list = client.get_my_contact(page, size)
```

**contact_list example**

```json
[
    {
        "user_id": "user's OID",
        "nick_name": "user's nick_name",
        "twitter_username": "user's twitter_username",
        "twitter_avatar": "user's twitter_avatar",
        "instagram_username": "user's instagram_username",
        "instagram_avatar": "user's instagram_avatar",
        "facebook_username": "user's facebook_username",
        "facebook_avatar": "user's facebook_avatar",
        "discord_username": "user's discord_username",
        "discord_avatar": "user's discord_avatar",
        "opensea_username": "user's opensea_username",
        "opensea_avatar": "user's opensea_avatar",
        "eth_wallet_address": "user's eth_wallet_address",
        "ens_name": "user's ens_name",
        "status": "user's status",
        "created_at": "the timestamp when user created"
    }
]
```
