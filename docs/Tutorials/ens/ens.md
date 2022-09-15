## ENS

**ENS Tutorials**

## Installation

install web3.js

```bash
npm install web3
or
yarn add web3
```

Install Web3MQ's JS SDK using a package manager of your choice

```bash
npm install web3-mq
or
yarn add web3-mq
```

## Initialize Client and Connect to Web3MQ Network

In order to connect to the Web3MQ Network, both users and developers authenticate through wallet signatures, we demonstrate below with an Ethereum wallet via Metamask, but Web3MQ is built to be compatible with wallets across different chains.

### Initialize Client

:::note

While we are committed to building an open and collectively owned public good, our early stage testnet requires an API key in order to connect. This is to control capacity to make sure that each early partner and developer is able to build a great experience on top of Web3MQ. [Apply here](https://web3mq.com/apply).

:::

As Web3MQ is a federated network, our default JS SDK client has a method to help you connect to the best node for you.

Simply calling Client.init without connectUrl or an empty string returns a url of the best node determined for you, and this url can be stored locally.

```ts
import { Client } from 'web3-mq';

// You can save the bestEndpointUrl locally to skip endpoint search next time, which will save time, and
const bestEndpointUrl = await Client.init({
  connectUrl: '', //
  app_key: 'app_key', // temporary authorization key obtained by applying, will be removed in future testnets and mainnet
});
```

Calling Client.init with a specific connectUrl forces the client to connect to that specific node. When bestEndpointUrl is stored, it might be time-saving to connect directly instead of running the search again.

```ts
import { Client } from 'web3-mq';

const fastUrl = await Client.init({
  connectUrl: bestEndpointUrl, // takes in a valid endpoint url as input, when this paramter is given, client will always connect to that specific node.
  app_key: 'app_key', // Appkey applied from our team
});
```

#### API endpoints

During this initial testing phase, we've hosted complete networks of Web3MQ nodes in different regions around the globe. Connect to these endpoints below, to access the Web3MQ Testnet.

- https://testnet-us-west-1-1.web3mq.com
- https://testnet-us-west-1-2.web3mq.com
- https://testnet-ap-jp-1.web3mq.com
- https://testnet-ap-jp-2.web3mq.com
- https://testnet-ap-singapore-1.web3mq.com
- https://testnet-ap-singapore-2.web3mq.com

### Get ETH address by Ens

```javascript
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

const getEthAddressByEns = async () => {
  const address = await web3.eth.ens.getAddress('alice.eth');
  console.log(address, 'address');
  return address;
};
```

### Sign with wallet to register user and obtain message encryption keys

For any first-time user of Web3MQ's network, you'll need to register on Web3MQ's network. Web3MQ's JS SDK takes care of the key generation process and subsequent wallet signing process. Client.register.signMetaMask is a utility method that does this automatically.

#### Code

```ts
// get your eth address
const address = getEthAddressByEns();

// You must ensure that the Client.init initialization is complete before running this
const { PrivateKey, PublicKey } = await Client.register.signMetaMask({
  signContentURI: 'https://www.web3mq.com', // your signContent URI
  EthAddress: address,
});

console.log(PrivateKey, PublicKey);

// Keep your private key in a safe place, this is for demo purposes only
localStorage.setItem('PRIVATE_KEY', PrivateKey);
localStorage.setItem('PUBLICKEY', PublicKey);
```

### Get Client Instance

#### Code

```ts
const keys = { PrivateKey, PublicKey };

const client = Client.getInstance(keys);
```

## Create room

After initializing the client and registering your user, the next step is to connect to a room

#### Code

```ts
client.channel.createRoom();
```

```tsx
<button
  onClick={() => {
    client.channel.createRoom();
  }}>
  createGroup
</button>
```

## Send message

#### Code

```ts
client.channel.sendMessage('Hello World');
```

```tsx
<button
  onClick={() => {
    client.message.sendMessage('Hello World');
  }}>
  sendMessage
</button>
```
