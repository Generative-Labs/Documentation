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

_Request Headers_

| field                 | Required | headers Description             | example                                     |
| --------------------- | -------- | ------------------------------- | ------------------------------------------- |
| web3mq-request-pubkey | Yes      | your login keyapir's public key | 59daabd77706ba02a97c523513a2ceaed10e4275bd6 |
| didkey                | Yes      | your did_type + ":" + did_value | eth:0xa1b1233fdfde                          |

_Request Payload_

| Parameters in URL | Type   | Required | Parameters Description                               |
| ----------------- | ------ | -------- | ---------------------------------------------------- |
| page              | int    | Yes      | page number                                          |
| size              | int    | Yes      | page size                                            |
| userid            | string | Yes      | userid                                               |
| timestamp         | int    | Yes      | timestamp milliseconds                               |
| web3mq_signature  | string | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Web3MQ-API/signature) |

_web3mq_signature signing rule_

`base64 encode` signature

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
| -topic    |  string    |  Yes   |  `Remove in future` version use `chatid` instead; userid or group id    | 
| -topic_type    | string    |  Yes   |  `Remove in future` version use `chat_type` instead; user or group    | 
| -chatid    | string    |  Yes   |  userid or group id | 
| -chat_type     | string    |  Yes   |  user or group | 
| -chat_name    |  string    |  Yes    | user nickname or group_name | 
| -avatar_url    | string     | Yes   |  user avatar or group avatar | 
| -avatar_base64    |  string    |  Yes   |  user avatar or group avatar | 
| -timestamp     | int   |  Yes   |  last update timestamp | 

```json
{
  "code": 0,
  "msg": "ok",
  "data": {
    "total": 35,
    "result": [
      {
        "topic": "topic id",
        "topic_type": "user",
        "chatid": "topic id",
        "chat_type": "user",
        "chat_name": "user nickname",
        "avatar_url": "",
        "avatar_base64": ""
      },
      {
        "topic": "topic id",
        "topic_type": "group",
        "chatid": "topic id",
        "chat_type": "group",
        "chat_name": "group name",
        "avatar_url": "",
        "avatar_base64": ""
      }
    ]
  }
}
```

## Update my chat

_Request Headers_

| field                 | Required | headers Description             | example                                     |
| --------------------- | -------- | ------------------------------- | ------------------------------------------- |
| web3mq-request-pubkey | Yes      | your login keyapir's public key | 59daabd77706ba02a97c523513a2ceaed10e4275bd6 |
| didkey                | Yes      | your did_type + ":" + did_value | eth:0xa1b1233fdfde                          |

_Request Payload_

> **POST** `/api/chats/`

| Parameters in Body | Type   | Required | Parameters Description                               |
| ------------------ | ------ | -------- | ---------------------------------------------------- |
| userid             | string | Yes      | userid                                               |
| timestamp          | int    | Yes      | timestamp milliseconds                               |
| web3mq_signature   | string | Yes      | use ed25519 `base64 encode` signature [see signing detail](/docs/Web3MQ-API/signature) |
| topic              | string | Yes      | userid or groupid                                    |
| topic_type         | string | Yes      | user or group                                        |

_web3mq_signature signing rule_
`base64 encode` signature

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
