# Channel List

The `ChannelList` component queries an array of channel objects from the Chat API

## Basic Usage

The ChannelList does not have any required props

import { Layout } from '@site/src/components/Layout'
import { ChannelListExample } from '@site/src/components/ChannelListExample';
import ChannelListMdx from '@site/src/components/ChannelListExample/ChannelListExample.mdx';

import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the ChannelList example'
code={<ChannelListMdx />}>
<ChannelListExample />
</Layout>

## Custom List
`List`组件是`ChannelList`的根组件，`List`可以传入listRef,error,loading等参数，通过error或loading用于渲染当前Channel列表在加载中、加载失败及加载成功的UI。

import CustomListMdx from '@site/src/components/ChannelListExample/CustomList.mdx';

<Layout
title='Example'
description='use custom List component'
code={<CustomListMdx />}>
<ChannelListExample type='List' />
</Layout>

在`ChannelList`中会创建ref并传递给`List`，即当使用自定义`List`组件，要有必要参数listRef并绑定到`List`中跟节点，在后续Paginator组件中会通过该ref进行分页操作。

**List Props**

| Property | Description            | Type           | Default |
| -------- | ---------------------- | -------------- | ------- |
| error    | 获取Channel数据失败的状态 | Boolean        |   -     |
| loading  | 获取Channel数据加载的状态 | Boolean        |   -     |
| listRef  | ref用于绑定`List`根组件  | HTMLDivElement |   -     |

## Custom DefaultEmptyStateIndicator
`DefaultEmptyStateIndicator`用于渲染Channel列表为空的UI组件。

import CustomDefaultEmptyStateIndicatorMdx from '@site/src/components/ChannelListExample/CustomDefaultEmptyStateIndicator.mdx';

<Layout
title='Example'
description='use custom DefaultEmptyStateIndicator component'
code={<CustomDefaultEmptyStateIndicatorMdx />}>
<ChannelListExample type='DefaultEmptyStateIndicator' />
</Layout>

## Custom Paginator
`Paginator`是`channelList`子组件，用于分页的功能组件，`Paginator`组件从`ChannelList`组件接受elment、loadNextPage、showLoading属性；
```tsx
const CustomPaginator = (props) => {
  const { 
    element, 
    showLoading = false,
    loadNextPage, 
    children,
    useCapture = true,
    reverse = false,
  } = props;
  const handleScroll = async () => {
    if (element && element.current) {
      const el = element.current;
      const { scrollHeight, clientHeight, scrollTop } = el;
      if (reverse && scrollTop === 0) {
        await loadNextPage();
        setTimeout(() => {
          el.scrollTop = getCurrentHeight(el) - scrollHeight;
        });
      }
      if (!reverse && scrollHeight - scrollTop === clientHeight) {
        loadNextPage();
      }
    }
  }
  const getCurrentHeight = (el: HTMLDivElement) => {
    return el.scrollHeight;
  };
  useEffect(() => {
    if (!element || !element.current) {
      return;
    }
    const scrollElement = element.current;
    scrollElement.addEventListener('scroll', handleScroll, useCapture);
    return () => {
      scrollElement.removeEventListener('scroll', handleScroll, useCapture);
    };
  }, []);
  return (
    <div>
      {!reverse && children}
      {showLoading && <div>Loading...</div>}
      {reverse && children}
    </div>
  )
}
const App = () => {
  return (
    <Chat client={client}>
      <ChannelList Paginator={CustomPaginator} />
      <Channel>
        <MessageList />
        <MessageInput />
      </Channel>
    </Chat>
  )
}
```
**Paginator Props**

| Property     | Description           | Type           | Default |
| ------------ | --------------------- | -------------- | ------- |
| element      | `ChannelList`根节点ref | HTMLDivElement |   -     |
| showLoading  | 获取Channel数据状态     | Boolean        | false   |
| loadNextPage | 分页功能方法            | Function       |   -     |

## Custom Preview
`Preview`是用于展示Channel的UI组件

import CustomPreviewMdx from '@site/src/components/ChannelListExample/CustomPreview.mdx';

<Layout
title='Example'
description='use custom Preview component'
code={<CustomPreviewMdx />}>
<ChannelListExample type='Preview' />
</Layout>

**Preview Props**

| Property         | Description           | Type     | Default |
| ---------------- | --------------------- | -------- | ------- |
| active           | 是否为当前的Channel     | Boolean  |   -     |
| avatarUrl        | 聊天室中对方的头像       | String   |   -     |
| channel          | Channel聊天室的信息     | [activechannelType](/docs/Web3MQ-SDK/JS-SDK/types/#activechanneltype) |   -     |
| displayTitle     | 聊天对象的用户名或ID     | String   |   -     |
| lastMessage      | 当前聊天室最新信息       | String   |   -     |
| updatedAt        | 当前聊天室最新消息的时间  | String   |   -     |
| setActiveChannel | 设置当前Channel        | Function |   -     |
## Api

**The properties of the ChannelList are described as follows:**

| Property | Description                               | Type                                      | Default |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- |
| List     | as `ChannelList`‘s root component, used to display a component that the list load and failed to load | React.ComponentType |   -     |
| Preview                    | set your custom `ChannelItem` component | React.ComponentType       |   -     |
| DefaultEmptyStateIndicator | displays an empty list of components    | React.ComponentType       |   -     |
| Paginator                  | set your custom `paging` component      | React.ComponentType       |   -     |

:::tip

`List` and `Paginator` components do not inject any UI.

:::
