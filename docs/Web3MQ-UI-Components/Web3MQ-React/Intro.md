---
sidebar_position: 0
---

# Intro

Web3MQ React Component Libraries

### Install with NPM

```bash
npm install web3-mq-react
```

### Install with Yarn

```bash
yarn add web3-mq-react
```

# Usage

## An example of initializing login hooks
You can get the login credentials through the method provided by login hook.

```tsx
import { useMemo, useState } from "react";
import { Client, KeyPairsType, WalletType } from "web3-mq";

const useLogin = () => {
  const hasKeys = useMemo(() => {
    const PrivateKey = localStorage.getItem("PRIVATE_KEY") || "";
    const PublicKey = localStorage.getItem("PUBLIC_KEY") || "";
    const userid = localStorage.getItem("userid") || "";
    if (PrivateKey && PublicKey && userid) {
      return { PrivateKey, PublicKey, userid };
    }
    return null;
  }, []);

  const [keys, setKeys] = useState<KeyPairsType | null>(hasKeys);
  const [fastestUrl, setFastUrl] = useState<string | null>(null);
  const [userAccount, setUserAccount] = useState<{
    userid: string;
    address: string;
  }>();

  const init = async () => {
    const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";
    const didKey = localStorage.getItem("DID_KEY") || "";
    const fastUrl = await Client.init({
      connectUrl: localStorage.getItem("FAST_URL"),
      app_key: "vAUJTFXbBZRkEDRE",
      env: "dev",
      didKey,
      tempPubkey,
    });
    localStorage.setItem("FAST_URL", fastUrl);
    setFastUrl(fastUrl);
  };

  const getAccount = async (didType: WalletType = "eth") => {
    let address = "";
    let account = await Client.register.getAccount(didType);
    address = account.address;
    const { userid, userExist } = await Client.register.getUserInfo({
      did_value: address,
      did_type: didType,
    });
    localStorage.setItem("userid", userid);
    setUserAccount({
      userid,
      address,
    });
    return {
      address,
      userid,
      userExist,
    };
  };

  const login = async (password: string, didType: WalletType = "eth") => {
    if (!userAccount) {
      return;
    }

    const localMainPrivateKey =
      localStorage.getItem(`${didType}_MAIN_PRIVATE_KEY`) || "";
    const localMainPublicKey =
      localStorage.getItem(`${didType}_MAIN_PUBLIC_KEY`) || "";

    const { userid, address } = userAccount;
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
      mainPublicKey: localMainPublicKey,
      mainPrivateKey: localMainPrivateKey,
    });
    localStorage.setItem("PRIVATE_KEY", TempPrivateKey);
    localStorage.setItem("PUBLIC_KEY", TempPublicKey);
    localStorage.setItem(`${didType}_MAIN_PRIVATE_KEY`, mainPrivateKey);
    localStorage.setItem(`${didType}_MAIN_PUBLIC_KEY`, mainPublicKey);
    localStorage.setItem(`DID_KEY`, `${didType}:${address}`);
    localStorage.setItem(
      "PUBKEY_EXPIRED_TIMESTAMP",
      String(pubkeyExpiredTimestamp)
    );
    setKeys({
      PrivateKey: TempPrivateKey,
      PublicKey: TempPublicKey,
      userid,
    });
  };

  const register = async (password: string, didType: WalletType = "eth") => {
    if (!userAccount) {
      return;
    }
    const { address, userid } = userAccount;
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

  const logout = () => {
    localStorage.setItem("PRIVATE_KEY", "");
    localStorage.setItem("PUBLIC_KEY", "");
    localStorage.setItem("DID_KEY", "");
    localStorage.setItem("userid", "");
    setKeys(null);
  };

  return { keys, fastestUrl, init, login, logout, getAccount, register };
};

export default useLogin;
```
## Creating a Web3MQ Client

```tsx
import { Client } from 'web3-mq';

const client = Client.getInstance('YOUR_ACCESS_TOKEN');
```

## Your First App with Web3MQ React

```tsx
import React, { useState } from 'react';
import {
  AppTypeEnum,
  Chat,
  Channel,
  DashBoard,
  LoginModal,
  MessageHeader,
  MessageList,
  MessageInput,
  Window,
} from 'web3-mq-react';
import useLogin from './hooks/useLogin';
import 'web3-mq-react/dist/css/index.css';

const App = () => {
  const { keys, fastestUrl, init, login, logout, getAccount, register } = useLogin();
  // Use your own logic to decide which pattern to use
  const appType = 'pc'; // 'pc' | 'app' | 'mobile'

  useEffect(() => {
    init();
    // set your component theme
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, []);

  if (!fastestUrl) {
    return null;
  }

  if (!key) {
    // Redirect to the login page
    <LoginModal
      appType={appType}
      containerId=''
      isShow={true}
      register={register}
      login={login}
      getEthAccount={getAccount}
    />
  }
  const client = Client.getInstance(key);

  return (
    <Chat client={client} appType={appType} logout={logout}>
      <DashBoard />
      <Channel>
        <Window>
          <MessageHeader avatarSize={40} />
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </Chat>
  );
};
```
