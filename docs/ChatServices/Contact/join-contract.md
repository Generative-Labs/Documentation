---
sidebar_position: 1
---

# Join a contract
___
## Join a exists contract as recipient
> /contacts

> JWT: Yes

> Call Method: POST

| Parameters in URL | Required |  Parameters Description|
| ------------- | ------------- |--------|
| contract_id  | Yes  | Contract's OID  |
| erc20s  | Yes  | An array of addresses of the erc20's that creator wants to give recipient |
| amounts  | Yes  |An array of the amount of erc20's that creator wants to give recipient, respectively |
| NFTs  | Yes  |  An array of addresses of the NFTs that creator wants to give recipient  |
| NFTIDs  | Yes  |  An array of arrays of the ids of the NFTs that creator wants to give recipient  |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | the contract's details |