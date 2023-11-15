---
sidebar_position: 4
---
# MessageList
The `MessageList` component renders a scrollable list of messages. The UI for each individual message is rendered conditionally based on its `message.type` value. The list renders date separators, new message notifications, system messages, and standard messages containing text.

By default, the `MessageList` loads the most recent 20 messages. More messages are fetched from the Chat API and loaded into the DOM on scrolling up the list. The currently loaded messages are held in the component state and can be referenced with our custom hook. 

## Basic Usage
The `MessageList` has no required props,  and as a context consumer, the `MessageList` component must be rendered as a child of the `Channel` component.You can customize the message content with `props` or `ComponentContext` and override the default style
:::tip
If your channelList list is empty, you can create a chat room in [createChannel](/docs/Ethos-UI-Components/Web3MQ-React/chatComponent/CreateChannel) and select it to send messages.
:::

import { Layout } from '@site/src/components/Layout'
import { MessageListExample } from '@site/src/components/Web3MQ-React/MessageListExample';
import MessageListExampleMdx from '@site/src/components/Web3MQ-React/MessageListExample/MessageListExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the MessageList example'
code={<MessageListExampleMdx />}>
<MessageListExample />
</Layout>

:::tip
To use a custom Message component:
> 1. Passed as the props to `Channel`, in the custom `Message`, you need to get the `message` property through `useMessageContext`.
> 2. Passed as the props to `MessageList`, you can get the `message` property from props.
:::

## Api

**The properties of the Channel are described as follows:**

| Property | Description                               | Type                                      | Default | required |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- | -------- |
| Message  | set your custom `Message` component       | React.ComponentType                       |   -     |    -     |

