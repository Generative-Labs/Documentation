---
position: 2
---

# Register

## Prerequisites

> init() see: [init](/docs/Ethos-SDK/JS-SDK/client/#init)

## Properties

| name                      | type     | Parameters Description                                                                     | response                                                                                |
| ------------------------- | -------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| getUserInfo               | function | [getUserInfoParams](/docs/Ethos-SDK/JS-SDK/types/#getuserinfoparams)                       | Promise: [GetUserInfoResponse](/docs/Ethos-SDK/JS-SDK/types/#getuserinforesponse)       |
| getMainKeypairSignContent | function | [GetMainKeypairParams](/docs/Ethos-SDK/JS-SDK/types/#getmainkeypairparams)                 | Promise: [GetSignContentResponse](/docs/Ethos-SDK/JS-SDK/types/#getsigncontentresponse) |
| getMainKeypairBySignature | function | 1. signature: string <br /> 2. password: string                                            | Promise: [MainKeypairType](/docs/Ethos-SDK/JS-SDK/types/#mainkeypairtype)               |
| getRegisterSignContent    | function | [GetRegisterSignContentParams](/docs/Ethos-SDK/JS-SDK/types/#getregistersigncontentparams) | Promise: [GetSignContentResponse](/docs/Ethos-SDK/JS-SDK/types/#getsigncontentresponse) |
| register                  | function | [RegisterBySignParams](/docs/Ethos-SDK/JS-SDK/types/#registerbysignparams)                 | Promise: [RegisterApiResponse](/docs/Ethos-SDK/JS-SDK/types/#registerapiresponse)       |
| login                     | function | [LoginByKeysParams](/docs/Ethos-SDK/JS-SDK/types/#loginbykeysparams)                       | Promise: [LoginResponse](/docs/Ethos-SDK/JS-SDK/types/#loginresponse)                   |
| resetPassword             | function | [RegisterBySignParams](/docs/Ethos-SDK/JS-SDK/types/#registerbysignparams)                 | Promise: [RegisterApiResponse](/docs/Ethos-SDK/JS-SDK/types/#registerapiresponse)       |

### getUserInfo() : Get the user id and check if it is registered

:::tip
Method of the register class.
:::

#### Params: Object : [getUserInfoParams](/docs/Ethos-SDK/JS-SDK/types/#getuserinfoparams)

**Fields of params**

1. didValue: Required field, The value to query, e.g., user ID, wallet address.
1. didType: Required field, Type of value

#### Response : Promise: Object : [GetUserInfoResponse](/docs/Ethos-SDK/JS-SDK/types/#getuserinforesponse)

#### Response json example

```json
{
  "userid": "user:xxxx",
  "userExist": true
}
```

#### Usage Examples

```tsx
import React, { useEffect, useState } from "react";
import {
  BlockChainMap,
  Client,
  connectWallet,
  signMessage,
  generateMainKeypair,
} from "@web3mq/client";

const App: React.FC = () => {
  const password = "123456";
  const walletType = "metamask";
  const [fastUrl, setFastUrl] = useState("");

  const init = async () => {
    const res = await Client.init({
      app_key: "YOUR_APP_KEY",
    });
    setFastUrl(res);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <button
      onClick={() => {
        const { address } = await connectWallet(walletType); // Or get the wallet address by any other means
        const chain = BlockChainMap[walletType]; // eth or starknet
        // check user is exist
        const { userid, userExist } = await Client.register.getUserInfo({
          did_value: address,
          did_type: chain,
        });
      }}
      disabled={!fastUrl}
    >
      {fastUrl ? "Check user " : "Initializing"}
    </button>
  );
};
export default App;
```

### getMainKeypairSignContent() : Get a sign content for generating an encryption key pair

:::tip
Method of the register class.
:::

#### Params: Object : [GetMainKeypairParams](/docs/Ethos-SDK/JS-SDK/types/#getmainkeypairparams)

**Fields of params**

1. did_value: Required field, wallet address
1. did_type: Required field, Chain type of wallet address
1. password: Required field, user password

#### Response : Promise: Object :[GetSignContentResponse](/docs/Ethos-SDK/JS-SDK/types/#getsigncontentresponse)

#### Response json example

```json
{
  "signContent": "Signing this message will allow this app to decrypt messages in the Web3MQ protocol for the following address: 0x0475eeb3e412e559f9cd4452cc91c6d0d6c3fd06. This won’t cost you anything.
  If your Web3MQ wallet-associated password and this signature is exposed to any malicious app, this would result in exposure of Web3MQ account access and encryption keys, and the attacker would be able to read your messages.
  In the event of such an incident, don’t panic. You can call Web3MQ’s key revoke API and service to revoke access to the exposed encryption key and generate a new one!
  Nonce: ZDBmOWE5YTVjNzRiYTQ2NjY2ZjNhZWI1ZjhiOGRkNjdlY2Y4ZGM1M2VlMGQ2YjAwMzgxZTk0MmE="
}
```

#### Usage Examples

```tsx
import React, { useEffect, useState } from "react";
import {
  BlockChainMap,
  Client,
  connectWallet,
  signMessage,
  generateMainKeypair,
} from "@web3mq/client";

const App: React.FC = () => {
  const password = "123456";
  const walletType = "metamask";
  const [fastUrl, setFastUrl] = useState("");

  const init = async () => {
    const res = await Client.init({
      app_key: "YOUR_APP_KEY",
    });
    setFastUrl(res);
  };

  const getSignContent = async () => {
    const { address } = await connectWallet(walletType); // Or get the wallet address by any other means
    const chain = BlockChainMap[walletType]; // eth or starknet
    // get sign content
    const { signContent } = await Client.register.getMainKeypairSignContent({
      password,
      did_type: chain,
      did_value: walletAddress,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <button onClick={getSignContent} disabled={!fastUrl}>
      {fastUrl
        ? "get sign contnet for generating an encryption key pair "
        : "Initializing"}
    </button>
  );
};
export default App;
```

### getMainKeypairBySignature() : Generate an encryption key pair after checking the signature result

:::tip
Method of the register class.
:::

#### Params

1. string: Required field, Signature results.
1. string: Required field, user password

#### Response : Promise: Object : [MainKeypairType](/docs/Ethos-SDK/JS-SDK/types/#mainkeypairtype)

#### Response json example

```json
{
  "publicKey": "e2986d08f96e75d9f2a580484ebc63e5d30a9e77603d63cc64c18a47ff03592b",
  "secretKey": "IHxAAww96aTpVVu9vZoY8grvRH+jN7BqS0O9uYyMGrhMGTwtniIhHBHXgRhmvUb+f310JHnGtjtODnq8QO5BqBEHXXM3ZG6ch+hz70ca6lI="
}
```

#### Usage Examples

```tsx
import React, { useEffect, useState } from "react";
import {
  BlockChainMap,
  Client,
  connectWallet,
  signMessage,
  generateMainKeypair,
} from "@web3mq/client";

const App: React.FC = () => {
  const password = "123456";
  const walletType = "metamask";
  const [fastUrl, setFastUrl] = useState("");

  const init = async () => {
    const res = await Client.init({
      app_key: "YOUR_APP_KEY",
    });
    setFastUrl(res);
  };

  const getKeys = async () => {
    const { address } = await connectWallet(walletType); // Or get the wallet address by any other means
    const chain = BlockChainMap[walletType]; // eth or starknet
    // get sign content
    const { signContent } = await Client.register.getMainKeypairSignContent({
      password,
      did_type: chain,
      did_value: address,
    });

    // Or you can complete the signature in other ways
    const { sign: signature } = await signMessage(
      signContent,
      address,
      walletType
    );
    const res = await Client.register.getMainKeypairBySignature(
      signature,
      password
    );
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <button onClick={getKeys} disabled={!fastUrl}>
      {fastUrl
        ? " Generate an encryption key pair by signature result "
        : "Initializing"}
    </button>
  );
};
export default App;
```

### getRegisterSignContent() : Get a sign content for register

:::tip
Method of the register class.
:::

#### Params: Object : [GetRegisterSignContentParams](/docs/Ethos-SDK/JS-SDK/types/#getregistersigncontentparams)

**Fields of params**

1. did_value: Required field, wallet address
1. did_type: Required field, Chain type of wallet address
1. password: Required field, user password

#### Response : Promise: Object :[GetSignContentResponse](/docs/Ethos-SDK/JS-SDK/types/#getsigncontentresponse)

#### Response json example

```json
{
  "signContent": "Web3MQ wants you to sign in with your eth account:0x0475eeb3e412e559f9cd4452cc91c6d0d6c3fd06
  For Web3MQ register
  URI: http://XXX.com
  Version: 1
  Nonce: c3f4f8c0332cb7125a75dbfe730abb1b0bef01d6a52df3b661a09485\nIssued At: 22/12/2023 22:29"
}
```

#### Usage Examples

```tsx
import React, { useEffect, useState } from "react";
import {
  BlockChainMap,
  Client,
  connectWallet,
  signMessage,
  generateMainKeypair,
} from "@web3mq/client";

const App: React.FC = () => {
  const password = "123456";
  const walletType = "metamask";
  const [fastUrl, setFastUrl] = useState("");

  const init = async () => {
    const res = await Client.init({
      app_key: "YOUR_APP_KEY",
    });
    setFastUrl(res);
  };

  const getSignContent = async () => {
    const { address } = await connectWallet(walletType); // Or get the wallet address by any other means
    const chain = BlockChainMap[walletType]; // eth or starknet
    // check user is exist
    const { userid, userExist } = await Client.register.getUserInfo({
      did_value: address,
      did_type: chain,
    });
    // get sign content
    const keyContent = await Client.register.getMainKeypairSignContent({
      password,
      did_type: chain,
      did_value: walletAddress,
    });
    const { sign: signature } = await signMessage(
      keyContent.signContent,
      walletAddress,
      walletType
    );
    const keys = await Client.register.getMainKeypairBySignature(
      signature,
      password
    );
    const { signContent } = await Client.register.getRegisterSignContent({
      userid,
      mainPublicKey: keys.publicKey,
      didType: chain,
      didValue: address,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <button onClick={getSignContent} disabled={!fastUrl}>
      {fastUrl
        ? "get sign contnet for generating an encryption key pair "
        : "Initializing"}
    </button>
  );
};
export default App;
```

### register() : Register to ethos network after checking the signature result

:::tip
Method of the register class.

Before registering a user, you must register the main key pair with a custom password,
Main key pair has the highest authority over your account,
so make sure you keep it safe
:::

#### Params: Object : [RegisterBySignParams](/docs/Ethos-SDK/JS-SDK/types/#registerbysignparams)

**Fields of params**

1. didValue: Required field, Wallet address.
1. didType: Required field, Chain type of wallet address
1. userid: Required field, User id generated from wallet address by calling `Client.register.getUserInfo` method
1. mainPublicKey: Required field, Main keys.publicKey generated from checked signature by calling `Client.register.getMainKeypairBySignature` method
1. signature: Required field, signature resule
1. nickname: Required field, user nickname
1. avatar_url: Optional field, user avatar address
1. did_pubkey: Optional field, This field is required if the did_type is starknet

#### Response : Promise: void

#### Usage Examples

```tsx
import React, { useEffect, useState } from "react";
import {
  BlockChainMap,
  Client,
  connectWallet,
  signMessage,
  generateMainKeypair,
} from "@web3mq/client";

const App: React.FC = () => {
  const password = "123456";
  const walletType = "metamask";
  const [fastUrl, setFastUrl] = useState("");

  const init = async () => {
    const res = await Client.init({
      app_key: "YOUR_APP_KEY",
    });
    setFastUrl(res);
  };

  const register = async () => {
    const { address } = await connectWallet(walletType); // Or get the wallet address by any other means
    const chain = BlockChainMap[walletType]; // eth or starknet
    // check user is exist
    const { userid, userExist } = await Client.register.getUserInfo({
      did_value: address,
      did_type: chain,
    });
    // get sign content
    const keyContent = await Client.register.getMainKeypairSignContent({
      password,
      did_type: chain,
      did_value: walletAddress,
    });
    const { sign: signature } = await signMessage(
      keyContent.signContent,
      walletAddress,
      walletType
    );
    const keys = await Client.register.getMainKeypairBySignature(
      signature,
      password
    );
    if (!userExist) {
      const { signContent } = await Client.register.getRegisterSignContent({
        userid,
        mainPublicKey: keys.publicKey,
        didType: chain,
        didValue: address,
      });

      const { sign, publicKey } = await signMessage(
        signContent,
        address,
        walletType
      );
      await Client.register.register({
        userid,
        didValue: address,
        mainPublicKey: keys.publicKey,
        signature: sign,
        did_pubkey: publicKey,
        didType: chain,
        nickname: "test register user",
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <button onClick={register} disabled={!fastUrl}>
      {fastUrl ? "register  " : "Initializing"}
    </button>
  );
};
export default App;
```

### login() : login to ethos network

:::tip
Method of the register class.

Two pairs of secret key pairs are returned after login

1. Main secret key pairs

   Same as the public-private key pair returned after registration, please keep it safe

2. Temp secret key pairs

   A temporary public-private key pair with an expiry time that marks whether the user is online or not

:::

#### Params: Object : [LoginByKeysParams](/docs/Ethos-SDK/JS-SDK/types/#loginbykeysparams)

**Fields of params**

1. didValue: Required field, Wallet address.
1. didType: Required field, Chain type of wallet address
1. mainPublicKey: Required field, Main keys.publicKey generated from checked signature by calling `Client.register.getMainKeypairBySignature` method
1. mainPrivateKey: Required field, Main keys.secretKey generated from checked signature by calling `Client.register.getMainKeypairBySignature` method
1. password: Required field, user password
1. pubkeyExpiredTimestamp: Optional field, he expiration time of the temporary key pair
1. userid: Required field, User id generated from wallet address by calling `Client.register.getUserInfo` method

#### Response : Promise: Object : [LoginResponse](/docs/Ethos-SDK/JS-SDK/types/#loginresponse)

#### Response json example

```json
{
  "tempPrivateKey": "bdf22a041866cbf9b92898ea736be6ba8973e6e5dfb1a18d747f8963c7e9297f",
  "tempPublicKey": "305570e63cdeae2d1f2444770b71a5fe6fa3717f615bc02bd9ed7156d161e2f3",
  "mainPrivateKey": "IHxAAww96aTpVVu9vZoY8grvRH+jN7BqS0O9uYyMGrhMGTwtniIhHBHXgRhmvUb+f310JHnGtjtODnq8QO5BqBEHXXM3ZG6ch+hz70ca6lI=",
  "mainPublicKey": "e2986d08f96e75d9f2a580484ebc63e5d30a9e77603d63cc64c18a47ff03592b",
  "pubkeyExpiredTimestamp": 1703348032539
}
```

#### Usage Examples

```tsx
import React, { useEffect, useState } from "react";
import {
  BlockChainMap,
  Client,
  connectWallet,
  signMessage,
  generateMainKeypair,
} from "@web3mq/client";

const App: React.FC = () => {
  const password = "123456";
  const walletType = "metamask";
  const [fastUrl, setFastUrl] = useState("");

  const init = async () => {
    const res = await Client.init({
      app_key: "YOUR_APP_KEY",
    });
    setFastUrl(res);
  };

  const login = async () => {
    const { address } = await connectWallet(walletType); // Or get the wallet address by any other means
    const chain = BlockChainMap[walletType]; // eth or starknet
    // check user is exist
    const { userid, userExist } = await Client.register.getUserInfo({
      did_value: address,
      did_type: chain,
    });
    // get sign content
    const keyContent = await Client.register.getMainKeypairSignContent({
      password,
      did_type: chain,
      did_value: walletAddress,
    });
    const { sign: signature } = await signMessage(
      keyContent.signContent,
      walletAddress,
      walletType
    );
    const keys = await Client.register.getMainKeypairBySignature(
      signature,
      password
    );
    if (!userExist) {
      const { signContent } = await Client.register.getRegisterSignContent({
        userid,
        mainPublicKey: keys.publicKey,
        didType: chain,
        didValue: address,
      });

      const { sign, publicKey } = await signMessage(
        signContent,
        address,
        walletType
      );
      await Client.register.register({
        userid,
        didValue: address,
        mainPublicKey: keys.publicKey,
        signature: sign,
        did_pubkey: publicKey,
        didType: chain,
        nickname: "test register user",
      });
    }
    const res = await Client.register.login({
      mainPrivateKey: keys.secretKey,
      mainPublicKey: keys.publicKey,
      didType: chain,
      didValue: address,
      userid,
      password,
    });
    console.log("loginRes: ", res);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <button onClick={login} disabled={!fastUrl}>
      {fastUrl ? "login  " : "Initializing"}
    </button>
  );
};
export default App;
```

### resetPassword() : Reset password

:::tip
Method of the register class.

The resetPassword method uses the same SignContent as register.
:::

#### Params: Object : [ResetPasswordParams](/docs/Ethos-SDK/JS-SDK/types/#resetpasswordparams)

**Fields of params**

1. didValue: Required field, Wallet address.
1. didType: Required field, Chain type of wallet address
1. userid: Required field, User id generated from wallet address by calling `Client.register.getUserInfo` method
1. mainPublicKey: Required field, Main keys.publicKey generated from checked signature by calling `Client.register.getMainKeypairBySignature` method
1. signature: Required field, signature resule
1. did_pubkey: Optional field, This field is required if the did_type is starknet

#### Response : Promise: void

#### Usage Examples

```tsx
import React, { useEffect, useState } from "react";
import {
  BlockChainMap,
  Client,
  connectWallet,
  signMessage,
  generateMainKeypair,
} from "@web3mq/client";

const App: React.FC = () => {
  const password = "123456";
  const walletType = "metamask";
  const [fastUrl, setFastUrl] = useState("");

  const init = async () => {
    const res = await Client.init({
      app_key: "YOUR_APP_KEY",
    });
    setFastUrl(res);
  };

  const resetPassword = async () => {
    const { address } = await connectWallet(walletType); // Or get the wallet address by any other means
    const chain = BlockChainMap[walletType]; // eth or starknet
    // check user is exist
    const { userid, userExist } = await Client.register.getUserInfo({
      did_value: address,
      did_type: chain,
    });
    // get sign content
    const keyContent = await Client.register.getMainKeypairSignContent({
      password,
      did_type: chain,
      did_value: walletAddress,
    });
    const { sign: signature } = await signMessage(
      keyContent.signContent,
      walletAddress,
      walletType
    );
    const keys = await Client.register.getMainKeypairBySignature(
      signature,
      password
    );
    const { signContent } = await Client.register.getRegisterSignContent({
      userid,
      mainPublicKey: keys.publicKey,
      didType: chain,
      didValue: address,
    });

    const { sign, publicKey } = await signMessage(
      signContent,
      address,
      walletType
    );
    await Client.register.resetPassword({
      userid,
      didValue: address,
      mainPublicKey: keys.publicKey,
      signature: sign,
      did_pubkey: publicKey,
      didType: chain,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <button onClick={resetPassword} disabled={!fastUrl}>
      {fastUrl ? "reset Password  " : "Initializing"}
    </button>
  );
};
export default App;
```
