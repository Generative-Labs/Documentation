---
title: Change Notification Status
order: 1
group:
  title: Notification
  order: 7
---

# Change Notification Status

---

## Change Notification status

> **POST** `/api/notification/status/`

| Parameters in URL | Type         | Required | Parameters Description                                                |
| ----------------- | ------------ | -------- | --------------------------------------------------------------------- |
| userid            | string       | Yes      | [see userid detail](/docs/Web3MQ-API/pubkey/Save_pubkey#generate-your-userid) |
| messages          | string array | Yes      | message id list                                                       |
| status            | string       | Yes      | read                                                                  |
| timestamp         | int          | Yes      | timestamp milliseconds                                                |
| signature         | string       | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |

_signature signing rule_

> signature = ed25519 private key signing(userid + status + timestamp)

_url query params_

```json
{
  "userid": "your userid",
  "signature": "signature",
  "timestamp": 1656991509327,
  "messages": ["messageid", "messageid"],
  "status": "read"
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
