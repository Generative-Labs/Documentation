---
sidebar_position: 0
---

# Intro

> A library of react components for dapp and wallet communication

## Feature

- Customizable components to provide stable connection/signatures for dapp and wallet.

## Install

```bash
npm install @web3mq/dapp-connect
```

or

```bash
yarn add @web3mq/dapp-connect
```

## Usage

> First, introduce the style file.

```tsx
import '@web3mq/dapp-connect-react/dist/css/index.css';
```

> `@web3mq/dapp-connect-react` mainly provides the `DappConnectModal` component, which is very easy to use.

```tsx
import React, {useEffect, useRef, useState} from 'react';
import '@web3mq/dapp-connect-react/dist/css/index.css';
import { DappConnectModal } from '@web3mq/dapp-connect-react';
import {DappConnect, WalletMethodMap} from '@web3mq/dapp-connect';

enum AppTypeEnum {
  'pc' = 'pc',
  'h5' = 'h5',
  'mobile' = 'mobile',
}

const App: React.FC = () => {
  const [client, setClient] = useState<DappConnect>();
  const [walletAddress, setWalletAddress] = useState('');
  const [signRes, setSignRes] = useState('');
  const [appType, setAppType] = useState(
      window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setAppType(
          window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']
      );
    });
  }, []);

  const init = async () => {
    const dappConnect = new DappConnect({ dAppID: 'SwapChat:im'}, () => {});
    setClient(dappConnect);
  };
  const handleModalSuccess = async (event: any) => {
    const { method, result } = event
    if (method === WalletMethodMap.providerAuthorization) {
      console.log('connect success, wallet address is : ', result?.address);
      setWalletAddress(result?.address || '');
    }
    if (method === WalletMethodMap.personalSign) {
      console.log('sign success: ', result?.signature);
      setSignRes(result?.signature || '');
    }
  }
  const sign = async () => {
    await client?.sendSign({
      signContent: 'test sign out',
      address: walletAddress || '',
      password: 'test sign without react',
    });
  };

  useEffect(() => {
    console.log(signRes, 'signRes')
  }, [signRes]);


  return (
      <div>
        <button onClick={init}>init</button>
        {(client) && (
            <div>
              <DappConnectModal
                  client={client}
                  appType={appType}
                  handleSuccess={handleModalSuccess}
                  signBtnNode={
                    <button onClick={sign}>sign</button>}
              />
            </div>
        )}
        <div>{walletAddress && <p>{'connect success, wallet address is : ' + walletAddress}</p>}</div>
        <div>{signRes && <p>{'sign success, signature is : ' + signRes}</p>}</div>
      </div>
  );
};

```