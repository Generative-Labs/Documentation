# Slope

## Properties

## Methods

| name          | type     | Description                       |
| ------------- | -------- | --------------------------------- |
| signSlope     | function | 使用 Slope 的登陆授权等封装的函数 |
| disconnecting | function | 断开链接                          |

## Usage

```ts
import { Web3MQ, Slope } from 'web3-mq';

const token = await Slope.signSlope();

Slope.disconnecting();

const client = Web3MQ.getInstance(token);
```
