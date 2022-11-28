---
sidebar_position: 0
---
# Avatar

## Basic Usage

import { Layout } from '@site/src/components/Layout'
import { AvatarExample } from '@site/src/components/Web3MQ-React/AvatarExample';
import AvatarExampleMdx from '@site/src/components/Web3MQ-React/AvatarExample/AvatarExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Avatar example'
code={<AvatarExampleMdx />}>
<AvatarExample />
</Layout>

## API

**The properties of the Avatar are described as follows:**

| Property     | Description                      | Type                                      | Default       |
| ------------ | -------------------------------- | ----------------------------------------- | ------------- |
|  className   | 设置`Avatar`组件类名               | stirng                                    |   -           |
|  image       | 图片类头像的资源地址                | string ｜ null                             |   -           |
|  name        | 图像的名称，用于设置title           | string                                     |   -           |
|  shape       | 指定头像形状                       | ‘circle’ | 'rounded' | 'square’           | ‘circle’       |
|  size        | 设置头像大小                       | number                                    |   32           |
|  style       | 设置`Avatar`组件style             | React.CSSProperties                       |    -           |
|  Onclick     | 点击头像时的回调                   | (event: React.BaseSyntheticEvent) => void | () => undefined |
|  OnMouseOver | 鼠标悬浮头像时的回调                | (event: React.BaseSyntheticEvent) => void | () => undefined |
