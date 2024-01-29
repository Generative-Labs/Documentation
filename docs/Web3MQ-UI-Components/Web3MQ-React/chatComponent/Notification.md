---
sidebar_position: 9
---

# Notification
The `Notification` is a component for detailed display of notification content, show content when activeNotification is set.Currently only when the notification type is `system.friend_request` will show the corresponding style, the future will be more extended. And must be nested as children of Chat to maintain proper functionality.This component does not need to pass any props.

type of notification in notificationList.
> 1. system.friend_request (Friend request notification type)
> 2. system.system.followed (Follow user request notification type)
> 3. system.group_invitation (Group invitation notification type)
> 4. subscription (subscription topic new message notification)

## Basic Usage
:::tip
The component is rendered when activeNotification is `system.friend_request`. So you can try sending a friend request in the `CreateChannel` component, and the user you requested will have that notification
:::

import { Layout } from '@site/src/components/Layout'
import { NotificationExample } from '@site/src/components/Web3MQ-React/NotificationExample';
import NotificationMdx from '@site/src/components/Web3MQ-React/NotificationExample/NotificationExample.mdx';

import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the Notification example'
code={<NotificationMdx />}>
<NotificationExample />
</Layout>