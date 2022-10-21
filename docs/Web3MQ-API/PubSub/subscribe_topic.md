---
title: Subscribe Topic
order: 1
group:
  title: Topic
  order: 7
---

# Subscribe Topic

---

## Subscribe Topic

> **POST** `/api/subscribe_topic/`

| Parameters in Body json | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| userid            | string | Yes      | [see userid detail](/docs/Web3MQ-API/pubkey/save_pubkey#generate-your-userid) |
| topicid           | string | Yes      | topic id                                                              |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature  | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + topicid + timestamp)

_Body json params_

```json
{
  "userid": "your userid",
  "topicid": "topicid",
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