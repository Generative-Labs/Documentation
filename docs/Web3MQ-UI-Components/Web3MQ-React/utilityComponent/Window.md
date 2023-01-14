# Window
In `web3-mq-react`, `Window` is used to wrap the `MessageList`, `MessageHeader`, and `MessageInput` components to compatibility with views.

## Basic Usage

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