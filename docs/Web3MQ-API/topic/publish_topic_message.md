---
title: Publish Topic Message
order: 1
group:
  title: Topic
  order: 7
---

# Publish Topic Message

---

## Publish Topic Message

> **POST** `/api/publish_topic_message/`

| Parameters in Body json | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| userid            | string | Yes      | [see userid detail](/docs/Web3MQ-API/pubkey/save_pubkey#generate-your-userid) |
| topicid           | string | Yes      | topic id                                                              |
| title             | string | Yes      | title                                                                 |
| content           | string | Yes      | content                                                               |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature  | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + topicid + timestamp)

_url query params_

```json
{
  "userid": "your userid",
  "topicid": "topicid",
  "title": "title",
  "content": "content",
  "web3mq_signature": "web3mq_signature",
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
  "msg": "ok"
}
```
