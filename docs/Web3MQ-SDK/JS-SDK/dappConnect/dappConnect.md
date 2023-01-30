---
position: 2
---

# DappConnect

## Methods

| name           | type     | Parameters Description                                                        | response          |
| -------------- | -------- | ----------------------------------------------------------------------------- | ----------------- |
| getConnectLink | function | none                                                                          | string            |
| sendSign       | function | [DappConnectSignParams](/docs/Web3MQ-SDK/JS-SDK/types/#dappconnectsignparams) | Promise: void     |

## Prerequisites

> init() see: [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)

> Client.initDappConnectClient() see: [initDappConnectClient](/docs/Web3MQ-SDK/JS-SDK/client/#initdappconnectclient)

## Methods

### getConnectLink()

> Create wallet connect deep link

```tsx
import { Client } from "web3-mq";
await Client.init({
  connectUrl: "example url", // The fastURL you saved to local
  app_key: "app_key", // Appkey applied from our team
  env: "test", // The default is the test environment
  tempPubkey, // After login get temp public key
  didKey, // did_key:did_value  eg: eth:0x00000000123123;
});
Client.initDappConnectClient({ dAppID: "SwapChat:im" }, handleWeb3mqCallback);

const deepLink = Client.dappConnectClient.getConnectLink();
console.log(deepLink);
```

### sendSign()

> Evoke the wallet to send a signature request

```tsx
import { Client } from "web3-mq";
await Client.init({
  connectUrl: "example url", // The fastURL you saved to local
  app_key: "app_key", // Appkey applied from our team
  env: "test", // The default is the test environment
  tempPubkey, // After login get temp public key
  didKey, // did_key:did_value  eg: eth:0x00000000123123;
});
Client.initDappConnectClient({ dAppID: "SwapChat:im" }, handleWeb3mqCallback);

await Client.dappConnectClient.sendSign({
  signContent,
  didValue: address,
  signType: signAuditType,
});
```

## usage

1. call `Client.initDappConnectClient` init client
2. call `Client.dappConnectClient.getConnectLink()` get deepLink and connect wallet
3. call `Client.dappConnectClient.sendSign()` send a sign request to wallet

## React Demo

```tsx
import React, { useState } from "react";
import { Client } from "web3-mq";
import QRCode from "qrcode";

const Main: React.FC = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [address, setAddress] = useState("");

  const generateQrCode = async (text: string) => {
    try {
      return await QRCode.toDataURL(text);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
  const handleWeb3mqCallback = async (event: any) => {
    console.log(event, "event");
    const { type, data } = event;
    if (type === "connect") {
      if (data === "success") {
        const link = Client.dappConnectClient.getConnectLink();
        const qrCodeImg = await generateQrCode(link);
        setQrCodeUrl(qrCodeImg);
      }
    }

    if (type === "dapp-connect") {
      if (data) {
        if (data.action === "connectResponse" && data.walletInfo) {
          setAddress(data.walletInfo.address);
        }
        if (data.action === "signResponse" && data.approve) {
          console.log(data);
        }
      }
    }
  };

  const init = async () => {
    const fastUrl = await Client.init({
      connectUrl: localStorage.getItem("FAST_URL"),
      app_key: "vAUJTFXbBZRkEDRE",
      env: "dev",
    });
    Client.initDappConnectClient(
      { dAppID: "SwapChat:im" },
      handleWeb3mqCallback
    );
  };
  const testSign = async () => {
    await Client.dappConnectClient.sendSign({
      didValue: address,
      signType: "test",
      signContent: "123123",
    });
  };

  return (
    <div>
      <button onClick={init}>init</button>
      <button onClick={testSign}>test Sign</button>
      <div>
        <h2>{address}</h2>
        {qrCodeUrl && (
          <img
            src={qrCodeUrl}
            style={{ width: "200px", height: "200px" }}
            alt=""
          />
        )}
      </div>
    </div>
  );
};
export default Main;
```
