# ConnectMessage
`ConnectMessage` is a global prompt component used to indicate the status of a Websocket connection,and can only be used in the `chat` component.

## Basic Usage
User can customize text descriptions, icons and buttons for different states of the websocket,the default button is provided to reconnect when the websocket connection is closed, and the user can customize it with the `btnNode` props.

import { Layout } from '@site/src/components/Layout'
import { ConnectMessageExample } from '@site/src/components/Web3MQ-React/ConnectMessageExample';
import ConnectMessageMdx from '@site/src/components/Web3MQ-React/ConnectMessageExample/ConnectMessageExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the ConnectMessage example'
code={<ConnectMessageMdx />}>
<ConnectMessageExample />
</Layout>

## Api

**The properties of the ConnectMessage are described as follows:**

| Property    | Description                            | Type                                      | Default |
| ----------- | -------------------------------------- | ----------------------------------------- | ------- |
| btnNode     | Set the custom `Button` when websocket is closed | React.ReactNode                 |    -    |
| connectDescription | Set the description when the websocket is connected | string\|React.ReactNode |   -     |
| connectIcon      | Set Icon when the websocket is connected  | React.ReactNode                   |   -     |
| closedDescription | Set the description when the websocket is closed | string\|React.ReactNode   |   -     |
| closedIcon       | Set Icon when the websocket is closed | React.ReactNode                       |   -     |
| openDescription  | Set the description when the websocket is opened  | string\|React.ReactNode   |   -     |
| openIcon         | Set Icon when the websocket is opened  | React.ReactNode                      |   -     |
| isShow           | Whether the component is visible or not | boolean                             |   -     |
