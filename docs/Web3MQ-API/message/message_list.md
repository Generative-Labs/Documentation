---
title: Message History
order: 1
group:
  title: Message
  order: 6
---

## Get history messages

### Request

> **GET** `/api/messages/history/`

| Parameters in URL | Type   | Required | Parameters Description                                                        |
| ----------------- | ------ | -------- | ----------------------------------------------------------------------------- |
| userid            | string | Yes      | userid |
| topic             | string | Yes      | topic id                                                                      |
| size              | int    | Yes      | size                                                                          |
| page              | int    | Yes      | page                                                                          |
| timestamp         | int    | Yes      | timestamp milliseconds                                                        |
| web3mq_signature  | string | Yes      | use ed25519 `base64 encode` signature
 [see signing detail](/docs/Web3MQ-API/signature)                  |

_signature signing rule_
`base64 encode` signature


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

### Response

| Parameters      | Type   | Always Return | Parameters Description                                      |
| --------------- | ------ | ------------- | ----------------------------------------------------------- |
| code            | int    | Yes           | result code, 0 means success, other code see msg's contents |
| msg             | string | Yes           | result description                                          |
| data            | dict   | Yes           | return includes response info                               |
| -messageid      | string | Yes           | messageid                                                   |
| -from           | string | Yes           | message sender user id                                      |
| -from_sign      | int    | Yes           | from signature                                              |
| -topic          | string | Yes           | topic                                                       |
| -message_status | object | Yes           | message status                                              |
| -cipher_suite   | string | Yes           | cipher suite                  |
| -payload_type   | string | Yes           | payload_type                    |
| -pyaload        | string | Yes           | payload base64 encode content                               |
| -timestamp      | int    | Yes           | timestamp                                                   |

`message status`

- received (server received)
- delivered (target user received)
- read (target user read)

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
        "payload_type": "text/plain; charset=utf-8",
        "timestamp": 1656583297872,
        "message_status": {
          "status": "read",
          "timestamp": 1656583392872
        },
        "payload": "aGVsbG8gd2ViM21x",
        "version": 1
      }
    ]
  }
}
```
