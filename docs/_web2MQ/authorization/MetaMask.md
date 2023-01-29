# MetaMask

## Properties

## Methods

| name         | type     | Description                                                  |
| ------------ | -------- | ------------------------------------------------------------ |
| signMetaMask | function | Wrapped functions such as login authorization using metaMask |

## Usage

```ts
import { Web3MQ, MetaMask } from "@web3mq/client";

const token = await MetaMask.signMetaMask();

const client = Web3MQ.getInstance(token);
```
