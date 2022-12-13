---
title: User Bind DID
order: 1
group:
  title: DID
  order: 7
---

# User Bind DID

> **POST** `/api/user_binddid/`

| Parameters in Body json | Type   | Required | Parameters Description                               |
| ----------------------- | ------ | -------- | ---------------------------------------------------- |
| userid                  | string | Yes      | userid                                               |
| provider_id             | string | Yes      | provider_id                                          |
| did_type                | string | Yes      | email or other type                                  |
| did_value               | string | Yes      | web3mq@gmail.com                                     |
| timestamp               | int    | Yes      | timestamp milliseconds                               |
| web3mq_signature        | string | Yes      | use ed25519 `base64 encode` web3mq_signature [see signing detail](/docs/Web3MQ-API/signature) |

_web3mq_signature signing rule_
`base64 encode` web3mq_signature

> web3mq_signature = ed25519 private key signing(userid + did_type + did_value + timestamp)

_Body json params_

```json
{
  "provider_id": "web3mq:email:Google",
  "userid": "web3mq_userid",
  "did_type": "email",
  "did_value": "web3mq@gmail.com",
  "timestamp": 160000000,
  "web3mq_signature": "asdfasdfadsf"
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
