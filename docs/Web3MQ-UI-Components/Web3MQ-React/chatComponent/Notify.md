---
sidebar_position: 6
---

# Notify

`Notify`是给用户发送通知的功能组件，组件内功能需要基于client的api进行实现，只能在`Chat`中使用。

## Basic Usage
当用户成功在`Notify`组件中发送通知，可以在`ChannelHead`组件中小铃铛中提示。

import { Layout } from '@site/src/components/Layout'
import { NotifyExample } from '@site/src/components/Web3MQ-React/NotifyExample';
import NotifyMdx from '@site/src/components/Web3MQ-React/NotifyExample/NotifyExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Notify example'
code={<NotifyMdx />}>
<NotifyExample />
</Layout>

