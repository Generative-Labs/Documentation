# Slope

## Properties

## Methods

| name          | type     | Description                                               |
| ------------- | -------- | --------------------------------------------------------- |
| signSlope     | function | Wrapped functions such as login authorization using Slope |
| disconnecting | function | disconnecting                                             |

## Usage

```ts
import { Web3MQ, Slope } from "web3-mq";

const token = await Slope.signSlope();

Slope.disconnecting();

const client = Web3MQ.getInstance(token);
```
