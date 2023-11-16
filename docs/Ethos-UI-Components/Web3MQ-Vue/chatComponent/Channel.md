---
sidebar_position: 1
---

# Channel

The `Channel` component is a Vue dependency provider that wraps all of the logic, functionality, and UI for an individual chat channel. It provides two separate `Vue Provide` to its children:

- ChannelStateProvide - stateful data (ex: channels)
- ComponentProvide - custom component UI overrides (ex: Input or Message)

## Basic Usage

The `Channel` component does not inject any UI, so its implementation is fairly simple. By default, the `ChannelList` sets the active `channel` object, which is then provided by the `ChannelStateProvide`, and `Channel` component's descendants injected into the data, so manual prop passing is not required. 

```vue
<script setup lang='ts'>
import { ref, shallowRef } from 'vue';
import { Chat, ChannelList, Channel, MessageList, MessageInput } from '@ethos/vue-components';
import { Web3MQ } from '@ethos/client';

const PrivateKey = localStorage.getItem("PRIVATE_KEY") || "";
const PublicKey = localStorage.getItem("PUBLICKEY") || "";
const userid = localStorage.getItem("userid") || "";
const hasKeys =
  PrivateKey && PublicKey && userid
    ? { PrivateKey, PublicKey, userid }
    : null;
const keys = shallowRef<KeyPairsType | null>(hasKeys);
const fastestUrl = ref<string | null>(null);
const appType = ref<'pc' | 'h5'>(window.innerWidth <= 600 ? 'h5' : 'pc');

const init = async () => {
  const tempPubkey = localStorage.getItem('PUBLIC_KEY') || '';
  const didKey = localStorage.getItem('DID_KEY') || '';
  const fastUrl = await Client.init({
    connectUrl: localStorage.getItem('FAST_URL'),
    app_key: 'vAUJTFXbBZRkEDRE',
    env: 'dev',
    didKey,
    tempPubkey,
  });
  localStorage.setItem('FAST_URL', fastUrl);
  fastestUrl.value = fastUrl;
};
const handleLoginEvent = (eventData: any) => {
  if (eventData.data) {
    if (eventData.type === 'login') {
      const {
        privateKey,
        publicKey,
        tempPrivateKey,
        tempPublicKey,
        didKey,
        userid,
        address,
        pubkeyExpiredTimestamp,
      } = eventData.data;
      localStorage.setItem('userid', userid);
      localStorage.setItem('PRIVATE_KEY', tempPrivateKey);
      localStorage.setItem('PUBLIC_KEY', tempPublicKey);
      localStorage.setItem('WALLET_ADDRESS', address);
      localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);
      localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
      localStorage.setItem(`DID_KEY`, didKey);
      localStorage.setItem('PUBKEY_EXPIRED_TIMESTAMP', String(pubkeyExpiredTimestamp));
      keys.value = {
        PrivateKey: tempPrivateKey,
        PublicKey: tempPublicKey,
        userid,
      };
    }
    if (eventData.type === 'register') {
      const { privateKey, publicKey, address } = eventData.data;
      localStorage.setItem('WALLET_ADDRESS', address);
      localStorage.setItem(`MAIN_PRIVATE_KEY`, privateKey);
      localStorage.setItem(`MAIN_PUBLIC_KEY`, publicKey);
    }
  }
};

const logout = () => {
  localStorage.setItem('PRIVATE_KEY', '');
  localStorage.setItem('PUBLIC_KEY', '');
  localStorage.setItem('DID_KEY', '');
  localStorage.setItem('userid', '');
  keys.value = null;
};
onMounted(() => {
  console.log('app mount')
  init();
  window.addEventListener('resize', () => {
    appType.value = window.innerWidth <= 600 ? 'h5' : 'pc';
  });
});
</script>
<template>
  <template v-if="!fastestUrl"></template>
  <template v-else-if="!keys">
    <LoginModal
      @handleLoginEvent="handleLoginEvent"
      :appType="appType"
    />
  </template>
  <template v-else>
    <Chat :client="Web3MQ.getInstance(keys)" :appType="appType" @logout="logout">
      <ChannelList />
      <Channel :Input="CustomInput" :Message="CustomMessage">
        <Window>
          <MessageHeader :avatarSize=40 />
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </Chat>
  </template>
</template>
```

## Provide/Inject

`channel` component's descendants could inject data and custom component UI through `useInjectChannelState` and `useInjectMessage`.

```vue
<script setup>
import { useInjectChannelState, useInjectMessage } from '@web3mq/vue-components';
const { state } = useInjectChannelState();
const { Message } = useInjectMessage();
</script>
```

## Api

### Channel
**The properties of the Channel are described as follows:**

| Property | Description                               | Type                                      | Default | required |
| -------- | ----------------------------------------- | ----------------------------------------- | ------- | -------- |
| Input    | set your custom `Input` component         | Component                                 |   -     |  false   |
| Message  | set your custom `Message` component       | Component                                 |   -     |  false   |

### useInjectChannelState data

| Property      | Description               | Type                                                                  | Default | required |
| ------------- | ------------------------- | --------------------------------------------------------------------- | ------- | -------- |
| activeChannel | current active channel    | [ChannelItemType](/docs/Ethos-SDK/JS-SDK/types/#channelitemtype)     |   -     |    -     |

### useInjectMessage data

| Property      | Description                            | Type              | Default | required |
| ------------- | -------------------------------------- | ----------------- | ------- | -------- |
| Input         | set custom `MessageInput` component    |   Component       |   -     |    -     |
| Message       | set custom `Message` component         |   Component       |   -     |    -     |
