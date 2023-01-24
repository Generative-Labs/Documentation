# Button

## Basic Usage
import { Layout } from '@site/src/components/Layout'
import { ButtonExample } from '@site/src/components/Web3MQ-React/ButtonExample';
import ButtonExampleMdx from '@site/src/components/Web3MQ-React/ButtonExample/ButtonExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Button example'
code={<ButtonExampleMdx />}>
<ButtonExample />
</Layout>

## API

**The properties of the Button are described as follows:**

| Property     | Description                      | Type                                      | Default       |
| ------------ | -------------------------------- | ----------------------------------------- | ------------- |
|  block       | Option to fit button width to its parent width  | boolean                    |   -           |
|  className   | set class selector               | stirng                                    |   -           |
|  disabled    | Disabled state of button         | boolean                                   |   -           |
|  icon        | Set the icon component of button | React.ReactNode                           |   -           |
|  size        | Set the size of button           | 'large' \| 'default' \| 'small'           |   'default'   |
|  style       | set the style                    | React.CSSProperties                       |    -          |
|  type        | Can be set to primary ghost danger default |  string                         |   'default'   |
|  onClick     | Set the handler to handle click event | (event: MouseEvent) => void          | () => undefined |
