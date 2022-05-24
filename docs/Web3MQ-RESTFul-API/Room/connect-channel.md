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
| username  | Yes  |  the username of mqtt client,must be user's OID  |
| password  | Yes  |  the password of mqtt client,must be user's jwt  |

> Return:

None thing

## Send Message

just call MQTT's publish function.
> the topic where message send to is "**msg/+user's OID**"

```Python
msg = Message(...)
client.pub("msg/e324r234r2342",msg)
```


### Message's structure
| Parameters | Required |  Parameters Description|
| ------------- | ------------- |--------|
|from_uid|yes|user' OID who sent the message|
|to_room_id|yes|room's OID which should receivced the message|
|msg_type|yes|one of 'text' and 'sudo_swap_card'|
|msg_contents|yes|if msg_type is 'text',it is pure text,if msg_type is 'sudo_swap_card',see **sudo_swap_card's structure** Please see the notes below this form |
|is_thread|yes|was it a thread,default is no|
|is_opensea_item_thread|yes|was it a OpenSea item,default is no|
|opensea_item_contract_address|yes|if is_opensea_item_thread is true, it should be NFT's contract address|
|opensea_item_token_id|yes|if is_opensea_item_thread is true, it should be NFT's token id|
|opensea_item_name|yes|if is_opensea_item_thread is true, it should be NFT's name|
|opensea_item_description|yes|if is_opensea_item_thread is true, it should be NFT's description|
|opensea_item_image_url|yes|if is_opensea_item_thread is true, it should be NFT's image path|
|belong_to_thread_id|yes|if message was belong to any thread,it should be the thread's OID |
|reply_to_msg_id|yes|if message was reply to any msg,it should be the thread's OID|
|created_at|yes|the unix time stamp when the message sent|
|at_user_ids|yes|default value is empty list []|

> message ACK: if message was sent, the sender will received the message that includes a new parameter "id"


**sudo_swap_card's structure**

```JSON
{
		"orderStatus" : "OPEN",
		"expiryDate" : "2022-05-14, 12:00 AM",
		"creatorAddress" : "0x0f4dc815bccd5da44e6ba06140c710813078510d",
		"recipientAddress" : "",
		"jumpUrl" : "https://sudoswap.xyz/#/swap/0x0f4dc815bccd5da44e6ba06140c710813078510d/1",
		"asset1Data" : [
			{
				"address" : "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
				"type" : "1",
				"amount" : "3.5",
				"imgURL" : "https://zapper.fi/images/WETH-icon.png",
				"name" : "Wrapped Ether",
				"symbol" : "WETH"
			}
		],
		"asset2Data" : [
			{
				"address" : "0x9df8aa7c681f33e442a0d57b838555da863504f3",
				"type" : "2",
				"id" : "1086",
				"amount" : "1",
				"imgURL" : "https://lh3.googleusercontent.com/3cYi9Y9p_ZEPKsIGcMuCnfZTKP3Q6hPDUfkaVMAZbVKRs88NpdOPCepQFMnKIT22Rh2E2Z8IcAYul4JiPhm12nfv0A0zKCUOz9AB=s250",
				"name" : "Pixelated Llama",
				"symbol" : "PXLLMA"
			}
		]
	}
```


##  Subsribe your rooms
> first call [my_rooms](/docs/Web3MQ-RESTFul-API/Room/get-chat-rooms) to get all rooms' id that you are participating in.

```Python
msg = Message(...)
client.subscribe("chat/room_id",msg)
```


##  publish messages to your room


```Python
msg = Message(...)
client.pub("msg/your_user_id",msg)
```