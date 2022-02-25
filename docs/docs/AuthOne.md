---
sidebar_position: 2
---

# AuthOne


## Auth Flow

### Social Platform auth flow

![image](https://github.com/Generative-Labs/Documentation/blob/main/resources/SocialAuthFlow.jpg)

### MetaMask auth flow

![image](https://github.com/Generative-Labs/Documentation/blob/main/resources/MetaMaskAuthFlow.jpg)


## Python SDK

```python
from authone import AuthOneClient


client = AuthOneClient(app_id, app_secret=your_app_secret)

resp = client.SocialUser.get_userinfo_by_token(token)

respdata = resp.data

print(respdata["user_id"])
print(respdata["user_name"])
print(respdata["email"])
```
