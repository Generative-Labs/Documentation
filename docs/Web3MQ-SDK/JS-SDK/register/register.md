---
position: 2
---

# Register

## Methods

| name                      | type     | Parameters Description                                                                                          | response                                                                          |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| getAccount                | function | [WalletType](/docs/Web3MQ-SDK/JS-SDK/types/#WalletType)                                                         | Promise: [AccountType](/docs/Web3MQ-SDK/JS-SDK/types/#ethaccounttype)             |
| getUserInfo               | function | [getUserInfoParams](/docs/Web3MQ-SDK/JS-SDK/types/#getUserInfoParams)                                           | Promise: [GetUserInfoResponse](/docs/Web3MQ-SDK/JS-SDK/types/#getuserinforesponse) |
| register                  | function | [RegisterBySignParams](/docs/Web3MQ-SDK/JS-SDK/types/#registerbysignparams)                                     | Promise: [RegisterApiResponse](/docs/Web3MQ-SDK/JS-SDK/types/#registerapiresponse) |
| login                     | function | [LoginByKeysParams](/docs/Web3MQ-SDK/JS-SDK/types/#loginbykeysparams)                                           | Promise: [LoginResponse](/docs/Web3MQ-SDK/JS-SDK/types/#loginresponse)            |
| resetPassword             | function | [RegisterBySignParams](/docs/Web3MQ-SDK/JS-SDK/types/#registerbysignparams)                                       | Promise: [RegisterApiResponse](/docs/Web3MQ-SDK/JS-SDK/types/#registerapiresponse) |
| sign                      | function | 1, signContent: string 2. address: string 3. walletType:[WalletType](/docs/Web3MQ-SDK/JS-SDK/types/#wallettype) | Promise: [WalletSignResponse](/docs/Web3MQ-SDK/JS-SDK/types/#walletsignres)       |
| getMainKeypairSignContent | function | [GetMainKeypairParams](/docs/Web3MQ-SDK/JS-SDK/types/#getmainkeypairparams)                                     | Promise: [GetSignContentResponse](/docs/Web3MQ-SDK/JS-SDK/types/#getsigncontentresponse) |
| getMainKeypairBySignature | function | 1. signature: string, 2. password: string                                                                       | Promise: [MainKeypairType](/docs/Web3MQ-SDK/JS-SDK/types/#mainkeypairtype)        |
| getRegisterSignContent    | function | [GetRegisterSignContentParams](/docs/Web3MQ-SDK/JS-SDK/types/#getregistersigncontentparams)                     | Promise: [GetSignContentResponse](/docs/Web3MQ-SDK/JS-SDK/types/#getsigncontentresponse) |

## Prerequisites

> init() see: [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)

## Methods

### getAccount()

> Get the wallet address after connecting to the wallet

```tsx
import {Client} from "@web3mq/client";

const didKey = localStorage.getItem("DID_KEY") || "";
const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";
await Client.init({
    connectUrl: localStorage.getItem("FAST_URL"), // or ''
    app_key: "vAUJTFXbBZRkEDRE", // your Appkey
    env: "dev",
    didKey,
    tempPubkey,
});

const didType = "eth" | "starknet";
let {address} = await Client.register.getAccount(didType);

console.log(address);
```

### getUserInfo()

> Checking the existence of a user by wallet address

```tsx
import {Client} from "@web3mq/client";

const didKey = localStorage.getItem("DID_KEY") || "";
const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";

await Client.init({
    connectUrl: localStorage.getItem("FAST_URL"), // or ''
    app_key: "vAUJTFXbBZRkEDRE", // your Appkey
    env: "dev",
    didKey,
    tempPubkey,
});
const {userid, userExist} = await Client.register.getUserInfo({
    did_value: address, //
    did_type: didType,
});

// userid: string  eg: user:0000000
// userExist: true or false

console.log(userid, userExist);
```

### sign()

> call wallet sign

```tsx

import {Client} from "@web3mq/client";

await Client.init({
    connectUrl: "example url", // The fastURL you saved to local
    app_key: "app_key", // Appkey applied from our team
    env: "test", // The default is the test environment
    tempPubkey, // After login get temp public key
    didKey, // did_key:did_value  eg: eth:0x00000000123123;
});
const walletType = "eth" | "starknet";
const {address} = await Client.register.getAccount(walletType);
const signContent = 'hello web3mq'
const {sign: signature} = await this.sign(signContent, did_value, did_type);
```

### getMainKeypairSignContent()

> Get the signature content to generate the master key pair

```tsx
import {Client} from "@web3mq/client";

await Client.init({
    connectUrl: "example url", // The fastURL you saved to local
    app_key: "app_key", // Appkey applied from our team
    env: "test", // The default is the test environment
    tempPubkey, // After login get temp public key
    didKey, // did_key:did_value  eg: eth:0x00000000123123;
});
const walletType = "eth" | "starknet";
const {address} = await Client.register.getAccount(walletType);
// 1. get signContent
const {signContent} = await Client.register.getMainKeypairSignContent({
    password: confirmPassword.current,
    did_value: address,
    did_type: walletType,
});
console.log(signContent);
// 2. sign 
const {sign: signature} = await this.sign(signContent, did_value, did_type);
console.log(signature)
```

### getMainKeypairBySignature()

> Get the master key pair after signing

```tsx
import {Client} from "@web3mq/client";

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
const password = '123456';
const {publicKey, secretKey} = await Client.register.getMainKeypairBySignature(
    signature,
    password
);
```

### getRegisterSignContent()

> Get the register signContent
>
>

```tsx

import {Client} from "@web3mq/client";

const didKey = localStorage.getItem("DID_KEY") || "";
const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";
await Client.init({
    connectUrl: localStorage.getItem("FAST_URL"), // or ''
    app_key: "vAUJTFXbBZRkEDRE", // your Appkey
    env: "dev",
    didKey,
    tempPubkey,
});
const didType = 'eth' | 'starknet'
const getAccount = async (didType: WalletType = "eth") => {
    const {address} = await Client.register.getAccount(didType);
    const {userid, userExist} = await Client.register.getUserInfo({
        did_value: address,
        did_type: didType,
    });
    return {
        address,
        userid,
        userExist,
    };
};

const {address, userid} = await getAccount(didType);

const {signContent} = await Client.register.getRegisterSignContent({
    userid,
    mainPublicKey: publicKey,
    didType,
    didValue: address,
});
register()
```

### register() or resetPassword()

> Registering users via wallet address

:::tip

Before registering a user, you must register the main key pair with a custom password,
Main key pair has the highest authority over your account,
so make sure you keep it safe
:::
:::tip
Using a mobile wallet? see: [dapp connect](/docs/Web3MQ-SDK/JS-SDK/dappConnect/)
:::

```tsx
import {Client} from "@web3mq/client";

const didKey = localStorage.getItem("DID_KEY") || "";
const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";
await Client.init({
    connectUrl: localStorage.getItem("FAST_URL"), // or ''
    app_key: "vAUJTFXbBZRkEDRE", // your Appkey
    env: "dev",
    didKey,
    tempPubkey,
});

const getAccount = async (didType: WalletType = "eth") => {
    const {address} = await Client.register.getAccount(didType);
    const {userid, userExist} = await Client.register.getUserInfo({
        did_value: address,
        did_type: didType,
    });
    return {
        address,
        userid,
        userExist,
    };
};

const register = async (password: string, didType: WalletType = "eth") => {
    const {address, userid} = await getAccount(didType);
    const {password, did_value, did_type} = options;
    const {signContent: keysSignContent} = await Client.register.getMainKeypairSignContent(options);
    const {sign: keysSignature} = await Client.register.sign(keysSignContent, did_value, did_type);
    const {publicKey, secretKey} = await Client.register.getMainKeypairBySignature(
        keysSignature,
        password
    );

    // const registerSignContent = aw Client.register.
    const {signContent} = await Client.register.getRegisterSignContent({
        userid,
        mainPublicKey: publicKey,
        didType,
        didValue: address,
    });
    const {sign: signature, publicKey: did_pubkey = ''} = await Client.register.sign(
        signContent,
        address,
        didType,
    );
   
   const params = {
      userid,
      didValue: address,
      mainPublicKey: publicKey,
      did_pubkey,
      didType,
      nickname: '',
      avatar_url: '',
      signature,
   }
    const registerRes = await Client.register.register(params);
   // reset password
   // const resetRes = await Client.register.resetPassword(params);
    console.log(registerRes)
};
register()

```

### login()

> Login

:::tip
Two pairs of secret key pairs are returned after login

1. Main secret key pairs

   Same as the public-private key pair returned after registration, please keep it safe

2. Temp secret key pairs

   A temporary public-private key pair with an expiry time that marks whether the user is online or not

:::

```tsx
import {Client} from "@web3mq/client";

const didKey = localStorage.getItem("DID_KEY") || "";
const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";
await Client.init({
    connectUrl: localStorage.getItem("FAST_URL"), // or ''
    app_key: "vAUJTFXbBZRkEDRE", // your Appkey
    env: "dev",
    didKey,
    tempPubkey,
});

const getAccount = async (didType: WalletType = "eth") => {
    const {address} = await Client.register.getAccount(didType);
    const {userid, userExist} = await Client.register.getUserInfo({
        did_value: address,
        did_type: didType,
    });
    return {
        address,
        userid,
        userExist,
    };
};

const login = async (password: string, didType: WalletType = "eth") => {
    const {address, userid} = await getAccount(didType);

    // The public-private key pair returned after registration
    const localMainPrivateKey = localStorage.getItem('MAIN_PRIVATE_KEY') || "";
    const localMainPublicKey = localStorage.getItem('MAIN_PUBLIC_KEY') || "";
    const tempTime = localStorage.getItem('PUBKEY_EXPIRED_TIMESTAMP') || 0;
    if (!localMainPublicKey || localMainPrivateKeyak) {
        const {signContent} = await Client.register.getMainKeypairSignContent(options);
        const {sign: signature, publicKey: did_pubkey} = await Client.register.sign(signContent, did_value, did_type);
        const {
            publicKey: localMainPublicKey,
            secretKey: localMainPrivateKeyak
        } = await Client.register.getMainKeypairBySignature(
            signature,
            password
        );
    }

    const {
        tempPrivateKey,
        tempPublicKey,
        pubkeyExpiredTimestamp,
        mainPrivateKey,
        mainPublicKey
    } = await Client.register.login({
        mainPrivateKey: localMainPrivateKey,
        mainPublicKey: localMainPublicKey,
        didType,
        didValue: address,
        userid,
        password,
        pubkeyExpiredTimestamp: tempTime
    });

    //
    localStorage.setItem("PRIVATE_KEY", TempPrivateKey);
    localStorage.setItem("PUBLIC_KEY", TempPublicKey);
    localStorage.setItem('MAIN_PRIVATE_KEY', mainPrivateKey);
    localStorage.setItem('MAIN_PUBLIC_KEY', mainPublicKey);
    localStorage.setItem(`DID_KEY`, `${didType}:${address}`);
    localStorage.setItem(
        "PUBKEY_EXPIRED_TIMESTAMP",
        String(pubkeyExpiredTimestamp)
    );
};
```