---
sidebar_position: 1
---

# Channel

The `Channel` component is a Vue dependency provider that wraps all of the logic, functionality, and UI for an individual chat channel. It provides two separate `Vue Provide` to its children:

- ChannelStateProvide - stateful data (ex: channels)
- ComponentProvide - custom component UI overrides (ex: Input or Message)

## Basic Usage

The `Channel` component does not inject any UI, so its implementation is fairly simple. By default, the `ChannelList` sets the active `channel` object, which is then provided by the `ChannelStateProvide`, and `Channel` component's descendants injected into the data, so manual prop passing is not required. 

```vue
<template>
  <Chat :client="client">
    <ChannelList />
    <Channel :Message="customMessageSimple" :Input="customInput">
      <MessageList />
      <MessageInput />
    </Channel>
  </Chat>
</template>
```

## Provide/Inject

`channel` component's descendants could inject data and custom component UI through `useInjectChannelState` and `useInjectMessage`.

```vue
<script setup>
import { useInjectChannelState, useInjectMessage } from 'web3-mq-vue';
const { state } = useInjectChannelState();
const { Message } = useInjectMessage();
</script>
```

**state**

| name          | type                                                                              | Description            |
| ------------- | --------------------------------------------------------------------------------- | ---------------------- |
| activeChannel | [activechannelType](/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype) \| null     | current active channel |

```json
{
  "activeChannel": {
    "avatar_base64": "image base64",
    "avatar_url": "image url",
    "chat_name": "chat name",
    "chatid": "chat id",
    "chat_type": "chat type", // "user" | "group"
    "topic": "chat id",
    "topic_type": "chat type", // "user" | "group"
  }
}
```
