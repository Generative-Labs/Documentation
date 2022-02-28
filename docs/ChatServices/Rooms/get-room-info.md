---
sidebar_position: 2
---

# Get Room Info
___
## Get Room info by room oid
> /rooms/<room_id:string>

> JWT: Yes

> Call Method: GET

| Parameters in URL | Required |  Parameters Description|
| ------------- | ------------- |--------|
| room_id  | Yes  |  Room OID  |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return room info when code is 0, otherwise return None |
| -room_id  |   | room's OID |
| -name  |   | room's name |
| -description  |   | room's description |
| -members  |   |room's members |
| -creator_id  |   | the creator's OID of room |
| -is_opensea_coll  |   | is/not created by opensea collection |
| -opensea_coll_name  |   | opensea collection name |
| -opensea_coll_cover  |   | opensea collection cover image |
| -opensea_coll_slug  |   | opensea collection slug |
| -is_1v1  |   | is/not a private room |
| -creator  |   | room's creator's details |
| -created_at  |   | the date when this room created |