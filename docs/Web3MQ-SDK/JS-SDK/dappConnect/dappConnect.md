---
position: 2
---

# DappConnect

## Methods

| name                      | type     | Parameters Description                                                      | response                                                                                                                               |
| ------------------------- | -------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| getMainKeypairSignContent | function | [GetMainKeypairParams](/docs/Web3MQ-SDK/JS-SDK/types/#getmainkeypairparams) | Promise: { signContent: string }                                                                                                       |
| getMainKeypair            | function | signature: string                                                           | Promise: { publicKey: string; secretKey: string; }                                                                                     |
| getRegisterSignContent    | function | options: { userid: string; signContentURI?: string; }                       | Promise: { signContent: string }                                                                                                       |
| qrCodeRegister            | function | [QrCodeRegisterParams](/docs/Web3MQ-SDK/JS-SDK/types/#qrcoderegisterparams) | Promise: { mainPrivateKey: string, mainPublicKey: string }                                                                             |
| qrCodeLogin               | function | [QrCodeLoginParams](/docs/Web3MQ-SDK/JS-SDK/types/#qrcodeloginparams)       | Promise: { TempPrivateKey: string;TempPublicKey: string;pubkeyExpiredTimestamp: number; mainPrivateKey: string;mainPublicKey: string;} |
| signWithQrCode            | function | signContent: string, didValue: string, signType: string                     | Promise: void                                                                                                                          |

## Prerequisites

> init() see: [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)

> Client.getQrCodeClient() see: [getqrcodeclient](/docs/Web3MQ-SDK/JS-SDK/client/#getqrcodeclient)

## Methods

### getMainKeypairSignContent()

> Get the signature content to generate the master key pair

```tsx
import { Client } from "web3-mq";
await Client.init({
  connectUrl: "example url", // The fastURL you saved to local
  app_key: "app_key", // Appkey applied from our team
  env: "test", // The default is the test environment
  tempPubkey, // After login get temp public key
  didKey, // did_key:did_value  eg: eth:0x00000000123123;
});
const walletType = "eth" | "starknet";
const { address } = await Client.register.getAccount(walletType);

const { signContent } = await Client.qrCodeSign.getMainKeypairSignContent({
  password,
  did_value: userAccount.address,
  did_type: userAccount.walletType,
});

console.log(signContent);
```

### getMainKeypair()

> Get the master key pair after signing

```tsx
import { Client } from "web3-mq";
const didKey = localStorage.getItem("DID_KEY") || "";
const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";

await Client.init({
  connectUrl: localStorage.getItem("FAST_URL"), // or ''
  app_key: "vAUJTFXbBZRkEDRE", // your Appkey
  env: "dev",
  didKey,
  tempPubkey,
});

const signature = "sign res by mainkeys signContent";
const { publicKey, secretKey } = await Client.qrCodeSign.getMainKeypair(
  signature
);
```

### getRegisterSignContent()

> Get the signature content to register

```tsx
import { Client } from "web3-mq";
await Client.init({
  connectUrl: "example url", // The fastURL you saved to local
  app_key: "app_key", // Appkey applied from our team
  env: "test", // The default is the test environment
  tempPubkey, // After login get temp public key
  didKey, // did_key:did_value  eg: eth:0x00000000123123;
});
const walletType = "eth" | "starknet";
const { address } = await Client.register.getAccount(walletType);
const { userid, userExist } = await Client.register.getUserInfo({
  did_value: didValue,
  did_type: walletType,
});

const { signContent } = await Client.qrCodeSign.getRegisterSignContent({
  userid,
});

console.log(signContent);
```

### qrCodeRegister()

> Register after signing

```tsx
import { Client } from "web3-mq";
const didKey = localStorage.getItem("DID_KEY") || "";
const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";

await Client.init({
  connectUrl: localStorage.getItem("FAST_URL"), // or ''
  app_key: "vAUJTFXbBZRkEDRE", // your Appkey
  env: "dev",
  didKey,
  tempPubkey,
});

const signature = "sign res by register signContent";

const registerRes = await Client.qrCodeSign.qrCodeRegister({
  userid: userAccount.userid,
  signature,
});
console.log(registerRes);
```

### qrCodeLogin()

> Login after signing

```tsx
import { Client } from "web3-mq";
const didKey = localStorage.getItem("DID_KEY") || "";
const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";

await Client.init({
  connectUrl: localStorage.getItem("FAST_URL"), // or ''
  app_key: "vAUJTFXbBZRkEDRE", // your Appkey
  env: "dev",
  didKey,
  tempPubkey,
});
const password = "123456";
const walletType = "eth" | "starknet";
const { address } = await Client.register.getAccount(walletType);
const { userid, userExist } = await Client.register.getUserInfo({
  did_value: didValue,
  did_type: walletType,
});
const userAccount = {
  userid,
  walletType,
  address,
};
const signature = "sign res by mainkeys signContent";
const { publicKey, secretKey } = await Client.qrCodeSign.getMainKeypair(
  signature
);

const {
  TempPrivateKey,
  TempPublicKey,
  pubkeyExpiredTimestamp,
  mainPrivateKey,
  mainPublicKey,
} = await Client.qrCodeSign.qrCodeLogin({
  userid: userAccount.userid,
  did_value: userAccount.address,
  did_type: userAccount.walletType,
  password,
  mainPrivateKey: secretKey,
  mainPublicKey: publicKey,
});

console.log(registerRes);
```

### signWithQrCode()

> Login after signing

```tsx
import { Client } from "web3-mq";
const didKey = localStorage.getItem("DID_KEY") || "";
const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";

await Client.init({
  connectUrl: localStorage.getItem("FAST_URL"), // or ''
  app_key: "vAUJTFXbBZRkEDRE", // your Appkey
  env: "dev",
  didKey,
  tempPubkey,
});

const handleWeb3mqCallback = (eventData: { type: string; data: any }) => {};

Client.getQrCodeClient({ dAppID: "SwapChat:im" }, handleWeb3mqCallback);

await Client.qrCodeSign.signWithQrCode(signContent, address, signAuditType);
```

## Useage

1. 初始化 DappConnectclass 创建事件监听
2. 通过事件回调展示二维码，展示供用户扫描连接钱包
3. 连接钱包
4. 获取该钱包对应的用户 id 并且判断该用户是否存在
5. 获取主密钥对对应的 signContent
6. 调用 signWithQrCode 方法 唤起 mobile 签名
7. 通过 callback 获取正确的签名结果
8. 获取签名结果后调用 getMainKeypair 生成主密钥对并且记录在本地
9. 调用 getRegisterSignContent 方法获取注册需要用的 signContent
10. 通过 callback 获取正确的签名结果
11. 获取签名结果后调用 qrCodeRegister 成功注册
12. 注册成功后使用密码登录

### React Demo

```tsx
import React, { useEffect, useRef, useState } from "react";
import { Client, WalletType } from "web3-mq";

export type MainKeysType = {
  publicKey: string;
  privateKey: string;
  walletAddress: string;
};

export enum SignAuditTypeEnum {
  GET_KEYS_FOR_LOGIN = "get_Keys_For_Login",
  GET_KEYS_FOR_REGISTER = "get_keys_For_Register",
  REGISTER = "register",
}

const Main: React.FC = (props) => {
  const [userAccount, setUserAccount] = useState<any | undefined>();
  const [qrImgLink, setQrImgLink] = useState("");
  const walletAddress = useRef<string>("");
  const [registerSignRes, setRegisterSignRes] = useState("");
  const [mainKeys, setMainKeys] = useState<MainKeysType | undefined>();
  const [signAuditType, setSignAuditType] = useState<
    SignAuditTypeEnum | undefined
  >();
  const getUserAccount = async (
    didType: WalletType,
    address: string
  ): Promise<{
    userid: string;
    userExist: boolean;
  }> => {
    const { userid, userExist } = await Client.register.getUserInfo({
      did_value: address,
      did_type: didType,
    });
    walletAddress.current = address;
    setUserAccount({
      userid,
      address: address,
      walletType: didType,
      userExist,
    });
    return {
      userid,
      userExist,
    };
  };

  const sendGetMainKeysSign = async (
    password: string,
    signType: SignAuditTypeEnum
  ): Promise<void> => {
    if (!userAccount) {
      return;
    }
    const { signContent } = await Client.qrCodeSign.getMainKeypairSignContent({
      password,
      did_value: userAccount.address,
      did_type: userAccount.walletType,
    });
    await commonSendSign(
      signContent,
      userAccount.address.toLowerCase(),
      signType
    );
  };
  const sendGetRegisterSign = async (): Promise<void> => {
    if (!userAccount) {
      return;
    }
    const { signContent } = await Client.qrCodeSign.getRegisterSignContent({
      userid: userAccount.userid,
    });
    await commonSendSign(
      signContent,
      userAccount.address.toLowerCase(),
      SignAuditTypeEnum.REGISTER
    );
  };
  const afterSignEvent = async () => {
    if (signAuditType === SignAuditTypeEnum.GET_KEYS_FOR_LOGIN) {
      await loginByQrCode();
    }
    if (signAuditType === SignAuditTypeEnum.GET_KEYS_FOR_REGISTER) {
      await sendGetRegisterSign();
    }
    if (signAuditType === SignAuditTypeEnum.REGISTER && registerSignRes) {
      await registerByQrCode(undefined, registerSignRes);
    }
  };

  const commonSendSign = async (
    signContent: string,
    address: string,
    signAuditType: SignAuditTypeEnum
  ) => {
    await Client.qrCodeSign.signWithQrCode(signContent, address, signAuditType);
  };

  useEffect(() => {
    if (!mainKeys) {
      return;
    }
    afterSignEvent();
  }, [mainKeys, registerSignRes, signAuditType]);

  const loginByQrCode = async (password?: string) => {
    if (!userAccount) {
      return;
    }
    if (
      !mainKeys ||
      mainKeys?.walletAddress.toLowerCase() !==
        userAccount.address.toLowerCase()
    ) {
      if (!password) {
        return;
      }
      await sendGetMainKeysSign(password, SignAuditTypeEnum.GET_KEYS_FOR_LOGIN);
      return;
    } else {
      const {
        TempPrivateKey,
        TempPublicKey,
        pubkeyExpiredTimestamp,
        mainPrivateKey,
        mainPublicKey,
      } = await Client.qrCodeSign.qrCodeLogin({
        userid: userAccount.userid,
        did_value: userAccount.address,
        did_type: userAccount.walletType,
        password,
        mainPrivateKey: mainKeys.privateKey,
        mainPublicKey: mainKeys.publicKey,
      });
      console.log(TempPublicKey, "TempPublicKey");
      if (TempPublicKey) {
        alert("Login Success");
      }
    }
  };

  const registerByQrCode = async (
    password?: string,
    signature?: string
  ): Promise<void> => {
    if (!userAccount) {
      return;
    }
    if (
      !mainKeys ||
      mainKeys.walletAddress.toLowerCase() !== userAccount.address.toLowerCase()
    ) {
      if (!password) {
        return;
      }
      await sendGetMainKeysSign(
        password,
        SignAuditTypeEnum.GET_KEYS_FOR_REGISTER
      );
      return;
    } else if (!signature) {
      await sendGetRegisterSign();
      return;
    } else {
      await Client.qrCodeSign.qrCodeRegister({
        userid: userAccount.userid,
        signature,
      });
      await loginByQrCode();
    }
  };

  const web3MqSignCallback = async (
    signature: string,
    signType: SignAuditTypeEnum
  ) => {
    setSignAuditType(signType);
    if (signType === SignAuditTypeEnum.REGISTER) {
      setRegisterSignRes(signature);
    } else {
      // 设置主密钥对
      const { publicKey, secretKey } = await Client.qrCodeSign.getMainKeypair(
        signature
      );
      setMainKeys({
        publicKey,
        privateKey: secretKey,
        walletAddress: walletAddress.current,
      });
    }
  };
  const handleWeb3mqCallback = async (eventData: any) => {
    if (eventData.type === "createQrcode") {
      console.log(eventData.data.qrCodeUrl);
      setQrImgLink(eventData.data.qrCodeUrl);
    }
    if (eventData.type === "keys") {
      const data = eventData.data || null;
      if (data) {
        if (data.action === "connectResponse" && data.walletInfo) {
          await getUserAccount(
            data.walletInfo.walletType,
            data.walletInfo.address.toLowerCase()
          );
        }
        if (data.action === "signResponse") {
          await web3MqSignCallback(
            eventData.data.signature,
            eventData.data.userInfo
          );
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
    Client.getQrCodeClient({ dAppID: "SwapChat:im" }, handleWeb3mqCallback);
  };

  const login = async () => {
    if (userAccount.userExist) {
      //  直接登录
      await loginByQrCode("123123");
    } else {
      await registerByQrCode("123123");
    }
  };

  return (
    <div>
      <button onClick={init}>init</button>
      <button onClick={login}>Login</button>
      {qrImgLink && (
        <img
          src={qrImgLink}
          style={{
            width: "200px",
            height: "200px",
          }}
          alt=""
        />
      )}
      <div>
        {userAccount && (
          <div>
            connect:
            <div>address: {userAccount.address}</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Main;
```
