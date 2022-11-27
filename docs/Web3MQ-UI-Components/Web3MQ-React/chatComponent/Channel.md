---
sidebar_position: 3
---
# Channel

The `Channel` component is a React Context provider that wraps all of the logic, functionality, and UI for an individual chat channel. It provides five separate contexts to its children:

- ChannelStateContext - stateful data (ex: messages or members)
- ChannelActionContext - action handlers (ex: sendMessage or openThread)
- ComponentContext - custom component UI overrides (ex: Avatar or Message)

## Basic Usage

The `Channel` component does not inject any UI, so its implementation is fairly simple and can be handled in one of two ways, both with and without a `ChannelList` component. If you are using a `ChannelList`, do not add a `channel` object as a prop on `Channel`. However in the absence of a `ChannelList`, the `channel` prop is required. By default, the `ChannelList` sets the active `channel` object, which is then injected it into the `ChannelStateContext`, so manual prop passing is not required.

import { Layout } from '@site/src/components/Layout'
import { ChannelExample } from '@site/src/components/Web3MQ-React/ChannelExample';
import ChannelMdx from '@site/src/components/Web3MQ-React/ChannelExample/ChannelExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Channel example'
code={<ChannelMdx />}>
<ChannelExample />
</Layout>


## Custom Input 
在`channel`可以传入自定义样式和功能的Input输入框组件，在该组件中可以通过useMessageInputContext方法获取sendMessage方法。
:::tip
  `channel`传入自定义Input组件优先级低于`MessageInput`传入的Input组件，建议只在MessageInput中作为Input传入。
:::
```tsx
<Chat client={client} >
  <ChannelList />
  <Channel Input={customInput}>
    <MessageList />
    <MessageInput />
  </Channel>
</Chat>
```
## Custom Message 
如果想要自定义展示信息列表，可以在`channel`中将自定义MessageSimple组件作为参数传入，在`MessageList`中会遍历该Message组件，并且在该组件中可以通过useMessageContext方法获取对应message信息。

```tsx
<Chat client={client} >
  <ChannelList />
  <Channel Message={customMessage}>
    <MessageList />
    <MessageInput />
  </Channel>
</Chat>
```

**How to use custom Component Example**

import { CustomChannelExample } from '@site/src/components/Web3MQ-React/ChannelExample';
import CustomChannelMdx from '@site/src/components/Web3MQ-React/ChannelExample/CustomChannelExample.mdx';

<Layout
title='Example'
description='This is the custom Channel example'
code={<CustomChannelMdx />}>
<CustomChannelExample />
</Layout>

## useChannelStateContext
`Channel`的子组件都可以访问ChannelStateContext和ComponentContext。
```ts
const { activeChannel } = useChannelStateContext();
```

## useComponentContext
```ts
const { Message, Input } = useComponentContext();
```

## Api

**The properties of the Channel are described as follows:**

| Property | Description                               | Type                                      | Default |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- |
| Input    | set your custom `Input` component         | React.ComponentType                       |   -     |
| Message  | set your custom `Message` component       | React.ComponentType                       |   -     |

**useChannelStateContext data**

| Property      | Description               | Type                                                                  | Default |
| ------------- | ------------------------- | --------------------------------------------------------------------- | ------- |
| activeChannel | current active channel    | [activechannelType](/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype) |   -     |

**useComponentContext data**

| Property      | Description                            | Type              | Default |
| ------------- | -------------------------------------- | ----------------- | ------- |
| Input         | set custom `MessageInput` component    | React.Component   |   -     |
| Message       | set custom `Message` component         | React.Component   |   -     |