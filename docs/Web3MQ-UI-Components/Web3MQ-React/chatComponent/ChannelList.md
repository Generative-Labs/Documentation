---
sidebar_position: 2
---
# Channel List

The `ChannelList` component queries an array of channel objects from the Chat API

## Basic Usage

The ChannelList does not have any required props

import { Layout } from '@site/src/components/Layout'
import { ChannelListExample } from '@site/src/components/Web3MQ-React/ChannelListExample';
import ChannelListMdx from '@site/src/components/Web3MQ-React/ChannelListExample/ChannelListExample.mdx';

import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the ChannelList example'
code={<ChannelListMdx />}>
<ChannelListExample />
</Layout>

## Custom Component
> 1. `List` renders loading failure, loading, and loading success views by `error` and `loading` properties.
> 2. `DefaultEmptyStateIndicator` is used to show the empty state view.
> 3. `Paginator` is a `channelList` subcomponent for pagination, `Paginator` component accepts elment, loadNextPage, and showLoading properties from `ChannelList` component;
> 4. `Preview` is used to render list item.

:::tip

`List` and `Paginator` components do not inject any UI.

:::

import CustomListMdx from '@site/src/components/Web3MQ-React/ChannelListExample/CustomList.mdx';

<Layout
title='Example'
description='use custom component as props'
code={<CustomListMdx />}>
<ChannelListExample type='custom' />
</Layout>

`listRef` is a required attribute and must be bound to the Custom `List` root node. This is necessary for the `ChannelList` to implement paging

## Api

**The properties of the ChannelList are described as follows:**

| Property | Description                               | Type                                      | Default |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- |
| List     | as `ChannelList`‘s root component, used to display a component that the list load and failed to load | React.ComponentType |   -     |
| Preview                    | set your custom `ChannelItem` component | React.ComponentType       |   -     |
| DefaultEmptyStateIndicator | displays an empty list of components    | React.ComponentType       |   -     |
| Paginator                  | set your custom `paging` component      | React.ComponentType       |   -     |

**The properties of the List are described as follows:**

| Property | Description            | Type           | Default |
| -------- | ---------------------- | -------------- | ------- |
| error    | set the error state    | Boolean        |   -     |
| loading  | set the load state     | Boolean        |   -     |
| listRef  | bind `List` root node  | HTMLDivElement |   -     |

**The properties of the Paginator are described as follows:**

| Property     | Description           | Type           | Default |
| ------------ | --------------------- | -------------- | ------- |
| element      | `List` root node      | HTMLDivElement |   -     |
| showLoading  | set the load state    | Boolean        | false   |
| loadNextPage | Load more             | Function       |   -     |

**The properties of the Preview are described as follows:**

| Property         | Description           | Type     | Default |
| ---------------- | --------------------- | -------- | ------- |
| active           | Whether it is the current Channel    | Boolean  |   -     |
| avatarUrl        | resource address of the image avatar | String   |   -     |
| channel          | Chat room information | [activechannelType](/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype) |   -     |
| displayTitle     | the user name or ID   | String   |   -     |
| lastMessage      | the latest news       | String   |   -     |
| updatedAt        | the Latest time       | String   |   -     |
| setActiveChannel | the callback when clicked | Function |   -     |