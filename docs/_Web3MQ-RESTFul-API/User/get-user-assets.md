---
sidebar_position: 4
---

# Get User's assets
The user's digital assets include NFTs, DIDs, etc.
And DIDs means .bit/NameTag/Next.ID
___
## Get user's NFTs
> /users/<user_id>/nfts

> JWT: No

> Call Method: POST

| Parameters  | Type | Required |  Parameters Description|
| ----------|---- | ------------- |--------|
| wallet_address |string | Yes  |  the wallet address which you want to get NFT list  |
| page |int | Yes  |  Pagination parameters, page number  |
| size |int | Yes  |  Pagination parameters, page size  |

<br />

>Return:

<br />

| Parameters  | Type | Always return |  Parameters Description|
| ----------|---- | ------------- |--------|
| total |int | Yes  | Total number of NFTs the address holds|
| assets |list | Yes  | A list of NFT assets, see ***NFT asset object*** for more info |

<br />

### NFT asset object

<br />

A NFT asset object includes two parts: NFT and its quantity

| Parameters  | Type | Always return |  Parameters Description|
| ----------|---- | ------------- |--------|
| nft |object | Yes  | NFT Information, see ***NFT info object*** for more info |
| quantity |int | Yes  | The quantity of NFTs held|


<br />


### NFT info object

<br />

| Parameters  | Type | Always return |  Parameters Description|
| ----------|---- | ------------- |--------|
| blockchain |string | Yes | Name of the blockchain the NFT belongs to |
| collection_name |string | No  | Name of the collection the NFT belongs to |
| collection_slug |string | No  | Slug of the collection the NFT belongs to |
| collection_opensea_slug |string | No  | Opensea Slug of the collection the NFT belongs to |
| contract_address |string | Yes  | Contract address of the collection the NFT belongs to |
| token_id |string | Yes  | The token ID of the NFT |
| name |string | No  | The name of the NFT |
| description |string | No  | The description of the NFT |
| image |string | No  | The url or base64 data of image or video associated with the NFT |
| animation_url |string | No  | The url of animation associated with the NFT |
| owner_addresses |list | No  | List of owner addresses currently holding the NFT. A list of one address if it's an ERC721 NFT. A list of addresses if it's an ERC1155 NFT. |


<br />


> Example of return data

```json
{
  "total": 0,
  "assets": [
    {
      "nft": {
        "blockchain": "ETH",
        "collection_name": "Bored Ape Yacht Club",
        "collection_slug": "bored-ape-yacht-club",
        "collection_opensea_slug": "boredapeyachtclub",
        "contract_address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
        "token_id": "4495",
        "name": "Bored Ape Yacht Club #4495",
        "description": "string",
        "image": "string",
        "animation_url": "string",
        "owner_addresses": [
          "0xcaf1d788c67BdAAC155E7dcC4D64e2004eF651D4"
        ],
        "traits": [
          {
            "type": "Clothes",
            "value": "Service"
          },
          {
            "type": "Eyes",
            "value": "Wide Eyed"
          },
          {
            "type": "Fur",
            "value": "Black"
          }
        ],
        "rarity": {
          "score": 34.72,
          "rank": 1,
          "total": 1000
        }
      },
      "quantity": 1
    }
  ]
}
```