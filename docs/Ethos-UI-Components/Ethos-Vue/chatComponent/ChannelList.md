---
sidebar_position: 2
---

# Channel List

The `ChannelList` component queries an array of channel objects from the Chat API, it subscribes internally to the [channel.type](/docs/Ethos-SDK/JS-SDK/eventCenter/#eventList) event and updates the channel list data based on it.

The `ChannelList` component loads and updates channels as the same as the `MessageList` component.

## Basic Usage

The`ChannelList` UI is determined by two of its props, List and Preview,if no props are injected, the default rendering ChannelListMessenger and Channel item Style.

`changeListRef` is used as a required props of the custom List component to bind the current custom `List` component to the root node, This is necessary for the `ChannelList` to implement paging.
```vue
<template>
<!--custom List props -->
  <div v-if="props.error">loading error...</div>
  <div v-else-if="props.error">loading...</div>
  <template v-else>
    <div :ref="(el) => emit('changeListRef', el)">
      <slot></slot>
    </div>
  </template>
</template>
<script>
const props = withDefaults(defineProps<{
  error?: boolean;
  loading?: boolean;
}>(), {});
const emit = defineEmits({
  'changeListRef': (el: any) => true
});
</script>
```

> 1. `List` renders loading failure, loading, and loading success views by `error` and `loading` properties.
> 2. `DefaultEmptyStateIndicator` is used to show the empty state view.
> 3. `Paginator` is a `channelList` subcomponent for pagination, `Paginator` component accepts elment, loadNextPage, and showLoading properties from `ChannelList` component;
> 4. `Preview` is used to render style and click functionality of channel in the list.

```vue
<script setup lang='ts'>
import { ref, shallowRef } from 'vue';
import { Chat, ChannelList, Channel, MessageList, MessageInput } from '@web3mq/vue-components';
import { Web3MQ } from '@web3mq/client';

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
      <ChannelList :List="CustomList" :Preview="CustomPreview"  />
    </Chat>
  </template>
</template>
```

## Api
### ChannelList
**The properties of the ChannelList are described as follows:**

| Property                   | Description                                                                                          | Type      | Default | required |
| -------------------------- | ---------------------------------------------------------------------------------------------------- | --------- | ------- | -------- |
| List                       | as `ChannelList`‘s root component, used to display a component that the list load and failed to load | Component |   -     |  false   |
| Preview                    | set your custom `ChannelItem` component                                                              | Component |   -     |  false   |
| DefaultEmptyStateIndicator | displays an empty list of components                                                                 | Component |   -     |  false   |
| Paginator                  | set your custom `paging` component                                                                   | Component |   -     |  false   |
