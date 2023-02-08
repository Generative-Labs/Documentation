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
    .package(url: "git@github.com:Generative-Labs/Web3MQ-SDK-Swift.git", .upToNextMajor(from: "0.1.0"))
]
```

## Setup the SDK

Call this method before you access any other methods or properties in the Web3MQ SDK.

```swift
import Web3MQ

Client.shared.setup(appKey: "your app key")

```

Some methods that SDK provides require wallet signature, so you should setup the `WalletConnector` before calling that methods.

```swift
import Web3MQ

Client.shared.setup(walletConnector: WalletConnector)

```

## Register

For any first-time user of Web3MQ's network, you'll need to register on Web3MQ's network.

This method needs wallet signature, make sure you have setup `WalletConnector` already. `RegisterResponse` contains your `PrivateKey` and `UserId`.

```swift
// Keep your private key in a safe place!
let registerResponse = await Client.shared.register(did: DID, password: String)
```

### Retrieve Private Key 

Whenever you want, you can always retrieve your own PrivateKey through this method.

```swift
// Keep your private key in a safe place!
let privateKey = try await Client.shared.fetchPrivateKey(did: DID, password: String)
```

## Connect

### Get a `User`

Get a user with its DID and password, also with an duration for expired.

```swift 
// *
let user = try await Client.shared.user(did: DID, password: String, expiredDuration: TimeInterval)
```

Or you has the `PrivateKey`


```swift 
// *
let user = try await Client.shared.user(did: DID, privateKey: Curve25519.Signing.PrivateKey, expiredDuration: TimeInterval)
```
### Connect with a `User`

```swift 
    try await Client.shared.connect(user: User)
```

### Connect Automatically

This method will get the previously connected User from the cache. If there’s no user cached, it will throw `Web3MQClientError.autoConnectFailWithNoUserInCache`

```swift
    try await Client.shared.autoConnect()
```
### Connecting Status

If you want to react instantly with the connecting status updating, just subscribe this publisher:  `Client.shared.connectingStatusPublisher` 

```swift
let status: Web3MQConnectingStatus = Client.shared.connectingStatus
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
subscribe the messagePublisher to receive messages.
```swift
Client.shared.messageManager.messagePublisher
```

## Notifications

### Receiving Notification

The notification is also a specific message. Just subscribe the `notificationPublisher` to receive notifications.

```swift
Client.shared.notificationManager.notificationPublisher
```