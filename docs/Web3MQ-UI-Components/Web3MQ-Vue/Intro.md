---
sidebar_position: 0
---

# Intro

Web3MQ Vue Component Libraries
:::warning
Due to `@web3mq/client` update iteration, `@web3mq/vue-components` is not synchronized to support the latest version, please go to [@web3mq/React-components](/docs/Web3MQ-UI-Components/Web3MQ-React/Intro) first
:::
### Install with NPM

```bash
npm install @web3mq/vue-components
```

### Install with Yarn

```bash
yarn add @web3mq/vue-components
```

## Creating a Web3MQ Client

```tsx
import { Web3MQ } from '@web3mq/client';

const client = Web3MQ.getInstance('YOUR_ACCESS_TOKEN');
```

## Your First App with Web3MQ Vue

#### Full Example

import { Layout } from '@site/src/components/Layout'
import { Example } from '@site/src/components/Example';
import VueMdx from '@site/src/components/Example/vueexample.mdx'

<Layout
title='Example'
description='This is the full example'
code={<VueMdx />}>
<Example src="https://main.d3igpcgqw8xy7h.amplifyapp.com/" />
</Layout>

#### code

```vue
<script lang="ts" setup>
import { Client } from '@web3mq/client';
import {
  Chat,
  DashBoard,
  Channel,
  Window,
  MessageHeader,
  MessageList,
  MessageInput,
} from "@web3mq/vue-components";
import { ref } from 'vue';

// Use your own logic to decide which pattern to use
const appType = ref<'pc' | 'h5'>(window.innerWidth <= 600 ? 'h5' : 'pc');

const logout = () => {
  // logout function
};

</script>
<template>
  <template v-if="client">
    <!-- Redirect to the login page -->
  </template>
  <Chat v-else :client="Web3MQ.getInstance('YOUR_ACCESS_TOKEN')" :appType="appType" @logout="logout">
    <template #default>
      <DashBoard />
      <Main />
      <Channel>
        <Window>
          <MessageHeader :avatarSize=40 />
          <MessageList />
          <MessageInput :Input="MsgInput" />
        </Window>
      </Channel>
    </template>
  </Chat>
</template>
```

