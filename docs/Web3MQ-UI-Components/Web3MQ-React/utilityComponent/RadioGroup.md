# RadioGroup

## Basic Usage
用户在使用`RadioGroup`组件时，传入value数组时必须设置任意项中id为'1'且该id为唯一的，`RadioGroup`内部会默认将id为'1'这项设置为选中项。

import { Layout } from '@site/src/components/Layout'
import { RadioGroupExample } from '@site/src/components/Web3MQ-React/RadioGroupExample';
import RadioGroupMdx from '@site/src/components/Web3MQ-React/RadioGroupExample/RadioGroupExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the RadioGroup example'
code={<RadioGroupMdx />}>
<RadioGroupExample />
</Layout>

## API

**The properties of the RadioGroup are Popover as follows:**

| Property     | Description      | Type                | Default    |
| ------------ | ---------------- | ------------------- | ---------- |
|  className   | 设置根节点class    | string              |    -       |
|  style       | 设置根节点style    | React.CSSProperties |    -       |
|  value       | 以配置形式设置子元素 | Array<{id: string;name: string}> |    -       |
|  onChange    | 选项变化时的回调函数  | Function            |    -       |