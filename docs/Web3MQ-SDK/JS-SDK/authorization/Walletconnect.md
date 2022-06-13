# Walletconnect

## Properties

## Methods

| name              | type     | Description                                                       |
| ----------------- | -------- | ----------------------------------------------------------------- |
| signWalletconnect | function | Wrapped functions such as login authorization using WalletConnect |

## Usage

```ts
import { Web3MQ, Walletconnect } from "web3-mq";

const token = await Walletconnect.signWalletconnect();

const client = Web3MQ.getInstance(token);
```
