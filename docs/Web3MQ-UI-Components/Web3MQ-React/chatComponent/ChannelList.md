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

## Custom List
`List`组件是`ChannelList`的根组件，`List`可以传入listRef,error,loading等参数，通过error或loading用于渲染当前Channel列表在加载中、加载失败及加载成功的UI。

import CustomListMdx from '@site/src/components/Web3MQ-React/ChannelListExample/CustomList.mdx';

<Layout
title='Example'
description='use custom List component'
code={<CustomListMdx />}>
<ChannelListExample type='List' />
</Layout>

在`ChannelList`中会创建ref并传递给`List`，即当使用自定义`List`组件，要有必要参数listRef并绑定到`List`中跟节点，在后续Paginator组件中会通过该ref进行分页操作。

## Custom DefaultEmptyStateIndicator
`DefaultEmptyStateIndicator`用于渲染Channel列表为空的UI组件。

import CustomDefaultEmptyStateIndicatorMdx from '@site/src/components/Web3MQ-React/ChannelListExample/CustomDefaultEmptyStateIndicator.mdx';

<Layout
title='Example'
description='use custom DefaultEmptyStateIndicator component'
code={<CustomDefaultEmptyStateIndicatorMdx />}>
<ChannelListExample type='DefaultEmptyStateIndicator' />
</Layout>

## Custom Paginator
`Paginator`是`channelList`子组件，用于分页的功能组件，`Paginator`组件从`ChannelList`组件接受elment、loadNextPage、showLoading属性；

:::tip

`List` and `Paginator` components do not inject any UI.

:::

## Custom Preview
`Preview`是用于展示Channel行的UI组件

import CustomPreviewMdx from '@site/src/components/Web3MQ-React/ChannelListExample/CustomPreview.mdx';

<Layout
title='Example'
description='use custom Preview component'
code={<CustomPreviewMdx />}>
<ChannelListExample type='Preview' />
</Layout>

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
| error    | 获取Channel数据失败的状态 | Boolean        |   -     |
| loading  | 获取Channel数据加载的状态 | Boolean        |   -     |
| listRef  | ref用于绑定`List`根组件  | HTMLDivElement |   -     |

**The properties of the Paginator are described as follows:**

| Property     | Description           | Type           | Default |
| ------------ | --------------------- | -------------- | ------- |
| element      | `ChannelList`根节点ref | HTMLDivElement |   -     |
| showLoading  | 获取Channel数据状态     | Boolean        | false   |
| loadNextPage | 分页功能方法            | Function       |   -     |

**The properties of the Preview are described as follows:**

| Property         | Description           | Type     | Default |
| ---------------- | --------------------- | -------- | ------- |
| active           | 是否为当前的Channel     | Boolean  |   -     |
| avatarUrl        | 聊天室中对方的头像       | String   |   -     |
| channel          | Channel聊天室的信息     | [activechannelType](/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype) |   -     |
| displayTitle     | 聊天对象的用户名或ID     | String   |   -     |
| lastMessage      | 当前聊天室最新信息       | String   |   -     |
| updatedAt        | 当前聊天室最新消息的时间  | String   |   -     |
| setActiveChannel | 设置当前Channel        | Function |   -     |