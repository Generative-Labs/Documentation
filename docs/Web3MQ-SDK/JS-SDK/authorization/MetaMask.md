# MetaMask

## Properties

## Methods

| name         | type     | Description                          |
| ------------ | -------- | ------------------------------------ |
| signMetaMask | function | 使用 metaMask 的登陆授权等封装的函数 |

## Usage

```ts
import { Web3MQ, MetaMask } from 'web3-mq';

const token = await MetaMask.signMetaMask();

const client = Web3MQ.getInstance(token);
```
