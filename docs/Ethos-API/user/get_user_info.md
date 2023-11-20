---
title: Get user info
order: 1
group:
  title: User
  order: 5
---

## Get user info

> **POST** `/api/get_user_info/`

| Parameters in URL | Type   | Required | Parameters Description |
| ----------------- | ------ | -------- | ---------------------- |
| did_type          | string | Yes      | eth                    |
| did_value         | string | Yes      | wallet address         |
| timestamp         | int    | Yes      | timestamp milliseconds |

```json
{
  "did_type": "eth",
  "did_value": "0xasdfasdf",
  "timestamp": 1656991509327
}
```

**response**

| Parameters | Type   | Always Return | Parameters Description                                      |
| ---------- | ------ | ------------- | ----------------------------------------------------------- |
| code       | int    | Yes           | result code, 0 means success, other code see msg's contents |
| msg        | string | Yes           | result description                                          |
| data       | dict   | Yes           | return includes response info                               |

_user exists_

```json
{
  "code": 0,
  "msg": "ok",
  "data": {
    "userid": "userid",
    "did_value": "did value",
    "did_type": "did type",
    "pubkey": "pubkey",
    "pubkey_type": "ed25519",
    "wallet_address": "wallet_address",
    "wallet_type": "wallet_type",

    "signature_content": "signature_content",
    "timestamp": 16000000,
    "did_signature": "did_signature",
  }
}
```

_user not exists_

```json
{
  "code": 404,
  "msg": "User not found"
}
```
