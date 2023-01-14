# ChanelHead
`ChannelHead` as a fixed header in `DashBoard`, and it integrates `CreateChannel` inside which needs to be used in the `Chat` component.

## Basic Usage

`ChannelHead` does not injected any props.

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