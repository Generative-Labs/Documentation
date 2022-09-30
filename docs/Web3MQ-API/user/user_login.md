---
title: User Login
order: 1
group:
  title: User
  order: 5
---

## User Login

> **POST** `/api/user_login/`

| Parameters in Body | Type   | Required | Parameters Description |
| ------------------ | ------ | -------- | ---------------------- |
| userid             | string | Yes      | userid                 |
| did_type           | string | Yes      | eth                    |
| did_value          | string | Yes      | wallet address         |
| timestamp          | int    | Yes      | timestamp milliseconds |
| did_signature      | string | Yes      | metamask_signature     |
| signature_content  | string | Yes      | signature_content      |
| pubkey_type        | string | Yes      | ed25519                |
| pubkey_value       | string | Yes      | pubkey_value           |
| nickname           | string | No       | nickname               |
| avatar_url         | string | No       | avatar_url             |
| avatar_base64      | string | No       | avatar_base64          |

```js
// NonceContent = contact string and sha3_224 hash
NonceContent = sha3_224 hash(userid + pubkey_type + pubkey_value + did_type + did_value +  timestamp)

let signature_content = `Web3MQ wants you to sign in with your Ethereum account:
${wallet_address}
For Web3MQ login
URI: ${your_domain_url}
Version: 1

Nonce: ${NonceContent}
Issued At: ${moment().utc().local().format('DD/MM/YYYY hh:mm')}`;
```

```json
{
  "userid": "user:3fasdf324234",
  "did_type": "eth",
  "did_value": "0x123456",
  "did_signature": "metamask_signature",
  "pubkey_value": "pubkey",
  "pubkey_type": "ed25519",
  "timestamp": 160000000,

  "nickename": "nickename",
  "avatar_base64": "avatar_base64",
  "avatar_url": "avatar_url"
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
    "userid": "userid",
    "did_value": "wallet_address",
    "did_type": "eth"
  }
}
```
