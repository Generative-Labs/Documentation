# Loading

## Basic Usage
`Loading`组件用于页面和区块的加载中状态。

import { Layout } from '@site/src/components/Layout'
import { LoadingExample } from '@site/src/components/Web3MQ-React/LoadingExample';
import LoadingMdx from '@site/src/components/Web3MQ-React/LoadingExample/LoadingExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Loading example'
code={<LoadingMdx />}>
<LoadingExample />
</Layout>

## API

**The properties of the Loading are described as follows:**

| Property     | Description                      | Type                | Default    |
| ------------ | -------------------------------- | ------------------- | ---------- |
|  className   | 设置根节点class                    | string              |    -       |
|  style       | 设置根节点style                    | React.CSSProperties |    -       |
|  type        | 设置Loading样式                    | 'spin’ ｜ null      |    -       |