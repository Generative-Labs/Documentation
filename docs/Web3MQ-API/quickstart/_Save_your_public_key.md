---
sidebar_position: 2
title: 3. Save your public key
order: 4
group:
  title: Quickstart
  order: 4
---

# Save your public key

**Save your public key, request Web3MQ network with some params**

- Such as your ed25519 public key
- Your wallet addres and MetaMask signature etc.
- Other parameters are below the docs

---

> **POST** `/api/pubkey/`

| Parameters in body | Type   | Required | Parameters Description              |
| ------------------ | ------ | -------- | ----------------------------------- |
| userid             | string | Yes      | "user:" + ed25519_pubkey_hex_string |
| pubkey             | string | Yes      | ed25519 public key hex string       |
| timestamp          | int    | Yes      | timestamp milliseconds              |
| metamask_signature          | string | Yes      | metamask signature                  |
| sign_content       | string | Yes      | metamask signing content            |
| wallet_address     | string | Yes      | wallet address                      |
| wallet_type        | string | Yes      | eth                                 |

```ts
let userid = 'user:' + ed25519_pubkey_hex_string;
```

_body params_

```json
{
  "userid": "userid",
  "pubkey": "ed25519 pubkey",
  "metamask_signature": "metamask signature",
  "sign_content": "metamask sign_content",
  "timestamp": 1656991509327,
  "wallet_address": "0x1234t3jfjadiosf",
  "wallet_type": "eth"
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
  "msg": "ok"
}
```
