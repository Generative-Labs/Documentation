---
sidebar_position: 0
---

# ChatClient SDK Python


## Install


```bash
pip install swapchat
```

## Usage

```python
import json
from swapchat import get_swapchat_client


def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    # client.subscribe("$SYS/#")

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))


client = get_swapchat_client()
client.on_connect = on_connect
client.on_message = on_message

client.tls_set()

# Get jwt data see https://docs.web3messaging.online/docs/ChatServices/User/user-login
jwt_data = ""
# get user_id from jwt data
user_id = ""
client.username_pw_set(username=user_id, password=jwt_data)

try:
    client.connect("msg.web3messaging.online", 443)
    client.loop_forever()
except:
    print("Failed to connect to server")
    sys.exit(1)


# Get room id see https://docs.web3messaging.online/docs/ChatServices/Rooms/get-chat-rooms
room_id = ""
topic = "msg/" + room_id

payload = {
    "from_uid" : "624546390e62aa416dcdd4ea",
    "to_room_id" : "624c0a390e62aa416dcdd57e",
    "msg_contents" : "Hello",
    "msg_type" : "text"
}


client.publish(topic, json.dumps(payload))
```
