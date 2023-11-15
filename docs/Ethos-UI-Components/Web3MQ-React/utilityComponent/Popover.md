# Popover
The floating card popped by clicking or hovering.

## Basic Usage

import { Layout } from '@site/src/components/Layout'
import { PopoverExample } from '@site/src/components/Web3MQ-React/PopoverExample';
import PopoverMdx from '@site/src/components/Web3MQ-React/PopoverExample/PopoverExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the Popover example'
code={<PopoverMdx />}>
<PopoverExample />
</Layout>

## API
### Popover
**The properties of the Modal are Popover as follows:**

| Property     | Description                      | Type                | Default    | required |
| ------------ | -------------------------------- | ------------------- | ---------- | -------- |
|  content     | content of the card              | ReactNode           |    -       |  true    |
|  className   | set class selector               | string              |    -       |  false   |
|  style       | set the style                    | React.CSSProperties |    -       |  false   |