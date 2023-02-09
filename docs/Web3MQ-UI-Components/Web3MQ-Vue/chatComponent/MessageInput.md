---
sidebar_position: 4
---

# Message Input

The `MessageInput` component is the method provider, such as send messages.

## Basic Usage

By default, the `MessageInput` component's descendants shows that the input component can only be used to send messages and has no other function. If you want to add extra features, you could pass the custom input component as a props, and custom components will be rendered as the `MessageInput` component's descendants.

:::tip
  The `MessageInput` component's Input has higher priority than the `Channel` component's Input as props. 
:::

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
      <ChannelList />
      <Channel :Input="CustomInput" :Message="CustomMessage">
        <Window>
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </Chat>
  </template>
</template>
```

## Provide/Inject

The `MessageInput` component's descendants could inject message sending function.

```vue
<script setup>
  import { useInjectMessageInput } from '@web3mq/vue-components'
  const { sendMessage } = useInjectMessageInput();
</script>
```

## API
### MessageInput
**The properties of the MessageInput are described as follows:**

| Property | Description                               | Type                         | Default | required |
| -------- | ----------------------------------------- | ---------------------------- | ------- | -------- |
|  Input   | set your custom `Input` component         |        Component             |   -     |  false   |

### useInjectMessageInput data

| Property      | Description                            | Type              | Default | required |
| ------------- | -------------------------------------- | ----------------- | ------- | -------- |
| sendMessage   |    method of send message              | Function          |   -     |    -     |