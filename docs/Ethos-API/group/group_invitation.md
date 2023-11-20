---
title: Group Invitation
group:
  title: Group
---

## Invite users join group

---

> **POST** `/api/group_invitation/`

_Request Headers_

| field                 | Required | headers Description             | example                                     |
| --------------------- | -------- | ------------------------------- | ------------------------------------------- |
| web3mq-request-pubkey | Yes      | your login keyapir's public key | 59daabd77706ba02a97c523513a2ceaed10e4275bd6 |
| didkey                | Yes      | your did_type + ":" + did_value | eth:0xa1b1233fdfde                          |

_Request Payload_

| Parameters in body | Type         | Required | Parameters Description                                                |
| ------------------ | ------------ | -------- | --------------------------------------------------------------------- |
| userid             | string       | Yes      | userid |
| groupid            | string       | Yes      | group id                                                              |
| members            | string array | Yes      | you want to invite user list                                          |
| timestamp          | int          | Yes      | timestamp milliseconds                                                |
| web3mq_signature   | string       | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Ethos-API/signature)                  |

_web3mq_signature signing rule_

`base64 encode` signature

> web3mq_signature = ed25519 private key signing(userid + groupid + timestamp)

_body params_

```json
{
  "userid": "your userid",
  "groupid": "group id",
  "members": ["userid 1", "userid 2", "userid 3"],
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
