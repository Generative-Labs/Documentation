---
sidebar_position: 7
---
# MessageConsole
`MessageConsole` is essentially a functional component that works with user permissions. It renders the input or button group based on the permissions of both users in the current chat.And can only be used in the `chat` component.

## Basic Usage
In the `MessageConsole` component, the user can customize the application of the component to scenarios where chat is possible or not, using the `Input` or `OperateContainer` props.

import { Layout } from '@site/src/components/Layout'
import { MessageConsoleExample } from '@site/src/components/Web3MQ-React/MessageConsoleExample';
import MessageConsoleMdx from '@site/src/components/Web3MQ-React/MessageConsoleExample/MessageConsoleExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the MessageConsole example'
code={<MessageConsoleMdx />}>
<MessageConsoleExample />
</Layout>

## API

**The properties of the MessageConsole are described as follows:**

| Property     | Description                      | Type                                      | Default       |
| ------------ | -------------------------------- | ----------------------------------------- | ------------- |
| Input        | set the custom Input Node        | React.ReactNode                           |   -           |
| OperateContainer | set the custom Operate component | React.ComponentType                   |   -           |
