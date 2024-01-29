---
nav:
  title: docs
title: Heartbeat
order: 30
sidebar_position: 30
---

# Heartbeat Ping/Pong

> Keep websocket connection alive

Websocket client can send WebsocketPingCommand once every 60 seconds to keep connection alive

```go
syntax = "proto3";

package pb;

message WebsocketPingCommand {
    optional string nodeId = 1;
    optional string userId = 2;
    optional uint64 timestamp = 3;
    optional string msgSign = 4;
}

message WebsocketPongCommand {
    optional string nodeId = 1;
    optional string userId = 2;
    optional uint64 timestamp = 3;
    optional string msgSign = 4;
}
```


## Send ping data

```js
import { WebsocketPingCommand } from "@/pb/heartbeat";

const WS_PROTOCOL = 'wss'; // ws or wss

const HostURL = 'us-west-2.web3mq.com'; // choose one domain


const PbTypePingCommand = 0b10000000;

const GetContactBytes = (command: any, bytes: Uint8Array) => {
  // client category type
  const categoryType = 10;
  const concatArray = new Uint8Array([categoryType, command, ...bytes]);

  return concatArray;
};

const GetWSConn = () => {
  const wsurl = WS_PROTOCOL + '://' + HostURL + '/messages';
  const wsconn = new WebSocket(wsurl);
  wsconn.binaryType = 'arraybuffer'; // !important Web3MQ send message use protobuf
  return wsconn;
};

let wsconn = GetWSConn();

const ClientPingHandler = (NodeId: string) => {
    const timestamp = Date.now();

    const reqCommand: WebsocketPingCommand = {
        timestamp: BigInt(timestamp),
    }
    let bytes = WebsocketPingCommand.toBinary(reqCommand);

    const concatArray = GetContactBytes(PbTypePingCommand, bytes);

    wsconn.send(concatArray);
}

````
