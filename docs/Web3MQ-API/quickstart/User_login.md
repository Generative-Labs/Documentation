---
sidebar_position: 2
title: 2. User Login
order: 2
group:
  title: Quickstart
---


## User Login

> **POST** `/api/user_login_v2/`

| Parameters in Body | Type   | Required | Parameters Description    |
| ------------------ | ------ | -------- | ------------------------- |
| userid             | string | Yes      | userid                    |
| did_type           | string | Yes      | eth                       |
| did_value          | string | Yes      | wallet address            |
| timestamp          | int    | Yes      | timestamp milliseconds    |
| pubkey_expired_timestamp          | int    | Yes      | timestamp milliseconds    |
| login_signature    | string | Yes      | login signature           |
| signature_content  | string | Yes      | signature_content         |
| main_pubkey        | string | Yes      | register api `public key` |
| pubkey_type        | string | Yes      | ed25519                   |
| pubkey_value       | string | Yes      | pubkey_value              |
| nickname           | string | No       | nickname                  |
| avatar_url         | string | No       | avatar_url                |
| testnet_access_key | string | Yes      | testnet_access_key        |

```js
// your_MainPrivateKey is Register api generate KeyPair' private key
let signature_content = sha3_224 hash(userid + pubkey_value + pubkey_expired_timestamp + timestamp) // string join
let login_signature = your_MainPrivateKey signing(signature_content); // base64 format
```

```json
{
  "testnet_access_key": "testnet_access_key",

  "userid": "user:3fasdf324234",
  "did_type": "eth",
  "did_value": "0x123456",
  "main_pubkey": "<your register main_pubkey>",
  "login_signature": "<your login_signature>",
  "signature_content": "<your signature_content>",
  "pubkey_value": "pubkey",
  "pubkey_type": "ed25519",
  "timestamp": 160000000,
  "pubkey_expired_timestamp": 160050000,
  "nickename": "nickename",
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
