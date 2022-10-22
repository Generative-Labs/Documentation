---
title: 4. Create group
order: 6
group:
  title: Quickstart
  order: 6
---

# Create a group (chat room)

---

> **POST** `/api/groups/`

| Parameters in body | Type   | Required | Parameters Description                                                |
| ------------------ | ------ | -------- | --------------------------------------------------------------------- |
| userid             | string | Yes      | userid |
| timestamp          | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature   | string | Yes      | use ed25519 private key signing                                       |

_body params_

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
    "groupid": "groupid"
  }
}
```
