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

_Request Headers_

| field                 | Required | headers Description             | example                                     |
| --------------------- | -------- | ------------------------------- | ------------------------------------------- |
| web3mq-request-pubkey | Yes      | your login keyapir's public key | 59daabd77706ba02a97c523513a2ceaed10e4275bd6 |
| didkey                | Yes      | your did_type + ":" + did_value | eth:0xa1b1233fdfde                          |

_Request Payload_

| Parameters in URL | Type         | Required | Parameters Description                                                |
| ----------------- | ------------ | -------- | --------------------------------------------------------------------- |
| userid            | string       | Yes      | userid |
| messages          | string array | Yes      | message id list                                                       |
| status            | string       | Yes      | read                                                                  |
| timestamp         | int          | Yes      | timestamp milliseconds                                                |
| web3mq_signature         | string       | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Ethos-API/signature)                  |

_signature signing rule_

`base64 encode` web3mq_signature

> web3mq_signature = ed25519 private key signing(userid + status + timestamp)

_url query params_

```json
{
  "userid": "your userid",
  "web3mq_signature": "web3mq_signature",
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
