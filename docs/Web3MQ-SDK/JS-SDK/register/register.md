---
position: 2
---

# Register

## Methods

| name          | type     | Parameters Description                                                          | response                                                                                                                                |
| ------------- | -------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| getAccount    | function | [WalletType](/docs/Web3MQ-SDK/JS-SDK/types/#WalletType)                         | [AccountType](/docs/Web3MQ-SDK/JS-SDK/types/#ethaccounttype)                                                                            |
| getUserInfo   | function | [getUserInfoParams](/docs/Web3MQ-SDK/JS-SDK/types/#getUserInfoParams)           | Promise<{ userid: string; userExist: boolean }                                                                                          |
| register      | function | [RegisterMetaMaskParams](/docs/Web3MQ-SDK/JS-SDK/types/#RegisterMetaMaskParams) | Promise<{ mainPrivateKey: string, mainPublicKey: string }                                                                               |
| login         | function | [SignMetaMaskParams](/docs/Web3MQ-SDK/JS-SDK/types/#SignMetaMaskParams)         | Promise<{ mainPrivateKey: string, mainPublicKey: string, TempPrivateKey: string, TempPublicKey: string, pubkeyExpiredTimestamp: number} |
| resetPassword | function | [RegisterMetaMaskParams](/docs/Web3MQ-SDK/JS-SDK/types/#RegisterMetaMaskParams) | Promise<{ mainPrivateKey: string, mainPublicKey: string }                                                                               |

## Prerequisites

> init() see: [init](/docs/Web3MQ-SDK/JS-SDK/client/#init)

## Methods

### getAccount()

> Get the wallet address after connecting to the wallet

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

const didType = "eth" | "starknet";
let { address } = await Client.register.getAccount(didType);

console.log(address);
```

### getUserInfo()

> Checking the existence of a user by wallet address

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
const { userid, userExist } = await Client.register.getUserInfo({
  did_value: address, //
  did_type: didType,
});

// userid: string  eg: user:0000000
// userExist: true or false

console.log(userid, userExist);
```

### register()

> Registering users via wallet address

:::tip
After registering a user, a public-private key pair will be returned, this has the highest authority over your account, so make sure you keep it safe
:::

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

const getAccount = async (didType: WalletType = "eth") => {
  const { address } = await Client.register.getAccount(didType);
  const { userid, userExist } = await Client.register.getUserInfo({
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
  const { address, userid } = await getAccount(didType);
  const { mainPrivateKey, mainPublicKey } = await Client.register.register({
    password,
    did_value: address,
    userid,
    did_type: didType,
    avatar_url: `https://cdn.stamp.fyi/avatar/${address}?s=300`,
  });
  localStorage.setItem(`${didType}_MAIN_PRIVATE_KEY`, mainPrivateKey);
  localStorage.setItem(`${didType}_MAIN_PUBLIC_KEY`, mainPublicKey);
};
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

const getAccount = async (didType: WalletType = "eth") => {
  const { address } = await Client.register.getAccount(didType);
  const { userid, userExist } = await Client.register.getUserInfo({
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
  const { address, userid } = await getAccount(didType);

  // The public-private key pair returned after registration
  const localMainPrivateKey =
    localStorage.getItem(`${didType}_MAIN_PRIVATE_KEY`) || "";
  const localMainPublicKey =
    localStorage.getItem(`${didType}_MAIN_PUBLIC_KEY`) || "";

  const {
    TempPrivateKey,
    TempPublicKey,
    pubkeyExpiredTimestamp,
    mainPrivateKey,
    mainPublicKey,
  } = await Client.register.login({
    password,
    userid,
    did_value: address,
    did_type: didType,
    mainPublicKey: localMainPublicKey, // If the master private key pair is received, then the user can log in directly without signature
    mainPrivateKey: localMainPrivateKey, // If the master private key pair is received, then the user can log in directly without signature
  });

  //
  localStorage.setItem("PRIVATE_KEY", TempPrivateKey);
  localStorage.setItem("PUBLIC_KEY", TempPublicKey);
  localStorage.setItem(`${didType}_MAIN_PRIVATE_KEY`, mainPrivateKey);
  localStorage.setItem(`${didType}_MAIN_PUBLIC_KEY`, mainPublicKey);
  localStorage.setItem(`DID_KEY`, `${didType}:${address}`);
  localStorage.setItem(
    "PUBKEY_EXPIRED_TIMESTAMP",
    String(pubkeyExpiredTimestamp)
  );
};
```

### resetPassword()

> Rest password

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

const getAccount = async (didType: WalletType = "eth") => {
  const { address } = await Client.register.getAccount(didType);
  const { userid, userExist } = await Client.register.getUserInfo({
    did_value: address,
    did_type: didType,
  });
  return {
    address,
    userid,
    userExist,
  };
};

const resetPassword = async (password: string, didType: WalletType = "eth") => {
  const { address, userid } = await getAccount(didType);
  const { mainPrivateKey, mainPublicKey } = await Client.register.resetPassword(
    {
      password,
      did_value: address,
      userid,
      did_type: didType,
      avatar_url: `https://cdn.stamp.fyi/avatar/${address}?s=300`,
    }
  );
  localStorage.setItem(`${didType}_MAIN_PRIVATE_KEY`, mainPrivateKey);
  localStorage.setItem(`${didType}_MAIN_PUBLIC_KEY`, mainPublicKey);
};
```
