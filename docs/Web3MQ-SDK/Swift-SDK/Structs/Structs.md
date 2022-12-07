---
position: 9
---

# Data Types

### EthAccount
```swift
public struct EthAccount {
    public let address: String?
    public let balance: Double?
    public let shortAddress:String?
}
```

### KeyPair
```swift
public struct KeyPair {
    public let privateKey: String
    public let publicKey: String
}
```

### MessageStatus
```swift
public enum MessageStatus: String {
		case delivered
		case read 
}
```

### NotificationStatus

```swift
public enum NotificationStatus: String {
		case delivered
		case read
}
```

### Topic

```swift
public struct Topic {
			public let topicId: String
			public let topicName: String?
}
```

### Notificaion

```swift
public struct Notificaion {
			public let title: String
			public let content: String
			public let type: Int
			public let version: Int 
			public let timestamp: Int 
}
```

### UserProfile

```swift
public struct UserProfile {
    public let userId: String
    public let walletAddress: String?
    public let walletType: String?
    public let nickname: String?
    public let avatarUrl: String?
}
```

### UserInfo

```swift
public struct UserInfo: Codable {
    let didType: String
    let didValue: String
    let userId: String
    
    let publicKey: String?
    let publicKeyType: String?
    let walletAddress: String?
    let walletType: String?
    let signatureContent: String?
    let timestamp: Int?
    let didSignature: String?
}
```

### MessageStatus
```swift 
public enum MessageStatus: String, Codable {
    case delivered
    case read
}
```

### Message 

```swift 
public struct Message: Codable {

    public struct Status: Codable {
        public let status: MessageStatus?
        public let timestamp: Int?
    }

    public var cipherSuite: String = "NONE"
    public let from: String
    public let topic: String
    public let messageId: String
    public let timestamp: Int

    /// base64
    public let payload: String

    public let messageStatus: Status?

}
```
