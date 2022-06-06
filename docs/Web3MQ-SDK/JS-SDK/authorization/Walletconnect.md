# Walletconnect

## Properties

## Methods

| name              | type     | Description                               |
| ----------------- | -------- | ----------------------------------------- |
| signWalletconnect | function | 使用 Walletconnect 的登陆授权等封装的函数 |

## Usage

```ts
import { Web3MQ, Walletconnect } from 'web3-mq';

const token = await Walletconnect.signWalletconnect();

const client = Web3MQ.getInstance(token);
```
