# ChatDown

## Basic Usage
`ChatDown`用于反馈一系列操作任务的处理结果的UI组件。

import { Layout } from '@site/src/components/Layout'
import { ChatDownExample } from '@site/src/components/Web3MQ-React/ChatDownExample';
import ChatDownMdx from '@site/src/components/Web3MQ-React/ChatDownExample/ChatDownExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the ChatDown example'
code={<ChatDownMdx />}>
<ChatDownExample />
</Layout>

## Use Custom Props
用户可以设置自己想要的结果，如成功的结果。

import CustomChatDownMdx from '@site/src/components/Web3MQ-React/ChatDownExample/CustomChatDownExample.mdx';

<Layout
title='Example'
description='This is the ChatDown example'
code={<CustomChatDownMdx />}>
<ChatDownExample type='custom' />
</Layout>


## API

**The properties of the ChatDown are described as follows:**

| Property     | Description                      | Type   | Default                                                   |
| ------------ | -------------------------------- | ------ | --------------------------------------------------------- |
|  image       | 设置图片资源路径                    | string |              -                                            |
|  text        | 设置文字内容展示                    | string |‘Error connecting to chat, refresh the page to try again.’ |
|  type        | 设置标题                           | string |           ‘Error’                                         |