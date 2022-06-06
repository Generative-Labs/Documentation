---
sidebar_position: 0
---

# Intro

web3-mq-js is the official JavaScript client for Web3MQ, a service for building chat applications.

# Design

#### client 类作为主入口，包含和挂载了基本属性和其他 Channel，Message 等其他类

#### sdk 核心思路分为两种（ 听不懂？没关系！往下看图）

> 1. 发布订阅模式：通过发布-订阅设计模式来管理数据，以及通知视图更新，这样做的好处是可以将数据维护在 sdk 内部，做统一管理，视图层只需要每次数据更新后，在回调函数中获取一下 sdk 对象上的最新数据，然后触发视图更新就可以看到最新的数据展示
> 2. 正常的 api 模式：调用方法，返回对应数据给视图层，由用户自己来维护数据和视图的关系（开发中。。。）

#### sdk遵从以下规则形成闭环，（ 看不懂？没关系！往下看代码）
![image](../../../static/img/sdkProcessEn.png)
![image](../../../static/img/sdkProcess.jpg)

#### 使用 channle 类中的 channelList 来演示在 react 中如何使用

```ts
import React, { useState } from 'react';
import { Web3MQ } from 'web3-mq';

const App = () => {
  const [channels, setChannels] = useState<ChannelResponse[]>([]);

  // 1. 首先初始化client实例
  const client = Web3MQ.getInstance('YOUR_ACCESS_TOKEN');

  // 2. 组件初始化的时候使用client下的on方法添加对channelList的监听方法
  useEffect(() => {
    client.on('channel.getList', handleEvent);
    return () => {
      client.off('channel.getList');
    };
  }, []);

  // 3. 调用client下channel类上的queryChannels方法获取channelList列表数据
  await client.channel.queryChannels({
    page: 1,
    size: 20,
  });

  // 4. 该方法在初始化的时候订阅了 channel.getList 事件，在client.channel.queryChannels方法中做了一些逻辑后，会调用emit方法去通知所有订阅者，也就是会执行该函数，该函数执行的时候，代表channel类上的channleList已经是最新的数据了，我们只需要从 client.channel中拿到最新的channelList数据，然后可以赋值给mobx，redux，useContext，useState等任何可以触发视图渲染的
  const handleEvent = (event: { type: string; data: any }) => {
    //该方法会返回event对象
    // 对象属性：type: 返回数据的类型，根据类型可以知道是哪个订阅事件触发，然后可以做不同的操作和处理
    // 对象属性：data: 返回的数据，(暂不使用，此处data是为了支持将来第二种模式预留)

    // 此处拿useState举例
    // 此处使用 client.channel.channelList 从sdk树上获取数据，而不是使用直接返回的数据，是为了保持数据的一致性
    setChannels(client.channel.channelList);
  };

  // 5. 此处可以打印出来最新的channleList
  console.log(channels);
};
```

## Feature

- [Client Class](/docs/Web3MQ-SDK/JS-SDK/client)
  - [Channel](/docs/Web3MQ-SDK/JS-SDK/channel)
  - [Contact](/docs/Web3MQ-SDK/JS-SDK/contact)
  - [Message](/docs/Web3MQ-SDK/JS-SDK/message)
  - [User](/docs/Web3MQ-SDK/JS-SDK/user/)
  <!-- - [User](/docs/Web3MQ-SDK/JS-SDK/) -->
- Utils function without client
  - login()
  - register()
  - getLoginRandomSecret()
- [Event Center](/docs/Web3MQ-SDK/JS-SDK/eventCenter)
- [Type list](/docs//Web3MQ-SDK/JS-SDK/types)

## Install

### Install with NPM

```bash
npm install web3-mq
```

### Install with Yarn

```bash
yarn add web3-mq
```
