---
position: 1
---

# Group

## Get Group List

Use the `groupList` method to get a list of groups.

```swift
let page = try await ChatClient.default.groupList(pageCount: 1, pageSize: 30)
```

## Create Group

Use the `createGroup` method to create a group.

```swift
let group = try await ChatClient.default.createGroup(groupName: "", avatarUrl: "")
```

## Get Group Members

Use the `groupMemberList` method to get a list of members in a group.

```swift
let members = try await ChatClient.default.groupMemberList(groupId, pageCount: 1， pageSize: 30)
```

## Invite User to Group

Use the `groupInviteUser` method to invite a user to a group.

```swift
try await ChatClient.default.groupInviteUser(userIds, join: "groupId");
```

## Get Group Info

Use the `groupInfo` method to get the information of a group.

```swift
let group = try await ChatClient.default.groupInfo(groupId: "");
```

## Joining Group

comming soon

## Quit Group

comming soon

## Updating group permissions

comming soon
