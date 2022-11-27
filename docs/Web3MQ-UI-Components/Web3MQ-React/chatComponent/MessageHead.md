---
sidebar_position: 6
---
# MessageHead 
`MessageHead`是作为消息头部组件，需要作为Chat和Channel的子组件使用，从context获取activeChannel和client来渲染当前频道内容，和一些功能实现。

## Basic Usage
`MessageHead`不注入任何props，在`MessageHead`组件中，用户可以邀请好友进入自己当前的群聊。

import { Layout } from '@site/src/components/Layout'
import { MessageHeadExample } from '@site/src/components/Web3MQ-React/MessageHeadExample';
import MessageHeadMdx from '@site/src/components/Web3MQ-React/MessageHeadExample/MessageHeadExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the MessageHead example'
code={<MessageHeadMdx />}>
<MessageHeadExample />
</Layout>