
# SwapChat Client Python SDK

> swapchat client python sdk


## Install

```bash
pip install paho-mqtt
```


## How to use it

- Get access_token from login api [see login api doc](https://docs.web3messaging.online/docs/SwapChat/User/user-login)
- Extract user_id from access_token
- Set client username and password
- Connect to server
- Publish message

## Usage

### Connect to server

```python
import paho.mqtt.client as mqtt

def get_client(client_id):
    mqttc = mqtt.Client(client_id, transport="websockets")
    return mqttc

# Get access_token from login api response
jwt_data = "access token"

# extract user_id from jwt_data
user_id = "your user_id"

client = get_client(user_id)
client.tls_set()
client.username_pw_set(username=user_id, password=jwt_data)

client.connect("msg.web3messaging.online", 443)
```

### Send message

- Get **room_id** from my_rooms api [see api doc](/docs/SwapChat/Room/get-chat-rooms#get-all-rooms-id-that-you-are-participating-in)

```python
import json

# extract user_id from "access_token" from login api response
user_id = "your user_id"

topic = "msg/" + user_id

payload = {
    "from_uid" : user_id,
    "to_room_id" : room_id,
    "msg_contents" : "Hello SwapChat",
    "msg_type" : "text"
}

client.publish(topic, json.dumps(payload))
```

### On connect

> if your want to handler something when client connect succeed

```python
def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    # do your logic here

client.on_connect = on_connect
```


### On message

> The callback for when a PUBLISH message is received from the server.


```python
def on_message(client, userdata, msg):
    print(msg.topic + " " + str(msg.payload))
    # do your logic here

client.on_message = on_message
```
