---
sidebar_position: 3
---

# MessageList

The `MessageList` component renders a scrollable list of messages. The UI for each individual message is rendered conditionally based on its `message.type` value. The list renders standard messages.

By default, the `MessageList` component contains a separate state management library, it loads the most recent 20 messages held in the current library. More messages are fetched from the Chat API and loaded into the DOM on scrolling up the list. 


## Basic Usage

The `MessageList` could pass custom Message component as props, it will override the default `Message` component.

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
          <MessageList />
        </Window>
      </Channel>
    </Chat>
  </template>
</template>
```

## Message

The `Message` component is the `MessageList` component's descendants. It provides child component with message data that comes in from `MessageList`


## MessageSimple

As the `Message` component's descendants, the `MessageSimple` component could inject message data, and show the message. If you want to display custom message body, you should pass your custom Message component as Channel props.

```vue
<script setup>
import { useInjectMessage } from '@web3mq/vue-components';
const { message } = useInjectMessage();
</script>

```

## Api
### MessageList
**The properties of the MessageList are described as follows:**

| Property | Description                               | Type                   | Default | required |
| -------- | ----------------------------------------- | ---------------------- | ------- | -------- |
| Message  | set your custom `Message` component       |    Component           |   -     |  false   |


