---
title: User follow someone
order: 1
group:
  title: Contact
  order: 5
---

## User Follow someone

> **POST** `/api/following/`

_Request Headers_

| field                 | Required | headers Description             | example                          |
| --------------------- | -------- | ------------------------------- | -------------------------------- |
| web3mq-request-pubkey | Yes      | your login keyapir's public key | 59daabd77706ba022ceaed10e4275bd6 |
| didkey                | Yes      | your did_type + ":" + did_value | eth:0xa1b1233fdfde               |

_Request Payload_

| Parameters in JSON body | Type   | Required         | Parameters Description                       |
| ----------------------- | ------ | ---------------- | -------------------------------------------- |
| userid                  | string | Yes              |                                              |
| target_userid           | string | Yes              |                                              |
| action                  | string | follow or cancel |                                              |
| timestamp               | int    | Yes              | timestamp milliseconds                       |
| did_type                | string | Yes              | eth or startknet                             |
| did_signature           | string | Yes              | wallet signature                             |
| did_pubkey              | string | No               | starknet pubkey (if did_type equal starknet) |
| sign_content            | string | Yes              | wallet signing content                       |
| content                 | string | No               | follow content                               |

<!-- _web3mq_user_signature signing rule_ -->

<!-- > web3mq_user_signature = ed25519 private key signing(userid + target_userid + action + timestamp) -->

_Body json params_

```javascript
let wallet_address = "your wallet_address"
let wallet_type = Ethereum // or StarkNet
let nonce = sha3_224(userid + action + target_userid + timestamp) // hex format

let sign_content = `
Web3MQ wants you to sign in with your ${wallet_type} account:
${wallet_address}

For follow signature

Nonce: ${nonce}
Issued At: ${moment().utc().local().format('DD/MM/YYYY hh:mm')}`;
`

let did_signature = wallet_signing(sign_content);
```

```json
{
  "userid": "your userid",
  "target_userid": "target userid",
  "action": "follow",
  "did_type": "eth",
  "did_signature": "<wallet signature>",
  "sign_content": "<sign_content>",
  "timestamp": 1656991509327
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
