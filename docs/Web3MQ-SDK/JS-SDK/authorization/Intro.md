# Intro

> 包含了多个钱包类的集成

## Feature

- [MetaMask Class](/docs/Web3MQ-SDK/JS-SDK/authorization/MetaMask)
- [Slope Class](/docs/Web3MQ-SDK/JS-SDK/authorization/Slope)
- [Walletconnect Class](/docs/Web3MQ-SDK/JS-SDK/authorization/Walletconnect)

## Usage

```ts
import { Web3MQ, MetaMask, Slope, Walletconnect } from 'web3-mq';

const token = await MetaMask.signMetaMask();
// or
const token = await Slope.signSlope();
// or
const token = await Walletconnect.signWalletconnect();

const client = Web3MQ.getInstance(token);
```
