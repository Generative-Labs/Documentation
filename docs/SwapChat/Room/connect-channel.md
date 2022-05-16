---
sidebar_position: 2
---

# Connect Chat Channel
___
## Connect to a Room's channel by MQTT protocol over Websocket

We recommend that you use Eclipse Paho MQTT client to connect. And you can download the Client SDK for the programming language which you are using from the following link.

[Eclipse Paho MQTT Client](https://www.eclipse.org/paho/index.php?page=downloads.php)

If you have already installed one of the Client SDKs, then you can view the documentation for each SDK from the following links.

[Python MQTT Client](https://www.eclipse.org/paho/index.php?page=clients/python/docs/index.php)

[Java MQTT Client](https://www.eclipse.org/paho/index.php?page=clients/java/index.php)

[JavaScript MQTT Client](https://www.eclipse.org/paho/index.php?page=clients/js/index.php)

[Go MQTT Client](https://www.eclipse.org/paho/index.php?page=clients/golang/index.php)

[C MQTT Client](https://www.eclipse.org/paho/index.php?page=clients/c/index.php)

[C++ MQTT Client](https://www.eclipse.org/paho/index.php?page=clients/cpp/index.php)

[Rust MQTT Client](https://www.eclipse.org/paho/index.php?page=clients/rust/index.php)

[.Net/C# MQTT Client](https://www.eclipse.org/paho/index.php?page=clients/dotnet/index.php)

## MQTT connection parameters

> MQTT endpoint:

- Production env:     **wss://msg.web3messaging.online/mqtt**
- Development env:    **wss://test-msg.web3messaging.online/mqtt**


> JWT: No

> Call Method: WebSocket

| Parameters | Required |  Parameters Description|
| ------------- | ------------- |--------|
| username  | Yes  |  the username of mqtt client,must be user's oid  |
| password  | Yes  |  the password of mqtt client,must be user's jwt  |

> Return:

None thing