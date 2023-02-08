---
sidebar_position: 2
---
# Channel List

The `ChannelList` component queries an array of channel objects from the Chat API

## Basic Usage
:::tip
If your channelList list is empty, you can create a chat room in [createChannel](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/CreateChannel).
:::
The ChannelList does not have any required props

import { Layout } from '@site/src/components/Layout'
import { ChannelListExample } from '@site/src/components/Web3MQ-React/ChannelListExample';
import ChannelListMdx from '@site/src/components/Web3MQ-React/ChannelListExample/ChannelListExample.mdx';

import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the ChannelList example'
code={<ChannelListMdx />}>
<ChannelListExample />
</Layout>

## Custom Component
ChannelList UI is determined by two of its props, List and Preview,if no props are injected, the default rendering `ChannelListMessenger` and `ChannelPreview`.

`listRef` is a required attribute and must be bound to the Custom `ChannelListMessenger` root node. This is necessary for the `ChannelList` to implement paging.

> 1. `List` renders loading failure, loading, and loading success views by `error` and `loading` properties.
> 2. `DefaultEmptyStateIndicator` is used to show the empty state view.
> 3. `Paginator` is a `channelList` subcomponent for pagination, `Paginator` component accepts elment, loadNextPage, and showLoading properties from `ChannelList` component;
> 4. `Preview` is used to render style and click functionality of channel in the list.

import CustomListMdx from '@site/src/components/Web3MQ-React/ChannelListExample/CustomList.mdx';

<Layout
title='Example'
description='use custom component as props'
code={<CustomListMdx />}>
<ChannelListExample type='custom' />
</Layout>

## Api
### ChannelList
**The properties of the ChannelList are described as follows:**

| Property                   | Description                               | Type                      | Default | required |
| -------------------------- | ----------------------------------------- | ------------------------- | ------- | -------- |
| List                       | as `ChannelList`‘s root component, used to display a component that the list load and failed to load | React.ComponentType |`ChannelListMessenger`|   false   |
| Preview                    | set your custom `ChannelItem` component   | React.ComponentType       |`ChannelPreview`|   false  |
| DefaultEmptyStateIndicator | displays an empty list of components      | React.ComponentType       |`EmptyStateIndicator`|   false  |
| Paginator                  | set your custom `paging` component        | React.ComponentType       |`Paginator`|   false  |

### `ChannelListMessenger`
**The properties of the ChannelListMessenger are described as follows:**

| Property | Description            | Type           | Default | required |
| -------- | ---------------------- | -------------- | ------- | -------- |
| error    | set the error state    | Boolean        |   -     |  false   |
| loading  | set the load state     | Boolean        |   -     |  false   |
| listRef  | bind `ChannelListMessenger` root node  | HTMLDivElement |   -     |  true    |

### Paginator
**The properties of the Paginator are described as follows:**

| Property     | Description           | Type           | Default | required |
| ------------ | --------------------- | -------------- | ------- | -------- |
| element      | `ChannelListMessenger` root node      | HTMLDivElement |   -     |  false   |
| showLoading  | set the load state    | Boolean        | false   |  false   |
| loadNextPage | Load more             | Function       |   -     |  true    |

### ChannelPreview
**The properties of the ChannelPreview are described as follows:**

| Property         | Description                          | Type     | Default | required |
| ---------------- | ------------------------------------ | -------- | ------- | -------- |
| active           | Whether it is the current Channel    | Boolean  |   -     |   true   |
| avatarUrl        | resource address of the image avatar | String   |   -     |   true   |
| channel          | Chat room information                | [ChannelItemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype) |   -     |   true   |
| displayTitle     | the user name or ID                  | String   |   -     |   true   |
| lastMessage      | the latest news                      | String   |   -     |   true   |
| updatedAt        | the Latest time                      | String   |   -     |   true   |
| setActiveChannel | the callback when clicked            | Function |   -     |   true   |