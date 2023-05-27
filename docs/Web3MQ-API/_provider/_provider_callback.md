---
title: Provider Callback
order: 1
group:
  title: Provider
  order: 7
---

# Provider Callback

- Provider should callback Web3MQ when validation passed;
- For example, when user click email validation link,
- provider check if link is valid. call web3mq provider_callback api, save validation result.

> **POST** `/api/provider_callback/`

| Parameters in Body json | Type        | Required | Parameters Description                   |
| ----------------------- | ----------- | -------- | ---------------------------------------- |
| userid                  | string      | Yes      | userid                                   |
| did_type                | string      | Yes      | email or other type                      |
| did_value               | string      | Yes      | web3mq@gmail.com                         |
| provider_id             | string      | Yes      | provider_id                              |
| metadata                | Json object | Yes      | metadata                                 |
| timestamp               | int         | Yes      | timestamp milliseconds                   |
| provider_signature      | string      | Yes      | use provider ed25519 private key signing |

_web3mq_signature signing rule_

> provider_signature = provider ed25519 private key signing(providerid + userid + did_type + did_value + timestamp)

_Body json params_

```json
{
  "provider_id": "web3mq:email:Google",
  "userid": "web3mq_userid",
  "did_type": "email",
  "did_value": "web3mq@gmail.com",
  "metadata": {
    "email": "email@web3mq.com"
  },
  "timestamp": 160000000,
  "provider_signature": "provider_signature"
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
