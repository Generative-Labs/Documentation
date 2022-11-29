---
position: 2
---

# Register

## Methods

| Name | Parameters | response |
| --- | --- | --- |
| register | didType: String, didValue: String, signatureContent: String, didSignature: String, timestamp: UInt64, keychainStore: Bool | [KeyPair](/docs/Web3MQ-SDK/Swift-SDK/Structs/###KeyPair), userId |

## **Register**

You should get the Wallet signature firstly. The keypair will be stored in Keychain by default, set the keychainStore parameter to false to disable keychain storage. You need to keep the private key in a safe place.

```swift
let result: (KeyPair, UserId) = await Client.shared.register(didType: String, didValue: String, signatureContent: String, didSignature: String, timestamp: UInt64, keychainStore: Bool)
```