---
position: 2
---

# Register

## Methods

| Name | Parameters | response |
| --- | --- | --- |
| connectWithMateMask | keychainStore:  Bool | [KeyPair](/docs/Web3MQ-SDK/Swift-SDK/Structs/###KeyPair) |

### **Sign MetaMask**

This will wake up the MetaMask app on your phone and communicate with it, and call the `personal_sign` method of MetaMask to get the MetaMask signature, and call `/api/pubkey` to complete the registration. The key pair will be stored in Keychain by default, set the keychainStore parameter to false to disable keychain storage. You need to keep the private key in a safe place.

```swift
let result: (KeyPair, UserId) = await Client.shared.connectWithMateMask(keychainStore: false)
```