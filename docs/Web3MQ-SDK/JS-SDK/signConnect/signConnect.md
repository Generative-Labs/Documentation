---
position: 5.1
---

# SignConnect

## Properties

| name     | type   | Description               |
| -------- | ------ | ------------------------- |
| tempCode | string | 6-digit verification code |

## Methods

| name           | type     | Parameters Description                                                | response |
| -------------- | -------- | --------------------------------------------------------------------- | -------- |
| sendDappBridge | function | [getUserInfoParams](/docs/Web3MQ-SDK/JS-SDK/types/#getuserinfoparams) | none     |

## SendDappBridge

```tsx
import { Client, SignClientCallBackType } from 'web3-mq';
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
});
let keys;
// 2. Create the handleEvent function to receive events
const handleEvent = (options: SignClientCallBackType) => {
  keys = options.data;
};
// 3. get Sign Client, Make sure that init is complete
await Client.getSignClient(
  {
    dAppID: dapp_id,
    topicID: topic_id,
    signatureTimestamp: signature_timestamp,
    dAppSignature: dapp_signature,
  },
  handleEvent
);
// 4. send Dapp Bridge get keys, Make sure that getSignClient is complete
await Client.signClient.sendDappBridge({
  did_type: 'your did type', // eth
  did_value: 'your did value', // eth wallet address
});

// Show that tempcode is used to verify that the action is personal
const tempCode = Client.signClient.tempCode;
console.log(tempCode);

// 5. You must ensure that the Client.init initialization is complete and that you have a key pair
const client = Client.getInstance(keys);

console.log(client);

export const Child = () => {
  return (
    <div>
      <Child client={client} />
    </div>
  );
};
```
