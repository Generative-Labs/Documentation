# Toast
`toast` display global messages as feedback in response to user operations.

## Basic Usage

import { Layout } from '@site/src/components/Layout'
import { ToastExample } from '@site/src/components/Web3MQ-React/ToastExample';
import ToastMdx from '@site/src/components/Web3MQ-React/ToastExample/ToastExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the Toast example'
code={<ToastMdx />}>
<ToastExample />
</Layout>

## API

**Supports passing parameters wrapped in an object：**

> 1. message.success(content, {duration})
> 2. message.error(content, {duration})
> 3. message.loading(content, {duration})
