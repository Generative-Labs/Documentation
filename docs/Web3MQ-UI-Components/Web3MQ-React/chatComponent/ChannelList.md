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

import '@web3mq/react-components/dist/css/index.css';

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
### ChannelList
**The properties of the ChannelList are described as follows:**

| Property                   | Description                               | Type                      | Default | required |
| -------------------------- | ----------------------------------------- | ------------------------- | ------- | -------- |
| List                       | as `ChannelList`‘s root component, used to display a component that the list load and failed to load | React.ComponentType |   -     |   false   |
| Preview                    | set your custom `ChannelItem` component   | React.ComponentType       |   -     |   false  |
| DefaultEmptyStateIndicator | displays an empty list of components      | React.ComponentType       |   -     |   false  |
| Paginator                  | set your custom `paging` component        | React.ComponentType       |   -     |   false  |

### List
**The properties of the List are described as follows:**

| Property | Description            | Type           | Default | required |
| -------- | ---------------------- | -------------- | ------- | -------- |
| error    | set the error state    | Boolean        |   -     |  false   |
| loading  | set the load state     | Boolean        |   -     |  false   |
| listRef  | bind `List` root node  | HTMLDivElement |   -     |  true    |

### Paginator
**The properties of the Paginator are described as follows:**

| Property     | Description           | Type           | Default | required |
| ------------ | --------------------- | -------------- | ------- | -------- |
| element      | `List` root node      | HTMLDivElement |   -     |  false   |
| showLoading  | set the load state    | Boolean        | false   |  false   |
| loadNextPage | Load more             | Function       |   -     |  true    |

### Preview
**The properties of the Preview are described as follows:**

| Property         | Description                          | Type     | Default | required |
| ---------------- | ------------------------------------ | -------- | ------- | -------- |
| active           | Whether it is the current Channel    | Boolean  |   -     |   true   |
| avatarUrl        | resource address of the image avatar | String   |   -     |   true   |
| channel          | Chat room information                | [ChannelItemType](/docs/Web3MQ-SDK/JS-SDK/types/#channelitemtype) |   -     |   true   |
| displayTitle     | the user name or ID                  | String   |   -     |   true   |
| lastMessage      | the latest news                      | String   |   -     |   true   |
| updatedAt        | the Latest time                      | String   |   -     |   true   |
| setActiveChannel | the callback when clicked            | Function |   -     |   true   |