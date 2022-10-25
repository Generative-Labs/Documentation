---
sidebar_position: 3
---

# MessageList

The `MessageList` component renders a scrollable list of messages. The UI for each individual message is rendered conditionally based on its `message.type` value. The list renders standard messages.

By default, the `MessageList` component contains a separate state management library, it loads the most recent 20 messages held in the current library. More messages are fetched from the Chat API and loaded into the DOM on scrolling up the list. 


## Basic Usage

The `MessageList` could pass custom Message component as props, it will override the default `Message` component.

```vue
<template>
  <Chat :client="client">
    <ChannelList />
    <Channel>
      <MessageList :Message="customMessage" />
      <MessageInput />
    </Channel>
  </Chat>
</template>
```

## Message

The `Message` component is the `MessageList` component's descendants. It provides child component with message data that comes in from `MessageList`


## MessageSimple

As the `Message` component's descendants, the `MessageSimple` component could inject message data, and show the message. If you want to display custom message body, you should pass your custom Message component as Channel props.

```vue
<script setup>
import { useInjectMessage } from 'web3-mq-vue';
const { message } = useInjectMessage();
</script>

```


