---
position: 6
---

# User

## Properties

| name     | type                                                        | Parameters Description  |
| -------- | ----------------------------------------------------------- | ----------------------- |
| userInfo | [userInfo](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo) \| null | current login user info |

## Properties

### userInfo

> Login user info

#### get

```typescript
import { Web3MQ } from "@web3mq/client";

const client = Web3MQ.getInstance("YOUR_ACCESS_TOKEN");

client.channel.userInfo;
```

#### Returns

> **Object**: [userInfo](/docs/Web3MQ-SDK/JS-SDK/types/#userinfo)
