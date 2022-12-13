---
title: Get my profile
order: 4
group:
  title: User
  order: 5
---

## Get my profile

---

> **GET** `/api/my_profile/`

| Parameters in URL | Type   | Required | Parameters Description                               |
| ----------------- | ------ | -------- | ---------------------------------------------------- |
| userid            | string | Yes      | your userid                                          |
| timestamp         | int    | Yes      | timestamp milliseconds                               |
| web3mq_signature  | string | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Web3MQ-API/signature) |

_url query params_

_signature signing rule_
`base64 encode` signature

> web3mq_signature = ed25519 private key signing(userid + timestamp)

```json
{
  "userid": "your userid",
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
    "nickname": "nickename",
    "avatar_url": "avatar_url"
  }
}
```
