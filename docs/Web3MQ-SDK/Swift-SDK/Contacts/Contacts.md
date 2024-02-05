---
position: 1
---

# Contacts

## Get User Followings

Use the `followingList` method to get a list of users that the current user is following.

```swift
let page = try await ChatClient.default.followingList(pageCount: 1, pageSize: 30)
```

## Get User Followers

Use the `followersList` method to get a list of users who are following the current user.

```swift
let page = try await ChatClient.default.followersList(pageCount: 1, pageSize: 30)
```

## Follow User

Use the `follow` method to follow a user.

```swift
try await ChatClient.default.follow(targetUserId: "userId", message: "");
```

## Unfollow User

Use the `unfollow` method to unfollow a user.

```swift
try await ChatClient.default.unfollow(targetUserId: "userId")
```
