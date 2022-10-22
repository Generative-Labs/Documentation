---
title: Group List
order: 5
group:
  title: Group
---

## Get list of groups i have joined

---

> **GET** `/api/groups/`

| Parameters in URL | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| page              | int    | Yes      | page number                                                           |
| size              | int    | Yes      | page size                                                             |
| userid            | string | Yes      | userid |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature  | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |
|                   |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + timestamp)

_url query params_

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
| data       | dict   | Yes           | return includes contacts info                               |

```json
{
  "code": 0,
  "msg": "ok",
  "data": {
    "total": 35,
    "result": [
      {
        "groupid": "group id"
      }
    ]
  }
}
```
