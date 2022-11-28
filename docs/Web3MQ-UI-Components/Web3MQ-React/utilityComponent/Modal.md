# Modal
`Modal`是模态对话框组件

## Basic Usage

import { Layout } from '@site/src/components/Layout'
import { ModalExample } from '@site/src/components/Web3MQ-React/ModalExample';
import ModalMdx from '@site/src/components/Web3MQ-React/ModalExample/ModalExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Modal example'
code={<ModalMdx />}>
<ModalExample />
</Layout>

## API

**The properties of the Modal are described as follows:**

| Property         | Description                      | Type                                      | Default       |
| ---------------- | -------------------------------- | ----------------------------------------- | ------------- |
|  appType         | 设置appType类型                   | `pc` \| `h5`                              |   ‘pc’        |
|  className       | 可用于设置遮罩层的class             | String                                    |    -          |
|  dialogClassName | 可用于设置浮层的class              | String                                     |    -          |
|  modalHeader     | 设置头部样式                       | React.ReactNode                           |    -          |
|  rightBtn        | 设置头部右边按钮样式                | React.ReactNode                           |    -           |
|  style           | 可用于设置遮罩层的样式               | React.CSSProperties                       |    -          |
|  title           | 标题                              | String                                    |    -          |
|  visible         | 对话框是否可见                     | Boolean                                   |    -           |
|  closeModal      | 点击遮罩层或右上角叉或取消按钮的回调   | Function                                  | () => void     |