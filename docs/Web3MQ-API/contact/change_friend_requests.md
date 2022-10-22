---
title: Agree or reject friend request
order: 8
group:
  title: Contact
---

## Agree or reject friend request

---

> Agree or reject someone's friend request

> **POST** `/api/contacts/friend_requests/`

| Parameters in Body | Type   | Required | Parameters Description                                                |
| ------------------ | ------ | -------- | --------------------------------------------------------------------- |
| userid             | string | Yes      | userid |
| target_userid      | string | Yes      | who your want to reject or agree friend request                       |
| timestamp          | int    | Yes      | timestamp milliseconds                                                |
| action             | string | Yes      | `agree`                                                               |
| web3mq_signature   | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + action + target_userid + timestamp)

```json
{
  "userid": "your userid",
  "target_userid": "target userid",
  "action": "agree",
  "timestamp": 1656991509327,
  "web3mq_signature": "web3mq_signature"
}
```

**response**

| Parameters | Type   | Always Return | Parameters Description                                      |
| ---------- | ------ | ------------- | ----------------------------------------------------------- |
| code       | int    | Yes           | result code, 0 means success, other code see msg's contents |
| msg        | string | Yes           | result description                                          |

```json
{
  "code": 0,
  "msg": "ok"
}
```
