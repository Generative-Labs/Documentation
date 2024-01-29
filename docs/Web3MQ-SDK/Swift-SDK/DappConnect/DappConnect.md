---
position: 1
---

# DappConnect

## Integrating the SDK

### Prerequisites

Before you run your project, make sure that your development environment is provided with:

- Xcode 11
- iOS 13.0 or later

### Installation

### Swift Package Manager

The [Swift Package Manager](https://swift.org/package-manager/) is a tool for automating the distribution of Swift code and is integrated into the `swift` compiler.

Once you have your Swift package set up, adding Web3MQSDK as a dependency is as easy as adding it to the `dependencies` value of your `Package.swift`.

```swift
dependencies: [
    .package(url: "git@github.com:Generative-Labs/Web3MQ-iOS.git", .upToNextMajor(from: "0.1.0"))
]
```

## Initial the SDK

For an AppId, see detail:  [https://docs.web3mq.com/docs/Web3MQ-API/dapp/create_dapp/](https://docs.web3mq.com/docs/Web3MQ-API/dapp/create_dapp/)  

```swift
import DappConnect

extension DappClient {
  static let shared = DappConnectClient(appId: "{Your AppID}", metadata: AppMetadata)
}


public struct AppMetadata: Codable, Equatable, Hashable {

    /// The name of the app.
    public let name: String?

    /// A brief textual description of the app that can be displayed to peers.
    public let description: String?

    /// The URL string that identifies the official domain of the app.
    public let url: String?

    /// An array of URL strings pointing to the icon assets on the web.
    public let icons: [String]?

    /// Redirect links which could be manually used on wallet side
    public let redirect: String?
}

```

## For Wallet

### Receiving Session proposal

```swift
// 1. register a session proposal subsciber  
DappConnectClient.shared.sessionProposalPublisher.sink { proposal in 
  // handle the proposal 
  
  // 1.you should present a model to show that proposal, and user can 
  // choose approve or reject.
  
  // 2. in case approve. you should prepare your `SessionNamespaces` which is 
  // the namespaces your wallet supports.
  
  try await DappConnectClient.shared.approve(proposal.id, sessionNamespaces)

  // 3. in case reject.
  try await DappConnectClient.shared.reject(proposal.id)

}

// when receives a deeplink 
let uri = DappMQURI(string: urlString)
let DappConnectClient.shared.pair(URI: uri)
```

### Receiving Request

```swift
DappConnectClient.shared.requestPublishser.sink { request in 
  // handle the request 
  switch request.method {
    case "personal_sign": 
     // as a sign request, the params should be a string array 
     // which presents [message, address, password]
     let params = try? request.params.get([String].self)
     
     // call your sign function and get the signature
     let signature = yourSign(params)     

     // then send response 
     DappConnectClient.shared.sendResponse(froRequest: requeset, result: signature)
    default:
     break 
  }
}
```

### Sending response

```swift
try await DappConnectClient.shared.sendResponse(forRequest: request, result: AnyCodable)
```

## For Dapp

### Sending Session Proposal

Before you can send request to the wallet, you need to offer a `SessionProposal` to the wallet by calling this:

```swift
let session = try await DappConnectClient.shared.connectWallet()
```

Above code will generates a `SessionProposal` (which supports CAIPs ) and send it to a wallet via deepLink. If wallet approved the proposal, the function returns with a `Session` object, otherwise throws  `RPCError` which contains a error code and message. If wallet side did nothing for 3 minutes, the function throws a `TimeoutError` .

### Session List

```swift
let sessions = DappConnectClient.shared.sessions
```

### Sending Request

```swift
// 1. prepare your request content, could be any obejct which inherits `Codable`
let params = "just a string"
let method = "anyname"

// get the topic from `session.topic`
let topic = ""
try await DappConnectClient.shared.sendRequest(method: method, params: Anycodable(params), topic: topic)
```

### Receiving Response

```swift
DappConnectClient.shared.responsePublisher.sink { response in 
  // handle the repsonse 
}
```

### Personal_sign

we provider a convince function for `personal_sign` , so you can easily get the signature.

```swift
do {
  let signature = try await DappConnectClient.shared.personalSign(message: message, address: address, password: nil, topic: topic)

} catch is TimeoutError {
   // handle timeout error 

} catch DappMQError.invalidSession {
  // handle sesion expire error 

} catch {
  // handle others error
}
```

### Pending Requests

Get all requests without response. You may need to resend that requests.

```swift
let pendingRequests = DappConnectClient.shared.pendingRequests
```
