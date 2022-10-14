---
title: 5. Send Connect Command
order: 6
group:
  title: Quickstart
---

# Send Connect Command

```go
syntax = "proto3";

// msgSign = Ed25519 signing(nodeId + userId + timestamp)
message ConnectCommand {
    string nodeId = 1;
    string userId = 2;
    uint64 timestamp = 3;
    string msgSign = 4;
}
```

use `Web3MQ JSSDK` or build protobuf yourself

```js
// pb/connect build from protobuf file
import { ConnectCommand } from 'pb/connect';

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


// connect command type
const PbTypeConnectReqCommand = 0b00000010;

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
