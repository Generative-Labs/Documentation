---
sidebar_position: 0
---


# Overview

`API endpoint`

- https://us-west-2.web3mq.com
- https://ap-jp-1.web3mq.com
- https://ap-singapore-1.web3mq.com

## HTTP API list

- Public Key

  - Save PublicKey [see detail](/docs/Web3MQ-API/pubkey)
    - Create your public key and save to Web3MQ;
    - Web3MQ use the public key `verify` your all subsequent requests

- Contact
  - Get my contact list
  - Send friend request
  - Get friend request list
  - Agree or Reject friend request
- Group

  - List of groups i have joined
  - Get group member list
  - Create group
  - Join group
  - Invitation to join the group

- Chat
  - Get my chat list
- Message

  - Get history messages

## Websocket API list

- Connect Command
- Send Message
- Receive Message

> You can use `Web3MQ JSSDK` or build protobuf yourself

**Connect Command protobuf**

```go
syntax = "proto3";

// msgSign = ed25519 private key signing(nodeId + userId + timestamp)

message ConnectCommand {
    string nodeId = 1;
    string userId = 2;
    uint64 timestamp = 3;
    string msgSign = 4;
}
```

**Message protobuf**

```go
syntax = "proto3";


message Web3MQRequestMessage {
    bytes payload = 1;
    string contentTopic = 2;
    uint32 version = 3;
    string comeFrom = 4;
    string fromSign = 5;
    string payloadType = 6;
    string cipherSuite = 7;
    bool needStore = 8;
    uint64 timestamp = 9;
    string messageId = 10;
}
```

### Create Websocket Connect

_javascript example_

```js
const WS_PROTOCOL = 'wss'; // ws or wss

const HostURL = 'us-west-2.web3mq'; // choose one domain

const GetWSConn = () => {
  const wsurl = WS_PROTOCOL + '://' + HostURL + '/messages';
  const wsconn = new WebSocket(wsurl);
  wsconn.binaryType = 'arraybuffer'; // !important Web3MQ send message use protobuf
  return wsconn;
};

const GetContactBytes = (command: any, bytes: Uint8Array) => {
  const concatArray = new Uint8Array(bytes.length + 1);
  concatArray[0] = command;
  for (let i = 0; i < bytes.length; i++) {
    concatArray[i + 1] = bytes[i];
  }
  return concatArray;
};
```

### Send connect command

---

```js
// pb/connect build from protobuf file
import { ConnectCommand } from 'pb/connect';

// connect command type
const PbTypeConnectReqCommand = 0b00000010;

let wsconn;
wsconn = GetWSConn();

// signature = ed25519 private key signing(nodeId + userId + timestamp)
let reqCmd: ConnectCommand = {
  nodeId: nodeId,
  userId: userId,
  timestamp: ts,
  msgSign: signature,
};

let bytes = ConnectCommand.toBinary(reqCmd);
wsconn.send(concatArray);
```

### Receive connect response

---

more ProtoType see `ProtoType docs`

```js
const PbTypeConnectRespCommand = 0b00000011;

let wsconn;
wsconn = GetWSConn();

wsconn.onmessage = function (event) {
  var respData = new Uint8Array(event.data);

  const PbType = respData[0];
  const bytes = respData.slice(1, respData.length);

  if (PbType == PbTypeConnectRespCommand) {
    console.log('Connect success');
  }
};
```

### Send message

---

```js
// pb/message build from protobuf file
import { Web3MQRequestMessage } from 'pb/message';

// message proto type
const PbTypeMessage = 0b00010000;

let wsconn;
wsconn = GetWSConn();

var payload = new TextEncoder().encode('hello web3mq');

let msgReq: Web3MQRequestMessage = {
  payload: payload,
  contentTopic: topic,
  version: 1,
  comeFrom: userId,
  fromSign: fromSign,
  payloadType: 'text/plain; charset=utf-8',
  cipherSuite: 'NONE',
  needStore: needStore,
  timestamp: BigInt(timestamp),
  messageId: msgid,
};

let bytes = Web3MQRequestMessage.toBinary(msgReq);

const concatArray = GetContactBytes(PbTypeMessage, bytes);

wsconn.send(concatArray);
```

### Receive message

---

```js
// pb/message build from protobuf file
import { Web3MQRequestMessage } from 'pb/message';

// message proto type
const PbTypeMessage = 0b00010000;

let wsconn;
wsconn = GetWSConn();

wsconn.onmessage = function (event) {
  var respData = new Uint8Array(event.data);

  const PbType = respData[0];
  const bytes = respData.slice(1, respData.length);

  if (PbType == PbTypeMessage) {
    console.log('Receive message');
  }
};
```
