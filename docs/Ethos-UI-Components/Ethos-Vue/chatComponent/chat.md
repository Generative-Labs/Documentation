---
sidebar_position: 0
---

# Chat

## Basic Usage

The `Chat` component does not inject any UI, so its implementation is fairly simple. Once an instance of the `Chat` client has been created, you pass the client object as a prop, and `chat` component provides it to a component's descendants by the `ChatProvide`.

```vue
<script setup lang='ts'>
import { ref, shallowRef } from 'vue';
import { Chat, Channel, DashBoard, MessageList, MessageInput } from '@web3mq/vue-components';
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
      <DashBoard />
      <Channel>
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

Any child of the `Chat` component has access to the `ChatProvide`. Each Vue Provide in the component library can be accessed with one of our custom hooks, which must be imported individually.

```vue
<script setup>
  import { useInjectChat } from '@web3mq/vue-components'
  const { 
    client,
    appType,
    userInfo,
    showListTypeView,
    setShowListTypeView,
    logout
  } = useInjectChat();
</script>
```

:::tip

`client` Object is not a reactive State, cannot be used for view rendering.

:::

## Api
### Chat
**The properties of the Chat are described as follows:**

| Property    | Description                                              | Type                                      | Default | required |
| ----------- | -------------------------------------------------------- | ----------------------------------------- | ------- | -------- |
| appType     | set viewport type of @web3mq/vue-components              | `pc` \| `h5`                              |  `pc`   |   false  |
| classNmae   | set your custom className                                | string                                    |   -     |   false  |
| client      | Chat Client Object                                       | [Client](/docs/Ethos-SDK/JS-SDK/client/) |   -     |   true   |
| containerId |Set a unique id selector for the container wrapping `chat`| string                                    |   -     |   false  |
| style       | set your custom style                                    | CSSProperties                             |   -     |   false  |
| logout      | Set your exit method                                     | Function                                  |   -     |   true   |

### useInjectChat data

| Property             | Description                                      | Type                                      | Default | required |
| -------------------- | ------------------------------------------------ | ----------------------------------------- | ------- | -------- |
| showListTypeView     | Tabs type in `DashBoard` component               | string                                    | 'room'  | -------- |
| userInfo             | user Info   | Ref<[SearchUsersResponse](/docs/Ethos-SDK/JS-SDK/types/#searchusersresponse)> |  -      | -------- |
| setShowListTypeView  | Update showListTypeView                          | Function                                  |  -      | -------- |
