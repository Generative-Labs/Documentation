---
title: Create Group
order: 6
group:
  title: Group
---

### Create group

---

> **POST** `/api/groups/`

| Parameters in body | Type   | Required | Parameters Description                                                |
| ------------------ | ------ | -------- | --------------------------------------------------------------------- |
| userid             | string | Yes      | [see userid detail](/docs/Web3MQ-API/pubkey/Save_pubkey#generate-your-userid) |
| group_name             | string | No      | group name |
| timestamp          | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature   | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + timestamp)

_body params_

```json
{
  "userid": "your userid",
  "group_name": "group_name",
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
