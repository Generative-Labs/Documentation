---
position: 8
---

# Topics

## Methods
| Name | Parameters  | Response |
| --- | --- | --- |
| create | topicName: String | topicId: String |
| subscribe | topicId: String | isSuccess: Bool  |
| publishMessage | topicid: String; title: String; content: String | isSuccess: Bool  |
| getCreatedTopicList | page: Int, size: Int | [Topic](/docs/Web3MQ-SDK/Swift-SDK/Structs/###Topic) |
| getSubscribedTopicList | page: Int, size: Int  | [Topic](/docs/Web3MQ-SDK/Swift-SDK/Structs/###Topic) |

## Creating Topic

```swift
// topicName is optional 
let topic: Topic = await Client.shared.topicManager.create(topicName: "{topic_name}")
```

## Getting Topic List

### Getting Created Topics

```swift
// get the topic ids 
let topics: [String] = await Client.shared.topicManager.myCreateTopics(page: Int, size: Int)
```

### Getting **Subscribed Topics**

```swift
let topics: [String] = await Client.shared.topicManager.mySubscribeTopics(page: Int, size: Int)
```

## Publishing Messages to a Topic

```swift
await Client.shared.topicManager.publishMessage(topicId: "{TopicId}", title: "{title}", content: "{content}")
```

## **Subscribing Topic**

```swift
let isSuccess: Bool = await Client.shared.topicManager.subscribeTopic("{TopicId}")
```