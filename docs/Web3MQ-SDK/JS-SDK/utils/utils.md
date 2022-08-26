---
position: 19
---

# Utils

## Methods

| name                   | type     | Parameters Description            | response                                                       |
| ---------------------- | -------- | --------------------------------- | -------------------------------------------------------------- |
| GenerateEd25519KeyPair | function | none                              | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK/types/#keypairstype) |
| DownloadKeyPair        | function | (text: string, filename: string ) | none                                                           |

## GenerateEd25519KeyPair

```tsx
import { GenerateEd25519KeyPair } from 'web3-mq';

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
