---
sidebar_position: 6
---
# MessageHead 
As the fixed header in chat room, `MessageHead` is used to render the chat room information and provide functions, such as inviting people into a group. It must exist as the `Chat` and `Channel` subcomponent, because `MessageHead` needs to get the `activeChannel` and `client` properties from the context.

## Basic Usage
:::tip
If your channelList list is empty, you can create a chat room in [createChannel](/docs/Ethos-UI-Components/Ethos-React/chatComponent/CreateChannel) and select it to send messages.
:::
`MessageHead` does not inject any props.

import { Layout } from '@site/src/components/Layout'
import { MessageHeadExample } from '@site/src/components/Web3MQ-React/MessageHeadExample';
import MessageHeadMdx from '@site/src/components/Web3MQ-React/MessageHeadExample/MessageHeadExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the MessageHead example'
code={<MessageHeadMdx />}>
<MessageHeadExample />
</Layout>