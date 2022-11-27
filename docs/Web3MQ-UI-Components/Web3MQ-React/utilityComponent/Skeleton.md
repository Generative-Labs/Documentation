# Skeleton

`Skeleton`是一个在需要等待加载内容的位置提供一个占位图形组合的UI组件。

## Basic Usage
`Skeleton`目前只针对`Web3MQ-react`内部list加载作简单的占位效果。

import { Layout } from '@site/src/components/Layout'
import { SkeletonExample } from '@site/src/components/Web3MQ-React/SkeletonExample';
import SkeletonMdx from '@site/src/components/Web3MQ-React/SkeletonExample/SkeletonExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Skeleton example'
code={<SkeletonMdx />}>
<SkeletonExample />
</Layout>