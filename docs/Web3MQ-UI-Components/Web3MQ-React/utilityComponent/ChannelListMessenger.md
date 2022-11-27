# ChannelListMessenger

## Basic Usage
`ChannelListMessenger`用于展示List加载、加载失败及成功的UI组件。用户也可以通过LoadingErrorIndicator和LoadingIndicator来设置自定义失败或加载样式。

import { Layout } from '@site/src/components/Layout'
import { ChannelListMessengerExample } from '@site/src/components/Web3MQ-React/ChannelListMessengerExample';
import ChannelListMessengerMdx from '@site/src/components/Web3MQ-React/ChannelListMessengerExample/ChannelListMessengerExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the ChannelListMessenger example'
code={<ChannelListMessengerMdx />}>
<ChannelListMessengerExample />
</Layout>

## API

**The properties of the ChannelListMessenger are described as follows:**

| Property               | Description                      | Type                                      | Default       |
| ---------------------- | -------------------------------- | ----------------------------------------- | ------------- |
|  children              | 设置展示UI                        | React.ReactNode                           |    -          |
|  error                 | 设置List加载失败状态                | Boolean                                  |    -          |
|  listRef               | 设置绑定当前根节点ref               | HTMLDivElement | nul                      |    -          |
|  loading               | 设置当前List加载的状态              | Boolean                                   |    -          |
|  LoadingErrorIndicator | 设置自定义List加载失败的UI组件       | React.ComponentType                       | ChatDown组件   |
|  LoadingIndicator      | 设置自定义List加载的UI组件          | React.ComponentType                       | Skeleton组件   |
