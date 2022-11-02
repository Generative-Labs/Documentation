---
sidebar_position: 0
---

# Intro

Web3MQ Vue Component Libraries

### Install with NPM

```bash
npm install web3-mq-vue
```

### Install with Yarn

```bash
yarn add web3-mq-vue
```

## Creating a Web3MQ Client

```tsx
import { Web3MQ } from 'web3-mq';

const client = Web3MQ.getInstance('YOUR_ACCESS_TOKEN');
```

## Your First App with Web3MQ Vue

#### Link to [the full example](https://main.d3igpcgqw8xy7h.amplifyapp.com/)

#### code

```vue
<script lang="ts" setup>
import { Client } from 'web3-mq';
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
