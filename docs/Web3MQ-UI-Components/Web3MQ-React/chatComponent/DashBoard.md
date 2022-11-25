# DashBoard

`DashBoard`是一个Tabs组件。当不传入任何props时，tabs内容默认渲染组件库中`ChannelList`、`ContactList`、`Profile`三个组件。`DashBoar`组件通过useChatContext获取setShowListTypeView方法，并修改showListTypeView，即无法在`Chat`组件之外使用。

## Basic Usage

import { Layout } from '@site/src/components/Layout'
import { DashBoardExample } from '@site/src/components/DashBoardExample';
import DashBoardExampleMdx from '@site/src/components/DashBoardExample/DashBoardExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the DashBoard example'
code={<DashBoardExampleMdx />}>
<DashBoardExample />
</Layout>

## Use Custom Props
在`DashBoard`中，用户可以自定义标签及内容部分，在使用自定义MoblieTabMaps或PcTabMaps时必须配合defaultType来使用，来确认默认的第一项。在组件库中可以通过`useChatContext`获取showListTypeView来获取当前项。可以在`DashBoard`传入ChannelHeader参数，来渲染内容的自定义头部部分。

import UseCustomPropsMdx from '@site/src/components/DashBoardExample/UseCustomProps.mdx';

<Layout
title='Example'
description='This is use custom props DashBoard example'
code={<UseCustomPropsMdx />}>
<DashBoardExample type='custom' />
</Layout>

## Api

```tsx
type TabType = {
  title: string;
  icon: React.ReactNode;
  type: string;
  component: React.ReactNode;
}
```

| Property       | Description                            | Type               | Default |
| -------------- | -------------------------------------- | ------------------ | ------- |
| ChannelHead    | 设置自定义`ChannelHead`组件              | React.ComponentType |   -     |
| defaultType    | 初始化选中面板的 type                     | String             | 'room'  |
| MobileTabMaps  | 配置AppType为'Mobile'的选项卡内容         | TabType            |   -     |
| PCTabMaps      | 配置AppType为'PC'的选项卡内容             | TabType            |   -     |