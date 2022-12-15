---
sidebar_position: 4
---

# Message Input

The `MessageInput` component is the method provider, such as send messages.

## Basic Usage

By default, the `MessageInput` component's descendants shows that the input component can only be used to send messages and has no other function. If you want to add extra features, you could pass the custom input component as a props, and custom components will be rendered as the `MessageInput` component's descendants.

:::tip
  The `MessageInput` component's Input has higher priority than the `Channel` component's Input as props. 
:::

```vue
<template>
  <Chat :client="client">
    <ChannelList />
    <Channel>
      <MessageList />
      <MessageInput :Input="customInput"/>
    </Channel>
  </Chat>
</template>
```

## Provide/Inject

The `MessageInput` component's descendants could inject message sending function.

```vue
<script setup>
  import { useInjectMessageInput } from 'web3-mq-vue'
  const { sendMessage } = useInjectMessageInput();
</script>
```

## API

**The properties of the MessageInput are described as follows:**

| Property | Description                               | Type                                      | Default |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- |
|  Input   | set your custom `Input` component         |        Component                          |   -     |

**useInjectMessageInput data**

| Property      | Description                            | Type              | Default |
| ------------- | -------------------------------------- | ----------------- | ------- |
| sendMessage   |    发送消息方法                          | Function          |   -     |