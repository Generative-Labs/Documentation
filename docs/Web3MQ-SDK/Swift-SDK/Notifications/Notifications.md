---
position: 1
---

# Notification

***Notification*** is a special type of message that can be marked as read and queried. Currently, there are the following types of notifications:

- `NotificationType.subscription`：Subscription message
- `NotificationType.receivedFriendRequest`：Received friend request
- `NotificationType.sendFriendRequest`：Sent friend request
- `NotificationType.groupInvitation`：Group invitation message
- `NotificationType.provider`：Provider information

## Subscribe

Subscribe a topic with `topicId`, then you can receive notifications from that `topic`.

```swift
try await ChatClient.default.subscribeTopic("topicId")
```

## Receive

You can use the following method to subscribe notifications from the web3mq server.

```swift
ChatClient.default.notificationPublisher.sink { notifications in 
  // handle the notifications.
}
```

## Read Status

Mark the notification as read.

```swift
ChatClient.default.updateNotificationStatus(notificationsIds, status: notificationStatus);

public enum NotificationStatus: String {
    case received
    case delivered
    case read
}
```

## Query

You can query all historical notifications by types and pagination.

```dart
Page<Notification> res = await client.queryNotifications(type, pagination);
```
