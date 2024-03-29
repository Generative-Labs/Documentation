# ChannelListMessenger

## Basic Usage
`ChannelListMessenger` is used to show the UI components for List loading, loading failure, and loading success. Users can also set custom failure or load styles by using the `LoadingErrorIndicator` and `LoadingIndicator` properties.

import { Layout } from '@site/src/components/Layout'
import { ChannelListMessengerExample } from '@site/src/components/Web3MQ-React/ChannelListMessengerExample';
import ChannelListMessengerMdx from '@site/src/components/Web3MQ-React/ChannelListMessengerExample/ChannelListMessengerExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the ChannelListMessenger example'
code={<ChannelListMessengerMdx />}>
<ChannelListMessengerExample />
</Layout>

## API

### ChannelListMessenger
**The properties of the ChannelListMessenger are described as follows:**

| Property               | Description                      | Type                                      | Default       | required |
| ---------------------- | -------------------------------- | ----------------------------------------- | ------------- | -------- |
|  children              | set the node                     | React.ReactNode                           |    -          |   true   |
|  error                 | Set the failed state             | Boolean                                   |    -          |  false   |
|  listRef               | bind the current root node       | HTMLDivElement | nul                      |    -          |   true   |
|  loading               | Set the load state               | Boolean                                   |    -          |  false   |
|  LoadingErrorIndicator | set the component with custom failure state | React.ComponentType            |    -          |  false   |
|  LoadingIndicator      | set the component with custom load state | React.ComponentType               |    -          |  false   |
