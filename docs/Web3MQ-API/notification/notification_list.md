---
title: Notification History
order: 1
group:
  title: Notification
  order: 7
---

## Get history Notification

> **GET** `/api/notification/history/`

| Parameters in URL | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| userid            | string | Yes      | [see userid detail](/docs/Web3MQ-API/pubkey/Save_pubkey#generate-your-userid) |
| topic             | string | Yes      | topic id                                                              |
| size              | int    | Yes      | size                                                                  |
| page              | int    | Yes      | page                                                                  |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature         | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |
|                   |

_web3mq_signature_ signing rule_

> web3mq_signature = ed25519 private key signing(userid + topic + timestamp)

_url query params_

```json
{
  "userid": "your userid",
  "web3mq_signature": "web3mq_signature",
  "timestamp": 1656991509327,
  "size": 20,
  "page": 1
}
```

## Response

| Parameters    | Type   | Always Return | Parameters Description                                                        |
| ------------- | ------ | ------------- | ----------------------------------------------------------------------------- |
| code          | int    | Yes           | result code, 0 means success, other code see msg's contents                   |
| msg           | string | Yes           | result description                                                            |
| data          | dict   | Yes           | return includes response info                                                 |
| -messageid    | string | Yes           | messageid                                                                     |
| -from         | string | Yes           | message sender id                                                             |
| -from_sign    | int    | Yes           | from signature                                                                |
| -topic        | string | Yes           | topic                                                                         |
| -cipher_suite | string | Yes           | cipher suite  |
| -payload_type | string | Yes           | payload_type  |
| -pyaload      | string | Yes           | payload base64 encode content                                                 |
| -timestamp    | int    | Yes           | timestamp                                                                     |


*payload.type*
- system
  - (system notification include user agree your friend request etc.)
- subscription
  - (subscription topic new message notification)


```json
{
  "code": 0,
  "msg": "ok",
  "data": {
    "total": 35,
    "result": [
      {
        "cipher_suite": "NONE",
        "from": "user:1ac51cff3495beac8f47927ddc719c2de3d08ee3b30f97c7ecd27b77",
        "topic": "user:850b1e20abfce1e514659650834380f584e21c0b03fac89847fa86c6",
        "from_sign": "fromSign",
        "messageid": "f8661568f943eff85362075d4e2f15ae261cb169740f257f1a743cdc",
        "payload_type": "applicaton/json; charset=utf-8",
        "timestamp": 1656583297872,
        "payload": {
          "title": "notification",
          "content": "notification",
          "type": "system"
        },
        "version": 1
      }
    ]
  }
}
```