---
sidebar_position: 1
---

# Send Notifications

You can send notifications to your users which specify or all of them, or you can send a notification to your room.

<br />

___
## Send notifications to your users or room
<br />

> /notifications

> JWT: Yes

> Call Method: POST JSON

<br />

| Parameters | Type | Required |  Parameters Description|
| ---------|------ | ------------- |--------|
|version|int| yes|we only support 1 for now |
|sender_id|string|yes|sender's id|
|to|list|yes|a list of receivers' id,if it will send to all users,then set it to empty list "[]"|
|notification_type|string|yes|one of ["text","image","link","invitecodes","audio","video","nft","trade"]|
|notification_payload|object|yes|if notification_type is 'text',it is pure text, if notification_type is 'link',it is a link,if notification_type is 'image'/'audio'/'video',it is the URL of the media, for other types, Please see the tables below this form|
|created_at|int|yes|the unix time stamp when the message sent|

<br />

> Example: send a text notification to all users
```json
{
  "version":1,
  "sender_id":"6b2e32r1r3242tg32rt4",
  "to":["61f29ca9c9e74cbab7cea2d4"],
  "notification_type":"text",
  "notification_payload":"this is a text notification.",
  "created_at":1657292267311212143
}
```


<br />

>Return:

<br />

| Parameters| Type  | Always Return |  Parameters Description|
| ----------|----- | ------------- |--------|
| code |int | Yes  |  result code,0 means success, other code see msg's contents |
| msg |string | Yes  | result description   |
| data |null/string  | Yes  | return null when code is 1,return notification's id when code is 0 |

> Return example

```json
{
  "code":0,
  "msg":"publishing",
  "data":"62c915e7abcc8836c5b27132"
}
```