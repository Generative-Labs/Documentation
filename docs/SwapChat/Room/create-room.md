---
sidebar_position: 1
---

# Create Chat Room
There are 2 ways to create a room:
* Create a chat room by specifying users
* Create a chat room by specifying Opensea Collection
___
> /rooms

> JWT: Yes

> Call Method: POST


## Create a chat room by specifying users

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| user_id  | Yes  |  The OID of target users  |


___
## Create a chat room by specifying Opensea Collection

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| is_opensea_coll  | Yes  | true/fale  |
| opensea_coll_slug  | Yes  | opensea collection slug  |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return None when code is 1,return room's OID when code is 0 |