---
sidebar_position: 1
title: 1. User Register
order: 1
group:
  title: Quickstart
---


# User Register

- Generate Wallet signature
  - Signing secret data(your password and other info) with Wallet (MetaMask/StarkNet)
- Generate Ed25519 key pair use wallet signature which call Main KeyPair

```js
// import nacl, { BoxKeyPair } from 'tweetnacl';
import * as ed from '@noble/ed25519';

import jssha256 from 'js-sha256';

function sha256(data: string | Uint8Array): Uint8Array {
  return new Uint8Array(jssha256.sha256.digest(data));
}

let wallet_type = 'eth'; // if use another wallet StartkNet wallet_type equal startkent
let wallet_address = '<your wallet_address>';
let keyIndex = 1;
let password = '<your enter password>';
let keyMSG = `${wallet_type}:${wallet_address}${keyIndex}${password}`;

const magicString = new TextEncoder().encode(
  sha3_224_hash(`$web3mq${keyMSG}web3mq$`),
);
// magicString need format to Base64String;

let signContent = `Signing this message will allow this app to decrypt messages in the Web3MQ protocol for the following address: ${wallet_address}. This won’t cost you anything.

If your Web3MQ wallet-associated password and this signature is exposed to any malicious app, this would result in exposure of Web3MQ account access and encryption keys, and the attacker would be able to read your messages.

In the event of such an incident, don’t panic. You can call Web3MQ’s key revoke API and service to revoke access to the exposed encryption key and generate a new one!

Nonce: ${magicString}`;

// get wallet signing result call wallet_signing
let secretKey = sha256(wallet_signing(signContent)); // format to bytes;

if (secretKey.length !== 32) {
  // ed25519
  throw new Error('Secret key must have 32 bytes');
}

let privateKey = secretKey;
let pubkey = await ed.getPublicKey(privateKey);

// We recommend use AES-GCM 256   encrypt private key protect user's privateKey;

// symmetricEncrypt(secretKey, sha256(password));
```

## Generate Wallet signature

> Signing secret data(your password and other info) with Wallet (MetaMask/StarkNet)

## Register API

> **POST** `/api/user_register_v2/`

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
| testnet_access_key | string | Yes      | testnet_access_key     |

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
  "testnet_access_key": "testnet_access_key",

  "userid": "user:3fasdf324234",
  "did_type": "eth",
  "did_value": "0x123456",
  "did_signature": "<your wallet signature>",
  "sign_content": "<your wallet signature_content>",
  "pubkey_value": "pubkey",
  "pubkey_type": "ed25519",
  "timestamp": 160000000,

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
