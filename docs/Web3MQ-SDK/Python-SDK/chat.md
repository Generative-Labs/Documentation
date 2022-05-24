# Chat

## How to use it

- Get access_token from login function
- Extract user_id from access_token
- Connect to server
- Publish message

## Usage

### Connect to server

```python
import paho.mqtt.client as mqtt

CHAT_SERVER_DOMAIN = "msg.web3messaging.online"
# test env test-msg.web3messaging.online

def get_chat_client(client_id):
    mqttc = mqtt.Client(client_id, transport="websockets")
    return mqttc

# Get access_token from login api response
jwt_data = "access token"

# extract user_id from jwt_data
user_id = "your user_id"

chatclient = get_chat_client(user_id)
chatclient.tls_set()
chatclient.username_pw_set(username=user_id, password=jwt_data)

chatclient.connect(CHAT_SERVER_DOMAIN, 443)
```

### Send message

- Get **room_id** from [Get my_rooms function](/docs/Web3MQ-SDK/Python-SDK/roomapi#get-room-list)

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

chatclient.publish(topic, json.dumps(payload))
```

### On connect

> if your want to handler something when client connect succeed

```python
def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    # do your logic here

chatclient.on_connect = on_connect
```


### On message

> The callback for when a PUBLISH message is received from the server.


```python
def on_message(client, userdata, msg):
    print(msg.topic + " " + str(msg.payload))
    # do your logic here

chatclient.on_message = on_message
```
