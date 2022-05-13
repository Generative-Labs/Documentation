---
sidebar_position: 0
---

# Chat

## Basic Usage

The `Chat` component does not inject any UI, so its implementation is fairly simple. Once an instance of the `Chat` client has been created, you pass the client object as a prop to add it to the `ChatContext`.

```tsx
<Chat client={client}>
  <Channel>
    <MessageList />
    <MessageInput />
  </Channel>
</Chat>
```

Any child of the `Chat` component has access to the `ChatContext`. Each React Context in the component library can be accessed with one of our custom hooks, which must be imported individually.

```ts
const { client } = useChatContext();
```
