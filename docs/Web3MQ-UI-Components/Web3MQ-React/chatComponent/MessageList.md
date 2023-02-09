---
sidebar_position: 4
---
# MessageList
The `MessageList` component renders a scrollable list of messages. The UI for each individual message is rendered conditionally based on its `message.type` value. The list renders date separators, new message notifications, system messages, and standard messages containing text.

By default, the `MessageList` loads the most recent 20 messages. More messages are fetched from the Chat API and loaded into the DOM on scrolling up the list. The currently loaded messages are held in the component state and can be referenced with our custom hook. 

The `MessageList` has no required props and by default extracted overridable component from the various contexts established in the `Channel` component. Customization of the messages rendered within the list is handled by the `Message UI` component.

## Basic Usage

:::tip
If your channelList list is empty, you can create a chat room in [createChannel](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/CreateChannel) and select it to send messages.
:::

As a context consumer, the `MessageList` component must be rendered as a child of the `Channel` component. It can be rendered with or without a provided `Message` prop. Providing your own `Message` will override the default value drawn from the `ComponentContext`.

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

