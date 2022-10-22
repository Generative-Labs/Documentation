---
title: Search contacts
order: 2
group:
  title: Contact
  order: 4
---

## Search contacts

---

> **GET** `/api/contacts/search/`

| Parameters in URL | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| userid            | string | Yes      | userid |
| keyword           | string | Yes      | search keyword                                                        |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature  | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |

_url query params_

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + keyword + timestamp)

```json
{
  "userid": "your userid",
  "web3mq_signature": "web3mq_signature",
  "timestamp": 1656991509327,
  "keyword": "wallet address"
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
    "result": [
      {
        "userid": "userid"
      }
    ]
  }
}
```
