---
title: Change Message Status
order: 1
group:
  title: Message
  order: 6
---

# Change Message Status

---

## Change message status

> **POST** `/api/messages/status/`

| Parameters in URL | Type         | Required | Parameters Description                                                |
| ----------------- | ------------ | -------- | --------------------------------------------------------------------- |
| userid            | string       | Yes      | userid |
| messages          | string array | Yes      | message id list                                                       |
| topic             | string       | Yes      | topic                                                                 |
| status            | string       | Yes      | status delivered or read                                              |
| timestamp         | int          | Yes      | timestamp milliseconds                                                |
| web3mq_signature         | string       | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + status + timestamp)

```ts
if message from group chat:
	topic = group id

if message from one chat:
	topic = userid
```

_url query params_

```json
{
  "userid": "your userid",
  "topic": "topic",
  "web3mq_signature": "web3mq_signature",
  "timestamp": 1656991509327,
  "messages": ["messageid", "messageid"],
  "status": "delivered" // delivered or read
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
