---
position: 8.1
---

# Pub/Sub

## Properties

| name            | type                                                                              | Description          |
| --------------- | --------------------------------------------------------------------------------- | -------------------- |
| myTopicList     | [TopicListType](/docs/Web3MQ-SDK/JS-SDK/types/#topiclisttype) [ ] \| null         | myTopicList list     |
| mySubscribeList | [SubscribeListType](/docs/Web3MQ-SDK/JS-SDK/types/#subscribelisttype) [ ] \| null | mySubscribeList list |

## Methods

| name                    | type     | Parameters Description                                      | response                                                              |
| ----------------------- | -------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| createTopic             | function | topic_name: string                                          | { "topicid": string }                                                 |
| subscribeTopic          | function | topicid: string                                             | { "code": 0, "msg": "ok"}                                             |
| publishTopicMessage     | function | params: { topicid: string; title: string; content: string } | { "code": 0, "msg": "ok"}                                             |
| getMyCreateTopicList    | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)     | [TopicListType](/docs/Web3MQ-SDK/JS-SDK/types/#topiclisttype)         |
| getMySubscribeTopicList | function | [PageParams](/docs/Web3MQ-SDK/JS-SDK/types/#pageparams)     | [SubscribeListType](/docs/Web3MQ-SDK/JS-SDK/types/#subscribelisttype) |

## Pub/Sub Example

> 1. Copy the [Root Components](/docs/Web3MQ-SDK/JS-SDK/quickStart/#root-components-code) Code to App.tsx
> 2. Create a Child.tsx file and copy the Child Components Code to Child.tsx

```tsx
import React, { useEffect, useState } from 'react';
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

const Child: React.FC<IProps> = (props) => {
  const { client } = props;
  const [topicName, setTopicName] = useState<string>('');
  const [topicId, setTopicId] = useState<string>('');
  const [notifyList, setNotifyList] = useState<any>([]);
  const [myTopicList, setMyTopicList] = useState<any>(null);
  const [mySubscribeList, setMySubscribeList] = useState<any>(null);

  const handleEvent = (event: { type: string }) => {
    const { type } = event;
    if (type === 'notification.getList') {
      console.log('notification list -------', client.notify.notificationList);
      setNotifyList([...notifyList, ...(client.notify.notificationList as [])]);
    }
    if (type === 'notification.getMyTopicList') {
      console.log('MyTopicList------', client);
      setMyTopicList(client.topic.myTopicList);
    }
    if (type === 'notification.getMySubscribeList') {
      console.log('MySubscribeList------', client.topic.mySubscribeList);
      setMySubscribeList(client.topic.mySubscribeList);
    }
  };

  const getMyTopicList = async () => {
    const data = await client.topic.getMyCreateTopicList({
      page: 1,
      size: 100,
    });
    console.log(data);
  };

  const getMySubscribeList = async () => {
    const data = await client.topic.getMySubscribeTopicList({
      page: 1,
      size: 100,
    });
    console.log(data);
  };

  useEffect(() => {
    client.on('notification.getList', handleEvent);
    client.on('notification.getMyTopicList', handleEvent);
    client.on('notification.getMySubscribeList', handleEvent);
    return () => {
      client.off('notification.getList', handleEvent);
      client.off('notification.getMyTopicList', handleEvent);
      client.off('notification.getMySubscribeList', handleEvent);
    };
  }, [notifyList]);

  useEffect(() => {
    getMyTopicList();
    getMySubscribeList();
  }, []);

  const handleCreate = async () => {
    const data = await client.topic.createTopic(topicName);
    console.log(data);
    await getMyTopicList();
  };

  const handleSubscribe = async () => {
    const data = await client.topic.subscribeTopic(topicId);
    console.log(data);
    await getMySubscribeList();
  };

  const handlePublishMsg = async () => {
    const params = {
      topicid: topicId,
      title: 'test title',
      content: 'test content',
    };
    await client.topic.publishTopicMessage(params);
  };

  return (
    <div>
      <h1>1. Create Topic</h1>
      <div>
        Write topic name------
        <input
          type='text'
          value={topicName}
          onChange={(e) => {
            setTopicName(e.target.value);
          }}
        />
        <button onClick={handleCreate}>Create Topic</button>
      </div>
      <h4>My Topic List</h4>
      {myTopicList?.map((item: any, idx: number) => (
        <div key={item.topicid}>
          {`topicid${idx + 1}-------`} <b>{item.topicid}</b>
        </div>
      ))}
      <br />
      <br />

      <h1>2. Subscribe Topic</h1>
      <div>
        Write subscribe topic ID------
        <input
          type='text'
          value={topicId}
          onChange={(e) => {
            setTopicId(e.target.value);
          }}
        />
        <button onClick={handleSubscribe}>Subscribe Topic</button>
      </div>
      <h4>My Subscribe List</h4>
      {mySubscribeList?.map((item: any, idx: number) => (
        <div key={item.topicid}>
          {`topicid${idx + 1}-------`}
          <b>{item.topicid}</b>
        </div>
      ))}
      <br />
      <br />

      <h1>3. Publish Msg</h1>
      <div>
        Write subscribe topic ID------
        <input
          type='text'
          value={topicId}
          onChange={(e) => {
            setTopicId(e.target.value);
          }}
        />
        <button onClick={handlePublishMsg}>publish Msg</button>
      </div>
      <h1>4. Notify List</h1>
      {notifyList?.map((item: any, idx: number) => (
        <div key={item.timestamp}>
          {`notify${idx + 1}-------title:`}
          <b>{item.title}</b>, content: <b>{item.content}</b>
        </div>
      ))}
    </div>
  );
};

export default Child;
```

## init Client

```tsx
import { Client } from 'web3-mq';
// 1. You must initialize the SDK, the init function is asynchronous
await Client.init({
  connectUrl: 'example url', // The fastURL you saved to local
  app_key: 'app_key', // Appkey applied from our team
});
// 2. sign MetaMask get keys
const { PrivateKey, PublicKey, userid } = await Client.register.signMetaMask({
  signContentURI: 'https://www.web3mq.com', // your signContent URI
  EthAddress: 'your eth address', // *Not required*  your eth address, if not use your MetaMask eth address
});
const keys = { PrivateKey, PublicKey, userid };
// 3. You must ensure that the Client.init initialization is complete and that you have a key pair
const client = Client.getInstance(keys);

console.log(client);

export const Child = () => {
  return (
    <div>
      <Child client={client} />
    </div>
  );
};
```

## createTopic

```tsx
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleCreate = async () => {
    const data = await client.notify.createTopic('topic_name');
    console.log(data);
    setTopic(data.topicid);
  };

  return (
    <div>
      <button onClick={handleCreate}>Create Topic</button>
    </div>
  );
};
```

## subscribeTopic

```tsx
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleSubscribe = async () => {
    const data = await client.notify.subscribeTopic('topicid');
    console.log(data);
  };

  return (
    <div>
      <button onClick={handleSubscribe}>Subscribe Topic</button>
    </div>
  );
};
```

## publishTopicMessage

```tsx
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handlePublishMsg = async () => {
    const params = {
      topicid: 'topic',
      title: 'test title',
      content: 'test content',
    };
    await client.notify.publishTopicMessage(params);
  };

  return (
    <div>
      <button onClick={handlePublishMsg}>publish Msg</button>
    </div>
  );
};
```

## getMyCreateTopicList

```tsx
import { useEffect } from 'react';
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'notification.getMyTopicList') {
      console.log(client.notify.myTopicList);
    }
  };

  useEffect(() => {
    client.on('notification.getMyTopicList', handleEvent);
    return () => {
      client.off('notification.getMyTopicList');
    };
  }, []);

  const getMyTopicList = async () => {
    const data = await client.notify.getMyCreateTopicList({
      page: 1,
      size: 100,
    });
    console.log(data);
  };

  return (
    <div>
      <button onClick={getMyTopicList}>getMyCreateTopicList</button>
    </div>
  );
};
```

## getMySubscribeTopicList

```tsx
import { useEffect } from 'react';
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'notification.getMySubscribeList') {
      console.log(client.notify.mySubscribeList);
    }
  };

  useEffect(() => {
    client.on('notification.getMySubscribeList', handleEvent);
    return () => {
      client.off('notification.getMySubscribeList');
    };
  }, []);

  const getMySubscribeList = async () => {
    const data = await client.notify.getMySubscribeTopicList({
      page: 1,
      size: 100,
    });
    console.log(data);
  };

  return (
    <div>
      <button onClick={getMySubscribeList}>getMySubscribeTopicList</button>
    </div>
  );
};
```

## Get NotificationList

```tsx
import { useEffect } from 'react';
import { Client } from 'web3-mq';

interface IProps {
  client: Client;
}

export const Child = (props: IProps) => {
  const { client } = props;

  const handleEvent = (event: { type: any }) => {
    if (event.type === 'notification.getList') {
      console.log(client.notify.notificationList);
    }
  };

  useEffect(() => {
    client.on('notification.getList', handleEvent);
    return () => {
      client.off('notification.getList');
    };
  }, []);

  return <div>Notify Test</div>;
};
```
