---
position: 6
---

# User

## Methods
| Name | Parameters  | Response |
| --- | --- | --- |
| searchUsers | walletAddress: [string] | [UserInfo](/docs/Web3MQ-SDK/Swift-SDK/Structs/###UserInfo) |
| getMyProfile | none | [UserProfile](/docs/Web3MQ-SDK/Swift-SDK/Structs/#UserProfile) |
| changeProfile | nickname: String, avatarUrl: String | [UserProfile](/docs/Web3MQ-SDK/Swift-SDK/Structs/###UserProfile) |


## Searching Users

search users by wallet addresses 

```swift
let users: [User] = await Client.shared.userManager.searchUsers(keyword: String)
```

## Getting Current User Profile

```swift
let userProfile: [UserProfile] = await Client.shared.userManager.myProfile()
```

## Getting Profile by Did

```swift
let users: [User] = await Client.shared.userManager.userInfo(didId: "didID", didType: "{didType}"])
```

## Updating Profile

```swift
let users: User = await Client.shared.userManager.changeProfile(nickname: "{Nickname}", avatarUrl: "{AvatarUrl}")
```