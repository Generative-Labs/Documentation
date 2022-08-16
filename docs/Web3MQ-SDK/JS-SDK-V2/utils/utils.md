---
position: 19
---

# Utils

## Methods

| name                   | type     | Parameters Description            | response                                                       |
| ---------------------- | -------- | --------------------------------- | -------------------------------------------------------------- |
| GenerateEd25519KeyPair | function | none                              | [KeyPairsType](/docs/Web3MQ-SDK/JS-SDK-V2/types/#keypairstype) |
| DownloadKeyPair        | function | (text: string, filename: string ) | none                                                           |

## GenerateEd25519KeyPair

```tsx
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
