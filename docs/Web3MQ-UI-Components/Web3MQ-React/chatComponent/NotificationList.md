---
sidebar_position: 8
---

# NotificationList
`NotificationList`, which renders the current list when other users send you friend requests, follow you, invite you to groups, subscribe to topics and post content. And must be nested as children of Chat to maintain proper functionality.

## Basic Usage
:::tip
You can try to get other users to follow you or send you friend requests to get the notification list to show content.
:::
`NotificationList` UI is determined by two of its props, `Notification` and `EmptyContaniner` . The Notification prop dictates the design and click functionality of an individual notification in the list.The EmptyContainer prop allows you to customize the container when NotificationList is empty. If not provided via props, these UI components will render the default style. Each item will trigger `setActiveNotification` when clicked

```ts
const { setActiveNotification } = useChat('NotificationList');
```

import { Layout } from '@site/src/components/Layout'
import { NotificationListExample } from '@site/src/components/Web3MQ-React/NotificationListExample';
import NotificationListMdx from '@site/src/components/Web3MQ-React/NotificationListExample/NotificationListExample.mdx';

import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the NotificationList example'
code={<NotificationListMdx />}>
<NotificationListExample />
</Layout>

## API
### NotificationList
**The properties of the NotificationList are described as follows:**

| Property        | Description                            | Type                  | Default             | required |
| --------------- | -------------------------------------- | --------------------- | ------------------- | -------- |
| Notification    | set your custom Notification in list   | React.ComponentType   |  -                  |   false  |
| EmptyContaniner | displays an empty list of components   | React.ReactNode       |  -                  |   false  |

### NotificationPreview
**The properties of the NotificationPreview are described as follows:**

| Property              | Description                                           | Type                                                                                                             | Default | required |
| --------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| client                | Client Instance                                       | [Client](/docs/Web3MQ-SDK/JS-SDK/client/)                                                                        |   -     |   true   |
| notification          | notification content in list                          | [NotifyResponse](/docs/Web3MQ-SDK/JS-SDK/types/#notifyresponse)                                                  |   -     |   true   |
| userInfo              | info about the user who pushed the notification to me | [CommonUserInfoType](/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#commonuserinfotype) \| undefined |   -     |  false   |
| setActiveNotification | set the current notification as active                | React.Dispatch                                                                                                   |   -     |   true   |