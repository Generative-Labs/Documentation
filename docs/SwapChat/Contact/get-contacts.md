---
sidebar_position: 1
---

# Get Contacts Info
___
## Get contact's info
> /contacts/<page:int>/<size:int>

> JWT: Yes

> Call Method: GET

| Parameters in URL | Required |  Parameters Description|
| ------------- | ------------- |--------|
| page  | Yes  |  page number  |
| size  | Yes  |  page size  |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return a **List** includes contacts' info |