---
nav:
  title: docs
title: Signature
order: 20
sidebar_position: 20
---

# Web3MQ Signature

- Web3MQ use ed25519 key pair for signing of requests

<!-- _For js example_ -->

<!-- 引入全量的 Markdown 文件内容 -->
<!-- 
<embed src="./ed25519key.md"></embed>
 -->
<!--
```tsx
import React from 'react';
import { MetaMaskSignatureRecoverApp } from 'Web3MQ-Docs';

export default () => <MetaMaskSignatureRecoverApp />;

``` -->

## Signing requests data

```tsx
import React from 'react';
import { Ed25519SignatureApp } from 'Web3MQ-Docs';

export default () => <Ed25519SignatureApp />;
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
