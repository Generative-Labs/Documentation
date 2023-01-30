---
position: 3
---

# Channel

## Properties

| name          | type                                                                          | Description            |
| ------------- | ----------------------------------------------------------------------------- | ---------------------- |
| channelList   | [ChannelResponse](/docs/Web3MQ-SDK/JS-SDK/types/#channelresponse) [ ] \| null | channel list           |
| activeChannel | [ChannelResponse](/docs/Web3MQ-SDK/JS-SDK/types/#channelresponse) \| null     | current active channel |

## Methods

| name             | type     | Parameters Description                                            |
| ---------------- | -------- | ----------------------------------------------------------------- |
| setActiveChannel | function | [ChannelResponse](/docs/Web3MQ-SDK/JS-SDK/types/#channelresponse) |
| queryChannels    | function | [pageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)           |
| createRoom       | function | { user_id: string }                                               |

### channelList

> Chat List

#### get

```typescript
import { Client } from "web2-mq";

const client = Client.getInstance("YOUR_ACCESS_TOKEN");

client.channel.channelList;
```

#### Returns

> **Array**: [ChannelResponse](/docs/Web3MQ-SDK/JS-SDK/types/#channelresponse)[]

### activeChannel

> Currently active chat rooms

#### get

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.channel.activeChannel;
```

#### Returns

> **Object**: [ChannelResponse](/docs/Web3MQ-SDK/JS-SDK/types/#channelresponse)

## Methods

### setActiveChannel()

> Sets the currently active channel and notifies all subscribers of updates

```typescript
* setActiveChannel: (channel: ChannelResponse) => void;
```

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.channel.setActiveChannel(channel: ChannelResponse);

// After the request is completed, the data will be synchronized to the client
console.log(client.channel.activeChannel);
```

### queryChannels()

> Query all channel data and notifies all subscribers of updates

```typescript
* queryChannels: (option: PageParams) => Promise<void>;
```

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

await client.channel.queryChannels({
  page: 1,
  size: 20,
});

// After the request is completed, the data will be synchronized to the client
console.log(client.channel.channelList);
```

### createRoom()

> Select a person to create a chat room and set the currently active chat room

```typescript
* createRoom: (params: GetRoomInfoByTargetUserIdParams) => Promise<void>;
```

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

await client.channel.createRoom({
  user_id: "******",
});

// After the request is completed, the data will be synchronized to the client
console.log(client.channel.activeChannel);
console.log(client.channel.channelList);
```
