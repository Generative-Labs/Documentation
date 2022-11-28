---
sidebar_position: 6
---
# MessageInput
`MessageInput`本质是一个React Context Provider，没有注入任何UI；若在`MessageInput`中没有传入Input参数，则默认渲染我们自己Input组件样式；通过context传递给默认或自定义Input组件sendMessage的方法。

## Basic Usage

`MessageInput`必须在`Chat`和`Channel`组件中使用。在`MessageInput`使用sendMessage方法时, 必须在SDK中设置client.Channel.ActiveChannel，才能成功发送消息。

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
在组件库中，`MessageInput`若没有传入Input, 其默认渲染Input组件为`ChatAutoComplete`组件，其内部通过useMessageInputContext以集成sendMessage方法，只能用于`MessageInput`使用

## Use Custom Input
如果用户想渲染自定义`Input`组件，可以通过`MessageInput`的`Input`props传入，其优先级大于通过`Channel`组件传入的`Input`。

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
| placeholder | 设置占位符           | String   | 'Send a Message’ |
| row         | 自适应内容高度        | Number   |      1           |
| value       | 输入框内容           | String   |     ‘’           |
| onChange    | 输入框内容变化时的回调 | Function |      -           |


**useMessageInputContext data**

| Property      | Description                            | Type              | Default |
| ------------- | -------------------------------------- | ----------------- | ------- |
| sendMessage   |    发送消息方法                          | Function          |   -     |