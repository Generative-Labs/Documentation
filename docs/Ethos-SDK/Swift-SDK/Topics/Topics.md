---
position: 1
---

# Topic

## Subscribe

Use the `subscribeTopic` method to subscribe to a topic by providing the `topicId`, and start receiving notifications from that topic.

```swift
try await ChatClient.default.subscribeTopic("topicId");
```

## Create a Topic

Use the `createTopic` method to create a new topic with the given `topicName`.

```swift
let topicId = try await ChatClient.default.createTopic(topicName);
```

## Publish a Message

Use the `publish` method to publish a new message to the topic identified by `topicId`. The topic must be created by the user themselves.

```swift
try await ChatClient.default.publish(toTopic: "topic", title: "title", content: "content");
```

## Get Subscribed Topics

Use the `mySubscribeTopics` method to get a list of topics that the current user is subscribed to, with pagination support.

```swift
let page = await ChatClient.default.mySubscribeTopics(pageCount: 1, pageSize: 30);
```
