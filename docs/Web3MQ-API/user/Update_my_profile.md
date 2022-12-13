---
title: Update my profile
order: 4
group:
  title: User
  order: 5
---

## Update my profile

---

> **POST** `/api/my_profile/`

| Parameters in Body | Type   | Required | Parameters Description                               |
| ------------------ | ------ | -------- | ---------------------------------------------------- |
| userid             | string | Yes      | your userid                                          |
| nickname           | string | Yes      | nickname                                             |
| avatar_url         | string | Yes      | avatar url                                           |
| timestamp          | int    | Yes      | timestamp milliseconds                               |
| web3mq_signature   | string | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Web3MQ-API/signature) |

_web3mq_signature signing rule_

`base64 encode` signature

> web3mq_signature = ed25519 private key signing(userid + timestamp)

```json
{
  "userid": "your userid",
  "nickname": "your nickname",
  "avatar_url": "your avatar url",
  "web3mq_signature": "web3mq_signature",
  "timestamp": 1656991509327
}
```

**response**

| Parameters | Type   | Always Return | Parameters Description                                      |
| ---------- | ------ | ------------- | ----------------------------------------------------------- |
| code       | int    | Yes           | result code, 0 means success, other code see msg's contents |
| msg        | string | Yes           | result description                                          |
| data       | dict   | Yes           | return includes response info                               |

```json
{
  "code": 0,
  "msg": "ok",
  "data": {
    "userid": "userid",
    "wallet_address": "wallet_address",
    "wallet_type": "eth",
    "nickname": "nickname",
    "avatar_url": "avatar_url"
  }
}
```
