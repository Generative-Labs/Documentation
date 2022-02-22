---
sidebar_position: 2
---

# AuthOne

## Python SDK

```python
from authone import AuthOneClient


client = AuthOneClient(app_id, app_secret=your_app_secret)

resp = client.SocialUser.get_userinfo_by_token(token, signature)

respdata = resp.data

print(respdata["user_id"])
print(respdata["user_name"])
print(respdata["email"])
```
