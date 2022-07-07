---
sidebar_position: 0
---

# Details about Notification
Notification is used to send some important or serious messages to the users. The users can be all followers or a chat room.
___

## Notification' structure
| Parameters | Type | Required |  Parameters Description|
| ---------|------ | ------------- |--------|
|version|int| yes|we only support 1 for now |
|from_uid|string|yes|sender's id|
|to|list|yes|a list of receivers' id,if it will send to all users,then set it to empty list "[]"|
|notification_type|string|yes|one of ["text","image","invitecodes","audio","video","nft","trade","notification"]|
|notification_payload|object|yes|if notification_type is 'text',it is pure text,if notification_type is 'image'/'audio'/'video',it is the URL of the media, for other types, Please see the tables below this form|
|created_at|int|yes|the unix time stamp when the message sent|

___

### trade's structure
| Parameters | Type | Required |  Parameters Description|
| ---------|------ | ------------- |--------|
|platform_name|string|Yes|one of ["sudoswap","swapchat","nifty"], but we only support "sudoswap" for now|

___

### nft's structure
| Parameters | Type | Required |  Parameters Description|
| ---------|------ | ------------- |--------|
|nft_marketplace_name|string|Yes|one of ["openseaio","cryptocom","gamaio","binancecom","ftxcom","onchain"], but we only suport "openseaio" for now|
|nft_chain_type|string|Yes|one of ["ethereum","polygon","solana"]|
|nft_contract_address|string|Yes|NFT's contract address|
|nft_token_id|string|Yes|NFT's token id|
|nft_name|string|Yes|NFT's name|
|nft_description|string|Yes|NFT's description|
|nft_image_url|string|Yes|NFT's image url|

___

### invitecodes' structure
| Parameters | Type | Required |  Parameters Description|
| ---------|------ | ------------- |--------|
|invitecodes|list|Yes|A list of invite code|

___

### article's structure
| Parameters | Type | Required |  Parameters Description|
| ---------|------ | ------------- |--------|
|title|string|Yes|the title of article|
|summary|string|Yes|the summary of article|
|cover_image|string|Yes|the url of cover image|
|details_link|string|Yes|the url of article's link|