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
| userid             | string | Yes      | userid |
| group_name             | string | No      | group name |
| timestamp          | int    | Yes      | timestamp milliseconds                                                |
| avatar_url |  string |  No  | avatar_url | 
| avatar_base64  |  string |  No |  avatar_base64 | 
| web3mq_signature   | string | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Web3MQ-API/signature)                  |

_web3mq_signature signing rule_

`base64 encode` signature

> web3mq_signature = ed25519 private key signing(userid + timestamp)

_body params_

```json
{
  "userid": "your userid",
  "group_name": "group_name",
  "web3mq_signature": "web3mq_signature",
  "avatar_url": "avatar_url",
  "avatar_base64": "",
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
    "groupid": "groupid",
    "avatar_url": "avatar_url",
    "group_name": "group_name"
  }
}
```
