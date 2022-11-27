# Popover
鼠标移入元素，弹出气泡式的卡片浮层。

## Basic Usage
`Popover`组件目前鼠标移入只展示top方向。

import { Layout } from '@site/src/components/Layout'
import { PopoverExample } from '@site/src/components/Web3MQ-React/PopoverExample';
import PopoverMdx from '@site/src/components/Web3MQ-React/PopoverExample/PopoverExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Popover example'
code={<PopoverMdx />}>
<PopoverExample />
</Layout>

## API

**The properties of the Modal are Popover as follows:**

| Property     | Description                      | Type                | Default    |
| ------------ | -------------------------------- | ------------------- | ---------- |
|  content     | 卡片内容                           | ReactNode           |    -       |
|  className   | 设置根节点class                    | string              |    -       |
|  style       | 设置根节点style                    | React.CSSProperties |    -       |