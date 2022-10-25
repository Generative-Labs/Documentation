---
sidebar_position: 0
---

# Chat

## Basic Usage

The `Chat` component does not inject any UI, so its implementation is fairly simple. Once an instance of the `Chat` client has been created, you pass the client object as a prop, and `chat` component provides it to a component's descendants by the `ChatProvide`.

```vue
<script setup>
import { Chat, Channel, MessageList, MessageInput } from 'web3-mq-vue';
import { Web3MQ } from 'web3-mq';

</script>
<template>
  <Chat :client="Web3MQ.getInstance('YOUR_ACCESS_TOKEN')">
    <Channel>
      <MessageList />
      <MessageInput />
    </Channel>
  </Chat>
</template>
```

## Provide/Inject

Any child of the `Chat` component has access to the `ChatProvide`. Each Vue Provide in the component library can be accessed with one of our custom hooks, which must be imported individually.

```vue
<script setup>
  import { useInjectChat } from 'web3-mq-vue'
  const { 
    client,
    appType,
    userInfo,
    showCreateChannel,
    showListTypeView,
    setShowCreateChannel,
    setShowListTypeView,
    logout
  } = useInjectChat();
</script>
```

:::tip

When using client data in the `Chat` component's descendants, must be accessed through `client.value`; It seems redundant and performance consuming and will be fixed later

:::

**Inject data**

| name                 | type                      | Description                                                    |
| -------------------- | ------------------------- | -------------------------------------------------------------- |
| client               | ComputedRef< Client >     | Chat Client Object                                             |
| appType              | ComputedRef<'pc' \| 'h5'> | Viewport type                                                  |
| userInfo             | Ref<[SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)> | user Info |
| showCreateChannel    | Ref< Boolean >            | Whether to display the `CreateChannel` component               |
| showListTypeView     | Ref<'room' \| 'chat'>     | Navigation Bar Type                                            |
| setShowCreateChannel | Function                  | Update showCreateChannel                                       |
| setShowListTypeView  | Function                  | Update showListTypeView                                        |
| logout               | Function                  | Logged out                                                     |
