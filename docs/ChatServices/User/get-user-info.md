---
sidebar_position: 3
---

# Get User Info
___
## Get user info by platform and username
> /info

> JWT: No

> Call Method: POST

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| platform  | Yes  |  One of these values: twitter/instagram/facebook/discord  |
| user_name  | Yes  |  User's username on the platform  |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return user info when code is 0, otherwise return None |
| -user_id  |   | user's OID |
| -nick_name  |   | user's nickname on our platform |
| -twitter_username  |   | user's nickname on twitter platform |
| -instagram_username  |   | user's nickname on instagram platform |
| -facebook_username  |   | user's nickname on facebook platform |
| -discord_username  |   | user's nickname on discord platform |
| -eth_wallet_address  |   | user's ETH wallet address |
| -status  |   | user's status, -1 means wait for verify,0 means normal, 1 means be banned |
| -created_at  |   | the date when this user created |