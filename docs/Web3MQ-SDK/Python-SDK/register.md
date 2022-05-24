---
sidebar_position: 2
---

# Register
___

## Binding User to their ETH wallet address

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()
# User's ETH wallet address, get it by MetaMask's API
wallet_address = "your wallet address"

# platform options
# twitter/instagram/facebook/discord
platform = 'twitter'
username = 'your username in previou platform'

result = client.do_register(wallet_address, platform, username)
```

## Result example

```json
{
    "user_id": "user_id",
    "nick_name": "nickname",
    "twitter_username": "nickname",
    "twitter_avatar": "",
    "instagram_username": "",
    "instagram_avatar": "",
    "facebook_username": "",
    "facebook_avatar": "",
    "discord_username": "",
    "discord_avatar": "",
    "opensea_username": "",
    "opensea_avatar": "",
    "eth_wallet_address": "",
    "ens_name": "",
    "status": "0000000",
    "created_at": 1653377732583874437
}
```


## Result description


| Parameters | Type | Parameters Description |
| ---------- | --------| ------------------ |
| user_id| string| user's id | 
| nick_name| string| user's Swapchat avatar| 
| eth_wallet_address| string| user's Ethereum wallet address| 
| ens_name| string| user's ENS name| 
| twitter_username| string| user's Twitter username| 
| instagram_username| string| user's Instagram username| 
| facebook_username| string| user's Facebook username| 
| discord_username| string| user's Discord username| 
| discord_userid| string| user's discord id| 
| opensea_username| string| user's opensea username| 
| twitter_avatar| string| user's Twitter avatar| 
| instagram_avatar| string| user's Instagram_avatar avatar| 
| facebook_avatar| string| user's Facebook_avatar avatar| 
| discord_avatar| string| user's Discord_avatar avatar| 
| opensea_avatar| string| user's Opensea_avatar avatar| 
| status| string| user's status,default is "000000",if user was actived by invite code,6th "0" will be "1",if user has verifyed twitter,2nd "0" will be "1"| 
| created_at| int| timestamp when the user created, in nanoseconds| 
