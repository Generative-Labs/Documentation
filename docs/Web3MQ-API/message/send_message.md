---
title: Send Message
order: 1
group:
  title: Message
  order: 6
---

# Send Message

---

> **Websocket** Protobuf

## Init websocket connect

```js
const WS_PROTOCOL = 'wss'; // ws or wss

const HostURL = 'us-west-2.web3mq.com'; // choose one domain

const GetWSConn = () => {
  const wsurl = WS_PROTOCOL + '://' + HostURL + '/messages';
  const wsconn = new WebSocket(wsurl);
  wsconn.binaryType = 'arraybuffer'; // !important Web3MQ send message use protobuf
  return wsconn;
};

const GetContactBytes = (command: any, bytes: Uint8Array) => {
  // client category type
  const categoryType = 10;
  const concatArray = new Uint8Array([categoryType, command, ...bytes]);

  return concatArray;
};

```

## Send connect command

_Before send message connect to server first_

```js
// pb/connect build from protobuf file
import { ConnectCommand } from 'pb/connect';

// connect command type
const PbTypeConnectReqCommand = 0b00000010;

let wsconn;
wsconn = GetWSConn();

let timestamp = Date.now();

// signature = ed25519 private key signing(nodeId + userId + timestamp)
let reqCmd: ConnectCommand = {
  nodeId: nodeId,
  userId: userId,
  timestamp: timestamp,
  msgSign: signature,
};

let bytes = ConnectCommand.toBinary(reqCmd);
wsconn.send(concatArray);
```

## Send message

**Message protobuf**

```go
syntax = "proto3";

package pb;

message Web3MQMessage {
    bytes payload = 1;
    string contentTopic = 2; // target user's wallet address or group's id
    uint32 version = 3; // 0.1 for now
    string comeFrom = 4;
    string fromSign = 5;
    string payloadType = 6;
    string cipherSuite = 7;
    bool needStore = 8;
    uint64 timestamp = 9;
    string messageId = 10;
    string nodeId = 12;
}
```

`Message description`

| Field        | type   | Description                                  |
| ------------ | ------ | -------------------------------------------- |
| payload      | bytes  | message content                              |
| contentTopic | string | content topic                                |
| typeId       | string | content type id                              |
| cipherSuite  | string | cipher suite                                 |
| comeFrom     | string | message come from user's unique id           |
| fromSign     | string | message come from user's unique id signature |
| nodeId       | string | nodeId                                       |

### Javascript example

```js
// Common.js and ECMAScript Modules (ESM)
import * as ed25519 from '@noble/ed25519';

// pb/message build from protobuf file
import { Web3MQRequestMessage } from 'pb/message';

// The Keccak hash function is also available
import { sha3_224 } from 'js-sha3';

const GenerateMessageID = async (
  from: string,
  topic: string,
  timestamp: number,
  payload: Uint8Array,
) => {
  return sha3_224
    .update(from)
    .update(topic)
    .update(timestamp.toString())
    .update(payload)
    .hex();
};

const getDataSignature = async (msg: string) => {
  let Ed25519PrivateKey = 'your Ed25519PrivateKey hex string';
  let signature = await ed25519.sign(
    new TextEncoder().encode(msg),
    Ed25519PrivateKey,
  );
};

// message proto type
const PbTypeMessage = 0b00010000;

let wsconn = GetWSConn();

let timestamp = Date.now();

var payload = new TextEncoder().encode('hello web3mq');

const msgid = await GenerateMessageID(userId, topic, timestamp, payload);

const signContent = msgid + userId + topic + nodeId + timestamp.toString();
const fromSign = await getDataSignature(signContent);

// Chat with someone `contentTopic` is userid
// Chat in group `contentTopic` is groupid

const topic = 'group id';

let msgReq: Web3MQRequestMessage = {
  payload: payload,
  contentTopic: topic,
  version: 1,
  comeFrom: userId,
  nodeId: nodeId,
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



## Receive message response status


**Message Status Response protobuf**

```go
syntax = "proto3";

package pb;

message Web3MQMessageStatusResp {
    string messageId = 1;
    string contentTopic = 2;
    string messageStatus = 3; // received delivered read
    string version = 4;
    string comeFrom = 5;
    string fromSign = 6;
    uint64 timestamp = 7;
}
```

`Web3MQMessageStatusResp description`

| Field        | type   | Description                                  |
| ------------ | ------ | -------------------------------------------- |
| messageId      | string  | message id                              |
| contentTopic | string | content topic                                |
| messageStatus       | string | messageStatus                              |
| version  | string | version                                 |
| comeFrom     | string | message come from user's unique id           |
| fromSign     | string | message come from user's unique id signature |
| timestamp       | uint64 | timestamp                                       |


*messageStatus*

- userNotFound
- invalidSignature
- received (Node received message)
- read     (Message already read)


```js
// pb/message build from protobuf file
import { Web3MQRequestMessage } from 'pb/message';


const WS_PROTOCOL = 'wss'; // ws or wss

const HostURL = 'us-west-2.web3mq.com'; // choose one domain

const GetWSConn = () => {
  const wsurl = WS_PROTOCOL + '://' + HostURL + '/messages';
  const wsconn = new WebSocket(wsurl);
  wsconn.binaryType = 'arraybuffer'; // !important Web3MQ send message use protobuf
  return wsconn;
};

// message response status
const PbTypeMessageStatusResp = 0b00010101

let wsconn;
wsconn = GetWSConn();

wsconn.onmessage = function (event) {
  var respData = new Uint8Array(event.data);

  const PbType = respData[1];
  const bytes = respData.slice(2, respData.length);

  if (PbType == PbTypeMessageStatusResp) {
     let statusResp = Web3MQMessageStatusResp.fromBinary(bytes);
     console.log(statusResp.messageStatus == "invalidSignature");
  }
}
```

