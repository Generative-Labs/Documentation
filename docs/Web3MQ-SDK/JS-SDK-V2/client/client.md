---
position: 2
---

# Client

## Events

| name                                            | type     | Parameters Description |
| ----------------------------------------------- | -------- | ---------------------- |
| [on](/docs/Web3MQ-SDK/JS-SDK-V2/client/#on)     | function | create pubsub          |
| [off](/docs/Web3MQ-SDK/JS-SDK-V2/client/#off)   | function | cancel pubsub          |
| [once](/docs/Web3MQ-SDK/JS-SDK-V2/client/#once) | function | once pubsub            |
| [emit](/docs/Web3MQ-SDK/JS-SDK-V2/client/#emit) | function | emit pubsub            |

## Properties

| name      | type                                    | Parameters Description        |
| --------- | --------------------------------------- | ----------------------------- |
| keys      | {PrivateKey: string, PublicKey: string} | your PrivateKey and PublicKey |
| listeners | {}                                      | pubsub list                   |
| channel   | {}                                      |                               |
| message   | {}                                      |                               |
| user      | {}                                      |                               |
| contact   | {}                                      |                               |

## Methods

| name                                                          | type     | Parameters Description |
| ------------------------------------------------------------- | -------- | ---------------------- |
| [getInstance](/docs/Web3MQ-SDK/JS-SDK-V2/client/#getInstance) | function | LoginParams or string  |

## Methods

### getInstance()

```typescript
// sign MetaMask get keys
const keys = { PrivateKey, PublicKey };

// ws host url
const HostURL = '94.16.119.221:23333/messages';

const client = Web3MQ.Client.getInstance(keys, HostURL);
```

## Events

### on()

```typescript
* on: (eventName: EventTypes, callback: any) => void;
```

```typescript
client.on('channel.activeChange', (event) {
  console.log(event)
})
```

### off()

```typescript
* off: (eventName: EventTypes, callback?: any) => void;
```

```typescript
client.off('channel.activeChange', (event) {
  console.log(event)
})
```

### once()

```typescript
* once: (eventName: EventTypes, callback?: any) => void;
```

```typescript
client.once('channel.activeChange', (event) {
  console.log(event)
})
```

### emit()

```typescript
* emit: (eventName: EventTypes, ...args: any[]) => void;
```

```typescript
client.emit('channel.activeChange', {
  data: '',
});
```
