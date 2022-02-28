---
sidebar_position: 2
---

# Get Contacts
___
## Get contacts list with pagination parameters
> /contacts/mine

> JWT: Yes

> Call Method: POST

| Parameters | Required |  Parameters Description|
| ------------- | ------------- |--------|
| page  | Yes  |  page number  |
| size  | Yes  |  page size  |
| user_type  | nO  | one of following values: creator/recipient  |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return contract info **List** when code is 0, otherwise return None |