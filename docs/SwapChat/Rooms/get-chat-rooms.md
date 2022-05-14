---
sidebar_position: 4
---

# Get Chat Rooms
___
## Get the chat rooms you are participating in
> /my_chats

> JWT: Yes

> Call Method: POST

| Parameters | Required |  Parameters Description|
| ------------- | ------------- |--------|
| page  | Yes  |  page number  |
| size  | Yes  |  page size  |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return a **List** includes all rooms you are participating in when code is 0, otherwise return None. See **Details** on the left for Room's structure |


## Get all rooms' id that you are participating in

> /my_rooms

> JWT: Yes

> Call Method: GET


> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | return a **List** includes all rooms' id you are participating in when code is 0, otherwise return empty list|