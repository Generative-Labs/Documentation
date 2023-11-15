---
sidebar_position: 3
---
# Channel

The `Channel` component is a React Context provider that wraps all of the logic, functionality, and UI for an individual chat channel. It provides three separate contexts to its children:

- ChannelStateContext - stateful data (ex: activeChannel)
- ChannelActionContext - action handlers (ex: sendMessage or openThread)
- ComponentContext - custom component UI overrides (ex: Input or Message)

## Basic Usage

The `Channel` component does not inject any UI, so its implementation is fairly simple.The `Channel` component listens for the `channel.activeChange` event and captures the latest `activeChannel` for its child components to fetch via `ChannelStateContext`.
:::tip
If your channelList list is empty, you can create a chat room in [createChannel](/docs/Ethos-UI-Components/Web3MQ-React/chatComponent/CreateChannel).
:::

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
 const { sendMessage } = useMessageInputContext();
```
## Custom Message 
If you want to display a custom list of messages, you can pass the custom Message component as a parameter in the `channel`, and the `MessageList` will iterate through the Message component, and you can get the corresponding message in the component via the `useMessageContext` method.

```tsx
const { message } = useMessageContext();
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
| activeChannel | current active channel    | [ChannelItemType](/docs/Ethos-SDK/JS-SDK/types/#channelitemtype)     |   -     |    -     |

### useComponentContext data

| Property      | Description                            | Type              | Default | required |
| ------------- | -------------------------------------- | ----------------- | ------- | -------- |
| Input         | set custom `MessageInput` component    | React.Component   |   -     |    -     |
| Message       | set custom `Message` component         | React.Component   |   -     |    -     |