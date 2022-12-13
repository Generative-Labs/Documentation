---
title: My Subscribe Topic List
order: 1
group:
  title: Topic
  order: 7
---

# My Subscribe Topic list

---

## My Subscribe Topic list

> **GET** `/api/my_subscribe_topic_list/`

| Parameters in URL | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| userid            | string | Yes      | userid |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature  | string | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Web3MQ-API/signature)                  |
| page              | not    | Yes      |                                                                       |
| size              | not    | Yes      |                                                                       |

_web3mq_signature signing rule_

`base64 encode` signature

> web3mq_signature = ed25519 private key signing(userid + timestamp)

_url query params_

```bash
/api/my_subscribe_topic_list/?userid=userid&web3mq_signature=web3mq_signature&timestamp=timestamp&page=1&size=20
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
  "data": [
    {
      "topicid": "topic:asdfasdfasdfa",
      "topic_name": "topic name"
    }
  ]
}
```
