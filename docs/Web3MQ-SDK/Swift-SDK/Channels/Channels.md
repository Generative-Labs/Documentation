---
position: 3
---

# Channels

## Methods

| Name | Parameters | response |
| --- | --- | --- |
| createChannel | keychainStore:  Bool | channelId: String |
| queryChannels | page: Int, size: Int | channelIds: [String] |
| getMembers | channeId: String, page: Int, size: Int | userIds: [String] |
| invite | users: [String] | channelId: String |

## Creating a channel

create a channel by a channel name.

```swift
let channelId: String = await Client.shared.channelManager.createChannel(name: "{channel_name}")
```

## Querying Channels

get the channels that the current user has joined.

```swift
let channelIds: [String] = await Client.shared.channelManager.queryChannels(page: 0, size: 20)
```

### Getting Channel Member List

```swift
let userIds: [String] = await Client.shared.channelManager.getMembers(channelId: "{channelid}", page: 0, size: 20)
```

### Inviting Users to Join a Channel

```swift
let channelId: String = await Client.shared.channelManager.invite(users: ["{user_id_0}", "{user_id_1}"], to channelId: "{channel_id}")
```

