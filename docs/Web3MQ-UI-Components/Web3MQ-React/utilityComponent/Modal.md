# Modal
Modal dialog.

## Basic Usage

import { Layout } from '@site/src/components/Layout'
import { ModalExample } from '@site/src/components/Web3MQ-React/ModalExample';
import ModalMdx from '@site/src/components/Web3MQ-React/ModalExample/ModalExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the Modal example'
code={<ModalMdx />}>
<ModalExample />
</Layout>

## API

**The properties of the Modal are described as follows:**

| Property         | Description                      | Type                                      | Default       |
| ---------------- | -------------------------------- | ----------------------------------------- | ------------- |
|  appType         | set the appType                  | `pc` \| `h5`                              |   ‘pc’        |
|  className       | set the mask class selector      | String                                    |    -          |
|  dialogClassName | set the dialog class selector    | String                                     |    -          |
|  modalHeader     | set the header                   | React.ReactNode                           |    -          |
|  rightBtn        | custom close button              | React.ReactNode                           |    -           |
|  style           | set the mask style               | React.CSSProperties                       |    -          |
|  title           | set the title                    | String                                    |    -          |
|  visible         | set display                      | Boolean                                   |    -           |
|  closeModal      | specify a function that will be called when a user clicks mask, close button on top right or close button | Function                                  | () => void     |