---
position: 1
---

# Quick Start

## iOS Main Features

- **Uses `UIKit` patterns and paradigms:** The API follows the design of native system SDKs. It makes integration with your existing code easy and familiar.
- **First-class support for `Combine` and `Concurrency`**
- **Swift native API:** Uses Swift's powerful language features to make the SDK usage easy and type-safe.

## Integrating the SDK

### Prerequisites

before you run your project, make sure that your development environment is provided with:

- Xcode 11
- iOS 13.0 or later

### Installation

#### Swift Package Manager

The [Swift Package Manager](https://swift.org/package-manager/) is a tool for automating the distribution of Swift code and is integrated into the `swift` compiler.

Once you have your Swift package set up, adding Web3MQSDK as a dependency is as easy as adding it to the `dependencies` value of your `Package.swift`.

```swift
dependencies: [
    .package(url: "", .upToNextMajor(from: "0.1.0"))
]
```

#### CocoaPods

[CocoaPods](https://cocoapods.org/) is a dependency manager for Cocoa projects. For usage and installation instructions, visit their website. To integrate Alamofire into your Xcode project using CocoaPods, specify it in your `Podfile`:

```swift
pod 'Web3MQSDK'
```

## Initialize the SDK

Let's get started by initializing the client:

```swift
import Web3MQSDK

// the SDK will find the endpoint with lowest latency for you 
Client.shared.setup(with: Configuration(appKey: "{AppKey}"))

// or you prefer to set a specific endpoint     
Client.shared.setup(with: Configuration(appKey: "{AppKey}", endpoint: Endpoint.Dev.jp1))
```

## Connecting

### Signup

For any first-time user of Web3MQ's network, you'll need to register on Web3MQ's network. SDK takes care of the key generation process and subsequent wallet signing process. `Client.shared.connectWithMateMask` is a utility method that does this automatically.

```swift
// Keep your private key in a safe place!
let (keyPair, userId) = await Client.shared.connectWithMateMask()
```

SDK will save the keypair in Keychain defaultly, you could disable it by setting keychainStore false 

```swift
let (keyPair, userId) = await Client.shared.connectWithMateMask(keychainStore: false)
```

### Connecting Automatically

If there is a key-pair in keychain, it will automatically connect to that user.
```swift
Client.shared.autoConnect()
```

### Connecting Manually

You could also connect manually.

```swift
Client.shared.connect(with: KeyPair(privateKey: "{PrivteKey}", publicKey: "{PublicKey}"), userId: "{UserId}")
```

### Connecting Status

If you want to react instantly with the connecting status updating, just subscribe this publisher:  `Client.shared.connectingStatusPublisher` 

```swift
let status: Web3MQConnectingStatus = Client.shared.connectingStatus

public enum Web3MQConnectingStatus {
		case idle 
		// the SDK will always try to reconnect the Web3MQ network, so you don't need 
		// to care about that part.
		case connecting
		case connected(nodeId: String)
		// only when you disconnect manually 
		case disconnected 
		case error(_ error: Error?)
}
```

## Channels

Let’s continue by initializing your first channel. A channel contains messages, a list of members that are watching the channel. The example below shows how to set up a channel to support chat for a group conversation:

```swift
let channelId: String = await Client.shared.channelManager.createChannel(name: "{channel_name}") 
```

## Messages
Now that we have the channel set up, let's send our first chat message:

### Sending Message

send a message to a user or a channel 

```swift
// sessionId: userId or channelId
Client.shared.messageManager.sendMessage("{Text}", topicId: "{TopicId}") async throws
```

### Receiving Message

```swift
Client.shared.messageManager.messagePublisher.sink { messages in 

}
```

## Notifications

### Receiving Notification

The notification is also a specific message. Just subscribe the `notificationPublisher` to receive notifications.

```swift
Client.shared.notificationManager
            .notificationPublisher
            .sink { notification in
                
            }
```

<!-- ### Notification Content

```swift
public struct Web3MQNotificationContent: Codable {
    
    public let title: String?
    public let content: String?
    public let type: String?
}

public struct Web3MQNotification: Codable {

    public let cipherSuite: String?
    public let from: String?
    public let topic: String?
    public let fromSign: String?
    public let messageId: String?
    public let payloadType: String?
    public let timestamp: UInt64?
    public let payload: Web3MQNotificationContent?
    public let version: Int?
    
}
``` -->