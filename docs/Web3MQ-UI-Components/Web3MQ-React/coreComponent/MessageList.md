# MessageList

The `MessageList` component renders a scrollable list of messages. The UI for each individual message is rendered conditionally based on its `message.type` value. The list renders date separators, new message notifications, system messages, deleted messages, and standard messages containing text and/or attachments.

By default, the `MessageList` loads the most recent 20 messages held in the `channel.state`. More messages are fetched from the Chat API and loaded into the DOM on scrolling up the list. The currently loaded messages are held in the `ChannelStateContext` and can be referenced with our custom hook.

```tsx
const { messages } = useChannelStateContext();
```

The `MessageList` has no required props and by default pulls overridable data from the various contexts established in the `Channel` component. Customization of the messages rendered within the list is handled by the `Message UI` component.

## Basic Usage

As a context consumer, the `MessageList` component must be rendered as a child of the `Channel` component. It can be rendered with or without a provided `messages` prop. Providing your own `messages` value will override the default value drawn from the `ChannelStateContext`.

import { Layout } from '@site/src/components/Layout'
import { MessageListExample } from '@site/src/components/MessageListExample';
import MessageListExampleMdx from '@site/src/components/MessageListExample/MessageListExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the MessageList example'
code={<MessageListExampleMdx />}>
<MessageListExample />
</Layout>

:::tip

若使用自定义`Message`组件，方法一:作为Channel的 Message props 传入，但想获取message信息需要通过`useMessageContext`来实现。方法二也是最优是作为MessageList的 Message props 传递，会直接取代内部`Message`组件，并将message信息作为props传递给自定义`Message`，就不用useMessageContext获取message信息。完整事例可以参考上面例子或Channel例子

:::

## Api

**The properties of the Channel are described as follows:**

| Property | Description                               | Type                                      | Default |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- |
| Message  | set your custom `Message` component       | React.ComponentType                       |   -     |

