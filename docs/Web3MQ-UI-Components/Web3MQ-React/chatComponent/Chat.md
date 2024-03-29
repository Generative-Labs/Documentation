---
sidebar_position: 1
---

# Chat

The Chat component is a React Context provider that wraps the entire Web3MQ Chat application. All chat Components within the `@web3mq/react-components` library must be nested as children of Chat to maintain proper functionality.
 

## Basic Usage

The `Chat` component does not inject any UI, so its implementation is fairly simple. Once an instance of the `Chat` client has been created, you pass the client object as a prop to add it to the `ChatContext`.

import { Layout } from '@site/src/components/Layout'
import { ChatExample } from '@site/src/components/Web3MQ-React/ChatExample';
import ChatMdx from '@site/src/components/Web3MQ-React/ChatExample/ChatExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the Chat example'
code={<ChatMdx />}>
<ChatExample />
</Layout>

## containerId

Used to wrap a container around a `Chat` component.You need to pass the container's unique id selector as a prop to the Chat component, and all child components in `chat` will adapt to that container

:::tip
  The container style must set position is a property other than static
:::

```tsx
<div id='box' style={{position: 'relative'}}>
  <Chat containerId='box' client={client}>
    <ChannelList />
    <Channel>
      <MessageList />
      <MessageInput />
    </Channel>
  </Chat>
</div>
```

## useChatContext

Any child of the `Chat` component has access to the `ChatContext`. Each React Context in the component library can be accessed with one of our custom hooks, which must be imported individually.

```ts
const { client } = useChatContext();
```

## Api
### Chat
**The properties of the Chat are described as follows:**

| Property    | Description                                       | Type                                                                                 | Default           | required |
| ----------- | ------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------- | -------- |
| appType     | set viewport type of @web3mq/react-components     | [AppTypeEnum](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#apptypeenum)| AppTypeEnum["pc"] |   false  |
| className   | set your custom className                         | string                                                                               |   ""              |   false  |
| client      | chat Client Instance                              | [Client](/docs/Web3MQ-SDK/JS-SDK/client/)                                            |   -               |   true   |
| containerId | Set a unique id selector for the container wrapping `chat`| string                                                                               |   ""              |   false  |
| style       | set your custom style                             | React.CSSProperties                                                                  |   null            |   false  |
| logout      | set your exit method                              | Function                                                                             |   -               |   true   |

### useChatContext data

| Property             | Description                                   | Type                                                                                              | Default | required |
| -------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------- | -------- |
| appType              | set viewport type of @web3mq/react-components | [AppTypeEnum](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#apptypeenum)             | AppTypeEnum["pc"] |   -    |
| client               | Client Instance                               | [Client](/docs/Web3MQ-SDK/JS-SDK/client/)                                                         |   -     |    -     |
| containerId          | id selector for the node that wraps the `Chat` component | string                                                                                            |  ""     |    -     |
| activeNotification   | current Active Notifications in notification list | [NotifyResponse](/docs/Web3MQ-SDK/JS-SDK/types/#notifyresponse)                               |  null   |    -     |
| showListTypeView     | Tabs type in `DashBoard` component            | string                                                                                            | "room"  |    -     |
| loginUserInfo        | current user Info   | [CommonUserInfoType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#commonuserinfotype)                         |  null   |    -     |
| getUserInfo          | get target user information                   |1.didValue: string 2.didType: [didType](/docs/Web3MQ-SDK/JS-SDK/types/#didtype) 3.bindDid: boolean |  -      |    -     |
| logout               | set your exit method                          | Function                                                                                          |   -     |    -     |
| setShowListTypeView  | Update showListTypeView                       | React.Dispatch                                                                                    |  -      |    -     |
| setActiveNotification | Update current notification as active in notification list | React.Dispatch                                                                                    |  -      |    -     |
### AppTypeEnum
```ts
enum AppTypeEnum {
  'pc' = 'pc',
  'h5' = 'h5',
  'mobile' = 'mobile',
}
```

### CommonUserInfoType
| Property          | Description        | Type                                                                     | Default   | required |
| ----------------- | ------------------ | ------------------------------------------------------------------------ | --------- | -------- |
| address           | wallet address     | string                                                                   |  -        |  true    |
| defaultUserName   | default username   | string                                                                   |  -        |  true    |
| defaultUserAvatar | default avatar url | string                                                                   |  -        |  true    |
| didValues         | did value          | [DidValueType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#didvaluetype)[]|  -        |  true    |
| didValueMap       | did value of map   | Record<[WEB3_MQ_DID_TYPE](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#web3_mq_did_type), string>                                         |  -        |  true    |
| permissions       | user permissions   | [UserPermissionsType](/docs/Web3MQ-SDK/JS-SDK/types/#userpermissionstype)|  -        |  true    |
| stats             | follow stats info  | {total_followers:number,total_following:number}                          |  -        |  true    |
| userid            | userid of user     | string                                                                   |  -        |  true    |
| wallet_address    | wallet address     | string                                                                   |  -        |  true    |
| wallet_type       | wallet type        | string                                                                   |  -        |  true    |

### DidValueType
| Property  | Description        | Type                                                                     | Default   | required |
| --------- | ------------------ | ------------------------------------------------------------------------ | --------- | -------- |
| did_type  | did type           | [WEB3_MQ_DID_TYPE](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#web3_mq_did_type) |  -        |  true    |
| did_value | address corresponding to `didType` | string                                                  |  -        |  true    |
| detail    | detail             | any                                                                     |  -        |  true    |
|provider_id| provider id        | string                                                                  |  -        |  true    |
### WEB3_MQ_DID_TYPE
```ts
enum WEB3_MQ_DID_TYPE {
  PHONE = 'phone',
  EMAIL = 'email',
  LENS = 'lens.xyz',
  DOTBIT = 'dotbit',
  ENS = 'ens',
}