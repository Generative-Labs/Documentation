---
sidebar_position: 1
---

# CreateChannel

`CreateChannel` is a set of features and UI components for sending friends and creating chat rooms, it needs to get the `client` property through `useChatContext` and cannot be used alone outside the `Chat` component.

## Basic Usage
`CreateChannel` made up of a button and modal, the button part control modal display and hidden, and the modal show the function part of sending friend request and creating room; This component does not need to pass any props.

import { Layout } from '@site/src/components/Layout'
import { CreateChannelExample } from '@site/src/components/Web3MQ-React/CreateChannelExample';
import CreateChannelMdx from '@site/src/components/Web3MQ-React/CreateChannelExample/CreateChannelExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the CreateChannel example'
code={<CreateChannelMdx />}>
<CreateChannelExample />
</Layout>
