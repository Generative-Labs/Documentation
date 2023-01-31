---
title: 6. Send a message
order: 7
group:
  title: Quickstart
---

# 6. Send a message to group (chat room)

- Chat with someone `contentTopic` is userid
- Chat in group `contentTopic` is groupid

```go
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
    string nodeId = 12;
}
```

use `Web3MQ JSSDK` or build protobuf yourself

**Send message**

---

```js
// pb/message build from protobuf file
import { Web3MQRequestMessage } from 'pb/message';

const getDataSignature = async (msg: string) => {
  let Ed25519PrivateKey = 'your Ed25519PrivateKey hex string';
  let signature = await ed25519.sign(
    new TextEncoder().encode(msg),
    Ed25519PrivateKey,
  );
};

// message proto type
const PbTypeMessage = 0b00010000;

let wsconn;
wsconn = GetWSConn();

// Chat with someone `contentTopic` is userid
// Chat in group `contentTopic` is groupid

const topic = 'group id';

var payload = new TextEncoder().encode('hello web3mq');

const signContent = msgid + userId + topic + nodeId + timestamp.toString();
const fromSign = await getDataSignature(signContent);

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
  nodeId: nodeId,
};

let bytes = Web3MQRequestMessage.toBinary(msgReq);

const concatArray = GetContactBytes(PbTypeMessage, bytes);

wsconn.send(concatArray);
```

**Receive message**

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

  const PbType = respData[1];
  const bytes = respData.slice(2, respData.length);

  if (PbType == PbTypeMessage) {
    console.log('Receive message');
  }
};
```
