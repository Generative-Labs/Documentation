---
sidebar_position: 6
---
# MessageInput
The `MessageInput` component is a React Context provider that does not inject any UI. The `MessageInput` renders `ChatAutoComplete` component by default when it does not inject the Input as the props.

## Basic Usage

`MessageInput`must be used in the `Chat` and `Channel` components.

import { Layout } from '@site/src/components/Layout'
import { MessageInputExample } from '@site/src/components/Web3MQ-React/MessageInputExample';
import MessageInputExampleMdx from '@site/src/components/Web3MQ-React/MessageInputExample/MessageInputExample.mdx';
import 'web3-mq-react/dist/css/index.css';

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

**The properties of the MessageInput are described as follows:**

| Property | Description                               | Type                                      | Default |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- |
|  Input   | set your custom `Input` component         | React.ComponentType                       |   -     |

**The properties of the ChatAutoComplete are described as follows:**

| Property    | Description        | Type     | Default          |
| ----------- | ------------------ | -------- | ---------------- |
| placeholder | set the placeholder| String   | 'Send a Message’ |
| row         | adaptive content height | Number   |      1           |
| value       | input content      | String   |     ‘’           |
| onChange    | callback when the contents of the input change | Function |      -           |


**useMessageInputContext data**

| Property      | Description                            | Type              | Default |
| ------------- | -------------------------------------- | ----------------- | ------- |
| sendMessage   |    Sending message method              | Function          |   -     |