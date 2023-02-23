---
title: Get My Follower list
order: 1
group:
  title: Contact
  order: 4
---

## Get My Follower list

> **GET** `/api/user_followers/`

_Request Headers_

| field                 | Required | headers Description             | example                          |
| --------------------- | -------- | ------------------------------- | -------------------------------- |
| web3mq-request-pubkey | Yes      | your login keyapir's public key | 59daabd77706ba022ceaed10e4275bd6 |
| didkey                | Yes      | your did_type + ":" + did_value | eth:0xa1b1233fdfde               |

_Request Payload_

| Parameters in URL     | Type   | Required | Parameters Description                               |
| --------------------- | ------ | -------- | ---------------------------------------------------- |
| userid                | string | Yes      |                                                      |
| timestamp             | int    | Yes      | timestamp milliseconds                               |
| web3mq_user_signature | string | Yes      |use ed25519 `base64 encode` web3mq_signature [see signing detail](/docs/Web3MQ-API/signature) |
| page                  | int    | No       |                                                      |
| size                  | int    | No       |                                                      |

_web3mq_user_signature signing rule_

> web3mq_user_signature = ed25519 private key signing(userid + timestamp)

_url query params_

```bash
/api/user_followers/?userid=userid&web3mq_user_signature=web3mq_user_signature&timestamp=timestamp&page=1&size=20
```

**response**

| Parameters | Type   | Always Return | Parameters Description                                      |
| ---------- | ------ | ------------- | ----------------------------------------------------------- |
| code       | int    | Yes           | result code, 0 means success, other code see msg's contents |
| msg        | string | Yes           | result description                                          |

```json
{
  "code": 0,
  "msg": "ok",
  "data": {
    "total_count": 10,
    "user_list": [
      {
        "userid": "user:asdfasdfasdfa",
        "follow_status": "following"
      },
      {
        "userid": "user:53245",
        "follow_status": "follow_each"
      }
    ]
  }
}
```
