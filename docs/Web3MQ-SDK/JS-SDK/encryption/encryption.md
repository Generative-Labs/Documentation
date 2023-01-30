---
position: 9
---

# Encryption

## Methods

| name                   | type     | Parameters Description                                                         | response |
| ---------------------- | -------- | ------------------------------------------------------------------------------ | -------- |
| getMessageSharedSecret | function | (myEd25519PrivateKey: string, targetUserPubkey: string, msg_timestamp: string) | aesKey   |
| aesGCMEncrypt          | function | (keyStr: string, iv: string, inputByteData: Uint8Array )                       | encrypt  |
| aesGCMDecrypt          | function | (keyStr: string, iv: string, encoded: Uint8Array )                             | decrypt  |

## GetMessageSharedSecret

```ts
const aesKey = await getMessageSharedSecret(
  myEd25519PrivateKey,
  targetUserPubkey,
  msg_timestamp
);
```

## AesGCMEncrypt

```ts
const encrypt = await aesGCMEncrypt(keyStr, iv, inputByteData);
```

## AesGCMDecrypt

```ts
const decrypt = await aesGCMDecrypt(keyStr, iv, encoded);
```

## Example

```tsx
import { getMessageSharedSecret, aesGCMEncrypt, aesGCMDecrypt } from '@web3mq/client';

export const App = () => {
  const getEncrypt = async () => {
    const aesKey = await getMessageSharedSecret(
      'f042a2c4d1a8b6060675b641aaa3be9279a86c93c3213d0a07d6b67aedf815a4',
      '3951187a5c074b6895d0f042fd5d0027a42a8940c9154d7ba365b52b8855990d',
      String(Date.now())
    );
    const iv = 'aFq5mSRIW4aJdoAm';
    const result = await aesGCMEncrypt(
      aesKey,
      iv,
      new TextEncoder().encode('Web3MQ')
    );
    console.log('Encrypt>>>', new Uint8Array(result));
  };

  const getDecrypt = async () => {
    const aesKey = await getMessageSharedSecret(
      'f042a2c4d1a8b6060675b641aaa3be9279a86c93c3213d0a07d6b67aedf815a4',
      '3951187a5c074b6895d0f042fd5d0027a42a8940c9154d7ba365b52b8855990d',
      String(Date.now())
    );
    const iv = 'aFq5mSRIW4aJdoAm';
    const result = await aesGCMEncrypt(
      aesKey,
      iv,
      new TextEncoder().encode('Web3MQ')
    );
    const platText = await aesGCMDecrypt(aesKey, iv, new Uint8Array(result));
    console.log('decrypt>>>', new TextDecoder().decode(platText));
  };

  return (
    <div>
      <button onClick={getEncrypt}>get encrypt</button>
      <button onClick={getDecrypt}>get decrypt</button>
    </div>
  );
};
```
