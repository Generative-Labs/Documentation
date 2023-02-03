# Button

## Basic Usage
import { Layout } from '@site/src/components/Layout'
import { ButtonExample } from '@site/src/components/Web3MQ-React/ButtonExample';
import ButtonExampleMdx from '@site/src/components/Web3MQ-React/ButtonExample/ButtonExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the Button example'
code={<ButtonExampleMdx />}>
<ButtonExample />
</Layout>

## API
### Button
**The properties of the Button are described as follows:**

| Property     | Description                      | Type                                      | Default       | required |
| ------------ | -------------------------------- | ----------------------------------------- | ------------- | -------- |
|  block       | Option to fit button width to its parent width  | boolean                    |   -           |  false   |
|  className   | set class selector               | stirng                                    |   -           |  false   |
|  disabled    | Disabled state of button         | boolean                                   |   -           |  false   |
|  icon        | Set the icon component of button | React.ReactNode                           |   -           |  false   |
|  size        | Set the size of button           | 'large' \| 'default' \| 'small'           |   'default'   |  false   |
|  style       | set the style                    | React.CSSProperties                       |    -          |  false   |
|  type        | Can be set to primary ghost danger default |  string                         |   'default'   |  false   |
|  onClick     | Set the handler to handle click event | (event: MouseEvent) => void          | () => undefined |  false   |
