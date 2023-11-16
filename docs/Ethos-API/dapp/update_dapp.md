---
title: Update DApp
order: 1
group:
  title: DApp
  order: 6
---


# Update DApp

> **POST** `/api/update_dapp/`

_Request Headers_

| field                 | Required | headers Description             | example                          |
| --------------------- | -------- | ------------------------------- | -------------------------------- |
| web3mq-request-pubkey | Yes      | your login keyapir's public key | 59daabd77706ba022ceaed10e4275bd6 |
| didkey                | Yes      | your did_type + ":" + did_value | eth:0xa1b1233fdfde               |

_Request Payload_

| Parameters in Body json | Type   | Required | Parameters Description                                                                               |
| ----------------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------- |
| creator_id              | string | Yes      | userid                                                                                               |
| dapp_id                 | string | Yes      | dapp_id                                                                                              |
| dapp_name               | string | No       | Web3MQ chat service                                                                                  |
| dapp_description        | string | No       | Web3MQ chat dapp                                                                                     |
| dapp_type               | string | No       | im or other type                                                                                     |
| dapp_pubkey             | string | No       | dapp ed25519 pubkey                                                                                  |
| domain                  | string | No       | dapp deploy domain                                                                                   |
| timestamp               | int    | Yes      | timestamp milliseconds                                                                               |
| web3mq_user_signature   | string | Yes      | use creator ed25519 private key signing ( `base64 encode` ) [see signing detail](/docs/Ethos-API/signature) |

_web3mq_signature signing rule_

`base64 encode` signature

> web3mq_user_signature = ed25519 private key signing(creator_id + dapp_id + [dapp_type] + [dapp_name] + [dapp_pubkey] + [domain] + timestamp)

_Body json params_

```json
{
  "creator_id": "userid",
  "dapp_id": "ethos:im",
  "dapp_type": "im",
  "domain": "www.yourdomain.com", //
  "dapp_name": "Web3mqIM",
  "dapp_description": "Web3mq is a chat service dapp",
  "dapp_pubkey": "ed25519 pubkey",
  "timestamp": 1632432434,
  "web3mq_user_signature": "web3mq_user_signature"
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
