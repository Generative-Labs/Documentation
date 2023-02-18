---
sidebar_position: 1
---

# Quickstart

---

## Usage

1. Install DappConnect sdk
2. Init DappConnect client
3. Call `getConnectLink` function to get deeplink
4. open `deeplink` in web3mq wallet
5. Connect Wallet
6. Call `sendSign` function
7. Wallet Confirmation Signature

### Install

```bash
npm install @web3mq/dapp-connect
```

or

```bash
yarn add @web3mq/dapp-connect
```

### Init DappConnect client

```tsx
import { DappConnect, DappConnectCallbackParams } from "@web3mq/dapp-connect";

const handleDappConnectCallback = (event: DappConnectCallbackParams) => {};
const dappConnectClient = new DappConnect(
  { dAppID: "SwapChat:im" },
  handleDappConnectCallback
);
console.log("the dapp-connect client: ", dappConnectClient);
```

:::tip

When the return value of the callback function is [SuccessData](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#when-the-network-connection-is-successful), it means the network connection is successful.

Once the network connection is successful, you can create deepLink and wallet to establish the connection

:::

:::tip

To facilitate the wallet connection, you can wrap a function that converts deeplink to a QR code

:::

```tsx
import QRCode from "qrcode";

const generateQrCode = async (text: string) => {
  try {
    return await QRCode.toDataURL(text);
  } catch (err: any) {
    throw new Error(err.message);
  }
};
```

### getConnectLink()

> Create wallet connect deep link

```tsx
import { DappConnect, DappConnectCallbackParams } from "@web3mq/dapp-connect";

const handleDappConnectCallback = (event: DappConnectCallbackParams) => {};
const dappConnectClient = new DappConnect(
    { dAppID: "SwapChat:im" },
    handleDappConnectCallback
);
const deepLink = dappConnectClient.getConnectLink();
const qrCode = await generateQrCode(deepLink);
console.log(deepLink);
console.log(qrCode);
```

:::tip
When the return value of the callback function is [SuccessData](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#when-the-wallet-is-successfully-connected), it means that the wallet and dapp are successfully connected.

Once the wallet and dapp are successfully connected, the sendSign method can be called to request a signature
:::

### sendSign()

:::tip
After calling the sendsign method, the signature result will not be received directly, but will be returned via a callback function
:::

```tsx
import { DappConnect, DappConnectCallbackParams } from "@web3mq/dapp-connect";

const handleDappConnectCallback = (event: DappConnectCallbackParams) => {};
const dappConnectClient = new DappConnect(
    { dAppID: "SwapChat:im" },
    handleDappConnectCallback
);
await dappConnectClient.sendSign({
  signContent: "test sign out",
  didValue: walletAddress || "",
});
```

:::tip

When the return value of the callback function is [SuccessData](/docs/Web3MQ-SDK/DappConnect-SDK/typeList#when-the-wallet-signature-is-successful), the wallet is successfully signed and the signature result is returned

:::

### Full example

```tsx
import React, { useState } from "react";
import { DappConnect, DappConnectCallbackParams } from "@web3mq/dapp-connect";
import QRCode from "qrcode";

const generateQrCode = async (text: string) => {
  try {
    return await QRCode.toDataURL(text);
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const App: React.FC = () => {
  const [client, setClient] = useState<DappConnect>();
  const [walletAddress, setWalletAddress] = useState("");
  const [qrCodeImg, setQrCodeImg] = useState("");
  const [signRes, setSignRes] = useState("");

  const handleDappConnectCallback = async (
    event: DappConnectCallbackParams
  ) => {
    console.log(event, "event - handleDappConnectCallback");
    const { type, data } = event;
    if (data.approve) {
      if (type === "connect") {
        console.log("ws connect success");
        return;
      }
      if (type === "dapp-connect") {
        if (data.metadata) {
          const metadata = data.metadata;
          if (metadata.action === "connectResponse") {
            console.log(
              "connect success, wallet address is : ",
              metadata.result.address
            );
            setWalletAddress(metadata.result.address || "");
            console.log(
              "connect success, wallet type is : ",
              metadata.result.walletType
            );
          }
          if (metadata.action === "signResponse") {
            console.log("sign success: ", metadata.result.signature);
            setSignRes(metadata.result.signature || "");
          }
        }
      }
    } else {
      console.log(`wallet response error: 
       code is: ${data.code}, 
       message is :${data.message}
       `);
    }
  };
  const init = async () => {
    const dappConnect = new DappConnect(
      { dAppID: "SwapChat:im" },
      handleDappConnectCallback
    );
    setClient(dappConnect);
  };
  const sign = async () => {
    await client?.sendSign({
      signContent: "test sign out",
      didValue: walletAddress || "",
      signType: "test sign without react",
    });
  };
  const createLink = async () => {
    const link = client?.getConnectLink();
    if (link) {
      const qrCode = await generateQrCode(link);
      setQrCodeImg(qrCode);
    }
  };

  return (
    <div>
      <div>
        <button onClick={init}>init</button>
      </div>
      <div>
        <button onClick={createLink}>create link</button>
      </div>
      <div>
        <button onClick={sign}>send Sign</button>
      </div>

      <div>
        {qrCodeImg && !walletAddress && (
          <img
            src={qrCodeImg}
            style={{
              width: "200px",
              height: "200px",
            }}
            alt=""
          />
        )}
      </div>
      <div>
        {walletAddress && (
          <p>{"connect success, wallet address is : " + walletAddress}</p>
        )}
      </div>
      <div>{signRes && <p> signature: {signRes} </p>}</div>
    </div>
  );
};

export default App;
```
