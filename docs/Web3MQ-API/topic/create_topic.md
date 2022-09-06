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

| Parameters in URL | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| userid            | string | Yes      | [see userid detail](/docs/Web3MQ-API/pubkey/save_pubkey#generate-your-userid) |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature  | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |
| topic_name        | string | No       | topic name                                                            |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + timestamp)

_url query params_

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
  "msg": "ok"
}
```
