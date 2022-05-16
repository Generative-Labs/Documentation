---
sidebar_position: 2
---

# Bind social platform
___
## Bind user's twitter to their account
> /verify_platform

> JWT: Yes

> Call Method: POST



| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| platform  | Yes  |  The platform name, one of follwing values: twitter/facebook/instagram/youtube  |
| data  | Yes  |  The URL of article which include user's ETH wallet address  |

> Return:


```json
{
    "code": 0,
    "msg": "ok",
    "data": null
}
```

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | always return None |
