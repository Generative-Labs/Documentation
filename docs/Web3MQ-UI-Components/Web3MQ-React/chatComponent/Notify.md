---
sidebar_position: 6
---

# Notify

The `Notify` is a function component that sends notifications to users, the functions in the `Notify` are implemented based on the `client` api and can only be used in `Chat`.

## Basic Usage
When the user successfully sends a notification in the `Notify`, `NotificationList` in the `ChannelHead` component will receive a prompt.

import { Layout } from '@site/src/components/Layout'
import { NotifyExample } from '@site/src/components/Web3MQ-React/NotifyExample';
import NotifyMdx from '@site/src/components/Web3MQ-React/NotifyExample/NotifyExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Notify example'
code={<NotifyMdx />}>
<NotifyExample />
</Layout>

