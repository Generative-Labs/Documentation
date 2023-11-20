---
title: Get User Bind DID profile
order: 1
group:
  title: DID
  order: 7
---

# User Bind DID

> **POST** `/api/get_user_binddids/`

_Request Headers_

| field                 | Required | headers Description             | example                                     |
| --------------------- | -------- | ------------------------------- | ------------------------------------------- |
| web3mq-request-pubkey | Yes      | your login keyapir's public key | 59daabd77706ba02a97c523513a2ceaed10e4275bd6 |
| didkey                | Yes      | your did_type + ":" + did_value | eth:0xa1b1233fdfde                          |

_Request Payload_

| Parameters in Body json | Type   | Required | Parameters Description                               |
| ----------------------- | ------ | -------- | ---------------------------------------------------- |
| userid                  | string | Yes      | userid                                               |
| timestamp               | int    | Yes      | timestamp milliseconds                               |
| web3mq_signature        | string | Yes      | use ed25519 `base64 encode` web3mq_signature [see signing detail](/docs/Ethos-API/signature) |

_web3mq_signature signing rule_

`base64 encode` web3mq_signature

> web3mq_signature = ed25519 private key signing(userid + timestamp)

_Body json params_

```json
{
  "userid": "web3mq_userid",
  "timestamp": 160000000,
  "web3mq_signature": "asdfasdfadsf"
}
```

**response**

| Parameters   | Type        | Always Return | Parameters Description                                      |
| ------------ | ----------- | ------------- | ----------------------------------------------------------- |
| code         | int         | Yes           | result code, 0 means success, other code see msg's contents |
| msg          | string      | Yes           | result description                                          |
| data         | object list | Yes           | result list                                                 |
| -did_type    | string      | Yes           | email                                                       |
| -did_type    | string      | Yes           | email                                                       |
| -did_value   | string      | Yes           | email@web3mq.com                                            |
| -metadata    | json        | Yes           | provider response metadata                                  |
| -provider_id | string      | Yes           | provider_id                                                 |

```json
{
  "code": 0,
  "msg": "ok",
  "data": [
    {
      "did_type": "email",
      "did_value": "email@web3mq.com",
      "metadata": {},
      "provider_id": "web3mq:email"
    },
    {
      "did_type": ".bit",
      "did_value": "address.bit",
      "metadata": {},
      "provider_id": "did:bit"
    }
  ]
}
```
