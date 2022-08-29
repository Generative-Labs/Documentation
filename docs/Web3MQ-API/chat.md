---
nav:
  title: docs
title: Chat
order: 10
sidebar_position: 10
---

# Chat

> All http post request and response content type are `application/json`

## Chat API list

- Get my chat list
- Update my chat

## Get my chat list

> **GET** `/api/chats/`

| Parameters in URL | Type   | Required | Parameters Description                               |
| ----------------- | ------ | -------- | ---------------------------------------------------- |
| page              | int    | Yes      | page number                                          |
| size              | int    | Yes      | page size                                            |
| userid            | string | Yes      | userid                                               |
| timestamp         | int    | Yes      | timestamp milliseconds                               |
| web3mq_signature  | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature) |
|                   |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + timestamp)

_url query params_

```json
{
  "userid": "your userid",
  "web3mq_signature": "web3mq_signature",
  "timestamp": 1656991509327,
  "page": 1,
  "size": 20
}
```

**response**

| Parameters  | Type   | Always Return | Parameters Description                                      |
| ----------- | ------ | ------------- | ----------------------------------------------------------- |
| code        | int    | Yes           | result code, 0 means success, other code see msg's contents |
| msg         | string | Yes           | result description                                          |
| data        | dict   | Yes           | return includes response info                               |
| -topic      | string | Yes           | userid or group id                                          |
| -topic_type | string | Yes           | user or group                                               |

```json
{
  "code": 0,
  "msg": "ok",
  "data": {
    "total": 35,
    "result": [
      {
        "topic": "topic id",
        "topic_type": "user"
      },
      {
        "topic": "topic id",
        "topic_type": "group"
      }
    ]
  }
}
```

## Update my chat

> **POST** `/api/chats/`

| Parameters in Body | Type   | Required | Parameters Description                               |
| ------------------ | ------ | -------- | ---------------------------------------------------- |
| userid             | string | Yes      | userid                                               |
| timestamp          | int    | Yes      | timestamp milliseconds                               |
| web3mq_signature   | string | Yes      | use ed25519 [see signing detail](/docs/Web3MQ-API/signature) |
| topic              | string | Yes      | userid or groupid                                    |
| topic_type         | string | Yes      | user or group                                        |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(userid + topic + topic_type + timestamp)

```json
{
  "userid": "your userid",
  "web3mq_signature": "web3mq_signature",
  "timestamp": 1656991509327,
  "topic": "userid",
  "topic_type": "user"
}
```

**response**

| Parameters | Type   | Always Return | Parameters Description                                      |
| ---------- | ------ | ------------- | ----------------------------------------------------------- |
| code       | int    | Yes           | result code, 0 means success, other code see msg's contents |
| msg        | string | Yes           | result description                                          |

```json
{
  "code": 0,
  "msg": "ok"
}
```
