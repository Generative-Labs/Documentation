---
title: Create Topic
order: 1
group:
  title: Topic
  order: 7
---

# Create Topic

---

## Create Topic

> **POST** `/api/create_topic/`

_Request Headers_

| field                 | Required | headers Description             | example                                     |
| --------------------- | -------- | ------------------------------- | ------------------------------------------- |
| web3mq-request-pubkey | Yes      | your login keyapir's public key | 59daabd77706ba02a97c523513a2ceaed10e4275bd6 |
| didkey                | Yes      | your did_type + ":" + did_value | eth:0xa1b1233fdfde                          |

_Request Payload_

| Parameters in Body json | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| userid            | string | Yes      | userid |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature  | string | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Web3MQ-API/signature)                  |
| topic_name        | string | No       | topic name                                                            |

_web3mq_signature signing rule_

`base64 encode` signature

> web3mq_signature = ed25519 private key signing(userid + timestamp)

_Body json params_

```json
{
  "userid": "your userid",
  "web3mq_signature": "web3mq_signature",
  "topic_name": "",
  "timestamp": 1656991509327
}
```

**response**

| Parameters | Type   | Always Return | Parameters Description                                      |
| ---------- | ------ | ------------- | ----------------------------------------------------------- |
| code       | int    | Yes           | result code, 0 means success, other code see msg's contents |
| msg        | string | Yes           | result description                                          |

```json
{
  "code": 0,
  "msg": "ok",
  "data": {
    "topicid": "topic:asdfasdfasdfa"
  }
}
```
