---
title: Receive Notification
order: 2
group:
  title: Notification
  order: 7
---

### Receive Notification

---

## Notification struct

```js
// pb/message build from protobuf file
import { Web3MQMessageListResponse } from '@/pb/message';

const WS_PROTOCOL = 'wss'; // ws or wss

const HostURL = 'us-west-2.ethos.com'; // choose one domain

const GetWSConn = () => {
  const wsurl = WS_PROTOCOL + '://' + HostURL + '/messages';
  const wsconn = new WebSocket(wsurl);
  wsconn.binaryType = 'arraybuffer'; // !important Web3MQ send message use protobuf
  return wsconn;
};

// notification
const PbTypeNotificationListResp = 0b00010100;

let wsconn;
wsconn = GetWSConn();

wsconn.onmessage = function (event) {
  var respData = new Uint8Array(event.data);

  const PbType = respData[1];
  const bytes = respData.slice(2, respData.length);

  if (PbType == PbTypeNotificationListResp) {
    console.log('Receive notification');
    let notificationList = Web3MQMessageListResponse.fromBinary(bytes);
    console.log(notificationList);
    console.log(notificationList[0].payload);
  }
};
```

_notification.payload_

| Parameters | Type   | Required | Parameters Description |
| ---------- | ------ | -------- | ---------------------- |
| title      | string | Yes      | notfication title      |
| content    | string | Yes      | notfication content    |
| type       | int    | Yes      | notfication type       |
| version    | int    | Yes      | 1                      |
| timestamp  | int    | Yes      | timestamp milliseconds |

- _notfication type_
    - `system.friend_request` (Friend request notification type)
    - `system.agree_friend_request` (Agree friend request notification type)
    - `system.group_invitation` (Group invitation notification type)
    - `subscription` (subscription topic new message notification)

```json
{
  "title": "notification title",
  "content": "notification content",
  "type": "system",
  "version": 1,
  "timestamp": 1656991509327
}
```
