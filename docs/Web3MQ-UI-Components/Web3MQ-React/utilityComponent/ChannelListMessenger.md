# ChannelListMessenger

## Basic Usage
`ChannelListMessenger` is used to show the UI components for List loading, loading failure, and loading success. Users can also set custom failure or load styles by using the `LoadingErrorIndicator` and `LoadingIndicator` properties.

import { Layout } from '@site/src/components/Layout'
import { ChannelListMessengerExample } from '@site/src/components/Web3MQ-React/ChannelListMessengerExample';
import ChannelListMessengerMdx from '@site/src/components/Web3MQ-React/ChannelListMessengerExample/ChannelListMessengerExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the ChannelListMessenger example'
code={<ChannelListMessengerMdx />}>
<ChannelListMessengerExample />
</Layout>

## API

**The properties of the ChannelListMessenger are described as follows:**

| Property               | Description                      | Type                                      | Default       |
| ---------------------- | -------------------------------- | ----------------------------------------- | ------------- |
|  children              | set the node                     | React.ReactNode                           |    -          |
|  error                 | Set the failed state             | Boolean                                  |    -          |
|  listRef               | bind the current root node       | HTMLDivElement | nul                      |    -          |
|  loading               | Set the load state               | Boolean                                   |    -          |
|  LoadingErrorIndicator | set the component with custom failure state | React.ComponentType                       | `ChatDown`   |
|  LoadingIndicator      | set the component with custom load state | React.ComponentType                       | `Skeleton`   |
