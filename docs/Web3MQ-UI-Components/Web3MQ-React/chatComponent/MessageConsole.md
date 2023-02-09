---
sidebar_position: 7
---
# MessageConsole
`MessageConsole` is essentially a functional component that works with user permissions. It renders the content of input or operation based on the permissions of both users in the current chat, if both permissions are passed, render the input content; if permissions are not passed show the operation content for sending friend request and follow operation.And can only be used in the `chat` component.

## When To Use
When your chat partner turns on user permissions and needs to be `contact` to chat, then `MessageInput` can't meet the needs of the scenario.This requires `MessageConsole`

## Basic Usage
In the `MessageConsole` component, the user can customize the application of the component to scenarios where chat is possible or not, using the `Input` or `OperateContainer` props.

import { Layout } from '@site/src/components/Layout'
import { MessageConsoleExample } from '@site/src/components/Web3MQ-React/MessageConsoleExample';
import MessageConsoleMdx from '@site/src/components/Web3MQ-React/MessageConsoleExample/MessageConsoleExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the MessageConsole example'
code={<MessageConsoleMdx />}>
<MessageConsoleExample />
</Layout>

## API
### MessageConsole
**The properties of the MessageConsole are described as follows:**

| Property     | Description                      | Type                                      | Default       | required |
| ------------ | -------------------------------- | ----------------------------------------- | ------------- | -------- |
| Input        | set the custom Input Node        | React.ReactNode                           |   -           |  false   |
| OperateContainer | set the custom Operate component | React.ComponentType                   |   -           |  false   |
