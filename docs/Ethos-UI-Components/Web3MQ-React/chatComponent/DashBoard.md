# DashBoard
AS The Tabs component, `DashBoard` renders `ChannelList`、`ContactList`、`NotificationList` and `Profile` by default when no props are passed, it gets `showListTypeView` property that the current type of tab panel  through the `useChatContext`, and cannot be used outside the `Chat` component.

## Basic Usage

import { Layout } from '@site/src/components/Layout'
import { DashBoardExample } from '@site/src/components/Web3MQ-React/DashBoardExample';
import DashBoardExampleMdx from '@site/src/components/Web3MQ-React/DashBoardExample/DashBoardExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the DashBoard example'
code={<DashBoardExampleMdx />}>
<DashBoardExample />
</Layout>

## Use Custom Props
You can customize the Tab content and use it with `defaultType` to activate the type of Tab content. And you can also pass the `ChannelHead` as props to define the fixed header of `DashBord`.

import UseCustomPropsMdx from '@site/src/components/Web3MQ-React/DashBoardExample/UseCustomProps.mdx';

<Layout
title='Example'
description='This is use custom props DashBoard example'
code={<UseCustomPropsMdx />}>
<DashBoardExample type='custom' />
</Layout>

## Api
### DashBoard
```tsx
type TabType = {
  title: string;
  icon: React.ReactNode;
  type: string;
  component: React.ReactNode;
}
```

| Property       | Description                            | Type               | Default | required |
| -------------- | -------------------------------------- | ------------------ | ------- | -------- |
| ChannelHead    | custom `ChannelHead` component         | React.ComponentType |   -     |  false  |
| defaultType    | initializes the type of the selected panel | String             | 'room'  |  false  |
| MobileTabMaps  | tab contents when appType is h5        | TabType            |   -     |  false  |
| PCTabMaps      | tab contents when appType is pc        | TabType            |   -     |  false  |