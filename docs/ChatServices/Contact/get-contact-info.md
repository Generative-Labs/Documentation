---
sidebar_position: 1
---

# Get Contact Info
___
## Get an contact's info
> /contacts/<contract_id:string>

> JWT: Yes

> Call Method: DELETE

| Parameters in URL | Required |  Parameters Description|
| ------------- | ------------- |--------|
| contract_id  | Yes  | Contract's OID  |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | the contract's details |