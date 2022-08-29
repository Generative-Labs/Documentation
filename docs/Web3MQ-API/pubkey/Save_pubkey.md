---
title: Save PublicKey
order: 2
group:
  title: PublicKey
  order: 4
---

# Save my PublicKey

---

> **POST** `/api/pubkey/`

| Parameters in body | Type   | Required | Parameters Description                  |
| ------------------ | ------ | -------- | --------------------------------------- |
| userid             | string | Yes      | user: + `ed25519 public key hex string` |
| pubkey             | string | Yes      | ed25519 public key hex string           |
| sign_content       | string | Yes      | need to signing content                 |
| timestamp          | int    | Yes      | timestamp milliseconds                  |
| metamask_signature | string | Yes      | metamask signing string                 |
| wallet_address     | string | Yes      | wallet address                          |
| wallet_type        | string | Yes      | eth                                     |
| nickname           | string | No       | nickname                                |
| avatar_url         | string | No       | avatar url                              |

## Generate your userid

```ts
let userid = 'user:' + ed25519_pubkey_hex_string;
```

_body params_

```json
{
  "userid": "userid",
  "pubkey": "ed25519 public key hex string",
  "sign_content": "sign_content",
  "metamask_signature": "metamask signature",
  "timestamp": 1656991509327,
  "wallet_address": "0x1234t3jfjadiosf",
  "wallet_type": "eth",
  "nickname": "your nickname",
  "avatar_url": "your avatar url"
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

## JavaScript example


## MetaMask signing example

```bash
npm install js-sha3
# or
yarn add js-sha3
```

```js
import { sha3_224 } from 'js-sha3';

const { PrivateKey, PublicKey } = await GenerateEd25519KeyPair();
// ⚠️ Keep your private key in safe place

let ed25519_pubkey = PublicKey;
let userid = 'user:' + ed25519_pubkey;

let wallet_address = 'your wallet address';
let wallet_type = 'eth';

let timestamp = Date.now();

let NonceContent = sha3_224(
  userid + wallet_address + wallet_type + ed25519_pubkey + timestamp.toString(),
);

let your_domain_url = 'https://www.web3mq.com';

let signContent = `Web3MQ wants you to sign in with your Ethereum account:
${wallet_address}
For Web3MQ registration
URI: ${your_domain_url}
Version: 1

Nonce: ${NonceContent}
Issued At: ${moment().utc().local().format('DD/MM/YYYY hh:mm')}`;

// @ts-ignore metamask signature
const metamask_signature = await window.ethereum.request({
  method: 'personal_sign',
  params: [signContent, wallet_address, 'web3mq'],
});

let payload = {
  userid: userid,
  pubkey: ed25519_pubkey,
  metamask_signature: metamask_signature,
  sign_content: signContent,
  wallet_address: wallet_address,
  wallet_type: 'eth',
  timestamp: timestamp,
};
```
