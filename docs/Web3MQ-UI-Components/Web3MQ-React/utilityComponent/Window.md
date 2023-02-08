# Window
In `@web3mq/react-components`, `Window` is used to wrap the `MessageList`, `MessageHeader`, and `MessageInput` components to compatibility with views.

## Basic Usage

import { Layout } from '@site/src/components/Layout'
import { WindowExample } from '@site/src/components/Web3MQ-React/WindowExample';
import WindowMdx from '@site/src/components/Web3MQ-React/WindowExample/WindowExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the Window example'
code={<WindowMdx />}>
<WindowExample />
</Layout>

## Api
### Window 
**The properties of the RadioGroup are Window as follows:**

| Property     | Description           | Type                | Default    | required |
| ------------ | --------------------- | ------------------- | ---------- | -------- |
| hasContainer | Whether the `chat` component passes in the containerid | boolean             |   false    |   false  |