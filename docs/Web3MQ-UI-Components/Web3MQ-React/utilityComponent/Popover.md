# Popover
The floating card popped by clicking or hovering.

## Basic Usage

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
|  content     | content of the card              | ReactNode           |    -       |
|  className   | set class selector               | string              |    -       |
|  style       | set the style                    | React.CSSProperties |    -       |