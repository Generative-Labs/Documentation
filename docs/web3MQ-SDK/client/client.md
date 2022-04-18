---
position: 1
---
# Intro

web3-mq-js is the official JavaScript client for House Studio, a service for building chat applications.

### Install with NPM

```bash
npm install web3-mq
```

### Install with Yarn

```bash
yarn add web3-mq
```
# Usage
### create client

```typescript
import { Web3MQ } from 'web3-mq';

const loginParams = {
  login_random_secret: 'YOUR_LOGIN_RANDOM_SECRET',
  signature: 'YOUR_SIGNATURE',
  wallet_address: 'YOUR_WALLTE_ADDRESS',
  appid: 'YOUR_APPID',
};

// create client
const client = Web3MQ.getInstance(loginParams);
// or
const client = Web3MQ.getInstance('YOUR_ACCESS_TOKEN');
```

### utils function

```typescript
import { login, register, getLoginRandomSecret } from 'web3-mq';

const data = await register();

const data = await getLoginRandomSecret();

const data = await login();
```

### client Properties

| key         | type          | Parameters Description               |
| ----------- | ------------- | ------------------------------------ |
| getInstance | function      | Gets a unique client instance method |
| on          | function      | create pubsub                        |
| off         | function      | cancel pubsub                        |
| once        | function      | once pubsub                          |
| emit        | function      | emit pubsub                          |
| getMyRooms  | function      | get all rooms id                     |
| token       | string        | your access token                    |
| listeners   | {}            | pubsub list                          |
| channel     | Channel Class | The channel correlation              |
| messages    | Message Class | The messages correlation             |
| user        | User Class    | The user correlation                 |
| contact     | Contact Class | The contact correlation              |
