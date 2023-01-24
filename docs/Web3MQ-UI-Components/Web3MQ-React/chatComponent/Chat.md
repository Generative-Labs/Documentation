---
sidebar_position: 1
---

# Chat

## Basic Usage

The `Chat` component does not inject any UI, so its implementation is fairly simple. Once an instance of the `Chat` client has been created, you pass the client object as a prop to add it to the `ChatContext`.

import { Layout } from '@site/src/components/Layout'
import { ChatExample } from '@site/src/components/Web3MQ-React/ChatExample';
import ChatMdx from '@site/src/components/Web3MQ-React/ChatExample/ChatExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Chat example'
code={<ChatMdx />}>
<ChatExample />
</Layout>

## containerId

Used to wrap a container around a `Chat` component.You need to pass the id selector for the container as the property to the `Chat` component,components from the `Web3-mq-react` will fit into the container.

:::tip
  The container style must set position is a property other than static
:::

```tsx
<div id='box' style={{position: 'relative'}}>
  <Chat containerId='box' client={client}>
    <ChannelList />
    <Channel>
      <MessageList />
      <MessageInput />
    </Channel>
  </Chat>
</div>
```

## useChatContext

Any child of the `Chat` component has access to the `ChatContext`. Each React Context in the component library can be accessed with one of our custom hooks, which must be imported individually.

```ts
const { client } = useChatContext();
```

## Api

**The properties of the Chat are described as follows:**

| Property    | Description                            | Type                                      | Default |
| ----------- | -------------------------------------- | ----------------------------------------- | ------- |
| appType     | set viewport type of web3-mq-react     | `pc` \| `h5`                              |  `pc`   |
| className   | set your custom className              | string                                    |   -     |
| client      | Chat Client Object                     | [Client](/docs/Web3MQ-SDK/JS-SDK/client/) |   -     |
| containerId | set container Id of your web3-mq-react | string                                    |   -     |
| style       | set your custom style                  | React.CSSProperties                       |   -     |
| logout      | Set your exit method                   | Function                                  |   -     |

**useChatContext data**

| Property             | Description                                      | Type                                      | Default |
| -------------------- | ------------------------------------------------ | ----------------------------------------- | ------- |
| showListTypeView     | Tabs type in `DashBoard` component               | string                                    | 'room'  |
| userInfo             | user Info   | Ref<[SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)> |  -      |
| setShowListTypeView  | Update showListTypeView                          | React.Dispatch                            |  -      |

