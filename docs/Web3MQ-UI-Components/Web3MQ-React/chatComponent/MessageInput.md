---
sidebar_position: 6
---
# MessageInput
The `MessageInput` component is a React Context provider that does not inject any UI. The `MessageInput` renders `ChatAutoComplete` component by default when it does not inject the Input as the props.`MessageInput`must be used in the `Chat` and `Channel` components.

## Basic Usage
:::tip
If your channelList list is empty, you can create a chat room in [createChannel](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/CreateChannel) and select it to send messages.
:::

import { Layout } from '@site/src/components/Layout'
import { MessageInputExample } from '@site/src/components/Web3MQ-React/MessageInputExample';
import MessageInputExampleMdx from '@site/src/components/Web3MQ-React/MessageInputExample/MessageInputExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the MessageInput example'
code={<MessageInputExampleMdx />}>
<MessageInputExample />
</Layout>

## ChatAutoComplete component
As the default render Input component of `MessageInpt`, `ChatAutoComplete` gets the `sendMessage` method through `useMessageInputContext`, and cannot be used without the `MessageInput` component.
只能用于`MessageInput`使用

## Use Custom Input
You can render the custom `Input` component by passing Input as props to the `MessageInput`.

import CustomInputExampleMdx from '@site/src/components/Web3MQ-React/MessageInputExample/CustomInputExample.mdx';

<Layout
title='Example'
description='This is the use custom Input example'
code={<CustomInputExampleMdx />}>
<MessageInputExample type='custom' />
</Layout>

## API
### MessageInput
**The properties of the MessageInput are described as follows:**

| Property | Description                               | Type                                      | Default | required |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- | -------- |
|  Input   | set your custom `Input` component         | React.ComponentType                       |   -     |  false   |

### ChatAutoComplete
**The properties of the ChatAutoComplete are described as follows:**

| Property    | Description        | Type     | Default          | required |
| ----------- | ------------------ | -------- | ---------------- | -------- |
| placeholder | set the placeholder| String   | 'Send a Message’ |   false  |
| row         | adaptive content height | Number   |      1           |   false  |
| value       | input content      | String   |     ‘’           |   false  |
| onChange    | callback when the contents of the input change | Function |      -           |   false  |


### useMessageInputContext data

| Property      | Description                            | Type              | Default | required |
| ------------- | -------------------------------------- | ----------------- | ------- | -------- |
| sendMessage   |    Sending message method              | Function          |   -     |     -    |