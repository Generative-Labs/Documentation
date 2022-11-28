# Window
`Window`是样式组件，用于兼容视图。

## Basic Usage
`Web3MQ-React`中`Window`主要用于包裹`MessageList`, `MessageHeader`, `MessageInput`三个组件，来给用户展示聊天室样式。

import { Layout } from '@site/src/components/Layout'
import { WindowExample } from '@site/src/components/Web3MQ-React/WindowExample';
import WindowMdx from '@site/src/components/Web3MQ-React/WindowExample/WindowExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Window example'
code={<WindowMdx />}>
<WindowExample />
</Layout>