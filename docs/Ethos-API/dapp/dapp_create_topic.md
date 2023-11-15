---
title: DApp Create Topic
order: 1
group:
  title: DApp
  order: 6
---

# DApp Create Topic

---


> **POST** `/api/dapp_create_topic/`

_Request Payload_

| Parameters in Body json | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| dapp_id            | string | Yes      | dapp_id |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_dapp_signature  | string | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Ethos-API/signature)                  |
| topic_name        | string | No       | topic name                                                            |

_web3mq_dapp_signature signing rule_

`base64 encode` signature

> web3mq_dapp_signature = `dapp ed25519 private key` signing(dappid + timestamp)

_Body json params_

```json
{
  "dapp_id": "<your dappid>",
  "web3mq_dapp_signature": "<web3mq_dapp_signature>",
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
