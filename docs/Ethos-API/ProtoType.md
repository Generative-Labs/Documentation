---
nav:
  title: docs
title: ProtoType
order: 30
sidebar_position: 30
---

# ProtoType

```js
// connect to node
const PbTypeConnectReqCommand = 0b00000010;
const PbTypeConnectRespCommand = 0b00000011;

// normally message
const PbTypeMessage = 0b00010000;
const PbTypeMessageStatusResp = 0b00010101;

// notification
const PbTypeNotificationListResp = 0b00010100;
```
