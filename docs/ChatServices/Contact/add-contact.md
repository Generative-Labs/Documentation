---
sidebar_position: 0
---

# Add User To Your Contact List
___
## Add an user to your contact list by user's OID
> /contacts

> JWT: Yes

> Call Method: POST

| Parameters | Required |  Parameters Description|
| ------------- | ------------- |--------|
| user_id  | Yes  |  User's OID  |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | Always return None|