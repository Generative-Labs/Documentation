---
position: 1
---

# User

## User info

Get information about a user specified by their DID.

```swift
let userInfo = try await ChatClient.default.userInfo(did: DID())
```

## Register

Register user by did and password.

```swift
let res: RegisterResult = await ChatClient.default.register(did: DID(type: "", value: ""), password: "")
```

## Private Key

Retrieve PrivateKey by did and password.

```swift
let privateKey = try await ChatClient.default.fetchPrivateKey(did: DID(type: "", value: ""), password: "");
```

## Get `ConnectionInfo` by DID and password

```swift
let user = try await ChatClient.default.connectionInfo(did: DID(type: "", value: ""), password: "")
```

## Get `ConnectionInfo` by DID and privateKey

```swift
let privateKey: Curve25519.Signing.PrivateKey
let user = try await ChatClient.default.connectionInfo(did: DID(type: "", value: ""), privateKey: privateKey)
```

## Permissions

Retrieves the user permissions for the user with the given `userId`.

```swift
let user = try await ChatClient.default.userPermissions(userId: "")
```

## Updating profile

Changes the current user's profile information.

```swift
try await ChatClient.default.changeProfile(nickname: "", avatarUrl: "")
```
