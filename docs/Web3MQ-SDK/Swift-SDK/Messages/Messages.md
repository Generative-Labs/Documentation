---
position: 4
---

# Messages

## Methods

| Name | Parameters  | Response |
| --- | --- | --- |
| localMessages | sessionId: String, page: Int, size: Int | messages: [Message](/docs/Web3MQ-SDK/Swift-SDK/Structs/#Message) |
| messages | sessionId: String, page: Int, size: Int | messages: [Message](/docs/Web3MQ-SDK/Swift-SDK/Structs/#Message) |
| sendMessage | text: String, sessionId: String | messageId: String |
| updateMessageStatus | messages: [String], sessionId: String, status: [MessageStatus](/docs/Web3MQ-SDK/Swift-SDK/Structs/#MessageStatus) | success: Bool  |

## Sending Messages

### Text Message

```swift
try await Client.shared.messageManager.sendMessage("{text}", topicId: "{TopicId}") 
```

### Custom Message 

Web3MQ supports custom message payload, which makes it possible to support complex business scenarios

```swift
try await Client.shared.messageManager.sendMessage(data, topicId: "{TopicId}") 
```

## Receiving Message

```swift
Client.shared.messageManager.messagePublisher.sink { message in 

}
```

## Updating Message Status

```swift
Client.shared.messageManager.updateMessageStatus(["{MessageId}"], status: .read)
```

## Search Messages

### Searching Messages in Sandbox Database

```swift
let messages: [Message] = await Client.shared.messageManager.localMessages(topicId: "{TopicId}", page: 0, size: 20)
```

### Searching Messages in Remote Server

```swift
let messages: [Message] = await Client.shared.messageManager.messages(topicId: "{TopicId}", page: 0, size: 20)
```