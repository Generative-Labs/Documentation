# RadioGroup

## Basic Usage
`RadioGroup` is used to select a single state from multiple options. The default id is '1' in value.

import { Layout } from '@site/src/components/Layout'
import { RadioGroupExample } from '@site/src/components/Web3MQ-React/RadioGroupExample';
import RadioGroupMdx from '@site/src/components/Web3MQ-React/RadioGroupExample/RadioGroupExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the RadioGroup example'
code={<RadioGroupMdx />}>
<RadioGroupExample />
</Layout>

## API
### RadioGroup
**The properties of the RadioGroup are Popover as follows:**

| Property     | Description           | Type                | Default    | required |
| ------------ | --------------------- | ------------------- | ---------- | -------- |
|  className   | set class selector    | string              |    -       |   false  |
|  style       | set the style         | React.CSSProperties |    -       |   true   |
|  value       | set children optional | Array<{id: string;name: string}> |    -       |   true  |
|  onChange    | the callback function that is triggered when the state changes	function |(e:Event)	=> void|    -       |   false  |