---
position: 19
---

# Utils

## Methods

| name                   | type     | Parameters Description            | response                                                             |
| ---------------------- | -------- | --------------------------------- | -------------------------------------------------------------------- |
| GenerateEd25519KeyPair | function | none                              | Promise: [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype) |
| DownloadKeyPair        | function | 1.text: string 2.filename: string | none                                                                 |

## GenerateEd25519KeyPair

```tsx
import { GenerateEd25519KeyPair } from '@web3mq/client';

const keys = await GenerateEd25519KeyPair();
```

## DownloadKeyPair

```tsx
<button
  onClick={() => {
    DownloadKeyPair('text', 'filename');
  }}>
  DownloadKeyPair
</button>
```
