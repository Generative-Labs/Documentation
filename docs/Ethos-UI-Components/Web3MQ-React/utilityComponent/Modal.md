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
### Modal
**The properties of the Modal are described as follows:**

| Property         | Description                      | Type                                      | Default       | required |
| ---------------- | -------------------------------- | ----------------------------------------- | ------------- | -------- |
|  appType         | set the appType                  |[AppTypeEnum](/docs/Ethos-UI-Components/Web3MQ-React/chatComponent/Chat#apptypeenum) |  AppTypeEnum["pc"]       |  false   |
|  className       | set the mask class selector      | String                                    |    -          |  false   |
|  dialogClassName | set the dialog class selector    | String                                    |    -          |  false   |
|  modalHeader     | set the header                   | React.ReactNode                           |    -          |  false   |
|  rightBtn        | custom close button              | React.ReactNode                           |    -          |  false   |
|  style           | set the mask style               | React.CSSProperties                       |    -          |  false   |
|  title           | set the title                    | String                                    |    -          |  false   |
|  visible         | set display                      | Boolean                                   |    -          |  true    |
|  closeModal      | specify a function that will be called when a user clicks mask, close button on top right or close button | Function                                  | () => void     |  false   |