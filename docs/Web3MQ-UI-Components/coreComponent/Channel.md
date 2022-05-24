# Channel

The `Channel` component is a React Context provider that wraps all of the logic, functionality, and UI for an individual chat channel. It provides five separate contexts to its children:

- ChannelStateContext - stateful data (ex: messages or members)
- ChannelActionContext - action handlers (ex: sendMessage or openThread)
- ComponentContext - custom component UI overrides (ex: Avatar or Message)

## Basic Usage

The `Channel` component does not inject any UI, so its implementation is fairly simple and can be handled in one of two ways, both with and without a `ChannelList` component. If you are using a `ChannelList`, do not add a `channel` object as a prop on `Channel`. However in the absence of a `ChannelList`, the `channel` prop is required. By default, the `ChannelList` sets the active `channel` object, which is then injected it into the `ChannelStateContext`, so manual prop passing is not required.

```tsx
<Chat client={client}>
  <ChannelList />
  <Channel>
    <MessageList />
    <MessageInput />
  </Channel>
</Chat>
```

```ts
const { messages } = useChannelStateContext();
const { handleOpenThread } = useChannelActionContext();
const { Message } = useComponentContext();
```
