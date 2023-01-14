# Loading

## Basic Usage
`Loading` component is used for the loading state of pages and blocks.

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
|  className   | set class selector               | string              |    -       |
|  style       | set the style                    | React.CSSProperties |    -       |
|  type        | set the loading type             | 'spin’ ｜ null      |    -       |