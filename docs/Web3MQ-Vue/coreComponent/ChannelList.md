---
sidebar_position: 2
---

# Channel List

The `ChannelList` component queries an array of channel objects from the Chat API, it subscribes internally to the [channel.type](/docs/Web3MQ-SDK/JS-SDK/eventCenter/#eventList) event and updates the channel list data based on it.

The `ChannelList` component loads and updates channels as the same as the `MessageList` component.

## Basic Usage

The ChannelList does not have any required props.

```vue
<template>
  <Chat :client="client">
    <ChannelList />
    <Channel>
      <MessageList />
      <MessageInput />
    </Channel>
  </Chat>
</template>
```