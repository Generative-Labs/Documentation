# ChannelHead

`ChannelHead`作为`DashBoard`的head部分，内部有`Notifition`及`CreateChannel`组件，需要在`Chat`组件中使用。

## Basic Usage

`ChannelHead`无需注入任何props。`Channelhead`组件中集成`Notifition`及`CreateChannel`两个组件功能，可以查看订阅通知及创建聊天室。

import { Layout } from '@site/src/components/Layout'
import { ChannelHeadExample } from '@site/src/components/Web3MQ-React/ChannelHeadExample';
import ChannelHeadMdx from '@site/src/components/Web3MQ-React/ChannelHeadExample/ChannelHeadExample.mdx';

import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the ChannelHead example'
code={<ChannelHeadMdx />}>
<ChannelHeadExample />
</Layout>