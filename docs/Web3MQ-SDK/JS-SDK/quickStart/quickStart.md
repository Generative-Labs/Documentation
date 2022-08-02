---
position: 1
---

# QuickStart

**Let's learn how to use and successfully send the first message in the chat room we created**

## Usage

1. Install MetaMask extension
1. Install package
1. Register Web2MQ user if you are not
1. Create Web2MQ client connection
1. Create Web2MQ chat room
1. Send message

## Install

```bash
npm install web3-mq
or
yarn add web3-mq
```

## Connect MetaMask

> Connect MetaMask get your eth wallet

#### Code

```typescript
// request permissions and get your wallet address
async function getEthAccount() {
  let res = '';
  // first request permission
  const requestPermissionsRes = await window.ethereum
    .request({
      method: 'wallet_requestPermissions',
      params: [{ eth_accounts: {} }],
    })
    .catch((e: any) => {
      console.log(e, 'e');
    });
  if (!requestPermissionsRes) return null;
  // call func to connect MetaMask and get your account
  try {
    let address = await window.ethereum.request({
      method: 'eth_accounts',
    });
    if (address && address.length > 0) {
      res = address[0];
    }
  } catch (e) {
    console.log(e);
  }
  return res;
}

getEthAccount();
```

## Register Web2MQ user

> call [register()](/docs/Web3MQ-SDK/JS-SDK/utils/#register)

#### Code

```typescript
import { Web2MQ } from 'web3-mq';

const { register } = Web2MQ;

async function registerUser() {
  const data = await register({
    platform: 'opensea',
    username: '0x000000000',
  });
  return data;
}
registerUser();
```

## Create Web2MQ client connection

### Get Parameters

> call [Connect MeatMask](/docs/Web3MQ-SDK/JS-SDK/quickStart/#connect-metamask)
> call [getLoginRandomSecret()](/docs/Web3MQ-SDK/JS-SDK/utils/#getloginrandomsecret)

#### Code

```typescript
import { Web2MQ } from 'web3-mq';

const { login, getLoginRandomSecret } = Web2MQ;

async function getParams() {
  const address = ethereum.selectedAddress; //  call Connect MeatMask
  // call getLoginRandomSecret
  const randomSecret = await getLoginRandomSecret({
    wallet_address: address,
  });

  const msg = `0x${Buffer.from(randomSecret, 'utf8').toString('hex')}`;
  let signContent = `Web3MQ wants you to sign in with your Ethereum account:
${address}
Sign-In With Ethereum Example Statement
URI: https://chat.web3messaging.online
Version: 1
Chain ID: 1
Nonce: ${msg}
Issued At: 2022-05-23T12:52:57.500Z
Expiration Time: 2022-05-25T12:52:57.489Z`;
  // @ts-ignore
  const signature = await ethereum.request({
    method: 'personal_sign',
    params: [signContent, address, 'swapchat'],
  });

  return {
    login_random_secret: randomSecret,
    wallet_address: address,
    signature,
  };
}
getParams();
```

> There are two ways to init client

### Initialize the client with parameters

```typescript
import { Web2MQ } from 'web3-mq';

const client = Web2MQ.Client.getInstance({
  login_random_secret: randomSecret,
  wallet_address: address,
  signature,
});
```

#### or

### Initialize the client with login token

```typescript
import { Web2MQ } from "web3-mq";

const {login} = Web2MQ;

const  data = await login({
  login_random_secret: randomSecret,
  wallet_address: address,
  signature,
})
const client = Web2MQ.Client.getInstance(token: data.access_token);
```

## Create Web2MQ chat room and send message

#### Code

```typescript
import { Web2MQ } from 'web3-mq';

const { login } = Web2MQ;

const client = Web2MQ.getInstance('YOUR_ACCESS_TOKEN');

async function testSend() {
  // 1st: Find a person you want to talk to
  // Eg: SwapChatNFT's twitter
  const data = await register({
    platform: 'twitter',
    username: 'SwapChatNFT',
  });

  // 2nd: Create room and set avtive room
  await client.channel.createRoom({
    user_id: data.user_id,
  });

  // 3rd: Get active room from client context
  const activeRoom = client.channel.active;
  // 4th: send a message to active room
  client.send(hello, false);
}

testSend();
```
