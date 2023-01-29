---
sidebar_position: 0
---

# Chat

## Basic Usage

The `Chat` component does not inject any UI, so its implementation is fairly simple. Once an instance of the `Chat` client has been created, you pass the client object as a prop, and `chat` component provides it to a component's descendants by the `ChatProvide`.

```vue
<script setup>
import { Chat, Channel, MessageList, MessageInput } from 'web3-mq-vue';
import { Web3MQ } from '@web3mq/client';

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

`client` Object is not a reactive State, cannot be used for view rendering.

:::

## Api

**The properties of the Chat are described as follows:**

| Property    | Description                            | Type                                      | Default |
| ----------- | -------------------------------------- | ----------------------------------------- | ------- |
| appType     | set viewport type of @web3mq/react-components     | `pc` \| `h5`                              |  `pc`   |
| classNmae   | set your custom className              | string                                    |   -     |
| client      | Chat Client Object                     | [Client](/docs/Web3MQ-SDK/JS-SDK/client/) |   -     |
| containerId | set container Id of your @web3mq/react-components | string                                    |   -     |
| style       | set your custom style                  | CSSProperties                       |   -     |
| logout      | Set your exit method                   | Function                                  |   -     |

**useInjectChat data**

| Property             | Description                                      | Type                                      | Default |
| -------------------- | ------------------------------------------------ | ----------------------------------------- | ------- |
| showListTypeView     | Tabs type in `DashBoard` component               | string                                    | 'room'  |
| userInfo             | user Info   | Ref<[SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)> |  -      |
| setShowListTypeView  | Update showListTypeView                          | Function                                  |  -      |
