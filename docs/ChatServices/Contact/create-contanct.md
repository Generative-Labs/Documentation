---
sidebar_position: 0
---

# Create a contract
___
## Create a contract, with specifying ERC20 token or NFT assets
> /contacts

> JWT: Yes

> Call Method: POST

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| recipient_id  | Yes  |  The OID of user who will recipient  |
| erc20s  | Yes  | An array of addresses of the erc20's that creator wants to give recipient |
| amounts  | Yes  |An array of the amount of erc20's that creator wants to give recipient, respectively |
| NFTs  | Yes  |  An array of addresses of the NFTs that creator wants to give recipient  |
| NFTIDs  | Yes  |  An array of arrays of the ids of the NFTs that creator wants to give recipient  |
| expiration  | Yes  |  The time when the transaction would expire  |
| descriptions  | No  |  The descriptions of the transaction |

> Return:

| Parameters  | Required |  Parameters Description|
| ------------- | ------------- |--------|
| code  | Yes  |  result code,0 means success, other code see msg's contents  |
| msg  | Yes  | result description   |
| data  | Yes  | contract details |