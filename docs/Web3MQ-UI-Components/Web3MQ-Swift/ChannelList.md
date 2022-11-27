---
sidebar_position: 1
---

# Channel List

The `ChannelListViewController` is the UI component used to display a list of channels matching the given query.

## Basic Usage

The first step to show the channel list screen in your app is to create `ChannelListViewController`instance:

```swift
// Create a view controller backed by the filter 
let channelListViewController = ChannelListViewController(filter: Filter)
```

## **UI Customization**

### Channel Header

The header of the channel can be configured the same way you would configure it on a `UIViewControlle` object.

```swift
class ViewController: ChannelListViewController {
    /// ...

    override open func setUpAppearance() {
        super.setUpAppearance()
        title = "Chats"
    }

    /// ...
}
```

### Channel List Controller

The channel list component uses the `ChannelListController` to fetch the list of channels matching your query and to stay up-to-date with all changes. In the example above you can see that we are passing a `ChannelListQuery` object to create the controller. Web3MQ APIs allow you to list channels based on your own query and sort.

### **Channel List Query**

The `ChannelListQuery` is the structure used for specifiying the query parameters for fetching the list of channels from Web3MQ backend. It has 4 parameters in it's `init`:

```swift
public init(
        filter: Filter<ChannelListFilterScope>,
        sort: [Sorting<ChannelListSortingKey>] = [],
        pageSize: Int = .channelsPageSize,
        messagesLimit: Int = .messagesPageSize
)
```

Let's dive deep into each one.****

### Filter

Filter is the main parameter for a query. You can define different filters to fetch different sets of channels for a user. Examples of some most commonly used filters:

```swift
// Assume we've already created and configured our ChatClient

// Filter for channels where our user is a member
let filter = Filter<ChannelListFilterScope>.containMembers(userIds: [client.currentUserId!])

// Filter for channels where the name starts with "Group"
let filter = Filter<ChannelListFilterScope>.autocomplete(.name, text: "Group")

// Compound Filter for channels where team is read and our user is a member
let filter = Filter<ChannelListFilterScope>.and([.equal(.team, to: "read"),
                                                 .containMembers(userIds: [client.currentUserId!])])
```

### Sorting

Sorting parameter is used to sort the list of channels returned. By default, Channel List will be sorted by their last message date (or channel creation date, if the channel is empty). Most commonly, you don't need to specify any sorting, Web3MQ handles this. If you'd like, you can create custom sortings, such as:

```swift
// Sorting for always showing most crowded channels first
let sorting: [Sorting<ChannelListSortingKey>] = [.init(key: .memberCount, isAscending: true),
                                                 .init(key: .lastMessageAt, isAscending: true)]
```

### PageSize

Page size is used to specify how many channels the initial page will show. You can specify an integer value for advanced usecases. Most commonly, you don't need to touch this.

### Message Limit

`messagesLimit` is used to specify how many messages the initial fetch will return.