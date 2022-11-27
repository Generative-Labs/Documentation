# Toast
`toast`是在全局用于展示操作反馈信息。

## Basic Usage

import { Layout } from '@site/src/components/Layout'
import { ToastExample } from '@site/src/components/Web3MQ-React/ToastExample';
import ToastMdx from '@site/src/components/Web3MQ-React/ToastExample/ToastExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Toast example'
code={<ToastMdx />}>
<ToastExample />
</Layout>

## API

**组件提供了一些静态方法，使用方式和参数如下：**

> 1. message.success(content, {duration})
> 2. message.error(content, {duration})
> 3. message.loading(content, {duration})
