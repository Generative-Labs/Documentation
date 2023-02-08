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
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the Channel example'
code={<ChannelMdx />}>
<ChannelExample />
</Layout>


## Custom Input 
In the `channel` component, you can pass in an Input component with custom styles and functionality, where you can get the `sendMessage` method through the `useMessageInputContext` method.

:::tip
  The Input property of 'channel' has a lower priority than the Input property of 'MessageInput', and it is recommended to pass in as the Input property of 'MessageInput'.
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
If you want to display a custom list of messages, you can pass the custom Message component as a parameter in the `channel`, and the `MessageList` will iterate through the Message component, and you can get the corresponding message in the component via the `useMessageContext` method.

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
Any child of the `Channel` component has access to the channelStateContext and componentContext. Each React Context in the component library can be accessed with one of our custom hooks, which must be imported individually.
```ts
const { activeChannel } = useChannelStateContext();
```

## useComponentContext
```ts
const { Message, Input } = useComponentContext();
```

## Api
### Channel
**The properties of the Channel are described as follows:**

| Property | Description                               | Type                                      | Default | required |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- | -------- |
| Input    | set your custom `Input` component         | React.ComponentType                       |   -     |  false   |
| Message  | set your custom `Message` component       | React.ComponentType                       |   -     |  false   |

### useChannelStateContext data

| Property      | Description               | Type                                                                  | Default | required |
| ------------- | ------------------------- | --------------------------------------------------------------------- | ------- | -------- |
| activeChannel | current active channel    | [ChannelItemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype)     |   -     |    -     |

### useComponentContext data

| Property      | Description                            | Type              | Default | required |
| ------------- | -------------------------------------- | ----------------- | ------- | -------- |
| Input         | set custom `MessageInput` component    | React.Component   |   -     |    -     |
| Message       | set custom `Message` component         | React.Component   |   -     |    -     |