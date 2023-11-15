---
position: 1
---

# Chat

## Channel List

### Listening to the Channel List

You can keep track of the list of channels by listening to the **`channelsSubject`** event:

```swift
ChatClient.default.channelsSubject.sink { channel in 
  // handle the channel list 
}
```

### Querying Offline Channels

To query channels from local storage, use the **`fetchChatsFromLocal`** method:

```swift
final chats = try await ChatClient.default.fetchChatsFromLocal();
```

### Querying Online Channels

To query channels from remote server, use the **`chats`** method:

```swift
final page = try await ChatClient.default.chats(topicId: "", pageCount: 1, pageSize: 30);
```

### Listening to Channel Queries

The **`channelsSubject`** method returns a stream of channel models. If the channels have already been queried, the method returns them from a cache. Otherwise, it first queries the offline channels and yields them if they are not empty. It then starts an online query and yields the channels from that query once it completes. If the online query fails and there are no local channels, the method throws an error.

```swift
ChatClient.default.channelsSubject.sink { channels in 
    // handle the channels 
}
```

## Messages

### Sending message

To send a text message, call the **`sendMessage`** method with the message text and the ID of the topic.

```swift
try await ChatClient.default.sendMessage('hello, world!', to: "topic", needStore: true);
```

By default, the **`needStore`** parameter is set to **`true`**, which means that the message will be stored on the web3mq network and can be retrieved using the **`queryMessagesByTopic`** method. If you set **`needStore`** to **`false`**, the message will not be stored on the network.

Note: that setting **`needStore`** to **`true`** may incur additional fees for the message sender. For more information, please consult with the sales team.

### Message sending status

To receive updates on the message sending status, sink to the **`messageStatusPublisher`** publisher:

```swift
ChatClient.default.messageStatusPublisher.sink { status in 
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

To query the message list from remote server, call the **`messageHistory`** method with the ID of the topic and a pagination object:

```swift
let messagePage = try await ChatClient.default.messageHistory(topicId: "", pageCount: 1, pageSize: 30)
```

**Note:** **`messagesFromLocalCache`** method retrieves the cached messages from the local storage.

```swift
let messageList = try await ChatClient.default.messagesFromLocalCache(topicId: "")
```
