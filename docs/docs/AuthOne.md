---
sidebar_position: 2
---

# AuthOne

## Python SDK

```python
from authone import AuthOneClient


client = AuthOneClient(app_id, app_secret=your_app_secret)

result = client.SocialUser.get_userinfo_by_token(token, signature)

print(result.userid)
print(result.username)
print(result.email)
```
