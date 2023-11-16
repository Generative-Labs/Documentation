---
sidebar_position: 0
---
# Avatar

## Basic Usage

import { Layout } from '@site/src/components/Layout'
import { AvatarExample } from '@site/src/components/Web3MQ-React/AvatarExample';
import AvatarExampleMdx from '@site/src/components/Web3MQ-React/AvatarExample/AvatarExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the Avatar example'
code={<AvatarExampleMdx />}>
<AvatarExample />
</Layout>

## API

### Avatar
**The properties of the Avatar are described as follows:**

| Property     | Description                      | Type                                      | Default       | required |
| ------------ | -------------------------------- | ----------------------------------------- | ------------- | -------- |
|  className   | set class selector               | string                                    |   -           |  false   |
|  image       | resource address of the image avatar  | string ｜ null                             |   -           |  false   |
|  name        | the name of the image, used to set the title | string                                     |   -           |  false   |
|  shape       | set the shape                    | ‘circle’ \| 'rounded' \| 'square’         | ‘circle’       |  false   |
|  size        | set the size                     | number                                    |   32           |  false   |
|  style       | set the style                    | React.CSSProperties                       |    -           |  false   |
|  Onclick     | the callback when the avatar is clicked | (event: React.BaseSyntheticEvent) => void | () => undefined |  false   |
|  OnMouseOver | the callback when the mouse hovers the avatar| (event: React.BaseSyntheticEvent) => void | () => undefined |  false   |
