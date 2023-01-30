# Intro

> Includes integration of multiple wallet classes

## Feature

- [MetaMask Class](/docs/Web3MQ-SDK/JS-SDK/authorization/MetaMask)
- [Slope Class](/docs/Web3MQ-SDK/JS-SDK/authorization/Slope)
- [Walletconnect Class](/docs/Web3MQ-SDK/JS-SDK/authorization/Walletconnect)

## Usage

```ts
import { Web3MQ, MetaMask, Slope, Walletconnect } from "@web3mq/client";

const token = await MetaMask.signMetaMask();
// or
const token = await Slope.signSlope();
// or
const token = await Walletconnect.signWalletconnect();

const client = Web3MQ.getInstance(token);
```
