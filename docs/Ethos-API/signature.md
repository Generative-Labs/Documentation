---
nav:
  title: docs
title: Signature
order: 20
sidebar_position: 20
---

# Ethos Signature

- Ethos use ed25519 key pair for signing of requests


## Signing requests data

_code example_

```js
// Common.js and ECMAScript Modules (ESM)
import * as ed from '@starcoin/stc-ed25519';

const Uint8ToBase64String = (u8a: any) => {
  return btoa(String.fromCharCode.apply(null, u8a));
};

const Ed25519Sign = async (privateKey: any, message: Uint8Array) => {
  const signature = await ed.sign(message, privateKey);
  return signature;
};

let content_need_to_signing = 'content_need_to_signing';

let bytes = await Ed25519Sign(
  PrivateKey,
  new TextEncoder().encode(content_need_to_signing),
);

let signature = Uint8ToBase64String(bytes);
```


_code example_


```js
// Common.js and ECMAScript Modules (ESM)
import * as ed from '@starcoin/stc-ed25519';

const Uint8ToBase64String = (u8a: any) => {
  return btoa(String.fromCharCode.apply(null, u8a));
};

const Ed25519Sign = async (privateKey: any, message: Uint8Array) => {
  const signature = await ed.sign(message, privateKey);
  return signature;
};

let content_need_to_signing = 'content_need_to_signing';

let bytes = await Ed25519Sign(
  PrivateKey,
  new TextEncoder().encode(content_need_to_signing),
);

let signature = Uint8ToBase64String(bytes);
```
