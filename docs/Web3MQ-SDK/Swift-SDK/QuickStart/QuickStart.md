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
    .package(url: "git@github.com:Generative-Labs/Web3MQ-iOS.git", .upToNextMajor(from: "0.1.0"))
]
```

## Initialize the SDK

Let's get started by initializing the client.

:::note
 `ChatClient.default` uses the default `Service` and `WebSocketClient`. If you want to use a custom `Service` or `WebSocketClient`, please refer to the relevant API documentation. In most cases, you only need to use the default one.
:::

```swift
import Web3MQ

ChatClient.default.setup(appKey: "{AppKey}")
```

## Wallet Connector

Some methods that SDK provides require wallet signature,  you should setup the `WalletConnector` before calling those methods.

```swift
ChatClient.default.walletConnector = walletConnector;
```

```swift
///
public protocol Wallet {

    /// Account IDs that follow the CAIP-10 standard.
    var accounts: [String] { get }
}

/// This protocol provides methods to connect a wallet and `personal_sign`
public protocol WalletConnector {
    func connectWallet() async throws -> Wallet

    func personalSign(
        message: String,
        address: String,
        password: String?
    ) async throws -> String
}

```

## Connecting

### Register

For any first-time user of Web3MQ's network, you'll need to register on Web3MQ's network. SDK takes care of the key generation process and subsequent wallet signing process.

```swift
// Keep your private key in a safe place!
let registerResult: RegisterResult = await ChatClient.default.register(did: DID("did_type", "did_value"))
```

### Connection Info

```swift
let connectionInfo = try await ChatClient.default.connectionInfo(did: registerResult.did, privateKey: registerResult.privateKey)
```

### Connect with a `ConnectionInfo`

:::note
The SDK will store the connected `ConnectionInfo` in the local database.
:::

```swift
try await ChatClient.default.connect(connectionInfo)
```

### Connecting Automatically

If the connectionInfo exists in the local database, you can simply call `autoConnect` to connect.

```swift
try await ChatClient.default.autoConnect()
```

It will throws error if there's no connectionInfo exists in the local database.

### Connecting Status

Sink the `ChatClient.default.connectionStatusPublisher` to track connection status.

## Chat

### Channel List

To keep track of the list of channels, sink to the **`channelsSubject`** subject:

```dart
ChatClient.default.channelsSubject.sink { channels in
  // handle the channel list 
};
```

### Sending message

To send a text message, call the **`sendMessage`** method with the message text and the ID of the topic:

```swift
try await ChatClient.default.sendMessage('text', to: "topicId")
```

### Message sending status

To receive updates on the message sending status, sink to the **`messageStatusPublisher`** publisher:

```swift
ChatClient.default.messagePublisher.sink { message in 
    // handle the message status update 
}
```

### Receiving new messages

To receive new messages, listen to the **`messagePublisher`** publisher:

```swift
ChatClient.default.messagePublisher.sink { message in 
  // handle the message.   
}
```

### Query the message list

To query the message list, call the **`messageHistory`** method with the ID of the topic and a pagination info:

```swift
let messages = try await ChatClient.default.messageHistory(topicId: "topicId", pageCount: 1, pageSize: 100)
```

## Notifications

### Subscribe

Subscribe a topic with `topicId`, then you can receive notifications from that `topic`.

```swift
try await ChatClient.default.subscribeTopic("topicId")
```

### Receive

You can use the following method to subscribe notifications from the web3mq server.

```dart
ChatClient.default.notificationPublisher.sink { notifications in 
  // handle the notifications.
}
```

### Read Status

Mark the notification as read.

```swift
ChatClient.default.updateNotificationStatus(notificationsIds, status: notificationStatus);

public enum NotificationStatus: String {
    case received
    case delivered
    case read
}

```

### Query

You can query all historical notifications by types and pagination.

```swift
let notifications = await ChatClient.default.queryNotifications(types: [types], pageCount: 1, pageSize: 30);
```
