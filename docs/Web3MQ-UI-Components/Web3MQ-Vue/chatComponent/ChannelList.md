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

## Api

**The properties of the ChannelList are described as follows:**

| Property | Description                               | Type                                      | Default |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- |
| List     | as `ChannelList`‘s root component, used to display a component that the list load and failed to load | Component |   -     |
| Preview                    | set your custom `ChannelItem` component | Component                 |   -     |
| DefaultEmptyStateIndicator | displays an empty list of components    | Component                 |   -     |
| Paginator                  | set your custom `paging` component      | Component                 |   -     |
