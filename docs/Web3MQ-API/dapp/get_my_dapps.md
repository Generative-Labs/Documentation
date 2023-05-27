---
title: My Create DApp List
order: 1
group:
  title: DApp
  order: 6
---


#  My Create DApp List

---


> **GET** `/api/my_create_dapps/`

_Request Headers_

| field                 | Required | headers Description             | example                                     |
| --------------------- | -------- | ------------------------------- | ------------------------------------------- |
| web3mq-request-pubkey | Yes      | your login keyapir's public key | 59daabd77706ba02a97c523513a2ceaed10e4275bd6 |
| didkey                | Yes      | your did_type + ":" + did_value | eth:0xa1b1233fdfde                          |

_Request Payload_

| Parameters in URL | Type   | Required | Parameters Description                                                |
| ----------------- | ------ | -------- | --------------------------------------------------------------------- |
| creator_id            | string | Yes      | userid    |
| timestamp         | int    | Yes      | timestamp milliseconds                                                |
| web3mq_user_signature  | string | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Web3MQ-API/signature)                  |

> web3mq_user_signature = ed25519 private key signing(creator_id + timestamp)

_url  params_

```bash
/api/my_create_dapps/?creator_id=userid&web3mq_user_signature=web3mq_user_signature&timestamp=timestamp
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
    "total_count": 1,
    "data_list": [
        {
            "creator_id": "creator_id",
            "dapp_id": "dapp_id",
            "dapp_name": "dapp_name",
            "dapp_type": "dapp_type",
            "create_at": 160000000,
            "dapp_pubkey":  "<dapp pubkey>",
            "dapp_description": ""
        }
    ]
  }
}
```
