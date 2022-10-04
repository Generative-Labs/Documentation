---
title: My Create Topic List
order: 1
group:
  title: Topic
  order: 7
---

# My Create Topic list

---

## My Create Topic list

> **GET** `/api/my_create_topic_list/`

| Parameters in URL | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| userid            | string | Yes      | [see userid detail](/docs/Web3MQ-API/pubkey/save_pubkey#generate-your-userid) |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_signature  | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature)                  |
| page              | not    | Yes      |                                                                       |
| size              | not    | Yes      |                                                                       |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + timestamp)

_url query params_

```bash
/api/my_create_topic_list/?userid=userid&web3mq_signature=web3mq_signature&timestamp=timestamp&page=1&size=20
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
        "topicid": "topic:asdfasdfasdfa"
     }
  ]
}
```
