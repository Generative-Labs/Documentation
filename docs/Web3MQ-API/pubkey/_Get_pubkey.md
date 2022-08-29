---
title: Get PublicKey
order: 3
group:
  title: PublicKey
  order: 4
---

## Get PublicKey

---

> **GET** `/api/pubkey/`

| Parameters in URL | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| userid            | string | Yes      | [see userid detail](/docs/Web3MQ-API/pubkey/Save_pubkey#generate-your-userid) |
| target_userid     | string | Yes      | target userid                                                         |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| signature         | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |
|                   |
| pubkey_type       | string | Yes      | ed25519                                                               |

_signature signing rule_

> signature = ed25519 private key signing(userid + target_userid + pubkey_type + timestamp)

_body params_

```json
{
  "userid": "your userid",
  "target_userid": "target_userid",
  "signature": "your ed25519 private signature",
  "timestamp": 1656991509327,
  "pubkey_type": "ed25519"
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
    "pubkey": "pubkey",
    "pubkey_type": "ed25519"
  }
}
```
