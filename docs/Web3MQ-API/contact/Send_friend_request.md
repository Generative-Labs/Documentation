---
title: Send friend request
order: 5
group:
  title: Contact
---

## Send friend request

> send friend request to someone

> **POST** `/api/contacts/add_friends/`

| Parameters in Body | Type   | Required | Parameters Description                                                |
| ------------------ | ------ | -------- | --------------------------------------------------------------------- |
| userid             | string | Yes      | [see userid detail](/docs/Web3MQ-API/pubkey/Save_pubkey#generate-your-userid) |
| target_userid      | string | Yes      | who your want to send friend request                                  |
| timestamp          | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature   | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + target_userid + timestamp)

```json
{
  "userid": "your userid",
  "target_userid": "target userid",
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
