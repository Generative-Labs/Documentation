---
sidebar_position: 1
---

# CreateChannel

`CreateChannel`是发送好友及创建聊天室的集功能和UI的组件，在组件内需要通过`useChatContext`获取client的属性，即无法在`Chat`组件外部单独使用。

## Basic Usage
`CreateChannel`由一个button和modal组成，button控制modal显示隐藏；modal展示发送好友请求及创建room的功能部分；该组件无需传入任何props。

import { Layout } from '@site/src/components/Layout'
import { CreateChannelExample } from '@site/src/components/CreateChannelExample';
import CreateChannelMdx from '@site/src/components/CreateChannelExample/CreateChannelExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the CreateChannel example'
code={<CreateChannelMdx />}>
<CreateChannelExample />
</Layout>
