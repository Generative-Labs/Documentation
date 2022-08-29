---
sidebar_position: 1
title: 2. MetaMask Signing
order: 3
group:
  title: Quickstart
---

## Signing data with MetaMask

> signing your ed25519 public key and your wallet address use MetaMask

**Get your eth wallet address**

```tsx
import React from 'react';
import { MetaMaskAccountApp } from 'Web3MQ-Docs';

export default () => <MetaMaskAccountApp />;
```

_Code Example_

```js
const getEthAccount = async () => {
  let res = {
    address: '',
    balance: 0,
    shortAddress: '',
  };
  let reqParams = {
    method: 'wallet_requestPermissions',
    params: [{ eth_accounts: {} }],
  };
  // @ts-ignore
  const requestPermissionsRes = await window.ethereum
    .request(reqParams)
    .catch((e: any) => {
      console.log(e, 'e');
    });

  if (!requestPermissionsRes) return res;
  try {
    //@ts-ignore
    let address = await window.ethereum.request({
      method: 'eth_accounts',
    });
    if (address && address.length > 0) {
      res.address = address[0];
      let strLength = address[0].length;
      res.shortAddress =
        address[0].substring(0, 5) +
        '...' +
        address[0].substring(strLength - 4, strLength);

      //@ts-ignore
      let balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address[0], 'latest'],
      });
      if (balance) {
        let realMoney = balance.toString(10);
        res.balance = realMoney / 1000000000000000000;
      }
    }
  } catch (e) {
    console.log(e);
  }
  return res;
};

let ethAccount = await getEthAccount();
ethWalletAddress = ethAccount.address;
```

## MetaMask signing example

```bash
npm install js-sha3
# or
yarn add js-sha3
```

```js
import { sha3_224 } from 'js-sha3';

const { PrivateKey, PublicKey } = await GenerateEd25519KeyPair();
// ⚠️ Keep your private key in safe place

let ed25519_pubkey = PublicKey;
let userid = 'user:' + ed25519_pubkey;

let wallet_address = 'your wallet address';
let wallet_type = 'eth';

let timestamp = Date.now();

let NonceContent = sha3_224(
  userid + wallet_address + wallet_type + ed25519_pubkey + timestamp.toString(),
);

let your_domain_url = 'https://www.web3mq.com';

let signContent = `Web3MQ wants you to sign in with your Ethereum account:
${wallet_address}
For Web3MQ registration
URI: ${your_domain_url}
Version: 1

Nonce: ${NonceContent}
Issued At: ${moment().utc().local().format('DD/MM/YYYY hh:mm')}`;

// @ts-ignore metamask signature
const signature = await window.ethereum.request({
  method: 'personal_sign',
  params: [signContent, wallet_address, 'web3mq'],
});

let payload = {
  userid: userid,
  pubkey: ed25519_pubkey,
  signature: signature,
  sign_content: signContent,
  wallet_address: wallet_address,
  wallet_type: 'eth',
  timestamp: timestamp,
};
```
