---
sidebar_position: 0
---

# Intro

>  A JavaScript sdk for dapp and wallet communication

## Feature
-  Stable connection for dapp and wallet
- Stable signatures for dapps and wallets
## Install

```bash
npm install @web3mq/dapp-connect
```
or
```bash
yarn add @web3mq/dapp-connect
```
## Init DappConnect client

```tsx
import { DappConnect } from "@web3mq/dapp-connect";

const dappConnectClient = new DappConnect(
  { dAppID: "SwapChat:im" },
  handleWeb3mqCallback
);
console.log("the dapp-connect client: ", dappConnectClient);
```