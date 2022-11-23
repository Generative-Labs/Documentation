---
position: 5
---

# Contact

## Methods
| Name | Parameters  | Response |
| --- | --- | --- |
| getContacts | page: Int, size: Int  | [User](/docs/Web3MQ-SDK/Swift-SDK/Structs/###UserInfo) |
| search | keyword: String  | [String] |
| makeFriendRequest | (toUserId: string) | Bool |
| answerRequest | userId: String, action: FriendRequestAction | Bool |
| getFriendRequestsFromCurrentUser | page: Int, size: Int  | [User](/docs/Web3MQ-SDK/Swift-SDK/Structs/###UserInfo) |
| getFriendRequestsFromCurrentUser | page: Int, size: Int  | [User](/docs/Web3MQ-SDK/Swift-SDK/Structs/###UserInfo) |

## Getting Contacts

```swift
let contacts: [User] = await Client.shared.contactManager.contacts(page: 1, size: 20)
```

## Searching Contacts

```swift
let contacts: [User] = await Client.shared.contactManager.search(keyword: "{keyword}")
```

## Sending Friend Request

```swift
let result: Result = await Client.shared.contactManager.makeFriendRequest(to: "{userId}")
```

## Getting Friend Requests From Current User

```swift
let users: [String]= await Client.shared.contactManager.getFriendRequestsFromCurrentUser(page: 0, size: 20)
```

## Getting Received Friend Requests

```swift
let users: [String]= await Client.shared.contactManager.getReceivedFriendRequests(page: 0, size: 20)
```

## Answering Request

```swift
let result: Bool = await Client.shared.contactManager.answerRequest(topicId: "{topicId}", action: .agree)
```