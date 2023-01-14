# Skeleton

`Skeleton` provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet.

## Basic Usage

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