---
position: 7
---

# Notifications

## Methods
| name | Parameters Description | response |
| --- | --- | --- |
| updateNotificationStatus | messages: string[], status: [NotificationStatus](/docs/Web3MQ-SDK/Swift-SDK/Structs/###NotificationStatus) | success: Bool |
| searchNotifications | topicId: String, page: Int, size: Int | notifications: [Notification](/docs/Web3MQ-SDK/Swift-SDK/Structs/###Notification) |
| receiving notifications |  |  |

## Updating Notification Status

```swift
let isSuccess = await Client.shared.notificationManager.updateNotificationStatus(notifications: ["{notificationId}"], status: .read)
```

## Search Notifications by TopicId

```swift
let notifications: [Notifications] = await Client.shared.notificationManager.getNotifications(by: "{NotificationType}", page: 0, size: 20)
```

## Receiving Notification

The notification is also a specific message. Just subscribe the `notificationPublisher` to receive notifications.

```swift
Client.shared.notificationManager.notificationPublisher
```

## Notification Content

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
```