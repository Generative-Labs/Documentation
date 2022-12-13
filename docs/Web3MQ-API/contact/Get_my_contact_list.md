---
title: Get my contact list
order: 3
group:
  title: Contact
---

## Get my contact list

> **GET** `/api/contacts/`

| Parameters in URL | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| page              | int    | Yes      | page number                                                           |
| size              | int    | Yes      | page size                                                             |
| userid            | string | Yes      | userid |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature  | string | Yes      | use ed25519 `base64 encode` [see signing detail](/docs/Web3MQ-API/signature)                  |

_url query params_

_web3mq_signature signing rule_

`base64 encode` signature


> web3mq_signature = ed25519 private key signing(userid + timestamp)

```json
{
  "userid": "your userid",
  "web3mq_signature": "web3mq_signature",
  "timestamp": 1656991509327,
  "page": 1,
  "size": 20
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
    "total": 35,
    "result": [
      {
        "userid": "userid",
        "nickname": "nickename",
        "avatar_url": "avatar_url"
      }
    ]
  }
}
```
